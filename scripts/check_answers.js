const fs = require('fs');
const path = require('path');

const questions = require('../js/questions.js');

const issues = [];

function addIssue(q, type, detail) {
  issues.push({ id: q.id, topic: q.topic, subTopic: q.subTopic, question: q.question, options: q.options, answer: q.answer, explanation: q.explanation, type, detail });
}

// 1. Basic validation
questions.forEach(q => {
  if (!Array.isArray(q.options) || q.options.length === 0) {
    addIssue(q, 'empty_options', '选项为空');
    return;
  }
  if (q.answer < 0 || q.answer >= q.options.length) {
    addIssue(q, 'invalid_answer_index', `答案索引 ${q.answer} 超出范围 [0, ${q.options.length - 1}]`);
    return;
  }
  const correctText = q.options[q.answer];

  // 2. Duplicate options
  const lowerOptions = q.options.map(o => String(o).toLowerCase().trim());
  const seen = new Set();
  lowerOptions.forEach((o, i) => {
    if (seen.has(o)) addIssue(q, 'duplicate_option', `重复选项: ${q.options[i]}`);
    seen.add(o);
  });

  // 3. Subject-verb agreement for common stems
  const stem = q.question;
  const lowerStem = stem.toLowerCase();

  // Pattern: ____ am ...
  if (/^\s*[_\-]+\s+am\b/i.test(stem) || /\b_+\s+am\b/i.test(stem)) {
    const correct = correctText.toLowerCase();
    if (correct !== 'i') {
      addIssue(q, 'sv_agreement_am', `题干用 am，正确答案应为 I，但实际是 ${correctText}`);
    }
  }

  // Pattern: ____ is ...
  if (/\b_+\s+is\b/i.test(stem)) {
    const correct = correctText.toLowerCase();
    const singularSubjects = ['he', 'she', 'it', 'this', 'that', 'tom', 'mary', 'my brother', 'my sister', 'the boy', 'the girl', 'the cat', 'the dog', 'the book'];
    // If correct option is a plural subject, flag it
    const pluralSubjects = ['we', 'you', 'they', 'these', 'those', 'the boys', 'the girls', 'my parents'];
    if (pluralSubjects.includes(correct)) {
      addIssue(q, 'sv_agreement_is', `题干用 is，但答案 ${correctText} 是复数主语`);
    }
  }

  // Pattern: ____ are ...
  if (/\b_+\s+are\b/i.test(stem)) {
    const correct = correctText.toLowerCase();
    const singularSubjects = ['i', 'he', 'she', 'it', 'this', 'that', 'tom'];
    if (singularSubjects.includes(correct)) {
      addIssue(q, 'sv_agreement_are', `题干用 are，但答案 ${correctText} 是单数主语`);
    }
  }

  // 4. Pronoun case: ____ is/are + (object position)
  // Pattern: Give ____ a book. (should be me/him/her/us/them)
  if (/give\s+_+/i.test(stem)) {
    const objPronouns = ['me', 'him', 'her', 'us', 'them'];
    if (!objPronouns.includes(correctText.toLowerCase())) {
      addIssue(q, 'pronoun_case_give', `give 后接宾格，但答案 ${correctText} 不是宾格`);
    }
  }

  // Pattern: This is ____. (introducing, could be I/me depending)
  if (/this\s+is\s+_+/i.test(stem)) {
    const correct = correctText.toLowerCase();
    // Usually "This is me" colloquial, but "This is I" formal. For 中考 usually "This is me"? Actually often "This is my friend". Skip.
  }

  // 5. Explanation mentions answer? (loose check)
  const expl = q.explanation.toLowerCase();
  const correctLower = correctText.toLowerCase();
  // Skip if explanation is too generic
});

// Group by type
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

// Output details for top types
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
  if (list.length > 20) {
    console.log(`  ... 还有 ${list.length - 20} 条`);
  }
});

// Save full report
const reportPath = path.join(__dirname, '..', 'answer_issues.json');
fs.writeFileSync(reportPath, JSON.stringify(issues, null, 2), 'utf-8');
console.log(`\n完整报告已保存: ${reportPath}`);
