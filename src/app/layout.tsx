import type { Metadata } from "next";
import { Baloo_2, Nunito, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Infantem · Centro de Cuidado Infantil y Preescolar",
  description:
    "En Infantem cuidamos, guiamos y acompañamos a los peques desde los primeros meses hasta 1er grado de primaria. Educación inicial con amor, juego y campamentos de verano y navidad en República Dominicana.",
  keywords: [
    "Infantem",
    "guardería República Dominicana",
    "centro de cuidado infantil",
    "preescolar",
    "educación inicial",
    "campamentos de verano",
    "maternal",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Infantem · Centro de Cuidado Infantil y Preescolar",
    description:
      "Juega, aprende y crece con nosotros. Educación inicial, 1er grado y campamentos para los peques de la casa.",
    locale: "es_DO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${baloo.variable} ${nunito.variable} ${caveat.variable} antialiased bg-crema text-tinta min-h-screen flex flex-col`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
