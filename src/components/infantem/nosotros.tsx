import Image from "next/image";
import { Revelar, TituloSeccion } from "./revelar";
import { Garabato, Mancha } from "./doodles";
import { IconoInstagram } from "./iconos";
import { sitio } from "@/lib/contenido";

const promesas = [
  {
    imagen: "/img/icon-cuidado-clean.png",
    titulo: "Cuidado de verdad",
    texto:
      "Grupos pequeños, protocolos claros y comunicación diaria contigo. Aquí cada peque es nombre, no número: sabemos su alergia, su siesta y su canción favorita.",
    rot: "-rotate-2",
  },
  {
    imagen: "/img/icon-juego-clean.png",
    titulo: "Aprender jugando",
    texto:
      "La mejor manera de aprender a esta edad es jugando. Proyectos por áreas, ciencia divertida, música y cuentos que convierten cada día en un descubrimiento.",
    rot: "rotate-1",
  },
  {
    imagen: "/img/icon-puertas-clean.png",
    titulo: "Puertas abiertas",
    texto:
      "Los papás son parte de Infantem: celebramos juntos el Día de la Familia, las madres y los padres, y siempre puedes venir a vernos sin cita previa.",
    rot: "rotate-2",
  },
];

const cifras = [
  { num: "6", unidad: "meses", texto: "la edad desde la que recibimos a los más chelitos", color: "text-rosa" },
  { num: "1er", unidad: "grado", texto: "hasta dónde los acompañamos en su etapa escolar", color: "text-azul" },
  { num: "+5,000", unidad: "momentos", texto: "publicados en Instagram desde hace años de pura alegría", color: "text-verde" },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <TituloSeccion
          nota="hola, somos Infantem"
          titulo={
            <>
              Una <span className="crayon-sub" style={{ ["--crayon-color" as string]: "#eaf3da" }}>segunda casa</span>{" "}
              donde tu peque
              <br className="hidden md:block" /> crece sin prisa y con raíces
            </>
          }
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          {/* historia */}
          <Revelar>
            <div className="space-y-5 text-tinta-suave leading-relaxed font-medium">
              <p>
                Infantem nació con una idea muy simple: que los primeros años de vida merecen tanto cariño
                como profesionalismo. Somos un centro de cuidado infantil y preescolar dominicano donde el
                diario de tu peque no lo escribe una pantalla, sino las manos llenas de pintura, las
                meriendas compartidas y las maestras que celebran cada paso como si fuera el primero.
              </p>
              <p>
                Nuestro día tiene ritmo de canción: círculo de la mañana, talleres, recreo, cuentos. Y el
                año también: excursiones fuera de este mundo, viernes de agua, fiestas de cumpleaños y
                campamentos de verano y navidad que los peques piden repetir. Todo pensado para que aprender
                se sienta exactamente igual que jugar.
              </p>
              <p>
                Si estás buscando un lugar donde dejar a tu peque con el corazón tranquilo, ven a conocernos.
                Cerramos la puerta y te lo mostramos todo: las aulas, el patio y hasta la lista de canciones
                del círculo de la mañana. Esa es la mejor presentación que podemos dar.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-7">
              <a
                href={sitio.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white pespunte rounded-full px-5 py-3 font-display font-bold text-sm hover:bg-rosa-claro transition-colors"
              >
                <IconoInstagram className="w-5 h-5 text-rosa" />
                {sitio.instagramHandle}
              </a>
              <span className="font-hand text-xl text-tinta-suave rotate-[-2deg]">
                te vemos por allá, subimos alegría a diario
              </span>
            </div>
          </Revelar>

          {/* promesas apiladas */}
          <div className="space-y-5 lg:pt-2">
            {promesas.map((p, i) => (
              <Revelar key={p.titulo} retraso={0.1 * i} y={24}>
                <article
                  className={`relative bg-white rounded-2xl p-6 shadow-[0_14px_34px_-16px_rgba(62,58,82,0.35)] ${p.rot} hover:rotate-0 transition-transform duration-300 border border-[#f1e8d8]`}
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3 -ml-1">
                    <Image
                      src={p.imagen}
                      alt={p.titulo}
                      fill
                      sizes="(max-width: 768px) 80px, 96px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">{p.titulo}</h3>
                  <p className="text-sm leading-relaxed text-tinta-suave font-medium">{p.texto}</p>
                </article>
              </Revelar>
            ))}
          </div>
        </div>

        {/* cifras en el margen de la libreta */}
        <div className="mt-16 md:mt-20 relative">
          <Garabato className="w-28 text-naranja/70 absolute -top-6 right-6 hidden md:block -rotate-6" />
          <div className="grid sm:grid-cols-3 gap-8 md:gap-6 text-center">
            {cifras.map((c, i) => (
              <Revelar key={c.unidad} retraso={0.08 * i}>
                <div className="group">
                  <p className={`font-display font-extrabold text-5xl md:text-6xl ${c.color} leading-none`}>
                    {c.num}
                    <span className="text-2xl md:text-3xl text-tinta font-bold ml-1.5">{c.unidad}</span>
                  </p>
                  <p className="text-sm text-tinta-suave font-semibold mt-2 max-w-[220px] mx-auto">{c.texto}</p>
                </div>
              </Revelar>
            ))}
          </div>
          <Mancha className="absolute -bottom-4 left-4 w-9 hidden md:block" color="#f9c8d6" />
        </div>
      </div>
    </section>
  );
}
