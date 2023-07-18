export type AnswerType = {
  text: string;
  point: number;
};

export interface QuizDataType {
  id: string;
  num: number;
  question: string;
  answers: AnswerType[];
  isLastQuestion?: boolean;
}

const quizData: QuizDataType[] = [
  {
    id: "q1",
    num: 1,
    question: "کدامیک از شخصیت‌های زیر جزء خدایان المپی نیست",
    answers: [
      { text: "آپولو", point: 0 },
      { text: "هلیوس", point: 1 },
      { text: "آرتمیس", point: 0 },
      { text: "هرمس", point: 0 },
    ],
  },
  {
    id: "q2",
    num: 2,
    question: "در رگناروک در اساطیر نورس، تور خدای رعد به دست چه کسی کشته میشه",
    answers: [
      { text: "لوکی", point: 0 },
      { text: "فنریر", point: 0 },
      { text: "یورماگاندر", point: 1 },
      { text: "هل", point: 0 },
    ],
  },
  {
    id: "q3",
    num: 3,
    question: "گاوهای بالدار محافظ درها و دروازه ها در اساطیر میان رودان",
    answers: [
      { text: "پازوزو", point: 0 },
      { text: "لاماسو", point: 1 },
      { text: "نینسون", point: 0 },
      { text: "انکیدو", point: 0 },
    ],
  },
  {
    id: "q4",
    num: 4,
    question: "خدای خورشید و جنگ در اساطیر آزتک‌ها",
    answers: [
      { text: "تزکاتلیپوکا", point: 0 },
      { text: "کتزال کوآتل", point: 0 },
      { text: "میتکلان", point: 0 },
      { text: "ویتزیلوپوچتلی", point: 1 },
    ],
  },
  {
    id: "q5",
    num: 5,
    question:
      "هرکول در اولین خوان از دوازده خوان خود با کدامیک از موجودات زیر روبرو شد",
    answers: [
      { text: "هیدرای لرنیائی", point: 0 },
      { text: "پرندگان استیمفالیا", point: 0 },
      { text: "شیر نیمیائی", point: 1 },
      { text: "گاومیش کِرِتی", point: 0 },
    ],
  },
  {
    id: "q6",
    num: 6,
    question: "کدامیک جزء سه خدای اصلی دین هندو نیست",
    answers: [
      { text: "ویشنو", point: 0 },
      { text: "گانش", point: 1 },
      { text: "شیوا", point: 0 },
      { text: "برهما", point: 0 },
    ],
  },
  {
    id: "q7",
    num: 7,
    question: "خدایی بدون دست راست",
    answers: [
      { text: "تیر", point: 1 },
      { text: "هفاستوس", point: 0 },
      { text: "اودین", point: 0 },
      { text: "آماتراسو", point: 0 },
    ],
  },
  {
    id: "q8",
    num: 8,
    question: "خدای آبها، خرد و خلقت در اساطیر بین‌النهرین",
    answers: [
      { text: "انکیدو", point: 0 },
      { text: "انلیل", point: 0 },
      { text: "انکی", point: 1 },
      { text: "اینانا", point: 0 },
    ],
  },
  {
    id: "q9",
    num: 9,
    question: "مده‌آ، خدمتگذار و کاهن معبد کدام الهه بود",
    answers: [
      { text: "هکاته", point: 1 },
      { text: "آتنا", point: 0 },
      { text: "دیمیتر", point: 0 },
      { text: "آرتمیس", point: 0 },
    ],
  },
  {
    id: "q10",
    num: 10,
    question: "سه خواهر تقدیر و سرنوشت در اساطیر نورس",
    answers: [
      { text: "مویرای", point: 0 },
      { text: "نورن", point: 1 },
      { text: "والکری", point: 0 },
      { text: "باخائه", point: 0 },
    ],
  },
  {
    id: "q11",
    num: 11,
    question: "بانوی هزارتو",
    answers: [
      { text: "آئترا", point: 0 },
      { text: "سیرسه", point: 0 },
      { text: "آریادنه", point: 1 },
      { text: "سایکی", point: 0 },
    ],
  },
  {
    id: "q12",
    num: 12,
    question: "اولین پادشاهی که در افسانه‌های آرتوری کل بریتانیا رو متحد کرد",
    answers: [
      { text: "کنستانتین", point: 1 },
      { text: "اوتر", point: 0 },
      { text: "آرتور", point: 0 },
      { text: "ادوارد", point: 0 },
    ],
  },
  {
    id: "q13",
    num: 13,
    question: "درخت زندگی",
    answers: [
      { text: "ایگدرازیل", point: 1 },
      { text: "بانیان", point: 0 },
      { text: "سوما", point: 0 },
      { text: "سرو", point: 0 },
    ],
  },
  {
    id: "q14",
    num: 14,
    question: "معبد بزرگ پیشگویان آپولو",
    answers: [
      { text: "پانتئون", point: 0 },
      { text: "دلفی", point: 1 },
      { text: "پالمیرا", point: 0 },
      { text: "پارتنون", point: 0 },
    ],
  },
  {
    id: "q15",
    num: 15,
    question: "در اساطیر مصر به انسانها خوندن و نوشتن یاد داد",
    answers: [
      { text: "آنوبیس", point: 0 },
      { text: "آمون", point: 0 },
      { text: "تحوت", point: 1 },
      { text: "خنوم", point: 0 },
    ],
  },
  {
    id: "q16",
    num: 16,
    question: "سر بریده سخنگو در اساطیر نورس",
    answers: [
      { text: "ایمیر", point: 0 },
      { text: "میمیر", point: 0 },
      { text: "تیر", point: 1 },
      { text: "فنریر", point: 0 },
    ],
  },
  {
    id: "q17",
    num: 17,
    question: "موجودی که گل جوانی را از گیلگمش دزدید",
    answers: [
      { text: "مار", point: 1 },
      { text: "اسب", point: 0 },
      { text: "گاو", point: 0 },
      { text: "کبوتر", point: 0 },
    ],
  },
  {
    id: "q18",
    num: 18,
    question: "همتای هفاستوس یونانی در اساطیر روم",
    answers: [
      { text: "وُلکان", point: 1 },
      { text: "مرکوری", point: 0 },
      { text: "ژوپیتر", point: 0 },
      { text: "مرکوری", point: 0 },
    ],
  },
  {
    id: "q19",
    num: 19,
    question: "جنبه جسمانی وجود انسان در باورهای مذهبی مردم نورس",
    answers: [
      { text: "هوگر", point: 0 },
      { text: "هامر", point: 1 },
      { text: "فیلگیا", point: 0 },
      { text: "هامینگیا", point: 0 },
    ],
  },
  {
    id: "q20",
    num: 20,
    question: "خدای مرگ در اساطیر هندو",
    answers: [
      { text: "شیوا", point: 0 },
      { text: "واک", point: 0 },
      { text: "گانش", point: 0 },
      { text: "یاما", point: 1 },
    ],
    isLastQuestion: true,
  },
];

export default quizData;
