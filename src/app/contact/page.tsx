import Contact from "@/components/sections/Contact";
import About   from "@/components/sections/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & À propos — Assistance technique Microsoft support ",
  description:
    "Prestataire contractuel Microsoft Corporation pour la France et l'Europe. Contactez notre équipe  pour toute intervention Windows.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">

      {/* Hero page */}
      <div className="py-16 px-4 text-center bg-[var(--color-dark-2)]
                      border-b border-[var(--color-border)]">
        <h1 className="text-4xl font-bold text-white mb-3">
          Contactez-nous
        </h1>
        <p className="text-[var(--color-muted)] max-w-xl mx-auto">
          Disponibles du lundi au samedi de 8h à 20h.
          Réponse garantie sous 2h pour toute demande d&apos;intervention.
        </p>
      </div>

      {/* Formulaire de contact */}
      <Contact />

      {/* Séparateur */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent
                        via-[var(--color-border)] to-transparent" />
      </div>

      {/* Section À propos */}
      <About />

    </div>
  );
}