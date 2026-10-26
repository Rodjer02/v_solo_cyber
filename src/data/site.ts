/**
 * Единая точка правды для контактов и SEO.
 * Значения в [скобках] — заглушки: показываются на сайте, но не попадают в schema.org.
 */

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vsolo.kz").replace(/\/$/, "");

/** Карточка клуба в 2ГИС — из кода виджета «Поделиться → Виджет». */
const twoGis = {
  city: "nur_sultan",
  firmId: "70000001078909605",
  lat: 51.15007670991285,
  lon: 71.50676965713502,
  zoom: 16,
};

export const site = {
  name: "Cyber Club V SOLO",
  shortName: "V SOLO",
  url: SITE_URL,

  /** Номер для wa.me без «+». */
  whatsappPhone: "77780988258",
  phone: "+7 778 098 82 58",

  // Адрес и режим — по карточке 2ГИС.
  address: "Габидена Мустафина 12, 1 этаж",
  city: "Астана",
  hours: "Ежедневно 12:00 – 07:00",
  openingHours: ["Mo-Su 12:00-07:00"] as string[],

  geo: { lat: twoGis.lat, lon: twoGis.lon },

  social: {
    // TODO: ссылка на Instagram клуба.
    instagram: "#",
    twoGis: `https://2gis.kz/${twoGis.city}/firm/${twoGis.firmId}`,
    twoGisRoute: `https://2gis.kz/${twoGis.city}/center/${twoGis.lon},${twoGis.lat}/zoom/${twoGis.zoom}/routeTab/rsType/bus/to/${twoGis.lon},${twoGis.lat}${encodeURIComponent("╎V Solo Cyber")}`,
  },

  /** iframe карты 2ГИС в контактах. */
  mapEmbedUrl: `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(
    JSON.stringify({ pos: { lat: twoGis.lat, lon: twoGis.lon, zoom: twoGis.zoom }, opt: { city: twoGis.city }, org: twoGis.firmId }),
  )}`,

  seo: {
    title: "Cyber Club V SOLO — компьютерный клуб в Астане: общий зал и VIP room от 800 тг/час",
    description:
      "Киберклуб V SOLO в Астане, Габидена Мустафина 12. Игровые ПК в общем зале и VIP room: час — 800 тг, ночь 22:00–07:00 — 3 000 тг. Бонусы за пополнение до +5 000 тг. Ежедневно 12:00–07:00, бронь в WhatsApp.",
    keywords: [
      "V SOLO",
      "Cyber Club V SOLO",
      "компьютерный клуб Астана",
      "киберклуб Астана",
      "игровой клуб Астана",
      "Габидена Мустафина 12",
      "VIP room",
      "ночной пакет",
    ],
  },
} as const;

/** «[Телефон]» и пустые строки — ещё не заполнено. */
export const isPlaceholder = (v: string): boolean => v === "" || /^\[.*\]$/.test(v);

/** tel: ссылка из отображаемого телефона. */
export const phoneHref = isPlaceholder(site.phone) ? "" : `tel:${site.phone.replace(/[^\d+]/g, "")}`;

export const NAV = [
  { href: "#tariffs", label: "Тарифы" },
  { href: "#bonus", label: "Бонусы" },
  { href: "#rules", label: "Правила" },
  { href: "#contact", label: "Контакты" },
] as const;
