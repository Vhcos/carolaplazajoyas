// lib/promo.ts

type PromoConfig = {
  name: string;
  discountPercent: number;
  start: Date;
  end: Date;
};

// Día de la Madre Chile: segundo domingo de mayo (11 may 2026)
const AMOR_PROMO: PromoConfig = {
  name: "Día de la Madre 2026",
  discountPercent: 10,
  // meses base 0 (4 = mayo)
  start: new Date(2026, 4, 4, 0, 0, 0),
  end: new Date(2026, 4, 11, 23, 59, 59),
};

export function isAmorPromoActive(date = new Date()): boolean {
  const { start, end } = AMOR_PROMO;
  return date >= start && date <= end;
}

export function getAmorPrice(basePrice: number, date = new Date()): number {
  if (!isAmorPromoActive(date)) return basePrice;

  const discount = (basePrice * AMOR_PROMO.discountPercent) / 100;
  return Math.round(basePrice - discount);
}

export function getAmorPromoInfo() {
  return AMOR_PROMO;
}
