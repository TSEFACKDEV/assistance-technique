import Contact from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — AssisTechnique Lyon",
  description: "Contactez AssisTechnique pour une intervention rapide à Lyon. Téléphone, email, adresse.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="py-16 px-4 text-center bg-[var(--color-dark-2)] border-b border-[var(--color-border)]">
        <h1 className="text-4xl font-bold text-white mb-3">Contactez-nous</h1>
        <p className="text-[var(--color-muted)] max-w-xl mx-auto">
          Disponibles du lundi au samedi de 8h à 20h. Réponse garantie sous 2h.
        </p>
      </div>
      <Contact />
    </div>
  );
}