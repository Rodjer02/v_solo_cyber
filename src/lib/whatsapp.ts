import { site } from "@/data/site";

const GREETING = "Здравствуйте! Пишу вам с сайта V SOLO.";

/** Ссылка в чат WhatsApp клуба с предзаполненным текстом. Без номера — «#». */
export function waLink(text: string): string {
  if (!site.whatsappPhone) return "#";
  return `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

/** Все кнопки «Написать в WhatsApp». */
export const waBookingLink = waLink(`${GREETING} Хочу забронировать место.`);
