import Image from "next/image";
import { sitio } from "@/lib/contenido";

interface MarcoPapelHeroProps {
  /** Ruta de la foto que deseas mostrar dentro del marco rasgado */
  fotoSrc?: string;
  /** Texto alternativo para accesibilidad */
  fotoAlt?: string;
  className?: string;
}

export function MarcoPapelHero({
  fotoSrc = sitio.heroFoto || "/img/hero-play.jpg",
  fotoAlt = "Niños de Infantem jugando felices en el patio",
  className = "",
}: MarcoPapelHeroProps) {
  return (
    <div className={`relative w-full max-w-[460px] sm:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[891/934] select-none mx-auto ${className}`}>
      {/* ── 1. FOTO CONFIGURABLE POR EL USUARIO (capa inferior) ── */}
      <div className="absolute top-[17%] bottom-[19%] left-[18%] right-[16%] overflow-hidden rounded-2xl">
        <Image
          src={fotoSrc}
          alt={fotoAlt}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Sombra de profundidad interior proyectada bajo el papel */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none shadow-[inset_0_0_24px_rgba(0,0,0,0.35)]"
        />
      </div>

      {/* ── 2. HOJA DE PAPEL BLANCO RASGADO (sin tarjetas ni fondos detrás) ── */}
      <Image
        src="/img/marco-libreta.png"
        alt="Papel blanco rasgado artesanal"
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
        className="object-contain pointer-events-none z-10 drop-shadow-[0_20px_35px_rgba(62,58,82,0.18)]"
      />
    </div>
  );
}
