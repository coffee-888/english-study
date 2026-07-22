// 中考英语语法测试 - 核心逻辑
(function () {
  'use strict';

  // 状态
  const state = {
    currentView: 'dashboard',
    quizMode: null, // 'topic' | 'random' | 'wrong'
    quizQuestions: [],
    currentIndex: 0,
    answers: [], // { questionId, selected, correct, timeSpent }
    quizStartTime: 0,
    timerInterval: null,
    selectedOption: null,
    currentTopic: null,
    // 弹窗状态
    setupMode: null, // 'topic' | 'random'
    setupTopicName: null,
    setupCount: 20,
  };

  // DOM 元素缓存
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
    // 弹窗元素
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

  // localStorage 错题本
  const STORAGE_KEY = 'zhongkao_grammar_wrongbook';

  function getWrongBook() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveWrongBook(wrongBook) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wrongBook));
  }

  function addToWrongBook(question, selected) {
    const wrongBook = getWrongBook();
    const exists = wrongBook.some(item => item.id === question.id);
    if (!exists) {
      wrongBook.push({
        id: question.id,
        question: question.question,
        options: question.options,
        answer: question.answer,
        explanation: question.explanation,
        knowledge: question.knowledge,
        topic: question.topic,
        subTopic: question.subTopic,
        source: question.source,
        wrongAnswer: selected,
        addedAt: Date.now(),
      });
      saveWrongBook(wrongBook);
    }
  }

  function removeFromWrongBook(questionId) {
    const targetId = String(questionId);
    const wrongBook = getWrongBook().filter(item => String(item.id) !== targetId);
    saveWrongBook(wrongBook);
  }

  // 统计数据
  function getStats() {
    try {
      return JSON.parse(localStorage.getItem('zhongkao_grammar_stats')) || {};
    } catch (e) {
      return {};
    }
  }

  function saveStats(stats) {
    localStorage.setItem('zhongkao_grammar_stats', JSON.stringify(stats));
  }

  function recordAnswer(question, selected, correct) {
    const stats = getStats();
    if (!stats.byTopic) stats.byTopic = {};
    if (!stats.total) stats.total = { answered: 0, correct: 0 };

    const topicKey = question.topic;
    if (!stats.byTopic[topicKey]) {
      stats.byTopic[topicKey] = { answered: 0, correct: 0 };
    }

    stats.total.answered += 1;
    stats.byTopic[topicKey].answered += 1;
    if (correct) {
      stats.total.correct += 1;
      stats.byTopic[topicKey].correct += 1;
    }
    saveStats(stats);
  }

  // 视图切换
  function switchView(viewName) {
    state.currentView = viewName;
    els.views.forEach(v => v.classList.remove('active'));
    const viewEl = document.getElementById(`view-${viewName}`);
    if (viewEl) viewEl.classList.add('active');
    els.navItems.forEach(n => {
      n.classList.toggle('active', n.dataset.view === viewName ||
        (viewName === 'quiz' && n.dataset.view === 'topics') ||
        (viewName === 'result' && n.dataset.view === 'topics'));
    });
    window.scrollTo(0, 0);
  }

  // 专题数据
  const topicMeta = [
    { name: '名词', icon: '🏷️', sub: '专有/普通、可数/不可数、复数、所有格' },
    { name: '冠词', icon: '🔤', sub: '不定冠词、定冠词、零冠词' },
    { name: '代词', icon: '👤', sub: '人称、指示、疑问、不定代词' },
    { name: '数词', icon: '🔢', sub: '基数、序数、时间日期、分数小数等' },
    { name: '形容词', icon: '🌈', sub: '比较级、最高级、原级用法' },
    { name: '副词', icon: '⚡', sub: '比较级、最高级、原级用法' },
    { name: '连词', icon: '🔗', sub: '并列、转折、选择、因果、从属' },
    { name: '介词', icon: '📍', sub: '时间、地点、方式、原因、固定搭配' },
    { name: '句子成分', icon: '🏗️', sub: '主谓宾表定状补' },
    { name: '句型', icon: '📐', sub: '五大基本句型、There be、被动语态' },
    { name: '简单句', icon: '✅', sub: '肯定/否定/疑问、感叹、祈使' },
    { name: '复合句', icon: '📚', sub: '宾语从句、定语从句、状语从句' },
    { name: '动词', icon: '🏃', sub: '实义、系动、助动、情态、非谓语' },
    { name: '动词时态', icon: '⏰', sub: '各时态构成、标志词、will/be going to' },
    { name: '动词语态', icon: '♻️', sub: '现在/过去完成、进行、过去将来' },
  ];

  function getTopicCount(topicName) {
    return questions.filter(q => q.topic === topicName).length;
  }

  // 渲染专题卡片
  function renderTopicCards(container, clickHandler) {
    container.innerHTML = '';
    topicMeta.forEach(topic => {
      const count = getTopicCount(topic.name);
      const stats = getStats();
      const topicStat = stats.byTopic && stats.byTopic[topic.name];
      const answered = topicStat ? topicStat.answered : 0;
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

  // ==================== 弹窗：选题数 ====================
  function showSetupModal(mode, topicName) {
    state.setupMode = mode;
    state.setupTopicName = topicName;

    let maxCount, defaultCount, presets, title, desc;

    if (mode === 'topic') {
      const topicQuestions = questions.filter(q => q.topic === topicName);
      maxCount = Math.min(topicQuestions.length, 200);
      defaultCount = Math.min(20, maxCount);
      presets = [10, 20, 30, 50, maxCount].filter(v => v <= maxCount && v > 0);
      title = `${topicName} 专项练习`;
      desc = `该专题共有 ${topicQuestions.length} 题，选择本次练习题数`;
    } else {
      maxCount = Math.min(questions.length, 200);
      defaultCount = Math.min(50, maxCount);
      presets = [20, 30, 50, 80, 100].filter(v => v <= maxCount);
      title = '随机测试';
      desc = `题库共 ${questions.length} 题，选择本次测试题数`;
    }

    // Remove duplicates from presets
    presets = [...new Set(presets)].sort((a, b) => a - b);

    state.setupCount = defaultCount;

    els.modalTitle.textContent = title;
    els.modalDesc.textContent = desc;
    els.modalCountSlider.min = 5;
    els.modalCountSlider.max = maxCount;
    els.modalCountSlider.value = defaultCount;
    els.modalCountSlider.step = 5;
    els.modalCountDisplay.textContent = defaultCount;

    // 渲染预设按钮
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

  function hideSetupModal() {
    els.modalOverlay.classList.add('hidden');
  }

  function onModalSliderChange() {
    const val = parseInt(els.modalCountSlider.value);
    state.setupCount = val;
    els.modalCountDisplay.textContent = val;
    // 更新预设按钮激活状态
    els.modalPresets.querySelectorAll('.preset-btn').forEach(b => {
      const btnVal = parseInt(b.textContent.replace('题', '').replace('全部', '0'));
      const isActive = (b.textContent === '全部' && val === parseInt(els.modalCountSlider.max)) ||
                       btnVal === val;
      b.classList.toggle('active', isActive);
    });
  }

  function onModalStart() {
    const count = state.setupCount;
    if (state.setupMode === 'topic') {
      const topicQuestions = shuffle(questions.filter(q => q.topic === state.setupTopicName));
      state.currentTopic = state.setupTopicName;
      startQuiz(topicQuestions.slice(0, Math.min(count, topicQuestions.length)), 'topic');
    } else {
      const selected = shuffle(questions).slice(0, Math.min(count, questions.length));
      startQuiz(selected, 'random');
    }
    hideSetupModal();
  }

  function onModalCancel() {
    hideSetupModal();
  }

  // ==================== 练习流程 ====================

  // 点击专题卡片 → 弹窗选题数
  function onTopicCardClick(topicName) {
    const topicQuestions = questions.filter(q => q.topic === topicName);
    if (topicQuestions.length === 0) return;
    showSetupModal('topic', topicName);
  }

  // 开始随机测试 → 弹窗选题数
  function onRandomTestClick() {
    showSetupModal('random', null);
  }

  // 错题重做
  function startWrongRedo() {
    const wrongBook = getWrongBook();
    if (wrongBook.length === 0) {
      alert('错题本为空，先去练习吧！');
      return;
    }
    const wrongQuestions = wrongBook.map(item => ({
      id: item.id,
      topic: item.topic,
      subTopic: item.subTopic,
      source: item.source,
      question: item.question,
      options: item.options,
      answer: item.answer,
      explanation: item.explanation,
      knowledge: item.knowledge,
    }));
    startQuiz(wrongQuestions, 'wrong');
  }

  // 启动测验
  function startQuiz(quizQuestions, mode) {
    state.quizMode = mode;
    state.quizQuestions = quizQuestions;
    state.currentIndex = 0;
    state.answers = [];
    state.selectedOption = null;
    state.quizStartTime = Date.now();

    els.quizTitle.textContent = mode === 'topic'
      ? `${state.currentTopic}专项练习`
      : mode === 'random'
        ? '随机测试'
        : '错题重做';

    switchView('quiz');
    startTimer();
    renderQuestion();
  }

  // 计时器
  function startTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      const seconds = Math.floor((Date.now() - state.quizStartTime) / 1000);
      els.quizTimer.textContent = `⏱ ${formatTime(seconds)}`;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(state.timerInterval);
  }

  // 渲染题目
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

    // 选项
    els.options.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const optionEl = document.createElement('div');
      optionEl.className = 'option';
      optionEl.dataset.index = idx;
      optionEl.innerHTML = `<span class="option-key">${String.fromCharCode(65 + idx)}</span><span class="option-text">${opt}</span>`;
      optionEl.addEventListener('click', () => selectOption(idx));
      els.options.appendChild(optionEl);
    });

    state.selectedOption = null;
  }

  function formatQuestion(text) {
    return text.replace(/_{2,}/g, '<span class="blank">____</span>');
  }

  // 选择选项
  function selectOption(index) {
    if (state.selectedOption !== null) return;
    state.selectedOption = index;

    const q = state.quizQuestions[state.currentIndex];
    const correct = index === q.answer;

    // UI 反馈
    const optionEls = els.options.querySelectorAll('.option');
    optionEls.forEach((el, idx) => {
      el.classList.add('disabled');
      if (idx === q.answer) el.classList.add('correct');
      if (idx === index && idx !== q.answer) el.classList.add('wrong');
      if (idx === index) el.classList.add('selected');
    });

    // 记录
    state.answers.push({
      questionId: q.id,
      selected: index,
      correct: correct,
    });

    recordAnswer(q, index, correct);

    if (!correct) {
      addToWrongBook(q, index);
    } else {
      removeFromWrongBook(q.id);
    }

    // 显示解析
    els.answerArea.classList.remove('hidden');
    els.answerStatus.className = 'answer-status ' + (correct ? 'correct' : 'wrong');
    els.answerStatus.textContent = correct ? '✅ 回答正确' : '❌ 回答错误';
    els.answerExplanation.textContent = q.explanation;
    els.answerKnowledge.textContent = `考点：${q.knowledge || q.subTopic}`;

    // 按钮
    if (state.currentIndex < state.quizQuestions.length - 1) {
      els.btnNext.classList.remove('hidden');
    } else {
      els.btnSubmitQuiz.classList.remove('hidden');
    }

    updateDashboard();
  }

  // 下一题
  function nextQuestion() {
    state.currentIndex += 1;
    renderQuestion();
  }

  // 交卷
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

  // 查看解析
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

  // ==================== 错题本渲染（含移出按钮） ====================
  function renderWrongBook() {
    const wrongBook = getWrongBook();
    els.wrongCount.textContent = wrongBook.length;
    els.wrongbookList.innerHTML = '';

    if (wrongBook.length === 0) {
      els.wrongbookList.innerHTML = `
        <div class="empty-state">
          <div class="icon">🎉</div>
          <p>暂无错题，继续加油！</p>
        </div>
      `;
      return;
    }

    wrongBook.forEach(item => {
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
      // 绑定移出按钮事件
      div.querySelector('.btn-remove-wrong').addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.dataset.id;
        removeFromWrongBook(id);
        renderWrongBook();
        updateDashboard();
      });
      els.wrongbookList.appendChild(div);
    });
  }

  // 统计页渲染
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
    topicMeta.forEach(topic => {
      const topicStat = stats.byTopic && stats.byTopic[topic.name];
      const tAnswered = topicStat ? topicStat.answered : 0;
      const tCorrect = topicStat ? topicStat.correct : 0;
      const tRate = tAnswered > 0 ? Math.round((tCorrect / tAnswered) * 100) : 0;
      const count = getTopicCount(topic.name);

      const row = document.createElement('div');
      row.className = 'topic-stat-row';
      row.innerHTML = `
        <div class="topic-stat-info">
          <h4>${topic.icon} ${topic.name}</h4>
          <p>${topic.sub}</p>
        </div>
        <div class="topic-stat-numbers">
          <div class="rate">${tRate}%</div>
          <div class="count">已做 ${tAnswered} / ${count} 题</div>
        </div>
      `;
      els.topicStats.appendChild(row);
    });
  }

  // 更新仪表盘数据
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

  // ==================== 绑定事件 ====================
  function bindEvents() {
    // 导航菜单（关键修复：随机测试不再 switchView，而是弹窗选题数）
    els.navItems.forEach(item => {
      item.addEventListener('click', () => {
        const view = item.dataset.view;
        if (view === 'random') {
          // 随机测试 → 弹窗选题数，不切换视图
          onRandomTestClick();
          return;
        }
        if (view === 'wrongbook') renderWrongBook();
        if (view === 'stats') renderStats();
        if (view === 'dashboard') updateDashboard();
        switchView(view);
      });
    });

    // 首页按钮
    document.getElementById('btn-random-quick').addEventListener('click', onRandomTestClick);
    document.getElementById('btn-topics-quick').addEventListener('click', () => switchView('topics'));

    // 弹窗交互
    els.modalCountSlider.addEventListener('input', onModalSliderChange);
    els.modalStartBtn.addEventListener('click', onModalStart);
    els.modalCancelBtn.addEventListener('click', onModalCancel);

    // 答题流程
    els.btnNext.addEventListener('click', nextQuestion);
    els.btnSubmitQuiz.addEventListener('click', submitQuiz);
    els.btnQuit.addEventListener('click', () => {
      if (confirm('确定要退出当前测试吗？进度将不会保存。')) {
        stopTimer();
        switchView('dashboard');
        updateDashboard();
      }
    });

    els.btnReview.addEventListener('click', renderResultDetail);
    els.btnRetry.addEventListener('click', () => {
      if (state.quizMode === 'topic') {
        showSetupModal('topic', state.currentTopic);
      } else if (state.quizMode === 'random') {
        onRandomTestClick();
      } else if (state.quizMode === 'wrong') {
        startWrongRedo();
      }
    });
    els.btnBackHome.addEventListener('click', () => switchView('dashboard'));

    // 错题本操作
    els.btnRedoWrong.addEventListener('click', startWrongRedo);
    els.btnClearWrong.addEventListener('click', () => {
      if (confirm('确定要清空错题本吗？此操作不可恢复。')) {
        localStorage.removeItem(STORAGE_KEY);
        renderWrongBook();
        updateDashboard();
      }
    });
  }

  // 初始化
  function init() {
    cacheElements();
    bindEvents();
    updateDashboard();
    switchView('dashboard');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
