"use client";

import { useState } from "react";
import { Phone, Clock, MapPin, Send, Loader2, PartyPopper } from "lucide-react";
import { toast } from "sonner";
import { Revelar, TituloSeccion } from "./revelar";
import { sitio } from "@/lib/contenido";
import { IconoWhatsApp, IconoInstagram } from "./iconos";
import { SelloGiratorio } from "./doodles";

interface Formulario {
  nombre: string;
  nombrePeque: string;
  edadPeque: string;
  telefono: string;
  mensaje: string;
}

const vacio: Formulario = { nombre: "", nombrePeque: "", edadPeque: "", telefono: "", mensaje: "" };

const clasesInput =
  "w-full rounded-xl border-2 border-[#eadfc9] bg-white px-4 py-3 font-semibold text-tinta placeholder:text-tinta/35 focus:outline-none focus:border-verde focus:ring-4 focus:ring-verde/15 transition-all";

export function Contacto() {
  const [form, setForm] = useState<Formulario>(vacio);
  const [enviando, setEnviando] = useState(false);

  const actualizar = (campo: keyof Formulario) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [campo]: e.target.value });

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (enviando) return;
    setEnviando(true);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        toast.error(json.error ?? "No pudimos enviar tu mensaje. Inténtalo otra vez.");
        return;
      }
      toast.success("¡Recibido! Te llamamos bien pronto.", {
        description: "Gracias por escribirnos. En Infantem respondemos rápido, casi tan rápido como corren los peques.",
        icon: <PartyPopper className="w-4 h-4 text-naranja" />,
      });
      setForm(vacio);
    } catch {
      toast.error("Sin conexión con el servidor. Llámanos o escríbenos por WhatsApp.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section id="contacto" className="relative py-20 md:py-28 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -bottom-20 -right-24 w-96 h-96 bg-verde-claro blob" />
        <div className="absolute -top-16 -left-20 w-72 h-72 bg-naranja-claro blob" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <TituloSeccion
          nota="el primer paso es saludar"
          titulo={
            <>
              Ven a conocer tu{" "}
              <span className="crayon-sub" style={{ ["--crayon-color" as string]: "#eaf3da" }}>futura</span>{" "}
              escuela
            </>
          }
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* información */}
          <Revelar>
            <div className="space-y-5">
              <p className="text-tinta-suave font-medium leading-relaxed">
                Lo mejor para decidir es venir a oler la pintura fresca y escuchar el ruido feliz de la
                mañana. Coordinamos una visita sin compromiso: recorremos las aulas, presentamos a las
                maestras y respondemos todas tus preguntas de frente.
              </p>

              <ul className="space-y-4">
                {sitio.telefonos.map((t) => (
                  <li key={t.tel} className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-azul-claro text-azul shrink-0">
                      <Phone className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-tinta-suave uppercase tracking-wide">Llámanos</p>
                      <a href={`tel:${t.tel}`} className="font-display font-bold text-lg link-mano hover:text-azul">
                        {t.display}
                      </a>
                    </div>
                  </li>
                ))}

                <li className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-verde-claro text-verde shrink-0">
                    <IconoWhatsApp className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-tinta-suave uppercase tracking-wide">WhatsApp</p>
                    <a
                      href={sitio.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-bold text-lg link-mano hover:text-verde"
                    >
                      Escríbenos sin compromiso
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-rosa-claro text-rosa-fuerte shrink-0">
                    <IconoInstagram className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-tinta-suave uppercase tracking-wide">Instagram</p>
                    <a
                      href={sitio.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-bold text-base link-mano hover:text-rosa-fuerte break-all"
                    >
                      {sitio.instagramHandle}
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amarillo-claro text-naranja shrink-0">
                    <Clock className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-tinta-suave uppercase tracking-wide">Horario</p>
                    <p className="font-display font-bold text-lg">{sitio.horario}</p>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-naranja-claro text-naranja shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-tinta-suave uppercase tracking-wide">Dónde estamos</p>
                    <p className="font-display font-bold text-lg">{sitio.pais}</p>
                  </div>
                </li>
              </ul>

              <div className="relative bg-azul-claro/70 rounded-2xl p-5 mt-2 flex items-center gap-4">
                <SelloGiratorio className="w-20 h-20 shrink-0" fondo="#3fa9f5" tinta="#fffdf7" />
                <p className="font-hand text-xl md:text-2xl text-tinta/80 leading-tight">
                  agenda tu visita hoy mismo: el café es gratis y las risas sobran
                </p>
              </div>
            </div>
          </Revelar>

          {/* formulario */}
          <Revelar retraso={0.12} y={36}>
            <form
              onSubmit={enviar}
              className="relative bg-white rounded-3xl border border-[#f1e8d8] shadow-[0_24px_50px_-24px_rgba(62,58,82,0.45)] p-6 sm:p-8 rotate-[0.5deg] hover:rotate-0 transition-transform duration-300"
            >
              <span className="washi" aria-hidden="true" />

              <h3 className="font-display font-bold text-2xl">Cuéntanos de tu peque</h3>
              <p className="text-sm text-tinta-suave font-semibold mt-1 mb-6">
                Te contactamos el mismo día hábil para coordinar tu visita.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="nombre" className="block text-sm font-bold mb-1.5">
                    Tu nombre <span className="text-rosa-fuerte">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    minLength={2}
                    value={form.nombre}
                    onChange={actualizar("nombre")}
                    placeholder="María Pérez"
                    className={clasesInput}
                  />
                </div>
                <div>
                  <label htmlFor="nombrePeque" className="block text-sm font-bold mb-1.5">
                    Nombre del peque
                  </label>
                  <input
                    id="nombrePeque"
                    type="text"
                    value={form.nombrePeque}
                    onChange={actualizar("nombrePeque")}
                    placeholder="Mateo"
                    className={clasesInput}
                  />
                </div>
                <div>
                  <label htmlFor="edadPeque" className="block text-sm font-bold mb-1.5">
                    Edad del peque
                  </label>
                  <input
                    id="edadPeque"
                    type="text"
                    value={form.edadPeque}
                    onChange={actualizar("edadPeque")}
                    placeholder="2 años y medio"
                    className={clasesInput}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="telefono" className="block text-sm font-bold mb-1.5">
                    Tu teléfono <span className="text-rosa-fuerte">*</span>
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    required
                    value={form.telefono}
                    onChange={actualizar("telefono")}
                    placeholder="809 / 829 / 849 - ..."
                    className={clasesInput}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensaje" className="block text-sm font-bold mb-1.5">
                    ¿Quieres contarnos algo más?
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    value={form.mensaje}
                    onChange={actualizar("mensaje")}
                    placeholder="Nos interesa el programa de educación inicial para enero…"
                    className={`${clasesInput} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="mt-6 w-full inline-flex items-center justify-center gap-2.5 bg-rosa text-white font-display font-bold text-lg px-7 py-4 rounded-full sombra-sticker hover:-translate-y-0.5 hover:rotate-[0.5deg] active:translate-y-0 transition-transform duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosa-fuerte"
              >
                {enviando ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    Enviando…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" aria-hidden="true" />
                    Enviar y coordinar visita
                  </>
                )}
              </button>

              <p className="text-center text-xs font-semibold text-tinta-suave mt-4">
                Usamos tus datos solo para llamarte. Nada de spam, palabra de maestra.
              </p>
            </form>
          </Revelar>
        </div>
      </div>
    </section>
  );
}
