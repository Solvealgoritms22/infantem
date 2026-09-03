import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Revelar, TituloSeccion } from "./revelar";
import { preguntas, sitio } from "@/lib/contenido";
import { Garabato } from "./doodles";

export function Preguntas() {
  return (
    <section id="preguntas" className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <TituloSeccion
          nota="resolvemos tus dudas"
          titulo={
            <>
              Preguntas de mamá y papá,{" "}
              <span className="crayon-sub" style={{ ["--crayon-color" as string]: "#ffefd6" }}>contestadas</span>{" "}
              sin letra pequeña
            </>
          }
        />

        <Revelar>
          <Accordion type="single" collapsible className="space-y-4">
            {preguntas.map((p, i) => (
              <AccordionItem
                key={p.q}
                value={`pregunta-${i}`}
                className="bg-white rounded-2xl border border-[#f1e8d8] shadow-[0_10px_26px_-18px_rgba(62,58,82,0.4)] px-6 data-[state=open]:bg-amarillo-claro/60 transition-colors"
              >
                <AccordionTrigger className="font-display font-bold text-left text-[1.05rem] leading-snug py-5 hover:no-underline hover:text-rosa-fuerte [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-rosa">
                  {p.q}
                </AccordionTrigger>
                <AccordionContent className="text-tinta-suave font-medium leading-relaxed pb-6 text-[0.95rem]">
                  {p.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Revelar>

        <Revelar retraso={0.1}>
          <div className="mt-10 text-center">
            <Garabato className="w-24 text-azul/60 mx-auto -rotate-6" />
            <p className="font-semibold text-tinta-suave mt-2">
              ¿Otra pregunta? Llámanos al{" "}
              <a href={`tel:${sitio.telefonos[0].tel}`} className="text-verde font-extrabold link-mano">
                {sitio.telefonos[0].display}
              </a>{" "}
              y te respondemos de frente.
            </p>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
