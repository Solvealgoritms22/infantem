import { FilaCaritas } from "./doodles";

/**
 * Wordmark "Infantem" recreado con las letras alternando los colores
 * oficiales del logo real (rosa → naranja → verde → azul) y un ligero
 * baile de rotación y línea base, tal como la marca original.
 */
export function Wordmark({
  className = "text-3xl",
  conTilt = true,
}: {
  className?: string;
  conTilt?: boolean;
}) {
  const letras = "Infantem".split("");
  const paleta = ["#f06292", "#f7941d", "#7cb342", "#3fa9f5"];

  return (
    <span
      className={`font-display font-extrabold leading-none tracking-tight inline-flex ${className}`}
      aria-label="Infantem"
      role="text"
    >
      {letras.map((letra, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block"
          style={{
            color: paleta[i % 4],
            transform: conTilt
              ? `rotate(${i % 2 === 0 ? -2.5 : 2.5}deg) translateY(${i % 2 === 0 ? 0 : 2}px)`
              : undefined,
          }}
        >
          {letra}
        </span>
      ))}
    </span>
  );
}

/** Lockup completo: wordmark + tagline + las 4 caritas oficiales */
export function LogoCompleto({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <Wordmark className="text-4xl md:text-5xl" />
      <span className="text-[0.6rem] md:text-xs font-bold tracking-[0.28em] text-azul uppercase text-center">
        Centro de Cuidado Infantil y Preescolar
      </span>
      <FilaCaritas className="w-7 md:w-8" color="#3e3a52" />
    </div>
  );
}
