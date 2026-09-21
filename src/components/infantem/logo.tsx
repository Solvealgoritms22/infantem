import { FilaCaritas } from "./doodles";

/**
 * Wordmark "Infantem" recreado con las letras alternando los colores
 * de la marca actual: rosa para "In", verde para "fan" y azul para "tem".
 */
export function Wordmark({
  className = "text-3xl",
  conTilt = true,
}: {
  className?: string;
  conTilt?: boolean;
}) {
  const letras = "Infantem".split("");
  const paleta = [
    "#f06292", // I
    "#f06292", // n
    "#7cb342", // f
    "#7cb342", // a
    "#7cb342", // n
    "#3fa9f5", // t
    "#3fa9f5", // e
    "#3fa9f5", // m
  ];

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
            color: paleta[i],
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
