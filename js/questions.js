// 中考英语语法题库
// 覆盖图片中全部语法专题，总量 1002 题

const questions = [
  {
    "id": 1,
    "topic": "名词",
    "subTopic": "专有名词/普通名词",
    "source": "中考语法精选",
    "question": "— Which of the following is a proper noun?",
    "options": [
      "China",
      "country",
      "river",
      "student"
    ],
    "answer": 0,
    "explanation": "China（中国）是专有名词，首字母大写，表示特定的国家名称。",
    "knowledge": "专有名词是表示特定人、地方、机构等的名词，首字母通常大写。"
  },
  {
    "id": 2,
    "topic": "名词",
    "subTopic": "专有名词/普通名词",
    "source": "中考语法精选",
    "question": "There are many beautiful ______ in Hangzhou.",
    "options": [
      "place",
      "places",
      "a place",
      "the place"
    ],
    "answer": 1,
    "explanation": "many 修饰可数名词复数，place 的复数形式是 places。PLACE 只是大小写不同，不能算作不同选项。",
    "knowledge": "many 后接可数名词复数。"
  },
  {
    "id": 3,
    "topic": "名词",
    "subTopic": "专有名词/普通名词",
    "source": "中考语法精选",
    "question": "— Is this your English book? — No, it's ______.",
    "options": [
      "Tom",
      "Tom's",
      "Toms",
      "Toms'"
    ],
    "answer": 1,
    "explanation": "表示\"汤姆的（书）\"要用名词所有格 Tom's。",
    "knowledge": "名词所有格表示所属关系。"
  },
  {
    "id": 4,
    "topic": "名词",
    "subTopic": "专有名词/普通名词",
    "source": "中考语法精选",
    "question": "We often play basketball after ______.",
    "options": [
      "a class",
      "classes",
      "class",
      "the classes"
    ],
    "answer": 2,
    "explanation": "after class 是固定搭配，意为\"课后\"，class 此处为抽象概念，用单数。",
    "knowledge": "after class 为固定短语。"
  },
  {
    "id": 5,
    "topic": "名词",
    "subTopic": "专有名词/普通名词",
    "source": "中考语法精选",
    "question": "The Great Wall is one of the most famous ______ in the world.",
    "options": [
      "place",
      "places",
      "place's",
      "places'"
    ],
    "answer": 1,
    "explanation": "\"one of + the + 形容词最高级 + 可数名词复数\"表示\"最……之一\"。",
    "knowledge": "one of 后接可数名词复数。"
  },
  {
    "id": 6,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "water",
      "waters",
      "a water",
      "two waters"
    ],
    "answer": 0,
    "explanation": "水（water）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 7,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some water on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "水（water）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 8,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "milk",
      "milks",
      "a milk",
      "two milks"
    ],
    "answer": 0,
    "explanation": "牛奶（milk）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 9,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some milk on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "牛奶（milk）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 10,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "bread",
      "breads",
      "a bread",
      "two breads"
    ],
    "answer": 0,
    "explanation": "面包（bread）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 11,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some bread on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "面包（bread）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 12,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "rice",
      "rices",
      "a rice",
      "two rices"
    ],
    "answer": 0,
    "explanation": "米饭（rice）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 13,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some rice on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "米饭（rice）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 14,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "paper",
      "papers",
      "a paper",
      "two papers"
    ],
    "answer": 0,
    "explanation": "纸（paper）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 15,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some paper on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "纸（paper）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 16,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "advice",
      "advices",
      "a advice",
      "two advices"
    ],
    "answer": 0,
    "explanation": "建议（advice）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 17,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some advice on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "建议（advice）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 18,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "information",
      "informations",
      "a information",
      "two informations"
    ],
    "answer": 0,
    "explanation": "信息（information）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 19,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some information on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "信息（information）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 20,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "news",
      "newss",
      "a news",
      "two newss"
    ],
    "answer": 0,
    "explanation": "新闻（news）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 21,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some news on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "新闻（news）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 22,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "weather",
      "weathers",
      "a weather",
      "two weathers"
    ],
    "answer": 0,
    "explanation": "天气（weather）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 23,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some weather on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "天气（weather）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 24,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "money",
      "moneys",
      "a money",
      "two moneys"
    ],
    "answer": 0,
    "explanation": "钱（money）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 25,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some money on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "钱（money）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 26,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "time",
      "times",
      "a time",
      "two times"
    ],
    "answer": 0,
    "explanation": "时间（time）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 27,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some time on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "时间（time）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 28,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "work",
      "works",
      "a work",
      "two works"
    ],
    "answer": 0,
    "explanation": "工作（work）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 29,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some work on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "工作（work）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 30,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "homework",
      "homeworks",
      "a homework",
      "two homeworks"
    ],
    "answer": 0,
    "explanation": "家庭作业（homework）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 31,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some homework on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "家庭作业（homework）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 32,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "housework",
      "houseworks",
      "a housework",
      "two houseworks"
    ],
    "answer": 0,
    "explanation": "家务（housework）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 33,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some housework on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "家务（housework）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 34,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "music",
      "musics",
      "a music",
      "two musics"
    ],
    "answer": 0,
    "explanation": "音乐（music）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 35,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some music on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "音乐（music）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 36,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______. Would you like some?",
    "options": [
      "furniture",
      "furnitures",
      "a furniture",
      "two furnitures"
    ],
    "answer": 0,
    "explanation": "家具（furniture）是不可数名词，没有复数形式，也不能用 a/an 修饰。",
    "knowledge": "不可数名词没有复数，不能用不定冠词修饰。"
  },
  {
    "id": 37,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "There ______ some furniture on the table.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "家具（furniture）是不可数名词，作主语时谓语动词用单数形式。",
    "knowledge": "不可数名词作主语，谓语动词用单数。"
  },
  {
    "id": 38,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "books",
      "book",
      "bookes",
      "bookses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，book 的复数形式是 books。一般情况加 -s。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 39,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "books",
      "book",
      "a book",
      "bookses"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，book 的复数形式是 books。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 40,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "boxes",
      "box",
      "boxs",
      "boxeses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，box 的复数形式是 boxes。以 s, x, ch, sh 结尾加 -es。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 41,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "boxes",
      "box",
      "boxs",
      "a box"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，box 的复数形式是 boxes。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 42,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "cities",
      "city",
      "citys",
      "cityes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，city 的复数形式是 cities。以辅音字母 + y 结尾，变 y 为 i 加 -es。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 43,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "cities",
      "city",
      "citys",
      "a city"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，city 的复数形式是 cities。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 44,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "knives",
      "knife",
      "knifes",
      "knifees"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，knife 的复数形式是 knives。以 f/fe 结尾，变 f/fe 为 v 加 -es。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 45,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "knives",
      "knife",
      "knifes",
      "a knife"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，knife 的复数形式是 knives。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 46,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "potatoes",
      "potato",
      "potatos",
      "potatoeses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，potato 的复数形式是 potatoes。以 o 结尾的有生命名词加 -es。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 47,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "potatoes",
      "potato",
      "potatos",
      "a potato"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，potato 的复数形式是 potatoes。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 48,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "children",
      "child",
      "childs",
      "childes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，child 的复数形式是 children。不规则变化。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 49,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "children",
      "child",
      "childs",
      "a child"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，child 的复数形式是 children。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 50,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "men",
      "man",
      "mans",
      "manes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，man 的复数形式是 men。不规则变化。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 51,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "men",
      "man",
      "mans",
      "a man"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，man 的复数形式是 men。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 52,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "women",
      "woman",
      "womans",
      "womanes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，woman 的复数形式是 women。不规则变化。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 53,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "women",
      "woman",
      "womans",
      "a woman"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，woman 的复数形式是 women。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 54,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "teeth",
      "tooth",
      "tooths",
      "toothes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，tooth 的复数形式是 teeth。不规则变化。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 55,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "teeth",
      "tooth",
      "tooths",
      "a tooth"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，tooth 的复数形式是 teeth。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 56,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "feet",
      "foot",
      "foots",
      "footes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，foot 的复数形式是 feet。不规则变化。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 57,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "feet",
      "foot",
      "foots",
      "a foot"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，foot 的复数形式是 feet。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 58,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "mice",
      "mouse",
      "mouses",
      "mousees"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，mouse 的复数形式是 mice。不规则变化。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 59,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "mice",
      "mouse",
      "mouses",
      "a mouse"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，mouse 的复数形式是 mice。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 60,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ in the basket.",
    "options": [
      "sheep",
      "sheeps",
      "sheepes",
      "sheep's"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，sheep 的复数形式是 sheep。单复数同形。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 61,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "— How many ______ do you have? — Two.",
    "options": [
      "sheep",
      "sheeps",
      "a sheep",
      "sheep's"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，sheep 的复数形式是 sheep。",
    "knowledge": "how many 后接可数名词复数。"
  },
  {
    "id": 62,
    "topic": "名词",
    "subTopic": "名词的所有格",
    "source": "中考语法精选",
    "question": "This is ______ classroom. They study here every day.",
    "options": [
      "Lucy and Lily",
      "Lucy's and Lily's",
      "Lucy and Lily's",
      "Lucy's and Lily"
    ],
    "answer": 2,
    "explanation": "两个人共同拥有一样东西，只在最后一个人名后加 's。",
    "knowledge": "共同所有格与各自所有格的区别。"
  },
  {
    "id": 63,
    "topic": "名词",
    "subTopic": "名词的所有格",
    "source": "中考语法精选",
    "question": "These are ______ books. One is Lucy's and the other is Lily's.",
    "options": [
      "Lucy and Lily",
      "Lucy's and Lily's",
      "Lucy and Lily's",
      "Lucys' and Lilys'"
    ],
    "answer": 1,
    "explanation": "表示两个人分别拥有，要在每个人名后都加 's。",
    "knowledge": "各自所有格用法。"
  },
  {
    "id": 64,
    "topic": "名词",
    "subTopic": "名词的所有格",
    "source": "中考语法精选",
    "question": "The ______ colors are beautiful.",
    "options": [
      "flower's",
      "flowers'",
      "flowers",
      "flower"
    ],
    "answer": 1,
    "explanation": "flowers 是以 s 结尾的复数名词，其所有格直接加 '。",
    "knowledge": "复数名词所有格规则。"
  },
  {
    "id": 65,
    "topic": "名词",
    "subTopic": "名词的所有格",
    "source": "中考语法精选",
    "question": "Today is ______ birthday. Let's have a party for him.",
    "options": [
      "my father",
      "my fathers",
      "my father's",
      "my fathers'"
    ],
    "answer": 2,
    "explanation": "表示\"我爸爸的生日\"要用名词所有格 my father's。",
    "knowledge": "名词所有格表示所属关系。"
  },
  {
    "id": 66,
    "topic": "名词",
    "subTopic": "名词的所有格",
    "source": "中考语法精选",
    "question": "— Whose pen is this? — It's ______.",
    "options": [
      "Tom",
      "Tom's",
      "Toms",
      "Toms'"
    ],
    "answer": 1,
    "explanation": "回答\"某人的\"要用名词所有格，Tom 的所有格是 Tom's。",
    "knowledge": "名词所有格在答语中的使用。"
  },
  {
    "id": 67,
    "topic": "名词",
    "subTopic": "名词综合",
    "source": "中考语法精选",
    "question": "— Can I help you? — I'd like two ______.",
    "options": [
      "box of apples",
      "boxes of apples",
      "box of apple",
      "boxes of apple"
    ],
    "answer": 1,
    "explanation": "two 后接可数名词复数 boxes；apple 也是可数名词，用复数 apples。",
    "knowledge": "可数名词复数与量词搭配。"
  },
  {
    "id": 68,
    "topic": "名词",
    "subTopic": "名词综合",
    "source": "中考语法精选",
    "question": "We should eat more ______ and drink more ______.",
    "options": [
      "vegetables; water",
      "vegetable; water",
      "vegetables; waters",
      "vegetable; waters"
    ],
    "answer": 0,
    "explanation": "vegetable 是可数名词，more 后用复数 vegetables；water 是不可数名词，没有复数。",
    "knowledge": "可数名词与不可数名词的区分。"
  },
  {
    "id": 69,
    "topic": "名词",
    "subTopic": "名词综合",
    "source": "中考语法精选",
    "question": "— What would you like? — Some ______, please.",
    "options": [
      "noodle",
      "noodles",
      "a noodle",
      "noodle's"
    ],
    "answer": 1,
    "explanation": "noodle 常用复数形式 noodles，some noodles 表示\"一些面条\"。",
    "knowledge": "常以复数形式出现的名词。"
  },
  {
    "id": 70,
    "topic": "名词",
    "subTopic": "名词综合",
    "source": "中考语法精选",
    "question": "My mother bought two ______ in the supermarket.",
    "options": [
      "kilos of meat",
      "kilos of meats",
      "kilo of meat",
      "kilo of meats"
    ],
    "answer": 0,
    "explanation": "two kilos of meat 表示\"两公斤肉\"，kilo 变复数，meat 不可数不变。",
    "knowledge": "量词复数与不可数名词。"
  },
  {
    "id": 71,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "There is ______ apple on the table.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "apple 以元音音素开头，前面用不定冠词 an。",
    "knowledge": "a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。"
  },
  {
    "id": 72,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "There is ______ orange on the table.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "orange 以元音音素开头，前面用不定冠词 an。",
    "knowledge": "a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。"
  },
  {
    "id": 73,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "There is ______ egg on the table.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "egg 以元音音素开头，前面用不定冠词 an。",
    "knowledge": "a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。"
  },
  {
    "id": 74,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "There is ______ hour on the table.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "hour 以元音音素开头，前面用不定冠词 an。",
    "knowledge": "a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。"
  },
  {
    "id": 75,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "There is ______ honest on the table.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "honest 以元音音素开头，前面用不定冠词 an。",
    "knowledge": "a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。"
  },
  {
    "id": 76,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "There is ______ umbrella on the table.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "umbrella 以元音音素开头，前面用不定冠词 an。",
    "knowledge": "a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。"
  },
  {
    "id": 77,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "There is ______ elephant on the table.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "elephant 以元音音素开头，前面用不定冠词 an。",
    "knowledge": "a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。"
  },
  {
    "id": 78,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "There is ______ actor on the table.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "actor 以元音音素开头，前面用不定冠词 an。",
    "knowledge": "a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。"
  },
  {
    "id": 79,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "There is ______ artist on the table.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "artist 以元音音素开头，前面用不定冠词 an。",
    "knowledge": "a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。"
  },
  {
    "id": 80,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "There is ______ engineer on the table.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "engineer 以元音音素开头，前面用不定冠词 an。",
    "knowledge": "a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。"
  },
  {
    "id": 81,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ book.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "book 以辅音音素开头，前面用不定冠词 a。",
    "knowledge": "a 用于辅音音素开头的单词前。"
  },
  {
    "id": 82,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ pen.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "pen 以辅音音素开头，前面用不定冠词 a。",
    "knowledge": "a 用于辅音音素开头的单词前。"
  },
  {
    "id": 83,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ university.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "university 以辅音音素开头，前面用不定冠词 a。",
    "knowledge": "a 用于辅音音素开头的单词前。"
  },
  {
    "id": 84,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ useful.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "useful 以辅音音素开头，前面用不定冠词 a。",
    "knowledge": "a 用于辅音音素开头的单词前。"
  },
  {
    "id": 85,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ European.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "European 以辅音音素开头，前面用不定冠词 a。",
    "knowledge": "a 用于辅音音素开头的单词前。"
  },
  {
    "id": 86,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ one-eyed.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "one-eyed 以辅音音素开头，前面用不定冠词 a。",
    "knowledge": "a 用于辅音音素开头的单词前。"
  },
  {
    "id": 87,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ dog.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "dog 以辅音音素开头，前面用不定冠词 a。",
    "knowledge": "a 用于辅音音素开头的单词前。"
  },
  {
    "id": 88,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ student.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "student 以辅音音素开头，前面用不定冠词 a。",
    "knowledge": "a 用于辅音音素开头的单词前。"
  },
  {
    "id": 89,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ teacher.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "teacher 以辅音音素开头，前面用不定冠词 a。",
    "knowledge": "a 用于辅音音素开头的单词前。"
  },
  {
    "id": 90,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ doctor.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "doctor 以辅音音素开头，前面用不定冠词 a。",
    "knowledge": "a 用于辅音音素开头的单词前。"
  },
  {
    "id": 91,
    "topic": "冠词",
    "subTopic": "定冠词",
    "source": "中考语法精选",
    "question": "______ sun rises in the east and sets in the west.",
    "options": [
      "A",
      "An",
      "The",
      "/"
    ],
    "answer": 2,
    "explanation": "表示世界上独一无二的事物（太阳、月亮、地球等）前用定冠词 the。",
    "knowledge": "定冠词 the 用于独一无二的事物前。"
  },
  {
    "id": 92,
    "topic": "冠词",
    "subTopic": "定冠词",
    "source": "中考语法精选",
    "question": "— Where is ______ nearest bookstore? — Go along this street.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 2,
    "explanation": "形容词最高级前要用定冠词 the。",
    "knowledge": "定冠词用于形容词最高级前。"
  },
  {
    "id": 93,
    "topic": "冠词",
    "subTopic": "定冠词",
    "source": "中考语法精选",
    "question": "______ Browns are having dinner now.",
    "options": [
      "A",
      "An",
      "The",
      "/"
    ],
    "answer": 2,
    "explanation": "\"the + 姓氏复数\"表示\"某某一家人\"。",
    "knowledge": "the + 姓氏复数表示一家人。"
  },
  {
    "id": 94,
    "topic": "冠词",
    "subTopic": "定冠词",
    "source": "中考语法精选",
    "question": "Please play ______ piano after school.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 2,
    "explanation": "演奏乐器时，乐器名称前要用定冠词 the。",
    "knowledge": "乐器前用定冠词 the。"
  },
  {
    "id": 95,
    "topic": "冠词",
    "subTopic": "定冠词",
    "source": "中考语法精选",
    "question": "He lives on ______ fifth floor.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 2,
    "explanation": "序数词前要用定冠词 the。",
    "knowledge": "序数词前用定冠词 the。"
  },
  {
    "id": 96,
    "topic": "冠词",
    "subTopic": "零冠词",
    "source": "中考语法精选",
    "question": "We usually have ______ breakfast at 7:00.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 3,
    "explanation": "一日三餐前一般不加冠词。",
    "knowledge": "三餐前通常不用冠词。"
  },
  {
    "id": 97,
    "topic": "冠词",
    "subTopic": "零冠词",
    "source": "中考语法精选",
    "question": "He likes playing ______ basketball.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 3,
    "explanation": "球类运动前一般不加冠词。",
    "knowledge": "球类运动前通常不用冠词。"
  },
  {
    "id": 98,
    "topic": "冠词",
    "subTopic": "零冠词",
    "source": "中考语法精选",
    "question": "I go to school by ______ bus every day.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 3,
    "explanation": "by + 交通工具，中间不加冠词。",
    "knowledge": "by + 交通工具不加冠词。"
  },
  {
    "id": 99,
    "topic": "冠词",
    "subTopic": "零冠词",
    "source": "中考语法精选",
    "question": "______ is the largest continent in the world.",
    "options": [
      "A Asia",
      "An Asia",
      "The Asia",
      "Asia"
    ],
    "answer": 3,
    "explanation": "表示洲名、国名等专有名词前一般不加冠词。",
    "knowledge": "专有名词前通常不用冠词。"
  },
  {
    "id": 100,
    "topic": "冠词",
    "subTopic": "零冠词",
    "source": "中考语法精选",
    "question": "We should learn from ______ Lei Feng.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 3,
    "explanation": "表示人名的专有名词前一般不加冠词。",
    "knowledge": "人名前通常不用冠词。"
  },
  {
    "id": 101,
    "topic": "冠词",
    "subTopic": "冠词综合",
    "source": "中考语法精选",
    "question": "— What do you want to be in the future? — I want to be ______ engineer.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "engineer 以元音音素开头，表示\"一名工程师\"用 an engineer。",
    "knowledge": "不定冠词表示泛指。"
  },
  {
    "id": 102,
    "topic": "冠词",
    "subTopic": "冠词综合",
    "source": "中考语法精选",
    "question": "______ girl in red is my sister.",
    "options": [
      "A",
      "An",
      "The",
      "/"
    ],
    "answer": 2,
    "explanation": "in red 作后置定语修饰 girl，表示特指，用 the。",
    "knowledge": "定冠词表示特指。"
  },
  {
    "id": 103,
    "topic": "冠词",
    "subTopic": "冠词综合",
    "source": "中考语法精选",
    "question": "The students often play ______ chess after class.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 3,
    "explanation": "棋类运动前一般不加冠词。",
    "knowledge": "棋类前不用冠词。"
  },
  {
    "id": 104,
    "topic": "冠词",
    "subTopic": "冠词综合",
    "source": "中考语法精选",
    "question": "I have ______ uncle. He is ______ teacher.",
    "options": [
      "a; a",
      "an; a",
      "a; an",
      "an; an"
    ],
    "answer": 1,
    "explanation": "uncle 以元音音素开头用 an；teacher 以辅音音素开头用 a。",
    "knowledge": "a/an 的区别。"
  },
  {
    "id": 105,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ am a student.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，要用人称代词主格 I。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 106,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please tell ______ the truth.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answer": 1,
    "explanation": "tell 是动词，后面接宾语，要用人称代词宾格 me。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 107,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This is ______ book.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answer": 2,
    "explanation": "修饰名词 book 要用形容词性物主代词 my。",
    "knowledge": "形容词性物主代词后接名词。"
  },
  {
    "id": 108,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This book is ______.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answer": 3,
    "explanation": "后面没有名词，要用名词性物主代词 mine。",
    "knowledge": "名词性物主代词单独使用。"
  },
  {
    "id": 109,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ are a student.",
    "options": [
      "You",
      "your",
      "yours",
      "yourself"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，要用人称代词主格 you，且与 are 搭配。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 110,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please tell ______ the truth.",
    "options": [
      "you",
      "your",
      "yours",
      "mine"
    ],
    "answer": 0,
    "explanation": "tell 是动词，后面接宾语，要用人称代词宾格 you。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 111,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This is ______ book.",
    "options": [
      "your",
      "you",
      "yours",
      "mine"
    ],
    "answer": 0,
    "explanation": "修饰名词 book 要用形容词性物主代词 your。",
    "knowledge": "形容词性物主代词后接名词。"
  },
  {
    "id": 112,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This book is ______.",
    "options": [
      "yours",
      "you",
      "your",
      "mine"
    ],
    "answer": 0,
    "explanation": "后面没有名词，要用名词性物主代词 yours。",
    "knowledge": "名词性物主代词单独使用。"
  },
  {
    "id": 113,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ is a student.",
    "options": [
      "He",
      "Him",
      "His",
      "Mine"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，要用人称代词主格 he，且与 is 搭配。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 114,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please tell ______ the truth.",
    "options": [
      "him",
      "he",
      "his",
      "mine"
    ],
    "answer": 0,
    "explanation": "tell 是动词，后面接宾语，要用人称代词宾格 him。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 115,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This is ______ book.",
    "options": [
      "his",
      "he",
      "him",
      "mine"
    ],
    "answer": 0,
    "explanation": "修饰名词 book 要用形容词性物主代词 his。",
    "knowledge": "形容词性物主代词后接名词。"
  },
  {
    "id": 116,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This book is ______.",
    "options": [
      "his",
      "he",
      "him",
      "mine"
    ],
    "answer": 0,
    "explanation": "后面没有名词，要用名词性物主代词 his。",
    "knowledge": "名词性物主代词单独使用。"
  },
  {
    "id": 117,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ is a student.",
    "options": [
      "She",
      "Her",
      "Hers",
      "Mine"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，要用人称代词主格 she，且与 is 搭配。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 118,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please tell ______ the truth.",
    "options": [
      "her",
      "she",
      "hers",
      "mine"
    ],
    "answer": 0,
    "explanation": "tell 是动词，后面接宾语，要用人称代词宾格 her。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 119,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This is ______ book.",
    "options": [
      "her",
      "she",
      "hers",
      "mine"
    ],
    "answer": 0,
    "explanation": "修饰名词 book 要用形容词性物主代词 her。",
    "knowledge": "形容词性物主代词后接名词。"
  },
  {
    "id": 120,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This book is ______.",
    "options": [
      "hers",
      "she",
      "her",
      "mine"
    ],
    "answer": 0,
    "explanation": "后面没有名词，要用名词性物主代词 hers。",
    "knowledge": "名词性物主代词单独使用。"
  },
  {
    "id": 121,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ is a student.",
    "options": [
      "It",
      "Its",
      "Mine",
      "Yours"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，要用人称代词主格 it，且与 is 搭配。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 122,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please tell ______ the truth.",
    "options": [
      "it",
      "its",
      "mine",
      "yours"
    ],
    "answer": 0,
    "explanation": "tell 是动词，后面接宾语，要用人称代词宾格 it。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 123,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This is ______ book.",
    "options": [
      "its",
      "it",
      "mine",
      "yours"
    ],
    "answer": 0,
    "explanation": "修饰名词 book 要用形容词性物主代词 its。",
    "knowledge": "形容词性物主代词后接名词。"
  },
  {
    "id": 124,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This book is ______.",
    "options": [
      "its",
      "it",
      "mine",
      "yours"
    ],
    "answer": 0,
    "explanation": "后面没有名词，要用名词性物主代词 its。",
    "knowledge": "名词性物主代词单独使用。"
  },
  {
    "id": 125,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ are students.",
    "options": [
      "We",
      "us",
      "our",
      "ours"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，要用人称代词主格 we，且与 are 搭配。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 126,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please tell ______ the truth.",
    "options": [
      "we",
      "us",
      "our",
      "ours"
    ],
    "answer": 1,
    "explanation": "tell 是动词，后面接宾语，要用人称代词宾格 us。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 127,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This is ______ book.",
    "options": [
      "we",
      "us",
      "our",
      "ours"
    ],
    "answer": 2,
    "explanation": "修饰名词 book 要用形容词性物主代词 our。",
    "knowledge": "形容词性物主代词后接名词。"
  },
  {
    "id": 128,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This book is ______.",
    "options": [
      "we",
      "us",
      "our",
      "ours"
    ],
    "answer": 3,
    "explanation": "后面没有名词，要用名词性物主代词 ours。",
    "knowledge": "名词性物主代词单独使用。"
  },
  {
    "id": 129,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ are students.",
    "options": [
      "They",
      "them",
      "their",
      "theirs"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，要用人称代词主格 they，且与 are 搭配。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 130,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please tell ______ the truth.",
    "options": [
      "they",
      "them",
      "their",
      "theirs"
    ],
    "answer": 1,
    "explanation": "tell 是动词，后面接宾语，要用人称代词宾格 them。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 131,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This is ______ book.",
    "options": [
      "they",
      "them",
      "their",
      "theirs"
    ],
    "answer": 2,
    "explanation": "修饰名词 book 要用形容词性物主代词 their。",
    "knowledge": "形容词性物主代词后接名词。"
  },
  {
    "id": 132,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This book is ______.",
    "options": [
      "they",
      "them",
      "their",
      "theirs"
    ],
    "answer": 3,
    "explanation": "后面没有名词，要用名词性物主代词 theirs。",
    "knowledge": "名词性物主代词单独使用。"
  },
  {
    "id": 133,
    "topic": "代词",
    "subTopic": "指示代词",
    "source": "中考语法精选",
    "question": "______ are my friends, Tom and Jerry.",
    "options": [
      "This",
      "That",
      "These",
      "It"
    ],
    "answer": 2,
    "explanation": "are 提示主语是复数，these（这些）用于指代近处的复数人或物。",
    "knowledge": "this/that/these/those 的用法区别。"
  },
  {
    "id": 134,
    "topic": "代词",
    "subTopic": "指示代词",
    "source": "中考语法精选",
    "question": "______ is my pen and ______ are my books.",
    "options": [
      "This; those",
      "These; that",
      "Those; this",
      "That; these"
    ],
    "answer": 0,
    "explanation": "is 接单数 this，are 接复数 those，this 与 those 形成近远对比。",
    "knowledge": "指示代词的单复数与远近。"
  },
  {
    "id": 135,
    "topic": "代词",
    "subTopic": "指示代词",
    "source": "中考语法精选",
    "question": "The weather in Beijing is colder than ______ in Guangzhou.",
    "options": [
      "it",
      "that",
      "this",
      "those"
    ],
    "answer": 1,
    "explanation": "比较结构中，用 that 指代前面提到的不可数名词 weather。",
    "knowledge": "that 指代前面提到的同类不可数名词。"
  },
  {
    "id": 136,
    "topic": "代词",
    "subTopic": "指示代词",
    "source": "中考语法精选",
    "question": "______ boys over there are playing football.",
    "options": [
      "This",
      "That",
      "These",
      "Those"
    ],
    "answer": 3,
    "explanation": "over there 表示远处，boys 是复数，所以用 those。",
    "knowledge": "those 指代远处的复数名词。"
  },
  {
    "id": 137,
    "topic": "代词",
    "subTopic": "疑问代词",
    "source": "中考语法精选",
    "question": "— ______ is your favorite subject? — Math.",
    "options": [
      "What",
      "Who",
      "Whose",
      "Which"
    ],
    "answer": 0,
    "explanation": "询问\"什么\"学科用 what。",
    "knowledge": "what 询问事物。"
  },
  {
    "id": 138,
    "topic": "代词",
    "subTopic": "疑问代词",
    "source": "中考语法精选",
    "question": "— ______ is that girl in red? — She is my sister.",
    "options": [
      "What",
      "Who",
      "Whose",
      "Which"
    ],
    "answer": 1,
    "explanation": "询问人\"是谁\"用 who。",
    "knowledge": "who 询问人。"
  },
  {
    "id": 139,
    "topic": "代词",
    "subTopic": "疑问代词",
    "source": "中考语法精选",
    "question": "— ______ book is this? — It's Mary's.",
    "options": [
      "What",
      "Who",
      "Whose",
      "Which"
    ],
    "answer": 2,
    "explanation": "询问\"谁的\"用 whose。",
    "knowledge": "whose 询问所属关系。"
  },
  {
    "id": 140,
    "topic": "代词",
    "subTopic": "疑问代词",
    "source": "中考语法精选",
    "question": "— ______ do you go to school? — By bike.",
    "options": [
      "What",
      "Who",
      "How",
      "Which"
    ],
    "answer": 2,
    "explanation": "询问方式\"怎样\"用 how。",
    "knowledge": "how 询问方式。"
  },
  {
    "id": 141,
    "topic": "代词",
    "subTopic": "疑问代词",
    "source": "中考语法精选",
    "question": "— ______ bag do you like better, the red one or the blue one?",
    "options": [
      "What",
      "Who",
      "Whose",
      "Which"
    ],
    "answer": 3,
    "explanation": "在特定范围内选择用 which。",
    "knowledge": "which 用于选择。"
  },
  {
    "id": 142,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "Would you like ______ coffee?",
    "options": [
      "some",
      "any",
      "no",
      "every"
    ],
    "answer": 0,
    "explanation": "some 常用于肯定句和表示请求、建议的疑问句；any 常用于否定句和一般疑问句。",
    "knowledge": "some 与 any 的用法区别。"
  },
  {
    "id": 143,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "There are ______ books on the shelf.",
    "options": [
      "some",
      "any",
      "no",
      "every"
    ],
    "answer": 0,
    "explanation": "some 常用于肯定句和表示请求、建议的疑问句；any 常用于否定句和一般疑问句。",
    "knowledge": "some 与 any 的用法区别。"
  },
  {
    "id": 144,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "Do you have ______ questions?",
    "options": [
      "some",
      "any",
      "no",
      "every"
    ],
    "answer": 1,
    "explanation": "some 常用于肯定句和表示请求、建议的疑问句；any 常用于否定句和一般疑问句。",
    "knowledge": "some 与 any 的用法区别。"
  },
  {
    "id": 145,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "I don't have ______ money.",
    "options": [
      "some",
      "any",
      "no",
      "every"
    ],
    "answer": 1,
    "explanation": "some 常用于肯定句和表示请求、建议的疑问句；any 常用于否定句和一般疑问句。",
    "knowledge": "some 与 any 的用法区别。"
  },
  {
    "id": 146,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "Could you give me ______ water, please?",
    "options": [
      "some",
      "any",
      "no",
      "every"
    ],
    "answer": 0,
    "explanation": "some 常用于肯定句和表示请求、建议的疑问句；any 常用于否定句和一般疑问句。",
    "knowledge": "some 与 any 的用法区别。"
  },
  {
    "id": 147,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "______ of the students passed the exam. They all worked hard.",
    "options": [
      "None",
      "All",
      "Both",
      "Neither"
    ],
    "answer": 1,
    "explanation": "由 They all worked hard 可知所有学生都通过了考试，all 表示\"全部\"。",
    "knowledge": "all 表示三者或以上全部。"
  },
  {
    "id": 148,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "There are two books on the desk. ______ of them are mine.",
    "options": [
      "All",
      "Both",
      "Neither",
      "None"
    ],
    "answer": 1,
    "explanation": "两本书都……，表示\"两者都\"用 both。",
    "knowledge": "both 表示两者都。"
  },
  {
    "id": 149,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "— Which one do you prefer, tea or coffee? — ______. I just want a glass of water.",
    "options": [
      "Both",
      "All",
      "Either",
      "Neither"
    ],
    "answer": 3,
    "explanation": "茶和咖啡两者都不要，表示\"两者都不\"用 neither。",
    "knowledge": "neither 表示两者都不。"
  },
  {
    "id": 150,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "— Is there ______ in the room? — No, it's empty.",
    "options": [
      "somebody",
      "anybody",
      "nobody",
      "everybody"
    ],
    "answer": 1,
    "explanation": "一般疑问句中表示\"某人\"用 anybody。",
    "knowledge": "somebody/anybody/nobody/everybody 的用法。"
  },
  {
    "id": 151,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "______ knows the answer except Tom.",
    "options": [
      "Somebody",
      "Anybody",
      "Nobody",
      "Everybody"
    ],
    "answer": 3,
    "explanation": "except Tom 表示除了汤姆，所以是每个人都知道答案，用 everybody。",
    "knowledge": "everybody 表示每个人。"
  },
  {
    "id": 152,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "There is ______ wrong with my bike. I have to walk to school.",
    "options": [
      "something",
      "anything",
      "nothing",
      "everything"
    ],
    "answer": 0,
    "explanation": "something wrong 表示\"某个地方出了问题\"，肯定句中用 something。",
    "knowledge": "something 用于肯定句。"
  },
  {
    "id": 153,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "______ is ready for the trip. Let's go.",
    "options": [
      "Something",
      "Anything",
      "Nothing",
      "Everything"
    ],
    "answer": 3,
    "explanation": "一切都准备好了，用 everything。",
    "knowledge": "everything 表示一切。"
  },
  {
    "id": 154,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "I have ______ to tell you. It's good news.",
    "options": [
      "anything important",
      "important something",
      "something important",
      "nothing important"
    ],
    "answer": 2,
    "explanation": "形容词修饰复合不定代词时要后置，肯定句中用 something。",
    "knowledge": "复合不定代词 + 形容词的语序。"
  },
  {
    "id": 155,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "Is there ______ in today's newspaper?",
    "options": [
      "something new",
      "new something",
      "anything new",
      "new anything"
    ],
    "answer": 2,
    "explanation": "一般疑问句中用 anything，形容词 new 后置。",
    "knowledge": "复合不定代词在疑问句中的用法。"
  },
  {
    "id": 156,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "My brother is ______ years old.",
    "options": [
      "one",
      "first",
      "the first",
      "a one"
    ],
    "answer": 0,
    "explanation": "表示年龄用基数词，1 的基数词是 one。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 157,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Today is her ______ birthday.",
    "options": [
      "one",
      "first",
      "the first",
      "a first"
    ],
    "answer": 1,
    "explanation": "表示\"第几个生日\"用序数词，1 的序数词是 first。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 158,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "My brother is ______ years old.",
    "options": [
      "two",
      "second",
      "the second",
      "a two"
    ],
    "answer": 0,
    "explanation": "表示年龄用基数词，2 的基数词是 two。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 159,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Today is her ______ birthday.",
    "options": [
      "two",
      "second",
      "the second",
      "a second"
    ],
    "answer": 1,
    "explanation": "表示\"第几个生日\"用序数词，2 的序数词是 second。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 160,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "My brother is ______ years old.",
    "options": [
      "three",
      "third",
      "the third",
      "a three"
    ],
    "answer": 0,
    "explanation": "表示年龄用基数词，3 的基数词是 three。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 161,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Today is her ______ birthday.",
    "options": [
      "three",
      "third",
      "the third",
      "a third"
    ],
    "answer": 1,
    "explanation": "表示\"第几个生日\"用序数词，3 的序数词是 third。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 162,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "My brother is ______ years old.",
    "options": [
      "four",
      "fourth",
      "the fourth",
      "a four"
    ],
    "answer": 0,
    "explanation": "表示年龄用基数词，4 的基数词是 four。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 163,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Today is her ______ birthday.",
    "options": [
      "four",
      "fourth",
      "the fourth",
      "a fourth"
    ],
    "answer": 1,
    "explanation": "表示\"第几个生日\"用序数词，4 的序数词是 fourth。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 164,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "My brother is ______ years old.",
    "options": [
      "five",
      "fifth",
      "the fifth",
      "a five"
    ],
    "answer": 0,
    "explanation": "表示年龄用基数词，5 的基数词是 five。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 165,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Today is her ______ birthday.",
    "options": [
      "five",
      "fifth",
      "the fifth",
      "a fifth"
    ],
    "answer": 1,
    "explanation": "表示\"第几个生日\"用序数词，5 的序数词是 fifth。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 166,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "My brother is ______ years old.",
    "options": [
      "nine",
      "ninth",
      "the ninth",
      "a nine"
    ],
    "answer": 0,
    "explanation": "表示年龄用基数词，9 的基数词是 nine。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 167,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Today is her ______ birthday.",
    "options": [
      "nine",
      "ninth",
      "the ninth",
      "a ninth"
    ],
    "answer": 1,
    "explanation": "表示\"第几个生日\"用序数词，9 的序数词是 ninth。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 168,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "My brother is ______ years old.",
    "options": [
      "twelve",
      "twelfth",
      "the twelfth",
      "a twelve"
    ],
    "answer": 0,
    "explanation": "表示年龄用基数词，12 的基数词是 twelve。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 169,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Today is her ______ birthday.",
    "options": [
      "twelve",
      "twelfth",
      "the twelfth",
      "a twelfth"
    ],
    "answer": 1,
    "explanation": "表示\"第几个生日\"用序数词，12 的序数词是 twelfth。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 170,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "My brother is ______ years old.",
    "options": [
      "twenty",
      "twentieth",
      "the twentieth",
      "a twenty"
    ],
    "answer": 0,
    "explanation": "表示年龄用基数词，20 的基数词是 twenty。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 171,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Today is her ______ birthday.",
    "options": [
      "twenty",
      "twentieth",
      "the twentieth",
      "a twentieth"
    ],
    "answer": 1,
    "explanation": "表示\"第几个生日\"用序数词，20 的序数词是 twentieth。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 172,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "My brother is ______ years old.",
    "options": [
      "twenty-one",
      "twenty-first",
      "the twenty-first",
      "a twenty-one"
    ],
    "answer": 0,
    "explanation": "表示年龄用基数词，21 的基数词是 twenty-one。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 173,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Today is her ______ birthday.",
    "options": [
      "twenty-one",
      "twenty-first",
      "the twenty-first",
      "a twenty-first"
    ],
    "answer": 1,
    "explanation": "表示\"第几个生日\"用序数词，21 的序数词是 twenty-first。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 174,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "My brother is ______ years old.",
    "options": [
      "one hundred",
      "one hundredth",
      "the one hundredth",
      "a one hundred"
    ],
    "answer": 0,
    "explanation": "表示年龄用基数词，100 的基数词是 one hundred。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 175,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Today is her ______ birthday.",
    "options": [
      "one hundred",
      "one hundredth",
      "the one hundredth",
      "a one hundredth"
    ],
    "answer": 1,
    "explanation": "表示\"第几个生日\"用序数词，100 的序数词是 one hundredth。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 176,
    "topic": "数词",
    "subTopic": "时间与日期",
    "source": "中考语法精选",
    "question": "We usually have classes at ______ in the morning.",
    "options": [
      "eight o'clock",
      "eight clock",
      "the eight",
      "eight a clock"
    ],
    "answer": 0,
    "explanation": "整点时间用\"基数词 + o'clock\"表示。",
    "knowledge": "整点表达法。"
  },
  {
    "id": 177,
    "topic": "数词",
    "subTopic": "时间与日期",
    "source": "中考语法精选",
    "question": "It's ______ now. It's time to go to bed.",
    "options": [
      "half past ten",
      "ten half",
      "half to ten",
      "ten and half"
    ],
    "answer": 0,
    "explanation": "half past ten 表示\"十点半\"。",
    "knowledge": "时间的表达法。"
  },
  {
    "id": 178,
    "topic": "数词",
    "subTopic": "时间与日期",
    "source": "中考语法精选",
    "question": "My birthday is on ______.",
    "options": [
      "May five",
      "May the five",
      "May fifth",
      "the May fifth"
    ],
    "answer": 2,
    "explanation": "日期用\"月份 + 序数词\"表示，May fifth 意为\"五月五日\"。",
    "knowledge": "日期的表达法。"
  },
  {
    "id": 179,
    "topic": "数词",
    "subTopic": "时间与日期",
    "source": "中考语法精选",
    "question": "The meeting will begin at ______.",
    "options": [
      "a quarter to three",
      "three quarters",
      "quarter past three",
      "a quarter three"
    ],
    "answer": 0,
    "explanation": "a quarter to three 表示\"差一刻三点\"，即两点四十五分。",
    "knowledge": "时间表达法：to 表示差几分到几点。"
  },
  {
    "id": 180,
    "topic": "数词",
    "subTopic": "时间与日期",
    "source": "中考语法精选",
    "question": "We live in the ______ century now.",
    "options": [
      "twenty-one",
      "twenty-first",
      "twenty-one's",
      "the twenty one"
    ],
    "answer": 1,
    "explanation": "表示\"第几世纪\"用序数词，21 世纪是 the twenty-first century。",
    "knowledge": "世纪用序数词。"
  },
  {
    "id": 181,
    "topic": "数词",
    "subTopic": "分数词",
    "source": "中考语法精选",
    "question": "About ______ of the students in our class are girls.",
    "options": [
      "two-fifths",
      "two-fifth",
      "two fifth",
      "second-fifths"
    ],
    "answer": 0,
    "explanation": "分数表达：分子用基数词，分母用序数词；分子大于1时分母加 s。",
    "knowledge": "分数的表达法。"
  },
  {
    "id": 182,
    "topic": "数词",
    "subTopic": "分数词",
    "source": "中考语法精选",
    "question": "______ of the water in the bottle is clean.",
    "options": [
      "One-thirds",
      "One-third",
      "First-third",
      "One three"
    ],
    "answer": 1,
    "explanation": "分子为1时，分母序数词用单数。",
    "knowledge": "分数的表达法。"
  },
  {
    "id": 183,
    "topic": "数词",
    "subTopic": "小数词",
    "source": "中考语法精选",
    "question": "The bag is ______ kilos.",
    "options": [
      "two point five",
      "two dot five",
      "two and five",
      "two points five"
    ],
    "answer": 0,
    "explanation": "2.5 读作 two point five。",
    "knowledge": "小数的读法。"
  },
  {
    "id": 184,
    "topic": "数词",
    "subTopic": "百分数",
    "source": "中考语法精选",
    "question": "______ of the earth is covered with water.",
    "options": [
      "Seventy percent",
      "Seventy percents",
      "Seventy percentage",
      "Seventy percentages"
    ],
    "answer": 0,
    "explanation": "percent 没有复数形式，seventy percent 表示\"百分之七十\"。",
    "knowledge": "百分数的表达法。"
  },
  {
    "id": 185,
    "topic": "数词",
    "subTopic": "倍数",
    "source": "中考语法精选",
    "question": "This room is ______ that one.",
    "options": [
      "twice as large as",
      "twice large as",
      "two times large as",
      "twice larger as"
    ],
    "answer": 0,
    "explanation": "倍数表达：A + be + 倍数 + as + 形容词原级 + as + B。",
    "knowledge": "倍数的表达法。"
  },
  {
    "id": 186,
    "topic": "数词",
    "subTopic": "加减乘除",
    "source": "中考语法精选",
    "question": "Three plus five ______ eight.",
    "options": [
      "is",
      "are",
      "be",
      "am"
    ],
    "answer": 0,
    "explanation": "加减乘除的结果作主语时，谓语动词通常用单数。",
    "knowledge": "数词运算作主语时的主谓一致。"
  },
  {
    "id": 187,
    "topic": "数词",
    "subTopic": "加减乘除",
    "source": "中考语法精选",
    "question": "Eight minus two ______ six.",
    "options": [
      "is",
      "are",
      "be",
      "am"
    ],
    "answer": 0,
    "explanation": "减法的结果作主语时，谓语动词用单数。",
    "knowledge": "数词运算作主语时的主谓一致。"
  },
  {
    "id": 188,
    "topic": "数词",
    "subTopic": "加减乘除",
    "source": "中考语法精选",
    "question": "Three times four ______ twelve.",
    "options": [
      "is",
      "are",
      "be",
      "am"
    ],
    "answer": 0,
    "explanation": "乘法的结果作主语时，谓语动词用单数。",
    "knowledge": "数词运算作主语时的主谓一致。"
  },
  {
    "id": 189,
    "topic": "数词",
    "subTopic": "数词综合",
    "source": "中考语法精选",
    "question": "There are ______ teachers in our school.",
    "options": [
      "two hundreds",
      "two hundred",
      "hundreds of",
      "two hundreds of"
    ],
    "answer": 1,
    "explanation": "hundred 前面有具体数字时不用复数，也不加 of。",
    "knowledge": "hundred/thousand/million 前有具体数字时的用法。"
  },
  {
    "id": 190,
    "topic": "数词",
    "subTopic": "数词综合",
    "source": "中考语法精选",
    "question": "______ people came to the concert last night.",
    "options": [
      "Hundred of",
      "Hundreds of",
      "Two hundreds",
      "Two hundreds of"
    ],
    "answer": 1,
    "explanation": "表示\"成百上千的\"用 hundreds of，前面不加具体数字。",
    "knowledge": "hundreds of 表示概数。"
  },
  {
    "id": 191,
    "topic": "数词",
    "subTopic": "数词综合",
    "source": "中考语法精选",
    "question": "My telephone number is ______.",
    "options": [
      "two three four five six seven eight",
      "two-three-four-five-six-seven-eight",
      "2,3,4,5,6,7,8",
      "two three four five six seven eights"
    ],
    "answer": 0,
    "explanation": "电话号码逐个数字读出，每个数字用基数词。",
    "knowledge": "电话号码的读法。"
  },
  {
    "id": 192,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Tom is ______ than Jim.",
    "options": [
      "taller",
      "tallest",
      "tall",
      "more tall"
    ],
    "answer": 0,
    "explanation": "than 是比较级的标志词，tall 的比较级是 taller。一般情况加 -er/-est。",
    "knowledge": "形容词比较级的构成。"
  },
  {
    "id": 193,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ boy in our class.",
    "options": [
      "the tallest",
      "tallest",
      "taller",
      "more tall"
    ],
    "answer": 0,
    "explanation": "形容词最高级前通常加 the，tall 的最高级是 tallest。",
    "knowledge": "形容词最高级的构成。"
  },
  {
    "id": 194,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Tom is ______ than Jim.",
    "options": [
      "bigger",
      "biggest",
      "big",
      "more big"
    ],
    "answer": 0,
    "explanation": "than 是比较级的标志词，big 的比较级是 bigger。重读闭音节双写尾字母加 -er/-est。",
    "knowledge": "形容词比较级的构成。"
  },
  {
    "id": 195,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ boy in our class.",
    "options": [
      "the biggest",
      "biggest",
      "bigger",
      "more big"
    ],
    "answer": 0,
    "explanation": "形容词最高级前通常加 the，big 的最高级是 biggest。",
    "knowledge": "形容词最高级的构成。"
  },
  {
    "id": 196,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Tom is ______ than Jim.",
    "options": [
      "happier",
      "happiest",
      "happy",
      "more happy"
    ],
    "answer": 0,
    "explanation": "than 是比较级的标志词，happy 的比较级是 happier。以辅音字母 + y 结尾，变 y 为 i 加 -er/-est。",
    "knowledge": "形容词比较级的构成。"
  },
  {
    "id": 197,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ boy in our class.",
    "options": [
      "the happiest",
      "happiest",
      "happier",
      "more happy"
    ],
    "answer": 0,
    "explanation": "形容词最高级前通常加 the，happy 的最高级是 happiest。",
    "knowledge": "形容词最高级的构成。"
  },
  {
    "id": 198,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Tom is ______ than Jim.",
    "options": [
      "more beautiful",
      "most beautiful",
      "beautiful",
      "the most beautiful"
    ],
    "answer": 0,
    "explanation": "than 是比较级的标志词，beautiful 的比较级是 more beautiful。多音节词前加 more/most。",
    "knowledge": "形容词比较级的构成。"
  },
  {
    "id": 199,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ boy in our class.",
    "options": [
      "the most beautiful",
      "most beautiful",
      "more beautiful",
      "beautiful"
    ],
    "answer": 0,
    "explanation": "形容词最高级前通常加 the，beautiful 的最高级是 most beautiful。",
    "knowledge": "形容词最高级的构成。"
  },
  {
    "id": 200,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Tom is ______ than Jim.",
    "options": [
      "better",
      "best",
      "good",
      "more good"
    ],
    "answer": 0,
    "explanation": "than 是比较级的标志词，good 的比较级是 better。不规则变化。",
    "knowledge": "形容词比较级的构成。"
  },
  {
    "id": 201,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ boy in our class.",
    "options": [
      "the best",
      "best",
      "better",
      "more good"
    ],
    "answer": 0,
    "explanation": "形容词最高级前通常加 the，good 的最高级是 best。",
    "knowledge": "形容词最高级的构成。"
  },
  {
    "id": 202,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Tom is ______ than Jim.",
    "options": [
      "worse",
      "worst",
      "bad",
      "more bad"
    ],
    "answer": 0,
    "explanation": "than 是比较级的标志词，bad 的比较级是 worse。不规则变化。",
    "knowledge": "形容词比较级的构成。"
  },
  {
    "id": 203,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ boy in our class.",
    "options": [
      "the worst",
      "worst",
      "worse",
      "more bad"
    ],
    "answer": 0,
    "explanation": "形容词最高级前通常加 the，bad 的最高级是 worst。",
    "knowledge": "形容词最高级的构成。"
  },
  {
    "id": 204,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Tom is ______ than Jim.",
    "options": [
      "more",
      "most",
      "many",
      "more many"
    ],
    "answer": 0,
    "explanation": "than 是比较级的标志词，many 的比较级是 more。不规则变化。",
    "knowledge": "形容词比较级的构成。"
  },
  {
    "id": 205,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ hard-working boy in our class.",
    "options": [
      "the most",
      "most",
      "more",
      "more many"
    ],
    "answer": 0,
    "explanation": "形容词最高级前通常加 the，多音节形容词 hard-working 的最高级是 the most hard-working。",
    "knowledge": "形容词最高级的构成。"
  },
  {
    "id": 206,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Tom is ______ than Jim.",
    "options": [
      "less",
      "least",
      "little",
      "more little"
    ],
    "answer": 0,
    "explanation": "than 是比较级的标志词，little 的比较级是 less。不规则变化。",
    "knowledge": "形容词比较级的构成。"
  },
  {
    "id": 207,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ hard-working boy in our class.",
    "options": [
      "the least",
      "least",
      "less",
      "more little"
    ],
    "answer": 0,
    "explanation": "形容词最高级前通常加 the，多音节形容词 hard-working 的最高级可用 the least hard-working 表示最不努力。",
    "knowledge": "形容词最高级的构成。"
  },
  {
    "id": 208,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Tom is ______ than Jim.",
    "options": [
      "farther",
      "farthest",
      "far",
      "more far"
    ],
    "answer": 0,
    "explanation": "than 是比较级的标志词，far 的比较级是 farther。不规则变化。",
    "knowledge": "形容词比较级的构成。"
  },
  {
    "id": 209,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ boy in our class.",
    "options": [
      "the farthest",
      "farthest",
      "farther",
      "more far"
    ],
    "answer": 0,
    "explanation": "形容词最高级前通常加 the，far 的最高级是 farthest。",
    "knowledge": "形容词最高级的构成。"
  },
  {
    "id": 210,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Tom is ______ than Jim.",
    "options": [
      "older",
      "oldest",
      "old",
      "more old"
    ],
    "answer": 0,
    "explanation": "than 是比较级的标志词，old 的比较级是 older。规则变化。",
    "knowledge": "形容词比较级的构成。"
  },
  {
    "id": 211,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ boy in our class.",
    "options": [
      "the oldest",
      "oldest",
      "older",
      "more old"
    ],
    "answer": 0,
    "explanation": "形容词最高级前通常加 the，old 的最高级是 oldest。",
    "knowledge": "形容词最高级的构成。"
  },
  {
    "id": 212,
    "topic": "形容词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "This box is ______ that one.",
    "options": [
      "as heavy as",
      "so heavier than",
      "as heavier as",
      "heavier as"
    ],
    "answer": 0,
    "explanation": "as + 形容词原级 + as 表示\"和……一样\"。",
    "knowledge": "as...as 中间用原级。"
  },
  {
    "id": 213,
    "topic": "形容词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "This book is not ______ that one.",
    "options": [
      "as interesting as",
      "so interesting than",
      "as more interesting as",
      "more interesting as"
    ],
    "answer": 0,
    "explanation": "not as + 形容词原级 + as 表示\"不如……\"。",
    "knowledge": "not as...as 的用法。"
  },
  {
    "id": 214,
    "topic": "形容词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "The Yangtze River is ______ river in China.",
    "options": [
      "long",
      "longer",
      "the longest",
      "the long"
    ],
    "answer": 2,
    "explanation": "in China 表示范围，要用最高级，最高级前加 the。",
    "knowledge": "最高级表示在某一范围内最……。"
  },
  {
    "id": 215,
    "topic": "形容词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "Which is ______, the sun, the moon or the earth?",
    "options": [
      "big",
      "bigger",
      "biggest",
      "the biggest"
    ],
    "answer": 3,
    "explanation": "三者比较用最高级，最高级前加 the。",
    "knowledge": "三者及以上比较用最高级。"
  },
  {
    "id": 216,
    "topic": "形容词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "The more you read, ______ you will be.",
    "options": [
      "the more knowledgeable",
      "more knowledgeable",
      "the most knowledgeable",
      "most knowledgeable"
    ],
    "answer": 0,
    "explanation": "\"the + 比较级..., the + 比较级...\"表示\"越……，越……\"。",
    "knowledge": "the + 比较级, the + 比较级。"
  },
  {
    "id": 217,
    "topic": "形容词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "He is ______ of the two boys.",
    "options": [
      "tall",
      "taller",
      "the taller",
      "the tallest"
    ],
    "answer": 2,
    "explanation": "两者中\"较……的一个\"用\"the + 比较级\"。",
    "knowledge": "the + 比较级表示两者中较……的一个。"
  },
  {
    "id": 218,
    "topic": "形容词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "The weather in Beijing is colder than ______ in Shanghai.",
    "options": [
      "it",
      "that",
      "this",
      "those"
    ],
    "answer": 1,
    "explanation": "that 指代前面提到的不可数名词 the weather。",
    "knowledge": "比较结构中 that 指代不可数名词。"
  },
  {
    "id": 219,
    "topic": "形容词",
    "subTopic": "形容词的位置",
    "source": "中考语法精选",
    "question": "I have ______ to tell you.",
    "options": [
      "something important",
      "important something",
      "anything important",
      "important anything"
    ],
    "answer": 0,
    "explanation": "形容词修饰复合不定代词时要后置。",
    "knowledge": "形容词修饰不定代词后置。"
  },
  {
    "id": 220,
    "topic": "形容词",
    "subTopic": "形容词的位置",
    "source": "中考语法精选",
    "question": "There is ______ water in the bottle.",
    "options": [
      "little",
      "a little",
      "few",
      "a few"
    ],
    "answer": 0,
    "explanation": "water 是不可数名词，little 表示\"几乎没有\"，修饰不可数名词。",
    "knowledge": "little 修饰不可数名词。"
  },
  {
    "id": 221,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He runs ______ than me.",
    "options": [
      "faster",
      "fastest",
      "fast",
      "more fast"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，fast 的比较级是 faster。一般情况加 -er/-est。",
    "knowledge": "副词比较级的构成。"
  },
  {
    "id": 222,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, Tom runs ______.",
    "options": [
      "fastest",
      "faster",
      "fast",
      "the fastest"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，要用最高级，fast 的最高级是 fastest。",
    "knowledge": "副词最高级的构成。"
  },
  {
    "id": 223,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He runs ______ than me.",
    "options": [
      "more slowly",
      "most slowly",
      "slowly",
      "the most slowly"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，slowly 的比较级是 more slowly。多音节副词前加 more/most。",
    "knowledge": "副词比较级的构成。"
  },
  {
    "id": 224,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, Tom runs ______.",
    "options": [
      "most slowly",
      "more slowly",
      "slowly",
      "the most slowly"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，要用最高级，slowly 的最高级是 most slowly。",
    "knowledge": "副词最高级的构成。"
  },
  {
    "id": 225,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He runs ______ than me.",
    "options": [
      "better",
      "best",
      "well",
      "more well"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，well 的比较级是 better。不规则变化。",
    "knowledge": "副词比较级的构成。"
  },
  {
    "id": 226,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, Tom runs ______.",
    "options": [
      "best",
      "better",
      "well",
      "the best"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，要用最高级，well 的最高级是 best。",
    "knowledge": "副词最高级的构成。"
  },
  {
    "id": 227,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He runs ______ than me.",
    "options": [
      "worse",
      "worst",
      "badly",
      "more badly"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，badly 的比较级是 worse。不规则变化。",
    "knowledge": "副词比较级的构成。"
  },
  {
    "id": 228,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, Tom runs ______.",
    "options": [
      "worst",
      "worse",
      "badly",
      "the worst"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，要用最高级，badly 的最高级是 worst。",
    "knowledge": "副词最高级的构成。"
  },
  {
    "id": 229,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He runs ______ than me.",
    "options": [
      "less",
      "least",
      "little",
      "more little"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，little 的比较级是 less。不规则变化。",
    "knowledge": "副词比较级的构成。"
  },
  {
    "id": 230,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, Tom runs ______.",
    "options": [
      "least",
      "less",
      "little",
      "the least"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，要用最高级，little 的最高级是 least。",
    "knowledge": "副词最高级的构成。"
  },
  {
    "id": 231,
    "topic": "副词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "She sings ______ Mary.",
    "options": [
      "as good as",
      "as well as",
      "so better than",
      "better as"
    ],
    "answer": 1,
    "explanation": "修饰动词 sing 要用副词 well；as...as 中间用原级。",
    "knowledge": "副词修饰动词，as...as 用原级。"
  },
  {
    "id": 232,
    "topic": "副词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "He did ______ in the exam than before.",
    "options": [
      "well",
      "better",
      "best",
      "good"
    ],
    "answer": 1,
    "explanation": "than 提示用比较级，well 的比较级是 better。",
    "knowledge": "well 的比较级是 better。"
  },
  {
    "id": 233,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "He ______ finished his homework.",
    "options": [
      "already",
      "yet",
      "ever",
      "never"
    ],
    "answer": 0,
    "explanation": "already 常用于肯定句中，表示\"已经\"，位于助动词后、实义动词前。",
    "knowledge": "already/yet/ever/never 的用法区别。"
  },
  {
    "id": 234,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "Have you ______ been to Beijing?",
    "options": [
      "already",
      "yet",
      "ever",
      "never"
    ],
    "answer": 2,
    "explanation": "ever 常用于疑问句中，表示\"曾经\"。",
    "knowledge": "ever 用于疑问句。"
  },
  {
    "id": 235,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "I have ______ seen such a beautiful place.",
    "options": [
      "already",
      "yet",
      "ever",
      "never"
    ],
    "answer": 3,
    "explanation": "never 表示\"从未\"，符合句意\"我从未见过如此美丽的地方\"。",
    "knowledge": "never 表示从未。"
  },
  {
    "id": 236,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "I like coffee, ______ I don't like tea.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 1,
    "explanation": "前后句意转折，\"喜欢咖啡但不喜欢茶\"，用 but。",
    "knowledge": "but 表示转折关系。"
  },
  {
    "id": 237,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "Hurry up, ______ you will be late for school.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 2,
    "explanation": "\"祈使句 + or + 陈述句\"表示\"否则……\"。",
    "knowledge": "or 表示\"否则\"。"
  },
  {
    "id": 238,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "Work hard, ______ you will make progress.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 0,
    "explanation": "\"祈使句 + and + 陈述句\"表示\"如果……就会……\"。",
    "knowledge": "and 表示顺承关系。"
  },
  {
    "id": 239,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "It was raining, ______ we stayed at home.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 3,
    "explanation": "前后句意是因果关系，\"因为下雨，所以待在家\"，用 so。",
    "knowledge": "so 表示因果关系。"
  },
  {
    "id": 240,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "Would you like tea ______ coffee?",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 2,
    "explanation": "选择疑问句中用 or 表示\"还是\"。",
    "knowledge": "or 表示选择。"
  },
  {
    "id": 241,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "Both my father ______ my mother are teachers.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 0,
    "explanation": "both...and... 表示\"……和……都\"。",
    "knowledge": "both...and... 固定搭配。"
  },
  {
    "id": 242,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "Not only Tom but also his parents ______ fond of music.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 1,
    "explanation": "not only...but also... 连接主语时，谓语动词遵循就近原则，his parents 是复数。",
    "knowledge": "not only...but also... 的就近原则。"
  },
  {
    "id": 243,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "Either you or I ______ going to attend the meeting.",
    "options": [
      "am",
      "is",
      "are",
      "be"
    ],
    "answer": 0,
    "explanation": "either...or... 遵循就近原则，I 后面用 am。",
    "knowledge": "either...or... 的就近原则。"
  },
  {
    "id": 244,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "Neither he nor she ______ from America.",
    "options": [
      "come",
      "comes",
      "coming",
      "to come"
    ],
    "answer": 1,
    "explanation": "neither...nor... 遵循就近原则，she 是第三人称单数，谓语用 comes。",
    "knowledge": "neither...nor... 的就近原则。"
  },
  {
    "id": 245,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "I will visit you ______ I come back.",
    "options": [
      "if",
      "though",
      "because",
      "but"
    ],
    "answer": 0,
    "explanation": "if 引导条件状语从句，意为\"如果\"。",
    "knowledge": "if 引导条件状语从句。"
  },
  {
    "id": 246,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "______ it was raining, we still went camping.",
    "options": [
      "If",
      "Because",
      "Although",
      "So"
    ],
    "answer": 2,
    "explanation": "although 引导让步状语从句，意为\"虽然\"，不能与 but 连用。",
    "knowledge": "although 引导让步状语从句。"
  },
  {
    "id": 247,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "He didn't go to school ______ he was ill.",
    "options": [
      "if",
      "because",
      "although",
      "but"
    ],
    "answer": 1,
    "explanation": "because 引导原因状语从句，说明不上学的原因。",
    "knowledge": "because 引导原因状语从句。"
  },
  {
    "id": 248,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "We should study hard ______ we can pass the exam.",
    "options": [
      "so that",
      "because",
      "although",
      "if"
    ],
    "answer": 0,
    "explanation": "so that 引导目的状语从句，意为\"以便，为了\"。",
    "knowledge": "so that 引导目的状语从句。"
  },
  {
    "id": 249,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "I have known him ______ he came here.",
    "options": [
      "when",
      "while",
      "since",
      "until"
    ],
    "answer": 2,
    "explanation": "since 引导时间状语从句，常与现在完成时连用。",
    "knowledge": "since 与现在完成时连用。"
  },
  {
    "id": 250,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "Don't leave ______ the teacher comes back.",
    "options": [
      "when",
      "while",
      "since",
      "until"
    ],
    "answer": 3,
    "explanation": "not...until... 表示\"直到……才……\"。",
    "knowledge": "not...until... 固定搭配。"
  },
  {
    "id": 251,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "______ he is young, he knows a lot.",
    "options": [
      "If",
      "Because",
      "Although",
      "So"
    ],
    "answer": 2,
    "explanation": "although 引导让步状语从句，\"虽然他年纪小，但懂得很多\"。",
    "knowledge": "although 的用法。"
  },
  {
    "id": 252,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "I was doing my homework ______ my mother was cooking.",
    "options": [
      "when",
      "while",
      "since",
      "until"
    ],
    "answer": 1,
    "explanation": "while 引导时间状语从句，强调两个动作同时进行。",
    "knowledge": "while 强调动作同时进行。"
  },
  {
    "id": 253,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually get up ______ 7 o'clock.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 0,
    "explanation": "具体时刻前用 at。",
    "knowledge": "时间介词 at/on/in 的用法。"
  },
  {
    "id": 254,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually get up ______ Monday.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 1,
    "explanation": "具体某一天前用 on。",
    "knowledge": "时间介词 at/on/in 的用法。"
  },
  {
    "id": 255,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually get up ______ 2024.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 2,
    "explanation": "年、月、季节前用 in。",
    "knowledge": "时间介词 at/on/in 的用法。"
  },
  {
    "id": 256,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually get up ______ the morning.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 2,
    "explanation": "上午/下午/晚上用 in。",
    "knowledge": "时间介词 at/on/in 的用法。"
  },
  {
    "id": 257,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually get up ______ a cold morning.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 1,
    "explanation": "具体某天的上午/下午/晚上用 on。",
    "knowledge": "时间介词 at/on/in 的用法。"
  },
  {
    "id": 258,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually get up ______ noon.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 0,
    "explanation": "正午、午夜用 at。",
    "knowledge": "时间介词 at/on/in 的用法。"
  },
  {
    "id": 259,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually get up ______ night.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 0,
    "explanation": "night 前用 at。",
    "knowledge": "时间介词 at/on/in 的用法。"
  },
  {
    "id": 260,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually get up ______ summer.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 2,
    "explanation": "季节前用 in。",
    "knowledge": "时间介词 at/on/in 的用法。"
  },
  {
    "id": 261,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually get up ______ June 1st.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 1,
    "explanation": "具体日期前用 on。",
    "knowledge": "时间介词 at/on/in 的用法。"
  },
  {
    "id": 262,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually get up ______ the age of ten.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 0,
    "explanation": "年龄前用 at。",
    "knowledge": "时间介词 at/on/in 的用法。"
  },
  {
    "id": 263,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "There is a book ______ the desk.",
    "options": [
      "on",
      "in",
      "at",
      "under"
    ],
    "answer": 0,
    "explanation": "on 表示\"在……上面\"，与表面接触。",
    "knowledge": "on 表示在表面上。"
  },
  {
    "id": 264,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The ball is ______ the box.",
    "options": [
      "on",
      "in",
      "at",
      "under"
    ],
    "answer": 1,
    "explanation": "in 表示\"在……里面\"。",
    "knowledge": "in 表示在里面。"
  },
  {
    "id": 265,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The cat is ______ the chair.",
    "options": [
      "on",
      "in",
      "at",
      "under"
    ],
    "answer": 3,
    "explanation": "under 表示\"在……下面\"。",
    "knowledge": "under 表示在下面。"
  },
  {
    "id": 266,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "He lives ______ Beijing.",
    "options": [
      "on",
      "in",
      "at",
      "to"
    ],
    "answer": 1,
    "explanation": "in 用于大地点前，如城市、国家。",
    "knowledge": "in 用于大地点。"
  },
  {
    "id": 267,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "He is waiting ______ the bus stop.",
    "options": [
      "on",
      "in",
      "at",
      "to"
    ],
    "answer": 2,
    "explanation": "at 用于小地点前，如车站、学校。",
    "knowledge": "at 用于小地点。"
  },
  {
    "id": 268,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "Japan is ______ the east of China.",
    "options": [
      "on",
      "in",
      "at",
      "to"
    ],
    "answer": 3,
    "explanation": "to 表示在某范围之外，不接壤。",
    "knowledge": "方位介词 to/on/in 的区别。"
  },
  {
    "id": 269,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "Shandong lies ______ the east of Hebei.",
    "options": [
      "on",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "on 表示在某范围之外且接壤。",
    "knowledge": "方位介词 on 表示接壤。"
  },
  {
    "id": 270,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "Guangdong is ______ the south of China.",
    "options": [
      "on",
      "in",
      "at",
      "to"
    ],
    "answer": 1,
    "explanation": "in 表示在某范围之内。",
    "knowledge": "方位介词 in 表示在范围内。"
  },
  {
    "id": 271,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The picture is ______ the wall.",
    "options": [
      "on",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "on 表示\"在……上面\"，图画挂在墙表面上。",
    "knowledge": "on 表示在表面上。"
  },
  {
    "id": 272,
    "topic": "介词",
    "subTopic": "方式/手段",
    "source": "中考语法精选",
    "question": "I usually go to school ______ foot.",
    "options": [
      "by",
      "on",
      "in",
      "at"
    ],
    "answer": 1,
    "explanation": "on foot 是固定搭配，意为\"步行\"。",
    "knowledge": "on foot 固定搭配。"
  },
  {
    "id": 273,
    "topic": "介词",
    "subTopic": "方式/手段",
    "source": "中考语法精选",
    "question": "She goes to work ______ bus every day.",
    "options": [
      "by",
      "on",
      "in",
      "at"
    ],
    "answer": 0,
    "explanation": "by + 交通工具，表示\"乘坐……\"。",
    "knowledge": "by + 交通工具。"
  },
  {
    "id": 274,
    "topic": "介词",
    "subTopic": "方式/手段",
    "source": "中考语法精选",
    "question": "Please write ______ pencil.",
    "options": [
      "by",
      "on",
      "in",
      "with"
    ],
    "answer": 2,
    "explanation": "in + 语言/材料/颜色，表示\"用……\"。",
    "knowledge": "in 表示用某种材料或语言。"
  },
  {
    "id": 275,
    "topic": "介词",
    "subTopic": "方式/手段",
    "source": "中考语法精选",
    "question": "He cut the paper ______ a knife.",
    "options": [
      "by",
      "on",
      "in",
      "with"
    ],
    "answer": 3,
    "explanation": "with 表示\"用某种工具\"。",
    "knowledge": "with 表示用工具。"
  },
  {
    "id": 276,
    "topic": "介词",
    "subTopic": "原因/目的",
    "source": "中考语法精选",
    "question": "He was late ______ the heavy rain.",
    "options": [
      "because",
      "because of",
      "since",
      "as"
    ],
    "answer": 1,
    "explanation": "because of 后接名词短语，the heavy rain 是名词短语。",
    "knowledge": "because of 后接名词/名词短语。"
  },
  {
    "id": 277,
    "topic": "介词",
    "subTopic": "原因/目的",
    "source": "中考语法精选",
    "question": "She was absent ______ she was ill.",
    "options": [
      "because",
      "because of",
      "since",
      "as"
    ],
    "answer": 0,
    "explanation": "because 后接从句，说明原因。",
    "knowledge": "because 后接从句。"
  },
  {
    "id": 278,
    "topic": "介词",
    "subTopic": "原因/目的",
    "source": "中考语法精选",
    "question": "Thank you ______ helping me.",
    "options": [
      "for",
      "of",
      "to",
      "with"
    ],
    "answer": 0,
    "explanation": "thank you for doing sth. 意为\"感谢你做某事\"。",
    "knowledge": "thank you for... 固定搭配。"
  },
  {
    "id": 279,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Are you good ______ playing basketball?",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "be good at 是固定搭配，意为\"擅长……\"。",
    "knowledge": "be good at 固定搭配。"
  },
  {
    "id": 280,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "I am interested ______ English.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 1,
    "explanation": "be interested in 是固定搭配，意为\"对……感兴趣\"。",
    "knowledge": "be interested in 固定搭配。"
  },
  {
    "id": 281,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "We are proud ______ our country.",
    "options": [
      "at",
      "in",
      "of",
      "with"
    ],
    "answer": 2,
    "explanation": "be proud of 是固定搭配，意为\"为……感到骄傲\"。",
    "knowledge": "be proud of 固定搭配。"
  },
  {
    "id": 282,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please look ______ the new word in the dictionary.",
    "options": [
      "at",
      "for",
      "up",
      "after"
    ],
    "answer": 2,
    "explanation": "look up 意为\"查阅\"。",
    "knowledge": "look up 固定搭配。"
  },
  {
    "id": 283,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Don't worry ______ me. I can take care of myself.",
    "options": [
      "at",
      "about",
      "on",
      "with"
    ],
    "answer": 1,
    "explanation": "worry about 意为\"担心……\"。",
    "knowledge": "worry about 固定搭配。"
  },
  {
    "id": 284,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "He is looking forward ______ hearing from you.",
    "options": [
      "at",
      "for",
      "to",
      "with"
    ],
    "answer": 2,
    "explanation": "look forward to 中的 to 是介词，后接名词或动名词。",
    "knowledge": "look forward to doing 固定搭配。"
  },
  {
    "id": 285,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "We should depend ______ ourselves.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 2,
    "explanation": "depend on 意为\"依靠\"。",
    "knowledge": "depend on 固定搭配。"
  },
  {
    "id": 286,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "The meeting is ______ the morning of July 1st.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 1,
    "explanation": "具体某一天的上午用 on。",
    "knowledge": "具体某天上午/下午/晚上用 on。"
  },
  {
    "id": 287,
    "topic": "句子成分",
    "subTopic": "主语",
    "source": "中考语法精选",
    "question": "______ is my best friend.",
    "options": [
      "Tom",
      "Runs",
      "Quickly",
      "Happy"
    ],
    "answer": 0,
    "explanation": "Tom 是句子的主语，表示\"谁\"。",
    "knowledge": "主语是句子叙述的主体。"
  },
  {
    "id": 288,
    "topic": "句子成分",
    "subTopic": "谓语",
    "source": "中考语法精选",
    "question": "He ______ English very well.",
    "options": [
      "speaks",
      "student",
      "carefully",
      "clever"
    ],
    "answer": 0,
    "explanation": "speaks 是谓语动词，说明主语的动作。",
    "knowledge": "谓语说明主语的动作或状态。"
  },
  {
    "id": 289,
    "topic": "句子成分",
    "subTopic": "宾语",
    "source": "中考语法精选",
    "question": "I like ______ very much.",
    "options": [
      "swimming",
      "swim",
      "swims",
      "swam"
    ],
    "answer": 0,
    "explanation": "swimming 是 like 的宾语，动名词可作宾语。",
    "knowledge": "宾语是动作的承受者。"
  },
  {
    "id": 290,
    "topic": "句子成分",
    "subTopic": "表语",
    "source": "中考语法精选",
    "question": "She is ______ today.",
    "options": [
      "happy",
      "happily",
      "a student",
      "Both A and C"
    ],
    "answer": 3,
    "explanation": "happy 是形容词作表语，a student 是名词作表语，两者都可以。",
    "knowledge": "表语位于系动词后，说明主语的身份、状态等。"
  },
  {
    "id": 291,
    "topic": "句子成分",
    "subTopic": "定语",
    "source": "中考语法精选",
    "question": "This is a ______ book.",
    "options": [
      "interesting",
      "interest",
      "interested",
      "interests"
    ],
    "answer": 0,
    "explanation": "interesting 是形容词作定语，修饰名词 book。",
    "knowledge": "定语修饰名词或代词。"
  },
  {
    "id": 292,
    "topic": "句子成分",
    "subTopic": "状语",
    "source": "中考语法精选",
    "question": "He runs ______.",
    "options": [
      "fast",
      "quick",
      "a runner",
      "runner"
    ],
    "answer": 0,
    "explanation": "fast 是副词作状语，修饰动词 runs。",
    "knowledge": "状语修饰动词、形容词、副词或整个句子。"
  },
  {
    "id": 293,
    "topic": "句子成分",
    "subTopic": "宾语补足语",
    "source": "中考语法精选",
    "question": "We made him ______.",
    "options": [
      "happy",
      "happily",
      "a happy",
      "happiness"
    ],
    "answer": 0,
    "explanation": "happy 是形容词作宾语补足语，补充说明宾语 him 的状态。",
    "knowledge": "宾语补足语补充说明宾语。"
  },
  {
    "id": 294,
    "topic": "句子成分",
    "subTopic": "直接宾语/间接宾语",
    "source": "中考语法精选",
    "question": "My mother bought me a new dress.",
    "options": [
      "My mother 是主语，me 是直接宾语，a new dress 是间接宾语",
      "My mother 是主语，me 是间接宾语，a new dress 是直接宾语",
      "My mother 是主语，bought 是间接宾语",
      "My mother 是直接宾语，me 是间接宾语"
    ],
    "answer": 1,
    "explanation": "buy sb. sth. 结构中，sb. 是间接宾语，sth. 是直接宾语。",
    "knowledge": "双宾语：间接宾语指人，直接宾语指物。"
  },
  {
    "id": 295,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"The boy in red is playing basketball happily\", the underlined part is ______.",
    "options": [
      "主语",
      "谓语",
      "状语",
      "定语"
    ],
    "answer": 2,
    "explanation": "happily 是副词，修饰谓语动词 is playing，作状语。",
    "knowledge": "副词通常作状语。"
  },
  {
    "id": 296,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In \"He gave me a book\", \"me\" is the ______.",
    "options": [
      "主语",
      "间接宾语",
      "直接宾语",
      "宾语补足语"
    ],
    "answer": 1,
    "explanation": "give sb. sth. 中，sb. 是间接宾语，sth. 是直接宾语。",
    "knowledge": "间接宾语指人。"
  },
  {
    "id": 297,
    "topic": "句型",
    "subTopic": "五大基本句型",
    "source": "中考语法精选",
    "question": "The sun rises. This is a ______ sentence pattern.",
    "options": [
      "S + V",
      "S + V + O",
      "S + V + P",
      "S + V + IO + DO"
    ],
    "answer": 0,
    "explanation": "The sun rises 是\"主语 + 谓语\"结构（S + V）。",
    "knowledge": "主谓结构。"
  },
  {
    "id": 298,
    "topic": "句型",
    "subTopic": "五大基本句型",
    "source": "中考语法精选",
    "question": "I love English. This is a ______ sentence pattern.",
    "options": [
      "S + V",
      "S + V + O",
      "S + V + P",
      "S + V + IO + DO"
    ],
    "answer": 1,
    "explanation": "I love English 是\"主语 + 谓语 + 宾语\"结构（S + V + O）。",
    "knowledge": "主谓宾结构。"
  },
  {
    "id": 299,
    "topic": "句型",
    "subTopic": "五大基本句型",
    "source": "中考语法精选",
    "question": "She is a teacher. This is a ______ sentence pattern.",
    "options": [
      "S + V",
      "S + V + O",
      "S + V + P",
      "S + V + IO + DO"
    ],
    "answer": 2,
    "explanation": "She is a teacher 是\"主语 + 系动词 + 表语\"结构（S + V + P）。",
    "knowledge": "主系表结构。"
  },
  {
    "id": 300,
    "topic": "句型",
    "subTopic": "五大基本句型",
    "source": "中考语法精选",
    "question": "He gave me a pen. This is a ______ sentence pattern.",
    "options": [
      "S + V",
      "S + V + O",
      "S + V + P",
      "S + V + IO + DO"
    ],
    "answer": 3,
    "explanation": "He gave me a pen 是\"主语 + 谓语 + 间接宾语 + 直接宾语\"结构（S + V + IO + DO）。",
    "knowledge": "主谓双宾结构。"
  },
  {
    "id": 301,
    "topic": "句型",
    "subTopic": "五大基本句型",
    "source": "中考语法精选",
    "question": "We made the room clean. This is a ______ sentence pattern.",
    "options": [
      "S + V",
      "S + V + O",
      "S + V + P",
      "S + V + O + C"
    ],
    "answer": 3,
    "explanation": "We made the room clean 是\"主语 + 谓语 + 宾语 + 宾语补足语\"结构（S + V + O + C）。",
    "knowledge": "主谓宾宾补结构。"
  },
  {
    "id": 302,
    "topic": "句型",
    "subTopic": "五大基本句型",
    "source": "中考语法精选",
    "question": "The flowers smell sweet. The underlined part is ______.",
    "options": [
      "主语",
      "谓语",
      "表语",
      "宾语"
    ],
    "answer": 2,
    "explanation": "smell 是系动词，sweet 是形容词作表语。",
    "knowledge": "主系表结构中表语说明主语特征。"
  },
  {
    "id": 303,
    "topic": "句型",
    "subTopic": "There be",
    "source": "中考语法精选",
    "question": "There ______ a book and two pens on the desk.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "there be 句型遵循就近原则，a book 是单数，所以用 is。",
    "knowledge": "there be 的就近原则。"
  },
  {
    "id": 304,
    "topic": "句型",
    "subTopic": "There be",
    "source": "中考语法精选",
    "question": "There ______ two pens and a book on the desk.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 1,
    "explanation": "there be 句型遵循就近原则，two pens 是复数，所以用 are。",
    "knowledge": "there be 的就近原则。"
  },
  {
    "id": 305,
    "topic": "句型",
    "subTopic": "There be",
    "source": "中考语法精选",
    "question": "There ______ no water in the bottle.",
    "options": [
      "is",
      "are",
      "has",
      "have"
    ],
    "answer": 0,
    "explanation": "water 是不可数名词，there be 句型中 be 动词用 is。",
    "knowledge": "there be 句型中不可数名词用 is。"
  },
  {
    "id": 306,
    "topic": "句型",
    "subTopic": "There be",
    "source": "中考语法精选",
    "question": "______ there any milk in the fridge?",
    "options": [
      "Is",
      "Are",
      "Has",
      "Have"
    ],
    "answer": 0,
    "explanation": "milk 是不可数名词，一般疑问句将 is 提前。",
    "knowledge": "there be 句型的一般疑问句。"
  },
  {
    "id": 307,
    "topic": "句型",
    "subTopic": "There be",
    "source": "中考语法精选",
    "question": "There is going to ______ a meeting tomorrow.",
    "options": [
      "be",
      "have",
      "has",
      "is"
    ],
    "answer": 0,
    "explanation": "there be 句型的将来时用 there is/are going to be。",
    "knowledge": "there be 句型的将来时。"
  },
  {
    "id": 308,
    "topic": "句型",
    "subTopic": "There be",
    "source": "中考语法精选",
    "question": "There ______ a sports meeting next week.",
    "options": [
      "will be",
      "will have",
      "is going to have",
      "is having"
    ],
    "answer": 0,
    "explanation": "there be 句型的将来时用 there will be 或 there is/are going to be。",
    "knowledge": "there be 的一般将来时。"
  },
  {
    "id": 309,
    "topic": "句型",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "English ______ by many people around the world.",
    "options": [
      "is spoken",
      "speaks",
      "is speaking",
      "spoken"
    ],
    "answer": 0,
    "explanation": "English 与 speak 是被动关系，用一般现在时的被动语态 is spoken。",
    "knowledge": "一般现在时被动语态：am/is/are + 过去分词。"
  },
  {
    "id": 310,
    "topic": "句型",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The bridge ______ last year.",
    "options": [
      "is built",
      "was built",
      "built",
      "builds"
    ],
    "answer": 1,
    "explanation": "last year 提示用一般过去时，bridge 与 build 是被动关系，用 was built。",
    "knowledge": "一般过去时被动语态：was/were + 过去分词。"
  },
  {
    "id": 311,
    "topic": "句型",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The problem will ______ tomorrow.",
    "options": [
      "solve",
      "be solved",
      "solved",
      "be solving"
    ],
    "answer": 1,
    "explanation": "problem 与 solve 是被动关系，will 后接 be + 过去分词。",
    "knowledge": "一般将来时被动语态：will be + 过去分词。"
  },
  {
    "id": 312,
    "topic": "句型",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "A new school ______ in our city now.",
    "options": [
      "is built",
      "is being built",
      "was built",
      "will be built"
    ],
    "answer": 1,
    "explanation": "now 提示用现在进行时，school 与 build 是被动关系，用 is being built。",
    "knowledge": "现在进行时被动语态：am/is/are being + 过去分词。"
  },
  {
    "id": 313,
    "topic": "句型",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The book ______ by Lu Xun many years ago.",
    "options": [
      "is written",
      "was written",
      "wrote",
      "writes"
    ],
    "answer": 1,
    "explanation": "many years ago 提示用一般过去时，book 与 write 是被动关系，用 was written。",
    "knowledge": "一般过去时被动语态。"
  },
  {
    "id": 314,
    "topic": "句型",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "Children should ______ to play computer games too much.",
    "options": [
      "not allow",
      "not be allowed",
      "not allowed",
      "be not allowed"
    ],
    "answer": 1,
    "explanation": "children 与 allow 是被动关系，情态动词 should 后接 be + 过去分词。",
    "knowledge": "含情态动词的被动语态：情态动词 + be + 过去分词。"
  },
  {
    "id": 315,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "He likes playing football. (改为否定句)",
    "options": [
      "He don't like playing football.",
      "He doesn't likes playing football.",
      "He doesn't like playing football.",
      "He not likes playing football."
    ],
    "answer": 2,
    "explanation": "主语 he 是第三人称单数，否定句用 doesn't + 动词原形 like。",
    "knowledge": "一般现在时第三人称单数的否定句。"
  },
  {
    "id": 316,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "She went to Beijing yesterday. (改为一般疑问句)",
    "options": [
      "Did she went to Beijing yesterday?",
      "Does she go to Beijing yesterday?",
      "Did she go to Beijing yesterday?",
      "Was she go to Beijing yesterday?"
    ],
    "answer": 2,
    "explanation": "一般过去时的一般疑问句用 Did 开头，后面动词用原形 go。",
    "knowledge": "一般过去时的一般疑问句。"
  },
  {
    "id": 317,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "They are watching TV now. (改为否定句)",
    "options": [
      "They aren't watching TV now.",
      "They don't watching TV now.",
      "They not are watching TV now.",
      "They doesn't watch TV now."
    ],
    "answer": 0,
    "explanation": "现在进行时的否定句在 be 动词后加 not。",
    "knowledge": "现在进行时的否定句。"
  },
  {
    "id": 318,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "______ you ______ a bike? — Yes, I do.",
    "options": [
      "Do; have",
      "Are; having",
      "Do; has",
      "Are; have"
    ],
    "answer": 0,
    "explanation": "由答语 Yes, I do. 可知一般疑问句用 Do 开头，后面用动词原形 have。",
    "knowledge": "一般现在时一般疑问句及回答。"
  },
  {
    "id": 319,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "He has few friends, ______ he?",
    "options": [
      "does",
      "doesn't",
      "has",
      "hasn't"
    ],
    "answer": 0,
    "explanation": "few 表示否定含义，但反意疑问句遵循前肯后否/前否后肯，has 为实义动词，用 does 提问。",
    "knowledge": "反意疑问句。"
  },
  {
    "id": 320,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "You don't like apples, ______ you?",
    "options": [
      "do",
      "don't",
      "are",
      "aren't"
    ],
    "answer": 0,
    "explanation": "前否后肯，don't 的疑问部分用 do。",
    "knowledge": "反意疑问句前否后肯。"
  },
  {
    "id": 321,
    "topic": "简单句",
    "subTopic": "特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ is your schoolbag? — It's blue.",
    "options": [
      "What",
      "What color",
      "How",
      "Where"
    ],
    "answer": 1,
    "explanation": "由答语 blue 可知询问颜色，用 what color。",
    "knowledge": "what color 询问颜色。"
  },
  {
    "id": 322,
    "topic": "简单句",
    "subTopic": "特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ is the T-shirt? — It's 50 yuan.",
    "options": [
      "How many",
      "How much",
      "What",
      "How old"
    ],
    "answer": 1,
    "explanation": "由答语 50 yuan 可知询问价格，用 how much。",
    "knowledge": "how much 询问价格。"
  },
  {
    "id": 323,
    "topic": "简单句",
    "subTopic": "特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ do you go to school? — On foot.",
    "options": [
      "What",
      "Where",
      "How",
      "When"
    ],
    "answer": 2,
    "explanation": "由答语 On foot 可知询问方式，用 how。",
    "knowledge": "how 询问方式。"
  },
  {
    "id": 324,
    "topic": "简单句",
    "subTopic": "特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ did you arrive? — At 8 o'clock.",
    "options": [
      "What",
      "Where",
      "How",
      "When"
    ],
    "answer": 3,
    "explanation": "由答语 At 8 o'clock 可知询问时间，用 when。",
    "knowledge": "when 询问时间。"
  },
  {
    "id": 325,
    "topic": "简单句",
    "subTopic": "特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ is the nearest hospital? — About two kilometers away.",
    "options": [
      "How long",
      "How far",
      "How often",
      "How soon"
    ],
    "answer": 1,
    "explanation": "由答语 About two kilometers away 可知询问距离，用 how far。",
    "knowledge": "how far 询问距离。"
  },
  {
    "id": 326,
    "topic": "简单句",
    "subTopic": "感叹句",
    "source": "中考语法精选",
    "question": "______ beautiful flower it is!",
    "options": [
      "What a",
      "What",
      "How a",
      "How"
    ],
    "answer": 0,
    "explanation": "what 修饰名词，flower 是可数名词单数，用 What a + 形容词 + 可数名词单数。",
    "knowledge": "what 引导的感叹句。"
  },
  {
    "id": 327,
    "topic": "简单句",
    "subTopic": "感叹句",
    "source": "中考语法精选",
    "question": "______ interesting the book is!",
    "options": [
      "What",
      "What an",
      "How",
      "How an"
    ],
    "answer": 2,
    "explanation": "how 修饰形容词或副词，the book is 后接形容词 interesting，用 How + 形容词。",
    "knowledge": "how 引导的感叹句。"
  },
  {
    "id": 328,
    "topic": "简单句",
    "subTopic": "感叹句",
    "source": "中考语法精选",
    "question": "______ fine weather it is today!",
    "options": [
      "What a",
      "What",
      "How",
      "How a"
    ],
    "answer": 1,
    "explanation": "weather 是不可数名词，用 What + 形容词 + 不可数名词。",
    "knowledge": "what 修饰不可数名词的感叹句。"
  },
  {
    "id": 329,
    "topic": "简单句",
    "subTopic": "感叹句",
    "source": "中考语法精选",
    "question": "______ hard he works!",
    "options": [
      "What",
      "What a",
      "How",
      "How a"
    ],
    "answer": 2,
    "explanation": "hard 是副词，how 修饰副词，用 How + 副词。",
    "knowledge": "how 修饰副词的感叹句。"
  },
  {
    "id": 330,
    "topic": "简单句",
    "subTopic": "祈使句",
    "source": "中考语法精选",
    "question": "______ late for school again.",
    "options": [
      "Don't be",
      "Not be",
      "Don't",
      "Not"
    ],
    "answer": 0,
    "explanation": "祈使句的否定形式在动词原形前加 Don't，be late 是固定搭配。",
    "knowledge": "祈使句的否定形式。"
  },
  {
    "id": 331,
    "topic": "简单句",
    "subTopic": "祈使句",
    "source": "中考语法精选",
    "question": "Please ______ quiet in the library.",
    "options": [
      "be",
      "is",
      "are",
      "being"
    ],
    "answer": 0,
    "explanation": "please 开头的祈使句用动词原形，be quiet 意为\"保持安静\"。",
    "knowledge": "祈使句用动词原形。"
  },
  {
    "id": 332,
    "topic": "简单句",
    "subTopic": "祈使句",
    "source": "中考语法精选",
    "question": "______ me your book, please.",
    "options": [
      "Pass",
      "To pass",
      "Passing",
      "Passes"
    ],
    "answer": 0,
    "explanation": "祈使句以动词原形开头。",
    "knowledge": "祈使句的结构。"
  },
  {
    "id": 333,
    "topic": "简单句",
    "subTopic": "祈使句",
    "source": "中考语法精选",
    "question": "Let's ______ to the park this afternoon.",
    "options": [
      "go",
      "to go",
      "going",
      "goes"
    ],
    "answer": 0,
    "explanation": "let's 后接动词原形。",
    "knowledge": "let's do sth. 结构。"
  },
  {
    "id": 334,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Could you tell me ______?",
    "options": [
      "where is the post office",
      "where the post office is",
      "where does the post office",
      "the post office is where"
    ],
    "answer": 1,
    "explanation": "宾语从句要用陈述语序，即连接词 + 主语 + 谓语。",
    "knowledge": "宾语从句用陈述语序。"
  },
  {
    "id": 335,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "I don't know ______ he will come tomorrow.",
    "options": [
      "if",
      "that",
      "what",
      "where"
    ],
    "answer": 0,
    "explanation": "if 表示\"是否\"，引导宾语从句，符合句意\"我不知道他明天是否会来\"。",
    "knowledge": "if/whether 引导宾语从句。"
  },
  {
    "id": 336,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "She asked me ______ I liked English.",
    "options": [
      "if",
      "what",
      "which",
      "how"
    ],
    "answer": 0,
    "explanation": "asked 表示疑问，if 表示\"是否\"，引导宾语从句。",
    "knowledge": "if 引导宾语从句表\"是否\"。"
  },
  {
    "id": 337,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "He said ______ he would visit his grandparents.",
    "options": [
      "if",
      "that",
      "what",
      "when"
    ],
    "answer": 1,
    "explanation": "宾语从句是陈述句时，用 that 引导，that 可省略。",
    "knowledge": "that 引导宾语从句。"
  },
  {
    "id": 338,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Can you tell me ______ you bought this dress?",
    "options": [
      "how much",
      "how many",
      "how long",
      "how often"
    ],
    "answer": 0,
    "explanation": "询问连衣裙的价格用 how much。",
    "knowledge": "宾语从句连接词的选择。"
  },
  {
    "id": 339,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "I wonder ______ he is so sad.",
    "options": [
      "why",
      "what",
      "that",
      "which"
    ],
    "answer": 0,
    "explanation": "wonder 后接宾语从句，why 表示\"为什么\"，符合句意。",
    "knowledge": "宾语从句连接词 why。"
  },
  {
    "id": 340,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Our teacher told us that the earth ______ around the sun.",
    "options": [
      "moves",
      "moved",
      "move",
      "is moving"
    ],
    "answer": 0,
    "explanation": "宾语从句表示客观真理时，时态不受主句影响，用一般现在时。",
    "knowledge": "宾语从句的时态：客观真理用一般现在时。"
  },
  {
    "id": 341,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "He asked me if I ______ finish the work on time.",
    "options": [
      "can",
      "could",
      "may",
      "might"
    ],
    "answer": 1,
    "explanation": "主句 asked 是一般过去时，宾语从句也要用相应的过去时态，can 变为 could。",
    "knowledge": "宾语从句的时态呼应。"
  },
  {
    "id": 342,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "This is the boy ______ father is a doctor.",
    "options": [
      "who",
      "which",
      "whose",
      "that"
    ],
    "answer": 2,
    "explanation": "先行词 the boy 与 father 是所属关系，用 whose 引导定语从句。",
    "knowledge": "whose 引导定语从句表示所属。"
  },
  {
    "id": 343,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "The book ______ I bought yesterday is very interesting.",
    "options": [
      "who",
      "which",
      "whom",
      "whose"
    ],
    "answer": 1,
    "explanation": "先行词 the book 是物，关系代词用 which 或 that。",
    "knowledge": "which 指物的定语从句。"
  },
  {
    "id": 344,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "The man ______ is talking with my teacher is my father.",
    "options": [
      "who",
      "which",
      "whom",
      "whose"
    ],
    "answer": 0,
    "explanation": "先行词 the man 是人，在从句中作主语，用 who。",
    "knowledge": "who 指人作主语的定语从句。"
  },
  {
    "id": 345,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "This is the best film ______ I have ever seen.",
    "options": [
      "who",
      "which",
      "that",
      "whom"
    ],
    "answer": 2,
    "explanation": "先行词被最高级 the best 修饰时，关系代词通常用 that。",
    "knowledge": "that 用于有最高级修饰的先行词后。"
  },
  {
    "id": 346,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "I don't like the people ______ talk too much.",
    "options": [
      "who",
      "which",
      "whom",
      "whose"
    ],
    "answer": 0,
    "explanation": "先行词 people 指人，在从句中作主语，用 who。",
    "knowledge": "who 引导定语从句指人作主语。"
  },
  {
    "id": 347,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "Is this the school ______ you studied three years ago?",
    "options": [
      "which",
      "that",
      "where",
      "when"
    ],
    "answer": 2,
    "explanation": "先行词 school 在从句中作地点状语，用关系副词 where。",
    "knowledge": "where 引导定语从句作地点状语。"
  },
  {
    "id": 348,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "I still remember the day ______ I first met you.",
    "options": [
      "which",
      "that",
      "where",
      "when"
    ],
    "answer": 3,
    "explanation": "先行词 the day 在从句中作时间状语，用关系副词 when。",
    "knowledge": "when 引导定语从句作时间状语。"
  },
  {
    "id": 349,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "The girl ______ you met just now is my sister.",
    "options": [
      "who",
      "whom",
      "which",
      "whose"
    ],
    "answer": 1,
    "explanation": "先行词 the girl 在从句中作 met 的宾语，指人，用 whom（也可用 who/that）。",
    "knowledge": "whom 引导定语从句作宾语。"
  },
  {
    "id": 350,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "______ you work hard, you will succeed.",
    "options": [
      "If",
      "Although",
      "Because",
      "But"
    ],
    "answer": 0,
    "explanation": "if 引导条件状语从句，意为\"如果\"。",
    "knowledge": "if 引导条件状语从句。"
  },
  {
    "id": 351,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "______ it was late, he went on reading.",
    "options": [
      "If",
      "Although",
      "Because",
      "So"
    ],
    "answer": 1,
    "explanation": "although 引导让步状语从句，\"虽然晚了，但他继续读书\"。",
    "knowledge": "although 引导让步状语从句。"
  },
  {
    "id": 352,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "I was doing my homework ______ my father came back.",
    "options": [
      "when",
      "while",
      "as soon as",
      "until"
    ],
    "answer": 0,
    "explanation": "when 引导时间状语从句，表示\"当……时候\"，可与短暂性动词连用。",
    "knowledge": "when 引导时间状语从句。"
  },
  {
    "id": 353,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "I will call you ______ I get to Beijing.",
    "options": [
      "as soon as",
      "while",
      "until",
      "since"
    ],
    "answer": 0,
    "explanation": "as soon as 引导时间状语从句，意为\"一……就……\"。",
    "knowledge": "as soon as 引导时间状语从句。"
  },
  {
    "id": 354,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "He was late ______ he got up late.",
    "options": [
      "if",
      "because",
      "although",
      "so"
    ],
    "answer": 1,
    "explanation": "because 引导原因状语从句。",
    "knowledge": "because 引导原因状语从句。"
  },
  {
    "id": 355,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "______ he is young, he knows a lot.",
    "options": [
      "If",
      "Because",
      "Although",
      "So"
    ],
    "answer": 2,
    "explanation": "although 表示\"虽然\"，引导让步状语从句。",
    "knowledge": "although 的用法。"
  },
  {
    "id": 356,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "I won't leave here ______ you come back.",
    "options": [
      "when",
      "while",
      "until",
      "since"
    ],
    "answer": 2,
    "explanation": "not...until... 表示\"直到……才……\"。",
    "knowledge": "until 引导时间状语从句。"
  },
  {
    "id": 357,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "______ you go, I will go with you.",
    "options": [
      "Wherever",
      "However",
      "Whenever",
      "Whatever"
    ],
    "answer": 0,
    "explanation": "wherever 引导让步状语从句，意为\"无论你去哪里\"。",
    "knowledge": "wherever 引导让步状语从句。"
  },
  {
    "id": 358,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school by bike.",
    "options": [
      "go",
      "goes",
      "going",
      "went"
    ],
    "answer": 1,
    "explanation": "often 提示用一般现在时，he 是第三人称单数，go 的三单形式是 goes。",
    "knowledge": "一般现在时第三人称单数动词变化。"
  },
  {
    "id": 359,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "She ______ to Beijing last week.",
    "options": [
      "go",
      "goes",
      "going",
      "went"
    ],
    "answer": 3,
    "explanation": "last week 提示用一般过去时，go 的过去式是 went。",
    "knowledge": "一般过去时动词变化。"
  },
  {
    "id": 360,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "Look! The children ______ in the playground.",
    "options": [
      "play",
      "plays",
      "are playing",
      "played"
    ],
    "answer": 2,
    "explanation": "Look! 提示动作正在进行，用现在进行时。",
    "knowledge": "现在进行时的构成。"
  },
  {
    "id": 361,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "I enjoy ______ books in my free time.",
    "options": [
      "read",
      "reads",
      "reading",
      "to read"
    ],
    "answer": 2,
    "explanation": "enjoy 后接动名词作宾语，enjoy doing sth. 意为\"喜欢做某事\"。",
    "knowledge": "enjoy doing sth. 固定搭配。"
  },
  {
    "id": 362,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He decided ______ a trip to Hangzhou.",
    "options": [
      "take",
      "takes",
      "taking",
      "to take"
    ],
    "answer": 3,
    "explanation": "decide 后接动词不定式，decide to do sth. 意为\"决定做某事\"。",
    "knowledge": "decide to do sth. 固定搭配。"
  },
  {
    "id": 363,
    "topic": "动词",
    "subTopic": "实义动词",
    "source": "中考语法精选",
    "question": "She ______ a beautiful song at the party.",
    "options": [
      "sang",
      "sung",
      "sings",
      "singing"
    ],
    "answer": 0,
    "explanation": "sing 是实义动词，\"唱了一首歌\"，用过去式 sang。",
    "knowledge": "实义动词表示具体动作。"
  },
  {
    "id": 364,
    "topic": "动词",
    "subTopic": "实义动词",
    "source": "中考语法精选",
    "question": "I can't ______ what you said. Please say it again.",
    "options": [
      "listen",
      "hear",
      "sound",
      "look"
    ],
    "answer": 1,
    "explanation": "hear 强调\"听见\"的结果，符合句意\"我听不清你说的话\"。",
    "knowledge": "hear 与 listen 的区别。"
  },
  {
    "id": 365,
    "topic": "动词",
    "subTopic": "实义动词",
    "source": "中考语法精选",
    "question": "Please ______ the blackboard. The teacher is writing something.",
    "options": [
      "look at",
      "see",
      "watch",
      "read"
    ],
    "answer": 0,
    "explanation": "look at 强调\"看\"的动作，后面可接宾语。",
    "knowledge": "look at 与 see/watch 的区别。"
  },
  {
    "id": 366,
    "topic": "动词",
    "subTopic": "实义动词",
    "source": "中考语法精选",
    "question": "We ______ the new movie last night.",
    "options": [
      "looked",
      "saw",
      "watched",
      "read"
    ],
    "answer": 2,
    "explanation": "watch 常用于观看电影、电视、比赛等。",
    "knowledge": "watch 的用法。"
  },
  {
    "id": 367,
    "topic": "动词",
    "subTopic": "实义动词",
    "source": "中考语法精选",
    "question": "This song ______ nice.",
    "options": [
      "hears",
      "listens",
      "sounds",
      "looks"
    ],
    "answer": 2,
    "explanation": "sound 是感官系动词，意为\"听起来\"。",
    "knowledge": "sound 作系动词。"
  },
  {
    "id": 368,
    "topic": "动词",
    "subTopic": "实义动词",
    "source": "中考语法精选",
    "question": "He ______ me a story yesterday.",
    "options": [
      "spoke",
      "said",
      "told",
      "talked"
    ],
    "answer": 2,
    "explanation": "tell sb. a story 意为\"给某人讲故事\"。",
    "knowledge": "tell/speak/say/talk 的区别。"
  },
  {
    "id": 369,
    "topic": "动词",
    "subTopic": "系动词",
    "source": "中考语法精选",
    "question": "The flower ______ sweet.",
    "options": [
      "smells",
      "is smelled",
      "smell",
      "smelling"
    ],
    "answer": 0,
    "explanation": "smell 是感官系动词，没有被动语态，用主动形式表示被动意义。",
    "knowledge": "感官系动词无被动。"
  },
  {
    "id": 370,
    "topic": "动词",
    "subTopic": "系动词",
    "source": "中考语法精选",
    "question": "You ______ tired. You'd better have a rest.",
    "options": [
      "look",
      "look at",
      "see",
      "watch"
    ],
    "answer": 0,
    "explanation": "look 是系动词，意为\"看起来\"，后接形容词 tired。",
    "knowledge": "look 作系动词。"
  },
  {
    "id": 371,
    "topic": "动词",
    "subTopic": "系动词",
    "source": "中考语法精选",
    "question": "The dish ______ delicious.",
    "options": [
      "tastes",
      "is tasted",
      "taste",
      "tasting"
    ],
    "answer": 0,
    "explanation": "taste 是感官系动词，后接形容词，无被动。",
    "knowledge": "taste 作系动词。"
  },
  {
    "id": 372,
    "topic": "动词",
    "subTopic": "系动词",
    "source": "中考语法精选",
    "question": "The silk ______ soft and smooth.",
    "options": [
      "feels",
      "is felt",
      "feel",
      "feeling"
    ],
    "answer": 0,
    "explanation": "feel 是感官系动词，意为\"摸起来\"，无被动。",
    "knowledge": "feel 作系动词。"
  },
  {
    "id": 373,
    "topic": "动词",
    "subTopic": "系动词",
    "source": "中考语法精选",
    "question": "The news ______ true.",
    "options": [
      "sounds",
      "is sounded",
      "sound",
      "sounding"
    ],
    "answer": 0,
    "explanation": "sound 是感官系动词，意为\"听起来\"，后接形容词 true。",
    "knowledge": "sound 作系动词。"
  },
  {
    "id": 374,
    "topic": "动词",
    "subTopic": "系动词",
    "source": "中考语法精选",
    "question": "He ______ a kind man.",
    "options": [
      "becomes",
      "becoming",
      "became",
      "is becoming"
    ],
    "answer": 0,
    "explanation": "become 是变化系动词，意为\"变成\"，后接名词 a kind man。",
    "knowledge": "become 作系动词。"
  },
  {
    "id": 375,
    "topic": "动词",
    "subTopic": "系动词",
    "source": "中考语法精选",
    "question": "The weather is getting ______.",
    "options": [
      "cold",
      "coldly",
      "colder",
      "coldest"
    ],
    "answer": 2,
    "explanation": "get 是变化系动词，后接形容词比较级，表示\"变得越来越……\"。",
    "knowledge": "get + 比较级。"
  },
  {
    "id": 376,
    "topic": "动词",
    "subTopic": "系动词",
    "source": "中考语法精选",
    "question": "She ______ happy when she heard the news.",
    "options": [
      "kept",
      "stayed",
      "remained",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "keep/stay/remain 都可以作系动词，表示\"保持某种状态\"。",
    "knowledge": "状态系动词。"
  },
  {
    "id": 377,
    "topic": "动词",
    "subTopic": "助动词",
    "source": "中考语法精选",
    "question": "______ you like some tea?",
    "options": [
      "Do",
      "Does",
      "Are",
      "Would"
    ],
    "answer": 3,
    "explanation": "Would you like...? 是礼貌地提出建议或邀请，意为\"你想要……吗？\"。",
    "knowledge": "would like 的用法。"
  },
  {
    "id": 378,
    "topic": "动词",
    "subTopic": "助动词",
    "source": "中考语法精选",
    "question": "He doesn't like swimming, ______ he?",
    "options": [
      "does",
      "doesn't",
      "is",
      "isn't"
    ],
    "answer": 0,
    "explanation": "前否后肯，doesn't 的疑问部分用 does。",
    "knowledge": "反意疑问句。"
  },
  {
    "id": 379,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "You ______ finish your homework first.",
    "options": [
      "must",
      "can",
      "may",
      "might"
    ],
    "answer": 0,
    "explanation": "must 表示\"必须\"，语气强烈。",
    "knowledge": "must 表示必须。"
  },
  {
    "id": 380,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "______ I use your dictionary?",
    "options": [
      "Must",
      "Can",
      "Need",
      "Should"
    ],
    "answer": 1,
    "explanation": "can 表示请求许可，\"我可以用一下你的字典吗？\"。",
    "knowledge": "can 表示请求许可。"
  },
  {
    "id": 381,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "You ______ smoke in the hospital.",
    "options": [
      "mustn't",
      "needn't",
      "can't",
      "may not"
    ],
    "answer": 0,
    "explanation": "mustn't 表示\"禁止\"，在医院禁止吸烟。",
    "knowledge": "mustn't 表示禁止。"
  },
  {
    "id": 382,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "— Must I hand in the report today? — No, you ______.",
    "options": [
      "mustn't",
      "needn't",
      "can't",
      "shouldn't"
    ],
    "answer": 1,
    "explanation": "Must 引导的一般疑问句，否定回答用 needn't 或 don't have to。",
    "knowledge": "must 疑问句的否定回答。"
  },
  {
    "id": 383,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "He ______ be at home, because his car is outside.",
    "options": [
      "must",
      "can't",
      "may",
      "might"
    ],
    "answer": 0,
    "explanation": "根据\"他的车在外面\"推断他一定在家，must 表示肯定推测。",
    "knowledge": "must 表肯定推测。"
  },
  {
    "id": 384,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "That ______ be true. I don't believe it.",
    "options": [
      "must",
      "can't",
      "may",
      "might"
    ],
    "answer": 1,
    "explanation": "can't 表示否定推测，\"那不可能是真的\"。",
    "knowledge": "can't 表否定推测。"
  },
  {
    "id": 385,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "You should ______ more exercise.",
    "options": [
      "do",
      "to do",
      "doing",
      "does"
    ],
    "answer": 0,
    "explanation": "情态动词 should 后接动词原形。",
    "knowledge": "情态动词后接动词原形。"
  },
  {
    "id": 386,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "— ______ I borrow your bike? — Sure.",
    "options": [
      "May",
      "Must",
      "Need",
      "Should"
    ],
    "answer": 0,
    "explanation": "may 表示请求许可，语气比 can 更委婉、正式。",
    "knowledge": "may 表示请求许可。"
  },
  {
    "id": 387,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "She enjoys ______ music.",
    "options": [
      "listen",
      "listens",
      "listening",
      "to listen"
    ],
    "answer": 2,
    "explanation": "enjoy 后接动名词作宾语，enjoy doing sth. 意为\"喜欢做某事\"。",
    "knowledge": "enjoy doing sth. 固定搭配。"
  },
  {
    "id": 388,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "He decided ______ abroad for further study.",
    "options": [
      "go",
      "goes",
      "going",
      "to go"
    ],
    "answer": 3,
    "explanation": "decide 后接动词不定式，decide to do sth. 意为\"决定做某事\"。",
    "knowledge": "decide to do sth. 固定搭配。"
  },
  {
    "id": 389,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "It's important ______ English well.",
    "options": [
      "learn",
      "to learn",
      "learning",
      "learned"
    ],
    "answer": 1,
    "explanation": "It's + adj. + to do sth. 中 it 是形式主语，真正主语是 to do sth.。",
    "knowledge": "It's + adj. + to do sth. 句型。"
  },
  {
    "id": 390,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "I spent two hours ______ my homework.",
    "options": [
      "do",
      "to do",
      "doing",
      "did"
    ],
    "answer": 2,
    "explanation": "spend time (in) doing sth. 意为\"花费时间做某事\"。",
    "knowledge": "spend...doing sth. 固定搭配。"
  },
  {
    "id": 391,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "My mother asked me ______ the room.",
    "options": [
      "clean",
      "cleans",
      "cleaning",
      "to clean"
    ],
    "answer": 3,
    "explanation": "ask sb. to do sth. 意为\"要求某人做某事\"。",
    "knowledge": "ask sb. to do sth. 固定搭配。"
  },
  {
    "id": 392,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "I saw him ______ basketball just now.",
    "options": [
      "play",
      "to play",
      "playing",
      "played"
    ],
    "answer": 2,
    "explanation": "see sb. doing sth. 意为\"看见某人正在做某事\"。",
    "knowledge": "see sb. doing sth. 结构。"
  },
  {
    "id": 393,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "I often hear her ______ in the morning.",
    "options": [
      "sing",
      "sings",
      "singing",
      "sang"
    ],
    "answer": 0,
    "explanation": "hear sb. do sth. 强调听见动作的全过程或经常性动作。",
    "knowledge": "hear sb. do sth. 结构。"
  },
  {
    "id": 394,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "Thank you for ______ me.",
    "options": [
      "help",
      "helps",
      "helping",
      "to help"
    ],
    "answer": 2,
    "explanation": "for 是介词，后接动名词。",
    "knowledge": "介词后接动名词。"
  },
  {
    "id": 395,
    "topic": "动词时态",
    "subTopic": "一般现在时",
    "source": "中考语法精选",
    "question": "The earth ______ around the sun.",
    "options": [
      "go",
      "goes",
      "going",
      "went"
    ],
    "answer": 1,
    "explanation": "表示客观真理用一般现在时，the earth 是第三人称单数。",
    "knowledge": "一般现在时表示客观真理。"
  },
  {
    "id": 396,
    "topic": "动词时态",
    "subTopic": "一般现在时",
    "source": "中考语法精选",
    "question": "She usually ______ up at six o'clock.",
    "options": [
      "get",
      "gets",
      "getting",
      "got"
    ],
    "answer": 1,
    "explanation": "usually 提示用一般现在时，she 是第三人称单数。",
    "knowledge": "一般现在时表示习惯性动作。"
  },
  {
    "id": 397,
    "topic": "动词时态",
    "subTopic": "一般现在时",
    "source": "中考语法精选",
    "question": "My father ______ newspapers every morning.",
    "options": [
      "read",
      "reads",
      "is reading",
      "reading"
    ],
    "answer": 1,
    "explanation": "every morning 提示用一般现在时，my father 是第三人称单数。",
    "knowledge": "一般现在时的构成。"
  },
  {
    "id": 398,
    "topic": "动词时态",
    "subTopic": "一般现在时",
    "source": "中考语法精选",
    "question": "— Does your sister like dancing? — Yes, she ______.",
    "options": [
      "does",
      "likes",
      "do",
      "is"
    ],
    "answer": 0,
    "explanation": "Does 开头的一般疑问句，肯定回答用 Yes, she does.",
    "knowledge": "一般现在时一般疑问句的回答。"
  },
  {
    "id": 399,
    "topic": "动词时态",
    "subTopic": "一般过去时",
    "source": "中考语法精选",
    "question": "I ______ to the zoo with my friends yesterday.",
    "options": [
      "go",
      "went",
      "have gone",
      "am going"
    ],
    "answer": 1,
    "explanation": "yesterday 提示用一般过去时，go 的过去式是 went。",
    "knowledge": "一般过去时表示过去发生的动作。"
  },
  {
    "id": 400,
    "topic": "动词时态",
    "subTopic": "一般过去时",
    "source": "中考语法精选",
    "question": "They ______ a party last night.",
    "options": [
      "have",
      "had",
      "having",
      "has"
    ],
    "answer": 1,
    "explanation": "last night 提示用一般过去时，have 的过去式是 had。",
    "knowledge": "一般过去时的构成。"
  },
  {
    "id": 401,
    "topic": "动词时态",
    "subTopic": "一般过去时",
    "source": "中考语法精选",
    "question": "— ______ you visit your grandparents last Sunday? — Yes, I did.",
    "options": [
      "Do",
      "Did",
      "Are",
      "Were"
    ],
    "answer": 1,
    "explanation": "last Sunday 提示用一般过去时，一般疑问句用 Did 开头。",
    "knowledge": "一般过去时的一般疑问句。"
  },
  {
    "id": 402,
    "topic": "动词时态",
    "subTopic": "一般过去时",
    "source": "中考语法精选",
    "question": "He ______ (not go) to school because he was ill.",
    "options": [
      "didn't go",
      "doesn't go",
      "not went",
      "wasn't go"
    ],
    "answer": 0,
    "explanation": "一般过去时的否定句用 didn't + 动词原形。",
    "knowledge": "一般过去时的否定句。"
  },
  {
    "id": 403,
    "topic": "动词时态",
    "subTopic": "一般将来时",
    "source": "中考语法精选",
    "question": "I ______ visit my uncle next week.",
    "options": [
      "will",
      "would",
      "am",
      "was"
    ],
    "answer": 0,
    "explanation": "next week 提示用一般将来时，will + 动词原形。",
    "knowledge": "一般将来时的构成。"
  },
  {
    "id": 404,
    "topic": "动词时态",
    "subTopic": "一般将来时",
    "source": "中考语法精选",
    "question": "Look at the clouds. It ______ rain.",
    "options": [
      "will",
      "is going to",
      "is",
      "would"
    ],
    "answer": 1,
    "explanation": "根据迹象判断将要发生的事，用 be going to。",
    "knowledge": "be going to 表示根据迹象预测。"
  },
  {
    "id": 405,
    "topic": "动词时态",
    "subTopic": "一般将来时",
    "source": "中考语法精选",
    "question": "We ______ have a sports meeting if it doesn't rain tomorrow.",
    "options": [
      "will",
      "are going to",
      "are",
      "would"
    ],
    "answer": 0,
    "explanation": "if 引导的条件状语从句用一般现在时，主句用一般将来时 will。",
    "knowledge": "条件状语从句中的主将从现。"
  },
  {
    "id": 406,
    "topic": "动词时态",
    "subTopic": "will和be going to用法区别",
    "source": "中考语法精选",
    "question": "— Why are you taking an umbrella? — It ______ rain.",
    "options": [
      "will",
      "is going to",
      "would",
      "is"
    ],
    "answer": 1,
    "explanation": "根据乌云等迹象判断要下雨，用 be going to。",
    "knowledge": "be going to 表示根据迹象的预测。"
  },
  {
    "id": 407,
    "topic": "动词时态",
    "subTopic": "will和be going to用法区别",
    "source": "中考语法精选",
    "question": "I ______ help you with your English.",
    "options": [
      "will",
      "am going to",
      "am",
      "would"
    ],
    "answer": 0,
    "explanation": "表示临时决定或意愿，用 will。",
    "knowledge": "will 表示临时决定。"
  },
  {
    "id": 408,
    "topic": "动词时态",
    "subTopic": "现在进行时",
    "source": "中考语法精选",
    "question": "Listen! Someone ______ in the next room.",
    "options": [
      "sing",
      "sings",
      "is singing",
      "sang"
    ],
    "answer": 2,
    "explanation": "Listen! 提示动作正在进行，用现在进行时。",
    "knowledge": "现在进行时表示正在进行的动作。"
  },
  {
    "id": 409,
    "topic": "动词时态",
    "subTopic": "现在进行时",
    "source": "中考语法精选",
    "question": "Look! The children ______ games in the park.",
    "options": [
      "play",
      "plays",
      "are playing",
      "played"
    ],
    "answer": 2,
    "explanation": "Look! 提示动作正在进行，children 是复数，用 are playing。",
    "knowledge": "现在进行时的构成。"
  },
  {
    "id": 410,
    "topic": "动词时态",
    "subTopic": "现在进行时",
    "source": "中考语法精选",
    "question": "Now she ______ a letter to her friend.",
    "options": [
      "writes",
      "is writing",
      "wrote",
      "has written"
    ],
    "answer": 1,
    "explanation": "now 提示用现在进行时。",
    "knowledge": "现在进行时的时间标志词。"
  },
  {
    "id": 411,
    "topic": "动词时态",
    "subTopic": "现在进行时",
    "source": "中考语法精选",
    "question": "— What are you doing? — I ______ my homework.",
    "options": [
      "do",
      "am doing",
      "does",
      "did"
    ],
    "answer": 1,
    "explanation": "问句用现在进行时，答句也用现在进行时。",
    "knowledge": "现在进行时的问答。"
  },
  {
    "id": 412,
    "topic": "动词时态",
    "subTopic": "现在完成时",
    "source": "中考语法精选",
    "question": "I ______ lived here since 2010.",
    "options": [
      "have",
      "has",
      "had",
      "am"
    ],
    "answer": 0,
    "explanation": "since 2010 提示用现在完成时，I 后用 have。",
    "knowledge": "现在完成时的构成：have/has + 过去分词。"
  },
  {
    "id": 413,
    "topic": "动词时态",
    "subTopic": "现在完成时",
    "source": "中考语法精选",
    "question": "She has ______ the book for two weeks.",
    "options": [
      "borrowed",
      "lent",
      "kept",
      "bought"
    ],
    "answer": 2,
    "explanation": "for two weeks 是时间段，要与延续性动词连用，keep 是延续性动词。",
    "knowledge": "现在完成时中延续性动词的用法。"
  },
  {
    "id": 414,
    "topic": "动词时态",
    "subTopic": "现在完成时",
    "source": "中考语法精选",
    "question": "— Have you ever been to Beijing? — Yes, I ______.",
    "options": [
      "have",
      "has",
      "did",
      "do"
    ],
    "answer": 0,
    "explanation": "Have 开头的一般疑问句，肯定回答用 Yes, I have.",
    "knowledge": "现在完成时一般疑问句的回答。"
  },
  {
    "id": 415,
    "topic": "动词时态",
    "subTopic": "现在完成时",
    "source": "中考语法精选",
    "question": "My father has gone to Shanghai. He ______ back yet.",
    "options": [
      "hasn't come",
      "didn't come",
      "doesn't come",
      "isn't coming"
    ],
    "answer": 0,
    "explanation": "yet 常用于现在完成时的否定句中，表示\"还（未）\"。",
    "knowledge": "现在完成时与 yet 连用。"
  },
  {
    "id": 416,
    "topic": "动词时态",
    "subTopic": "过去完成时",
    "source": "中考语法精选",
    "question": "By the time I got to the station, the train ______.",
    "options": [
      "left",
      "has left",
      "had left",
      "was leaving"
    ],
    "answer": 2,
    "explanation": "by the time + 过去时，主句用过去完成时，表示\"过去的过去\"。",
    "knowledge": "过去完成时的用法。"
  },
  {
    "id": 417,
    "topic": "动词时态",
    "subTopic": "过去进行时",
    "source": "中考语法精选",
    "question": "I ______ my homework at 8 o'clock last night.",
    "options": [
      "do",
      "did",
      "was doing",
      "am doing"
    ],
    "answer": 2,
    "explanation": "at 8 o'clock last night 提示过去某一时刻正在进行的动作，用过去进行时。",
    "knowledge": "过去进行时的构成。"
  },
  {
    "id": 418,
    "topic": "动词时态",
    "subTopic": "过去进行时",
    "source": "中考语法精选",
    "question": "When I got home, my mother ______ dinner.",
    "options": [
      "cooks",
      "cooked",
      "was cooking",
      "is cooking"
    ],
    "answer": 2,
    "explanation": "when 引导的时间状语从句用一般过去时，主句表示过去正在进行，用过去进行时。",
    "knowledge": "过去进行时与一般过去时连用。"
  },
  {
    "id": 419,
    "topic": "动词时态",
    "subTopic": "过去将来时",
    "source": "中考语法精选",
    "question": "He said he ______ visit us the next day.",
    "options": [
      "will",
      "would",
      "is going to",
      "was going to"
    ],
    "answer": 1,
    "explanation": "主句 said 是过去时，宾语从句要用相应的过去将来时 would。",
    "knowledge": "过去将来时用于宾语从句。"
  },
  {
    "id": 420,
    "topic": "动词时态",
    "subTopic": "过去将来时",
    "source": "中考语法精选",
    "question": "I didn't know if he ______ come.",
    "options": [
      "will",
      "would",
      "is going to",
      "was going to"
    ],
    "answer": 1,
    "explanation": "主句 didn't know 是过去时，宾语从句用过去将来时 would。",
    "knowledge": "过去将来时的构成。"
  },
  {
    "id": 421,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "If it ______ tomorrow, we will have a picnic.",
    "options": [
      "won't rain",
      "doesn't rain",
      "not rain",
      "isn't rain"
    ],
    "answer": 1,
    "explanation": "if 引导的条件状语从句用一般现在时，主句用一般将来时，即\"主将从现\"。",
    "knowledge": "条件状语从句的主将从现。"
  },
  {
    "id": 422,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "The bus ______ when I arrived at the bus stop.",
    "options": [
      "left",
      "has left",
      "had left",
      "leaves"
    ],
    "answer": 2,
    "explanation": "arrived 是过去时，leave 发生在 arrived 之前，即\"过去的过去\"，用过去完成时。",
    "knowledge": "过去完成时表示过去的过去。"
  },
  {
    "id": 423,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "He ______ in this factory since he left school.",
    "options": [
      "worked",
      "has worked",
      "works",
      "is working"
    ],
    "answer": 1,
    "explanation": "since 引导的时间状语从句用一般过去时，主句用现在完成时。",
    "knowledge": "since 与现在完成时连用。"
  },
  {
    "id": 424,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "went",
      "go",
      "gone",
      "wented"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，go 的过去式是 went。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 425,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "gone",
      "go",
      "went",
      "wented"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，go 的过去分词是 gone。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 426,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "came",
      "come",
      "coming",
      "comes"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，come 的过去式是 came。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 427,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "come",
      "came",
      "comeing",
      "comes"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，come 的过去分词是 come。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 428,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "saw",
      "see",
      "seen",
      "sawed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，see 的过去式是 saw。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 429,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "seen",
      "see",
      "saw",
      "sawed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，see 的过去分词是 seen。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 430,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "took",
      "take",
      "taken",
      "tooked"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，take 的过去式是 took。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 431,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "taken",
      "take",
      "took",
      "tooked"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，take 的过去分词是 taken。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 432,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "ate",
      "eat",
      "eaten",
      "ateed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，eat 的过去式是 ate。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 433,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "eaten",
      "eat",
      "ate",
      "ateed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，eat 的过去分词是 eaten。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 434,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "gave",
      "give",
      "given",
      "gaveed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，give 的过去式是 gave。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 435,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "given",
      "give",
      "gave",
      "gaveed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，give 的过去分词是 given。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 436,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "wrote",
      "write",
      "written",
      "wroteed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，write 的过去式是 wrote。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 437,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "written",
      "write",
      "wrote",
      "wroteed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，write 的过去分词是 written。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 438,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "spoke",
      "speak",
      "spoken",
      "spokeed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，speak 的过去式是 spoke。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 439,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "spoken",
      "speak",
      "spoke",
      "spokeed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，speak 的过去分词是 spoken。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 440,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "broke",
      "break",
      "broken",
      "brokeed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，break 的过去式是 broke。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 441,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "broken",
      "break",
      "broke",
      "brokeed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，break 的过去分词是 broken。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 442,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "chose",
      "choose",
      "chosen",
      "choseed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，choose 的过去式是 chose。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 443,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "chosen",
      "choose",
      "chose",
      "choseed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，choose 的过去分词是 chosen。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 444,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "drove",
      "drive",
      "driven",
      "droveed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，drive 的过去式是 drove。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 445,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "driven",
      "drive",
      "drove",
      "droveed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，drive 的过去分词是 driven。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 446,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "flew",
      "fly",
      "flown",
      "flewed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，fly 的过去式是 flew。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 447,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "flown",
      "fly",
      "flew",
      "flewed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，fly 的过去分词是 flown。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 448,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "forgot",
      "forget",
      "forgotten",
      "forgoted"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，forget 的过去式是 forgot。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 449,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "forgotten",
      "forget",
      "forgot",
      "forgoted"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，forget 的过去分词是 forgotten。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 450,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "knew",
      "know",
      "known",
      "knewed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，know 的过去式是 knew。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 451,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "known",
      "know",
      "knew",
      "knewed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，know 的过去分词是 known。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 452,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "rode",
      "ride",
      "ridden",
      "rodeed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，ride 的过去式是 rode。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 453,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "ridden",
      "ride",
      "rode",
      "rodeed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，ride 的过去分词是 ridden。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 454,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "rose",
      "rise",
      "risen",
      "roseed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，rise 的过去式是 rose。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 455,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "risen",
      "rise",
      "rose",
      "roseed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，rise 的过去分词是 risen。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 456,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "sang",
      "sing",
      "sung",
      "sanged"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，sing 的过去式是 sang。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 457,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "sung",
      "sing",
      "sang",
      "sanged"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，sing 的过去分词是 sung。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 458,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "swam",
      "swim",
      "swum",
      "swamed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，swim 的过去式是 swam。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 459,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "swum",
      "swim",
      "swam",
      "swamed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，swim 的过去分词是 swum。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 460,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "woke",
      "wake",
      "woken",
      "wokeed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，wake 的过去式是 woke。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 461,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "woken",
      "wake",
      "woke",
      "wokeed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，wake 的过去分词是 woken。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 462,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last year.",
    "options": [
      "wore",
      "wear",
      "worn",
      "woreed"
    ],
    "answer": 0,
    "explanation": "last year 提示用一般过去时，wear 的过去式是 wore。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 463,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "I have never ______ such a beautiful place.",
    "options": [
      "worn",
      "wear",
      "wore",
      "woreed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have + 过去分词，wear 的过去分词是 worn。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 464,
    "topic": "动词时态",
    "subTopic": "肯定句、否定句、一般疑问句（肯定/否定回答）、特殊疑问句",
    "source": "中考语法精选",
    "question": "______ he ______ his homework every day?",
    "options": [
      "Does; do",
      "Do; does",
      "Does; does",
      "Do; do"
    ],
    "answer": 0,
    "explanation": "he 是第三人称单数，一般现在时的一般疑问句用 Does 开头，后面用动词原形 do。",
    "knowledge": "一般现在时一般疑问句。"
  },
  {
    "id": 465,
    "topic": "动词时态",
    "subTopic": "肯定句、否定句、一般疑问句（肯定/否定回答）、特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ did you go there? — By train.",
    "options": [
      "What",
      "How",
      "Where",
      "When"
    ],
    "answer": 1,
    "explanation": "由答语 By train 可知询问方式，用 how。",
    "knowledge": "特殊疑问句。"
  },
  {
    "id": 466,
    "topic": "动词时态",
    "subTopic": "肯定句、否定句、一般疑问句（肯定/否定回答）、特殊疑问句",
    "source": "中考语法精选",
    "question": "They are not watching TV, ______ they?",
    "options": [
      "are",
      "aren't",
      "do",
      "don't"
    ],
    "answer": 0,
    "explanation": "前否后肯，are not 的疑问部分用 are。",
    "knowledge": "反意疑问句。"
  },
  {
    "id": 467,
    "topic": "动词语态",
    "subTopic": "现在完成时被动语态",
    "source": "中考语法精选",
    "question": "The room ______ already.",
    "options": [
      "is cleaned",
      "was cleaned",
      "has been cleaned",
      "had been cleaned"
    ],
    "answer": 2,
    "explanation": "already 常与现在完成时连用，room 与 clean 是被动关系，用 has been cleaned。",
    "knowledge": "现在完成时被动语态：have/has been + 过去分词。"
  },
  {
    "id": 468,
    "topic": "动词语态",
    "subTopic": "过去完成时被动语态",
    "source": "中考语法精选",
    "question": "He told me that the work ______ finished by the end of last month.",
    "options": [
      "has been",
      "had been",
      "was",
      "is"
    ],
    "answer": 1,
    "explanation": "by the end of last month 提示用过去完成时，work 与 finish 是被动关系。",
    "knowledge": "过去完成时被动语态：had been + 过去分词。"
  },
  {
    "id": 469,
    "topic": "动词语态",
    "subTopic": "过去进行时被动语态",
    "source": "中考语法精选",
    "question": "The bridge ______ when we got there.",
    "options": [
      "was built",
      "was being built",
      "is being built",
      "had been built"
    ],
    "answer": 1,
    "explanation": "when we got there 提示过去某一时刻正在进行的动作，bridge 与 build 是被动关系。",
    "knowledge": "过去进行时被动语态：was/were being + 过去分词。"
  },
  {
    "id": 470,
    "topic": "动词语态",
    "subTopic": "过去将来时被动语态",
    "source": "中考语法精选",
    "question": "He said that a new school ______ in our city.",
    "options": [
      "will be built",
      "would be built",
      "is built",
      "was built"
    ],
    "answer": 1,
    "explanation": "主句 said 是过去时，宾语从句用过去将来时被动语态 would be built。",
    "knowledge": "过去将来时被动语态：would be + 过去分词。"
  },
  {
    "id": 471,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The flowers ______ every day.",
    "options": [
      "water",
      "are watered",
      "is watered",
      "watered"
    ],
    "answer": 1,
    "explanation": "every day 提示用一般现在时，flowers 与 water 是被动关系，复数用 are watered。",
    "knowledge": "一般现在时被动语态。"
  },
  {
    "id": 472,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "These books must ______ to the library on time.",
    "options": [
      "return",
      "be returned",
      "returned",
      "returning"
    ],
    "answer": 1,
    "explanation": "must 后接 be + 过去分词，books 与 return 是被动关系。",
    "knowledge": "含情态动词的被动语态。"
  },
  {
    "id": 473,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The sick girl ______ to hospital at once.",
    "options": [
      "took",
      "was taken",
      "is taken",
      "has taken"
    ],
    "answer": 1,
    "explanation": "girl 与 take 是被动关系，at once 提示用一般过去时。",
    "knowledge": "一般过去时被动语态。"
  },
  {
    "id": 474,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "English ______ all over the world.",
    "options": [
      "speaks",
      "is spoken",
      "was spoken",
      "has spoken"
    ],
    "answer": 1,
    "explanation": "English 与 speak 是被动关系，表示客观事实用一般现在时。",
    "knowledge": "一般现在时被动语态表示客观事实。"
  },
  {
    "id": 475,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "leaves",
      "leaf",
      "leafs",
      "leafes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，leaf 的复数形式是 leaves。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 476,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "leaves",
      "leaf",
      "leafs",
      "leafes"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，leaf 的复数形式是 leaves。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 477,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "lives",
      "life",
      "lifes",
      "lifees"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，life 的复数形式是 lives。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 478,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "lives",
      "life",
      "lifes",
      "lifees"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，life 的复数形式是 lives。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 479,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "thieves",
      "thief",
      "thiefs",
      "thiefes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，thief 的复数形式是 thieves。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 480,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "thieves",
      "thief",
      "thiefs",
      "thiefes"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，thief 的复数形式是 thieves。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 481,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "wolves",
      "wolf",
      "wolfs",
      "wolfes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，wolf 的复数形式是 wolves。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 482,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "wolves",
      "wolf",
      "wolfs",
      "wolfes"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，wolf 的复数形式是 wolves。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 483,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "tomatoes",
      "tomato",
      "tomatos",
      "tomatoeses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，tomato 的复数形式是 tomatoes。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 484,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "tomatoes",
      "tomato",
      "tomatos",
      "tomatoeses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，tomato 的复数形式是 tomatoes。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 485,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "heroes",
      "hero",
      "heros",
      "heroeses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，hero 的复数形式是 heroes。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 486,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "heroes",
      "hero",
      "heros",
      "heroeses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，hero 的复数形式是 heroes。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 487,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "photos",
      "photo",
      "photoes",
      "photoses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，photo 的复数形式是 photos。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 488,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "photos",
      "photo",
      "photoes",
      "photoses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，photo 的复数形式是 photos。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 489,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "pianos",
      "piano",
      "pianoes",
      "pianoses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，piano 的复数形式是 pianos。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 490,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "pianos",
      "piano",
      "pianoes",
      "pianoses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，piano 的复数形式是 pianos。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 491,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "radios",
      "radio",
      "radioes",
      "radioses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，radio 的复数形式是 radios。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 492,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "radios",
      "radio",
      "radioes",
      "radioses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，radio 的复数形式是 radios。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 493,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "zoos",
      "zoo",
      "zooes",
      "zooses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，zoo 的复数形式是 zoos。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 494,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "zoos",
      "zoo",
      "zooes",
      "zooses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，zoo 的复数形式是 zoos。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 495,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "classes",
      "class",
      "classs",
      "classeses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，class 的复数形式是 classes。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 496,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "classes",
      "class",
      "classs",
      "classeses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，class 的复数形式是 classes。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 497,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "brushes",
      "brush",
      "brushs",
      "brusheses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，brush 的复数形式是 brushes。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 498,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "brushes",
      "brush",
      "brushs",
      "brusheses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，brush 的复数形式是 brushes。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 499,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "watches",
      "watch",
      "watchs",
      "watcheses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，watch 的复数形式是 watches。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 500,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "watches",
      "watch",
      "watchs",
      "watcheses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，watch 的复数形式是 watches。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 501,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "dishes",
      "dish",
      "dishs",
      "disheses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，dish 的复数形式是 dishes。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 502,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "dishes",
      "dish",
      "dishs",
      "disheses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，dish 的复数形式是 dishes。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 503,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "babies",
      "baby",
      "babys",
      "babyes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，baby 的复数形式是 babies。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 504,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "babies",
      "baby",
      "babys",
      "babyes"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，baby 的复数形式是 babies。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 505,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "cities",
      "city",
      "citys",
      "cityes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，city 的复数形式是 cities。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 506,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "cities",
      "city",
      "citys",
      "cityes"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，city 的复数形式是 cities。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 507,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "stories",
      "story",
      "storys",
      "storyes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，story 的复数形式是 stories。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 508,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "stories",
      "story",
      "storys",
      "storyes"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，story 的复数形式是 stories。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 509,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "factories",
      "factory",
      "factorys",
      "factoryes"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，factory 的复数形式是 factories。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 510,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "factories",
      "factory",
      "factorys",
      "factoryes"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，factory 的复数形式是 factories。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 511,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "days",
      "day",
      "dayes",
      "dayses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，day 的复数形式是 days。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 512,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "days",
      "day",
      "dayes",
      "dayses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，day 的复数形式是 days。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 513,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "boys",
      "boy",
      "boyes",
      "boyses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，boy 的复数形式是 boys。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 514,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "boys",
      "boy",
      "boyes",
      "boyses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，boy 的复数形式是 boys。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 515,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "keys",
      "key",
      "keyes",
      "keyses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，key 的复数形式是 keys。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 516,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "keys",
      "key",
      "keyes",
      "keyses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，key 的复数形式是 keys。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 517,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "monkeys",
      "monkey",
      "monkeyes",
      "monkeyses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，monkey 的复数形式是 monkeys。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 518,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "monkeys",
      "monkey",
      "monkeyes",
      "monkeyses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，monkey 的复数形式是 monkeys。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 519,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "plays",
      "play",
      "playes",
      "playses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，play 的复数形式是 plays。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 520,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "plays",
      "play",
      "playes",
      "playses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，play 的复数形式是 plays。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 521,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are many ______ on the ground.",
    "options": [
      "ways",
      "way",
      "wayes",
      "wayses"
    ],
    "answer": 0,
    "explanation": "many 后接可数名词复数，way 的复数形式是 ways。",
    "knowledge": "可数名词复数变化规则。"
  },
  {
    "id": 522,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "Please pass me two ______.",
    "options": [
      "ways",
      "way",
      "wayes",
      "wayses"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，way 的复数形式是 ways。",
    "knowledge": "基数词后接可数名词复数。"
  },
  {
    "id": 523,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "tea",
      "teas",
      "a tea",
      "two teas"
    ],
    "answer": 0,
    "explanation": "tea 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 524,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "coffee",
      "coffees",
      "a coffee",
      "two coffees"
    ],
    "answer": 0,
    "explanation": "coffee 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 525,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "juice",
      "juices",
      "a juice",
      "two juices"
    ],
    "answer": 0,
    "explanation": "juice 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 526,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "sugar",
      "sugars",
      "a sugar",
      "two sugars"
    ],
    "answer": 0,
    "explanation": "sugar 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 527,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "salt",
      "salts",
      "a salt",
      "two salts"
    ],
    "answer": 0,
    "explanation": "salt 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 528,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "butter",
      "butters",
      "a butter",
      "two butters"
    ],
    "answer": 0,
    "explanation": "butter 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 529,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "cheese",
      "cheeses",
      "a cheese",
      "two cheeses"
    ],
    "answer": 0,
    "explanation": "cheese 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 530,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "meat",
      "meats",
      "a meat",
      "two meats"
    ],
    "answer": 0,
    "explanation": "meat 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 531,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "beef",
      "beefs",
      "a beef",
      "two beefs"
    ],
    "answer": 0,
    "explanation": "beef 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 532,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "pork",
      "porks",
      "a pork",
      "two porks"
    ],
    "answer": 0,
    "explanation": "pork 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 533,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "chicken（鸡肉）",
      "chicken（鸡肉）s",
      "a chicken（鸡肉）",
      "two chicken（鸡肉）s"
    ],
    "answer": 0,
    "explanation": "chicken（鸡肉） 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 534,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "fish（鱼肉）",
      "fish（鱼肉）s",
      "a fish（鱼肉）",
      "two fish（鱼肉）s"
    ],
    "answer": 0,
    "explanation": "fish（鱼肉） 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 535,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "Would you like some ______?",
    "options": [
      "fruit（总称）",
      "fruit（总称）s",
      "a fruit（总称）",
      "two fruit（总称）s"
    ],
    "answer": 0,
    "explanation": "fruit（总称） 表示物质或食物时通常是不可数名词。",
    "knowledge": "不可数名词没有复数形式。"
  },
  {
    "id": 536,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ elephant.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "elephant 以元音音素开头，用 an。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 537,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ interesting book.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "interesting book 以元音音素开头，用 an。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 538,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ useful dictionary.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "useful dictionary 以辅音音素开头，用 a。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 539,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ university student.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "university student 以辅音音素开头，用 a。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 540,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ European country.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "European country 以辅音音素开头，用 a。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 541,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ honest boy.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "honest boy 以元音音素开头，用 an。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 542,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ one-eyed dog.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "one-eyed dog 以辅音音素开头，用 a。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 543,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ 8-year-old girl.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "8-year-old girl 以元音音素开头，用 an。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 544,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ hour.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "hour 以元音音素开头，用 an。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 545,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ UFO.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "UFO 以辅音音素开头，用 a。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 546,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ umbrella.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "umbrella 以元音音素开头，用 an。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 547,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ apple.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "apple 以元音音素开头，用 an。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 548,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "I have ______ orange.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "orange 以元音音素开头，用 an。",
    "knowledge": "a/an 的选择看发音不看拼写。"
  },
  {
    "id": 549,
    "topic": "冠词",
    "subTopic": "定冠词",
    "source": "中考语法精选",
    "question": "______ Yellow River is the second longest river in China.",
    "options": [
      "A",
      "An",
      "The",
      "/"
    ],
    "answer": 2,
    "explanation": "由普通名词构成的专有名词（河流、山脉、群岛等）前用 the。",
    "knowledge": "the 用于江河湖海前。"
  },
  {
    "id": 550,
    "topic": "冠词",
    "subTopic": "定冠词",
    "source": "中考语法精选",
    "question": "______ Great Wall is famous all over the world.",
    "options": [
      "A",
      "An",
      "The",
      "/"
    ],
    "answer": 2,
    "explanation": "the Great Wall 是专有名词，意为\"长城\"。",
    "knowledge": "the 用于某些专有名词前。"
  },
  {
    "id": 551,
    "topic": "冠词",
    "subTopic": "零冠词",
    "source": "中考语法精选",
    "question": "She can speak ______ English and ______ French.",
    "options": [
      "the; the",
      "/; /",
      "a; a",
      "an; an"
    ],
    "answer": 1,
    "explanation": "语言名称前一般不加冠词。",
    "knowledge": "语言前通常零冠词。"
  },
  {
    "id": 552,
    "topic": "冠词",
    "subTopic": "零冠词",
    "source": "中考语法精选",
    "question": "Autumn is ______ best season for hiking.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 2,
    "explanation": "best 是最高级，前面用 the。",
    "knowledge": "最高级前用 the。"
  },
  {
    "id": 553,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This book is not mine. It belongs to ______.",
    "options": [
      "he",
      "him",
      "his",
      "himself"
    ],
    "answer": 1,
    "explanation": "belong to 中的 to 是介词，后接宾格 him。",
    "knowledge": "介词后接人称代词宾格。"
  },
  {
    "id": 554,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "My sister and ______ will go shopping.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，用人称代词主格 I。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 555,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Between you and ______, he is not telling the truth.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answer": 1,
    "explanation": "between 是介词，后接宾格 me。",
    "knowledge": "介词后接宾格。"
  },
  {
    "id": 556,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "— Is ______ here today? — Yes, everyone is here.",
    "options": [
      "someone",
      "anyone",
      "everyone",
      "no one"
    ],
    "answer": 2,
    "explanation": "everyone 表示\"每个人\"，符合句意\"今天大家都到齐了吗？\"。",
    "knowledge": "everyone 的用法。"
  },
  {
    "id": 557,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "There isn't ______ in the room. It's empty.",
    "options": [
      "someone",
      "anyone",
      "everyone",
      "no one"
    ],
    "answer": 1,
    "explanation": "否定句中表示\"某人\"用 anyone。",
    "knowledge": "anyone 用于否定句。"
  },
  {
    "id": 558,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "______ of my parents likes music. They often go to concerts.",
    "options": [
      "All",
      "Both",
      "Neither",
      "None"
    ],
    "answer": 1,
    "explanation": "父母两人都，表示\"两者都\"用 both。",
    "knowledge": "both 表示两者都。"
  },
  {
    "id": 559,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "December is the ______ month of a year.",
    "options": [
      "twelve",
      "twelfth",
      "twelveth",
      "the twelve"
    ],
    "answer": 1,
    "explanation": "第十二个月用序数词 twelfth。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 560,
    "topic": "数词",
    "subTopic": "分数词",
    "source": "中考语法精选",
    "question": "About ______ of the students are girls.",
    "options": [
      "three-fourths",
      "three-fourth",
      "third-fourth",
      "third-four"
    ],
    "answer": 0,
    "explanation": "四分之三：分子用基数词 three，分母用序数词 fourth，分子大于1分母加 s。",
    "knowledge": "分数表达法。"
  },
  {
    "id": 561,
    "topic": "数词",
    "subTopic": "加减乘除",
    "source": "中考语法精选",
    "question": "Three and five ______ eight.",
    "options": [
      "is",
      "are",
      "be",
      "am"
    ],
    "answer": 0,
    "explanation": "数词运算结果作主语，谓语动词用单数。",
    "knowledge": "数词运算的主谓一致。"
  },
  {
    "id": 562,
    "topic": "数词",
    "subTopic": "时间与日期",
    "source": "中考语法精选",
    "question": "We will have a meeting at ______ on Monday.",
    "options": [
      "three fifteen",
      "fifteen three",
      "three past fifteen",
      "a quarter past three"
    ],
    "answer": 3,
    "explanation": "三点一刻可用 a quarter past three 表示。",
    "knowledge": "时间表达法。"
  },
  {
    "id": 563,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "cheaper",
      "cheapest",
      "cheap",
      "more cheap"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，cheap 的比较级是 cheaper。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 564,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the cheapest",
      "cheapest",
      "cheaper",
      "cheap"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，cheap 的最高级是 cheapest。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 565,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "hotter",
      "hottest",
      "hot",
      "more hot"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，hot 的比较级是 hotter。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 566,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the hottest",
      "hottest",
      "hotter",
      "hot"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，hot 的最高级是 hottest。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 567,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "thinner",
      "thinnest",
      "thin",
      "more thin"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，thin 的比较级是 thinner。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 568,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the thinnest",
      "thinnest",
      "thinner",
      "thin"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，thin 的最高级是 thinnest。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 569,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "fatter",
      "fattest",
      "fat",
      "more fat"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，fat 的比较级是 fatter。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 570,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the fattest",
      "fattest",
      "fatter",
      "fat"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，fat 的最高级是 fattest。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 571,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "wetter",
      "wettest",
      "wet",
      "more wet"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，wet 的比较级是 wetter。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 572,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the wettest",
      "wettest",
      "wetter",
      "wet"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，wet 的最高级是 wettest。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 573,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "sadder",
      "saddest",
      "sad",
      "more sad"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，sad 的比较级是 sadder。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 574,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the saddest",
      "saddest",
      "sadder",
      "sad"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，sad 的最高级是 saddest。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 575,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "larger",
      "largest",
      "large",
      "more large"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，large 的比较级是 larger。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 576,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the largest",
      "largest",
      "larger",
      "large"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，large 的最高级是 largest。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 577,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "nicer",
      "nicest",
      "nice",
      "more nice"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，nice 的比较级是 nicer。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 578,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the nicest",
      "nicest",
      "nicer",
      "nice"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，nice 的最高级是 nicest。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 579,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "braver",
      "bravest",
      "brave",
      "more brave"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，brave 的比较级是 braver。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 580,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the bravest",
      "bravest",
      "braver",
      "brave"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，brave 的最高级是 bravest。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 581,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "cleverer",
      "cleverest",
      "clever",
      "more clever"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，clever 的比较级是 cleverer。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 582,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the cleverest",
      "cleverest",
      "cleverer",
      "clever"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，clever 的最高级是 cleverest。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 583,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "more careful",
      "most careful",
      "careful",
      "the most careful"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，careful 的比较级是 more careful。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 584,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the most careful",
      "most careful",
      "more careful",
      "careful"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，careful 的最高级是 most careful。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 585,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "more careless",
      "most careless",
      "careless",
      "the most careless"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，careless 的比较级是 more careless。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 586,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the most careless",
      "most careless",
      "more careless",
      "careless"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，careless 的最高级是 most careless。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 587,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "more important",
      "most important",
      "important",
      "the most important"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，important 的比较级是 more important。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 588,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the most important",
      "most important",
      "more important",
      "important"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，important 的最高级是 most important。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 589,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "more popular",
      "most popular",
      "popular",
      "the most popular"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，popular 的比较级是 more popular。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 590,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the most popular",
      "most popular",
      "more popular",
      "popular"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，popular 的最高级是 most popular。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 591,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "more difficult",
      "most difficult",
      "difficult",
      "the most difficult"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，difficult 的比较级是 more difficult。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 592,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the most difficult",
      "most difficult",
      "more difficult",
      "difficult"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，difficult 的最高级是 most difficult。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 593,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "This box is ______ than that one.",
    "options": [
      "more expensive",
      "most expensive",
      "expensive",
      "the most expensive"
    ],
    "answer": 0,
    "explanation": "than 是比较级标志，expensive 的比较级是 more expensive。",
    "knowledge": "形容词比较级构成。"
  },
  {
    "id": 594,
    "topic": "形容词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He is ______ student in our class.",
    "options": [
      "the most expensive",
      "most expensive",
      "more expensive",
      "expensive"
    ],
    "answer": 0,
    "explanation": "最高级前通常加 the，expensive 的最高级是 most expensive。",
    "knowledge": "形容词最高级构成。"
  },
  {
    "id": 595,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "He finished his work ______.",
    "options": [
      "quick",
      "quickly",
      "more quick",
      "quicker"
    ],
    "answer": 1,
    "explanation": "修饰动词 finished 要用副词 quickly。",
    "knowledge": "副词修饰动词。"
  },
  {
    "id": 596,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "She speaks English ______ than me.",
    "options": [
      "well",
      "better",
      "best",
      "good"
    ],
    "answer": 1,
    "explanation": "than 提示用比较级，well 的比较级是 better。",
    "knowledge": "well 的比较级。"
  },
  {
    "id": 597,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "______ enough, he passed the exam.",
    "options": [
      "Lucky",
      "Luckily",
      "Luck",
      "Luckly"
    ],
    "answer": 1,
    "explanation": "修饰整个句子要用副词 luckily，意为\"幸运地是\"。",
    "knowledge": "副词修饰整个句子。"
  },
  {
    "id": 598,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "The dress is beautiful, ______ it is too expensive.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 1,
    "explanation": "前后句意转折，\"漂亮但太贵\"，用 but。",
    "knowledge": "but 表示转折。"
  },
  {
    "id": 599,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "I want to buy this pen, ______ I don't have enough money.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 1,
    "explanation": "前后句意转折，用 but。",
    "knowledge": "but 的用法。"
  },
  {
    "id": 600,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "______ the weather is bad, we will stay at home.",
    "options": [
      "If",
      "Although",
      "Because",
      "When"
    ],
    "answer": 0,
    "explanation": "if 引导条件状语从句，\"如果天气不好，我们就待在家里\"。",
    "knowledge": "if 引导条件状语从句。"
  },
  {
    "id": 601,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "He didn't go to bed ______ he finished his homework.",
    "options": [
      "when",
      "while",
      "until",
      "since"
    ],
    "answer": 2,
    "explanation": "not...until... 表示\"直到……才……\"。",
    "knowledge": "until 的用法。"
  },
  {
    "id": 602,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please arrive ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "arrive at 是固定搭配，意为\"小地点\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 603,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please arrive ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "arrive in 是固定搭配，意为\"大地点\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 604,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please get ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "get to 是固定搭配，意为\"到达\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 605,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please listen ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "listen to 是固定搭配，意为\"听\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 606,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please look ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "look at 是固定搭配，意为\"看\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 607,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please wait ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "for"
    ],
    "answer": 0,
    "explanation": "wait for 是固定搭配，意为\"等待\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 608,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please pay ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "for"
    ],
    "answer": 0,
    "explanation": "pay for 是固定搭配，意为\"为……付款\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 609,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please laugh ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "laugh at 是固定搭配，意为\"嘲笑\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 610,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please point ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "point at 是固定搭配，意为\"指向\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 611,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please shout ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "shout at 是固定搭配，意为\"对……大喊\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 612,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please talk ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "about"
    ],
    "answer": 0,
    "explanation": "talk about 是固定搭配，意为\"谈论\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 613,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please think ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "about"
    ],
    "answer": 0,
    "explanation": "think about 是固定搭配，意为\"考虑\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 614,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please care ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "about"
    ],
    "answer": 0,
    "explanation": "care about 是固定搭配，意为\"关心\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 615,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please worry ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "about"
    ],
    "answer": 0,
    "explanation": "worry about 是固定搭配，意为\"担心\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 616,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please agree ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "agree with 是固定搭配，意为\"同意某人\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 617,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please begin ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "begin with 是固定搭配，意为\"以……开始\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 618,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please help ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "help with 是固定搭配，意为\"帮助做某事\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 619,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please share ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "share with 是固定搭配，意为\"与……分享\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 620,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please compare ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "compare with 是固定搭配，意为\"与……比较\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 621,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please catch ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "up with"
    ],
    "answer": 0,
    "explanation": "catch up with 是固定搭配，意为\"赶上\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 622,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please deal ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "deal with 是固定搭配，意为\"处理\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 623,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please provide ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "provide with 是固定搭配，意为\"提供\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 624,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please fill ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "fill with 是固定搭配，意为\"用……装满\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 625,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please cover ______ the blackboard.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "cover with 是固定搭配，意为\"用……覆盖\"。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 626,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In \"The students are listening to the teacher carefully\", the underlined part is ______.",
    "options": [
      "主语",
      "谓语",
      "宾语",
      "状语"
    ],
    "answer": 3,
    "explanation": "carefully 是副词，修饰动词 listen，作状语。",
    "knowledge": "副词作状语。"
  },
  {
    "id": 627,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In \"We elected him monitor\", the underlined part is ______.",
    "options": [
      "主语",
      "谓语",
      "宾语",
      "宾语补足语"
    ],
    "answer": 3,
    "explanation": "monitor 补充说明宾语 him 的身份，作宾语补足语。",
    "knowledge": "宾语补足语的识别。"
  },
  {
    "id": 628,
    "topic": "句子成分",
    "subTopic": "主语",
    "source": "中考语法精选",
    "question": "______ is important to learn English well.",
    "options": [
      "This",
      "That",
      "It",
      "He"
    ],
    "answer": 2,
    "explanation": "It 作形式主语，真正主语是 to learn English well。",
    "knowledge": "it 作形式主语。"
  },
  {
    "id": 629,
    "topic": "句型",
    "subTopic": "There be",
    "source": "中考语法精选",
    "question": "There ______ some bread and two eggs on the plate.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 0,
    "explanation": "there be 句型遵循就近原则，bread 是不可数名词，用 is。",
    "knowledge": "there be 的就近原则。"
  },
  {
    "id": 630,
    "topic": "句型",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The song ______ by many teenagers.",
    "options": [
      "likes",
      "is liked",
      "liked",
      "liking"
    ],
    "answer": 1,
    "explanation": "song 与 like 是被动关系，用一般现在时被动语态 is liked。",
    "knowledge": "一般现在时被动语态。"
  },
  {
    "id": 631,
    "topic": "句型",
    "subTopic": "五大基本句型",
    "source": "中考语法精选",
    "question": "The teacher made the class interesting. The underlined part is ______.",
    "options": [
      "主语",
      "谓语",
      "宾语",
      "宾语补足语"
    ],
    "answer": 3,
    "explanation": "interesting 补充说明宾语 the class，作宾语补足语。",
    "knowledge": "宾语补足语的识别。"
  },
  {
    "id": 632,
    "topic": "简单句",
    "subTopic": "特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ is it from here to the station? — About 5 kilometers.",
    "options": [
      "How long",
      "How far",
      "How often",
      "How soon"
    ],
    "answer": 1,
    "explanation": "由答语 About 5 kilometers 可知询问距离，用 how far。",
    "knowledge": "how far 询问距离。"
  },
  {
    "id": 633,
    "topic": "简单句",
    "subTopic": "特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ have you lived here? — For about 10 years.",
    "options": [
      "How long",
      "How far",
      "How often",
      "How soon"
    ],
    "answer": 0,
    "explanation": "由答语 For about 10 years 可知询问时间段，用 how long。",
    "knowledge": "how long 询问时间段。"
  },
  {
    "id": 634,
    "topic": "简单句",
    "subTopic": "感叹句",
    "source": "中考语法精选",
    "question": "______ tall boy he is!",
    "options": [
      "What",
      "What a",
      "How",
      "How a"
    ],
    "answer": 1,
    "explanation": "boy 是可数名词单数，用 What a + 形容词 + 可数名词单数。",
    "knowledge": "what 引导的感叹句。"
  },
  {
    "id": 635,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Do you know ______?",
    "options": [
      "where does he live",
      "where he lives",
      "where he live",
      "where is he live"
    ],
    "answer": 1,
    "explanation": "宾语从句用陈述语序，主句是一般现在时，从句根据实际情况用一般现在时。",
    "knowledge": "宾语从句的语序和时态。"
  },
  {
    "id": 636,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "The reason ______ he was late was that he missed the bus.",
    "options": [
      "why",
      "which",
      "that",
      "where"
    ],
    "answer": 0,
    "explanation": "先行词 reason 在从句中作原因状语，用 why。",
    "knowledge": "why 引导定语从句。"
  },
  {
    "id": 637,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "______ it rains heavily, we will stay at home.",
    "options": [
      "If",
      "Because",
      "Although",
      "When"
    ],
    "answer": 0,
    "explanation": "if 引导条件状语从句，\"如果下大雨，我们就待在家里\"。",
    "knowledge": "if 引导条件状语从句。"
  },
  {
    "id": 638,
    "topic": "动词",
    "subTopic": "实义动词",
    "source": "中考语法精选",
    "question": "Please ______ me your name.",
    "options": [
      "speak",
      "say",
      "tell",
      "talk"
    ],
    "answer": 2,
    "explanation": "tell sb. sth. 意为\"告诉某人某事\"。",
    "knowledge": "tell 的用法。"
  },
  {
    "id": 639,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "— ______ I come in? — Yes, please.",
    "options": [
      "Must",
      "May",
      "Need",
      "Should"
    ],
    "answer": 1,
    "explanation": "may 表示请求许可，语气委婉。",
    "knowledge": "may 表示请求许可。"
  },
  {
    "id": 640,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "I'm looking forward ______ you soon.",
    "options": [
      "see",
      "to see",
      "to seeing",
      "seeing"
    ],
    "answer": 2,
    "explanation": "look forward to 中的 to 是介词，后接动名词。",
    "knowledge": "look forward to doing。"
  },
  {
    "id": 641,
    "topic": "动词时态",
    "subTopic": "一般将来时",
    "source": "中考语法精选",
    "question": "We ______ have a meeting tomorrow afternoon.",
    "options": [
      "will",
      "are going to",
      "are",
      "would"
    ],
    "answer": 0,
    "explanation": "tomorrow afternoon 提示用一般将来时，will + 动词原形。",
    "knowledge": "一般将来时的构成。"
  },
  {
    "id": 642,
    "topic": "动词时态",
    "subTopic": "现在完成时",
    "source": "中考语法精选",
    "question": "I have ______ in this school for three years.",
    "options": [
      "been",
      "gone",
      "come",
      "arrived"
    ],
    "answer": 0,
    "explanation": "have been in 表示在某地待了多久，是延续性状态。",
    "knowledge": "have been in 的用法。"
  },
  {
    "id": 643,
    "topic": "动词时态",
    "subTopic": "过去进行时",
    "source": "中考语法精选",
    "question": "What ______ you ______ at this time yesterday?",
    "options": [
      "were; doing",
      "are; doing",
      "did; do",
      "were; do"
    ],
    "answer": 0,
    "explanation": "at this time yesterday 提示用过去进行时。",
    "knowledge": "过去进行时的特殊疑问句。"
  },
  {
    "id": 644,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The letter ______ in English.",
    "options": [
      "write",
      "is written",
      "wrote",
      "writing"
    ],
    "answer": 1,
    "explanation": "letter 与 write 是被动关系，表示客观事实用一般现在时。",
    "knowledge": "一般现在时被动语态。"
  },
  {
    "id": 645,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The work must ______ before Friday.",
    "options": [
      "finish",
      "be finished",
      "finished",
      "finishing"
    ],
    "answer": 1,
    "explanation": "work 与 finish 是被动关系，must 后接 be + 过去分词。",
    "knowledge": "含情态动词的被动语态。"
  },
  {
    "id": 646,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "more slowly",
      "most slowly",
      "slowly",
      "the most slowly"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，slowly 的比较级是 more slowly。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 647,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "most slowly",
      "more slowly",
      "slowly",
      "the most slowly"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，slowly 的最高级是 most slowly。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 648,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "more carefully",
      "most carefully",
      "carefully",
      "the most carefully"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，carefully 的比较级是 more carefully。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 649,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "most carefully",
      "more carefully",
      "carefully",
      "the most carefully"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，carefully 的最高级是 most carefully。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 650,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "more clearly",
      "most clearly",
      "clearly",
      "the most clearly"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，clearly 的比较级是 more clearly。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 651,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "most clearly",
      "more clearly",
      "clearly",
      "the most clearly"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，clearly 的最高级是 most clearly。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 652,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "more quietly",
      "most quietly",
      "quietly",
      "the most quietly"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，quietly 的比较级是 more quietly。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 653,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "most quietly",
      "more quietly",
      "quietly",
      "the most quietly"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，quietly 的最高级是 most quietly。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 654,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "harder",
      "hardest",
      "hard",
      "more hard"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，hard 的比较级是 harder。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 655,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "hardest",
      "harder",
      "hard",
      "the hardest"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，hard 的最高级是 hardest。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 656,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "earlier",
      "earliest",
      "early",
      "more early"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，early 的比较级是 earlier。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 657,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "earliest",
      "earlier",
      "early",
      "the earliest"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，early 的最高级是 earliest。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 658,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "later",
      "latest",
      "late",
      "more late"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，late 的比较级是 later。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 659,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "latest",
      "later",
      "late",
      "the latest"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，late 的最高级是 latest。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 660,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "faster",
      "fastest",
      "fast",
      "more fast"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，fast 的比较级是 faster。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 661,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "fastest",
      "faster",
      "fast",
      "the fastest"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，fast 的最高级是 fastest。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 662,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "higher",
      "highest",
      "high",
      "more high"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，high 的比较级是 higher。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 663,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "highest",
      "higher",
      "high",
      "the highest"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，high 的最高级是 highest。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 664,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "farther",
      "farthest",
      "far",
      "more far"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，far 的比较级是 farther。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 665,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "farthest",
      "farther",
      "far",
      "the farthest"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，far 的最高级是 farthest。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 666,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "longer",
      "longest",
      "long",
      "more long"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，long 的比较级是 longer。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 667,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "longest",
      "longer",
      "long",
      "the longest"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，long 的最高级是 longest。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 668,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "He speaks English ______ than before.",
    "options": [
      "more often",
      "most often",
      "often",
      "the most often"
    ],
    "answer": 0,
    "explanation": "than 提示用比较级，often 的比较级是 more often。",
    "knowledge": "副词比较级构成。"
  },
  {
    "id": 669,
    "topic": "副词",
    "subTopic": "比较级和最高级的变化规则",
    "source": "中考语法精选",
    "question": "Of all the students, she runs ______.",
    "options": [
      "most often",
      "more often",
      "often",
      "the most often"
    ],
    "answer": 0,
    "explanation": "of all 表示范围，用最高级，often 的最高级是 most often。",
    "knowledge": "副词最高级构成。"
  },
  {
    "id": 670,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "______ did you finish the work? — In two hours.",
    "options": [
      "How long",
      "How far",
      "How often",
      "How soon"
    ],
    "answer": 0,
    "explanation": "由答语 In two hours 可知询问时间段，用 how long。",
    "knowledge": "how long 询问时间段。"
  },
  {
    "id": 671,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "______ do you go to the library? — Twice a week.",
    "options": [
      "How long",
      "How far",
      "How often",
      "How soon"
    ],
    "answer": 2,
    "explanation": "由答语 Twice a week 可知询问频率，用 how often。",
    "knowledge": "how often 询问频率。"
  },
  {
    "id": 672,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "______ will the train arrive? — In ten minutes.",
    "options": [
      "How long",
      "How far",
      "How often",
      "How soon"
    ],
    "answer": 3,
    "explanation": "由答语 In ten minutes 可知询问多久之后，用 how soon。",
    "knowledge": "how soon 询问将来时间。"
  },
  {
    "id": 673,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "He speaks too ______ for us to follow.",
    "options": [
      "quick",
      "quickly",
      "more quick",
      "quicker"
    ],
    "answer": 1,
    "explanation": "修饰动词 speak 要用副词 quickly。",
    "knowledge": "副词修饰动词。"
  },
  {
    "id": 674,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "Please sit ______ and listen to me.",
    "options": [
      "down",
      "up",
      "over",
      "on"
    ],
    "answer": 0,
    "explanation": "sit down 是固定搭配，意为\"坐下\"。",
    "knowledge": "sit down 固定搭配。"
  },
  {
    "id": 675,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "I like apples, ______ I don't like bananas.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 1,
    "explanation": "根据句意，此处表示转折关系，用 but。",
    "knowledge": "连词表示逻辑关系。"
  },
  {
    "id": 676,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "Study hard, ______ you will fail the exam.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 2,
    "explanation": "根据句意，此处表示否则关系，用 or。",
    "knowledge": "连词表示逻辑关系。"
  },
  {
    "id": 677,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "It rained heavily, ______ we stayed at home.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 3,
    "explanation": "根据句意，此处表示因果关系，用 so。",
    "knowledge": "连词表示逻辑关系。"
  },
  {
    "id": 678,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "______ he is old, he is still active.",
    "options": [
      "Although",
      "but",
      "or",
      "so"
    ],
    "answer": 0,
    "explanation": "根据句意，此处表示让步关系，用 Although。",
    "knowledge": "连词表示逻辑关系。"
  },
  {
    "id": 679,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "______ you try your best, you will succeed.",
    "options": [
      "If",
      "but",
      "or",
      "so"
    ],
    "answer": 0,
    "explanation": "根据句意，此处表示条件关系，用 If。",
    "knowledge": "连词表示逻辑关系。"
  },
  {
    "id": 680,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "He was late ______ he got up late.",
    "options": [
      "because",
      "but",
      "or",
      "so"
    ],
    "answer": 0,
    "explanation": "根据句意，此处表示原因关系，用 because。",
    "knowledge": "连词表示逻辑关系。"
  },
  {
    "id": 681,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "I have lived here ______ I was born.",
    "options": [
      "since",
      "but",
      "or",
      "so"
    ],
    "answer": 0,
    "explanation": "根据句意，此处表示时间关系，用 since。",
    "knowledge": "连词表示逻辑关系。"
  },
  {
    "id": 682,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "Don't go out ______ it stops raining.",
    "options": [
      "until",
      "but",
      "or",
      "so"
    ],
    "answer": 0,
    "explanation": "根据句意，此处表示时间关系，用 until。",
    "knowledge": "连词表示逻辑关系。"
  },
  {
    "id": 683,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "______ she came in, I was reading.",
    "options": [
      "When",
      "but",
      "or",
      "so"
    ],
    "answer": 0,
    "explanation": "根据句意，此处表示时间关系，用 When。",
    "knowledge": "连词表示逻辑关系。"
  },
  {
    "id": 684,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "______ it is Sunday, I have to work.",
    "options": [
      "Although",
      "but",
      "or",
      "so"
    ],
    "answer": 0,
    "explanation": "根据句意，此处表示让步关系，用 Although。",
    "knowledge": "连词表示逻辑关系。"
  },
  {
    "id": 685,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "in front of",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "in front of 意为\"在……前面\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 686,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "behind",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "behind 意为\"在……后面\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 687,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "beside",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "beside 意为\"在……旁边\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 688,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "between",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "between 意为\"在……之间\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 689,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "among",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "among 意为\"在……之中\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 690,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "across from",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "across from 意为\"在……对面\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 691,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "next to",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "next to 意为\"紧挨着\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 692,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "near",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "near 意为\"在……附近\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 693,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "above",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "above 意为\"在……上方\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 694,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "below",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "below 意为\"在……下方\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 695,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "over",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "over 意为\"在……正上方\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 696,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the post office.",
    "options": [
      "under",
      "in",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "under 意为\"在……正下方\"，表示方位关系。",
    "knowledge": "方位介词的用法。"
  },
  {
    "id": 697,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We will meet ______ 6:30.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 0,
    "explanation": "6:30 前用介词 at。",
    "knowledge": "时间介词 at/on/in。"
  },
  {
    "id": 698,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We will meet ______ Sunday morning.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 1,
    "explanation": "Sunday morning 前用介词 on。",
    "knowledge": "时间介词 at/on/in。"
  },
  {
    "id": 699,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We will meet ______ July.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 2,
    "explanation": "July 前用介词 in。",
    "knowledge": "时间介词 at/on/in。"
  },
  {
    "id": 700,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We will meet ______ Christmas Day.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 1,
    "explanation": "Christmas Day 前用介词 on。",
    "knowledge": "时间介词 at/on/in。"
  },
  {
    "id": 701,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We will meet ______ midnight.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 0,
    "explanation": "midnight 前用介词 at。",
    "knowledge": "时间介词 at/on/in。"
  },
  {
    "id": 702,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We will meet ______ the 21st century.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 2,
    "explanation": "the 21st century 前用介词 in。",
    "knowledge": "时间介词 at/on/in。"
  },
  {
    "id": 703,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We will meet ______ a rainy day.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 1,
    "explanation": "a rainy day 前用介词 on。",
    "knowledge": "时间介词 at/on/in。"
  },
  {
    "id": 704,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We will meet ______ dawn.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 0,
    "explanation": "dawn 前用介词 at。",
    "knowledge": "时间介词 at/on/in。"
  },
  {
    "id": 705,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"The tall boy runs fast\", the underlined word \"boy\" is ______.",
    "options": [
      "主语",
      "谓语",
      "定语",
      "宾语"
    ],
    "answer": 0,
    "explanation": "boy 是句子叙述的主体，是主语。",
    "knowledge": "主语的识别。"
  },
  {
    "id": 706,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"The tall boy runs fast\", the underlined word \"tall\" is ______.",
    "options": [
      "主语",
      "谓语",
      "定语",
      "状语"
    ],
    "answer": 2,
    "explanation": "tall 修饰名词 boy，作定语。",
    "knowledge": "定语的识别。"
  },
  {
    "id": 707,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"The tall boy runs fast\", the underlined phrase \"runs fast\" is ______.",
    "options": [
      "主语",
      "谓语",
      "宾语",
      "状语"
    ],
    "answer": 1,
    "explanation": "runs fast 说明主语的动作，是谓语。",
    "knowledge": "谓语的识别。"
  },
  {
    "id": 708,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"He gave me a book\", the underlined word \"book\" is ______.",
    "options": [
      "主语",
      "间接宾语",
      "直接宾语",
      "宾语补足语"
    ],
    "answer": 2,
    "explanation": "gave me a book 中，book 是 give 的直接宾语。",
    "knowledge": "直接宾语的识别。"
  },
  {
    "id": 709,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"We made him monitor\", the underlined word \"monitor\" is ______.",
    "options": [
      "主语",
      "谓语",
      "宾语",
      "宾语补足语"
    ],
    "answer": 3,
    "explanation": "monitor 补充说明宾语 him 的身份，作宾语补足语。",
    "knowledge": "宾语补足语的识别。"
  },
  {
    "id": 710,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"She is happy\", the underlined word \"happy\" is ______.",
    "options": [
      "主语",
      "谓语",
      "表语",
      "宾语"
    ],
    "answer": 2,
    "explanation": "happy 位于系动词 is 后，作表语。",
    "knowledge": "表语的识别。"
  },
  {
    "id": 711,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"He runs in the park\", the underlined phrase \"in the park\" is ______.",
    "options": [
      "主语",
      "谓语",
      "宾语",
      "状语"
    ],
    "answer": 3,
    "explanation": "in the park 说明动作发生的地点，作状语。",
    "knowledge": "状语的识别。"
  },
  {
    "id": 712,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"The book on the desk is mine\", the underlined phrase \"on the desk\" is ______.",
    "options": [
      "主语",
      "定语",
      "表语",
      "状语"
    ],
    "answer": 1,
    "explanation": "on the desk 修饰名词 book，作定语。",
    "knowledge": "后置定语的识别。"
  },
  {
    "id": 713,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"My mother bought me a new dress\", the underlined word \"me\" is ______.",
    "options": [
      "主语",
      "间接宾语",
      "直接宾语",
      "宾语补足语"
    ],
    "answer": 1,
    "explanation": "bought me a new dress 中，me 是间接宾语。",
    "knowledge": "间接宾语的识别。"
  },
  {
    "id": 714,
    "topic": "句子成分",
    "subTopic": "句子成分辨析",
    "source": "中考语法精选",
    "question": "In the sentence \"To learn English well is important\", the underlined part is ______.",
    "options": [
      "主语",
      "谓语",
      "宾语",
      "表语"
    ],
    "answer": 0,
    "explanation": "动词不定式短语在句首作主语。",
    "knowledge": "动词不定式作主语。"
  },
  {
    "id": 715,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "He is a student. (改为一般疑问句)",
    "options": [
      "Is he a student?",
      "Is he a student??",
      "Does he a student?",
      "He is a student?"
    ],
    "answer": 0,
    "explanation": "一般疑问句将 be 动词 is 提前，句首字母大写。",
    "knowledge": "句型转换。"
  },
  {
    "id": 716,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "She can swim. (改为否定句)",
    "options": [
      "She can't swim.",
      "She can not swim.",
      "She doesn't can swim.",
      "She can't swims."
    ],
    "answer": 0,
    "explanation": "情态动词 can 的否定形式为 can't / can not，后面接动词原形 swim。",
    "knowledge": "句型转换。"
  },
  {
    "id": 717,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "They have finished the work. (改为否定句)",
    "options": [
      "They haven't finished the work.",
      "They haven't finish the work.",
      "They don't have finished the work.",
      "They has not finished the work."
    ],
    "answer": 0,
    "explanation": "现在完成时 haven't / have not + 过去分词 finished。",
    "knowledge": "句型转换。"
  },
  {
    "id": 718,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "He will go to Beijing. (改为一般疑问句)",
    "options": [
      "Will he go to Beijing?",
      "Is he go to Beijing?",
      "Does he will go to Beijing?",
      "Will he goes to Beijing?"
    ],
    "answer": 0,
    "explanation": "will 提前构成一般疑问句，后面接动词原形 go。",
    "knowledge": "句型转换。"
  },
  {
    "id": 719,
    "topic": "简单句",
    "subTopic": "祈使句",
    "source": "中考语法精选",
    "question": "______ cross the road when the traffic light is red.",
    "options": [
      "Don't",
      "Not",
      "Doesn't",
      "Can't"
    ],
    "answer": 0,
    "explanation": "祈使句否定形式用 Don't + 动词原形。",
    "knowledge": "祈使句否定。"
  },
  {
    "id": 720,
    "topic": "简单句",
    "subTopic": "祈使句",
    "source": "中考语法精选",
    "question": "______ be late for class again.",
    "options": [
      "Don't",
      "Not",
      "Doesn't",
      "Can't"
    ],
    "answer": 0,
    "explanation": "祈使句否定用 Don't，be late 为固定搭配。",
    "knowledge": "祈使句否定。"
  },
  {
    "id": 721,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Do you know where he lives?",
    "options": [
      "where he lives",
      "does where he lives",
      "is where he lives",
      "where does he lives"
    ],
    "answer": 0,
    "explanation": "宾语从句用陈述语序，\"where he lives\"意为\"他住在哪里\"。",
    "knowledge": "宾语从句语序。"
  },
  {
    "id": 722,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Do you know what he wants?",
    "options": [
      "what he wants",
      "does what he wants",
      "is what he wants",
      "what does he wants"
    ],
    "answer": 0,
    "explanation": "宾语从句用陈述语序，\"what he wants\"意为\"他想要什么\"。",
    "knowledge": "宾语从句语序。"
  },
  {
    "id": 723,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Do you know when he will come?",
    "options": [
      "when he will come",
      "does when he will come",
      "is when he will come",
      "when does he come"
    ],
    "answer": 0,
    "explanation": "宾语从句用陈述语序，\"when he will come\"意为\"他什么时候来\"。",
    "knowledge": "宾语从句语序。"
  },
  {
    "id": 724,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Do you know why she is crying?",
    "options": [
      "why she is crying",
      "does why she is crying",
      "is why she is crying",
      "why does he crying"
    ],
    "answer": 0,
    "explanation": "宾语从句用陈述语序，\"why she is crying\"意为\"她为什么哭\"。",
    "knowledge": "宾语从句语序。"
  },
  {
    "id": 725,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Do you know how I can get there?",
    "options": [
      "how I can get there",
      "does how I can get there",
      "is how I can get there",
      "how does he there"
    ],
    "answer": 0,
    "explanation": "宾语从句用陈述语序，\"how I can get there\"意为\"我怎么去那里\"。",
    "knowledge": "宾语从句语序。"
  },
  {
    "id": 726,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Do you know if it will rain?",
    "options": [
      "if it will rain",
      "does if it will rain",
      "is if it will rain",
      "if does he rain"
    ],
    "answer": 0,
    "explanation": "宾语从句用陈述语序，\"if it will rain\"意为\"是否会下雨\"。",
    "knowledge": "宾语从句语序。"
  },
  {
    "id": 727,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "The boy ______ is singing is my brother.",
    "options": [
      "who",
      "which",
      "that",
      "whom"
    ],
    "answer": 0,
    "explanation": "先行词在从句中作人，作主语，用 who。",
    "knowledge": "定语从句关系词选择。"
  },
  {
    "id": 728,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "The book ______ I bought is interesting.",
    "options": [
      "which",
      "who",
      "that",
      "whom"
    ],
    "answer": 0,
    "explanation": "先行词在从句中作物，作宾语，用 which。",
    "knowledge": "定语从句关系词选择。"
  },
  {
    "id": 729,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "This is the best film ______ I have seen.",
    "options": [
      "that",
      "who",
      "which",
      "whom"
    ],
    "answer": 0,
    "explanation": "先行词在从句中作最高级修饰，用 that。",
    "knowledge": "定语从句关系词选择。"
  },
  {
    "id": 730,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "This is the girl ______ bike was lost.",
    "options": [
      "who",
      "which",
      "that",
      "whose"
    ],
    "answer": 3,
    "explanation": "先行词在从句中作所属关系，用 whose。",
    "knowledge": "定语从句关系词选择。"
  },
  {
    "id": 731,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "This is the school ______ I studied.",
    "options": [
      "who",
      "which",
      "that",
      "where"
    ],
    "answer": 3,
    "explanation": "先行词在从句中作地点状语，用 where。",
    "knowledge": "定语从句关系词选择。"
  },
  {
    "id": 732,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "I still remember the day ______ we met.",
    "options": [
      "who",
      "which",
      "that",
      "when"
    ],
    "answer": 3,
    "explanation": "先行词在从句中作时间状语，用 when。",
    "knowledge": "定语从句关系词选择。"
  },
  {
    "id": 733,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "If it rains tomorrow, we will stay at home. This is a(n) ______ adverbial clause.",
    "options": [
      "condition",
      "time",
      "reason",
      "result"
    ],
    "answer": 0,
    "explanation": "该从句表示条件关系。",
    "knowledge": "状语从句类型判断。"
  },
  {
    "id": 734,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "Although he is young, he knows a lot. This is a(n) ______ adverbial clause.",
    "options": [
      "time",
      "condition",
      "reason",
      "concession"
    ],
    "answer": 3,
    "explanation": "该从句表示让步关系。",
    "knowledge": "状语从句类型判断。"
  },
  {
    "id": 735,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "Because he was ill, he didn't go to school. This is a(n) ______ adverbial clause.",
    "options": [
      "reason",
      "time",
      "condition",
      "result"
    ],
    "answer": 0,
    "explanation": "该从句表示原因关系。",
    "knowledge": "状语从句类型判断。"
  },
  {
    "id": 736,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "When I got home, my mother was cooking. This is a(n) ______ adverbial clause.",
    "options": [
      "time",
      "condition",
      "reason",
      "result"
    ],
    "answer": 0,
    "explanation": "该从句表示时间关系。",
    "knowledge": "状语从句类型判断。"
  },
  {
    "id": 737,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "As soon as I see him, I will tell him. This is a(n) ______ adverbial clause.",
    "options": [
      "time",
      "condition",
      "reason",
      "result"
    ],
    "answer": 0,
    "explanation": "该从句表示时间关系。",
    "knowledge": "状语从句类型判断。"
  },
  {
    "id": 738,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "So that he could pass the exam, he studied hard. This is a(n) ______ adverbial clause.",
    "options": [
      "time",
      "condition",
      "reason",
      "purpose"
    ],
    "answer": 3,
    "explanation": "该从句表示目的关系。",
    "knowledge": "状语从句类型判断。"
  },
  {
    "id": 739,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school on foot.",
    "options": [
      "go",
      "goes",
      "went",
      "going"
    ],
    "answer": 1,
    "explanation": "often 提示一般现在时，he 是第三人称单数，go 的三单形式是 goes。",
    "knowledge": "动词第三人称单数形式。"
  },
  {
    "id": 740,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last summer.",
    "options": [
      "go",
      "goes",
      "went",
      "going"
    ],
    "answer": 2,
    "explanation": "last summer 提示一般过去时，go 的过去式是 went。",
    "knowledge": "动词过去式。"
  },
  {
    "id": 741,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school on foot.",
    "options": [
      "do",
      "does",
      "did",
      "doing"
    ],
    "answer": 1,
    "explanation": "often 提示一般现在时，he 是第三人称单数，do 的三单形式是 does。",
    "knowledge": "动词第三人称单数形式。"
  },
  {
    "id": 742,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last summer.",
    "options": [
      "do",
      "does",
      "did",
      "doing"
    ],
    "answer": 2,
    "explanation": "last summer 提示一般过去时，do 的过去式是 did。",
    "knowledge": "动词过去式。"
  },
  {
    "id": 743,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school on foot.",
    "options": [
      "have",
      "has",
      "had",
      "having"
    ],
    "answer": 1,
    "explanation": "often 提示一般现在时，he 是第三人称单数，have 的三单形式是 has。",
    "knowledge": "动词第三人称单数形式。"
  },
  {
    "id": 744,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last summer.",
    "options": [
      "have",
      "has",
      "had",
      "having"
    ],
    "answer": 2,
    "explanation": "last summer 提示一般过去时，have 的过去式是 had。",
    "knowledge": "动词过去式。"
  },
  {
    "id": 745,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school on foot.",
    "options": [
      "make",
      "makes",
      "made",
      "making"
    ],
    "answer": 1,
    "explanation": "often 提示一般现在时，he 是第三人称单数，make 的三单形式是 makes。",
    "knowledge": "动词第三人称单数形式。"
  },
  {
    "id": 746,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last summer.",
    "options": [
      "make",
      "makes",
      "made",
      "making"
    ],
    "answer": 2,
    "explanation": "last summer 提示一般过去时，make 的过去式是 made。",
    "knowledge": "动词过去式。"
  },
  {
    "id": 747,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school on foot.",
    "options": [
      "take",
      "takes",
      "took",
      "taking"
    ],
    "answer": 1,
    "explanation": "often 提示一般现在时，he 是第三人称单数，take 的三单形式是 takes。",
    "knowledge": "动词第三人称单数形式。"
  },
  {
    "id": 748,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last summer.",
    "options": [
      "take",
      "takes",
      "took",
      "taking"
    ],
    "answer": 2,
    "explanation": "last summer 提示一般过去时，take 的过去式是 took。",
    "knowledge": "动词过去式。"
  },
  {
    "id": 749,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school on foot.",
    "options": [
      "come",
      "comes",
      "came",
      "coming"
    ],
    "answer": 1,
    "explanation": "often 提示一般现在时，he 是第三人称单数，come 的三单形式是 comes。",
    "knowledge": "动词第三人称单数形式。"
  },
  {
    "id": 750,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last summer.",
    "options": [
      "come",
      "comes",
      "came",
      "coming"
    ],
    "answer": 2,
    "explanation": "last summer 提示一般过去时，come 的过去式是 came。",
    "knowledge": "动词过去式。"
  },
  {
    "id": 751,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school on foot.",
    "options": [
      "run",
      "runs",
      "ran",
      "running"
    ],
    "answer": 1,
    "explanation": "often 提示一般现在时，he 是第三人称单数，run 的三单形式是 runs。",
    "knowledge": "动词第三人称单数形式。"
  },
  {
    "id": 752,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last summer.",
    "options": [
      "run",
      "runs",
      "ran",
      "running"
    ],
    "answer": 2,
    "explanation": "last summer 提示一般过去时，run 的过去式是 ran。",
    "knowledge": "动词过去式。"
  },
  {
    "id": 753,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school on foot.",
    "options": [
      "write",
      "writes",
      "wrote",
      "writing"
    ],
    "answer": 1,
    "explanation": "often 提示一般现在时，he 是第三人称单数，write 的三单形式是 writes。",
    "knowledge": "动词第三人称单数形式。"
  },
  {
    "id": 754,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last summer.",
    "options": [
      "write",
      "writes",
      "wrote",
      "writing"
    ],
    "answer": 2,
    "explanation": "last summer 提示一般过去时，write 的过去式是 wrote。",
    "knowledge": "动词过去式。"
  },
  {
    "id": 755,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school on foot.",
    "options": [
      "reads",
      "read",
      "reading",
      "readsing"
    ],
    "answer": 0,
    "explanation": "often 提示一般现在时，he 是第三人称单数，read 的三单形式是 reads。",
    "knowledge": "动词第三人称单数形式。"
  },
  {
    "id": 756,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last summer.",
    "options": [
      "read",
      "reads",
      "reading",
      "readed"
    ],
    "answer": 0,
    "explanation": "last summer 提示一般过去时，read 的过去式是 read。",
    "knowledge": "动词过去式。"
  },
  {
    "id": 757,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He often ______ to school on foot.",
    "options": [
      "eat",
      "eats",
      "ate",
      "eating"
    ],
    "answer": 1,
    "explanation": "often 提示一般现在时，he 是第三人称单数，eat 的三单形式是 eats。",
    "knowledge": "动词第三人称单数形式。"
  },
  {
    "id": 758,
    "topic": "动词",
    "subTopic": "形式",
    "source": "中考语法精选",
    "question": "He ______ to Beijing last summer.",
    "options": [
      "eat",
      "eats",
      "ate",
      "eating"
    ],
    "answer": 2,
    "explanation": "last summer 提示一般过去时，eat 的过去式是 ate。",
    "knowledge": "动词过去式。"
  },
  {
    "id": 759,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "You ______ play football in the street. It's dangerous.",
    "options": [
      "must",
      "can",
      "mustn't",
      "needn't"
    ],
    "answer": 2,
    "explanation": "在街上踢足球很危险，所以是\"禁止\"，用 mustn't。",
    "knowledge": "mustn't 表示禁止。"
  },
  {
    "id": 760,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "— Need I finish the work today? — No, you ______.",
    "options": [
      "needn't",
      "mustn't",
      "can't",
      "shouldn't"
    ],
    "answer": 0,
    "explanation": "Need 引导的一般疑问句，否定回答用 needn't。",
    "knowledge": "need 作为情态动词的用法。"
  },
  {
    "id": 761,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "Why not ______ a rest?",
    "options": [
      "have",
      "to have",
      "having",
      "has"
    ],
    "answer": 0,
    "explanation": "Why not + 动词原形，表示\"为什么不……？\"。",
    "knowledge": "Why not do sth. 固定句型。"
  },
  {
    "id": 762,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "It's time ______ home.",
    "options": [
      "go",
      "to go",
      "going",
      "went"
    ],
    "answer": 1,
    "explanation": "It's time to do sth. 意为\"到做某事的时间了\"。",
    "knowledge": "It's time to do sth. 句型。"
  },
  {
    "id": 763,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "He usually ______ (get) up at six.",
    "options": [
      "gets",
      "getss",
      "get",
      "（选项4）"
    ],
    "answer": 0,
    "explanation": "一般现在时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 764,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "She ______ (visit) her uncle tomorrow.",
    "options": [
      "will visit",
      "will visits",
      "would visit",
      "is going to visit"
    ],
    "answer": 0,
    "explanation": "一般将来时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 765,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "Look! The children ______ (play) football.",
    "options": [
      "are playing",
      "are playings",
      "play",
      "areplaying"
    ],
    "answer": 0,
    "explanation": "现在进行时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 766,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "I ______ (not see) him since last year.",
    "options": [
      "haven't seen",
      "haven't seens",
      "hasn't seen",
      "haven'tseen"
    ],
    "answer": 0,
    "explanation": "现在完成时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 767,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "They ______ (have) a meeting at 9 yesterday.",
    "options": [
      "were having",
      "were havings",
      "werehaving",
      "（选项4）"
    ],
    "answer": 0,
    "explanation": "过去进行时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 768,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "By the time I arrived, the film ______ (begin).",
    "options": [
      "had begun",
      "had beguns",
      "hadbegun",
      "（选项4）"
    ],
    "answer": 0,
    "explanation": "过去完成时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 769,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "He said he ______ (come) back soon.",
    "options": [
      "would come",
      "would comes",
      "wouldcome",
      "（选项4）"
    ],
    "answer": 0,
    "explanation": "过去将来时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 770,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "The bridge ______ (build) next year.",
    "options": [
      "will be built",
      "will be builts",
      "would be built",
      "is going to be built"
    ],
    "answer": 0,
    "explanation": "一般将来时被动的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 771,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He began to read when he was young.",
    "options": [
      "began",
      "begin",
      "begun",
      "beganed"
    ],
    "answer": 0,
    "explanation": "begin 的过去式是 began。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 772,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "begun",
      "begin",
      "began",
      "beganed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，begin 的过去分词是 begun。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 773,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He drank to read when he was young.",
    "options": [
      "drank",
      "drink",
      "drunk",
      "dranked"
    ],
    "answer": 0,
    "explanation": "drink 的过去式是 drank。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 774,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "drunk",
      "drink",
      "drank",
      "dranked"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，drink 的过去分词是 drunk。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 775,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He swam to read when he was young.",
    "options": [
      "swam",
      "swim",
      "swum",
      "swamed"
    ],
    "answer": 0,
    "explanation": "swim 的过去式是 swam。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 776,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "swum",
      "swim",
      "swam",
      "swamed"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，swim 的过去分词是 swum。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 777,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He sang to read when he was young.",
    "options": [
      "sang",
      "sing",
      "sung",
      "sanged"
    ],
    "answer": 0,
    "explanation": "sing 的过去式是 sang。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 778,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "sung",
      "sing",
      "sang",
      "sanged"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，sing 的过去分词是 sung。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 779,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He rang to read when he was young.",
    "options": [
      "rang",
      "ring",
      "rung",
      "ranged"
    ],
    "answer": 0,
    "explanation": "ring 的过去式是 rang。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 780,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "rung",
      "ring",
      "rang",
      "ranged"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，ring 的过去分词是 rung。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 781,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He sank to read when he was young.",
    "options": [
      "sank",
      "sink",
      "sunk",
      "sanked"
    ],
    "answer": 0,
    "explanation": "sink 的过去式是 sank。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 782,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "sunk",
      "sink",
      "sank",
      "sanked"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，sink 的过去分词是 sunk。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 783,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He shrank to read when he was young.",
    "options": [
      "shrank",
      "shrink",
      "shrunk",
      "shranked"
    ],
    "answer": 0,
    "explanation": "shrink 的过去式是 shrank。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 784,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "shrunk",
      "shrink",
      "shrank",
      "shranked"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，shrink 的过去分词是 shrunk。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 785,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He sprang to read when he was young.",
    "options": [
      "sprang",
      "spring",
      "sprung",
      "spranged"
    ],
    "answer": 0,
    "explanation": "spring 的过去式是 sprang。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 786,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "sprung",
      "spring",
      "sprang",
      "spranged"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，spring 的过去分词是 sprung。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 787,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He stank to read when he was young.",
    "options": [
      "stank",
      "stink",
      "stunk",
      "stanked"
    ],
    "answer": 0,
    "explanation": "stink 的过去式是 stank。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 788,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "stunk",
      "stink",
      "stank",
      "stanked"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，stink 的过去分词是 stunk。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 789,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He ran to read when he was young.",
    "options": [
      "ran",
      "run",
      "running",
      "runs"
    ],
    "answer": 0,
    "explanation": "run 的过去式是 ran。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 790,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "run",
      "ran",
      "runing",
      "runs"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，run 的过去分词是 run。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 791,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He came to read when he was young.",
    "options": [
      "came",
      "come",
      "coming",
      "comes"
    ],
    "answer": 0,
    "explanation": "come 的过去式是 came。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 792,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "come",
      "came",
      "comeing",
      "comes"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，come 的过去分词是 come。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 793,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "He became to read when he was young.",
    "options": [
      "became",
      "become",
      "becoming",
      "becomes"
    ],
    "answer": 0,
    "explanation": "become 的过去式是 became。",
    "knowledge": "不规则动词过去式。"
  },
  {
    "id": 794,
    "topic": "动词时态",
    "subTopic": "常用的不规则动词默写",
    "source": "中考语法精选",
    "question": "The movie has already ______.",
    "options": [
      "become",
      "became",
      "becomeing",
      "becomes"
    ],
    "answer": 0,
    "explanation": "现在完成时 have/has + 过去分词，become 的过去分词是 become。",
    "knowledge": "不规则动词过去分词。"
  },
  {
    "id": 795,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The room ______ every day.",
    "options": [
      "is cleaned",
      "was cleaned",
      "will be cleaned",
      "has been cleaned"
    ],
    "answer": 0,
    "explanation": "一般现在时被动：is cleaned。",
    "knowledge": "被动语态的构成。"
  },
  {
    "id": 796,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The letter ______ yesterday.",
    "options": [
      "was written",
      "is written",
      "will be written",
      "has been written"
    ],
    "answer": 0,
    "explanation": "一般过去时被动：was written。",
    "knowledge": "被动语态的构成。"
  },
  {
    "id": 797,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The work ______ tomorrow.",
    "options": [
      "will be finished",
      "will be finwashed",
      "will being finished",
      "would be finished"
    ],
    "answer": 0,
    "explanation": "一般将来时被动：will be finished。",
    "knowledge": "被动语态的构成。"
  },
  {
    "id": 798,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The car ______ now.",
    "options": [
      "is being repaired",
      "was being repaired",
      "is beinging repaired",
      "will be being repaired"
    ],
    "answer": 0,
    "explanation": "现在进行时被动：is being repaired。",
    "knowledge": "被动语态的构成。"
  },
  {
    "id": 799,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The book ______ by the end of last month.",
    "options": [
      "had been read",
      "had beingen read",
      "has been read",
      "was read"
    ],
    "answer": 0,
    "explanation": "过去完成时被动：had been read。",
    "knowledge": "被动语态的构成。"
  },
  {
    "id": 800,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The problem ______ by the teacher now.",
    "options": [
      "is being discussed",
      "was being discussed",
      "is beinging discussed",
      "will be being discussed"
    ],
    "answer": 0,
    "explanation": "现在进行时被动：is being discussed。",
    "knowledge": "被动语态的构成。"
  },
  {
    "id": 801,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The bridge ______ in 2020.",
    "options": [
      "was built",
      "is built",
      "will be built",
      "has been built"
    ],
    "answer": 0,
    "explanation": "一般过去时被动：was built。",
    "knowledge": "被动语态的构成。"
  },
  {
    "id": 802,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The meeting ______ next Monday.",
    "options": [
      "will be held",
      "will being held",
      "would be held",
      "is held"
    ],
    "answer": 0,
    "explanation": "一般将来时被动：will be held。",
    "knowledge": "被动语态的构成。"
  },
  {
    "id": 803,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "He is ______ honest man. Everyone trusts him.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 1,
    "explanation": "honest 以元音音素开头，用 an。",
    "knowledge": "a/an 的区别。"
  },
  {
    "id": 804,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "This is ______ useful book for middle school students.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 0,
    "explanation": "useful 以辅音音素开头，用 a。",
    "knowledge": "a/an 看发音。"
  },
  {
    "id": 805,
    "topic": "冠词",
    "subTopic": "定冠词",
    "source": "中考语法精选",
    "question": "______ moon goes around the earth.",
    "options": [
      "A",
      "An",
      "The",
      "/"
    ],
    "answer": 2,
    "explanation": "世界上独一无二的事物前用 the。",
    "knowledge": "the 用于独一无二的事物。"
  },
  {
    "id": 806,
    "topic": "冠词",
    "subTopic": "定冠词",
    "source": "中考语法精选",
    "question": "______ rich should help the poor.",
    "options": [
      "A",
      "An",
      "The",
      "/"
    ],
    "answer": 2,
    "explanation": "the + 形容词表示一类人。",
    "knowledge": "the + 形容词的用法。"
  },
  {
    "id": 807,
    "topic": "冠词",
    "subTopic": "零冠词",
    "source": "中考语法精选",
    "question": "______ spring comes after winter.",
    "options": [
      "A",
      "An",
      "The",
      "/"
    ],
    "answer": 3,
    "explanation": "季节名称前一般不加冠词。",
    "knowledge": "季节前通常零冠词。"
  },
  {
    "id": 808,
    "topic": "冠词",
    "subTopic": "零冠词",
    "source": "中考语法精选",
    "question": "He became ______ captain of the team.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 2,
    "explanation": "表示职位的名词作表语、补语或同位语时，前面通常不加冠词。但此处 captain 被 of the team 限定，用 the 也可以。",
    "knowledge": "冠词在职位前的用法。"
  },
  {
    "id": 809,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "The book on the desk is not ______. It's ______.",
    "options": [
      "my; her",
      "mine; her",
      "my; hers",
      "mine; hers"
    ],
    "answer": 3,
    "explanation": "两个空后都没有名词，要用名词性物主代词 mine 和 hers。",
    "knowledge": "名词性物主代词单独使用。"
  },
  {
    "id": 810,
    "topic": "代词",
    "subTopic": "反身代词",
    "source": "中考语法精选",
    "question": "She taught ______ English when she was young.",
    "options": [
      "her",
      "herself",
      "she",
      "hers"
    ],
    "answer": 1,
    "explanation": "teach oneself 意为\"自学\"，she 的反身代词是 herself。",
    "knowledge": "反身代词。"
  },
  {
    "id": 811,
    "topic": "代词",
    "subTopic": "反身代词",
    "source": "中考语法精选",
    "question": "The children enjoyed ______ at the party.",
    "options": [
      "them",
      "themselves",
      "their",
      "theirs"
    ],
    "answer": 1,
    "explanation": "enjoy oneself 意为\"玩得开心\"，children 的反身代词是 themselves。",
    "knowledge": "enjoy oneself 固定搭配。"
  },
  {
    "id": 812,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "There is ______ water left in the bottle. We need to buy some.",
    "options": [
      "few",
      "a few",
      "little",
      "a little"
    ],
    "answer": 2,
    "explanation": "water 是不可数名词，由\"需要买一些\"可知几乎没有水了，little 表示\"几乎没有\"。",
    "knowledge": "little 与 a little 的区别。"
  },
  {
    "id": 813,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "______ of the two answers is correct. They are both wrong.",
    "options": [
      "Both",
      "Neither",
      "All",
      "None"
    ],
    "answer": 1,
    "explanation": "两个答案都不对，表示\"两者都不\"用 neither。",
    "knowledge": "neither 表示两者都不。"
  },
  {
    "id": 814,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "______ is possible if you put your heart into it.",
    "options": [
      "Something",
      "Anything",
      "Nothing",
      "Everything"
    ],
    "answer": 1,
    "explanation": "anything 用于肯定句表示\"任何事\"，\"世上无难事，只怕有心人\"。",
    "knowledge": "anything 用于肯定句。"
  },
  {
    "id": 815,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "There are ______ days in a week.",
    "options": [
      "seven",
      "seventh",
      "the seven",
      "the seventh"
    ],
    "answer": 0,
    "explanation": "表示数量用基数词，一周有七天用 seven。",
    "knowledge": "基数词表示数量。"
  },
  {
    "id": 816,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "Sunday is the ______ day of a week.",
    "options": [
      "one",
      "first",
      "the one",
      "the first"
    ],
    "answer": 1,
    "explanation": "表示顺序用序数词，Sunday 是一周的第一天。",
    "knowledge": "序数词表示顺序。"
  },
  {
    "id": 817,
    "topic": "数词",
    "subTopic": "分数词",
    "source": "中考语法精选",
    "question": "Two thirds of the students ______ girls.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 1,
    "explanation": "分数修饰可数名词复数时，谓语动词用复数。",
    "knowledge": "分数作主语的主谓一致。"
  },
  {
    "id": 818,
    "topic": "数词",
    "subTopic": "时间与日期",
    "source": "中考语法精选",
    "question": "We usually have lunch at ______.",
    "options": [
      "twelve o'clock",
      "twelve clock",
      "the twelve",
      "twelve a clock"
    ],
    "answer": 0,
    "explanation": "整点用\"基数词 + o'clock\"表示。",
    "knowledge": "整点表达法。"
  },
  {
    "id": 819,
    "topic": "数词",
    "subTopic": "百分数",
    "source": "中考语法精选",
    "question": "______ of the students in our class are girls.",
    "options": [
      "Fifty percent",
      "Fifty percents",
      "Fifty percentage",
      "Fifty percentages"
    ],
    "answer": 0,
    "explanation": "percent 没有复数形式。",
    "knowledge": "百分数的表达。"
  },
  {
    "id": 820,
    "topic": "形容词",
    "subTopic": "比较级和最高级的用法规则",
    "source": "中考语法精选",
    "question": "This problem is ______ than that one.",
    "options": [
      "easy",
      "easier",
      "easiest",
      "more easier"
    ],
    "answer": 1,
    "explanation": "than 提示用比较级，easy 的比较级是 easier。",
    "knowledge": "形容词比较级。"
  },
  {
    "id": 821,
    "topic": "形容词",
    "subTopic": "比较级和最高级的用法规则",
    "source": "中考语法精选",
    "question": "He is ______ careful than his brother.",
    "options": [
      "more",
      "most",
      "the most",
      "very"
    ],
    "answer": 0,
    "explanation": "careful 是多音节形容词，比较级用 more careful。",
    "knowledge": "多音节形容词比较级。"
  },
  {
    "id": 822,
    "topic": "形容词",
    "subTopic": "比较级和最高级的用法规则",
    "source": "中考语法精选",
    "question": "The Changjiang River is ______ river in China.",
    "options": [
      "long",
      "longer",
      "the longest",
      "longest"
    ],
    "answer": 2,
    "explanation": "in China 表示范围，用最高级，最高级前加 the。",
    "knowledge": "形容词最高级。"
  },
  {
    "id": 823,
    "topic": "形容词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "Tom is ______ as his brother.",
    "options": [
      "so tall",
      "as tall",
      "taller",
      "the tallest"
    ],
    "answer": 1,
    "explanation": "as...as 中间用原级，表示\"和……一样\"。",
    "knowledge": "as...as 结构。"
  },
  {
    "id": 824,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "______ Tom ______ Jerry likes music. They often listen to songs.",
    "options": [
      "Both; and",
      "Not only; but also",
      "Either; or",
      "Neither; nor"
    ],
    "answer": 0,
    "explanation": "由 They often listen to songs 可知两人都喜欢，both...and... 表示\"两者都\"。",
    "knowledge": "both...and... 的用法。"
  },
  {
    "id": 825,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "You can ______ stay at home ______ go out with me.",
    "options": [
      "both; and",
      "not only; but also",
      "either; or",
      "neither; nor"
    ],
    "answer": 2,
    "explanation": "either...or... 表示\"要么……要么……\"，供选择。",
    "knowledge": "either...or... 的用法。"
  },
  {
    "id": 826,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "I won't go to the party ______ I am invited.",
    "options": [
      "if",
      "unless",
      "because",
      "although"
    ],
    "answer": 1,
    "explanation": "unless 意为\"除非\"，相当于 if not，\"除非被邀请，否则我不去\"。",
    "knowledge": "unless 引导条件状语从句。"
  },
  {
    "id": 827,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "______ you work hard, you will pass the exam.",
    "options": [
      "If",
      "Unless",
      "Although",
      "Because"
    ],
    "answer": 0,
    "explanation": "if 表示\"如果\"，引导条件状语从句。",
    "knowledge": "if 的用法。"
  },
  {
    "id": 828,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually have PE classes ______ Monday afternoon.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 1,
    "explanation": "具体某天的下午用 on。",
    "knowledge": "时间介词 on。"
  },
  {
    "id": 829,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "My grandmother was born ______ 1950.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 2,
    "explanation": "年份前用 in。",
    "knowledge": "时间介词 in。"
  },
  {
    "id": 830,
    "topic": "介词",
    "subTopic": "地点/方位(高频)",
    "source": "中考语法精选",
    "question": "The bank is ______ the supermarket and the hospital.",
    "options": [
      "between",
      "among",
      "beside",
      "behind"
    ],
    "answer": 0,
    "explanation": "between...and... 表示\"在……和……之间\"。",
    "knowledge": "between 的用法。"
  },
  {
    "id": 831,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "I'm sorry ______ being late.",
    "options": [
      "for",
      "of",
      "to",
      "with"
    ],
    "answer": 0,
    "explanation": "be sorry for doing sth. 意为\"为做某事感到抱歉\"。",
    "knowledge": "be sorry for 固定搭配。"
  },
  {
    "id": 832,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Are you ready ______ the exam?",
    "options": [
      "for",
      "of",
      "to",
      "with"
    ],
    "answer": 0,
    "explanation": "be ready for 意为\"为……做好准备\"。",
    "knowledge": "be ready for 固定搭配。"
  },
  {
    "id": 833,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Don't be angry ______ me. I didn't mean it.",
    "options": [
      "for",
      "of",
      "to",
      "with"
    ],
    "answer": 3,
    "explanation": "be angry with sb. 意为\"生某人的气\"。",
    "knowledge": "be angry with 固定搭配。"
  },
  {
    "id": 834,
    "topic": "句型",
    "subTopic": "There be",
    "source": "中考语法精选",
    "question": "There ______ any milk in the fridge.",
    "options": [
      "isn't",
      "aren't",
      "hasn't",
      "haven't"
    ],
    "answer": 0,
    "explanation": "milk 是不可数名词，any 常用于否定句，所以用 isn't。",
    "knowledge": "there be 句型的否定。"
  },
  {
    "id": 835,
    "topic": "句型",
    "subTopic": "There be",
    "source": "中考语法精选",
    "question": "There ______ a football match next Sunday.",
    "options": [
      "will be",
      "will have",
      "is going to have",
      "has"
    ],
    "answer": 0,
    "explanation": "there be 句型的一般将来时用 there will be。",
    "knowledge": "there be 的将来时。"
  },
  {
    "id": 836,
    "topic": "句型",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The flowers should ______ every day.",
    "options": [
      "water",
      "be watered",
      "watered",
      "watering"
    ],
    "answer": 1,
    "explanation": "flowers 与 water 是被动关系，should 后接 be + 过去分词。",
    "knowledge": "含情态动词的被动语态。"
  },
  {
    "id": 837,
    "topic": "句型",
    "subTopic": "五大基本句型",
    "source": "中考语法精选",
    "question": "My father bought me a new bike. The underlined part is ______.",
    "options": [
      "主语",
      "谓语",
      "间接宾语",
      "直接宾语"
    ],
    "answer": 2,
    "explanation": "bought me a new bike 中，me 是间接宾语，a new bike 是直接宾语。",
    "knowledge": "双宾语结构。"
  },
  {
    "id": 838,
    "topic": "句型",
    "subTopic": "五大基本句型",
    "source": "中考语法精选",
    "question": "The news made everyone excited. The underlined part is ______.",
    "options": [
      "主语",
      "谓语",
      "宾语",
      "宾语补足语"
    ],
    "answer": 3,
    "explanation": "excited 补充说明 everyone 的状态，作宾语补足语。",
    "knowledge": "宾语补足语。"
  },
  {
    "id": 839,
    "topic": "简单句",
    "subTopic": "肯定句/否定句/一般疑问句",
    "source": "中考语法精选",
    "question": "She has finished her homework. (改为否定句)",
    "options": [
      "She hasn't finished her homework.",
      "She doesn't finish her homework.",
      "She didn't finish her homework.",
      "She isn't finish her homework."
    ],
    "answer": 0,
    "explanation": "现在完成时的否定句在 have/has 后加 not。",
    "knowledge": "现在完成时否定句。"
  },
  {
    "id": 840,
    "topic": "简单句",
    "subTopic": "特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ is your father? — He is a doctor.",
    "options": [
      "What",
      "Who",
      "How",
      "Where"
    ],
    "answer": 0,
    "explanation": "由答语 a doctor 可知询问职业，用 what。",
    "knowledge": "what 询问职业。"
  },
  {
    "id": 841,
    "topic": "简单句",
    "subTopic": "特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ is your schoolbag? — It's 20 yuan.",
    "options": [
      "How many",
      "How much",
      "What",
      "How"
    ],
    "answer": 1,
    "explanation": "由答语 20 yuan 可知询问价格，用 how much。",
    "knowledge": "how much 询问价格。"
  },
  {
    "id": 842,
    "topic": "简单句",
    "subTopic": "感叹句",
    "source": "中考语法精选",
    "question": "______ clever the boy is!",
    "options": [
      "What",
      "What a",
      "How",
      "How a"
    ],
    "answer": 2,
    "explanation": "clever 是形容词，用 How + 形容词。",
    "knowledge": "how 引导的感叹句。"
  },
  {
    "id": 843,
    "topic": "简单句",
    "subTopic": "祈使句",
    "source": "中考语法精选",
    "question": "______ open the window. It's too hot.",
    "options": [
      "Please",
      "Please to",
      "Please don't",
      "Not"
    ],
    "answer": 0,
    "explanation": "祈使句以动词原形开头，please 可置于句首。",
    "knowledge": "祈使句结构。"
  },
  {
    "id": 844,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "I wonder ______ he will arrive on time.",
    "options": [
      "that",
      "if",
      "what",
      "where"
    ],
    "answer": 1,
    "explanation": "wonder 表示疑问，if 表示\"是否\"，符合句意。",
    "knowledge": "if 引导宾语从句。"
  },
  {
    "id": 845,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Could you tell me ______ the nearest hospital is?",
    "options": [
      "where",
      "what",
      "how",
      "which"
    ],
    "answer": 0,
    "explanation": "询问最近的医院在哪里，用 where 引导宾语从句。",
    "knowledge": "where 引导宾语从句。"
  },
  {
    "id": 846,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "The man ______ you are looking for is in the office.",
    "options": [
      "who",
      "which",
      "whom",
      "whose"
    ],
    "answer": 2,
    "explanation": "先行词 the man 在从句中作 for 的宾语，指人，用 whom（也可用 who/that）。",
    "knowledge": "whom 引导定语从句作宾语。"
  },
  {
    "id": 847,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "This is the house ______ Lu Xun once lived.",
    "options": [
      "which",
      "that",
      "where",
      "when"
    ],
    "answer": 2,
    "explanation": "先行词 the house 在从句中作地点状语，用 where。",
    "knowledge": "where 引导定语从句。"
  },
  {
    "id": 848,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "I will go fishing if it ______ tomorrow.",
    "options": [
      "won't rain",
      "doesn't rain",
      "not rain",
      "isn't rain"
    ],
    "answer": 1,
    "explanation": "if 条件句用一般现在时，主句用一般将来时。",
    "knowledge": "主将从现。"
  },
  {
    "id": 849,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "______ she was tired, she kept on working.",
    "options": [
      "If",
      "Because",
      "Although",
      "So"
    ],
    "answer": 2,
    "explanation": "although 引导让步状语从句，\"虽然她很累，但她继续工作\"。",
    "knowledge": "although 的用法。"
  },
  {
    "id": 850,
    "topic": "动词语态",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The bridge ______ by the workers last year.",
    "options": [
      "is built",
      "was built",
      "will be built",
      "has been built"
    ],
    "answer": 1,
    "explanation": "last year 提示用一般过去时，bridge 与 build 是被动关系。",
    "knowledge": "一般过去时被动语态。"
  },
  {
    "id": 851,
    "topic": "动词语态",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "A new hospital ______ in our city next year.",
    "options": [
      "is built",
      "was built",
      "will be built",
      "has been built"
    ],
    "answer": 2,
    "explanation": "next year 提示用一般将来时，hospital 与 build 是被动关系。",
    "knowledge": "一般将来时被动语态。"
  },
  {
    "id": 852,
    "topic": "动词语态",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The problem ______ by the students now.",
    "options": [
      "is discussed",
      "is being discussed",
      "was discussed",
      "has been discussed"
    ],
    "answer": 1,
    "explanation": "now 提示用现在进行时，problem 与 discuss 是被动关系。",
    "knowledge": "现在进行时被动语态。"
  },
  {
    "id": 853,
    "topic": "动词语态",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The book ______ by many people already.",
    "options": [
      "is read",
      "was read",
      "has been read",
      "had been read"
    ],
    "answer": 2,
    "explanation": "already 常与现在完成时连用，book 与 read 是被动关系。",
    "knowledge": "现在完成时被动语态。"
  },
  {
    "id": 854,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "These books ______ to the library every week.",
    "options": [
      "return",
      "are returned",
      "returned",
      "were returned"
    ],
    "answer": 1,
    "explanation": "every week 提示用一般现在时，books 与 return 是被动关系。",
    "knowledge": "一般现在时被动语态。"
  },
  {
    "id": 855,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The children should ______ by their parents.",
    "options": [
      "look after",
      "be looked after",
      "looked after",
      "looking after"
    ],
    "answer": 1,
    "explanation": "children 与 look after 是被动关系，should 后接 be + 过去分词。",
    "knowledge": "含情态动词的被动语态。"
  },
  {
    "id": 856,
    "topic": "冠词",
    "subTopic": "不定冠词(a,an)",
    "source": "中考语法精选",
    "question": "______ European visited our school yesterday.",
    "options": [
      "A",
      "An",
      "The",
      "/"
    ],
    "answer": 0,
    "explanation": "European 以辅音音素开头，用 a。",
    "knowledge": "a/an 看发音。"
  },
  {
    "id": 857,
    "topic": "冠词",
    "subTopic": "定冠词",
    "source": "中考语法精选",
    "question": "______ old should be taken good care of.",
    "options": [
      "A",
      "An",
      "The",
      "/"
    ],
    "answer": 2,
    "explanation": "the + 形容词表示一类人，the old 表示\"老年人\"。",
    "knowledge": "the + 形容词。"
  },
  {
    "id": 858,
    "topic": "冠词",
    "subTopic": "零冠词",
    "source": "中考语法精选",
    "question": "He was elected ______ monitor of our class.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 3,
    "explanation": "表示职位的名词作补语时，前面通常不加冠词。",
    "knowledge": "职位前零冠词。"
  },
  {
    "id": 859,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please give the book to ______.",
    "options": [
      "he",
      "him",
      "his",
      "himself"
    ],
    "answer": 1,
    "explanation": "to 是介词，后接宾格 him。",
    "knowledge": "介词后接宾格。"
  },
  {
    "id": 860,
    "topic": "代词",
    "subTopic": "指示代词",
    "source": "中考语法精选",
    "question": "The population of China is larger than ______ of Japan.",
    "options": [
      "it",
      "that",
      "this",
      "those"
    ],
    "answer": 1,
    "explanation": "that 指代前面提到的不可数名词 population。",
    "knowledge": "that 指代不可数名词。"
  },
  {
    "id": 861,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "______ of the twins has been to Beijing.",
    "options": [
      "Both",
      "Neither",
      "All",
      "None"
    ],
    "answer": 1,
    "explanation": "twins 是两者，由 has 可知用 neither 表示\"两者都不\"。",
    "knowledge": "neither 表示两者都不。"
  },
  {
    "id": 862,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "______ wants to go to the concert can go with me.",
    "options": [
      "Anyone",
      "Someone",
      "Who",
      "Whoever"
    ],
    "answer": 3,
    "explanation": "whoever 意为\"无论谁\"，引导名词性从句。",
    "knowledge": "whoever 的用法。"
  },
  {
    "id": 863,
    "topic": "数词",
    "subTopic": "基数词/序数词",
    "source": "中考语法精选",
    "question": "March 8 is ______ Day.",
    "options": [
      "Woman",
      "Women",
      "Women's",
      "Womens'"
    ],
    "answer": 2,
    "explanation": "Women's Day 是\"妇女节\"，复数名词的所有格。",
    "knowledge": "节日表达中的数词与所有格。"
  },
  {
    "id": 864,
    "topic": "数词",
    "subTopic": "分数词",
    "source": "中考语法精选",
    "question": "One fourth of the apples ______ bad.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 1,
    "explanation": "分数修饰可数名词复数 apples，谓语动词用复数。",
    "knowledge": "分数作主语的主谓一致。"
  },
  {
    "id": 865,
    "topic": "数词",
    "subTopic": "加减乘除",
    "source": "中考语法精选",
    "question": "Five divided by five ______ one.",
    "options": [
      "is",
      "are",
      "be",
      "am"
    ],
    "answer": 0,
    "explanation": "除法的结果作主语，谓语动词用单数。",
    "knowledge": "数词运算的主谓一致。"
  },
  {
    "id": 866,
    "topic": "形容词",
    "subTopic": "比较级和最高级的用法规则",
    "source": "中考语法精选",
    "question": "The ______ you work, the ______ progress you will make.",
    "options": [
      "hard; more",
      "harder; more",
      "harder; most",
      "hardest; most"
    ],
    "answer": 1,
    "explanation": "\"the + 比较级..., the + 比较级...\"表示\"越……，越……\"。",
    "knowledge": "the + 比较级, the + 比较级。"
  },
  {
    "id": 867,
    "topic": "形容词",
    "subTopic": "原级/比较级/最高级的用法规则",
    "source": "中考语法精选",
    "question": "This room is not ______ that one.",
    "options": [
      "as big as",
      "as bigger as",
      "so big than",
      "bigger as"
    ],
    "answer": 0,
    "explanation": "not as + 原级 + as 表示\"不如……\"。",
    "knowledge": "not as...as 结构。"
  },
  {
    "id": 868,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "He finished the work even ______ than before.",
    "options": [
      "quick",
      "quickly",
      "more quickly",
      "most quickly"
    ],
    "answer": 2,
    "explanation": "than 提示用比较级，修饰动词 finished 用副词 more quickly。",
    "knowledge": "副词比较级。"
  },
  {
    "id": 869,
    "topic": "副词",
    "subTopic": "副词的位置",
    "source": "中考语法精选",
    "question": "She did ______ in the competition.",
    "options": [
      "good",
      "well",
      "better",
      "best"
    ],
    "answer": 1,
    "explanation": "修饰动词 did 用副词 well。",
    "knowledge": "副词修饰动词。"
  },
  {
    "id": 870,
    "topic": "连词",
    "subTopic": "并列连词",
    "source": "中考语法精选",
    "question": "He can speak English, ______ he can't speak French.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 1,
    "explanation": "前后句意转折，用 but。",
    "knowledge": "but 表示转折。"
  },
  {
    "id": 871,
    "topic": "连词",
    "subTopic": "从属连词",
    "source": "中考语法精选",
    "question": "I was about to leave ______ the telephone rang.",
    "options": [
      "when",
      "while",
      "as",
      "since"
    ],
    "answer": 0,
    "explanation": "be about to do...when... 表示\"正要做……这时……\"。",
    "knowledge": "when 的特殊用法。"
  },
  {
    "id": 872,
    "topic": "介词",
    "subTopic": "时间(高频)",
    "source": "中考语法精选",
    "question": "We usually watch TV ______ the evening.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 2,
    "explanation": "泛指的晚上用 in the evening。",
    "knowledge": "时间介词 in。"
  },
  {
    "id": 873,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "The teacher is pleased ______ my progress.",
    "options": [
      "for",
      "of",
      "to",
      "with"
    ],
    "answer": 3,
    "explanation": "be pleased with 意为\"对……感到满意\"。",
    "knowledge": "be pleased with 固定搭配。"
  },
  {
    "id": 874,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "We should be strict ______ ourselves.",
    "options": [
      "for",
      "of",
      "to",
      "with"
    ],
    "answer": 3,
    "explanation": "be strict with sb. 意为\"对某人严格\"。",
    "knowledge": "be strict with 固定搭配。"
  },
  {
    "id": 875,
    "topic": "句型",
    "subTopic": "There be",
    "source": "中考语法精选",
    "question": "There ______ two meetings this afternoon.",
    "options": [
      "will be",
      "will have",
      "are going to have",
      "is going to be"
    ],
    "answer": 0,
    "explanation": "this afternoon 提示将来，two meetings 是复数，但 there will be 不受数影响。",
    "knowledge": "there be 的将来时。"
  },
  {
    "id": 876,
    "topic": "句型",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The story ______ by many children.",
    "options": [
      "likes",
      "is liked",
      "liked",
      "liking"
    ],
    "answer": 1,
    "explanation": "story 与 like 是被动关系，用一般现在时被动语态。",
    "knowledge": "一般现在时被动语态。"
  },
  {
    "id": 877,
    "topic": "简单句",
    "subTopic": "特殊疑问句",
    "source": "中考语法精选",
    "question": "— ______ do you like science? — Because it's interesting.",
    "options": [
      "What",
      "Why",
      "How",
      "When"
    ],
    "answer": 1,
    "explanation": "由答语 Because 可知询问原因，用 why。",
    "knowledge": "why 询问原因。"
  },
  {
    "id": 878,
    "topic": "简单句",
    "subTopic": "感叹句",
    "source": "中考语法精选",
    "question": "______ good news it is!",
    "options": [
      "What",
      "What a",
      "How",
      "How a"
    ],
    "answer": 0,
    "explanation": "news 是不可数名词，用 What + 形容词 + 不可数名词。",
    "knowledge": "what 修饰不可数名词的感叹句。"
  },
  {
    "id": 879,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "I don't know ______ they have finished the work.",
    "options": [
      "that",
      "if",
      "what",
      "how"
    ],
    "answer": 1,
    "explanation": "if 表示\"是否\"，引导宾语从句。",
    "knowledge": "if 引导宾语从句表是否。"
  },
  {
    "id": 880,
    "topic": "复合句",
    "subTopic": "定语从句",
    "source": "中考语法精选",
    "question": "This is the most interesting book ______ I have ever read.",
    "options": [
      "which",
      "that",
      "what",
      "who"
    ],
    "answer": 1,
    "explanation": "先行词被最高级 the most interesting 修饰，关系代词通常用 that。",
    "knowledge": "that 用于最高级后。"
  },
  {
    "id": 881,
    "topic": "复合句",
    "subTopic": "状语从句",
    "source": "中考语法精选",
    "question": "Take an umbrella with you ______ it rains.",
    "options": [
      "if",
      "unless",
      "because",
      "although"
    ],
    "answer": 0,
    "explanation": "if 表示\"如果\"，\"如果下雨，带上伞\"。",
    "knowledge": "if 引导条件状语从句。"
  },
  {
    "id": 882,
    "topic": "动词",
    "subTopic": "系动词",
    "source": "中考语法精选",
    "question": "The story ______ interesting.",
    "options": [
      "sounds",
      "listens",
      "hears",
      "looks"
    ],
    "answer": 0,
    "explanation": "sound 是感官系动词，意为\"听起来\"。",
    "knowledge": "sound 作系动词。"
  },
  {
    "id": 883,
    "topic": "动词",
    "subTopic": "情态动词",
    "source": "中考语法精选",
    "question": "______ you swim across the river?",
    "options": [
      "Can",
      "Must",
      "Need",
      "Should"
    ],
    "answer": 0,
    "explanation": "can 表示能力，\"你能游过这条河吗？\"。",
    "knowledge": "can 表示能力。"
  },
  {
    "id": 884,
    "topic": "动词",
    "subTopic": "非谓语动词",
    "source": "中考语法精选",
    "question": "The teacher asked us ______ quiet in class.",
    "options": [
      "be",
      "to be",
      "being",
      "been"
    ],
    "answer": 1,
    "explanation": "ask sb. to do sth. 意为\"要求某人做某事\"。",
    "knowledge": "ask sb. to do sth."
  },
  {
    "id": 885,
    "topic": "动词时态",
    "subTopic": "一般现在时",
    "source": "中考语法精选",
    "question": "The plane ______ at 9:00 every day.",
    "options": [
      "leave",
      "leaves",
      "is leaving",
      "left"
    ],
    "answer": 1,
    "explanation": "every day 提示一般现在时，plane 是第三人称单数。",
    "knowledge": "一般现在时表示时刻表。"
  },
  {
    "id": 886,
    "topic": "动词时态",
    "subTopic": "现在完成时",
    "source": "中考语法精选",
    "question": "How long have you ______ this book?",
    "options": [
      "bought",
      "borrowed",
      "had",
      "lent"
    ],
    "answer": 2,
    "explanation": "how long 与延续性动词连用，have 表示\"拥有\"，是延续性动词。",
    "knowledge": "现在完成时与延续性动词。"
  },
  {
    "id": 887,
    "topic": "动词时态",
    "subTopic": "过去完成时",
    "source": "中考语法精选",
    "question": "When I got to the cinema, the film ______ for ten minutes.",
    "options": [
      "has begun",
      "had begun",
      "has been on",
      "had been on"
    ],
    "answer": 3,
    "explanation": "for ten minutes 与延续性动词连用，got 是过去时，电影开始发生在之前，用过去完成时。",
    "knowledge": "过去完成时与延续性动词。"
  },
  {
    "id": 888,
    "topic": "动词语态",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The book ______ into many languages.",
    "options": [
      "translates",
      "is translated",
      "translated",
      "has translated"
    ],
    "answer": 1,
    "explanation": "book 与 translate 是被动关系，表示客观事实用一般现在时。",
    "knowledge": "一般现在时被动语态。"
  },
  {
    "id": 889,
    "topic": "动词语态",
    "subTopic": "被动语态",
    "source": "中考语法精选",
    "question": "The house ______ when I passed by.",
    "options": [
      "was built",
      "was being built",
      "is built",
      "built"
    ],
    "answer": 1,
    "explanation": "when I passed by 提示过去某一时刻正在进行的动作，house 与 build 是被动关系。",
    "knowledge": "过去进行时被动语态。"
  },
  {
    "id": 890,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "— Where is Tom? — He ______ to the library.",
    "options": [
      "goes",
      "has gone",
      "has been",
      "went"
    ],
    "answer": 1,
    "explanation": "has gone to 表示\"去了某地（还未回来）\"。",
    "knowledge": "have/has gone to 与 have/has been to 的区别。"
  },
  {
    "id": 891,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "— Have you ever been to Shanghai? — Yes, I ______ there last summer.",
    "options": [
      "went",
      "have gone",
      "have been",
      "go"
    ],
    "answer": 0,
    "explanation": "last summer 提示用一般过去时。",
    "knowledge": "现在完成时与一般过去时的区别。"
  },
  {
    "id": 892,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "Could you tell me ______?",
    "options": [
      "how can I get to the station",
      "how I can get to the station",
      "where is the station",
      "where the station is"
    ],
    "answer": 1,
    "explanation": "宾语从句用陈述语序。",
    "knowledge": "宾语从句语序。"
  },
  {
    "id": 893,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "We are all looking forward ______ your good news.",
    "options": [
      "to",
      "for",
      "at",
      "with"
    ],
    "answer": 0,
    "explanation": "look forward to 意为\"期待\"，to 是介词。",
    "knowledge": "look forward to 固定搭配。"
  },
  {
    "id": 894,
    "topic": "代词",
    "subTopic": "不定代词",
    "source": "中考语法精选",
    "question": "There is ______ with my computer. It doesn't work.",
    "options": [
      "something wrong",
      "wrong something",
      "anything wrong",
      "wrong anything"
    ],
    "answer": 0,
    "explanation": "肯定句中用 something，形容词 wrong 后置。",
    "knowledge": "复合不定代词 + 形容词。"
  },
  {
    "id": 895,
    "topic": "形容词",
    "subTopic": "比较级和最高级的用法规则",
    "source": "中考语法精选",
    "question": "The more you read, the ______ you will know.",
    "options": [
      "much",
      "more",
      "most",
      "many"
    ],
    "answer": 1,
    "explanation": "\"the + 比较级..., the + 比较级...\"结构。",
    "knowledge": "the + 比较级, the + 比较级。"
  },
  {
    "id": 896,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "teeth",
      "tooth",
      "tooths",
      "toothes"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，tooth 的复数形式是 teeth。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 897,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "teeth",
      "tooth",
      "tooths",
      "toothes"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，tooth 的复数形式是 teeth。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 898,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "feet",
      "foot",
      "foots",
      "footes"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，foot 的复数形式是 feet。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 899,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "feet",
      "foot",
      "foots",
      "footes"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，foot 的复数形式是 feet。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 900,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "men",
      "man",
      "mans",
      "manes"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，man 的复数形式是 men。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 901,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "men",
      "man",
      "mans",
      "manes"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，man 的复数形式是 men。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 902,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "women",
      "woman",
      "womans",
      "womanes"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，woman 的复数形式是 women。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 903,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "women",
      "woman",
      "womans",
      "womanes"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，woman 的复数形式是 women。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 904,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "children",
      "child",
      "childs",
      "childes"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，child 的复数形式是 children。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 905,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "children",
      "child",
      "childs",
      "childes"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，child 的复数形式是 children。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 906,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "sheep",
      "sheeps",
      "sheepes",
      "sheep's"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，sheep 的复数形式是 sheep。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 907,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "sheep",
      "sheeps",
      "sheepes",
      "sheep's"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，sheep 的复数形式是 sheep。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 908,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "deer",
      "deers",
      "deeres",
      "deer's"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，deer 的复数形式是 deer。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 909,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "deer",
      "deers",
      "deeres",
      "deer's"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，deer 的复数形式是 deer。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 910,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "fish",
      "fishs",
      "fishes",
      "fish's"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，fish 的复数形式是 fish。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 911,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "fish",
      "fishs",
      "fishes",
      "fish's"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，fish 的复数形式是 fish。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 912,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "Chinese",
      "Chineses",
      "Chinesees",
      "Chinese's"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，Chinese 的复数形式是 Chinese。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 913,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "Chinese",
      "Chineses",
      "Chinesees",
      "Chinese's"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，Chinese 的复数形式是 Chinese。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 914,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "Japanese",
      "Japaneses",
      "Japanesees",
      "Japanese's"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，Japanese 的复数形式是 Japanese。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 915,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "Japanese",
      "Japaneses",
      "Japanesees",
      "Japanese's"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，Japanese 的复数形式是 Japanese。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 916,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "Swiss",
      "Swisss",
      "Swisses",
      "Swiss's"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，Swiss 的复数形式是 Swiss。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 917,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "Swiss",
      "Swisss",
      "Swisses",
      "Swiss's"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，Swiss 的复数形式是 Swiss。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 918,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "people",
      "peoples",
      "peoplees",
      "people's"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，people 的复数形式是 people。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 919,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "people",
      "peoples",
      "peoplees",
      "people's"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，people 的复数形式是 people。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 920,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "police",
      "polices",
      "policees",
      "police's"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，police 的复数形式是 police。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 921,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "police",
      "polices",
      "policees",
      "police's"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，police 的复数形式是 police。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 922,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "How many ______ are there in the picture?",
    "options": [
      "cattle",
      "cattles",
      "cattlees",
      "cattle's"
    ],
    "answer": 0,
    "explanation": "how many 后接可数名词复数，cattle 的复数形式是 cattle。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 923,
    "topic": "名词",
    "subTopic": "复数变化规则",
    "source": "中考语法精选",
    "question": "There are some ______ on the farm.",
    "options": [
      "cattle",
      "cattles",
      "cattlees",
      "cattle's"
    ],
    "answer": 0,
    "explanation": "some 后接可数名词复数，cattle 的复数形式是 cattle。",
    "knowledge": "可数名词复数不规则变化。"
  },
  {
    "id": 924,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______, please.",
    "options": [
      "bread",
      "breads",
      "a bread",
      "two breads"
    ],
    "answer": 0,
    "explanation": "bread 表示物质时是不可数名词，没有复数形式。",
    "knowledge": "不可数名词。"
  },
  {
    "id": 925,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______, please.",
    "options": [
      "butter",
      "butters",
      "a butter",
      "two butters"
    ],
    "answer": 0,
    "explanation": "butter 表示物质时是不可数名词，没有复数形式。",
    "knowledge": "不可数名词。"
  },
  {
    "id": 926,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______, please.",
    "options": [
      "cheese",
      "cheeses",
      "a cheese",
      "two cheeses"
    ],
    "answer": 0,
    "explanation": "cheese 表示物质时是不可数名词，没有复数形式。",
    "knowledge": "不可数名词。"
  },
  {
    "id": 927,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______, please.",
    "options": [
      "chicken（鸡肉）",
      "chicken（鸡肉）s",
      "a chicken（鸡肉）",
      "two chicken（鸡肉）s"
    ],
    "answer": 0,
    "explanation": "chicken（鸡肉） 表示物质时是不可数名词，没有复数形式。",
    "knowledge": "不可数名词。"
  },
  {
    "id": 928,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______, please.",
    "options": [
      "meat",
      "meats",
      "a meat",
      "two meats"
    ],
    "answer": 0,
    "explanation": "meat 表示物质时是不可数名词，没有复数形式。",
    "knowledge": "不可数名词。"
  },
  {
    "id": 929,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______, please.",
    "options": [
      "beef",
      "beefs",
      "a beef",
      "two beefs"
    ],
    "answer": 0,
    "explanation": "beef 表示物质时是不可数名词，没有复数形式。",
    "knowledge": "不可数名词。"
  },
  {
    "id": 930,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______, please.",
    "options": [
      "pork",
      "porks",
      "a pork",
      "two porks"
    ],
    "answer": 0,
    "explanation": "pork 表示物质时是不可数名词，没有复数形式。",
    "knowledge": "不可数名词。"
  },
  {
    "id": 931,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______, please.",
    "options": [
      "fish（鱼肉）",
      "fish（鱼肉）s",
      "a fish（鱼肉）",
      "two fish（鱼肉）s"
    ],
    "answer": 0,
    "explanation": "fish（鱼肉） 表示物质时是不可数名词，没有复数形式。",
    "knowledge": "不可数名词。"
  },
  {
    "id": 932,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______, please.",
    "options": [
      "rice",
      "rices",
      "a rice",
      "two rices"
    ],
    "answer": 0,
    "explanation": "rice 表示物质时是不可数名词，没有复数形式。",
    "knowledge": "不可数名词。"
  },
  {
    "id": 933,
    "topic": "名词",
    "subTopic": "可数/不可数",
    "source": "中考语法精选",
    "question": "I'd like some ______, please.",
    "options": [
      "noodle（通常用复数）",
      "noodle（通常用复数）s",
      "a noodle（通常用复数）",
      "two noodle（通常用复数）s"
    ],
    "answer": 0,
    "explanation": "noodle（通常用复数） 表示物质时是不可数名词，没有复数形式。",
    "knowledge": "不可数名词。"
  },
  {
    "id": 934,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ is my friend.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，用人称代词主格 I。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 935,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please help ______.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answer": 1,
    "explanation": "help 是动词，后接宾语，用人称代词宾格 me。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 936,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ are my friend.",
    "options": [
      "You",
      "your",
      "yours",
      "yourself"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，要用人称代词主格 you，且与 are 搭配。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 937,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please help ______.",
    "options": [
      "you",
      "your",
      "yours",
      "mine"
    ],
    "answer": 0,
    "explanation": "help 是动词，后接宾语，用人称代词宾格 you。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 938,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ is my friend.",
    "options": [
      "He",
      "Him",
      "His",
      "Mine"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，用人称代词主格 he。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 939,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please help ______.",
    "options": [
      "him",
      "he",
      "his",
      "mine"
    ],
    "answer": 0,
    "explanation": "help 是动词，后接宾语，用人称代词宾格 him。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 940,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ is my friend.",
    "options": [
      "She",
      "Her",
      "Hers",
      "Mine"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，用人称代词主格 she。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 941,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please help ______.",
    "options": [
      "her",
      "she",
      "hers",
      "mine"
    ],
    "answer": 0,
    "explanation": "help 是动词，后接宾语，用人称代词宾格 her。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 942,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ is my friend.",
    "options": [
      "It",
      "Its",
      "Mine",
      "Yours"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，用人称代词主格 it。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 943,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please help ______.",
    "options": [
      "it",
      "its",
      "mine",
      "yours"
    ],
    "answer": 0,
    "explanation": "help 是动词，后接宾语，用人称代词宾格 it。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 944,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ are my friends.",
    "options": [
      "We",
      "us",
      "our",
      "ours"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，要用人称代词主格 we，且与 are 搭配。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 945,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please help ______.",
    "options": [
      "we",
      "us",
      "our",
      "ours"
    ],
    "answer": 1,
    "explanation": "help 是动词，后接宾语，用人称代词宾格 us。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 946,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "______ are my friends.",
    "options": [
      "They",
      "them",
      "their",
      "theirs"
    ],
    "answer": 0,
    "explanation": "句子缺少主语，要用人称代词主格 they，且与 are 搭配。",
    "knowledge": "人称代词主格作主语。"
  },
  {
    "id": 947,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "Please help ______.",
    "options": [
      "they",
      "them",
      "their",
      "theirs"
    ],
    "answer": 1,
    "explanation": "help 是动词，后接宾语，用人称代词宾格 them。",
    "knowledge": "人称代词宾格作宾语。"
  },
  {
    "id": 948,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please arrive ______ the airport.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "arrive at 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 949,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please arrive ______ Paris.",
    "options": [
      "in",
      "at",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "arrive in 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 950,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please look ______ my keys.",
    "options": [
      "for",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "look for 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 951,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please wait ______ the bus.",
    "options": [
      "for",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "wait for 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 952,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please listen ______ music.",
    "options": [
      "to",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "listen to 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 953,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please pay ______ the meal.",
    "options": [
      "for",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "pay for 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 954,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please laugh ______ others.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "laugh at 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 955,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please shout ______ him.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "shout at 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 956,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please talk ______ the film.",
    "options": [
      "about",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "talk about 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 957,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please think ______ the problem.",
    "options": [
      "about",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "think about 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 958,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please care ______ the environment.",
    "options": [
      "about",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "care about 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 959,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please worry ______ the exam.",
    "options": [
      "about",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "worry about 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 960,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please agree ______ you.",
    "options": [
      "with",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "agree with 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 961,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please help ______ my homework.",
    "options": [
      "with",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "help with 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 962,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please share ______ my friends.",
    "options": [
      "with",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "share with 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 963,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please compare ______ last year.",
    "options": [
      "with",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "compare with 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 964,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please deal ______ the problem.",
    "options": [
      "with",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "deal with 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 965,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please provide ______ food.",
    "options": [
      "with",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "provide with 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 966,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please fill ______ water.",
    "options": [
      "with",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "fill with 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 967,
    "topic": "介词",
    "subTopic": "固定搭配",
    "source": "中考语法精选",
    "question": "Please cover ______ a blanket.",
    "options": [
      "with",
      "at",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "cover with 是固定搭配。",
    "knowledge": "动词与介词的固定搭配。"
  },
  {
    "id": 968,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "He usually ______ (get) up early.",
    "options": [
      "gets",
      "getss",
      "will gets",
      "is gets"
    ],
    "answer": 0,
    "explanation": "一般现在时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 969,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "She ______ (go) to Shanghai yesterday.",
    "options": [
      "went",
      "wents",
      "will went",
      "is went"
    ],
    "answer": 0,
    "explanation": "一般过去时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 970,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "They ______ (play) football now.",
    "options": [
      "are playing",
      "are playings",
      "will are playing",
      "is are playing"
    ],
    "answer": 0,
    "explanation": "现在进行时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 971,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "We ______ (have) a meeting tomorrow.",
    "options": [
      "will have",
      "will haves",
      "will will have",
      "is will have"
    ],
    "answer": 0,
    "explanation": "一般将来时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 972,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "I ______ (finish) my homework already.",
    "options": [
      "have finished",
      "have finisheds",
      "will have finished",
      "is have finished"
    ],
    "answer": 0,
    "explanation": "现在完成时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 973,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "He ______ (read) when I called him.",
    "options": [
      "was reading",
      "was readings",
      "will was reading",
      "is was reading"
    ],
    "answer": 0,
    "explanation": "过去进行时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 974,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "By 9 o'clock, they ______ (leave).",
    "options": [
      "had left",
      "had lefts",
      "will had left",
      "is had left"
    ],
    "answer": 0,
    "explanation": "过去完成时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 975,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "He said he ______ (come) back soon.",
    "options": [
      "would come",
      "would comes",
      "will would come",
      "is would come"
    ],
    "answer": 0,
    "explanation": "过去将来时的用法。",
    "knowledge": "动词时态填空。"
  },
  {
    "id": 976,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "English ______ all over the world.",
    "options": [
      "is spoken",
      "was spoken",
      "will be spoken",
      "has been spoken"
    ],
    "answer": 0,
    "explanation": "一般现在时被动。",
    "knowledge": "被动语态。"
  },
  {
    "id": 977,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The window ______ by Tom yesterday.",
    "options": [
      "was broken",
      "is broken",
      "will be broken",
      "has been broken"
    ],
    "answer": 0,
    "explanation": "一般过去时被动。",
    "knowledge": "被动语态。"
  },
  {
    "id": 978,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The bridge ______ next year.",
    "options": [
      "will be built",
      "will being built",
      "would be built",
      "is built"
    ],
    "answer": 0,
    "explanation": "一般将来时被动。",
    "knowledge": "被动语态。"
  },
  {
    "id": 979,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The problem ______ now.",
    "options": [
      "is being discussed",
      "was being discussed",
      "is beinging discussed",
      "will be being discussed"
    ],
    "answer": 0,
    "explanation": "现在进行时被动。",
    "knowledge": "被动语态。"
  },
  {
    "id": 980,
    "topic": "动词语态",
    "subTopic": "语态综合",
    "source": "中考语法精选",
    "question": "The book ______ by the end of last week.",
    "options": [
      "had been finished",
      "had been finwashed",
      "had beingen finished",
      "has been finished"
    ],
    "answer": 0,
    "explanation": "过去完成时被动。",
    "knowledge": "被动语态。"
  },
  {
    "id": 981,
    "topic": "复合句",
    "subTopic": "复合句综合",
    "source": "中考语法精选",
    "question": "I don't know if he ______ (come) tomorrow.",
    "options": [
      "will come",
      "will comes",
      "will will come",
      "is will come"
    ],
    "answer": 0,
    "explanation": "宾语从句时态。",
    "knowledge": "复合句综合。"
  },
  {
    "id": 982,
    "topic": "复合句",
    "subTopic": "复合句综合",
    "source": "中考语法精选",
    "question": "Can you tell me where ______ (be) the library?",
    "options": [
      "is",
      "iss",
      "will is",
      "is is"
    ],
    "answer": 0,
    "explanation": "宾语从句语序。",
    "knowledge": "复合句综合。"
  },
  {
    "id": 983,
    "topic": "复合句",
    "subTopic": "复合句综合",
    "source": "中考语法精选",
    "question": "The man ______ is speaking is my teacher.",
    "options": [
      "who",
      "whos",
      "will who",
      "is who"
    ],
    "answer": 0,
    "explanation": "定语从句。",
    "knowledge": "复合句综合。"
  },
  {
    "id": 984,
    "topic": "复合句",
    "subTopic": "复合句综合",
    "source": "中考语法精选",
    "question": "This is the house ______ I lived ten years ago.",
    "options": [
      "where",
      "wheres",
      "will where",
      "is where"
    ],
    "answer": 0,
    "explanation": "定语从句。",
    "knowledge": "复合句综合。"
  },
  {
    "id": 985,
    "topic": "复合句",
    "subTopic": "复合句综合",
    "source": "中考语法精选",
    "question": "If it ______ (rain) tomorrow, we will stay at home.",
    "options": [
      "rains",
      "rainss",
      "will rains",
      "is rains"
    ],
    "answer": 0,
    "explanation": "条件状语从句。",
    "knowledge": "复合句综合。"
  },
  {
    "id": 986,
    "topic": "复合句",
    "subTopic": "复合句综合",
    "source": "中考语法精选",
    "question": "Although it was raining, ______.",
    "options": [
      "we still went out",
      "we still went outs",
      "will we still went out",
      "is we still went out"
    ],
    "answer": 0,
    "explanation": "让步状语从句。",
    "knowledge": "复合句综合。"
  },
  {
    "id": 987,
    "topic": "简单句",
    "subTopic": "简单句综合",
    "source": "中考语法精选",
    "question": "What ______ beautiful day!",
    "options": [
      "a",
      "as",
      "the a",
      "a a"
    ],
    "answer": 0,
    "explanation": "感叹句。",
    "knowledge": "简单句综合。"
  },
  {
    "id": 988,
    "topic": "简单句",
    "subTopic": "简单句综合",
    "source": "中考语法精选",
    "question": "How ______ time flies!",
    "options": [
      "fast",
      "fasts",
      "the fast",
      "a fast"
    ],
    "answer": 0,
    "explanation": "感叹句。",
    "knowledge": "简单句综合。"
  },
  {
    "id": 989,
    "topic": "简单句",
    "subTopic": "简单句综合",
    "source": "中考语法精选",
    "question": "Don't ______ in class.",
    "options": [
      "talk",
      "talks",
      "the talk",
      "a talk"
    ],
    "answer": 0,
    "explanation": "祈使句。",
    "knowledge": "简单句综合。"
  },
  {
    "id": 990,
    "topic": "简单句",
    "subTopic": "简单句综合",
    "source": "中考语法精选",
    "question": "Please ______ me your pen.",
    "options": [
      "lend",
      "lends",
      "the lend",
      "a lend"
    ],
    "answer": 0,
    "explanation": "祈使句。",
    "knowledge": "简单句综合。"
  },
  {
    "id": 991,
    "topic": "简单句",
    "subTopic": "简单句综合",
    "source": "中考语法精选",
    "question": "— ______ is this book? — It's mine.",
    "options": [
      "Whose",
      "Whoses",
      "the Whose",
      "a Whose"
    ],
    "answer": 0,
    "explanation": "特殊疑问句。",
    "knowledge": "简单句综合。"
  },
  {
    "id": 992,
    "topic": "简单句",
    "subTopic": "简单句综合",
    "source": "中考语法精选",
    "question": "— ______ does it take to get there? — Half an hour.",
    "options": [
      "How long",
      "How longs",
      "the How long",
      "a How long"
    ],
    "answer": 0,
    "explanation": "特殊疑问句。",
    "knowledge": "简单句综合。"
  },
  {
    "id": 993,
    "topic": "名词",
    "subTopic": "名词综合",
    "source": "中考语法精选",
    "question": "There are two ______ in the zoo. They are very cute.",
    "options": [
      "pandas",
      "panda",
      "a panda",
      "pandases"
    ],
    "answer": 0,
    "explanation": "two 后接可数名词复数，panda 的复数是 pandas。",
    "knowledge": "可数名词复数。"
  },
  {
    "id": 994,
    "topic": "冠词",
    "subTopic": "冠词综合",
    "source": "中考语法精选",
    "question": "— Who is ______ girl over there? — She is my classmate.",
    "options": [
      "a",
      "an",
      "the",
      "/"
    ],
    "answer": 2,
    "explanation": "over there 限定 girl，表示特指，用 the。",
    "knowledge": "定冠词表特指。"
  },
  {
    "id": 995,
    "topic": "代词",
    "subTopic": "人称代词",
    "source": "中考语法精选",
    "question": "This gift is for ______. Happy birthday!",
    "options": [
      "you",
      "your",
      "yours",
      "yourself"
    ],
    "answer": 0,
    "explanation": "for 是介词，后接宾格 you。",
    "knowledge": "介词后接宾格。"
  },
  {
    "id": 996,
    "topic": "数词",
    "subTopic": "数词综合",
    "source": "中考语法精选",
    "question": "There are about ______ students in our school.",
    "options": [
      "two thousand",
      "two thousands",
      "two thousand of",
      "thousands"
    ],
    "answer": 0,
    "explanation": "thousand 前有具体数字时不用复数，也不加 of。",
    "knowledge": "thousand 的用法。"
  },
  {
    "id": 997,
    "topic": "形容词",
    "subTopic": "形容词综合",
    "source": "中考语法精选",
    "question": "The weather today is ______ than yesterday.",
    "options": [
      "good",
      "better",
      "best",
      "well"
    ],
    "answer": 1,
    "explanation": "than 提示用比较级，good 的比较级是 better。",
    "knowledge": "形容词比较级。"
  },
  {
    "id": 998,
    "topic": "副词",
    "subTopic": "副词综合",
    "source": "中考语法精选",
    "question": "He writes ______ than any other student in his class.",
    "options": [
      "careful",
      "more careful",
      "carefully",
      "more carefully"
    ],
    "answer": 3,
    "explanation": "than 提示用比较级，修饰动词 writes 用副词 carefully。",
    "knowledge": "副词比较级。"
  },
  {
    "id": 999,
    "topic": "连词",
    "subTopic": "连词综合",
    "source": "中考语法精选",
    "question": "______ it is raining, the children are playing outside happily.",
    "options": [
      "If",
      "Because",
      "Although",
      "So"
    ],
    "answer": 2,
    "explanation": "although 表示\"虽然\"，引导让步状语从句。",
    "knowledge": "although 的用法。"
  },
  {
    "id": 1000,
    "topic": "介词",
    "subTopic": "介词综合",
    "source": "中考语法精选",
    "question": "The library is ______ the classroom building.",
    "options": [
      "next to",
      "next",
      "beside to",
      "near by"
    ],
    "answer": 0,
    "explanation": "next to 是固定搭配，意为\"紧挨着\"。",
    "knowledge": "next to 固定搭配。"
  },
  {
    "id": 1001,
    "topic": "复合句",
    "subTopic": "宾语从句",
    "source": "中考语法精选",
    "question": "I don't understand ______ he said.",
    "options": [
      "that",
      "what",
      "which",
      "how"
    ],
    "answer": 1,
    "explanation": "what 引导宾语从句，在从句中作 said 的宾语。",
    "knowledge": "what 引导宾语从句。"
  },
  {
    "id": 1002,
    "topic": "动词时态",
    "subTopic": "时态综合",
    "source": "中考语法精选",
    "question": "By the time we got there, the film ______.",
    "options": [
      "began",
      "had begun",
      "has begun",
      "begins"
    ],
    "answer": 1,
    "explanation": "by the time + 过去时，主句用过去完成时，表示\"过去的过去\"。",
    "knowledge": "过去完成时。"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
