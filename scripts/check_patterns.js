const questions = require('../js/questions.js');

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

  // Pattern: There are many ____ on the ground.
  if (lowerStem.includes('there are many') && a === 'is') {
    addIssue(q, 'many_plural', `many 后接复数，there are 已提示复数，答案不应是 is`);
  }

  // Pattern: Please pass me two ____.
  if (lowerStem.includes('two ') && a.endsWith('s') === false && !['bread', 'water', 'milk', 'tea', 'coffee', 'rice', 'meat', 'fish', 'money', 'time', 'information', 'news', 'advice', 'paper'].includes(a)) {
    addIssue(q, 'two_plural', `two 后接可数名词复数，但答案 ${a} 不是复数`);
  }

  // Pattern: He ____ to Beijing last year.
  if (/\bhe\s+_+\s+to beijing last year/i.test(stem)) {
    if (a.includes('will ') || a.includes('goes') || a.includes('is going')) {
      addIssue(q, 'past_last_year', `last year 用一般过去时，答案 ${a} 不对`);
    }
  }

  // Pattern: I have never ____ such a beautiful place.
  if (/i have never/i.test(stem)) {
    if (!a.includes('en') && !a.endsWith('ed') && !a.endsWith('n') && !a.endsWith('t')) {
      // Past participle usually ends in -ed/-en/-n/-t
      addIssue(q, 'present_perfect_pp', `have never 后接过去分词，答案 ${a} 不像过去分词`);
    }
  }

  // Pattern: This box is ____ than that one.
  if (/is\s+_+\s+than/i.test(stem)) {
    if (!a.endsWith('er') && !a.startsWith('more ') && !['better', 'worse', 'more', 'less'].includes(a)) {
      addIssue(q, 'comparative', `than 前用比较级，答案 ${a} 不像比较级`);
    }
  }

  // Pattern: He is ____ student in our class.
  if (/he is\s+_+\s+student in our class/i.test(stem)) {
    if (!a.startsWith('the ') || !(a.endsWith('est') || a.includes('most '))) {
      addIssue(q, 'superlative', `in our class 表范围，应用最高级 the ...est/most，答案 ${a} 不对`);
    }
  }

  // Pattern: Of all the students, she runs ____.
  if (/of all the students.*runs/i.test(stem)) {
    if (!a.endsWith('est') && !a.startsWith('most ') && !['fastest', 'best', 'most'].includes(a)) {
      addIssue(q, 'superlative_adv', `of all 表范围，应用最高级，答案 ${a} 不像最高级`);
    }
  }

  // Pattern: He speaks English ____ than before.
  if (/speaks english\s+_+\s+than/i.test(stem)) {
    if (!a.endsWith('er') && !a.startsWith('more ') && !['better', 'more', 'worse'].includes(a)) {
      addIssue(q, 'comparative_adv', `than 前用比较级副词，答案 ${a} 不像比较级`);
    }
  }

  // Pattern: He is ____ boy in our class.
  if (/he is\s+_+\s+boy in our class/i.test(stem)) {
    if (!a.startsWith('the ') || !(a.endsWith('est') || a.includes('most '))) {
      addIssue(q, 'superlative_boy', `in our class 表范围，应用最高级，答案 ${a} 不对`);
    }
  }

  // Pattern: Tom is ____ than Jim.
  if (/is\s+_+\s+than jim/i.test(stem)) {
    if (!a.endsWith('er') && !a.startsWith('more ') && !['better', 'worse', 'more', 'less'].includes(a)) {
      addIssue(q, 'comparative_tom', `than 前用比较级，答案 ${a} 不像比较级`);
    }
  }

  // Pattern: He often ____ to school on foot.
  if (/he often\s+_+\s+to school/i.test(stem)) {
    if (a.includes('will') || a.includes('went') || a.includes('going') || a.includes('gone')) {
      addIssue(q, 'present_simple', `often 用一般现在时，主语 he 第三人称单数，答案 ${a} 不对`);
    }
  }

  // Pattern: He ____ to Beijing last summer.
  if (/he\s+_+\s+to beijing last summer/i.test(stem)) {
    if (a.includes('will') || a.includes('goes') || a.includes('is going')) {
      addIssue(q, 'past_summer', `last summer 用一般过去时，答案 ${a} 不对`);
    }
  }

  // Pattern: The movie has already ____.
  if (/has already/i.test(stem)) {
    if (a.includes('will') || a.includes('is ') || a.includes('are ') || a === 'see' || a === 'go') {
      addIssue(q, 'present_perfect', `has already 后接过去分词，答案 ${a} 不对`);
    }
  }

  // Pattern: English ____ all over the world.
  if (/english\s+_+\s+all over the world/i.test(stem)) {
    if (!a.includes('spoken') && !a.includes('is')) {
      addIssue(q, 'passive', `English 作主语应是被说，应用被动语态 is spoken，答案 ${a} 不对`);
    }
  }

  // Pattern: My brother is ____ years old.
  if (/is\s+_+\s+years old/i.test(stem)) {
    if (!/^\d+$/.test(a) && !['twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'].includes(a)) {
      // Could be a number word; be lenient
    }
  }

  // Pattern: Today is her ____ birthday.
  if (/today is her\s+_+\s+birthday/i.test(stem)) {
    if (!a.endsWith('th') && !['first', 'second', 'third', 'fifth', 'ninth', 'twelfth', 'twentieth'].includes(a)) {
      addIssue(q, 'ordinal', `birthday 前用序数词，答案 ${a} 不像序数词`);
    }
  }

  // Pattern: Would you like some ____?
  if (/would you like some/i.test(stem)) {
    // Usually uncountable or plural; acceptable
  }

  // Pattern: ____ he is young, he knows a lot.
  if (/^\s*_+\s+he is young/i.test(stem)) {
    if (!['although', 'though', 'although/though'].includes(a)) {
      addIssue(q, 'concession', `让步状语从句用 although/though，答案 ${a} 不对`);
    }
  }

  // Pattern: He was late ____ he got up late.
  if (/he was late\s+_+\s+he got up late/i.test(stem)) {
    if (!['because', 'because/as', 'as', 'since'].includes(a)) {
      addIssue(q, 'reason', `原因状语从句用 because/as/since，答案 ${a} 不对`);
    }
  }

  // Pattern: Please arrive ____ the blackboard.
  if (/arrive\s+_+\s+the blackboard/i.test(stem)) {
    if (a !== 'at' && a !== 'in front of' && a !== 'beside') {
      addIssue(q, 'prep_arrive', `arrive 后接小地点用 at，答案 ${a} 不对`);
    }
  }

  // Pattern: He said he ____ (come) back soon.
  if (/he said he.*back soon/i.test(stem)) {
    if (a.includes('will') && !a.includes('would')) {
      addIssue(q, 'past_future', `主句 said 过去时，宾语从句用过去将来时 would，答案 ${a} 不对`);
    }
  }

  // How many ____ are there in the picture?
  if (/how many/i.test(stem) && a === 'is') {
    addIssue(q, 'how_many', `how many 后接复数，答案不应是 is`);
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

const fs = require('fs');
fs.writeFileSync('answer_pattern_issues.json', JSON.stringify(issues, null, 2));
