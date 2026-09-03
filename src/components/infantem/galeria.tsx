import Image from "next/image";
import { Revelar, TituloSeccion } from "./revelar";
import { sitio } from "@/lib/contenido";
import { IconoInstagram } from "./iconos";
import { Destello } from "./doodles";

const polas = [
  { src: "/img/gal-arte.png", pie: "pintura sin reglas", rot: "-rotate-3", y: "md:translate-y-4" },
  { src: "/img/gal-agua.png", pie: "¡viernes de agua!", rot: "rotate-2", y: "" },
  { src: "/img/gal-ciencia.png", pie: "pequeños científicos", rot: "rotate-1", y: "md:translate-y-6" },
  { src: "/img/gal-cuentos.png", pie: "hora del cuento", rot: "rotate-3", y: "md:-translate-y-2" },
  { src: "/img/gal-cumple.png", pie: "cumpleaños feliz", rot: "-rotate-2", y: "md:translate-y-3" },
  { src: "/img/gal-juegos.png", pie: "a recorrer el patio", rot: "rotate-2", y: "md:-translate-y-4" },
];

export function Galeria() {
  return (
    <section id="galeria" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <TituloSeccion
          nota="retales de nuestros días"
          titulo={
            <>
              Lo que pasa aquí,
              <br className="hidden sm:block" /> se pega en la{" "}
              <span className="crayon-sub" style={{ ["--crayon-color" as string]: "#fce4ec" }}>nevera</span>
            </>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-8">
          {polas.map((p, i) => (
            <Revelar key={p.src} retraso={0.06 * i} y={30}>
              <figure className={`polaroid ${p.rot} ${p.y} relative`}>
                <span className="washi" aria-hidden="true" />
                <div className="relative aspect-square overflow-hidden rounded-sm bg-crema">
                  <Image
                    src={p.src}
                    alt={`Momento ilustrado de Infantem: ${p.pie}`}
                    fill
                    sizes="(max-width: 768px) 44vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="font-hand text-xl md:text-2xl text-tinta/80 text-center pt-2.5 leading-none">
                  {p.pie}
                </figcaption>
              </figure>
            </Revelar>
          ))}
        </div>

        <Revelar retraso={0.1}>
          <div className="text-center mt-14">
            <p className="text-sm font-semibold text-tinta-suave max-w-md mx-auto">
              Estos días están ilustrados con cariño, pero los momentos reales —los que sudan, ríen y se
              manchan— viven en nuestro Instagram.
            </p>
            <a
              href={sitio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 bg-gradient-to-r from-rosa to-naranja text-white font-display font-bold px-6 py-3 rounded-full sombra-sticker hover:-translate-y-0.5 hover:rotate-1 transition-transform duration-200"
            >
              <IconoInstagram className="w-5 h-5" />
              Ver fotos reales en Instagram
              <Destello className="w-4 h-4 text-amarillo-claro" />
            </a>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
