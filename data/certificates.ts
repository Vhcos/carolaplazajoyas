export type Certificate = {
  id: string;
  nombre: string;
  material: string;
  piedra: string;
  cadena: string;
  medidas: string;
  tecnica: string;
  descripcion?: string; // NUEVO: te la pido/pones tú por pieza
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
    descripcion:
      "Piedra con forma de corazón, engastada en una caja de plata y con aplicaciones de plata y bronce.",
    fecha: "07/12/2025",
  },
};
