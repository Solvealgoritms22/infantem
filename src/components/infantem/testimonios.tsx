import { Revelar, TituloSeccion } from "./revelar";
import { testimonios } from "@/lib/contenido";
import { Corazon } from "./doodles";

const fondos: Record<string, string> = {
  rosa: "bg-rosa-claro",
  azul: "bg-azul-claro",
  verde: "bg-verde-claro",
};

const puntos: Record<string, string> = {
  rosa: "text-rosa-fuerte",
  azul: "text-azul",
  verde: "text-verde",
};

export function Testimonios() {
  return (
    <section id="familias" className="relative py-20 md:py-28 bg-papel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <TituloSeccion
          nota="lo que dicen las familias"
          titulo={
            <>
              Papás y mamás que duermen
              <br className="hidden sm:block" />{" "}
              <span className="crayon-sub" style={{ ["--crayon-color" as string]: "#ddf0fc" }}>tranquilos</span>
            </>
          }
        />

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 items-start">
          {testimonios.map((t, i) => (
            <Revelar key={t.autor} retraso={0.1 * i} y={30}>
              <figure
                className={`relative rounded-2xl ${fondos[t.color]} p-7 pt-9 ${t.rotacion > 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0 transition-transform duration-300 shadow-[0_16px_36px_-18px_rgba(62,58,82,0.4)] h-full`}
              >
                <span
                  className={`absolute -top-5 left-6 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm ${puntos[t.color]}`}
                  aria-hidden="true"
                >
                  <Corazon className="w-6 h-6 anim-latido" strokeWidth={3} />
                </span>
                <blockquote className="text-[0.95rem] leading-relaxed font-semibold text-tinta/90">
                  “{t.cita}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-display font-bold">{t.autor}</p>
                  <p className="text-xs font-bold text-tinta-suave">{t.detalle}</p>
                </figcaption>
              </figure>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
