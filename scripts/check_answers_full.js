const fs = require('fs');
const path = require('path');

const questions = require('../js/questions.js');

const issues = [];

function addIssue(q, type, detail) {
  issues.push({ id: q.id, topic: q.topic, subTopic: q.subTopic, question: q.question, options: q.options, answer: q.answer, explanation: q.explanation, type, detail });
}

function correctText(q) {
  return q.options[q.answer];
}

questions.forEach(q => {
  if (!Array.isArray(q.options) || q.options.length === 0) {
    addIssue(q, 'empty_options', '选项为空');
    return;
  }
  if (q.answer < 0 || q.answer >= q.options.length) {
    addIssue(q, 'invalid_answer_index', `答案索引 ${q.answer} 超出范围`);
    return;
  }
  const ans = correctText(q);
  const stem = q.question;
  const lowerStem = stem.toLowerCase();
  const lowerAns = String(ans).toLowerCase();

  // 1. Duplicate options (case-insensitive)
  const lowerOptions = q.options.map(o => String(o).toLowerCase().trim());
  const seen = new Set();
  lowerOptions.forEach((o, i) => {
    if (seen.has(o)) addIssue(q, 'duplicate_option', `重复选项: ${q.options[i]}`);
    seen.add(o);
  });

  // 2. Subject-verb agreement
  if (/\b_+\s+am\b/i.test(stem) && lowerAns !== 'i') {
    addIssue(q, 'sv_agreement_am', `am 应与 I 搭配，但答案是 ${ans}`);
  }
  if (/\b_+\s+is\b/i.test(stem)) {
    const plural = ['we', 'you', 'they', 'these', 'those'];
    if (plural.includes(lowerAns)) {
      addIssue(q, 'sv_agreement_is', `is 不应与复数主语 ${ans} 搭配`);
    }
  }
  if (/\b_+\s+are\b/i.test(stem)) {
    const singular = ['i', 'he', 'she', 'it', 'this', 'that'];
    if (singular.includes(lowerAns)) {
      addIssue(q, 'sv_agreement_are', `are 不应与单数主语 ${ans} 搭配`);
    }
  }

  // 3. Tense markers
  const pastMarkers = ['yesterday', 'last ', 'ago', 'in 2020', 'in 2019', 'just now', 'the day before yesterday'];
  const pastMarkersStrict = ['yesterday', 'last week', 'last month', 'last year', 'last sunday', 'two days ago', 'three years ago', 'long ago', 'in 2020', 'in 2019'];
  const futureMarkers = ['tomorrow', 'next ', 'soon', 'in a few days', 'the day after tomorrow'];
  const presentContinuousMarkers = ['now', 'at the moment', 'look!', 'listen!', 'right now'];
  const presentPerfectMarkers = ['since', 'for ', 'already', 'yet', 'ever', 'never', 'just', 'so far', 'in the past few years'];
  const pastPerfectMarkers = ['by the time'];

  const hasPast = pastMarkersStrict.some(m => lowerStem.includes(m));
  const hasFuture = futureMarkers.some(m => lowerStem.includes(m));
  const hasPresentContinuous = presentContinuousMarkers.some(m => lowerStem.includes(m.replace('!', '')));
  const hasPresentPerfect = presentPerfectMarkers.some(m => lowerStem.includes(m));
  const hasPastPerfect = pastPerfectMarkers.some(m => lowerStem.includes(m));

  // Detect tense of answer option (only for verb form questions)
  if (q.topic === '动词时态' || q.subTopic.includes('时态') || lowerStem.includes('verb') || lowerStem.includes(' tense')) {
    const optText = lowerAns;
    if (hasPast && (optText.includes('will ') || optText.includes('is going to') || optText.includes('am going to'))) {
      addIssue(q, 'tense_past_mismatch', `题干有过去时标志 (${pastMarkersStrict.find(m => lowerStem.includes(m))})，但答案含将来时`);
    }
    if (hasFuture && (optText.includes('ed ') && !optText.includes('will have') && !optText.includes('would'))) {
      addIssue(q, 'tense_future_mismatch', `题干有将来时标志 (${futureMarkers.find(m => lowerStem.includes(m))})，但答案含过去时`);
    }
    if (hasPresentContinuous && !(optText.includes('ing') || optText.includes('be ') || optText.includes('is ') || optText.includes('are ') || optText.includes('am '))) {
      addIssue(q, 'tense_continuous_mismatch', `题干有现在进行时标志，但答案不是进行时`);
    }
  }

  // 4. Article a/an
  if (/\b_+\s+[a-z]+/i.test(stem) && (lowerAns === 'a' || lowerAns === 'an')) {
    // Try to find the word after a/an in the stem
    const after = stem.match(/\b(?:a|an)\s+([a-zA-Z]+)/i);
    if (after) {
      const word = after[1].toLowerCase();
      const vowelSound = /^[aeiou]/i.test(word);
      if (lowerAns === 'a' && vowelSound) {
        addIssue(q, 'article_an', `单词 ${word} 以元音音素开头，应用 an`);
      }
      if (lowerAns === 'an' && !vowelSound) {
        addIssue(q, 'article_a', `单词 ${word} 以辅音音素开头，应用 a`);
      }
    }
  }

  // 5. There is/are agreement
  if (/\bthere\s+_+/i.test(stem)) {
    const nextWords = stem.match(/there\s+_+\s+([a-zA-Z\s,]+)/i);
    if (nextWords) {
      const rest = nextWords[1].toLowerCase();
      if (rest.includes('many') || rest.includes('a lot of') || rest.includes('some') && rest.match(/\b\w+s\b/)) {
        // likely plural
        if (lowerAns === 'is') addIssue(q, 'there_is_are', `there be 后接复数名词，应用 are`);
      }
    }
  }

  // 6. Preposition common collocations
  if (/\bin\s+_+/i.test(stem) && lowerAns === 'on' && (lowerStem.includes('morning') || lowerStem.includes('afternoon') || lowerStem.includes('evening'))) {
    addIssue(q, 'prep_in_on', `in the morning/afternoon/evening 用 in，不用 on`);
  }
  if (/\bon\s+_+/i.test(stem) && lowerAns === 'in' && (lowerStem.includes('sunday') || lowerStem.includes('monday') || lowerStem.includes('friday') || lowerStem.includes('weekend'))) {
    addIssue(q, 'prep_on_in', `星期/周末前用 on，不用 in`);
  }

  // 7. Comparative/superlative
  if (lowerStem.includes('than') && lowerAns.includes('est')) {
    addIssue(q, 'comparative_than', `than 前用比较级，不是最高级`);
  }
  if ((lowerStem.includes('the') && lowerStem.includes('of')) && lowerAns.includes('er')) {
    addIssue(q, 'superlative_of', `the ... of 结构常用最高级，不是比较级`);
  }

  // 8. Explanation consistency: explanation should mention the correct answer text or a synonymous form
  const expl = q.explanation.toLowerCase();
  // Skip generic explanations
  if (expl.length > 5 && !expl.includes(lowerAns) && !expl.includes('答案') && !expl.includes('选')) {
    // If answer is a single word, explanation might not mention it directly. Be lenient.
    if (lowerAns.length > 2 && !/^[a-z]$/i.test(lowerAns)) {
      // Could still be OK if explanation mentions a related word
      // Just flag obvious mismatches
    }
  }

  // 9. Wh-word consistency
  if (/\b_+\s+(is|are|was|were|do|does|did|can|will|have|has|had)/i.test(stem)) {
    // question with wh-word
  }
});

