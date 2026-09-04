"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Wordmark } from "./logo";
import { Carita } from "./doodles";
import { enlacesNav, sitio } from "@/lib/contenido";

export function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setScroll(window.scrollY > 24);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scroll ? "bg-crema/90 backdrop-blur-md shadow-[0_1px_0_rgba(234,223,201,0.9),0_10px_30px_-18px_rgba(62,58,82,0.35)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 h-[72px]" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2 group" aria-label="Ir al inicio">
          <span className="transition-transform duration-300 group-hover:-rotate-6">
            <Carita variante={1} className="w-9 h-9" color="#3e3a52" />
          </span>
          <Wordmark className="text-2xl" />
        </a>

        {/* enlaces escritorio */}
        <ul className="hidden lg:flex items-center gap-7">
          {enlacesNav.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                className="link-mano font-bold text-[0.95rem] text-tinta/80 hover:text-tinta transition-colors focus-visible:outline-2 focus-visible:outline-rosa rounded-sm"
              >
                {e.etiqueta}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${sitio.telefonos[1].tel}`}
            className="hidden md:flex items-center gap-2 font-bold text-sm text-tinta/70 hover:text-verde transition-colors"
            aria-label={`Llámanos al ${sitio.telefonos[1].display}`}
          >
            <Phone className="w-4 h-4" />
            {sitio.telefonos[1].display}
          </a>
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center bg-rosa text-white font-display font-bold text-sm px-5 py-2.5 rounded-full sombra-sticker hover:-translate-y-0.5 hover:rotate-1 active:translate-y-0 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosa-fuerte"
          >
            Visítanos
          </a>
          <button
            onClick={() => setAbierto(!abierto)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-white pespunte border-2 border-dashed border-[#eadfc9] text-tinta hover:bg-amarillo-claro transition-colors"
            aria-expanded={abierto}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          >
            {abierto ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* menú móvil: overlay alegre */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-crema z-40 transition-all duration-300 ${
          abierto ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-2 pt-8 px-6">
          {enlacesNav.map((e, i) => (
            <li key={e.href} className="w-full max-w-xs" style={{ transitionDelay: `${i * 40}ms` }}>
              <a
                href={e.href}
                onClick={() => setAbierto(false)}
                className={`block text-center font-display font-bold text-2xl py-3 px-6 rounded-2xl transition-all duration-200 hover:rotate-1 ${
                  i % 2 === 0 ? "bg-amarillo-claro" : "bg-azul-claro"
                }`}
              >
                {e.etiqueta}
              </a>
            </li>
          ))}
          <li className="w-full max-w-xs mt-4">
            <a
              href="#contacto"
              onClick={() => setAbierto(false)}
              className="block text-center bg-rosa text-white font-display font-bold text-xl py-3.5 px-6 rounded-full sombra-sticker"
            >
              Visítanos
            </a>
          </li>
          <li className="mt-6 text-center">
            <p className="font-hand text-xl text-tinta-suave">llámanos, ¡te leemos enseguida!</p>
            <a href={`tel:${sitio.telefonos[1].tel}`} className="font-display font-bold text-xl text-verde">
              {sitio.telefonos[1].display}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
