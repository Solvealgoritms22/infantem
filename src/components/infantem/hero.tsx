import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { Revelar } from "./revelar";
import { FilaCaritas, SelloGiratorio, Flecha } from "./doodles";
import { IconoWhatsApp } from "./iconos";
import { sitio } from "@/lib/contenido";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[110px] md:pt-[130px] pb-16 md:pb-24">
      {/* manchas de color e imágenes PNG de stickers escolares con fondo transparente */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none select-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-amarillo-claro blob" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-rosa-claro blob" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-azul-claro blob" />

        {/* 1. Superior izquierda: Bombillo de ideas */}
        <div
          className="absolute top-28 sm:top-20 left-[3%] sm:left-[5%] anim-flotar w-11 sm:w-14 md:w-16 aspect-square"
          style={{ ["--rot" as string]: "8deg", ["--delay" as string]: "0s" }}
        >
          <Image
            src="/img/doodle-bombillo.png"
            alt="Bombillo sticker"
            fill
            sizes="(max-width: 768px) 44px, 64px"
            className="object-contain drop-shadow-[0_6px_12px_rgba(250,204,21,0.3)]"
          />
        </div>

        {/* 2. Inferior izquierda: Lápiz escolar */}
        <div
          className="absolute bottom-10 sm:bottom-14 left-[4%] sm:left-[6%] anim-flotar w-12 sm:w-16 md:w-20 aspect-square"
          style={{ ["--delay" as string]: "0.6s", ["--rot" as string]: "-6deg" }}
        >
          <Image
            src="/img/doodle-lapiz.png"
            alt="Lápiz escolar sticker"
            fill
            sizes="(max-width: 768px) 48px, 80px"
            className="object-contain drop-shadow-[0_6px_12px_rgba(250,204,21,0.35)]"
          />
        </div>

        {/* 3. Superior derecha: Calendario / libreta escolar (solo visible en tablets y PC) */}
        <div
          className="hidden sm:block absolute sm:top-24 right-[4%] sm:right-[7%] anim-flotar sm:w-16 md:w-20 aspect-square"
          style={{ ["--delay" as string]: "0.9s", ["--rot" as string]: "6deg" }}
        >
          <Image
            src="/img/doodle-calendario.png"
            alt="Calendario escolar sticker"
            fill
            sizes="(max-width: 768px) 48px, 80px"
            className="object-contain drop-shadow-[0_6px_12px_rgba(52,211,153,0.3)]"
          />
        </div>

        {/* 4. Lateral derecha: Megáfono (en móvil sube a la esquina superior derecha) */}
        <div
          className="absolute top-24 sm:top-[50%] right-[3%] sm:right-[4%] lg:-right-2 anim-flotar w-11 sm:w-16 md:w-20 aspect-square"
          style={{ ["--delay" as string]: "0.4s", ["--rot" as string]: "-8deg" }}
        >
          <Image
            src="/img/doodle-megafono.png"
            alt="Megáfono sticker"
            fill
            sizes="(max-width: 768px) 44px, 80px"
            className="object-contain drop-shadow-[0_6px_12px_rgba(251,113,133,0.3)]"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        {/* ── columna de texto ── */}
        <div className="relative z-10 text-center lg:text-left">

          <Revelar retraso={0.08}>
            <h1 className="font-display font-bold text-[2.6rem] leading-[1.06] sm:text-6xl xl:text-[4.2rem] mt-6 mb-6">
              Aquí los peques{" "}
              <span className="relative inline-block -rotate-1">
                <span className="crayon-sub" style={{ ["--crayon-color" as string]: "#ffc933" }}>
                  juegan,
                </span>
              </span>{" "}
              <span className="relative inline-block rotate-1">
                <span className="crayon-sub" style={{ ["--crayon-color" as string]: "#ddf0fc" }}>
                  aprenden
                </span>
              </span>{" "}
              y crecen{" "}
              <span className="text-rosa">felices.</span>
            </h1>
          </Revelar>

          <Revelar retraso={0.16}>
            <p className="text-base sm:text-lg text-tinta-suave max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              En <strong className="text-tinta font-extrabold">Infantem</strong> cuidamos a tu peque desde los
              6 meses hasta 1er grado de primaria: maestras que lo conocen por su nombre, jornadas llenas de
              juego y un lugar que se siente como segunda casa.
            </p>
          </Revelar>

          <Revelar retraso={0.24}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
              <a
                href={sitio.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-verde text-white font-display font-bold text-base sm:text-lg px-7 py-3.5 rounded-full sombra-sticker hover:-translate-y-1 hover:rotate-1 active:translate-y-0 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde"
              >
                <IconoWhatsApp className="w-5 h-5" />
                Escríbenos por WhatsApp
              </a>
              <a
                href="#programas"
                className="inline-flex items-center gap-2 bg-white pespunte rounded-full px-6 py-3.5 font-display font-bold text-base text-tinta hover:bg-amarillo-claro transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja"
              >
                Ver programas
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </Revelar>

          <Revelar retraso={0.32}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-9">
              <p className="order-1 sm:order-2 text-sm font-semibold text-tinta-suave text-center sm:text-left">
                Más de <span className="text-tinta font-extrabold">3,000 familias</span> nos acompañan
                <span className="block font-hand text-lg text-tinta/60 -mt-0.5">síguenos en Instagram, subimos alegría todos los días</span>
              </p>
              <div className="order-2 sm:order-1 flex justify-center">
                <FilaCaritas className="w-8" color="#3e3a52" />
              </div>
            </div>
          </Revelar>
        </div>

        {/* ── columna ilustrada ── */}
        <Revelar retraso={0.15} y={40} className="relative z-10 max-w-md lg:max-w-none mx-auto w-full">
          <div className="relative">
            {/* arcos de color detrás, como la cúpula de la escuela */}
            <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full bg-amarillo/60" />
            <div aria-hidden="true" className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-t-full bg-rosa/50" />

            {/* ilustración con arco (guiño al letrero de la cúpula) */}
            <figure className="relative rounded-t-full overflow-hidden border-4 border-white shadow-[0_20px_50px_-20px_rgba(62,58,82,0.4)] aspect-[4/5]">
              <Image
                src="/img/hero-play.png"
                alt="Ilustración de niños jugando felices en el patio de Infantem: una niña sopla burbujas, un niño corre con una cometa y la maestra sonríe"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </figure>

            {/* sello giratorio */}
            <div className="absolute -bottom-6 -left-6 sm:-left-10">
              <SelloGiratorio className="w-24 h-24 sm:w-32 sm:h-32" />
            </div>

            {/* notita pegada con cinta 
            <div className="absolute -right-2 sm:-right-8 top-8 rotate-6 bg-white rounded-lg px-4 py-3 shadow-md pespunte">
              <p className="font-hand text-xl leading-none text-rosa">¡viernes de agua!</p>
              <p className="text-[0.68rem] font-bold text-tinta-suave mt-1">todas las semanas hay algo especial</p>
            </div>*/}

            {/* flecha de dibujo animado hacia el CTA */}
            <Flecha className="absolute -bottom-10 right-10 w-16 text-tinta/50 -rotate-[24deg] hidden lg:block" />
          </div>
        </Revelar>
      </div>
    </section>
  );
}
