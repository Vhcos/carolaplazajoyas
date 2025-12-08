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
  categoria: "anillos" | "aros" | "collares" | "colgantes" | "pulseras-esclavas";
};

export const PRODUCTS: Product[] = [
  {
  id: "anillo-prisma-amatista",
  nombre: "Anillo Prisma Amatista",
  precio: 65000,
  descripcionCorta:
    "Anillo Nº17 de plata 950 de líneas geométricas con amatista oval central, ideal como pieza protagonista.",
  descripcionLarga:
    "Anillo Nº17 de plata 950 trabajado a mano con un cuerpo ancho y recto que se asienta como un pequeño prisma sobre el dedo. La parte superior tiene una textura sutilmente rayada que suaviza el brillo del metal y en el centro se monta una amatista oval facetada en engaste biselado, protegida pero muy visible. El volumen del anillo le da carácter y presencia, pero el interior se trabaja para que resulte cómodo en el uso diario. Al ser hecho completamente a pulso, cada prisma y cada piedra se asientan de forma única en cada pieza.",
  fotos: [
    "/joyas/anillo-prisma-amatista-3.jpeg",
    "/joyas/anillo-prisma-amatista-1.jpg",
    "/joyas/anillo-prisma-amatista-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
  categoria: "anillos",
},
{
  id: "colgante-luz-de-agua",
  nombre: "Collar Luz de Agua",
  precio: 65000,
  descripcionCorta:
    "Colgante de plata 950 con dos piedras azuladas y un granate central, de caída vertical y delicada.",
  descripcionLarga:
    "Colgante de plata 950 trabajado a mano con una composición vertical de tres piedras engastadas en bisel. Arriba y abajo se disponen dos gemas azuladas de brillo lechoso, con formas orgánicas que recuerdan pequeñas gotas de agua. En el centro se ubica un granate oval de tono vino profundo, rodeado por pequeños puntos de plata que le dan protagonismo. La pieza cuelga de una cadena de eslabones alargados que acompaña bien la forma alargada del colgante. Cada piedra se selecciona y se engasta a pulso, por lo que las vetas, inclusiones y el gesto del metal varían sutilmente en cada joya.",
  fotos: [
    "/joyas/colgante-luz-de-agua-3.jpeg",   
    "/joyas/colgante-luz-de-agua-1.jpeg",
    "/joyas/colgante-luz-de-agua-2.jpg",

  ],
  destacado: true,
  tipo: "unica",
  categoria: "collares",
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
  categoria: "pulseras-esclavas",
},
  {
  id: "anillo-cuarzo-rosa",
  nombre: "Anillo Cuarzo Rosa Austral",
  precio: 60000,
  descripcionCorta:
    "Anillo Nº14 ancho de plata 950 con cuarzo rosa facetado y detalles de bolitas laterales, suave y luminoso.",
  descripcionLarga:
    "Anillo Nº14 de plata 950 trabajado a mano con un cuerpo ancho y levemente curvado que envuelve el dedo de forma cómoda. Al centro se monta un cuarzo rosa redondo facetado en engaste biselado, que da un brillo suave y lechoso. A ambos lados de la piedra se agrupan pequeñas bolitas de plata, hechas y soldadas una a una, que aportan textura y un aire orgánico. La superficie del aro se pule a alto brillo, generando contraste con los relieves laterales. Cada pieza se corta, curva, suelda y se termina a pulso, por lo que las formas y reflejos pueden variar sutilmente de un anillo a otro.",
  fotos: [
    "/joyas/anillo-cuarzo-rosa-1.jpg",
    "/joyas/anillo-cuarzo-rosa-3.jpeg",
    "/joyas/anillo-cuarzo-rosa-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
  categoria: "anillos",
},

{
  id: "anillo-circon-austral",
  nombre: "Anillo Círcón Austral",
  precio: 60000,
  descripcionCorta:
    "Anillo Nº15 ancho de plata 950 con textura martillada y circonita oval central, pensado como pieza de carácter para uso diario.",
  descripcionLarga:
    "Anillo Nº15 de plata 950 trabajado a mano con un cuerpo ancho y ligeramente curvado que abraza el dedo de forma cómoda. La superficie presenta una textura martillada que rompe la luz en pequeños destellos y al centro se monta una circonita oval en engaste biselado, que queda protegida pero visible. Cada pieza se construye a partir de una lámina de plata que se corta, curva, suelda y se trabaja a pulso, por lo que la textura y las marcas del metal cambian sutilmente de un anillo a otro.",
  fotos: [
    "/joyas/anillo-circon-austral-3.jpeg",
    "/joyas/anillo-circon-austral-1.jpg",
    "/joyas/anillo-circon-austral-2.jpg",
  ],
  destacado: true,
  tipo: "unica",
  categoria: "anillos",
},



 {
  id: "anillo-aurora-boreal",
  nombre: "Anillo Aurora Boreal",
  precio: 65000,
  descripcionCorta:
    "Anillo Nº 10 ancho de plata 950 con cuarzo místico oval, lleno de destellos verdes y violetas.",
  descripcionLarga:
    "Anillo Nº 10 de plata 950 trabajado a mano con un cuerpo ancho que abraza el dedo como un pequeño brazal, pensado para quienes buscan una pieza protagonista. La superficie presenta un acabado orgánico con pequeños relieves y detalles que enmarcan la piedra central. En el frente se monta un cuarzo místico oval facetado en engaste biselado, que refleja tonos verdes, violetas y rosados según la luz. El interior se suaviza para que, pese a su presencia, resulte cómodo en el uso diario. Cada anillo se construye y se texturiza a pulso, por lo que las marcas y los reflejos del metal cambian sutilmente de una pieza a otra.",
  fotos: [
    "/joyas/anillo-aurora-boreal-2.jpeg",
    "/joyas/anillo-aurora-boreal-1.jpg",
    "/joyas/anillo-aurora-boreal-3.jpeg", 
  ],
  destacado: true,
  tipo: "unica",
  categoria: "anillos",
},

{
  id: "anillo-pirita-triangular",
  nombre: "Anillo Pirita Triangular",
  precio: 70000,
  descripcionCorta:
    "Anillo ajustable de plata 950 con pirita en bruto en marco triangular, una pieza escultural y poderosa.",
  descripcionLarga:
    "Anillo ajustable de plata 950 trabajado a mano con una copa amplia y triangular que cubre buena parte del dorso de la mano, pensado como una pieza de autor para quienes aman los formatos grandes. La pirita en bruto se monta al centro, respetando su forma orgánica y sus destellos dorados, enmarcada por un borde de plata y un fondo oscuro que realza el contraste. El cuerpo del anillo se construye sólido pero se ajusta para que apoye cómodo sobre el dedo pese a su tamaño. Cada piedra se selecciona y se engasta a pulso, por lo que las formas y brillos de la pirita varían sutilmente en cada pieza.",
  fotos: [
    "/joyas/anillo-pirita-triangular-1.jpg",
   
  ],
  destacado: true,
  tipo: "unica",
  categoria: "anillos",
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
  categoria: "aros",
},
{
  id: "colgante-alma-rosa",
  nombre: "Collar Alma Rosa",
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
  categoria: "collares",
},
{
  id: "colgante-amatista-verde",
  nombre: "Collar Amatista Verde",
  precio: 45000,
  descripcionCorta:
    "Colgante de plata 950 con amatista verde oval facetada y pequeños detalles de bolitas y circonita.",
  descripcionLarga:
    "Colgante de plata 950 trabajado a mano con una amatista verde oval facetada al centro, engastada en un bisel liso que enmarca suavemente la piedra. Bajo el óvalo se disponen pequeñas bolitas de plata que forman una especie de corona, rematada por una circonita transparente que aporta un destello extra. La piedra tiene un tono verde muy suave y luminoso, ideal para usar a diario o como punto de luz en un look más arreglado. La pieza se construye y suelda completamente a pulso, por lo que la disposición de las bolitas y los destellos del mineral pueden variar levemente en cada colgante.",
  fotos: ["/joyas/colgante-amatista-verde-45000-1.jpg"],
  destacado: true,
  tipo: "unica",
  categoria: "collares",
},

{
  id: "collar-perlas-inicial-g",
  nombre: "Collar Perlas Inicial G",
  precio: 55000,
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
  categoria: "collares",
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
  ],
  destacado: true,
  tipo: "unica",
  categoria: "collares",
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
    "/joyas/collar-piedra-natural-y-dije-3.jpg",
    "/joyas/collar-piedra-natural-y-dije-1.jpg",
    "/joyas/collar-piedra-natural-y-dije-2.jpg",
    
  ],
  destacado: true,
  tipo: "unica",
  categoria: "collares",
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
  categoria: "pulseras-esclavas",
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
  categoria: "collares",
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
  categoria: "collares",
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
      "/joyas/pulsera-eslabon-prenhita-2.jpeg",
      "/joyas/pulsera-eslabon.prenhita-1.jpeg",
    ],
    destacado: true,
    tipo: "unica",
    categoria: "pulseras-esclavas",
  },
{
    id: "anillo-granate-facetado",
    nombre: "Anillo Granate Facetado",
    precio: 60000,
    descripcionCorta:
      "Anillo Nº 16 de plata 950 de banda ancha con granate rojo facetado al frente y detalles arquitectónicos en el cuerpo.",
    descripcionLarga:
      "Anillo Nº 16 de plata 950 trabajado a mano con una banda ancha y recta que abraza el dedo con presencia. En el centro, un granate rojo facetado se engasta en un bisel elevado, creando un punto de luz profundo y vino tinto que contrasta con el brillo frío de la plata. El cuerpo del anillo presenta planos y pequeños volúmenes verticales que le dan un aire moderno y arquitectónico, mientras que el interior se mantiene liso y pulido para un uso cómodo. Es una pieza sólida, pensada para quienes buscan un anillo protagonista que pueda acompañar tanto looks cotidianos como ocasiones especiales. Cada anillo se corta, suelda y pule a mano, por lo que las texturas y proporciones pueden variar levemente en cada ejemplar.",
    fotos: [
     "/joyas/anillo-granate-facetado-3.jpeg",
     "/joyas/anillo-granate-facetado-1.jpg",
     "/joyas/anillo-granate-facetado-2.jpg",
    ],
    destacado: true,
    tipo: "unica",
    categoria: "anillos",
  },
{
  id: "colgante-corazon-alado-granate",
  nombre: "Collar Corazón Alado Granate",
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
  categoria: "collares",
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
categoria: "collares"
},
{
  id: "colgante-corazon-drusa-amatista",
  nombre: "Collar Corazón Drusa de Amatista",
  precio: 50000,
  descripcionCorta:
    "Colgante enchapado en oro con corazón de drusa de amatista en tonos lavanda y violeta, incluye cadena.",
  descripcionLarga:
    "Colgante enchapado en oro con un corazón de drusa de amatista, donde los cristales se abren en distintas alturas y brillos, creando una superficie viva y llena de destellos lilas y violetas. El borde metálico enmarca la piedra y resalta su volumen orgánico, mientras el aro superior permite pasarlo por cadenas finas o gruesas según el estilo de quien lo use. Es una pieza ligera pero protagonista, ideal para darle color a looks neutros o acompañar otros colgantes en capas. incluye cadena, para que puedas combinarlo con la que más te guste.",
  fotos: [
    "/joyas/corazon-purpura-1.jpeg",
    "/joyas/corazon-purpura-2.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "collares",
},
{
  id: "aros-ginko-oro",
  nombre: "Aros Hoja Orgánica",
  precio: 35000,
  descripcionCorta:
    "Aros colgantes enchapados en oro con silueta orgánica tipo hoja, ligeros y con terminación mate.",
  descripcionLarga:
    "Aros colgantes enchapados en oro trabajados a mano, con una placa superior redonda y una pieza principal inspirada en hojas orgánicas recortadas. La superficie presenta un acabado mate y levemente texturado que suaviza el brillo del metal, haciendo que se vean elegantes pero no exagerados. Son livianos y cómodos de usar durante todo el día, ideales para dar movimiento y un toque dorado a looks simples o acompañar otras joyas minimalistas.",
  fotos: [
    "/joyas/aros-ginko-1.jpeg",
    "/joyas/aros-ginko-2.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "aros",
},
{
  id: "aros-parra-asimetricos",
  nombre: "Aros Parra Asimétricos",
  precio: 50000,
  descripcionCorta:
    "Aros enchapados en oro con hojas de parra caladas y modeladas en volumen, diseño asimétrico con tres hojas en una oreja y una en la otra.",
  descripcionLarga:
    "Aros enchapados en oro inspirados en la forma orgánica de las hojas de parra, recortadas y texturizadas a mano para resaltar sus nervaduras y bordes irregulares. El diseño es asimétrico: en una oreja se agrupan tres hojas que caen en cascada, creando un efecto más protagonista, mientras que en la otra una sola hoja se convierte en un acento sutil. El acabado satinado con ligeros brillos refleja la luz de manera suave y aporta calidez al rostro. Son livianos y cómodos para usar durante todo el día, ideales para quienes buscan un toque diferente sin dejar de lado la elegancia.",
  fotos: [
    "/joyas/aros-parra-1.jpeg",
    "/joyas/aros-parra-2.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "aros",
},
{
  id: "collar-rayo-plata",
  nombre: "Conjunto Collar y Aros Rayo de Plata",
  precio: 65000,
  descripcionCorta:
    "Collar de plata 950 con dije de rayo alargado, de líneas limpias y acabado pulido, acompañado de pequeños aros rayo a juego.",
  descripcionLarga:
    "Collar de plata 950 con un dije de rayo alargado, de diseño minimalista y bordes definidos, que cuelga desde una cadena fina y resistente. El rayo, trabajado a mano, tiene un acabado pulido que refleja la luz y marca un gesto moderno, perfecto para usar solo o combinar con otros collares. El conjunto incluye un par de aros tipo stud en forma de rayo, pensados para completar el look con un guiño rockero y cotidiano a la vez. Cada pieza se corta, lima y pule a pulso, por lo que pueden existir pequeñas variaciones que hacen único cada collar.",
  fotos: [
    "/joyas/conjunto-rayo-1.jpeg",
    "/joyas/conjunto-rayo-2.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "collares",
},
{
  id: "collar-corazon-alado-amatista",
  nombre: "Collar Corazón Alado con Amatista",
  precio: 55000,
  descripcionCorta:
    "Collar de plata 950 con corazón alado al centro y amatista en cabujón colgando como detalle de color.",
  descripcionLarga:
    "Collar de plata 950 trabajado a mano con un corazón alado al centro, cuyas plumas se marcan con delicados grabados que aportan textura y movimiento. Desde la parte inferior del corazón cuelga una amatista en cabujón redondo, que aporta un toque de color violeta profundo y un brillo sutil al mover el cuello. La pieza va integrada a una cadena fina de plata, que equilibra el protagonismo del dije y la hace cómoda para usar a diario o en ocasiones especiales. Cada collar se corta, suelda y pule de manera artesanal, por lo que los detalles del corazón, las alas y el engaste de la piedra pueden variar levemente en cada ejemplar.",
  fotos: [
    "/joyas/colgante-corazon-1.jpeg",
    "/joyas/colgante-corazon-2.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "collares",
},
{
  id: "anillo-trenza-bola",
  nombre: "Anillo Trenza y Bola",
  precio: 35000,
  descripcionCorta:
    "Anillo Nº13 de plata 950 de aro ancho con detalle de trenza central y bolita en relieve.",
  descripcionLarga:
    "Anillo Nº13  de plata 950 de banda ancha, trabajado a mano con una trenza central soldada sobre la superficie y una bolita pulida que se posa como punto de luz. El contraste entre el volumen de la bola y la línea trenzada crea un diseño sencillo pero con carácter, ideal para usar solo o acompañado de otros anillos más delgados. Cada pieza se corta, suelda, lima y pule manualmente, por lo que las texturas y el acabado pueden presentar pequeñas variaciones propias de la joyería de autor.",
  fotos: [
    "/joyas/anillo-trenza-bola-1.jpeg",
    "/joyas/anillo-trenza-bola-2.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "anillos",
},
{
  id: "collar-triangulo-granate",
  nombre: "Collar Triángulo Granate",
  precio: 45000,
  descripcionCorta:
    "Collar de plata 950 con colgante triangular de granate facetado en tono rojo vino.",
  descripcionLarga:
    "Collar de plata 950 con un pequeño colgante de granate facetado en forma triangular, de tono rojo vino profundo. La piedra se engasta en un marco limpio de plata que sigue la geometría del triángulo, dejando pasar la luz para realzar sus destellos internos. La cadena fina acompaña el tamaño del dije y permite que se apoye justo sobre el pecho, ideal para usar a diario o combinar en capas con otros collares. Cada pieza se corta, suelda y pule a mano, por lo que el grosor del marco y las facetas visibles de la piedra pueden variar levemente, haciendo que cada collar sea único.",
  fotos: [
    "/joyas/collar-triangulo-1.jpeg",
    "/joyas/collar-triangulo-2.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "collares",
},
{
  id: "collar-corazon-alas-gota",
  nombre: "Collar Corazón Alado Cuarzo Rosa",
  precio: 55000,
  descripcionCorta:
    "Collar de plata 950 con corazón alado al centro y gota de piedra cuarzo rosa translúcida colgante.",
  descripcionLarga:
    "Collar de plata 950 con un corazón liso al centro del pecho, flanqueado por dos alas grabadas a mano que le dan movimiento y textura al diseño. Desde la parte inferior del corazón cuelga una pequeña gota de piedra cuarzo rosa translúcida, engastada con alambre de plata, que aporta luz suave y un detalle delicado al colgante. La cadena fina en plata acompaña el diseño sin restarle protagonismo y permite usarlo solo o combinado con otros collares en capas. Cada pieza se corta, suelda y pule de manera artesanal, por lo que las plumas de las alas y la forma de la gota pueden presentar ligeras variaciones.",
  fotos: [
    "/joyas/collar-corazon-gota-2.jpeg",
    "/joyas/collar-corazon-gota-1.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "collares",
},
{
  id: "anillo-corazon-pirita-ajustable",
  nombre: "Anillo Corazón de Pirita Ajustable",
  precio: 65000,
  descripcionCorta:
    "Anillo de plata 950 ajustable con corazón grande de pirita en bruto, de brillo metálico y volumen protagonista.",
  descripcionLarga:
    "Anillo de plata 950 con un corazón protagonista al centro, relleno de cristales de pirita en bruto que reflejan la luz con destellos metálicos plateados. El corazón va enmarcado por un segundo contorno que le da profundidad y hace que la piedra parezca flotar sobre el dedo. El aro es ajustable, pensado para adaptarse cómodamente a distintas tallas y permitir usarlo en diferentes dedos según el estilo de cada persona. Cada pieza se arma, suelda y ajusta a mano, por lo que la forma de los cristales y el acabado del corazón pueden variar levemente, haciendo que cada anillo sea único.",
  fotos: [
    "/joyas/anillo-pirita-corazon-1.jpeg",
    "/joyas/anillo-pirita-corazon-2.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "anillos",
},
{
id: "anillo-citrino-ovalado",
nombre: "Anillo Citrino Ovalado",
precio: 35000,
descripcionCorta:
"Anillo Nº17 de plata 950 con banda ancha y citrino oval facetado en tono amarillo miel.",
descripcionLarga:
"Anillo Nº17 de plata 950 con banda ancha y líneas limpias, diseñado para lucir un citrino oval facetado en un tono amarillo miel que aporta brillo y calidez a la mano. La piedra va engastada en un bisel alto que la protege y resalta a la vez, creando un contraste elegante con el metal pulido. La forma recta pero suavemente curvada de la banda lo hace cómodo para el uso diario, mientras que el tamaño del citrino lo convierte en una pieza protagonista, ideal para quienes disfrutan de un estilo contemporáneo con un toque de color.",
fotos: [
"/joyas/anillo-citrino-3.jpeg",
"/joyas/anillo-citrino-2.jpeg",  
"/joyas/anillo-citrino-1.jpeg",

],
destacado: false,
tipo: "unica",
categoria: "anillos",
},
{
  id: "anillo-agua-marina-redonda",
  nombre: "Anillo Agua Marina Redonda",
  precio: 55000,
  descripcionCorta:
    "Anillo Nº19 de plata con piedra agua marina redonda facetada y pequeñas bolitas de plata decorativos a los lados.",
  descripcionLarga:
    "Anillo Nº19 de plata trabajado a mano con una piedra agua marina redonda facetada al centro, montada en un engaste liso que resalta su brillo azul claro. A cada lado del engaste se agrupan pequeñas bolitas de metal que aportan textura y volumen, dando un aire orgánico a la pieza. El aro es de línea sencilla y cómoda para el uso diario, pero el tamaño de la piedra lo convierte en un anillo protagónico que ilumina la mano. Ideal para usar solo o acompañado de otras argollas finas.",
  fotos: [
    "/joyas/anillo-agua-marina-redonda-1.jpeg",
    "/joyas/anillo-agua-marina-redonda-3.jpeg",
    "/joyas/anillo-agua-marina-redonda-2.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "anillos",
},
{
  id: "anillo-amatista-solitario",
  nombre: "Anillo Amatista Solitario",
  precio: 35000,
  descripcionCorta:
    "Anillo Nº10 de plata con amatista redonda facetada en montaje tipo solitario.",
  descripcionLarga:
    "Anillo Nº10 de plata de línea sencilla con una amatista redonda facetada al centro, montada en un engaste liso que rodea completamente la piedra. El aro es delgado y recto, cómodo para usar todos los días, mientras el violeta intenso de la amatista aporta un toque de color elegante y discreto. Es una pieza perfecta para quienes prefieren joyas minimalistas pero con un detalle de luz y personalidad, ideal para usar sola o combinada con otros anillos finos.",
  fotos: ["/joyas/anillo-amatista-solitario-1.jpeg"],
  destacado: false,
  tipo: "unica",
  categoria: "anillos",
},
{
  id: "anillo-granate-enchapado",
  nombre: "Anillo Granate Enchapado",
  precio: 45000,
  descripcionCorta:
    "Anillo Nº18  enchapado en oro con piedra granate oval facetada.",
  descripcionLarga:
    "Anillo Nº18 enchapado en oro, con una piedra granate oval facetada al centro. Su diseño de banda ancha y estructura sólida aporta presencia y elegancia, mientras que el tono rojo profundo del granate contrasta con el dorado cálido del metal. El engaste biselado protege la piedra y resalta su brillo interno. Ideal para quienes buscan una pieza sofisticada y contemporánea, con un aire artesanal y carácter propio.",
  fotos: [
    "/joyas/anillo-granate-enchapado-2.jpeg",
    "/joyas/anillo-granate-enchapado-1.jpeg",
    
  ],
  destacado: false,
  tipo: "unica",
  categoria: "anillos",
},
{
  id: "anillo-tres-piedras-amatista-citrino-cianita",
  nombre: "Anillo Tres Piedras Amatista, Citrino y Cianita",
  precio: 7000,
  descripcionCorta:
    "Anillo de plata 950 ajustable con tres piedras naturales: amatista, citrino y cianita, ideal para quienes aman llevar color y energía en la mano.",
  descripcionLarga:
    "Anillo de plata 950 con diseño abierto que abraza el dedo con tres piedras naturales protagonistas: amatista en tono violeta profundo, citrino dorado y cianita azul intensa. Cada engaste está trabajado a mano para resaltar la forma y brillo de las gemas, que se distribuyen en distintos niveles generando volumen y movimiento. Es un anillo cómodo y regulable, ajustable aproximadamente entre las tallas 15 y 19, perfecto para usarlo solo como pieza central o combinado con otros anillos más finos.",
  fotos: [
    "/joyas/anillo-trespiedras-3.jpeg",
    "/joyas/anillo-trespiedras-1.jpeg",
    "/joyas/anillo-trespiedras-2.jpeg",
    
  ],
  destacado: false,
  tipo: "unica",
  categoria: "anillos"
},
{
  id: "anillo-pirita-triangular-ajustable",
  nombre: "Anillo Pirita Triangular Ajustable",
  precio: 70000,
  descripcionCorta:
    "Anillo ajustable en plata con pirita cruda en forma triangular, diseño protagonista y geométrico.",
  descripcionLarga:
    "Anillo ajustable en plata con una drusa de pirita montada en un triángulo alargado, enmarcado por un segundo triángulo metálico que le da volumen y presencia. La pirita aparece en pequeños cubos y destellos dorados que contrastan con el fondo más oscuro, creando un efecto de textura mineral muy marcado. El aro es cómodo y regulable, pensado para adaptarse desde tallas medias a grandes, ideal para usarlo como anillo protagonista en una mano casi desnuda o combinado con sortijas más finas.",
  fotos: [
    "/joyas/anillo-pirita-triangulob-2.jpeg",
    "/joyas/anillo-pirita-triangulob-3.jpeg",
    "/joyas/anillo-pirita-triangulob-1.jpeg",
  ],
  destacado: false,
  tipo: "unica",
  categoria: "anillos"
},
{
  id: "collar-cuarzo-rojo-perlas",
  nombre: "Collar Cuarzo Rojo y Perlas",
  precio: 40000,
  descripcionCorta:
    "Collar de cuarzo rojo y perlas blancas con cierre frontal dorado tipo argolla marinera.",
  descripcionLarga:
    "Collar de cuentas de cuarzo rojo combinadas con perlas blancas irregulares, armado a mano y terminado en un cierre frontal dorado tipo argolla marinera que se convierte en el centro del diseño. El contraste entre el rojo profundo del cuarzo y el brillo suave de las perlas crea una pieza elegante pero muy fácil de usar a diario. Queda al ras del cuello, ideal para lucir con escotes rectos o capas de collares más largos.",
  fotos: ["/joyas/collar-cuarzo-rojoperla-1.jpeg"],
  destacado: false,
  tipo: "unica",
  categoria: "colgantes"
},

];
