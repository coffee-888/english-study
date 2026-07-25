// {{SUBJECT}} 测试网站 - 核心逻辑（通用模板）
// 使用方式：把下方 CONFIG 占位符替换为目标科目；题库写在 questions.js，知识模块写在 grammar.js
(function () {
  'use strict';

  // ============ 配置区（按科目替换占位符） ============
  const CONFIG = {
    subject: '中考物理',
    exam: '中考',
    storageKey: 'zhongkao_physics',
    hasKnowledge: true,
    knowledgeLabel: '物理知识',
  };
  CONFIG.examKeyPoint = CONFIG.exam + '重点';

  const ICON_MAP = {
    '声现象': '🔊', '光现象': '🌈', '透镜及其应用': '🔍', '物态变化': '🌡️',
    '机械运动': '🏃', '质量与密度': '⚖️', '力': '💪', '运动和力': '🛞',
    '压强': '🪨', '浮力': '🛟', '功和机械能': '⚡', '简单机械': '🔧',
    '电流和电路': '🔌', '欧姆定律': '📐', '电功率': '💡',
  };
  function topicIcon(name) { return ICON_MAP[name] || '📘'; }

  // 状态
  const state = {
    currentView: 'dashboard',
    quizMode: null, // 'topic' | 'random' | 'wrong'
    quizQuestions: [],
    currentIndex: 0,
    answers: [],
    quizStartTime: 0,
    timerInterval: null,
    selectedOption: null,
    currentTopic: null,
    setupMode: null,
    setupTopicName: null,
    setupCount: 20,
  };

  const els = {};

  function cacheElements() {
    els.navItems = document.querySelectorAll('.nav-item');
    els.views = document.querySelectorAll('.view');
    els.totalQuestions = document.getElementById('total-questions');
    els.dashboardTotal = document.getElementById('dashboard-total');
    els.dashboardAnswered = document.getElementById('dashboard-answered');
    els.dashboardCorrect = document.getElementById('dashboard-correct');
    els.dashboardWrong = document.getElementById('dashboard-wrong');
    els.wrongCount = document.getElementById('wrong-count');
    els.topicPreview = document.getElementById('topic-preview');
    els.topicList = document.getElementById('topic-list');
    els.quizTitle = document.getElementById('quiz-title');
    els.quizSubtitle = document.getElementById('quiz-subtitle');
    els.quizTimer = document.getElementById('quiz-timer');
    els.progressBar = document.getElementById('progress-bar');
    els.questionSource = document.getElementById('question-source');
    els.questionText = document.getElementById('question-text');
    els.options = document.getElementById('options');
    els.answerArea = document.getElementById('answer-area');
    els.answerStatus = document.getElementById('answer-status');
    els.answerExplanation = document.getElementById('answer-explanation');
    els.answerKnowledge = document.getElementById('answer-knowledge');
    els.btnNext = document.getElementById('btn-next');
    els.btnSubmitQuiz = document.getElementById('btn-submit-quiz');
    els.btnQuit = document.getElementById('btn-quit');
    els.resultScore = document.getElementById('result-score');
    els.resultTotal = document.getElementById('result-total');
    els.resultRate = document.getElementById('result-rate');
    els.resultTime = document.getElementById('result-time');
    els.resultDetail = document.getElementById('result-detail');
    els.resultDetailList = document.getElementById('result-detail-list');
    els.btnReview = document.getElementById('btn-review');
    els.btnRetry = document.getElementById('btn-retry');
    els.btnBackHome = document.getElementById('btn-back-home');
    els.wrongbookList = document.getElementById('wrongbook-list');
    els.btnRedoWrong = document.getElementById('btn-redo-wrong');
    els.btnClearWrong = document.getElementById('btn-clear-wrong');
    els.statsTotal = document.getElementById('stats-total');
    els.statsAnswered = document.getElementById('stats-answered');
    els.statsCorrect = document.getElementById('stats-correct');
    els.statsWrong = document.getElementById('stats-wrong');
    els.topicStats = document.getElementById('topic-stats');
    els.grammarTopics = document.getElementById('grammar-topics');
    els.grammarContent = document.getElementById('grammar-content');
    els.modalOverlay = document.getElementById('modal-setup');
    els.modalTitle = document.getElementById('modal-setup-title');
    els.modalDesc = document.getElementById('modal-setup-desc');
    els.modalCountSlider = document.getElementById('modal-count-slider');
    els.modalCountDisplay = document.getElementById('modal-count-display');
    els.modalPresets = document.getElementById('modal-presets');
    els.modalStartBtn = document.getElementById('modal-start-btn');
    els.modalCancelBtn = document.getElementById('modal-cancel-btn');
  }

  // 工具函数
  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  // localStorage 错题本 / 统计
  const STORAGE_KEY = CONFIG.storageKey + '_wrongbook';
  const STATS_KEY = CONFIG.storageKey + '_stats';

  function getWrongBook() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveWrongBook(wb) { localStorage.setItem(STORAGE_KEY, JSON.stringify(wb)); }

  function addToWrongBook(question, selected) {
    const wb = getWrongBook();
    if (wb.some(item => String(item.id) === String(question.id))) return;
    wb.push({
      id: question.id, question: question.question, options: question.options,
      answer: question.answer, explanation: question.explanation,
      knowledge: question.knowledge, topic: question.topic,
      subTopic: question.subTopic, source: question.source,
      wrongAnswer: selected, addedAt: Date.now(),
    });
    saveWrongBook(wb);
  }

  // 关键修复：题目 id 可能是数字，dataset.id 是字符串，必须统一转字符串比较
  function removeFromWrongBook(questionId) {
    const target = String(questionId);
    const wb = getWrongBook().filter(item => String(item.id) !== target);
    saveWrongBook(wb);
  }

  function getStats() {
    try { return JSON.parse(localStorage.getItem(STATS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveStats(s) { localStorage.setItem(STATS_KEY, JSON.stringify(s)); }

  function recordAnswer(question, selected, correct) {
    const stats = getStats();
    if (!stats.byTopic) stats.byTopic = {};
    if (!stats.total) stats.total = { answered: 0, correct: 0 };
    const key = question.topic;
    if (!stats.byTopic[key]) stats.byTopic[key] = { answered: 0, correct: 0 };
    stats.total.answered += 1;
    stats.byTopic[key].answered += 1;
    if (correct) { stats.total.correct += 1; stats.byTopic[key].correct += 1; }
    saveStats(stats);
  }

  // 视图切换
  function switchView(name) {
    state.currentView = name;
    els.views.forEach(v => v.classList.remove('active'));
    const el = document.getElementById(`view-${name}`);
    if (el) el.classList.add('active');
    els.navItems.forEach(n => {
      n.classList.toggle('active', n.dataset.view === name ||
        (name === 'quiz' && n.dataset.view === 'topics') ||
        (name === 'result' && n.dataset.view === 'topics'));
    });
    window.scrollTo(0, 0);
  }

  // 专题数据：从 questions 自动推导（保持首次出现顺序）
  function getTopics() {
    const seen = [];
    const map = {};
    questions.forEach(q => {
      if (!map[q.topic]) { map[q.topic] = true; seen.push(q.topic); }
    });
    return seen.map(name => ({
      name,
      icon: topicIcon(name),
      sub: `${getTopicCount(name)} 题`,
    }));
  }
  function getTopicCount(name) {
    return questions.filter(q => q.topic === name).length;
  }

  function renderTopicCards(container, clickHandler) {
    const stats = getStats();
    container.innerHTML = '';
    getTopics().forEach(topic => {
      const count = getTopicCount(topic.name);
      const ts = stats.byTopic && stats.byTopic[topic.name];
      const answered = ts ? ts.answered : 0;
      const progress = count > 0 ? Math.min((answered / count) * 100, 100) : 0;
      const card = document.createElement('div');
      card.className = 'topic-card';
      card.innerHTML = `
        <div class="topic-icon">${topic.icon}</div>
        <h3>${topic.name}</h3>
        <p>${topic.sub}</p>
        <p style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${count} 题 · 已做 ${answered}</p>
        <div class="topic-progress"><div class="topic-progress-bar" style="width:${progress}%"></div></div>
      `;
      card.addEventListener('click', () => clickHandler(topic.name));
      container.appendChild(card);
    });
  }

  // ==================== 选题数弹窗 ====================
  function showSetupModal(mode, topicName) {
    state.setupMode = mode;
    state.setupTopicName = topicName;
    let maxCount, defaultCount, presets, title, desc;
    if (mode === 'topic') {
      const tq = questions.filter(q => q.topic === topicName);
      maxCount = Math.min(tq.length, 200);
      defaultCount = Math.min(20, maxCount);
      presets = [10, 20, 30, 50, maxCount].filter(v => v <= maxCount && v > 0);
      title = `${topicName} 专项练习`;
      desc = `该专题共有 ${tq.length} 题，选择本次练习题数`;
    } else {
      maxCount = Math.min(questions.length, 200);
      defaultCount = Math.min(50, maxCount);
      presets = [20, 30, 50, 80, 100].filter(v => v <= maxCount);
      title = '随机测试';
      desc = `题库共 ${questions.length} 题，选择本次测试题数`;
    }
    presets = [...new Set(presets)].sort((a, b) => a - b);
    state.setupCount = defaultCount;
    els.modalTitle.textContent = title;
    els.modalDesc.textContent = desc;
    els.modalCountSlider.min = 5;
    els.modalCountSlider.max = maxCount;
    els.modalCountSlider.value = defaultCount;
    els.modalCountSlider.step = 5;
    els.modalCountDisplay.textContent = defaultCount;
    els.modalPresets.innerHTML = '';
    presets.forEach(count => {
      const btn = document.createElement('button');
      btn.className = 'preset-btn' + (count === defaultCount ? ' active' : '');
      btn.textContent = count === maxCount ? '全部' : count + '题';
      btn.addEventListener('click', () => {
        state.setupCount = count;
        els.modalCountSlider.value = count;
        els.modalCountDisplay.textContent = count;
        els.modalPresets.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
      els.modalPresets.appendChild(btn);
    });
    els.modalOverlay.classList.remove('hidden');
  }
  function hideSetupModal() { els.modalOverlay.classList.add('hidden'); }
  function onModalSliderChange() {
    const val = parseInt(els.modalCountSlider.value);
    state.setupCount = val;
    els.modalCountDisplay.textContent = val;
    els.modalPresets.querySelectorAll('.preset-btn').forEach(b => {
      const bv = parseInt(b.textContent.replace('题', '').replace('全部', '0'));
      const active = (b.textContent === '全部' && val === parseInt(els.modalCountSlider.max)) || bv === val;
      b.classList.toggle('active', active);
    });
  }
  function onModalStart() {
    const count = state.setupCount;
    if (state.setupMode === 'topic') {
      const tq = shuffle(questions.filter(q => q.topic === state.setupTopicName));
      state.currentTopic = state.setupTopicName;
      startQuiz(tq.slice(0, Math.min(count, tq.length)), 'topic');
    } else {
      startQuiz(shuffle(questions).slice(0, Math.min(count, questions.length)), 'random');
    }
    hideSetupModal();
  }

  // ==================== 练习流程 ====================
  function onTopicCardClick(name) {
    const tq = questions.filter(q => q.topic === name);
    if (tq.length === 0) return;
    showSetupModal('topic', name);
  }
  function onRandomTestClick() { showSetupModal('random', null); }
  function startWrongRedo() {
    const wb = getWrongBook();
    if (wb.length === 0) { alert('错题本为空，先去练习吧！'); return; }
    startQuiz(wb.map(item => ({
      id: item.id, topic: item.topic, subTopic: item.subTopic, source: item.source,
      question: item.question, options: item.options, answer: item.answer,
      explanation: item.explanation, knowledge: item.knowledge,
    })), 'wrong');
  }
  function startQuiz(qs, mode) {
    state.quizMode = mode;
    state.quizQuestions = qs;
    state.currentIndex = 0;
    state.answers = [];
    state.selectedOption = null;
    state.quizStartTime = Date.now();
    els.quizTitle.textContent = mode === 'topic' ? `${state.currentTopic}专项练习`
      : mode === 'random' ? '随机测试' : '错题重做';
    switchView('quiz');
    startTimer();
    renderQuestion();
  }
  function startTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      const s = Math.floor((Date.now() - state.quizStartTime) / 1000);
      els.quizTimer.textContent = `⏱ ${formatTime(s)}`;
    }, 1000);
  }
  function stopTimer() { clearInterval(state.timerInterval); }

  function renderQuestion() {
    const q = state.quizQuestions[state.currentIndex];
    const total = state.quizQuestions.length;
    els.quizSubtitle.textContent = `第 ${state.currentIndex + 1} 题 / 共 ${total} 题`;
    els.progressBar.style.width = `${((state.currentIndex + 1) / total) * 100}%`;
    els.questionSource.textContent = `${q.topic} · ${q.subTopic}${q.source ? ' · ' + q.source : ''}`;
    els.questionText.innerHTML = formatQuestion(q.question);
    els.answerArea.classList.add('hidden');
    els.btnNext.classList.add('hidden');
    els.btnSubmitQuiz.classList.add('hidden');
    els.options.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const el = document.createElement('div');
      el.className = 'option';
      el.dataset.index = idx;
      el.innerHTML = `<span class="option-key">${String.fromCharCode(65 + idx)}</span><span class="option-text">${opt}</span>`;
      el.addEventListener('click', () => selectOption(idx));
      els.options.appendChild(el);
    });
    state.selectedOption = null;
  }
  function formatQuestion(text) { return text.replace(/_{2,}/g, '<span class="blank">____</span>'); }

  function selectOption(index) {
    if (state.selectedOption !== null) return;
    state.selectedOption = index;
    const q = state.quizQuestions[state.currentIndex];
    const correct = index === q.answer;
    els.options.querySelectorAll('.option').forEach((el, idx) => {
      el.classList.add('disabled');
      if (idx === q.answer) el.classList.add('correct');
      if (idx === index && idx !== q.answer) el.classList.add('wrong');
      if (idx === index) el.classList.add('selected');
    });
    state.answers.push({ questionId: q.id, selected: index, correct });
    recordAnswer(q, index, correct);
    if (!correct) addToWrongBook(q, index); else removeFromWrongBook(q.id);
    els.answerArea.classList.remove('hidden');
    els.answerStatus.className = 'answer-status ' + (correct ? 'correct' : 'wrong');
    els.answerStatus.textContent = correct ? '✅ 回答正确' : '❌ 回答错误';
    els.answerExplanation.textContent = q.explanation;
    els.answerKnowledge.textContent = `考点：${q.knowledge || q.subTopic}`;
    if (state.currentIndex < state.quizQuestions.length - 1) els.btnNext.classList.remove('hidden');
    else els.btnSubmitQuiz.classList.remove('hidden');
    updateDashboard();
  }
  function nextQuestion() { state.currentIndex += 1; renderQuestion(); }
  function submitQuiz() {
    stopTimer();
    const total = state.quizQuestions.length;
    const correct = state.answers.filter(a => a.correct).length;
    const rate = total > 0 ? Math.round((correct / total) * 100) : 0;
    const seconds = Math.floor((Date.now() - state.quizStartTime) / 1000);
    els.resultScore.textContent = correct;
    els.resultTotal.textContent = total;
    els.resultRate.textContent = `正确率 ${rate}%`;
    els.resultTime.textContent = `用时 ${formatTime(seconds)}`;
    els.resultDetail.classList.add('hidden');
    switchView('result');
    updateDashboard();
  }
  function renderResultDetail() {
    els.resultDetail.classList.remove('hidden');
    els.resultDetailList.innerHTML = '';
    state.answers.forEach((ans, idx) => {
      const q = state.quizQuestions[idx];
      const item = document.createElement('div');
      item.className = 'result-item';
      item.innerHTML = `
        <div class="result-item-header">
          <span class="result-item-tag ${ans.correct ? 'correct' : 'wrong'}">${ans.correct ? '正确' : '错误'}</span>
          <span style="font-size:13px;color:var(--text-secondary);">${q.topic} · ${q.subTopic}</span>
        </div>
        <div class="question-text" style="font-size:15px;margin-bottom:8px;">${formatQuestion(q.question)}</div>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:8px;">
          你的答案：${String.fromCharCode(65 + ans.selected)} · 正确答案：${String.fromCharCode(65 + q.answer)}
        </p>
        <p style="font-size:14px;color:var(--text-secondary);">${q.explanation}</p>
      `;
      els.resultDetailList.appendChild(item);
    });
  }

  // ==================== 错题本 ====================
  function renderWrongBook() {
    const wb = getWrongBook();
    els.wrongCount.textContent = wb.length;
    els.wrongbookList.innerHTML = '';
    if (wb.length === 0) {
      els.wrongbookList.innerHTML = `<div class="empty-state"><div class="icon">🎉</div><p>暂无错题，继续加油！</p></div>`;
      return;
    }
    wb.forEach(item => {
      const div = document.createElement('div');
      div.className = 'wrongbook-item';
      div.innerHTML = `
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;">${item.topic} · ${item.subTopic} · ${item.source || '精选题库'}</div>
        <div class="question-text">${formatQuestion(item.question)}</div>
        <div class="answer-row">
          <span>你的答案：<strong class="wrong-answer">${String.fromCharCode(65 + item.wrongAnswer)}. ${item.options[item.wrongAnswer]}</strong></span>
          <span>正确答案：<strong>${String.fromCharCode(65 + item.answer)}. ${item.options[item.answer]}</strong></span>
        </div>
        <div class="explanation">${item.explanation}</div>
        <div class="wrongbook-actions">
          <button class="btn-remove-wrong" data-id="${item.id}">移出错题</button>
        </div>
      `;
      div.querySelector('.btn-remove-wrong').addEventListener('click', (e) => {
        e.stopPropagation();
        removeFromWrongBook(e.currentTarget.dataset.id);
        renderWrongBook();
        updateDashboard();
      });
      els.wrongbookList.appendChild(div);
    });
  }

  // 统计页
  function renderStats() {
    const stats = getStats();
    const total = questions.length;
    const answered = stats.total ? stats.total.answered : 0;
    const correct = stats.total ? stats.total.correct : 0;
    const rate = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const wrong = getWrongBook().length;
    els.statsTotal.textContent = total;
    els.statsAnswered.textContent = answered;
    els.statsCorrect.textContent = rate + '%';
    els.statsWrong.textContent = wrong;
    els.topicStats.innerHTML = '<h3>各专题掌握情况</h3>';
    getTopics().forEach(topic => {
      const ts = stats.byTopic && stats.byTopic[topic.name];
      const tAns = ts ? ts.answered : 0;
      const tCor = ts ? ts.correct : 0;
      const tRate = tAns > 0 ? Math.round((tCor / tAns) * 100) : 0;
      const count = getTopicCount(topic.name);
      const row = document.createElement('div');
      row.className = 'topic-stat-row';
      row.innerHTML = `
        <div class="topic-stat-info"><h4>${topic.icon} ${topic.name}</h4><p>${topic.sub}</p></div>
        <div class="topic-stat-numbers"><div class="rate">${tRate}%</div><div class="count">已做 ${tAns} / ${count} 题</div></div>
      `;
      els.topicStats.appendChild(row);
    });
  }

  function updateDashboard() {
    const stats = getStats();
    const total = questions.length;
    const answered = stats.total ? stats.total.answered : 0;
    const correct = stats.total ? stats.total.correct : 0;
    const rate = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const wrong = getWrongBook().length;
    els.totalQuestions.textContent = total;
    els.dashboardTotal.textContent = total;
    els.dashboardAnswered.textContent = answered;
    els.dashboardCorrect.textContent = rate + '%';
    els.dashboardWrong.textContent = wrong;
    els.wrongCount.textContent = wrong;
    renderTopicCards(els.topicPreview, onTopicCardClick);
    renderTopicCards(els.topicList, onTopicCardClick);
  }

  // ==================== 知识模块 ====================
  function renderGrammar() {
    if (!CONFIG.hasKnowledge || typeof grammarData === 'undefined' || !grammarData.length) return;
    els.grammarTopics.innerHTML = '';
    grammarData.forEach((t, idx) => {
      const chip = document.createElement('button');
      chip.className = 'grammar-chip' + (idx === 0 ? ' active' : '');
      chip.textContent = `${t.icon} ${t.topic}`;
      chip.addEventListener('click', () => {
        els.grammarTopics.querySelectorAll('.grammar-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderGrammarTopic(t);
      });
      els.grammarTopics.appendChild(chip);
    });
    renderGrammarTopic(grammarData[0]);
  }
  function renderGrammarTopic(t) {
    els.grammarContent.innerHTML = '';
    const header = document.createElement('div');
    header.className = 'grammar-topic-header';
    header.innerHTML = `<h3>${t.icon} ${t.topic}</h3><span class="grammar-count">${t.points.length} 个知识点</span>`;
    els.grammarContent.appendChild(header);
    const nl2br = s => String(s).replace(/\n/g, '<br>');
    t.points.forEach(point => {
      const card = document.createElement('div');
      card.className = 'grammar-point';
      const keyTag = point.key ? `<span class="grammar-key-tag">${CONFIG.examKeyPoint}</span>` : '';
      let examHtml = '';
      (point.pastExam || []).forEach(ex => {
        let opts = '';
        if (ex.options && ex.options.length) {
          opts = '<div class="exam-options">' + ex.options.map((o, i) =>
            `<span class="exam-opt${i === ex.answer ? ' correct' : ''}">${String.fromCharCode(65 + i)}. ${o}</span>`).join('') + '</div>';
        }
        examHtml += `
          <div class="exam-item">
            <div class="exam-meta">📍 ${ex.year} 年 · ${ex.province}中考</div>
            <div class="exam-q">${ex.q}</div>${opts}
            <div class="exam-ans">✅ 答案：${String.fromCharCode(65 + ex.answer)}　💡 解析：${ex.explain}</div>
          </div>`;
      });
      card.innerHTML = `
        <h4 class="grammar-point-title">${point.title} ${keyTag}</h4>
        <div class="grammar-field grammar-rules"><span class="grammar-label">📖 完整规则</span><p>${nl2br(point.rules)}</p></div>
        <div class="grammar-field grammar-keypoints"><span class="grammar-label">📌 关键知识点</span><p>${nl2br(point.keyPoints)}</p></div>
        <div class="grammar-field"><span class="grammar-label">💡 示例</span><p>${nl2br(point.example)}</p></div>
        <div class="grammar-field grammar-error"><span class="grammar-label">⚠️ 常见易错点</span><p>${nl2br(point.errorProne)}</p></div>
        <div class="grammar-field grammar-high"><span class="grammar-label">🔥 高频考点</span><p>${nl2br(point.highFreq)}</p></div>
        <div class="grammar-field grammar-exam"><span class="grammar-label">📝 历年真题</span>${examHtml}</div>
      `;
      els.grammarContent.appendChild(card);
    });
  }

  // ==================== 事件绑定 ====================
  function bindEvents() {
    els.navItems.forEach(item => {
      item.addEventListener('click', () => {
        const view = item.dataset.view;
        if (view === 'random') { onRandomTestClick(); return; } // 随机测试弹窗选题数，不切视图
        if (view === 'wrongbook') renderWrongBook();
        if (view === 'stats') renderStats();
        if (view === 'grammar') renderGrammar();
        if (view === 'dashboard') updateDashboard();
        switchView(view);
      });
    });
    document.getElementById('btn-random-quick').addEventListener('click', onRandomTestClick);
    document.getElementById('btn-topics-quick').addEventListener('click', () => switchView('topics'));
    els.modalCountSlider.addEventListener('input', onModalSliderChange);
    els.modalStartBtn.addEventListener('click', onModalStart);
    els.modalCancelBtn.addEventListener('click', hideSetupModal);
    els.btnNext.addEventListener('click', nextQuestion);
    els.btnSubmitQuiz.addEventListener('click', submitQuiz);
    els.btnQuit.addEventListener('click', () => {
      if (confirm('确定要退出当前测试吗？进度将不会保存。')) { stopTimer(); switchView('dashboard'); updateDashboard(); }
    });
    els.btnReview.addEventListener('click', renderResultDetail);
    els.btnRetry.addEventListener('click', () => {
      if (state.quizMode === 'topic') showSetupModal('topic', state.currentTopic);
      else if (state.quizMode === 'random') onRandomTestClick();
      else if (state.quizMode === 'wrong') startWrongRedo();
    });
    els.btnBackHome.addEventListener('click', () => switchView('dashboard'));
    els.btnRedoWrong.addEventListener('click', startWrongRedo);
    els.btnClearWrong.addEventListener('click', () => {
      if (confirm('确定要清空错题本吗？此操作不可恢复。')) { localStorage.removeItem(STORAGE_KEY); renderWrongBook(); updateDashboard(); }
    });
  }

  function init() {
    cacheElements();
    bindEvents();
    updateDashboard();
    switchView('dashboard');
  }
  document.addEventListener('DOMContentLoaded', init);
})();
