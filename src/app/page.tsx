import { Navbar } from "@/components/infantem/navbar";
import { Hero } from "@/components/infantem/hero";
import { Marquee } from "@/components/infantem/marquee";
import { Nosotros } from "@/components/infantem/nosotros";
import { Programas } from "@/components/infantem/programas";
import { UnDia } from "@/components/infantem/un-dia";
import { Galeria } from "@/components/infantem/galeria";
import { Testimonios } from "@/components/infantem/testimonios";
import { Preguntas } from "@/components/infantem/preguntas";
import { Contacto } from "@/components/infantem/contacto";
import { Footer } from "@/components/infantem/footer";
import { BotonWhatsApp } from "@/components/infantem/boton-whatsapp";
import { Onda } from "@/components/infantem/doodles";

export default function Pagina() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Nosotros />

        {/* transición crema → papel */}
        <div className="bg-crema text-papel -mb-px" aria-hidden="true">
          <Onda />
        </div>
        <Programas />

        {/* transición papel → amarillo */}
        <div className="bg-papel text-amarillo-claro -mb-px" aria-hidden="true">
          <Onda />
        </div>
        <UnDia />

        {/* transición amarillo → crema */}
        <div className="bg-amarillo-claro text-crema -mb-px" aria-hidden="true">
          <Onda />
        </div>
        <Galeria />

        {/* transición crema → papel */}
        <div className="bg-crema text-papel -mb-px" aria-hidden="true">
          <Onda />
        </div>
        <Testimonios />
        <Preguntas />
        <Contacto />
      </main>
      <Footer />
      <BotonWhatsApp />
    </>
  );
}
