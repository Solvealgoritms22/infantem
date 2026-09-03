import { Wordmark } from "./logo";
import { FilaCaritas, Corazon } from "./doodles";
import { enlacesNav, sitio } from "@/lib/contenido";
import { IconoInstagram, IconoWhatsApp } from "./iconos";
import { Phone } from "lucide-react";

export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-tinta text-crema">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid md:grid-cols-[1.2fr_0.8fr_1fr] gap-10">
          {/* marca */}
          <div>
            <Wordmark className="text-4xl" conTilt={false} />
            <p className="text-[0.7rem] font-bold tracking-[0.25em] text-azul uppercase mt-1.5">
              Centro de Cuidado Infantil y Preescolar
            </p>
            <FilaCaritas className="w-7 mt-4" color="#fff9ef" />
            <p className="text-sm text-crema/60 font-medium leading-relaxed mt-4 max-w-xs">
              Cuidamos, guiamos y acompañamos a los peques de la casa desde los 6 meses hasta 1er grado de
              primaria. En República Dominicana, con el corazón siempre en los primeros años.
            </p>
          </div>

          {/* navegación */}
          <nav aria-label="Pie de página">
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-crema/50 mb-4">
              Atajos
            </h3>
            <ul className="space-y-2.5">
              {enlacesNav.map((e) => (
                <li key={e.href}>
                  <a
                    href={e.href}
                    className="font-bold text-crema/85 hover:text-amarillo transition-colors text-[0.95rem]"
                  >
                    {e.etiqueta}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contacto" className="font-bold text-crema/85 hover:text-amarillo transition-colors text-[0.95rem]">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          {/* contacto */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-crema/50 mb-4">
              Estamos para ti
            </h3>
            <ul className="space-y-3">
              {sitio.telefonos.map((t) => (
                <li key={t.tel}>
                  <a
                    href={`tel:${t.tel}`}
                    className="inline-flex items-center gap-2.5 font-bold text-crema/85 hover:text-amarillo transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {t.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={sitio.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-bold text-crema/85 hover:text-amarillo transition-colors"
                >
                  <IconoWhatsApp className="w-4 h-4" />
                  WhatsApp directo
                </a>
              </li>
              <li>
                <a
                  href={sitio.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-bold text-crema/85 hover:text-amarillo transition-colors"
                >
                  <IconoInstagram className="w-4 h-4" />
                  {sitio.instagramHandle}
                </a>
              </li>
              <li className="text-sm text-crema/55 font-semibold pt-1">{sitio.horario}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-crema/15 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-semibold text-crema/50">
            © {anio} Infantem · Centro de Cuidado Infantil y Preescolar
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-crema/50">
            Hecho con
            <Corazon className="w-3.5 h-3.5 text-rosa" strokeWidth={4} />
            para los peques de la casa
          </p>
        </div>
      </div>
    </footer>
  );
}
