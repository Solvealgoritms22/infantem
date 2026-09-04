"use client";

import { useEffect, useState } from "react";
import { sitio } from "@/lib/contenido";
import { IconoWhatsApp } from "./iconos";

/**
 * Botón flotante de WhatsApp con estela de dibujo:
 * aparece tras pasar el hero y saluda con una notita.
 */
export function BotonWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setVisible(window.scrollY > 480);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
        }`}
    >
      <span className="hidden sm:block bg-white rounded-2xl rounded-br-none px-4 py-2.5 shadow-lg font-hand text-xl text-tinta/85 rotate-2">
        ¿Hablamos? Escríbenos…
      </span>
      <a
        href={sitio.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-verde text-white shadow-[0_10px_28px_-8px_rgba(124,179,66,0.8)] hover:scale-110 active:scale-95 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde"
      >
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-verde/50 animate-ping opacity-30" />
        <IconoWhatsApp className="w-7 h-7 relative" />
      </a>
    </div>
  );
}
