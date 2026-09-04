import { Revelar, TituloSeccion } from "./revelar";
import { diaTipico } from "@/lib/contenido";
import { DoodleSol } from "./doodles";


/**
 * Línea de tiempo de un día cualquiera en Infantem.
 * La línea es un trazo punteado (pespunte) y cada momento
 * cuelga alternando lados, como horario pegado en la nevera.
 */
export function UnDia() {
  return (
    <section id="un-dia" className="relative py-20 md:py-28 bg-amarillo-claro overflow-hidden">
      <DoodleSol className="absolute top-10 right-[8%] w-16 anim-flotar hidden lg:block drop-shadow-sm" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <TituloSeccion
          nota="hora por hora, sin secretos"
          titulo={
            <>
              Así se ve <span className="crayon-sub" style={{ ["--crayon-color" as string]: "#ffffff" }}>un día</span>{" "}
              en Infantem
            </>
          }
        />

        <div className="relative">
          {/* línea de pespunte vertical */}
          <span
            aria-hidden="true"
            className="absolute left-[26px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 border-l-[3px] border-dashed border-tinta/25"
          />

          <ol className="space-y-8 md:space-y-0">
            {diaTipico.map((m, i) => {
              const par = i % 2 === 0;
              return (
                <li key={m.hora} className="relative md:grid md:grid-cols-2 md:gap-16 md:pb-10">
                  {/* punto pintado sobre la línea */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-7 w-[15px] h-[15px] rounded-full bg-gray-400 ring-4 ring-white shadow-sm"
                  />
                  <Revelar
                    retraso={0.05 * i}
                    className={`pl-14 md:pl-0 ${par ? "md:col-start-1 md:pr-4 md:text-right" : "md:col-start-2 md:pl-4"}`}
                  >
                    <article
                      className={`inline-block bg-white rounded-2xl px-6 py-5 shadow-[0_12px_30px_-16px_rgba(62,58,82,0.4)] border border-[#f1e8d8] ${par ? "md:rotate-[-0.6deg] hover:md:rotate-0" : "md:rotate-[0.6deg] hover:md:rotate-0"} transition-transform duration-300 text-left w-full sm:w-auto sm:min-w-[320px] max-w-full`}
                    >
                      <span className="font-hand text-2xl text-naranja leading-none">{m.hora}</span>
                      <h3 className="font-display font-bold text-xl mt-1.5">{m.titulo}</h3>
                      <p className="text-sm text-tinta-suave font-medium leading-relaxed mt-1.5">{m.texto}</p>
                    </article>
                  </Revelar>
                </li>
              );
            })}
          </ol>
        </div>

        <Revelar retraso={0.1}>
          <p className="text-center mt-10 text-sm font-bold text-tinta/60">
            * Horario orientativo de la jornada de la mañana. Pregúntanos por la jornada extendida.
          </p>
        </Revelar>
      </div>
    </section>
  );
}
