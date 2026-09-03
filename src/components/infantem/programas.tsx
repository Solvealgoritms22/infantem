import Image from "next/image";
import { Revelar, TituloSeccion } from "./revelar";
import { Asterisco, Destello } from "./doodles";
import { programas, sitio } from "@/lib/contenido";
import { IconoWhatsApp } from "./iconos";

const colores: Record<string, { sticker: string; lista: string; borde: string; mano: string }> = {
  rosa: {
    sticker: "bg-rosa text-white",
    lista: "text-rosa-fuerte",
    borde: "border-rosa",
    mano: "text-rosa",
  },
  azul: {
    sticker: "bg-azul text-white",
    lista: "text-azul",
    borde: "border-azul",
    mano: "text-azul",
  },
  verde: {
    sticker: "bg-verde text-white",
    lista: "text-verde",
    borde: "border-verde",
    mano: "text-verde",
  },
  naranja: {
    sticker: "bg-naranja text-white",
    lista: "text-naranja",
    borde: "border-naranja",
    mano: "text-naranja",
  },
};

export function Programas() {
  return (
    <section id="programas" className="relative py-20 md:py-28 bg-papel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <TituloSeccion
            nota="para cada etapa, un plan"
            titulo={
              <>
                Programas que crecen
                <br className="hidden sm:block" /> al ritmo de tu peque
              </>
            }
            colorCrayon="#ddf0fc"
            alineado="izquierda"
          />
          <Revelar retraso={0.1}>
            <a
              href={sitio.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex shrink-0 items-center gap-2.5 bg-verde text-white font-display font-bold px-6 py-3 rounded-full sombra-sticker hover:-translate-y-0.5 hover:rotate-1 transition-transform duration-200"
            >
              <IconoWhatsApp className="w-5 h-5" />
              Pregunta por cupos
            </a>
          </Revelar>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {programas.map((p, i) => {
            const c = colores[p.color];
            const invertido = i % 2 === 1;
            return (
              <Revelar key={p.id} retraso={0.08 * i} y={32}>
                <article
                  className={`group bg-white rounded-3xl border border-[#f1e8d8] shadow-[0_16px_40px_-20px_rgba(62,58,82,0.35)] p-4 sm:p-5 ${invertido ? "md:rotate-[0.8deg]" : "md:-rotate-[0.8deg]"} hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 h-full`}
                >
                  <div className="flex flex-col gap-5">
                    <figure className={`relative rounded-2xl overflow-hidden aspect-[16/10] ${invertido ? "md:order-2" : ""}`}>
                      <Image
                        src={p.imagen}
                        alt={`Ilustración del programa ${p.nombre} de Infantem`}
                        fill
                        sizes="(max-width: 768px) 92vw, 46vw"
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/95 font-display font-bold text-xs px-3.5 py-1.5 shadow-sm">
                        {p.rango}
                      </span>
                    </figure>

                    <div className={`px-1.5 pb-2 ${invertido ? "md:order-1" : ""}`}>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display font-bold text-2xl leading-tight">{p.nombre}</h3>
                        <span className={`font-hand text-xl shrink-0 rotate-3 ${c.mano} mt-0.5`}>{p.nota}</span>
                      </div>
                      <p className="text-[0.95rem] text-tinta-suave leading-relaxed font-medium mt-2.5">
                        {p.descripcion}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {p.detalles.map((d) => (
                          <li key={d} className="flex items-center gap-2.5 text-sm font-bold text-tinta/85">
                            <Asterisco className={`w-3.5 h-3.5 shrink-0 ${c.lista}`} strokeWidth={5} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Revelar>
            );
          })}
        </div>

        <Revelar retraso={0.15}>
          <p className="text-center mt-12 text-sm font-semibold text-tinta-suave flex items-center justify-center gap-2">
            <Destello className="w-4 h-4 text-amarillo" />
            ¿No sabes en qué grupo encaja tu peque? Escríbenos y lo resolvemos juntos en dos mensajes.
          </p>
        </Revelar>
      </div>
    </section>
  );
}
