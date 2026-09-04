/**
 * Biblioteca de garabatos SVG dibujados a mano.
 * Todos los trazos son intencionalmente "torpes" (líneas onduladas,
 * cierres imperfectos) para reproducir el estilo ilustrado del logo
 * real de Infantem: caritas de trazo fino, estrellas y rayas de crayón.
 */

interface DoodleProps {
  className?: string;
  style?: React.CSSProperties;
  strokeWidth?: number;
}

const base = "inline-block align-middle";

/** Carita estilo logo Infantem — 4 variantes (coletas, moños, pico, rulos) */
export function Carita({
  variante = 0,
  className = "w-10 h-10",
  color = "currentColor",
  ...props
}: DoodleProps & { variante?: 0 | 1 | 2 | 3; color?: string }) {
  const caras = [
    // v0 — niña con coletas
    <>
      <circle cx="13.5" cy="26" r="5.4" />
      <circle cx="50.5" cy="26" r="5.4" />
      <path d="M20.5 28 Q 26 21.5 32 27 Q 38 21.5 43.5 28" />
    </>,
    // v1 — niña con moños arriba
    <>
      <circle cx="20.5" cy="17" r="4.6" />
      <circle cx="43.5" cy="17" r="4.6" />
      <path d="M19.5 28 Q 32 18.5 44.5 28" />
    </>,
    // v2 — niño con pelo de picos
    <>
      <path d="M19.5 29.5 L 23 20.5 L 27 27 L 31.5 18.5 L 36 27 L 41 19.5 L 44.5 29" />
    </>,
    // v3 — niño con rulos
    <>
      <path d="M19.5 29 q 2.5-7.5 6.5-2.5 q 2.5-6.5 6-1.5 q 3-6 6 .5 q 3.5-5 6.5 4" />
    </>,
  ];

  return (
    <svg viewBox="0 0 64 64" fill="none" className={`inline-block align-middle ${className}`} aria-hidden="true" {...props}>
      <g stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        {/* cabeza torpe a propósito */}
        <path d="M32 21 C 41 20.4 47.6 26.8 47.4 36 C 47.2 45.2 40.6 51.6 31.6 51.4 C 22.8 51.2 16.6 44.6 16.8 35.6 C 17 26.8 23.4 21.6 32 21 Z" />
        {caras[variante]}
        <path d="M26 43 Q 32 48.5 38 43" />
      </g>
      <circle cx="26.5" cy="35.5" r="1.7" fill={color} />
      <circle cx="37.5" cy="35.5" r="1.7" fill={color} />
      <circle cx="21.5" cy="41.5" r="2.4" fill="#f8bbd0" opacity="0.85" />
      <circle cx="42.5" cy="41.5" r="2.4" fill="#f8bbd0" opacity="0.85" />
    </svg>
  );
}