const byType = {};
issues.forEach(i => {
  byType[i.type] = byType[i.type] || [];
  byType[i.type].push(i);
});

console.log(`总题数: ${questions.length}`);
console.log(`可疑题数: ${issues.length}`);
console.log('\n按类型统计:');
Object.entries(byType).forEach(([type, list]) => {
  console.log(`  ${type}: ${list.length}`);
});

console.log('\n=== 详细问题 ===');
Object.entries(byType).forEach(([type, list]) => {
  console.log(`\n--- ${type} (${list.length}) ---`);
  list.slice(0, 20).forEach(i => {
    console.log(`ID ${i.id} [${i.topic}/${i.subTopic}]: ${i.question}`);
    console.log(`  选项: ${i.options.join(' / ')}`);
    console.log(`  答案: ${i.options[i.answer]} (${i.answer})`);
    console.log(`  解析: ${i.explanation}`);
    console.log(`  问题: ${i.detail}`);
  });
  if (list.length > 20) console.log(`  ... 还有 ${list.length - 20} 条`);
});

const reportPath = path.join(__dirname, '..', 'answer_issues_full.json');
fs.writeFileSync(reportPath, JSON.stringify(issues, null, 2), 'utf-8');
console.log(`\n完整报告已保存: ${reportPath}`);
