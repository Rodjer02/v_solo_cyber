export type ZoneKey = "hall" | "vip";

export type TariffRow = {
  /** Метка в квадратике на мобиле. */
  tag: string;
  /** Иконка на десктопе; null = квадратик с меткой. */
  icon: "clock" | "moon" | null;
  kz: string;
  ru: string;
  /** Цена в тенге. null = ещё не заполнена, показывается «[цена]». */
  price: number | null;
  hours: number;
};

export type Zone = {
  key: ZoneKey;
  label: string;
  title: string;
  rows: TariffRow[];
};

// TODO: цены VIP room — заглушки из макета.
export const ZONES: Zone[] = [
  {
    key: "hall",
    label: "ОБЩИЙ ЗАЛ",
    title: "Общий зал",
    rows: [
      { tag: "1ч", icon: "clock", kz: "1 сағат", ru: "1 час", price: 800, hours: 1 },
      { tag: "2+", icon: null, kz: "2 + 1 сағат", ru: "2 + 1 час", price: 1600, hours: 3 },
      { tag: "5ч", icon: "clock", kz: "5 сағат", ru: "5 часов", price: 2400, hours: 5 },
      { tag: "☾", icon: "moon", kz: "Түн 22:00 – 07:00", ru: "Ночь 22:00 – 07:00", price: 3000, hours: 9 },
    ],
  },
  {
    key: "vip",
    label: "VIP ROOM",
    title: "VIP ROOM",
    rows: [
      { tag: "1ч", icon: "clock", kz: "1 сағат", ru: "1 час", price: null, hours: 1 },
      { tag: "2+", icon: null, kz: "2 + 1 сағат", ru: "2 + 1 час", price: null, hours: 3 },
      { tag: "5ч", icon: "clock", kz: "5 сағат", ru: "5 часов", price: null, hours: 5 },
      { tag: "☾", icon: "moon", kz: "Түн 22:00 – 07:00", ru: "Ночь 22:00 – 07:00", price: null, hours: 9 },
    ],
  },
];

/** [пополнение, бонус] в тенге. */
export const BONUS_TIERS: ReadonlyArray<readonly [number, number]> = [
  [3000, 1000],
  [4000, 1500],
  [5000, 2500],
  [10000, 5000],
];

export type Rule = { code: string; icon: "table" | "speaker" | "trash"; text: string };

export const RULES: Rule[] = [
  { code: "RULE_01", icon: "table", text: "Не бей по столу — он не виноват" },
  { code: "RULE_02", icon: "speaker", text: "Не ори на комп — он старается" },
  { code: "RULE_03", icon: "trash", text: "Мусор в урну — секретный способ прокачать уважение" },
];

export const STEPS = ["Напиши время и сколько вас", "Получи подтверждение в чате", "Приходи и сразу в игру"];

export type ChatMessage = { from: "me" | "them"; text: string; delay: string; time?: string };

export const CHAT: ChatMessage[] = [
  { from: "me", text: "Привет! Хочу 2 места на сегодня в 20:00", delay: ".2s", time: "19:42" },
  { from: "me", text: "Общий зал, пакет 5 часов", delay: "1.2s" },
  { from: "them", text: "Привет! Закрепили 2 места рядом", delay: "2.4s" },
  { from: "them", text: "Ждём к 20:00 в V SOLO", delay: "3.4s" },
];

export const HERO_STATS = [
  { label: "PRICE / 1H", value: "800 тг", pink: false },
  { label: "NIGHT MODE", value: "22–07", pink: false },
  { label: "MAX BONUS", value: "+5 000", pink: true },
];
