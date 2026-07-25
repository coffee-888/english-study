const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, '..', 'js', 'questions.js');
let questions = require(questionsPath);

const byId = new Map(questions.map(q => [q.id, q]));

function update(qid, changes) {
  const q = byId.get(qid);
  if (!q) {
    console.warn(`ID ${qid} not found`);
    return;
  }
  Object.assign(q, changes);
  console.log(`Fixed ID ${qid}: ${q.question} -> answer ${q.answer} (${q.options[q.answer]})`);
}

// Fix "______ am a student." for non-I subjects
update(109, { question: "______ are a student.", options: ["You", "your", "yours", "yourself"], answer: 0, explanation: "句子缺少主语，要用人称代词主格 you，且与 are 搭配。" });
update(113, { question: "______ is a student.", options: ["He", "Him", "His", "Mine"], answer: 0, explanation: "句子缺少主语，要用人称代词主格 he，且与 is 搭配。" });
update(117, { question: "______ is a student.", options: ["She", "Her", "Hers", "Mine"], answer: 0, explanation: "句子缺少主语，要用人称代词主格 she，且与 is 搭配。" });
update(121, { question: "______ is a student.", options: ["It", "Its", "Mine", "Yours"], answer: 0, explanation: "句子缺少主语，要用人称代词主格 it，且与 is 搭配。" });
update(125, { question: "______ are students.", options: ["We", "us", "our", "ours"], answer: 0, explanation: "句子缺少主语，要用人称代词主格 we，且与 are 搭配。" });
update(129, { question: "______ are students.", options: ["They", "them", "their", "theirs"], answer: 0, explanation: "句子缺少主语，要用人称代词主格 they，且与 are 搭配。" });

// Fix "______ is my friend." for plural subjects
update(936, { question: "______ are my friend.", options: ["You", "your", "yours", "yourself"], answer: 0, explanation: "句子缺少主语，要用人称代词主格 you，且与 are 搭配。" });
update(944, { question: "______ are my friends.", options: ["We", "us", "our", "ours"], answer: 0, explanation: "句子缺少主语，要用人称代词主格 we，且与 are 搭配。" });
update(946, { question: "______ are my friends.", options: ["They", "them", "their", "theirs"], answer: 0, explanation: "句子缺少主语，要用人称代词主格 they，且与 are 搭配。" });

// Fix duplicate options in simple sentence transformation questions
update(2, { options: ["place", "places", "a place", "the place"], answer: 1, explanation: "many 修饰可数名词复数，place 的复数形式是 places。PLACE 只是大小写不同，不能算作不同选项。" });
update(715, { options: ["Is he a student?", "Is he a student??", "Does he a student?", "He is a student?"], answer: 0, explanation: "一般疑问句将 be 动词 is 提前，句首字母大写。" });
update(716, { options: ["She can't swim.", "She can not swim.", "She doesn't can swim.", "She can't swims."], answer: 0, explanation: "情态动词 can 的否定形式为 can't / can not，后面接动词原形 swim。" });
update(717, { options: ["They haven't finished the work.", "They haven't finish the work.", "They don't have finished the work.", "They has not finished the work."], answer: 0, explanation: "现在完成时 haven't / have not + 过去分词 finished。" });
update(718, { options: ["Will he go to Beijing?", "Is he go to Beijing?", "Does he will go to Beijing?", "Will he goes to Beijing?"], answer: 0, explanation: "will 提前构成一般疑问句，后面接动词原形 go。" });

// Write back
const json = JSON.stringify(questions, null, 2);
const output = `// 中考英语语法题库\n// 覆盖图片中全部语法专题，总量 ${questions.length} 题\n\nconst questions = ${json};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = questions;\n}\n`;
fs.writeFileSync(questionsPath, output, 'utf-8');
console.log(`\n已写入 ${questionsPath}`);
