"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Aparición suave al hacer scroll — como si alguien pegara
 * los elementos en el cuaderno, uno a uno, con una ligerísima rotación.
 */
export function Revelar({
  children,
  retraso = 0,
  y = 28,
  rot = 0,
  className,
}: {
  children: ReactNode;
  retraso?: number;
  y?: number;
  rot?: number;
  className?: string;
}) {
  const reducir = useReducedMotion();

  if (reducir) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, rotate: rot }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: retraso, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Encabezado de sección con anotación a mano + título con crayón */
export function TituloSeccion({
  nota,
  titulo,
  colorCrayon = "#ffc933",
  alineado = "centro",
}: {
  nota: string;
  titulo: ReactNode;
  colorCrayon?: string;
  alineado?: "centro" | "izquierda";
}) {
  const centrado = alineado === "centro";
  return (
    <div className={`mb-10 md:mb-14 ${centrado ? "text-center" : "text-left"}`}>
      <span
        className={`font-hand text-2xl md:text-3xl text-tinta-suave -rotate-2 inline-block ${
          centrado ? "" : "ml-1"
        }`}
      >
        {nota}
      </span>
      <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.12] mt-1">{titulo}</h2>
    </div>
  );
}
