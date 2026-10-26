/** 1600 -> «1 600 тг» */
export function tg(n: number): string {
  return `${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} тг`;
}

/** Подпись «≈ 533 тг/час» для пакета; пусто для одного часа или без цены. */
export function perHour(price: number | null, hours: number): string {
  if (price === null || hours <= 1) return "";
  const p = price / hours;
  return `${Number.isInteger(p) ? "" : "≈ "}${tg(p)}/час`;
}
