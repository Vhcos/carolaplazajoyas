// lib/promo.ts

// Período de promo Navidad 2025: 8 al 13 de diciembre
export function isNavidadPromoActive(date = new Date()) {
  const start = new Date(2025, 11, 8); // mes 11 = diciembre
  const end = new Date(2025, 11, 13, 23, 59, 59);

  return date >= start && date <= end;
}

// Devuelve el precio final (con 15% de descuento si aplica)
export function getNavidadPrice(basePrice: number, date = new Date()) {
  if (!isNavidadPromoActive(date)) return basePrice;
  return Math.round(basePrice * 0.85); // 15% descuento
}
