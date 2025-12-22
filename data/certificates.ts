// data/certificates.ts
export type Certificate = {
  id: string;
  nombre: string;
  material: string;
  piedra: string;
  cadena: string;
  medidas: string;
  tecnica: string;
  fecha: string; // dd/mm/yyyy
};

export const CERTIFICATES: Record<string, Certificate> = {
  "20251207001": {
    id: "20251207001",
    nombre: "Collar Corazón Ónix Cielo",
    material: "Plata 950",
    piedra: "Ónix Cielo (azul)",
    cadena: "45 cm",
    medidas: "Colgante 2 cm de alto",
    tecnica: "Corte, pulido y engaste realizados a mano en taller.",
    fecha: "07/12/2025",
  },
};
