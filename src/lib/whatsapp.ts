import { site } from "@/data/site";

const GREETING = "Здравствуйте! Пишу вам с сайта V SOLO.";

/** Ссылка в чат WhatsApp клуба с предзаполненным текстом. */
export function waLink(text: string): string {
  return `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

/** Все кнопки «Написать в WhatsApp» и QR-код. */
export const waBookingLink = waLink(`${GREETING} Хочу забронировать место.`);
