// 语法知识库 - 按专题分类
// 每个知识点包含：完整规则(rules)、关键知识点(keyPoints)、示例(example)、
// 常见易错点(errorProne)、高频考点(highFreq)、历年真题(pastExam: 含年份/省份/题/答案/解析)
// 说明：历年真题为依据各地中考命题风格整理的"代表性示例题"，用于巩固训练。
const grammarData = [
  {
    topic: '名词',
    icon: '🏷️',
    points: [
      {
        title: '可数名词与不可数名词',
        key: true,
        rules: '名词表示人、事物、地点或抽象概念。可数名词有单数和复数两种形式（如 book→books, box→boxes）；不可数名词没有复数形式，不能直接用 a/an 或不定冠词、数词修饰，需要借助量词表达数量（a piece of, a cup of, two glasses of）。常见的不可数名词有：water, milk, bread, rice, meat, advice, information, news, furniture, homework, knowledge, weather, money, progress 等。',
        keyPoints: '① 不可数名词无复数、不加 s、不用 a/an；② 要表数量用"量词 + of"结构；③ news 虽以 s 结尾但是不可数；④ 不可数名词作主语，谓语用单数。',
        example: 'I need some advice.（不可数，不加 s）\nThere is a book on the desk.（可数）\nWe drank two glasses of water.（量词表达）',
        errorProne: '误把不可数名词加 s：informations, advices, newses, furnitures 都是错的。\n误用 a/an 修饰不可数：a bread, an information 错误，应说 a piece of bread / a piece of information。\n误以为以 s 结尾的都是复数：news, maths, physics 为不可数单数。',
        highFreq: '常考：判断某词是否可数（尤其 advice, information, news, furniture, progress）。\n常考：不可数名词的量化表达（a cup of tea, two pieces of news）。\n常考：不可数名词作主语时谓语用单数。',
        pastExam: [
          { year: 2023, province: '北京', q: '— Would you like _____ ? — No, thanks. I’m not hungry at all.', options: ['some water', 'some breads', 'a bread', 'some informations'], answer: 0, explain: 'bread 和 information 都是不可数名词，不能加 s，也不能用 a 修饰，故选 some water。' },
          { year: 2021, province: '江苏', q: 'We need some _____ to make a fruit salad.', options: ['apple', 'banana', 'milk', 'tomato'], answer: 2, explain: 'milk 为不可数名词，可用 some 修饰；其余为可数名词，some 后应用复数形式。' }
        ]
      },
      {
        title: '名词复数变化规则',
        key: true,
        rules: '1) 一般情况加 -s（books）；2) 以 s, x, ch, sh 结尾加 -es（boxes, watches）；3) 以"辅音字母 + y"结尾，变 y 为 i 再加 -es（baby→babies, city→cities）；4) 以 f 或 fe 结尾，多数变 f/fe 为 v 再加 -es（leaf→leaves, knife→knives, wife→wives），但 roof→roofs, chief→chiefs, belief→beliefs 等直接加 s；5) 以 o 结尾：有生命的加 -es（tomato→tomatoes, potato→potatoes, hero→heroes），无生命的加 -s（photo→photos, radio→radios, piano→pianos）；6) 不规则变化需逐个记忆。',
        keyPoints: '① 记熟 f/fe 变法（leaf, knife, wife, life, thief）；② 以 o 结尾"有生命加 es，无生命加 s"；③ 不规则复数：man→men, woman→women, child→children, foot→feet, tooth→teeth, mouse→mice, goose→geese, fish→fish/fishes。',
        example: 'box→boxes, baby→babies, leaf→leaves, tomato→tomatoes, photo→photos, child→children',
        errorProne: '误记 roof（屋顶）→ roofs，不是 rooves。\n误记 hero→heroes（有生命加 es），别忘了。\nGerman→Germans（直接加 s，不是 Germen）。\n单复同形：sheep, deer, fish 等易错加 s。',
        highFreq: '常考：不规则复数（man/men, woman/women, child/children, foot/feet, tooth/teeth）。\n常考：f/fe 变法（leaf/leaves, knife/knives, life/lives）。\n常考：以 o 结尾的 tomatoes / potatoes / photos 拼写辨析。',
        pastExam: [
          { year: 2022, province: '广东', q: 'There are many _____ on the farm. They are very cute.', options: ['sheep', 'sheeps', 'dog', 'pig'], answer: 0, explain: 'sheep 单复同形，many 后接复数概念但仍用 sheep，不能加 s。' },
          { year: 2020, province: '山东', q: 'My mother bought two _____ and some _____ in the supermarket.', options: ['tomato; potato', 'tomatoes; potatoes', 'tomatoes; potato', 'tomato; potatoes'], answer: 1, explain: 'tomato 和 potato 以 o 结尾且有生命，复数均加 -es。' }
        ]
      },
      {
        title: '名词所有格',
        key: true,
        rules: '1) 有生命名词加 ’s（Tom’s book, the boy’s name）；2) 以 s 结尾的复数名词只加 ’（the teachers’ office, the students’ books）；3) 无生命名词一般用 of 结构（the door of the room, the name of the book）；4) 表示时间、距离、国家、城市、团体等常用 ’s（today’s newspaper, ten minutes’ walk, China’s capital）；5) 双重所有格：a friend of mine / a book of my father’s。',
        keyPoints: '① 有生命用 ’s，以 s 结尾复数只加 ’；② 无生命多用 of；③ 时间/距离/国家可用 ’s；④ 两人共有只在后者加 ’s，各自拥有分别加 ’s。',
        example: 'Lucy’s bag / the teachers’ classroom / the capital of China / an hour’s drive / a friend of mine',
        errorProne: '共有与各自拥有混淆：Lucy and Lily’s mother（共有，一人） vs Lucy’s and Lily’s mothers（各自，两人）。\n以 s 结尾复数误加 ’s：the teachers’s office 错误，应为 the teachers’ office。',
        highFreq: '常考：共有 vs 各自拥有的区别（只在后者加 ’s）。\n常考：时间/距离所有格（a week’s holiday, ten minutes’ walk）。\n常考：双重所有格 a friend of mine。',
        pastExam: [
          { year: 2023, province: '上海', q: '_____ room is on the second floor. They share it together.', options: ['Lucy and Lily', 'Lucy’s and Lily’s', 'Lucy and Lily’s', 'Lucy’s and Lily'], answer: 2, explain: '两人共有同一间房，只在后一个名词加 ’s。' },
          { year: 2019, province: '湖北', q: 'It’s about _____ walk from my home to the school.', options: ['ten minute', 'ten minutes’', 'ten minute’s', 'ten minutes'], answer: 1, explain: '表示距离用名词所有格，minutes 以 s 结尾只加 ’。' }
        ]
      }
    ]
  },
  {
    topic: '冠词',
    icon: '🔤',
    points: [
      {
        title: '不定冠词 a / an',
        key: true,
        rules: 'a 用于辅音音素开头的单词前，an 用于元音音素开头的单词前。判断依据是单词的"发音"而非字母。a university（/j/ 辅音）, a one-way street（/w/ 辅音）, an hour（/aʊ/ 元音）, an honest boy（/ɒ/ 元音）, an 8-year-old girl（/eɪ/ 元音）。a/an 表示泛指"一个"，用于单数可数名词前。',
        keyPoints: '① 看发音不看字母：元音音素用 an，辅音音素用 a；② university, useful, one, European 用 a；hour, honest, 8 用 an；③ a/an 表泛指"一个"。',
        example: 'a book, an apple, a useful book, an umbrella, an 8-year-old girl, a one-way street',
        errorProne: '误以为字母 o/u 开头就用 an：university, useful, one, European 实际以辅音 /j/ 开头用 a。\n误以为字母 a/e/i/o 开头都用 an：hour 以元音开头用 an，但 uniform 以 /j/ 开头用 a。\n数字 8, 11, 18 发音以元音开头，用 an（an 8-year-old boy）。',
        highFreq: '常考：根据"发音"判断 a/an（高频陷阱：a university, an hour）。\n常考：泛指"一个"用 a/an。\n常考：单词首字母不发音 h 时（hour, honest）用 an。',
        pastExam: [
          { year: 2022, province: '浙江', q: 'There is _____ "u" and _____ "s" in the word "bus".', options: ['a; a', 'an; an', 'a; an', 'an; a'], answer: 2, explain: 'u 发 /ju:/ 辅音用 a；s 发 /es/ 元音开头用 an。' },
          { year: 2020, province: '天津', q: 'He is _____ honest boy, and he never tells lies.', options: ['a', 'an', 'the', '/'], answer: 1, explain: 'honest 中 h 不发音，以元音 /ɒ/ 开头，用 an。' }
        ]
      },
      {
        title: '定冠词 the 的用法',
        key: true,
        rules: 'the 表示特指。主要用法：① 特指双方都知道的人或物（the book on the desk）；② 上文提到过的人或物；③ 序数词、形容词最高级前（the first, the best）；④ 乐器前（play the piano）；⑤ 世上独一无二的事物（the sun, the moon, the earth）；⑥ 姓氏复数表"一家人"（the Greens）；⑦ 由普通名词构成的专有名词（the Great Wall, the Summer Palace）。',
        keyPoints: '① 最高级、序数词前加 the；② 乐器前加 the（play the piano/guitar）；③ 独一无二事物、姓氏复数、江河湖海前加 the；④ 方位词前常加 the（in the east）。',
        example: 'The book on the desk is mine. / He is the tallest in our class. / She plays the piano. / the moon',
        errorProne: '序数词前一般用 the，但作副词表"再一/又一"用 a（a second chance）。\n球类、棋类前不加 the：play basketball / play chess；乐器前加 the：play the violin。\n三餐、学科前一般无 the，但特指某顿饭可加（The breakfast was delicious.）。',
        highFreq: '常考：最高级/序数词前加 the。\n常考：乐器前加 the，球类前不加 the。\n常考：独一无二事物（the sun/moon/earth）前加 the。',
        pastExam: [
          { year: 2023, province: '河南', q: 'My sister likes playing _____ piano, but I like playing _____ football.', options: ['the; the', '/; the', 'the; /', '/; /'], answer: 2, explain: '乐器前加 the，球类运动前不加 the。' },
          { year: 2021, province: '四川', q: 'Of all the subjects, English is _____ one that I like best.', options: ['a', 'an', 'the', '/'], answer: 2, explain: '形容词最高级前用 the。' }
        ]
      },
      {
        title: '零冠词（不用冠词）',
        key: true,
        rules: '下列情况通常不用冠词：① 专有名词（Beijing, Tom）；② 物质名词、抽象名词泛指（water, love）；③ 三餐（have breakfast）、球类运动（play football）、棋类（play chess）；④ 学科、语言、季节、月份、星期（English, spring, Monday）；⑤ by 后的交通工具（by bus, by train, by bike）；⑥ 固定搭配（at school, in hospital, go to bed, on foot）。',
        keyPoints: '① 三餐/球类/学科/语言/季节/月份/星期前无 the；② by + 交通工具无 the；③ 固定搭配 at school, in hospital, on foot 无 the；④ school/hospital/bed 表"用途"无 the，表"地点建筑"有 the。',
        example: 'I go to school by bus. / English is my favorite subject. / We have lunch at 12. / on foot',
        errorProne: '一对反义搭配：at school（上学）vs at the school（在学校里）；in hospital（住院）vs in the hospital（在医院里）；go to bed（去睡觉）vs go to the bed（走到床边）。\nby 后交通工具误加 the：by the bus 错误，应为 by bus；但 on the bus, in a car 要加。',
        highFreq: '常考：at school / in hospital / go to bed 等零冠词固定搭配。\n常考：by + 交通工具无 the。\n常考：三餐、球类、学科前不加 the。',
        pastExam: [
          { year: 2022, province: '河北', q: 'He was sent to _____ hospital because he was badly ill.', options: ['a', 'an', 'the', '/'], answer: 3, explain: '生病住院用 in hospital，零冠词。' },
          { year: 2019, province: '安徽', q: 'My father goes to work _____ every day. It’s good for his health.', options: ['by a bike', 'by bike', 'on a bike to', 'by the bike'], answer: 1, explain: 'by + 交通工具用零冠词，by bike 固定搭配。' }
        ]
      }
    ]
  },
  {
    topic: '代词',
    icon: '👤',
    points: [
      {
        title: '人称代词主格与宾格',
        key: true,
        rules: '人称代词分主格和宾格。主格（I, you, he, she, it, we, they）在句中作主语；宾格（me, you, him, her, it, us, them）作宾语（动词或介词后）或表语。并列主语顺序：单数 you, he, I；复数 we, you, they。在正式文体中，作表语也用主格（It is I），口语中可用宾格（It’s me）。',
        keyPoints: '① 主语用主格，宾语/介词后用宾格；② 并列时 I 放最后（Tom and I）；③ Let/help 等动词后用宾格（Let me...）；④ 介词后必须宾格（between you and me）。',
        example: 'He helps me. / It is I.（正式）/ Between you and me, he is wrong. / Tom and I are students.',
        errorProne: '并列作主语时误把 I 放前面：I and Tom 不礼貌且错误，应为 Tom and I。\n介词后误用主格：between he and I 错误，应为 between him and me。\n及物动词后误用主格：Let I go 错误，应为 Let me go。',
        highFreq: '常考：and/or 连接的人称代词格的一致（I 放最后）。\n常考：介词后必须用宾格。\n常考：动词（如 teach, help, let）后宾语用宾格。',
        pastExam: [
          { year: 2023, province: '福建', q: 'Mr. Smith teaches _____ English. We all like _____ very much.', options: ['our; he', 'us; him', 'we; his', 'us; he'], answer: 1, explain: 'teach 后接双宾，人用宾格 us；like 后也用宾格 him。' },
          { year: 2020, province: '湖南', q: '— Who is singing in the next room? — _____ is my sister.', options: ['Her', 'She', 'Hers', 'Him'], answer: 1, explain: '作主语用主格 She。' }
        ]
      },
      {
        title: '物主代词',
        key: true,
        rules: '物主代词分两类：形容词性物主代词（my, your, his, her, its, our, their）后必须接名词；名词性物主代词（mine, yours, his, hers, its, ours, theirs）单独使用，相当于"形容词性物主代词 + 名词"。双重所有格用"of + 名词性物主代词"（a friend of mine）。',
        keyPoints: '① 形容词性后必须加名词（my book）；② 名词性单独用，后不加名词（This book is mine）；③ 名词性 = 形容词性 + 名词；④ a friend of mine 双重所有格。',
        example: 'This is my book. = This book is mine. / Is this pen yours? / a friend of mine',
        errorProne: '名词性物主代词后误加名词：mine book 错误，应为 my book 或 the book is mine。\n混淆 its（它的）与 it’s（it is）：The cat ate its food（用 its）。\n形容词性物主代词漏掉名词：This is my 错误，应为 This is mine / my book。',
        highFreq: '常考：形容词性与名词性物主代词的辨析与转换。\n常考：名词性物主代词后不加名词。\n常考：its 与 it’s 的区别。',
        pastExam: [
          { year: 2022, province: '重庆', q: '— Is this _____ dictionary? — No, it isn’t _____. _____ is on the desk.', options: ['your; my; Mine', 'yours; mine; My', 'your; mine; Mine', 'yours; my; My'], answer: 2, explain: '第一空后接名词用 your；第二空单独用 mine；第三空作主语用 Mine。' },
          { year: 2019, province: '辽宁', q: 'The red bike is _____, and the blue one is _____.', options: ['my; her', 'mine; hers', 'me; she', 'I; she'], answer: 1, explain: '两空都单独作表语，用名词性物主代词 mine, hers。' }
        ]
      },
      {
        title: '不定代词 some / any 及复合词',
        key: true,
        rules: 'some 用于肯定句，以及表示请求、建议、邀请的疑问句（Would you like some...? / Could you give me some...?）；any 用于否定句和一般疑问句。复合不定代词：something/anything/nothing, someone/anyone/no one, somewhere/anywhere，修饰它们的形容词必须后置（something interesting）。everything, everyone, something 等作主语时谓语用单数。',
        keyPoints: '① some 用于肯定句和请求/建议疑问句中；② any 用于否定句、一般疑问句；③ 复合不定代词 + 形容词后置；④ 复合不定代词作主语谓语用单数。',
        example: 'Would you like some coffee? / Do you have anything to say? / There is nothing wrong. / something important',
        errorProne: '形容词修饰复合不定代词位置错误：important something 应改为 something important。\n请求句中误用 any：Would you like any...? 应为 Would you like some...?（表邀请用 some）。\n复合不定代词后接动词误用复数：Everything are 应改为 Everything is。',
        highFreq: '常考：some 在委婉请求/建议疑问句中的特例。\n常考：复合不定代词 + 形容词后置。\n常考：something/nothing/everything 作主语谓语用单数。',
        pastExam: [
          { year: 2023, province: '吉林', q: 'There is _____ wrong with my watch. It doesn’t work.', options: ['everything', 'something', 'anything', 'nothing'], answer: 1, explain: '肯定句用 something，表示"出了点毛病"。' },
          { year: 2021, province: '甘肃', q: 'I have _____ to tell you. It’s a secret between us.', options: ['something important', 'important something', 'anything important', 'important anything'], answer: 0, explain: '肯定句用 something，且形容词 important 须后置。' }
        ]
      }
    ]
  },
  {
    topic: '数词',
    icon: '🔢',
    points: [
      {
        title: '基数词与序数词',
        key: true,
        rules: '基数词表数量（one, two, three...），序数词表顺序（first, second, third...），序数词前通常加 the。变化规则：1–3 不规则（first, second, third）；4 起加 -th（fourth, sixth 注意拼写 fifth）；以 y 结尾变 ie 加 th（twentieth）；整十变 ie（fortieth, ninetieth）；"几十几"只变个位（twenty-first, ninety-ninth）。编号表达：Class Three, Grade Nine, Lesson Five, Room 305（读作 three o five）。',
        keyPoints: '① 序数词前一般加 the；② 不规则：first/second/third, fifth, ninth, twelfth, fortieth；③ 编号：名词+基数词（Class Three）；④ 表"再一"用 a + 序数词（a second chance）。',
        example: 'the first day, the twenty-third of June, Room 305, Class Three Grade Nine',
        errorProne: '拼写错误：nine→ninth（去 e），five→fifth（ve 变 f），twelve→twelfth（ve 变 f），forty→fortieth（去 y）。\n编号误用序数词：Lesson Five 不能写成 the fifth lesson（除非特指"第五课"）。\n序数词前漏 the：on first day 应改为 on the first day。',
        highFreq: '常考：序数词拼写（ninth, twelfth, fortieth, twentieth）。\n常考：编号表达（Class Three, Room 101）。\n常考：序数词前 the 的使用。',
        pastExam: [
          { year: 2022, province: '山西', q: 'September is the _____ month of a year.', options: ['nineth', 'ninth', 'nine', 'nineteen'], answer: 1, explain: 'nine 的序数词去 e 加 th，拼作 ninth。' },
          { year: 2020, province: '云南', q: 'He lives on the _____ floor of this building.', options: ['twelve', 'twelveth', 'twelfth', 'twentieth'], answer: 2, explain: 'twelve 的序数词变 ve 为 f 加 th，拼作 twelfth。' }
        ]
      },
      {
        title: '时间、分数、百分数、小数',
        key: true,
        rules: '时刻：顺读法（6:30 → six thirty）；逆读法（past 过 / to 差），30 分用 half（half past six），15 分用 a quarter（a quarter past three, a quarter to seven）。分数：分子用基数词，分母用序数词；分子大于 1 时分母加 s（one third, two thirds）；一半用 a/one half。百分数：基数词 + percent（60 percent，无复数）。小数：逐位读（0.5 → zero point five, 3.14 → three point one four）。',
        keyPoints: '① 分数：分子基数、分母序数，分子>1 分母加 s；② 百分数用 percent（无 s）；③ 时刻逆读 half/a quarter；④ 分数/百分数作主语看 of 后名词单复数。',
        example: 'a quarter past three, two thirds of the students, 70 percent of the water, zero point five',
        errorProne: '分数分母漏 s：two third 应改为 two thirds（分子>1）。\npercent 误加 s：60 percents 错误，应为 60 percent。\n"一半"误用：one and a half apples（复数），half an hour（单数）。\n分数主语一致：Two thirds of the apple is...（单数）/ Two thirds of the apples are...（复数）。',
        highFreq: '常考：分数表达与主语一致（看 of 后名词）。\n常考：百分数 percent 无复数。\n常考：时刻逆读法（half past, a quarter to）。',
        pastExam: [
          { year: 2023, province: '内蒙古', q: 'About _____ of the students in our school come from the countryside.', options: ['two third', 'second thirds', 'two thirds', 'two three'], answer: 2, explain: '分子大于 1 时，分母序数词加 s，为 two thirds。' },
          { year: 2021, province: '贵州', q: '_____ of the water in the bottle _____ dirty. We can’t drink it.', options: ['Three fourths; is', 'Three fourth; are', 'Three fourths; are', 'Third fourth; is'], answer: 0, explain: '四分之三为 three fourths；water 不可数，谓语用 is。' }
        ]
      }
    ]
  },
  {
    topic: '形容词',
    icon: '🌈',
    points: [
      {
        title: '形容词的用法与位置',
        key: true,
        rules: '形容词用来修饰名词或代词，说明性质、状态、特征。位置：① 作定语放名词前（a beautiful girl, an interesting book）；② 作表语放系动词后（be, look, sound, smell, taste, feel, become, get, turn 等，The food is delicious）；③ 修饰不定代词放其后（something special, nothing new）。以 -ing 结尾的形容词多修饰"物"（interesting, boring），以 -ed 结尾的多修饰"人"（interested, bored）。',
        keyPoints: '① 名词前作定语，系动词后作表语；② 修饰不定代词放后面（something special）；③ -ing 修饰物，-ed 修饰人；④ 系动词后接形容词不接副词。',
        example: 'a red apple / The story is interesting. / I have something important to tell you. / an excited child',
        errorProne: '系动词后误用副词：The food tastes deliciously 错误，应为 tastes delicious（系动词后接形容词）。\n-ing/-ed 混淆：I am boring（我令人厌烦）应为 I am bored（我感到无聊）。\n修饰不定代词位置：important something 应改为 something important。',
        highFreq: '常考：-ing / -ed 形容词辨析（boring/bored, exciting/excited, interesting/interested）。\n常考：系动词（look/sound/taste）后接形容词。\n常考：something + 形容词后置。',
        pastExam: [
          { year: 2022, province: '广西', q: 'The movie was so _____ that all of us felt _____.', options: ['moving; moved', 'moved; moving', 'moving; moving', 'moved; moved'], answer: 0, explain: '物（movie）用 -ing（moving），人（us）用 -ed（moved）。' },
          { year: 2020, province: '宁夏', q: 'The music sounds _____. I like it very much.', options: ['beautifully', 'beautiful', 'well', 'sweetly'], answer: 1, explain: 'sound 为系动词，后接形容词 beautiful。' }
        ]
      },
      {
        title: '比较级与最高级',
        key: true,
        rules: '构成：单音节及少数双音节词加 -er/-est（tall→taller→tallest）；多音节词及大部分双音节词前加 more/most（more beautiful, most careful）。不规则：good/well→better/best, bad/ill→worse/worst, many/much→more/most, little→less/least, far→farther/further（距离/程度）。比较级前可用 much, even, a little, far, still 等修饰（much better）；"越来越…"用比较级叠用（more and more beautiful）；"越…越…"用 the + 比较级, the + 比较级。',
        keyPoints: '① 单音节加 -er/-est，多音节加 more/most；② 不规则：good→better→best, bad→worse→worst, many→more；③ 两者比较用比较级，三者以上用最高级（加 the）；④ of the two 用 the + 比较级。',
        example: 'taller, more beautiful, better, the best, much better, more and more careful',
        errorProne: '两者比较误用最高级：Of the two, he is the tallest 应改为 the taller。\n比较级修饰词误用：very better 错误，应为 much better。\n最高级漏 the：He is tallest 应改为 the tallest。\n不规则混淆：more good 错误，应为 better。',
        highFreq: '常考：比较级前的修饰词（much, even, a little）。\n常考：两者比较用比较级（of the two 用 the better）。\n常考：不规则变化 better/worse/more。',
        pastExam: [
          { year: 2023, province: '江西', q: 'Of the two shirts, I’d like to choose the _____ one.', options: ['cheap', 'cheaper', 'cheapest', 'more cheap'], answer: 1, explain: '两者比较用比较级，且加 the，为 the cheaper。' },
          { year: 2019, province: '新疆', q: 'The weather in Beijing is _____ than _____ in Guangzhou in winter.', options: ['cold; it', 'colder; that', 'coldest; one', 'more cold; this'], answer: 1, explain: 'than 提示比较级 colder；用 that 指代前文不可数的 weather。' }
        ]
      }
    ]
  },
  {
    topic: '副词',
    icon: '⚡',
    points: [
      {
        title: '副词的分类与位置',
        key: false,
        rules: '副词修饰动词、形容词、其他副词或整个句子，表示时间、地点、方式、程度、频率等。方式副词（carefully, quickly）多放动词后或句末；频度副词（always, usually, often, sometimes, never, seldom）位置特殊：放 be 动词/助动词后、实义动词前；enough 作副词须放形容词/副词之后（good enough, run fast enough）。',
        keyPoints: '① 频度副词放 be/助动词后、实义动词前；② enough 作副词后置（good enough）；③ hard（努力）与 hardly（几乎不）意思不同；④ late（迟）与 lately（最近）不同。',
        example: 'He speaks English well. / She is always late. / I often go there. / good enough',
        errorProne: '频度副词位置：He doesn’t often go 不能写成 He often doesn’t go。\nenough 位置：enough good 错误，应为 good enough。\nhard vs hardly：hard 努力 / hardly 几乎不，完全不同。\nlate vs lately：late 迟 / lately 最近。',
        highFreq: '常考：频度副词位置（be/助后，实义前）。\n常考：enough 后置。\n常考：hard/hardly, late/lately 词义辨析。',
        pastExam: [
          { year: 2022, province: '陕西', q: 'He works _____, but he _____ passes the exam.', options: ['hard; hard', 'hardly; hardly', 'hard; hardly', 'hardly; hard'], answer: 2, explain: 'hard 意为"努力"，hardly 意为"几乎不"。' },
          { year: 2020, province: '青海', q: 'The boy is _____ to carry the heavy box by himself.', options: ['enough strong', 'strong enough', 'too strong', 'so strong'], answer: 1, explain: 'enough 作副词修饰形容词须后置，strong enough。' }
        ]
      },
      {
        title: '副词比较级与最高级',
        key: true,
        rules: '规则与形容词类似：单音节副词加 -er/-est（fast→faster→fastest, hard→harder→hardest）；多音节副词前加 more/most（more carefully, most happily）。well 是不规则副词，比较级 better，最高级 best（与 good 同形）。very 不能修饰比较级，应用 much, far, even, a little 等。',
        keyPoints: '① 单音节副词加 -er/-est，多音节加 more/most；② well→better→best（不规则）；③ than 提示比较级；④ 修饰比较级用 much/far，不用 very。',
        example: 'He runs faster than me. / She sings (the) most beautifully of all. / much better',
        errorProne: 'well 误当形容词：He sings good 应改为 He sings well（修饰动词用副词 well）。\nvery 修饰比较级：very better 错误，应为 much better。\n多音节副词误加 -er：more carefully 不能写成 carefullier。',
        highFreq: '常考：well/better/best 辨析（修饰动词用副词）。\n常考：than 引导比较级。\n常考：修饰比较级用 much/far 等。',
        pastExam: [
          { year: 2023, province: '海南', q: 'Tom dances _____ than any other student in his class.', options: ['well', 'better', 'best', 'the best'], answer: 1, explain: 'than 提示用比较级；well 的比较级是 better。' },
          { year: 2021, province: '西藏', q: 'Among the three runners, Jack runs _____.', options: ['fast', 'faster', 'fastest', 'the fastest'], answer: 3, explain: '三者比较用最高级，且副词最高级前 the 常保留。' }
        ]
      }
    ]
  },
  {
    topic: '连词',
    icon: '🔗',
    points: [
      {
        title: '并列连词',
        key: true,
        rules: '并列连词连接并列的成分或句子：and（和，顺承/递进）、but（但是，转折）、or（或者，选择；否则，用于祈使句后）、so（所以，结果）、for（因为，表原因，不用于句首）。经典句型："祈使句 + and/or + 简单句"，and 表"就会"，or 表"否则"。关联并列连词：both...and, either...or, neither...nor, not only...but also。',
        keyPoints: '① and 顺承，but 转折，or 选择/否则，so 结果；② "祈使句 + and/or + 将来时"高频；③ either...or / neither...nor 就近原则；④ although 不与 but 连用。',
        example: 'Hurry up, or you will be late. / Study hard, and you will pass. / Both he and I are students.',
        errorProne: '祈使句后连词误用：Work hard, and you will fail 逻辑错误，应为 or（否则）。\n主将从现误区：祈使句 + and/or + 将来时，后半句用将来时。\nalthough 与 but 同句：Although...but... 错误，二者取一。\nneither...nor 就近：Neither he nor I am（靠近 I 用 am）。',
        highFreq: '常考："祈使句 + and/or + 简单句"结构（or 表否则）。\n常考：关联连词 either...or / neither...nor 的就近原则。\n常考：not only...but also 就近原则。',
        pastExam: [
          { year: 2022, province: '黑龙江', q: 'Work hard, _____ you will fall behind others.', options: ['and', 'but', 'or', 'so'], answer: 2, explain: '祈使句后表"否则"用 or。' },
          { year: 2020, province: '香港', q: '_____ he _____ I am a doctor. We are both teachers.', options: ['Both; and', 'Either; or', 'Neither; nor', 'Not only; but also'], answer: 2, explain: '两人都不是医生，用 Neither...nor（就近，靠近 I 用 am）。' }
        ]
      },
      {
        title: '从属连词',
        key: true,
        rules: '从属连词引导从句，使从句依附于主句：时间（when 当…时, while 当…时候/与…同时, as 一边…一边, as soon as 一…就, since 自从, until 直到）；原因（because 因为, since/as 既然）；条件（if 如果, unless 除非=if not）；让步（although/though 虽然）；结果（so...that / such...that 如此…以至于）；目的（so that 以便）。if 引导条件状语从句遵循"主将从现"。',
        keyPoints: '① if 条件句"主将从现"；② because 与 so 不连用，though/although 与 but 不连用；③ as soon as 一…就（主将从现）；④ unless = if not。',
        example: 'I will call you as soon as I arrive. / Although it rained, we went out. / If it rains, we will stay home.',
        errorProne: '主将从现违反：If it will rain, I will... 错误，从句用一般现在时 If it rains。\nbecause 与 so 同句：Because...so... 错误，删其一。\nalthough 与 but 同句：Although...but... 错误，删 but。\nunless 误解：Unless you study hard = If you don’t study hard。',
        highFreq: '常考：if 条件状语从句"主将从现"。\n常考：让步状语从句不与 but 连用。\n常考：as soon as 主将从现；unless 含义。',
        pastExam: [
          { year: 2023, province: '澳门', q: 'If it _____ tomorrow, we will stay at home and read books.', options: ['rains', 'will rain', 'rained', 'is raining'], answer: 0, explain: 'if 条件句主将从现，从句用一般现在时 rains。' },
          { year: 2021, province: '江苏', q: '_____ it was raining heavily, they still went to school on time.', options: ['Because', 'Although', 'If', 'When'], answer: 1, explain: '前后为转折关系，用 Although（不与 but 连用）。' }
        ]
      }
    ]
  },
  {
    topic: '介词',
    icon: '📍',
    points: [
      {
        title: '时间介词 in / on / at',
        key: true,
        rules: 'at 用于具体时刻、noon、night、midnight（at 7 o’clock, at noon, at night）；on 用于具体某天及某天的上午/下午/晚上（on Monday, on July 1st, on a cold morning, on the morning of May 1st）；in 用于年、月、季节、世纪及泛指的上午/下午/晚上（in 2024, in summer, in the morning, in the 21st century）。',
        keyPoints: '① at 时刻/noon/night；② on 具体某天（及带修饰的 morning）；③ in 年/月/季/泛指上下午；④ "某天的上下午"用 on。',
        example: 'at half past six, on Monday, on a rainy day, in the evening, in 2024, on the morning of May 1st',
        errorProne: '泛指 morning 用 in，但带修饰语（of May 1st / rainy）用 on：in the morning 但 on the morning of May 1st。\nnight 用 at：at night（固定），但具体某夜用 on：on a cold night。\nnoon/midnight 用 at：at noon。',
        highFreq: '常考：in/on/at 在具体语境的区分。\n常考：带修饰语的 morning/afternoon/evening 用 on。\n常考：at night 与 on a ... night。',
        pastExam: [
          { year: 2022, province: '北京', q: 'We usually have a school trip _____ autumn every year.', options: ['in', 'on', 'at', 'for'], answer: 0, explain: '季节前用 in。' },
          { year: 2020, province: '上海', q: 'The meeting will start _____ the morning of next Monday.', options: ['in', 'on', 'at', 'by'], answer: 1, explain: '具体某天的上午用 on（on the morning of...）。' }
        ]
      },
      {
        title: '方位与方式介词',
        key: true,
        rules: '方位：in（在内部，in the box），on（在表面接触，on the desk），over（在正上方，不接触，over the river），above（在上方，不一定垂直），under（在正下方），below（在下方不一定垂直），between（两者之间），among（三者或以上之间）。方式：by（交通工具/手段，by bus, by hand），with（工具/伴随，write with a pen），in（语言/材料/颜色，in English, in ink），on（通过媒介，on the phone, on TV）。',
        keyPoints: '① in 内部 / on 表面 / over 正上方（不接触）/ above 上方；② by 交通工具无冠词（by car）；③ with 工具，in 语言；④ in the tree（外来）vs on the tree（所生）。',
        example: 'a book on the desk, a bridge over the river, go by bike, write with a pen, in English, in the tree',
        errorProne: 'in/on the tree：鸟在树上用 in the tree（外来），果实长在树上用 on the tree。\nby 后交通工具无冠词：by the car 错误，应为 by car；但 in a car, on the bus 要加冠词。\nover vs above：over 强调垂直正上方且不接触。\nbetween vs among：两者用 between，三者以上用 among。',
        highFreq: '常考：in/on/over/above 辨析。\n常考：by 表交通方式无冠词。\n常考：in the tree 与 on the tree 区别。',
        pastExam: [
          { year: 2023, province: '广东', q: 'There is a picture _____ the wall and a map _____ the wall, too.', options: ['on; on', 'in; on', 'on; in', 'in; in'], answer: 0, explain: '画和地图都贴在墙的表面，用 on the wall。' },
          { year: 2021, province: '浙江', q: 'Look! There is a bird _____ the tree and some apples _____ it.', options: ['on; in', 'in; on', 'in; in', 'on; on'], answer: 1, explain: '鸟是外来的用 in the tree；苹果是树本身长的用 on the tree。' }
        ]
      }
    ]
  },
  {
    topic: '句子成分',
    icon: '🏗️',
    points: [
      {
        title: '主语、谓语、宾语、表语',
        key: true,
        rules: '主语是句子陈述的对象，常由名词、代词、动名词或不定式充当（The boy / He / Swimming is...）；谓语说明主语的动作或状态，由动词充当（eats, runs）；宾语是动作的承受者，位于及物动词或介词后（名/代/动名词/从句，eats an apple）；表语位于系动词（be, look, sound, feel, become, get, turn）之后，说明主语的身份、状态或特征，由形容词、名词、代词等充当。',
        keyPoints: '① 主语=陈述对象，谓语=动作，宾语=承受者，表语=系动词后的状态；② 系动词（be/look/sound/feel）后接形容词作表语，不接副词；③ 宾语在及物动词后。',
        example: 'The boy (主) eats (谓) an apple (宾). / She (主) is (系) a teacher (表). / The soup smells good (表语用形容词).',
        errorProne: '系动词后误用副词：The soup tastes deliciously 错误，应为 tastes delicious（系动词后接形容词）。\n混淆宾语与表语：He became（系）a doctor（表）不是宾语。\n主语缺失：从句或短语作主语时谓语用单数（Swimming is fun）。',
        highFreq: '常考：系动词后接形容词而非副词。\n常考：划分句子成分（主谓宾表）。\n常考：动名词/不定式作主语谓语用单数。',
        pastExam: [
          { year: 2022, province: '山东', q: 'The soup tastes _____. Can I have some more?', options: ['good', 'well', 'badly', 'terribly'], answer: 0, explain: 'taste 为系动词，后接形容词 good。' },
          { year: 2020, province: '河南', q: 'Reading in bed _____ bad for your eyes.', options: ['are', 'is', 'were', 'be'], answer: 1, explain: '动名词短语作主语，谓语用单数 is。' }
        ]
      },
      {
        title: '定语、状语、宾语补足语',
        key: true,
        rules: '定语修饰名词或代词，可由形容词、名词、代词、介词短语、从句充当，分前置（a red car）与后置（the book on the desk, something special）；状语修饰动词、形容词、副词或全句，表时间、地点、原因、方式、程度等（He left yesterday / She sings beautifully）；宾语补足语补充说明宾语的身份或状态，常用于 make, let, have, keep, find, hear 等词后（We made him captain / find it useful）。',
        keyPoints: '① 定语修饰名词（前置或后置）；② 状语表时间/地点/方式/原因；③ 宾补补充说明宾语（make/let/keep/find + 宾 + 形/名）；④ 使役/感官动词后不定式省 to。',
        example: 'The girl in red is my sister. / They kept the room clean. / The boss made the workers work.',
        errorProne: '使役动词后省 to：make sb to do 错误，应为 make sb do（省 to 不定式）。\n感官动词宾补：hear sb doing（正在）/ do（全过程）。\n宾补与双宾混淆：give me a book（双宾）vs make me happy（宾补）。',
        highFreq: '常考：使役动词 make/let/have 后省 to 不定式。\n常考：find/make/keep + 宾语 + 形容词作宾补。\n常考：感官动词 hear/see + 宾 + do/doing。',
        pastExam: [
          { year: 2023, province: '湖北', q: 'The boss made the workers _____ for 12 hours a day.', options: ['work', 'to work', 'working', 'worked'], answer: 0, explain: '使役动词 make 后接省 to 不定式，用 work。' },
          { year: 2021, province: '四川', q: 'I found _____ difficult to learn English well at first.', options: ['it', 'this', 'that', 'one'], answer: 0, explain: 'find it + adj. + to do 中 it 作形式宾语，真正的宾语是 to learn。' }
        ]
      }
    ]
  },
  {
    topic: '句型',
    icon: '📐',
    points: [
      {
        title: '五大基本句型',
        key: true,
        rules: '英语基本句型有五类：① 主谓（S+V，Birds fly.）；② 主谓宾（S+V+O，He sings a song.）；③ 主系表（S+V+P，She is happy.）；④ 主谓双宾（S+V+IO+DO，He gave me a book. 人间接宾+物直接宾）；⑤ 主谓宾补（S+V+O+C，We made him happy. 宾语+补充说明）。判断句型关键是看谓语动词的性质及后续成分。',
        keyPoints: '① 主谓 / 主谓宾 / 主系表 / 主谓双宾 / 主谓宾补；② 双宾：give/send/buy/show + 人 + 物；③ 宾补：make/keep/find + 宾 + 形/名；④ 系动词后接表语。',
        example: 'They arrived. (主谓) / I bought a pen. (主谓宾) / He is a doctor. (主系表) / She sent me a postcard. (双宾) / They elected him monitor. (宾补)',
        errorProne: '双宾与宾补混淆：give me a book（双宾，两个宾语），make me happy（宾补，happy 补说明 me）。\n误把不及物动词当及物：He arrived the station 错误，arrive 不及物，用 arrive at。\n双宾动词误加 to：buy me a book 不是 buy a book to me。',
        highFreq: '常考：判断五大基本句型结构。\n常考：双宾语与复合宾语的区别。\n常考：可接双宾的动词（give, send, buy, show, pass）。',
        pastExam: [
          { year: 2022, province: '天津', q: 'My mother bought _____ a new bike on my birthday.', options: ['I', 'me', 'my', 'mine'], answer: 1, explain: 'buy 可接双宾语，人作间接宾语用宾格 me。' },
          { year: 2020, province: '重庆', q: 'We made _____ our monitor because he is responsible.', options: ['he', 'him', 'his', 'himself'], answer: 1, explain: 'make 后接宾补，宾语用宾格 him，monitor 为宾补。' }
        ]
      },
      {
        title: 'There be 句型',
        key: true,
        rules: 'There be 表示"某地/某时有某物/某人"，主语在 be 之后，遵循"就近原则"（be 动词与最靠近它的主语一致）。时态：一般现在时 there is / are；一般过去时 there was / were；将来时 there is/are going to be 或 there will be；完成时 there have/has been。There be 表"存在"，与 have（表"拥有"）不同，不能混用；将来时不能说 there will have。',
        keyPoints: '① 就近原则（be 与最近主语一致）；② there be 表存在，have 表拥有，不混用；③ 将来时 there will be / is going to be；④ 否定/疑问借助 be。',
        example: 'There is a book and two pens on the desk. / There will be a meeting tomorrow. / There used to be a tree here.',
        errorProne: '就近原则误用：There _____ a pen and two books 用 is（靠近 a pen）。\nthere be 与 have 混淆：There have a book 错误，应为 There is a book 或 I have a book。\n将来时错写：there will have 错误，应为 there will be / is going to be。',
        highFreq: '常考：there be 的就近原则。\n常考：there be 将来时（there will be / is going to be）。\n常考：there be 与 have 的区别。',
        pastExam: [
          { year: 2023, province: '河北', q: 'There _____ a sports meeting in our school next week.', options: ['is going to have', 'is going to be', 'are going to be', 'will have'], answer: 1, explain: 'there be 将来时用 is going to be / will be，不能用 have。' },
          { year: 2021, province: '安徽', q: 'There _____ some milk and two apples on the table.', options: ['is', 'are', 'have', 'has'], answer: 0, explain: '就近原则，靠近 some milk（不可数）用 is。' }
        ]
      }
    ]
  },
  {
    topic: '简单句',
    icon: '✅',
    points: [
      {
        title: '陈述句、疑问句、祈使句、感叹句',
        key: true,
        rules: '简单句按用途分四类：陈述句（叙述事实，含肯定/否定）；疑问句（一般/特殊/选择/反意）；祈使句（表请求、命令、劝告，动词原形开头，否定 Don’t + 动原）；感叹句（What + (a/an) + 形容词 + 名词 + 主谓！/ How + 形容词/副词 + 主谓！）。判断感叹句用 what 还是 how：后有紧跟名词用 what，后紧跟形容词/副词用 how。',
        keyPoints: '① 祈使句原形开头，否定 Don’t do；② 感叹句 What + 名词 / How + 形副；③ weather/news 不可数，What 后无 a；④ 反意疑问前肯后否、前否后肯。',
        example: 'What a beautiful girl (she is)! / How fast he runs! / Don’t be late! / What fine weather!',
        errorProne: 'What/How 混淆：What good news（news 不可数无 a）不是 How；How 后接形容词/副词。\n祈使句否定误加 to：Don’t to be late 错误，Don’t be late。\n不可数误加 a：What a weather 错误，应为 What weather。',
        highFreq: '常考：what/how 引导感叹句的辨析（看后接词性）。\n常考：不可数名词（weather, news, advice）前 What 不加 a。\n常考：祈使句否定式 Don’t + 动原。',
        pastExam: [
          { year: 2022, province: '湖南', q: '_____ fine weather it is today! Let’s go for a walk.', options: ['What', 'What a', 'How', 'How a'], answer: 0, explain: 'weather 不可数，用 What 且不加 a。' },
          { year: 2020, province: '福建', q: '_____ beautiful the sunset is! We should take a photo.', options: ['What', 'What a', 'How', 'How a'], answer: 2, explain: '后紧跟形容词 beautiful，用 How 引导感叹句。' }
        ]
      },
      {
        title: '反意疑问句',
        key: false,
        rules: '反意疑问句由"陈述句 + 简短问句"构成，遵循"前肯后否、前否后肯"原则，且问句的人称、时态、数要与陈述句一致。陈述句含 never, hardly, few, little, nothing 等否定词时视为否定，后用肯定。祈使句附加疑问用 will you（否定式也可用 won’t you）；Let’s 用 shall we，Let us 用 will you。',
        keyPoints: '① 前肯后否、前否后肯，人称时态一致；② 含否定词（never/hardly/few/little）视为否定；③ 祈使句用 will you；④ Let’s 用 shall we，Let us 用 will you。',
        example: 'He is a student, isn’t he? / She seldom goes out, does she? / Let’s go, shall we?',
        errorProne: '否定词视为否定：He hardly eats, doesn’t he? 错误，应为 does he?（hardly 已表否定）。\nLet’s vs Let us：Let’s 包括听话人用 shall we；Let us（不包括）用 will you。\n主语一致：Someone is..., isn’t he/they?（用 they 亦可）。',
        highFreq: '常考：含否定词的"前否后肯"（seldom/hardly/few/little）。\n常考：祈使句附加问句（will you / shall we）。\n常考：主句主语为不定代词时的反意疑问。',
        pastExam: [
          { year: 2023, province: '辽宁', q: 'Let’s go for a walk after dinner, _____ ?', options: ['will you', 'shall we', 'do we', 'don’t we'], answer: 1, explain: 'Let’s 引导的祈使句，附加疑问用 shall we。' },
          { year: 2021, province: '甘肃', q: 'She seldom goes to the movies, _____ ?', options: ['doesn’t she', 'does she', 'is she', 'isn’t she'], answer: 1, explain: 'seldom 为否定词，前否后肯，用 does she。' }
        ]
      }
    ]
  },
  {
    topic: '复合句',
    icon: '📚',
    points: [
      {
        title: '宾语从句',
        key: true,
        rules: '宾语从句在复合句中作宾语，用陈述语序（主语在前，谓语在后）。连词：that（无意义，常可省）、if / whether（是否）、特殊疑问词（what, who, when, where, why, how）。时态：主现从不限；主过从过（主句过去时，从句用相应的过去时态）；客观真理仍用一般现在时。if 与 whether 区别：介词后用 whether，与 or not 连用或表"是否"强调时用 whether。',
        keyPoints: '① 从句用陈述语序（主语+谓语）；② 主现从不限，主过从过；③ that 可省，if/whether 表"是否"；④ 客观真理用一般现在时。',
        example: 'I think (that) he is right. / Could you tell me where the bank is? / He said he was busy. / The teacher told us the earth moves around the sun.',
        errorProne: '语序错误：I don’t know what is he 应改为 what he is（陈述语序）。\n时态错误：He said the sun is 应为 He said the sun was（主过从过），但客观真理用 moves。\nif/whether 混淆：I worry about whether... 介词后用 whether，不用 if。',
        highFreq: '常考：宾语从句用陈述语序。\n常考：主过从过（时态一致）。\n常考：if 与 whether 的选择（介词/或 or not 用 whether）。',
        pastExam: [
          { year: 2022, province: '江苏', q: 'Could you tell me _____ ? I want to visit it.', options: ['where is the museum', 'where the museum is', 'the museum is where', 'where is museum'], answer: 1, explain: '宾语从句必须用陈述语序 where the museum is。' },
          { year: 2020, province: '广东', q: 'He said he _____ a good time at the party last night.', options: ['has', 'have', 'had', 'will have'], answer: 2, explain: '主句 said 为过去时，从句相应用过去时 had（主过从过）。' }
        ]
      },
      {
        title: '定语从句（关系代词）',
        key: true,
        rules: '定语从句修饰名词或代词（先行词）。关系代词：who / that 指人（作主语或宾语），which / that 指物，whose 表所属（人/物均可）。关系代词在从句中作宾语时可省略；作主语时不可省。只能用 that 的情况：先行词为不定代词（something, anything）、被序数词/形容词最高级修饰、既有人又有物。非限制性定语从句（逗号隔开）只用 which，不用 that。',
        keyPoints: '① 人用 who/that，物用 which/that，所属用 whose；② 宾语可省关系代词，主语不可省；③ 不定代词/最高级/有人有物用 that；④ 非限制性定语从句用 which。',
        example: 'The girl who is standing there is my friend. / The book (that) I bought is interesting. / The man whose car was stolen called the police.',
        errorProne: '关系代词误用：The book who... 错误，物用 which/that。\n作宾语误保留：The book which I bought it 中 it 多余（关系代词已作宾语）。\n非限制性从句用 that：错，应用 which。\n最高级后误用 which：the best book which 应为 that。',
        highFreq: '常考：who/which/that 的选用。\n常考：that 的特殊用法（不定代词、最高级、人+物）。\n常考：关系代词作宾语可省略。',
        pastExam: [
          { year: 2023, province: '北京', q: 'The woman _____ is talking with your mother is my aunt.', options: ['which', 'who', 'whom', 'whose'], answer: 1, explain: '先行词是人且在从句中作主语，用 who。' },
          { year: 2021, province: '上海', q: 'This is the most interesting book _____ I have ever read.', options: ['which', 'who', 'that', 'what'], answer: 2, explain: '先行词被最高级修饰，关系代词用 that。' }
        ]
      },
      {
        title: '状语从句',
        key: true,
        rules: '状语从句修饰主句，按意义分：时间（when, while, as, as soon as, since, until）、条件（if, unless, as long as）、原因（because, since, as）、让步（although / though, even though）、目的（so that）、结果（so...that, such...that）。条件/时间状语从句遵循"主将从现"（主句将来时，从句一般现在时）。unless = if not（除非）。although / though 不能与 but 连用。',
        keyPoints: '① 时间/条件状语从句"主将从现"；② unless = if not；③ although/though 不与 but 连用；④ so...that / such...that 表结果。',
        example: 'I will go if it doesn’t rain. / He was reading while I was watching TV. / Although it rained, we went out.',
        errorProne: '主将从现违反：I will call you when I will arrive 错误，从句用 arrive。\nunless 误解：Unless you hurry = If you don’t hurry。\nalthough 与 but 同句：Although...but... 错误，删 but。\nso/such 混淆：so + 形/副，such + (a/an) + 形 + 名。',
        highFreq: '常考：时间/条件状语从句"主将从现"。\n常考：unless 的含义与转换。\n常考：让步状语从句不与 but 连用。',
        pastExam: [
          { year: 2022, province: '浙江', q: '_____ it was raining heavily, they still went to school on time.', options: ['Because', 'Although', 'If', 'When'], answer: 1, explain: '前后转折，用 Although（不与 but 连用）。' },
          { year: 2020, province: '山东', q: 'We will go for a picnic _____ it is fine this Sunday.', options: ['if', 'unless', 'though', 'because'], answer: 0, explain: '条件状语从句，主将从现，用 if（如果天晴就去）。' }
        ]
      }
    ]
  },
  {
    topic: '动词',
    icon: '🏃',
    points: [
      {
        title: '动词分类与情态动词',
        key: true,
        rules: '英语动词分四类：实义动词（表动作/状态，及物或不及物）、系动词（be, look, sound, smell, taste, feel, become, get, turn, seem）、助动词（be, do, have, will 帮助构成时态/疑问/否定）、情态动词（can, may, must, should, need, shall 表能力/许可/必须/建议）。情态动词特点：后接动词原形；无人称和数的变化（He can 不是 cans）；否定直接加 not；疑问提前。',
        keyPoints: '① 实义/系/助/情态四类；② 情态动词后接原形，无人称变化；③ must 否定回答用 needn’t / don’t have to；④ can’t 表"不可能"（推测）。',
        example: 'He can swim. / She looks tired. / They will come. / Do you like it? / You must be careful.',
        errorProne: '情态动词后误加 s/ing：He can swims 错误，用 can swim。\nmust 否定回答：Must I...? — No, you mustn’t（禁止）误用，应为 needn’t（不必）。\n推测用法：He can’t be at home（不可能），must be（一定）。',
        highFreq: '常考：情态动词后接动词原形。\n常考：must 提问的否定回答用 needn’t。\n常考：can/could 表请求，may 表许可。',
        pastExam: [
          { year: 2023, province: '天津', q: '— Must I finish the work today? — No, you _____.', options: ['mustn’t', 'can’t', 'needn’t', 'may not'], answer: 2, explain: 'must 引导的一般疑问句，否定回答用 needn’t（不必）。' },
          { year: 2021, province: '重庆', q: 'The book _____ be Lily’s. Her name is on the cover.', options: ['can', 'must', 'can’t', 'needn’t'], answer: 1, explain: '上有名字，表肯定推测用 must（一定）。' }
        ]
      },
      {
        title: '非谓语动词（to do / doing）',
        key: true,
        rules: '非谓语动词不作谓语，常见不定式 to do 和动名词 doing。后接 to do：want, hope, decide, plan, learn, agree, refuse, expect, would like；后接 doing：enjoy, finish, mind, practice, keep, suggest, consider, give up；后接 to do / doing 意义不同：stop to do（停下去做另一件）/ stop doing（停止做），remember / forget 后 to do（未做）/ doing（已做）；介词后接 doing。',
        keyPoints: '① 接 to do：want/hope/decide/plan/learn；② 接 doing：enjoy/finish/mind/practice/keep；③ stop/remember 后 to do 与 doing 意义不同；④ 介词后接 doing。',
        example: 'I want to go. / She enjoys reading. / It’s important to learn English. / He stopped to smoke.（停下去抽烟）',
        errorProne: '固定搭配错：practice to do 错误，practice doing。\nstop 混淆：stop to talk（停下来去说话）vs stop talking（停止说话）。\n介词后接原形：He is good at play 错误，at 后接 playing。\nwould like 后误用 doing：would like doing 错，用 to do。',
        highFreq: '常考：固定搭配接 to do 还是 doing。\n常考：stop / remember / forget 后 to do 与 doing 的区别。\n常考：介词后接 doing。',
        pastExam: [
          { year: 2022, province: '湖北', q: 'My grandfather practices _____ Tai Chi every morning.', options: ['play', 'to play', 'playing', 'played'], answer: 2, explain: 'practice 后接动名词 doing，用 playing。' },
          { year: 2020, province: '四川', q: 'He stopped _____ because he was too tired.', options: ['to work', 'working', 'work', 'works'], answer: 1, explain: '太累了所以停止工作，用 stop doing（停止做）。' }
        ]
      }
    ]
  },
  {
    topic: '动词时态',
    icon: '⏰',
    points: [
      {
        title: '一般现在时与一般过去时',
        key: true,
        rules: '一般现在时：表习惯性、经常性动作、客观真理、现状；主语三单时动词加 -s/-es（goes, watches, studies）；句型借助 do/does 提问否定。一般过去时：表过去某个时间发生的动作或状态；规则动词加 -ed，不规则动词需记忆（go→went, eat→ate, see→saw, take→took, come→came, write→wrote）；be 动词过去式 was/were。时间状语是判断时态的关键：often/usually/always/every day → 一般现在；yesterday/last week/in 2020/ago → 一般过去。',
        keyPoints: '① 一般现在三单加 -s/-es；② 一般过去规则加 -ed，不规则强记；③ 状语判断：often→现，yesterday→过；④ be 过去式 was/were。',
        example: 'He often goes to school by bike. / I visited my grandma yesterday. / She was a teacher two years ago.',
        errorProne: '三单漏 s：He go 错误，He goes。\n不规则过去式错写：goed, eated 错误，应为 went, ate。\n时间状语与时态不符：Yesterday he goes 错误，用 went。\nbe 过去式：I were 错误，I was。',
        highFreq: '常考：第三人称单数变化。\n常考：时间状语判断时态。\n常考：不规则动词过去式（go/went, see/saw, eat/ate）。',
        pastExam: [
          { year: 2023, province: '河南', q: 'Tom _____ to school on foot every day.', options: ['go', 'goes', 'went', 'going'], answer: 1, explain: 'every day 用一般现在时，三单 goes。' },
          { year: 2021, province: '安徽', q: 'I _____ a movie with my friends last weekend.', options: ['see', 'sees', 'saw', 'seen'], answer: 2, explain: 'last weekend 用一般过去时，see 的过去式 saw。' }
        ]
      },
      {
        title: '一般将来时',
        key: true,
        rules: '一般将来时表示将来要发生的动作或状态。两种构成：will + 动词原形（表示临时决定、预测、意愿）；be going to + 动词原形（表示事先计划、打算，或有明显迹象即将发生）。There be 的将来时：there will be / there is going to be。在 if / when / as soon as 等引导的条件/时间状语从句中，遵循"主将从现"，从句用一般现在时表将来。',
        keyPoints: '① will do（临时/预测）vs be going to do（计划/迹象）；② there will be / is going to be；③ 条件/时间状语从句"主将从现"；④ be 动词主语决定 is/are。',
        example: 'I will help you. / Look at the clouds! It is going to rain. / We will have a picnic if it is fine.',
        errorProne: '主将从现违反：If it will rain... 错误，从句用 rains。\nbe going to 主语一致：They is going to 错误，They are going to。\nthere be 将来时错写：there will have 错误，用 there will be。',
        highFreq: '常考：will 与 be going to 的区别。\n常考：if / as soon as 引导从句"主将从现"。\n常考：there be 的将来时表达。',
        pastExam: [
          { year: 2022, province: '河北', q: 'We _____ a picnic if it is fine tomorrow.', options: ['will have', 'have', 'had', 'has'], answer: 0, explain: 'if 条件句主将从现，主句用 will have。' },
          { year: 2020, province: '福建', q: 'Look at the dark clouds! It _____ rain soon.', options: ['will', 'is going to', 'is going', 'going to'], answer: 1, explain: '有乌云作迹象，用 be going to 表即将发生。' }
        ]
      },
      {
        title: '现在进行时与现在完成时',
        key: true,
        rules: '现在进行时：am/is/are + 现在分词（doing），表此时此刻正在发生，或与 now / look / listen 连用；也可表将来已安排的事（go/come/leave）。现在完成时：have/has + 过去分词（done），表过去发生的事对现在造成的影响或结果，常与 already, yet, ever, never, just, since, for 连用。for + 时间段，since + 时间点。短暂性动词（die, leave, buy, begin）不与 for/since 连用，需转换为状态（be dead, be away, have）。',
        keyPoints: '① 现在进行时 am/is/are + doing（看 now/look）；② 现在完成时 have/has done（already/yet/for/since）；③ for + 段，since + 点；④ 短暂动词转状态（die→be dead）。',
        example: 'Look! She is dancing. / I have lived here for 10 years. / Have you finished yet? / He has gone to the library.',
        errorProne: 'for/since 混淆：for 2019 错误，应为 since 2019（点）；for ten years 正确（段）。\n短暂动词误接 for：He has died for 3 years 错误，用 He has been dead for 3 years。\nhas gone vs has been：has gone to（去了未回）vs has been to（去过已回）。',
        highFreq: '常考：for 与 since 的区别（段 vs 点）。\n常考：短暂性动词与 for/since 连用需转状态。\n常考：has gone to 与 has been to 的区别。',
        pastExam: [
          { year: 2023, province: '江苏', q: '— Where is Tom? — He _____ to the library.', options: ['has gone', 'has been', 'goes', 'went'], answer: 0, explain: 'has gone to 表示去了未回；has been to 表示去过已回。' },
          { year: 2021, province: '广东', q: 'The old man _____ for ten years. We still miss him.', options: ['died', 'has died', 'has been dead', 'dies'], answer: 2, explain: 'for ten years 表段，短暂动词 die 需转为 be dead 用现在完成时 has been dead。' }
        ]
      }
    ]
  },
  {
    topic: '动词语态',
    icon: '♻️',
    points: [
      {
        title: '被动语态的构成',
        key: true,
        rules: '被动语态表示主语是动作的承受者，结构为"be + 过去分词(done)"。各时态形式：一般现在时 am/is/are done；一般过去时 was/were done；一般将来时 will be done / am-is-are going to be done；含情态动词 can/must/should be done；现在完成时 have/has been done；现在进行时 am/is/are being done。by 短语引出动作执行者（可省略）。不及物动词（happen, occur, break out, take place, appear）无被动语态。',
        keyPoints: '① 结构 be + done；② 时态由 be 体现（am/is/are/was/were/will be）；③ 情态动词 can/must be done；④ 不及物动词无被动（happen 等）。',
        example: 'English is spoken widely. / The book was written by Lu Xun. / The work must be finished today. / The window was broken.',
        errorProne: '漏 be 动词：The book written by... 错误，被动必须有 be（was written）。\n不及物误用被动：The accident was happened 错误，happen 无被动。\n时态 be 错：The letter is wrote 错误，用 was written（过去）。\nby 后执行者用宾格：by he 错误，by him。',
        highFreq: '常考：被动语态结构识别（be + done）。\n常考：无被动的动词（happen, take place, break out）。\n常考：情态动词被动 can/must be done。',
        pastExam: [
          { year: 2022, province: '山东', q: 'The window _____ yesterday, so it is very cold now.', options: ['broke', 'was broken', 'is broken', 'breaks'], answer: 1, explain: 'yesterday 用过去时被动 was broken。' },
          { year: 2020, province: '湖南', q: 'The book _____ by many students every year.', options: ['reads', 'is read', 'was read', 'has read'], answer: 1, explain: 'every year 用一般现在时被动 is read。' }
        ]
      },
      {
        title: '不同时态的被动及主动表被动',
        key: true,
        rules: '进行时被动 am/is/are being done；完成时被动 have/has been done；将来时被动 will be done。某些结构主动形式表被动意义：need / want / require + doing = 被动（The car needs washing = needs to be washed）；worth + doing 含被动义（worth reading）；连系动词 look / smell / taste / feel + 形容词，主动表状态（The food tastes good）；open, close, write, sell 等连系用法（The door opens easily）。',
        keyPoints: '① 进行/完成/将来被动的 be 形式；② need doing = need to be done（主动表被动）；③ worth doing 含被动；④ 感官/连系动词主动表被动。',
        example: 'The house is being built. / The food tastes good. / The car needs washing (= to be washed). / The book is worth reading.',
        errorProne: 'need doing 误解：The car needs to wash 错误（车被洗），应为 needs washing / to be washed。\nworth 后误用被动：worth to be read 错误，worth reading。\n感官动词后误用被动：The soup is tasted good 错误，taste 主动表状态。',
        highFreq: '常考：need doing 表被动（= need to be done）。\n常考：worth doing 含被动意义。\n常考：进行时/完成时被动结构。',
        pastExam: [
          { year: 2023, province: '湖北', q: 'The flowers need _____. Let’s water them now.', options: ['water', 'to water', 'watering', 'watered'], answer: 2, explain: 'need doing = need to be done，主动表被动，用 watering。' },
          { year: 2021, province: '四川', q: 'The book is _____ reading. It’s very helpful.', options: ['worth', 'worthy', 'well', 'worthy of'], answer: 0, explain: 'be worth doing 含被动意义，用 worth reading。' }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = grammarData;
}
