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
    "Colgante de bronce con gran piedra rosa rodocrita, hojas doradas y lágrima de cuarzo rosa.",
  descripcionLarga:
    "Colgante de bronce trabajado a mano con una piedra central oval rosa veteada rodocrita en suaves tonos marmoleados, enmarcada por un bisel liso que sigue su contorno orgánico. Bajo la piedra se disponen tres pequeñas hojas de plata con acabado dorado que aportan movimiento y un guiño botánico. Desde el centro cuelga una segunda piedra rosa en forma de triángulo suave, que alarga la silueta sobre el pecho. El collar se completa con una cadena de eslabones finos en tono dorado que acompaña la calidez de las piedras. Cada pieza se corta, suelda y engasta a pulso, por lo que las vetas del mineral y el gesto de las hojas cambian levemente en cada colgante.",
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
{
  id: "colgante-luz-de-agua",
  nombre: "Colgante Luz de Agua",
  precio: 65000,
  descripcionCorta:
    "Colgante de plata 950 con dos piedras azuladas y un granate central, de caída vertical y delicada.",
  descripcionLarga:
    "Colgante de plata 950 trabajado a mano con una composición vertical de tres piedras engastadas en bisel. Arriba y abajo se disponen dos gemas azuladas de brillo lechoso, con formas orgánicas que recuerdan pequeñas gotas de agua. En el centro se ubica un granate oval de tono vino profundo, rodeado por pequeños puntos de plata que le dan protagonismo. La pieza cuelga de una cadena de eslabones alargados que acompaña bien la forma alargada del colgante. Cada piedra se selecciona y se engasta a pulso, por lo que las vetas, inclusiones y el gesto del metal varían sutilmente en cada joya.",
  fotos: [
    "/joyas/colgante-luz-de-agua-1.jpg",
    "/joyas/colgante-luz-de-agua-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
},
{
  id: "collar-perlas-inicial-g",
  nombre: "Collar Perlas Inicial G",
  precio: 45000,
  descripcionCorta:
    "Collar de perlas de río con cierre frontal en plata 950 y dije con la letra G.",
  descripcionLarga:
    "Collar de perlas de río engarzadas una a una en hilo resistente, pensado para que el cierre se luzca al frente como parte del diseño. El broche tipo T de plata 950 forma un aro y una barra limpia, de la cual cuelga un dije plano con la letra G en mayúscula, de líneas simples y modernas. El brillo suave de las perlas contrasta con el pulido espejo de la plata, logrando una pieza delicada pero con carácter cotidiano. Cada collar se ensambla y termina a mano, por lo que la forma y tamaño de las perlas pueden variar levemente en cada unidad.",
  fotos: [
    "/joyas/collar-perlas-inicial-g-1.jpg",
    "/joyas/collar-perlas-inicial-g-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
},
{
  id: "collar-piedras-inicial",
  nombre: "Collar Piedras Inicial",
  precio: 45000,
  descripcionCorta:
    "Collar de piedras naturales facetadas con dije de letra grande en plata 950 y cierre frontal.",
  descripcionLarga:
    "Collar hecho a mano con cuentas de piedra natural facetada en tonos tierra, verdes o rosados, intercaladas con pequeños detalles metálicos que aportan brillo. El cierre frontal se resuelve con un broche circular de plata 950 del que cuelga una letra grande plana, de líneas simples y contemporáneas. El diseño permite que la inicial sea la protagonista al centro del cuello, combinando el carácter de la plata con la textura viva de las piedras. Cada collar se ensambla y termina a pulso, por lo que la disposición del color en las cuentas y el gesto del metal varían levemente en cada pieza.",
  fotos: [
    "/joyas/collar-piedras-inicial-1.jpg",
    "/joyas/collar-piedras-inicial-2.jpg",
    "/joyas/collar-piedras-inicial-3.jpg",
    "/joyas/collar-piedras-inicial-4.jpg",
  ],
  destacado: true,
  tipo: "unica",
},
{
  id: "collar-talisman",
  nombre: "Collar Talismán",
  precio: 45000,
  descripcionCorta:
    "Collar de piedras naturales con cierre frontal y dije en plata 950, pensado como amuleto cotidiano.",
  descripcionLarga:
    "Collar trabajado a mano con cuentas de piedra natural en distintos tonos —rojos intensos, azules profundos o combinados con perlas de río— que se engarzan una a una. El diseño se cierra al frente con un broche circular de plata 950 del que cuelga un dije protagonista: puede ser un corazón texturizado, un rayo alargado o un medallón redondo martillado. El cierre visible convierte el broche en parte del diseño y permite que el collar luzca bien solo o combinado con otras cadenas. Cada pieza se ensambla y se suelda a pulso, por lo que la disposición del color en las piedras y los pequeños detalles del metal varían levemente en cada collar.",
  fotos: [
    "/joyas/collar-piedra-natural-y-dije-1.jpg",
    "/joyas/collar-piedra-natural-y-dije-2.jpg",
    "/joyas/collar-piedra-natural-y-dije-3.jpg",
  ],
  destacado: true,
  tipo: "unica",
},
{
  id: "esclava-aventurina-duo",
  nombre: "Esclava Aventurina Dúo",
  precio: 85000,
  descripcionCorta:
    "Esclava abierta de plata 950 con dos aventurinas verdes en extremos asimétricos, delicada y contemporánea.",
  descripcionLarga:
    "Esclava de plata 950 trabajada a mano con un perfil delgado y rígido que se abre en la parte frontal, permitiendo calzarla con suavidad sobre la muñeca. En cada extremo se montan aventurinas verdes en engaste biselado, una más grande y otra más pequeña, que generan un juego asimétrico muy sutil. El acabado del metal combina superficies pulidas con leves marcas de trabajo, para que se note el gesto manual sin perder elegancia. Es una pieza pensada para usar sola como protagonista o acompañada de otras pulseras finas. Al hacerse a pulso, la forma de las piedras y la curvatura de la esclava pueden variar levemente en cada unidad.",
  fotos: [
    "/joyas/esclava-aventurina-duo-1.jpg",
    "/joyas/esclava-aventurina-duo-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
},
{
  id: "esclava-dualidad",
  nombre: "Esclava Dualidad",
  precio: 75000,
  descripcionCorta:
    "Esclava abierta de plata 950 con cuarzo rutilado dorado y piedra azul profunda en un extremo.",
  descripcionLarga:
    "Esclava de plata 950 trabajada a mano con un cuerpo delgado y rígido, ligeramente martillado para dejar ver la textura del metal. En la parte frontal se montan dos piedras: un cuarzo rutilado redondo de tonos dorados como protagonista, y a su lado una piedra más pequeña en azul profundo, ambas en engaste biselado. El diseño queda abierto por detrás para calzar con suavidad sobre la muñeca y adaptarse a distintos tamaños. Es una pieza pensada para usar sola como acento sutil o acompañada de otras pulseras finas. Al hacerse completamente a pulso, las vetas del cuarzo, el tono del azul y las marcas del martillado cambian levemente en cada esclava.",
  fotos: [
    "/joyas/esclava-dualidad-1.jpg",
    "/joyas/esclava-dualidad-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
},
{
  id: "colgante-inicial-colibri",
  nombre: "Colgante Inicial Colibrí",
  precio: 85000,
  descripcionCorta:
    "Colgante de plata 950 con inicial grande y colibrí aplicado en relieve, montado en cadena de eslabones.",
  descripcionLarga:
    "Colgante de plata 950 trabajado a mano con una letra de formato grande y líneas clásicas, pensada como protagonista sobre el pecho. Sobre la superficie se aplica un colibrí en relieve, recortado y texturizado a pulso, que cruza la inicial y le da movimiento al diseño. El acabado pulido espejo refleja la luz y resalta los volúmenes del ave y de la letra. La pieza se acompaña de una cadena de eslabones gruesos que equilibra bien el tamaño del dije. Cada inicial se corta, lima, suelda y pule manualmente, por lo que los contornos y las marcas del colibrí pueden variar levemente en cada colgante.",
  fotos: [
    "/joyas/colgante-inicial-colibri-1.jpg",
    "/joyas/colgante-inicial-colibri-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
},
{
  id: "colgante-inicial-flor",
  nombre: "Colgante Inicial Flor",
  precio: 65000,
  descripcionCorta:
    "Colgante de plata 950 con inicial grande y flor aplicada con piedra amarilla, en cadena de eslabones alargados.",
  descripcionLarga:
    "Colgante de plata 950 trabajado a mano con una letra de formato grande y curvas suaves, pensada para quedar al centro del pecho. Sobre la inicial se aplica una pequeña flor en relieve, construida con pétalos y bolitas de plata que rodean una piedra amarilla engastada al centro, dando un punto de luz cálido. El acabado pulido refleja la luz y resalta los volúmenes del diseño, mientras que la cadena de eslabones largos equilibra el tamaño del dije y lo mantiene cómodo de usar a diario. Cada pieza se corta, lima, suelda y pule a pulso, por lo que la forma de la letra, las texturas y los detalles de la flor pueden variar levemente en cada colgante.",
  fotos: [
    "/joyas/colgante-inicial-flor-1.jpg",
    "/joyas/colgante-inicial-flor-2.jpg",
    "/joyas/colgante-inicial-flor-3.jpg",
  ],
  destacado: true,
  tipo: "unica",
},
  {
    id: "pulsera-eslabones-prehnita",
    nombre: "Pulsera Eslabones de Prehnita",
    precio: 85000,
    descripcionCorta:
      "Pulsera de plata 950 con eslabones martillados y cabujón de prehnita verde, hecha a mano.",
    descripcionLarga:
      "Pulsera de plata 950 con eslabones irregulares martillados uno a uno y un cabujón de prehnita verde montado al frente. El cierre en forma de S también está trabajado a mano, lo que la hace ajustable y cómoda para uso diario. Pieza única que mezcla textura orgánica y piedra natural translúcida.",
    fotos: [
      "/joyas/pulsera-eslabones-prehnita-85000-1.jpg",
      "/joyas/pulsera-eslabones-prehnita-85000-2.jpg",
    ],
    destacado: true,
    tipo: "unica",
  },
{
    id: "anillo-granate-facetado",
    nombre: "Anillo Granate Facetado",
    precio: 60000,
    descripcionCorta:
      "Anillo de plata 950 de banda ancha con granate rojo facetado al frente y detalles arquitectónicos en el cuerpo.",
    descripcionLarga:
      "Anillo de plata 950 trabajado a mano con una banda ancha y recta que abraza el dedo con presencia. En el centro, un granate rojo facetado se engasta en un bisel elevado, creando un punto de luz profundo y vino tinto que contrasta con el brillo frío de la plata. El cuerpo del anillo presenta planos y pequeños volúmenes verticales que le dan un aire moderno y arquitectónico, mientras que el interior se mantiene liso y pulido para un uso cómodo. Es una pieza sólida, pensada para quienes buscan un anillo protagonista que pueda acompañar tanto looks cotidianos como ocasiones especiales. Cada anillo se corta, suelda y pule a mano, por lo que las texturas y proporciones pueden variar levemente en cada ejemplar.",
    fotos: [
     "/joyas/anillo-granate-facetado-1.jpg",
     "/joyas/anillo-granate-facetado-2.jpg",
    ],
    destacado: true,
    tipo: "unica",
  },
{
  id: "colgante-corazon-alado-granate",
  nombre: "Colgante Corazón Alado Granate",
  precio: 55000,
  descripcionCorta:
    "Colgante de plata 950 con corazón alado y gota de granate tallado colgando al centro.",
  descripcionLarga:
    "Colgante de plata 950 trabajado a mano con un corazón liso del que se abren dos alas grabadas con plumas en relieve. Desde la parte inferior cuelga una piedra granate tallada en forma triangular, que aporta un toque profundo de color rojo vino y se mueve con cada paso. La pieza se cuelga de una cadena fina que equilibra el volumen del dije sin restarle protagonismo. Cada corazón se corta, suelda, graba y pule de manera artesanal, por lo que las líneas de las alas y el tono del granate pueden variar levemente en cada colgante.",
  fotos: [
    "/joyas/colgante-granate-1.jpg",
    "/joyas/colgante-granate-2.jpg",
  ],
  destacado: false,
  tipo: "unica",
},

{
id: "colgante-cruz-martillado",
nombre: "Colgante Cruz Martillado",
precio: 65000,
descripcionCorta:
"Colgante de plata 950 con cruz de líneas rectas y textura martillada a mano, diseñado para ser usado por mujeres y hombre, que refleja la luz con destellos irregulares.",
descripcionLarga:
"Colgante de plata 950 con forma de cruz clásica, construida a partir de una lámina gruesa que le da presencia y peso agradable al usarla. Toda la superficie frontal se trabaja con martillo de bola, creando una textura irregular que captura la luz en pequeños destellos y le da un carácter más contemporáneo que una cruz lisa tradicional. Los bordes se pulen para mantener un contorno limpio y definido, mientras que el enganche superior se suelda a mano para que la pieza quede bien centrada en la cadena. Cada cruz se corta, lima, martilla y pule de manera artesanal, por lo que el patrón de golpes y brillo puede variar levemente en cada pieza.",
fotos: [
"/joyas/colgante-cruz-martillado-65000-1.jpeg",
"/joyas/colgante-cruz-martillado-65000-2.jpeg",
],
destacado: false,
tipo: "unica",
},
];
