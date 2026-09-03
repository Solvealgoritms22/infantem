import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const esquema = z.object({
  nombre: z.string().trim().min(2, "Cuéntanos tu nombre").max(120),
  nombrePeque: z.string().trim().max(120).optional().or(z.literal("")),
  edadPeque: z.string().trim().max(40).optional().or(z.literal("")),
  telefono: z
    .string()
    .trim()
    .min(7, "Necesitamos un teléfono para llamarte")
    .max(30)
    .regex(/^[+\d\s()-]+$/, "El teléfono solo puede tener números y símbolos (+ - ( ))"),
  mensaje: z.string().trim().max(1500).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    const cuerpo = await req.json();
    const datos = esquema.safeParse(cuerpo);

    if (!datos.success) {
      return NextResponse.json(
        { ok: false, error: datos.error.issues[0]?.message ?? "Datos incompletos" },
        { status: 400 }
      );
    }

    const { nombre, nombrePeque, edadPeque, telefono, mensaje } = datos.data;

    await db.mensajeContacto.create({
      data: {
        nombre,
        nombrePeque: nombrePeque || null,
        edadPeque: edadPeque || null,
        telefono,
        mensaje: mensaje || null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error guardando mensaje de contacto:", error);
    return NextResponse.json(
      { ok: false, error: "Algo salió mal de nuestra parte. Inténtalo de nuevo o llámanos." },
      { status: 500 }
    );
  }
}
