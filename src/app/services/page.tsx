import Services from "@/components/sections/Services";
import WhyUs    from "@/components/sections/WhyUs";
import Contact  from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AssisTechnique Lyon",
  description: "Découvrez nos services : installation Windows, antivirus, maintenance, réseau et support à distance à Lyon.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <div className="py-16 px-4 text-center bg-[var(--color-dark-2)] border-b border-[var(--color-border)]">
        <h1 className="text-4xl font-bold text-white mb-3">Nos Services</h1>
        <p className="text-[var(--color-muted)] max-w-xl mx-auto">
          Tout ce qu&apos;il faut pour que votre environnement Windows soit sûr, rapide et fiable.
        </p>
      </div>
      <Services />
      <WhyUs />
      <Contact />
    </div>
  );
}