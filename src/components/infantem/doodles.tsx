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
