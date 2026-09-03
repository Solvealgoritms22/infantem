/**
 * Contenido central del sitio Infantem.
 * Teléfonos, enlaces y textos tomados del perfil oficial
 * de Instagram @infantemcuidadoypreescolar.
 */

export const sitio = {
  nombre: "Infantem",
  nombreLargo: "Infantem · Centro de Cuidado Infantil y Preescolar",
  instagram: "https://www.instagram.com/infantemcuidadoypreescolar/",
  instagramHandle: "@infantemcuidadoypreescolar",
  telefonos: [
    { display: "829-978-9988", tel: "+18299789988", whatsapp: true },
    { display: "849-943-1199", tel: "+18499431199", whatsapp: false },
  ],
  whatsapp: "https://wa.me/18299789988?text=%C2%A1Hola%20Infantem!%20Quiero%20informaci%C3%B3n%20sobre%20sus%20programas%20%F0%9F%92%9B",
  pais: "República Dominicana",
  horario: "Lunes a viernes · 7:00 a.m. – 5:00 p.m.",
};

export const enlacesNav = [
  { href: "#nosotros", etiqueta: "Nosotros" },
  { href: "#programas", etiqueta: "Programas" },
  { href: "#un-dia", etiqueta: "Un día aquí" },
  { href: "#galeria", etiqueta: "Galería" },
  { href: "#preguntas", etiqueta: "Preguntas" },
];

export const momentos = [
  "Viernes de Agua",
  "Ciencia Divertida",
  "Excursiones",
  "Campamentos de Verano",
  "Hora del Cuento",
  "Arte y Manualidades",
  "Fiestas de Cumpleaños",
  "Campamento de Navidad",
  "Días de Disfraces",
  "Música y Movimiento",
];

export interface Programa {
  id: string;
  nombre: string;
  rango: string;
  descripcion: string;
  detalles: string[];
  imagen: string;
  color: "rosa" | "azul" | "verde" | "naranja";
  rotacion: number;
  nota: string;
}

export const programas: Programa[] = [
  {
    id: "cuidado",
    nombre: "Centro de Cuidado Infantil",
    rango: "Desde los 6 meses",
    descripcion:
      "Un espacio seguro y abrazador donde los más peques exploran el mundo con todos los sentidos, mientras mamá y papá trabajan tranquilos.",
    detalles: ["Atención personalizada", "Rutinas de sueño y alimentación", "Estimulación temprana"],
    imagen: "/img/prog-maternal.png",
    color: "rosa",
    rotacion: -1.2,
    nota: "los más chelitos",
  },
  {
    id: "inicial",
    nombre: "Educación Inicial",
    rango: "1 a 5 años",
    descripcion:
      "El preescolar como debe ser: aprendiendo letras, números y colores a pura canción, cuento y pintura. Preparación real para el siguiente paso.",
    detalles: ["Proyectos por áreas", "Lectoescritura inicial", "Motricidad fina y gruesa"],
    imagen: "/img/prog-inicial.png",
    color: "azul",
    rotacion: 0.9,
    nota: "pura diversión",
  },
  {
    id: "primaria",
    nombre: "1er Grado de Primaria",
    rango: "6 años",
    descripcion:
      "El gran salto a la primaria de la mano de maestras que conocen a cada peque por su nombre, con grupos reducidos y mucha confianza.",
    detalles: ["Grupos reducidos", "Lectura y matemáticas", "Acompañamiento cercano"],
    imagen: "/img/prog-primaria.png",
    color: "verde",
    rotacion: -0.8,
    nota: "¡ya somos grandes!",
  },
  {
    id: "campamentos",
    nombre: "Campamentos de Verano y Navidad",
    rango: "Vacaciones",
    descripcion:
      "Cuando termina el año escolar la diversión no para: excursiones, juegos con agua, ciencia loca y días temáticos que los peques no olvidan.",
    detalles: ["Semanas temáticas", "Juegos con agua", "Manualidades y meriendas"],
    imagen: "/img/prog-campamentos.png",
    color: "naranja",
    rotacion: 1.4,
    nota: "vacaciones épicas",
  },
];

