// lib/promo.ts

type PromoConfig = {
  name: string;
  discountPercent: number;
  start: Date;
  end: Date;
};

const NAVIDAD_PROMO: PromoConfig = {
  name: "Navidad 2025",
  discountPercent: 10,
  // Ojo: meses base 0 (11 = diciembre)
  start: new Date(2025, 11, 8, 0, 0, 0),
  end: new Date(2025, 11, 12, 23, 59, 59),
};

export function isNavidadPromoActive(date = new Date()): boolean {
  const { start, end } = NAVIDAD_PROMO;
  return date >= start && date <= end;
}

export function getNavidadPrice(
  basePrice: number,
  date = new Date()
): number {
  if (!isNavidadPromoActive(date)) return basePrice;

  const discount = (basePrice * NAVIDAD_PROMO.discountPercent) / 100;
  // Redondeo a entero CLP
  return Math.round(basePrice - discount);
}

// Útil para mostrar textos en el banner
export function getNavidadPromoInfo() {
  return NAVIDAD_PROMO;
}
