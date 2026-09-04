import Image from "next/image";
import { Revelar, TituloSeccion } from "./revelar";
import { testimonios } from "@/lib/contenido";

const fondos: Record<string, string> = {
  rosa: "bg-rosa-claro",
  azul: "bg-azul-claro",
  verde: "bg-verde-claro",
};

const pinIconos: Record<string, string> = {
  rosa: "/img/pin-heart-3d.jpg",
  azul: "/img/pin-star-3d.jpg",
  verde: "/img/pin-clover-3d.jpg",
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
                <div
                  className="absolute -top-6 left-6 w-12 h-12 rounded-full overflow-hidden shadow-[0_8px_16px_-4px_rgba(62,58,82,0.3)] border-2 border-white ring-2 ring-black/5 bg-white anim-flotar"
                  style={{ animationDelay: `${i * 0.4}s` }}
                  aria-hidden="true"
                >
                  <Image
                    src={pinIconos[t.color] || "/img/pin-heart-3d.jpg"}
                    alt="Pin testimonio"
                    fill
                    sizes="48px"
                    className="object-cover scale-110"
                  />
                </div>
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
