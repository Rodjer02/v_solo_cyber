/**
 * Единая точка правды для контактов и SEO.
 * Значения в [скобках] — заглушки из макета: показываются на сайте, но не попадают в schema.org.
 */

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vsolo.kz").replace(/\/$/, "");

export const site = {
  name: "Cyber Club V SOLO",
  shortName: "V SOLO",
  url: SITE_URL,

  // TODO: номер WhatsApp клуба без «+», например "77001234567". Пусто = кнопки ведут на «#».
  whatsappPhone: "",

  // TODO: телефон для отображения, например "+7 700 123 45 67".
  phone: "[Телефон]",
  // TODO: адрес и город.
  address: "[Адрес клуба]",
  city: "",
  // TODO: режим работы для показа и для schema.org ("Mo-Su 10:00-07:00").
  hours: "[Часы работы]",
  openingHours: [] as string[],

  social: {
    // TODO: ссылки на Instagram и карточку 2ГИС.
    instagram: "#",
    twoGis: "#",
  },

  seo: {
    title: "Cyber Club V SOLO — игровой клуб: общий зал и VIP room от 800 тг/час",
    description:
      "Киберклуб V SOLO: игровые ПК в общем зале и VIP room. Час — 800 тг, пакеты 2+1 и 5 часов, ночь 22:00–07:00 за 3 000 тг. Пополняй аккаунт и получай бонусы до +5 000 тг. Бронь мест в WhatsApp.",
    keywords: [
      "V SOLO",
      "Cyber Club V SOLO",
      "компьютерный клуб",
      "киберклуб",
      "игровой клуб",
      "VIP room",
      "ночной пакет",
      "бонусы за пополнение",
    ],
  },
} as const;

/** «[Телефон]», «[Адрес клуба]» и пустые строки — ещё не заполнено. */
export const isPlaceholder = (v: string): boolean => v === "" || /^\[.*\]$/.test(v);

/** tel: ссылка из отображаемого телефона, если он заполнен. */
export const phoneHref = isPlaceholder(site.phone) ? "" : `tel:${site.phone.replace(/[^\d+]/g, "")}`;

export const NAV = [
  { href: "#tariffs", label: "Тарифы" },
  { href: "#bonus", label: "Бонусы" },
  { href: "#rules", label: "Правила" },
  { href: "#contact", label: "Контакты" },
] as const;