export const diaTipico = [
  {
    hora: "7:00 – 8:00 a.m.",
    titulo: "¡Bienvenidos!",
    texto: "Recepción puerta a puerta, abrazos y desayuno para arrancar con energía.",
    color: "amarillo",
  },
  {
    hora: "8:00 – 9:00 a.m.",
    titulo: "Círculo de la mañana",
    texto: "Calendario, canciones, letras y números: el cerebro se enciende jugando.",
    color: "azul",
  },
  {
    hora: "9:00 – 9:30 a.m.",
    titulo: "Merienda",
    texto: "Fruta y algo rico para recargar pilas. Aquí se aprende también a compartir.",
    color: "verde",
  },
  {
    hora: "9:30 – 10:30 a.m.",
    titulo: "Talleres y descubrimiento",
    texto: "Cada día algo distinto: arte, ciencia divertida, movimiento o construcciones.",
    color: "rosa",
  },
  {
    hora: "10:30 – 11:30 a.m.",
    titulo: "Recreo al aire libre",
    texto: "Correr, trepar, soplar burbujas… y cuando toca, ¡viernes de agua!",
    color: "naranja",
  },
  {
    hora: "11:30 – 12:00 m.",
    titulo: "Cuento y despedida",
    texto: "Historia del día, respiración tranquila y salida con una sonrisa gigante.",
    color: "azul",
  },
];

export const testimonios = [
  {
    cita:
      "Dejar a tu bebé por primera vez no es fácil, pero en Infantem nos recibieron como familia. Mi hija entra corriendo todas las mañanas y eso lo dice todo.",
    autor: "Carolina R.",
    detalle: "mamá de Emma · Centro de Cuidado",
    color: "rosa",
    rotacion: -1.5,
  },
  {
    cita:
      "Mi hijo aprendió las letras cantando y ahora nos lee los carteles del carro. Las maestras tienen una paciencia infinita y un amor genuino por los niños.",
    autor: "José M.",
    detalle: "papá de Sebastián · Educación Inicial",
    color: "azul",
    rotacion: 1.2,
  },
  {
    cita:
      "El campamento de verano fue la mejor decisión: salía con pintura en las manos, arena en los zapatos y una sonrisa que no le cabía en la cara. Repetimos sin pensarlo.",
    autor: "Génesis P.",
    detalle: "mamá de Mateo · Campamento de Verano",
    color: "verde",
    rotacion: -0.9,
  },
];

export const preguntas = [
  {
    q: "¿Desde qué edad reciben a los peques?",
    a: "Recibimos bebés desde los 6 meses en nuestro Centro de Cuidado Infantil, y los acompañamos sin saltos hasta la Educación Inicial y el 1er Grado de Primaria. Así el peque crece en un lugar que ya conoce y con personas que ya quiere.",
  },
  {
    q: "¿Qué incluye el cuidado diario?",
    a: "Rutinas de alimentación y sueño, estimulación temprana, actividades por áreas (arte, música, movimiento, ciencia), recreo al aire libre y seguimiento diario que compartimos con mamá y papá. La merienda y las actividades están dentro de la jornada.",
  },
  {
    q: "¿Cómo es el proceso de inscripción?",
    a: "Súper sencillo: llámanos o escríbenos por WhatsApp, coordinamos una visita para que conozas las aulas y conozcas a las maestras, y de ahí completamos el formulario de matrícula. Siempre recomendamos que el peque venga a conocer su nueva escuela antes de empezar.",
  },
  {
    q: "¿Los campamentos son solo para estudiantes de Infantem?",
    a: "¡No! Los campamentos de verano y de navidad están abiertos también a peques que estudian en otros centros. Son semanas por separado, con temas nuevos cada semana, así que puedes inscribirlos por el tiempo que necesites.",
  },
  {
    q: "¿Qué pasa si mi peque se enferma o necesita algo durante el día?",
    a: "Te llamamos de inmediato. Tenemos un protocolo claro de salud y primeros auxilios, y las maestras mantienen comunicación directa con cada familia por WhatsApp. Aquí nadie es un número: conocemos las alergias, los miedos y hasta la canción favorita de cada peque.",
  },
];
