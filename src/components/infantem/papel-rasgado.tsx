import Image from "next/image";

interface PapelRasgadoHeroProps {
  className?: string;
}

export function PapelRasgadoHero({ className = "" }: PapelRasgadoHeroProps) {
  return (
    <div className={`relative w-full max-w-[480px] aspect-[4/5] select-none ${className}`}>
      {/* ── 1. FOTO REALISTA RECORTADA CON CLIP-PATH VECTORIAL EXACTO ── */}
      <div
        className="absolute inset-[3%] overflow-hidden rounded-2xl"
        style={{
          clipPath:
            "polygon(22% 8%, 42% 4%, 65% 9%, 84% 18%, 95% 38%, 93% 62%, 84% 82%, 62% 94%, 38% 96%, 16% 88%, 6% 68%, 5% 42%, 12% 22%)",
        }}
      >
        <Image
          src="/img/hero-play.jpg"
          alt="Niños jugando felices en el patio de Infantem"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover scale-105"
        />

        {/* Sombra de profundidad interior proyectada bajo las solapas */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/45 via-transparent to-black/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none shadow-[inset_0_0_35px_rgba(0,0,0,0.4)]"
        />
      </div>

      {/* ── 2. MARCO SVG VECTORIAL DE SOLAPAS DE PAPEL CRAFT (#eadfc9) ── */}
      <svg
        viewBox="0 0 600 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_16px_28px_rgba(62,58,82,0.22)]"
        aria-hidden="true"
      >
        <defs>
          {/* Sombra suave de pliegues interiores */}
          <linearGradient id="craft-crease-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c5b59a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#eadfc9" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="craft-crease-bot" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#baa98e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#eadfc9" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="craft-highlight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff8ed" />
            <stop offset="100%" stopColor="#eadfc9" />
          </linearGradient>
        </defs>

        {/* ── BORDES RASGADOS Y SOLAPAS PLEGADAS (CRAFT #eadfc9) ── */}
        <g stroke="#242234" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          {/* ── SOLAPA SUPERIOR IZQUIERDA ── */}
          <path
            d="M 120 70 L 140 120 L 260 55 L 245 25 Z"
            fill="url(#craft-highlight)"
          />
          {/* Doblez interior */}
          <path d="M 140 120 L 245 25" strokeWidth="2.2" stroke="#baa98e" />

          {/* ── SOLAPA SUPERIOR PRINCIPAL (Doblada hacia arriba) ── */}
          <path
            d="M 235 45 L 260 70 L 390 50 L 420 15 L 320 18 Z"
            fill="#eadfc9"
          />
          <path d="M 260 70 L 390 50" strokeWidth="2.2" stroke="#baa98e" />
          {/* Fibras de papel */}
          <path d="M 285 58 L 295 40" strokeWidth="1.8" stroke="#ffffff" />
          <path d="M 350 52 L 360 30" strokeWidth="1.8" stroke="#ffffff" />

          {/* ── SOLAPA SUPERIOR DERECHA ── */}
          <path
            d="M 380 62 L 505 135 L 540 95 L 440 35 Z"
            fill="url(#craft-highlight)"
          />
          <path d="M 380 62 L 505 135" strokeWidth="2.2" stroke="#baa98e" />

          {/* ── SOLAPA LATERAL DERECHA (Plegada hacia afuera) ── */}
          <path
            d="M 495 130 L 570 280 L 590 260 L 525 155 Z"
            fill="#eadfc9"
          />
          <path
            d="M 555 270 L 560 460 L 590 440 L 580 290 Z"
            fill="url(#craft-highlight)"
          />
          <path d="M 555 270 L 560 460" strokeWidth="2.2" stroke="#baa98e" />

          {/* ── SOLAPA INFERIOR DERECHA (Doble pliegue) ── */}
          <path
            d="M 545 450 L 510 615 L 550 635 L 575 480 Z"
            fill="#eadfc9"
          />
          <path
            d="M 495 600 L 375 705 L 415 725 L 525 625 Z"
            fill="url(#craft-crease-bot)"
          />
          <path d="M 495 600 L 375 705" strokeWidth="2.2" stroke="#baa98e" />

          {/* ── SOLAPA INFERIOR PRINCIPAL ── */}
          <path
            d="M 390 690 L 225 720 L 210 745 L 375 735 Z"
            fill="#eadfc9"
          />
          <path d="M 390 690 L 225 720" strokeWidth="2.2" stroke="#baa98e" />
          <path d="M 270 705 L 265 730" strokeWidth="1.8" stroke="#ffffff" />
          <path d="M 330 698 L 335 722" strokeWidth="1.8" stroke="#ffffff" />

          {/* ── SOLAPA INFERIOR IZQUIERDA ── */}
          <path
            d="M 235 705 L 95 660 L 70 690 L 195 730 Z"
            fill="url(#craft-highlight)"
          />
          <path d="M 235 705 L 95 660" strokeWidth="2.2" stroke="#baa98e" />

          {/* ── SOLAPA LATERAL IZQUIERDA (Doblada) ── */}
          <path
            d="M 105 670 L 35 510 L 15 530 L 75 680 Z"
            fill="#eadfc9"
          />
          <path
            d="M 42 525 L 30 315 L 5 330 L 20 500 Z"
            fill="url(#craft-highlight)"
          />
          <path d="M 42 525 L 30 315" strokeWidth="2.2" stroke="#baa98e" />

          {/* ── SOLAPA CENTRAL IZQUIERDA ── */}
          <path
            d="M 38 330 L 75 165 L 45 145 L 18 300 Z"
            fill="#eadfc9"
          />
          <path
            d="M 70 180 L 135 65 L 105 45 L 50 155 Z"
            fill="url(#craft-crease-top)"
          />
          <path d="M 70 180 L 135 65" strokeWidth="2.2" stroke="#baa98e" />

          {/* ── CONTORNO INTERIOR PRINCIPAL DEL RASGADO ── */}
          <path
            d="M 135 65 
               L 260 70 
               L 380 62 
               L 495 130 
               L 555 270 
               L 560 460 
               L 505 615 
               L 375 705 
               L 225 720 
               L 95 660 
               L 35 510 
               L 30 315 
               L 70 180 Z"
            fill="none"
            stroke="#242234"
            strokeWidth="3.5"
          />
        </g>

        {/* ── LÍNEAS DE FIBRA DE PAPEL Y DETALLES DE DIBUJO ── */}
        <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
          <path d="M 160 85 L 180 80" />
          <path d="M 450 100 L 475 115" />
          <path d="M 520 210 L 535 230" />
          <path d="M 530 510 L 545 530" />
          <path d="M 140 680 L 165 675" />
          <path d="M 60 420 L 50 440" />
        </g>
      </svg>
    </div>
  );
}
