"use client";
import { motion } from "framer-motion";
import { FaWindows, FaShieldAlt, FaTools, FaNetworkWired, FaHeadset, FaLaptop } from "react-icons/fa";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/variants";
import SectionTitle from "@/components/ui/SectionTitle";
import { SERVICES } from "@/constants";

const ICONS: Record<string, React.ElementType> = {
  FaWindows, FaShieldAlt, FaTools, FaNetworkWired, FaHeadset, FaLaptop,
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Nos Services"
          title="Tout ce dont vous avez besoin"
          subtitle="Une gamme complète de services informatiques pour particuliers et professionnels à Lyon et sa région."
        />

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div key={service.title} variants={scaleIn} custom={i}
                className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6
                           hover:border-[var(--color-primary)]/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4
                                group-hover:bg-[var(--color-primary)]/20 transition-colors">
                  {Icon && <Icon className="text-[var(--color-primary)] text-xl" />}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}