/** Ola garabateada */
export function Garabato({ className = "w-24", style, strokeWidth = 5 }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 30" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <path
        d="M4 19 Q 13 5 24 13 T 44 13 T 64 13 T 84 13 T 112 11"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Destello de 4 puntas (estrella chispa) */
export function Destello({ className = "w-6", style, strokeWidth = 3 }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <path
        d="M20 3 C 21.5 12 24 16.5 34 20 C 24 23.5 21.5 28 20 37 C 18.5 28 16 23.5 6 20 C 16 16.5 18.5 12 20 3 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Corazón torpe */
export function Corazon({ className = "w-6", style, strokeWidth = 3.5 }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 44" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <path
        d="M24 40 C 9 30 3.5 19 9 11.5 C 13.8 5 22 6.5 24 13.5 C 26 6.5 34.2 5 39 11.5 C 44.5 19 39 30 24 40 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Espiral a lápiz */
export function Espiral({ className = "w-8", style, strokeWidth = 3.5 }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <path
        d="M25 25 c 0-2.4 3.2-2.8 4.6-1 c 2 2.5-0.8 6.4-4.4 6.2 c-5-0.3-7.8-6-5.2-10.2 c 3-5 10.8-5 14.5-0.8 c 4.2 4.9 2.2 13.2-3.6 16 c-6.8 3.3-15.6-0.7-17.8-7.8 C 10.8 19 15.6 11 24 10.4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Asterisco de dibujo animado */
export function Asterisco({ className = "w-5", style, strokeWidth = 4 }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
        <path d="M16 3.5 V 28.5" />
        <path d="M4.5 9.8 L 27.5 22.2" />
        <path d="M27.5 9.8 L 4.5 22.2" />
      </g>
    </svg>
  );
}

/** Flecha curva dibujada a mano */
export function Flecha({ className = "w-16", style, strokeWidth = 4 }: DoodleProps) {
  return (
    <svg viewBox="0 0 96 60" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 7 C 26 42 52 50 80 39" />
        <path d="M70 31.5 L 82.5 38.5 L 74 49" />
      </g>
    </svg>
  );
}

/** Rayón grueso de crayón */
export function Rayon({ className = "w-20", style, strokeWidth = 7 }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 24" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <path
        d="M4 15 C 22 8 40 18 58 12 S 92 7 116 11"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Sol con rayos torcidos */
export function Sol({ className = "w-10", style, strokeWidth = 3.5 }: DoodleProps) {
  return (
    <svg viewBox="0 0 72 72" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
        <circle cx="36" cy="36" r="14" />
        <path d="M36 6 V 15" />
        <path d="M36 57 V 66" />
        <path d="M6 36 H 15" />
        <path d="M57 36 H 66" />
        <path d="M14.5 14.5 L 21 21" />
        <path d="M51 51 L 57.5 57.5" />
        <path d="M57.5 14.5 L 51 21" />
        <path d="M21 51 L 14.5 57.5" />
      </g>
    </svg>
  );
}

/** Nube blandita */
export function Nube({ className = "w-16", style, strokeWidth = 3.5 }: DoodleProps) {
  return (
    <svg viewBox="0 0 96 48" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <path
        d="M24 40 C 12 40 7 32 11 25 C 6 19 14 11 21 14 C 24 6 36 4 41 11 C 46 4 59 6 61 13 C 69 9 79 14 77 22 C 85 24 86 34 78 37 C 74 40 66 40 62 40 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Salpicadura de pintura (rellena) */
export function Mancha({
  className = "w-10",
  color = "#ffc933",
  style,
}: DoodleProps & { color?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <path
        fill={color}
        d="M24 6 C 32 4 40 10 41 18 C 42 24 38 26 40 31 C 42 37 36 43 29 42 C 24 41.4 22 38 17 39.6 C 10 42 3.6 36 6 29 C 7.6 24.4 4.6 22 6.4 16.6 C 8.6 10 15 8 19 10.4 C 21 8.4 22 6.6 24 6 Z"
      />
    </svg>
  );
}

/** Divisor ondulado para separar secciones (relleno con color) */
export function Onda({
  className = "",
  color = "currentColor",
  flip = false,
}: DoodleProps & { color?: string; flip?: boolean }) {
  const d = (() => {
    let path = "M0 32 ";
    for (let x = 0; x < 1440; x += 96) {
      path += `C ${x + 24} 8, ${x + 72} 8, ${x + 96} 32 `;
    }
    path += "L 1440 64 L 0 64 Z";
    return path;
  })();
  return (
    <svg
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      className={`block w-full h-[38px] md:h-[52px] ${className}`}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <path d={d} fill={color} />
    </svg>
  );
}

/** Sello circular giratorio con texto en círculo */
export function SelloGiratorio({
  texto = "JUEGA · APRENDE · CRECE · INFANTEM · ",
  className = "w-28 h-28",
  fondo = "#ffc933",
  tinta = "#3e3a52",
}: {
  texto?: string;
  className?: string;
  fondo?: string;
  tinta?: string;
}) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute inset-0 rounded-full anim-girar">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="circulo-sello" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
          </defs>
          <circle cx="50" cy="50" r="49" fill={fondo} stroke={tinta} strokeWidth="1.5" />
          <text fontSize="10.2" fontWeight="800" fill={tinta} letterSpacing="1.6" style={{ fontFamily: "var(--font-baloo)" }}>
            <textPath href="#circulo-sello">{texto}</textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Carita variante={1} className="w-1/2 h-1/2" color={tinta} />
      </div>
    </div>
  );
}

/** Fila de las 4 caritas oficiales del logo */
export function FilaCaritas({
  className = "w-9",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <Carita variante={0} className={className} color={color} />
      <Carita variante={1} className={className} color={color} />
      <Carita variante={2} className={className} color={color} />
      <Carita variante={3} className={className} color={color} />
    </div>
  );
}

/* ==========================================================================
 * ICONOS ESTILO FLYER / STICKER ESCOLAR INFANTEM
 * Ilustraciones con trazo de tinta negra marcada, colores vibrantes
 * y curvas divertidas hechas a mano como en los avisos oficiales de Infantem.
 * ========================================================================== */

/** 💡 Bombillo de ideas / foco con filamento y brillo */
export function DoodleBombillo({ className = "w-12 h-12", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 70 90" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      {/* Cuerpo del bombillo */}
      <path
        d="M20 52 C 14 44 10 35 12 24 C 14.5 11 26 4 37 4 C 49 4 58 13 58 25 C 58 35 54 44 48 52 L 46 62 L 22 62 Z"
        fill="#facc15"
      />
      {/* Casquillo roscado */}
      <rect x="23" y="62" width="22" height="12" rx="2" fill="#e2e8f0" />
      <path d="M26 74 C 26 77 29 80 34 80 C 39 80 42 77 42 74 Z" fill="#94a3b8" />
      {/* Contorno y filamento estilo cómic */}
      <g stroke="#242234" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 54 C 15 46 11 36 13 25 C 15.5 12 26 5 37 5 C 48.5 5 57 14 57 25.5 C 57 36 53 46 47 54 L 45 63 L 23 63 Z" />
        {/* Filamento */}
        <path d="M28 35 L 31 22 Q 34 18 37 22 Q 40 18 43 22 L 40 35" />
        <path d="M28 35 L 28 50" />
        <path d="M40 35 L 40 50" />
        {/* Roscas */}
        <path d="M23 68 H 45" />
        <path d="M24 74 H 44" />
        <path d="M28 74 C 28 78 30 81 34 81 C 38 81 40 78 40 74" />
      </g>
      {/* Brillo */}
      <path d="M19 22 C 20 14 26 10 32 8" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** ✏️ Lápiz escolar amarillo con punta afilada y borrador rosa */
export function DoodleLapiz({ className = "w-12 h-12", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 70 120" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <g transform="rotate(-32 35 60)">
        {/* Cuerpo amarillo */}
        <rect x="22" y="26" width="26" height="60" fill="#facc15" />
        {/* Borrador rosa */}
        <rect x="22" y="86" width="26" height="15" rx="5" fill="#fb7185" />
        {/* Casquillo metálico */}
        <rect x="22" y="82" width="26" height="6" fill="#e2e8f0" />
        {/* Madera afilada */}
        <polygon points="22,26 48,26 35,4" fill="#fed7aa" />
        {/* Grafito negro */}
        <polygon points="30,13 40,13 35,4" fill="#242234" />

        {/* Trazos negros marcados */}
        <g stroke="#242234" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 86 V 26 L 35 4 L 48 26 V 86 C 48 92 48 99 35 99 C 22 99 22 92 22 86 Z" />
          <line x1="30" y1="26" x2="30" y2="82" />
          <line x1="40" y1="26" x2="40" y2="82" />
          {/* Ondita de madera */}
          <path d="M22 26 Q 26 23 30 26 Q 35 23 40 26 Q 44 23 48 26" fill="none" />
          <line x1="22" y1="82" x2="48" y2="82" />
          <line x1="22" y1="88" x2="48" y2="88" />
        </g>
      </g>
    </svg>
  );
}

/** 📢 Megáfono / Altavoz con ondas sonoras */
export function DoodleMegafono({ className = "w-14 h-14", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 80" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      {/* Cono coral/salmón */}
      <path d="M26 34 L 58 18 C 62 16 66 18 66 22 V 54 C 66 58 62 60 58 58 L 26 44 Z" fill="#fb7185" />
      {/* Borde frontal */}
      <ellipse cx="66" cy="38" rx="5" ry="19" fill="#fed7aa" />
      {/* Boquilla */}
      <rect x="15" y="32" width="12" height="14" rx="3" fill="#facc15" />
      {/* Mango */}
      <path d="M36 42 L 32 64 C 31 67 34 70 38 70 C 41 70 43 67 43 64 L 44 46" fill="#f8fafc" />

      {/* Contornos negros */}
      <g stroke="#242234" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 32 H 26 V 46 H 15 Z" />
        <path d="M26 34 L 58 18 C 61 16.5 66 18 66 22 V 54 C 66 58 61 59.5 58 58 L 26 44" />
        <ellipse cx="66" cy="38" rx="5" ry="19" />
        <path d="M36 42 L 32 64 C 31 67 34 70 38 70 C 41 70 43 67 43 64 L 44 46" />
        {/* Ondas de sonido */}
        <path d="M78 24 Q 86 38 78 52" />
        <path d="M86 16 Q 96 38 86 60" />
        <path d="M75 14 L 80 10" />
        <path d="M75 62 L 80 66" />
      </g>
    </svg>
  );
}

/** 📅 Calendario / libreta escolar con anillas y fechas */
export function DoodleCalendario({ className = "w-14 h-14", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 90 90" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <g transform="rotate(7 45 45)">
        {/* Hoja de fondo */}
        <rect x="18" y="20" width="58" height="60" rx="6" fill="#f8fafc" stroke="#242234" strokeWidth="2.8" />
        {/* Portada verde mint */}
        <rect x="14" y="24" width="58" height="58" rx="6" fill="#34d399" />

        {/* Trazos negros */}
        <g stroke="#242234" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="24" width="58" height="58" rx="6" />
          <line x1="14" y1="39" x2="72" y2="39" />
          {/* Cuadrícula de marcas "X" */}
          <path d="M22 48 L 28 54 M 28 48 L 22 54" />
          <path d="M38 48 L 44 54 M 44 48 L 38 54" />
          <path d="M54 48 L 60 54 M 60 48 L 54 54" />
          <path d="M22 62 L 28 68 M 28 62 L 22 68" />
          <path d="M38 62 L 44 68 M 44 62 L 38 68" />
          <path d="M54 62 L 60 68 M 60 62 L 54 68" />

          {/* Anillas espirales */}
          <path d="M23 16 V 28" strokeWidth="3.5" />
          <path d="M37 16 V 28" strokeWidth="3.5" />
          <path d="M51 16 V 28" strokeWidth="3.5" />
          <path d="M63 16 V 28" strokeWidth="3.5" />
        </g>
      </g>
    </svg>
  );
}

/** 🔍 Lupa de explorador con lente celeste y reflejo */
export function DoodleLupa({ className = "w-14 h-14", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 85 85" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <g transform="rotate(-15 42 42)">
        {/* Cristal celeste */}
        <circle cx="36" cy="36" r="22" fill="#93c5fd" />
        {/* Reflejo estilo zigzag */}
        <path d="M26 28 L 44 28 L 30 46 L 46 46" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />

        {/* Marco y mango */}
        <g stroke="#242234" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="36" cy="36" r="22" />
          <rect x="49" y="49" width="10" height="24" rx="4" fill="#facc15" transform="rotate(-45 49 49)" />
          <line x1="48" y1="48" x2="54" y2="54" strokeWidth="4" />
        </g>
      </g>
    </svg>
  );
}

/** ⭐ Estrella gordita y tierna con relleno amarillo y trazo negro */
export function DoodleEstrella({ className = "w-12 h-12", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 70 70" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <path
        d="M35 7 C 37.5 17.5 42.5 21.5 53 24.5 C 44.5 32 43.5 38.5 47.5 49 C 39 44.5 33 46.5 26.5 53 C 27.5 41.5 23.5 36 15 32.5 C 24.5 27.5 27.5 20.5 35 7 Z"
        fill="#facc15"
      />
      <path
        d="M35 7 C 37.5 17.5 42.5 21.5 53 24.5 C 44.5 32 43.5 38.5 47.5 49 C 39 44.5 33 46.5 26.5 53 C 27.5 41.5 23.5 36 15 32.5 C 24.5 27.5 27.5 20.5 35 7 Z"
        stroke="#242234"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 18 C 32 22 34 23 38 24" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/** ✉️ Sobre de carta rosa con clip sujetador */
export function DoodleCarta({ className = "w-14 h-14", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 90 75" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <g transform="rotate(-8 45 37)">
        {/* Cuerpo del sobre */}
        <rect x="12" y="16" width="66" height="46" rx="5" fill="#fda4af" />
        <path d="M12 16 L 45 42 L 78 16 Z" fill="#fb7185" />

        {/* Contorno */}
        <g stroke="#242234" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="16" width="66" height="46" rx="5" />
          <path d="M12 16 L 45 42 L 78 16" />
          <path d="M12 62 L 34 40" />
          <path d="M78 62 L 56 40" />
        </g>

        {/* Clip negro sujetador */}
        <path
          d="M58 8 V 30 C 58 35 66 35 66 30 V 14 C 66 6 52 6 52 14 V 32"
          stroke="#242234"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

/** 📋 Tabla con hoja de notas y ondas de escritura */
export function DoodleTabla({ className = "w-14 h-14", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 95" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <g transform="rotate(-6 40 47)">
        {/* Base verde */}
        <rect x="12" y="14" width="56" height="72" rx="7" fill="#10b981" />
        {/* Hoja blanca */}
        <rect x="18" y="22" width="44" height="58" rx="4" fill="#ffffff" />

        {/* Trazos */}
        <g stroke="#242234" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="14" width="56" height="72" rx="7" />
          {/* Clip superior */}
          <rect x="28" y="8" width="24" height="12" rx="3" fill="#cbd5e1" />
          <circle cx="40" cy="14" r="2.5" fill="#242234" />
          {/* Ondas verdes simulando escritura */}
          <path d="M24 36 Q 30 32 36 36 T 48 36 T 56 36" stroke="#10b981" strokeWidth="2.8" />
          <path d="M24 46 Q 30 42 36 46 T 48 46 T 56 46" stroke="#10b981" strokeWidth="2.8" />
          <path d="M24 56 Q 30 52 36 56 T 48 56 T 56 56" stroke="#10b981" strokeWidth="2.8" />
          <path d="M24 66 Q 30 62 36 66 T 48 66" stroke="#10b981" strokeWidth="2.8" />
        </g>
      </g>
    </svg>
  );
}

/** ☀️ Sol radiante estilo cómic con relleno amarillo y trazo negro */
export function DoodleSol({ className = "w-14 h-14", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <circle cx="40" cy="40" r="18" fill="#facc15" />
      <g stroke="#242234" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="40" cy="40" r="18" />
        <path d="M40 8 V 16" />
        <path d="M40 64 V 72" />
        <path d="M8 40 H 16" />
        <path d="M64 40 H 72" />
        <path d="M17 17 L 23 23" />
        <path d="M57 57 L 63 63" />
        <path d="M63 17 L 57 23" />
        <path d="M23 57 L 17 63" />
      </g>
    </svg>
  );
}

/** ☁️ Nube tierna con relleno celeste pastel y trazo negro */
export function DoodleNube({ className = "w-16 h-12", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 60" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <path
        d="M26 48 C 14 48 8 39 12 30 C 7 23 15 13 23 16 C 27 7 40 5 45 13 C 51 5 65 7 67 15 C 76 11 87 16 85 26 C 94 28 95 40 86 44 C 82 48 73 48 68 48 Z"
        fill="#bae6fd"
      />
      <path
        d="M26 48 C 14 48 8 39 12 30 C 7 23 15 13 23 16 C 27 7 40 5 45 13 C 51 5 65 7 67 15 C 76 11 87 16 85 26 C 94 28 95 40 86 44 C 82 48 73 48 68 48 Z"
        stroke="#242234"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 32 C 38 28 50 30 56 34" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** ✨ Chispitas / Destellitos de 4 puntas */
export function DoodleChispa({ className = "w-6 h-6", style, color = "#facc15" }: DoodleProps & { color?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={`inline-block align-middle ${className}`} style={style} aria-hidden="true">
      <path
        d="M16 2 C 17 9 20 12 28 16 C 20 19 17 22 16 30 C 15 22 12 19 4 16 C 12 12 15 9 16 2 Z"
        fill={color}
        stroke="#242234"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
