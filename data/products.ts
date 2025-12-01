// data/products.ts

export type Product = {
  id: string; // slug único, ej: "anillo-luz-de-patagonia"
  nombre: string;
  precio: number; // en CLP
  descripcionCorta: string;
  descripcionLarga?: string;
  fotos: string[]; // rutas en /public/joyas/...
  destacado?: boolean; // para mostrar en la Home
  tipo: "unica" | "serie"; // pieza única 1/1 o serie limitada
  serieTotal?: number; // solo para series: total de piezas (y en No. x/y)
};

export const PRODUCTS: Product[] = [
  {
  id: "anillo-cuarzo-rosa",
  nombre: "Anillo Cuarzo Rosa Austral",
  precio: 60000,
  descripcionCorta:
    "Anillo ancho de plata 950 con cuarzo rosa facetado y detalles de bolitas laterales, suave y luminoso.",
  descripcionLarga:
    "Anillo de plata 950 trabajado a mano con un cuerpo ancho y levemente curvado que envuelve el dedo de forma cómoda. Al centro se monta un cuarzo rosa redondo facetado en engaste biselado, que da un brillo suave y lechoso. A ambos lados de la piedra se agrupan pequeñas bolitas de plata, hechas y soldadas una a una, que aportan textura y un aire orgánico. La superficie del aro se pule a alto brillo, generando contraste con los relieves laterales. Cada pieza se corta, curva, suelda y se termina a pulso, por lo que las formas y reflejos pueden variar sutilmente de un anillo a otro.",
  fotos: [
    "/joyas/anillo-cuarzo-rosa-1.jpg",
    "/joyas/anillo-cuarzo-rosa-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
},

{
  id: "anillo-circon-austral",
  nombre: "Anillo Círcón Austral",
  precio: 60000,
  descripcionCorta:
    "Anillo ancho de plata 950 con textura martillada y circonita oval central, pensado como pieza de carácter para uso diario.",
  descripcionLarga:
    "Anillo de plata 950 trabajado a mano con un cuerpo ancho y ligeramente curvado que abraza el dedo de forma cómoda. La superficie presenta una textura martillada que rompe la luz en pequeños destellos y al centro se monta una circonita oval en engaste biselado, que queda protegida pero visible. Cada pieza se construye a partir de una lámina de plata que se corta, curva, suelda y se trabaja a pulso, por lo que la textura y las marcas del metal cambian sutilmente de un anillo a otro.",
  fotos: [
    "/joyas/anillo-circon-austral-1.jpg",
    "/joyas/anillo-circon-austral-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
},

{
  id: "anillo-prisma-amatista",
  nombre: "Anillo Prisma Amatista",
  precio: 65000,
  descripcionCorta:
    "Anillo de plata 950 de líneas geométricas con amatista oval central, ideal como pieza protagonista.",
  descripcionLarga:
    "Anillo de plata 950 trabajado a mano con un cuerpo ancho y recto que se asienta como un pequeño prisma sobre el dedo. La parte superior tiene una textura sutilmente rayada que suaviza el brillo del metal y en el centro se monta una amatista oval facetada en engaste biselado, protegida pero muy visible. El volumen del anillo le da carácter y presencia, pero el interior se trabaja para que resulte cómodo en el uso diario. Al ser hecho completamente a pulso, cada prisma y cada piedra se asientan de forma única en cada pieza.",
  fotos: [
    "/joyas/anillo-prisma-amatista-1.jpg",
    "/joyas/anillo-prisma-amatista-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
},

 {
  id: "anillo-aurora-boreal",
  nombre: "Anillo Aurora Boreal",
  precio: 65000,
  descripcionCorta:
    "Anillo ancho de plata 950 con cuarzo místico oval, lleno de destellos verdes y violetas.",
  descripcionLarga:
    "Anillo de plata 950 trabajado a mano con un cuerpo ancho que abraza el dedo como un pequeño brazal, pensado para quienes buscan una pieza protagonista. La superficie presenta un acabado orgánico con pequeños relieves y detalles que enmarcan la piedra central. En el frente se monta un cuarzo místico oval facetado en engaste biselado, que refleja tonos verdes, violetas y rosados según la luz. El interior se suaviza para que, pese a su presencia, resulte cómodo en el uso diario. Cada anillo se construye y se texturiza a pulso, por lo que las marcas y los reflejos del metal cambian sutilmente de una pieza a otra.",
  fotos: ["/joyas/anillo-aurora-boreal-1.jpg"],
  destacado: true,
  tipo: "unica",
},

{
  id: "anillo-pirita-triangular",
  nombre: "Anillo Pirita Triangular",
  precio: 70000,
  descripcionCorta:
    "Anillo XL de plata 950 con pirita en bruto en marco triangular, una pieza escultural y poderosa.",
  descripcionLarga:
    "Anillo de plata 950 trabajado a mano con una copa amplia y triangular que cubre buena parte del dorso de la mano, pensado como una pieza de autor para quienes aman los formatos grandes. La pirita en bruto se monta al centro, respetando su forma orgánica y sus destellos dorados, enmarcada por un borde de plata y un fondo oscuro que realza el contraste. El cuerpo del anillo se construye sólido pero se ajusta para que apoye cómodo sobre el dedo pese a su tamaño. Cada piedra se selecciona y se engasta a pulso, por lo que las formas y brillos de la pirita varían sutilmente en cada pieza.",
  fotos: [
    "/joyas/anillo-pirita-triangular-1.jpg",
   
  ],
  destacado: true,
  tipo: "unica",
},

{
  id: "aros-pirita-bronce",
  nombre: "Aros Pirita Bronce",
  precio: 50000,
  descripcionCorta:
    "Aros largos en bronce con discos martillados y pirita en bruto central, llenos de brillo dorado.",
  descripcionLarga:
    "Aros de bronce hechos a mano con dos discos circulares articulados: uno superior liso y otro inferior más grande con textura martillada. En el centro del disco inferior se monta una pirita en bruto, que mantiene su forma orgánica y sus destellos metálicos, contenida en un marco elevado que la realza. El acabado martillado del bronce refleja la luz en destellos suaves y dialoga con el brillo más intenso de la piedra. A pesar de su tamaño, el peso se distribuye bien sobre el lóbulo, pensados para acompañar looks de noche o de día con un toque de fuerza. Cada par se arma y texturiza a pulso, por lo que la disposición de la pirita y las marcas del metal varían levemente en cada pieza.",
  fotos: [
    "/joyas/aros-bronce-pirita-50000-1.jpg",
    "/joyas/aros-bronce-pirita-50000-2.jpg",
    "/joyas/aros-bronce-pirita-50000-3.jpg",
  ],
  destacado: true,
  tipo: "unica",
},
{
  id: "colgante-alma-rosa",
  nombre: "Colgante Alma Rosa",
  precio: 70000,
  descripcionCorta:
    "Colgante de plata 950 con gran piedra rosa veteada, hojas doradas y lágrima de cuarzo rosa.",
  descripcionLarga:
    "Colgante de plata 950 trabajado a mano con una piedra central oval rosa veteada en suaves tonos marmoleados, enmarcada por un bisel liso que sigue su contorno orgánico. Bajo la piedra se disponen tres pequeñas hojas de plata con acabado dorado que aportan movimiento y un guiño botánico. Desde el centro cuelga una segunda piedra rosa en forma de triángulo suave, que alarga la silueta sobre el pecho. El collar se completa con una cadena de eslabones finos en tono dorado que acompaña la calidez de las piedras. Cada pieza se corta, suelda y engasta a pulso, por lo que las vetas del mineral y el gesto de las hojas cambian levemente en cada colgante.",
  fotos: [
    "/joyas/colgante-alma-rosa-70000-1.jpg",
    "/joyas/colgante-alma-rosa-70000-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
},
{
  id: "colgante-amatista-verde",
  nombre: "Colgante Amatista Verde",
  precio: 45000,
  descripcionCorta:
    "Colgante de plata 950 con amatista verde oval facetada y pequeños detalles de bolitas y circonita.",
  descripcionLarga:
    "Colgante de plata 950 trabajado a mano con una amatista verde oval facetada al centro, engastada en un bisel liso que enmarca suavemente la piedra. Bajo el óvalo se disponen pequeñas bolitas de plata que forman una especie de corona, rematada por una circonita transparente que aporta un destello extra. La piedra tiene un tono verde muy suave y luminoso, ideal para usar a diario o como punto de luz en un look más arreglado. La pieza se construye y suelda completamente a pulso, por lo que la disposición de las bolitas y los destellos del mineral pueden variar levemente en cada colgante.",
  fotos: ["/joyas/colgante-amatista-verde-45000-1.jpg"],
  destacado: true,
  tipo: "unica",
},

];
