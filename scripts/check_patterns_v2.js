const questions = require('../js/questions.js');
const fs = require('fs');

const issues = [];

function addIssue(q, type, detail) {
  issues.push({ id: q.id, topic: q.topic, subTopic: q.subTopic, question: q.question, options: q.options, answer: q.answer, explanation: q.explanation, type, detail });
}

function ans(q) {
  return String(q.options[q.answer]).toLowerCase().trim();
}

questions.forEach(q => {
  const stem = q.question;
  const lowerStem = stem.toLowerCase();
  const a = ans(q);

  // 1. Tense: last year / last summer → past simple
  if ((lowerStem.includes('last year') || lowerStem.includes('last summer') || lowerStem.includes('last week') || lowerStem.includes('last month') || lowerStem.includes('yesterday')) &&
      /\bhe\s+_+/i.test(stem)) {
    if (a === 'goes' || a === 'go' || a === 'is going' || a === 'will go' || a === 'going') {
      addIssue(q, 'tense_past', `过去时间状语，应用一般过去时，答案 ${a} 不对`);
    }
  }

  // 2. Present perfect: have/has never/already/ever + ____
  if (/have\s+(never|already|ever|just)\s+_+/i.test(stem) || /has\s+(never|already|ever|just)\s+_+/i.test(stem)) {
    // Past participle forms that are wrong
    if (a === 'go' || a === 'went' || a === 'going' || a === 'goes' ||
        a === 'see' || a === 'saw' || a === 'seeing' || a === 'sees' ||
        a === 'buy' || a === 'bought' || a === 'buying' || // bought is pp, bought is fine
        a === 'begin' || a === 'began' || a === 'begins') {
      // base form or -ing after have is wrong
      addIssue(q, 'present_perfect_pp', `have/has + 过去分词，答案 ${a} 不对`);
    }
  }

  // 3. Comparative with than
  if (/is\s+_+\s+than\b/i.test(stem) || /are\s+_+\s+than\b/i.test(stem)) {
    const validComparative = a.endsWith('er') || a.startsWith('more ') || ['better', 'worse', 'more', 'less', 'older', 'elder', 'farther', 'further'].includes(a);
    if (!validComparative) {
      addIssue(q, 'comparative', `than 前用比较级，答案 ${a} 不像比较级`);
    }
  }

  // 4. Superlative with in/of + 范围
  if (/is\s+_+\s+(?:the\s+)?\w+\s+in\s+our\s+class/i.test(stem) || /is\s+_+\s+boy\s+in\s+our\s+class/i.test(stem)) {
    const validSuperlative = a.startsWith('the ') && (a.endsWith('est') || a.includes('most ') || a.includes('least ') || ['the best', 'the worst'].includes(a));
    if (!validSuperlative) {
      addIssue(q, 'superlative', `in our class 表范围，应用 the + 最高级，答案 ${a} 不对`);
    }
  }

  // 5. Of all the students, ... runs ____
  if (/of all the students.*runs\s+_+/i.test(stem)) {
    const valid = a === 'fastest' || a === 'best' || a === 'worst' || a === 'least' || a === 'most' || a.endsWith('est') || a.startsWith('the ');
    if (!valid) {
      addIssue(q, 'superlative_adv', `of all 表范围，应用最高级副词，答案 ${a} 不对`);
    }
  }

  // 6. Present simple: he often ____
  if (/\bhe\s+often\s+_+/i.test(stem) || /\bshe\s+often\s+_+/i.test(stem) || /\btom\s+often\s+_+/i.test(stem)) {
    if (a === 'go' || a === 'went' || a === 'going' || a === 'will go' || a === 'is going') {
      addIssue(q, 'present_simple', `often 用一般现在时，第三人称单数，答案 ${a} 不对`);
    }
  }

  // 7. Passive: English ____ all over the world.
  if (/english\s+_+\s+all over the world/i.test(stem)) {
    if (!a.includes('spoken') && !a.includes('is') && !a.includes('are')) {
      addIssue(q, 'passive', `English 是被说，应用被动语态，答案 ${a} 不对`);
    }
  }

  // 8. Concession: ____ he is young, he knows a lot.
  if (/^\s*_+\s+he is young/i.test(stem)) {
    if (!['although', 'though'].includes(a) && !a.includes('although')) {
      addIssue(q, 'concession', `让步状语从句用 although/though，答案 ${a} 不对`);
    }
  }

  // 9. Reason: He was late ____ he got up late.
  if (/he was late\s+_+\s+he got up late/i.test(stem)) {
    if (!['because', 'as', 'since'].includes(a) && !a.includes('because')) {
      addIssue(q, 'reason', `原因状语从句用 because/as/since，答案 ${a} 不对`);
    }
  }

  // 10. Reported speech: He said he ____ come back soon.
  if (/he said he\s+_+\s+.*back soon/i.test(stem)) {
    if (a === 'will' || a === 'will come' || a === 'can' || a === 'is going to') {
      addIssue(q, 'reported_speech', `主句 said 过去时，宾语从句用过去将来时 would，答案 ${a} 不对`);
    }
  }

  // 11. spend time doing
  if (/spent\s+.*hours\s+_+/i.test(stem) || /spend\s+.*time\s+_+/i.test(stem)) {
    if (!a.endsWith('ing') && !a.includes('in doing')) {
      addIssue(q, 'spend_doing', `spend time (in) doing sth，答案 ${a} 应为 doing 形式`);
    }
  }

  // 12. How far / how long
  if (/about two kilometers away/i.test(lowerStem) || /about two miles away/i.test(lowerStem)) {
    if (!a.includes('far') && !a.includes('distance')) {
      addIssue(q, 'how_far', `答语表距离，应用 how far，答案 ${a} 不对`);
    }
  }

  // 13. neither/both of the two
  if (/of the two/i.test(lowerStem)) {
    if (lowerStem.includes('are') && a === 'neither') {
      addIssue(q, 'neither_singular', `neither of the two 表单数，谓语用单数，答案 ${a} 与 are 不一致`);
    }
    if (lowerStem.includes('is') && a === 'both') {
      addIssue(q, 'both_plural', `both of the two 表复数，谓语用复数，答案 ${a} 与 is 不一致`);
    }
  }
});

const byType = {};
issues.forEach(i => {
  byType[i.type] = byType[i.type] || [];
  byType[i.type].push(i);
});

console.log(`总题数: ${questions.length}`);
console.log(`可疑题数: ${issues.length}`);
Object.entries(byType).forEach(([type, list]) => {
  console.log(`  ${type}: ${list.length}`);
});

console.log('\n=== 详细 ===');
Object.entries(byType).forEach(([type, list]) => {
  console.log(`\n--- ${type} (${list.length}) ---`);
  list.forEach(i => {
    console.log(`ID ${i.id} [${i.topic}/${i.subTopic}]: ${i.question}`);
    console.log(`  选项: ${i.options.join(' / ')}`);
    console.log(`  答案: ${i.options[i.answer]} (${i.answer})`);
    console.log(`  解析: ${i.explanation}`);
    console.log(`  问题: ${i.detail}`);
  });
});

fs.writeFileSync('answer_pattern_issues_v2.json', JSON.stringify(issues, null, 2));
