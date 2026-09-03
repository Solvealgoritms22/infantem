import { momentos } from "@/lib/contenido";
import { Asterisco } from "./doodles";

/**
 * Cinta continua con los momentos favoritos del año,
 * en rosa, ligeramente inclinada como cinta de regalo.
 */
export function Marquee() {
  const items = [...momentos, ...momentos]; // duplicado para el bucle infinito

  return (
    <section aria-label="Actividades destacadas de Infantem" className="relative py-6 overflow-hidden">
      <div className="-rotate-1 bg-rosa text-white py-3.5 shadow-[0_10px_30px_-12px_rgba(240,98,146,0.6)] overflow-hidden w-[104%] -ml-[2%]">
        <div className="anim-marquee flex w-max items-center">
          {items.map((m, i) => (
            <span key={i} className="flex items-center shrink-0" aria-hidden={i >= momentos.length}>
              <span className="font-display font-bold text-lg sm:text-xl px-5 tracking-wide">{m}</span>
              <Asterisco className="w-4 h-4 text-amarillo shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
