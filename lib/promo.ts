// lib/promo.ts

type PromoConfig = {
  name: string;
  discountPercent: number;
  start: Date;
  end: Date;
};

const PROMO_ENABLED = false;
const DISCOUNT_PERCENT = 0;

function getPromoWindow(baseDate = new Date()) {
  const year = baseDate.getFullYear();
  const currentYearStart = new Date(year, 4, 4, 0, 0, 0);
  const currentYearEnd = new Date(year, 4, 10, 23, 59, 59);

  if (baseDate <= currentYearEnd) {
    return { start: currentYearStart, end: currentYearEnd };
  }

  return {
    start: new Date(year + 1, 4, 4, 0, 0, 0),
    end: new Date(year + 1, 4, 10, 23, 59, 59),
  };
}

export function getPromoInfo(date = new Date()): PromoConfig {
  const { start, end } = getPromoWindow(date);
  return {
    name: "Colorea tu invierno",
    discountPercent: PROMO_ENABLED ? DISCOUNT_PERCENT : 0,
    start,
    end,
  };
}

export function isPromoActive(date = new Date()): boolean {
  if (!PROMO_ENABLED) return false;
  const { start, end } = getPromoInfo(date);
  return date >= start && date <= end;
}

export function getPromoPrice(basePrice: number, date = new Date()): number {
  if (!isPromoActive(date)) return basePrice;

  const discount = (basePrice * DISCOUNT_PERCENT) / 100;
  return Math.round(basePrice - discount);
}
