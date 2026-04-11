"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaWindows, FaShieldAlt, FaTools,
  FaNetworkWired, FaHeadset, FaLaptop,
} from "react-icons/fa";
import { scaleIn, staggerContainer, fadeUp } from "@/lib/variants";
import SectionTitle from "@/components/ui/SectionTitle";
import { SERVICES } from "@/constants";

const ICONS: Record<string, React.ElementType> = {
  FaWindows, FaShieldAlt, FaTools, FaNetworkWired, FaHeadset, FaLaptop,
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Nos Services"
          title="Tout ce dont vous avez besoin"
          subtitle="Une gamme complète de services informatiques pour particuliers et professionnels à Lyon et sa région."
        />

        {/* Image Windows 11 */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-10 rounded-2xl overflow-hidden border border-[var(--color-border)]
                     shadow-[var(--shadow-card)]"
        >
          <Image
            src="/images/home/windows11-setup.png"
            alt="Windows 11 interface"
            width={1200}
            height={500}
            className="w-full h-40 sm:h-56 object-cover"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div key={service.title} variants={scaleIn} custom={i}
                className="group bg-[var(--color-card)] border border-[var(--color-border)]
                           rounded-2xl p-5 sm:p-6
                           hover:border-[var(--color-primary)]/50
                           hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10
                                flex items-center justify-center mb-4
                                group-hover:bg-[var(--color-primary)]/20 transition-colors">
                  {Icon && <Icon className="text-[var(--color-primary)] text-lg" />}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}