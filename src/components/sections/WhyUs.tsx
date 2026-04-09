"use client";
import { motion } from "framer-motion";
import { FaMedal, FaClock, FaUserShield, FaMapMarkerAlt } from "react-icons/fa";
import { fadeUp, slideLeft, slideRight } from "@/lib/variants";
import SectionTitle from "@/components/ui/SectionTitle";

const REASONS = [
  { icon: FaMedal,       title: "Expertise certifiée",     desc: "Techniciens qualifiés Microsoft avec années d'expérience." },
  { icon: FaClock,       title: "Intervention rapide",     desc: "Délai d'intervention garanti sous 1h à Lyon et alentours." },
  { icon: FaUserShield,  title: "Licence Avast officielle",desc: "Nous détenons une licence Avast Business pour vous protéger au meilleur prix." },
  { icon: FaMapMarkerAlt,title: "Basés à Lyon",            desc: "14 rue Garibaldi, 69006 — au cœur de Lyon pour vous servir." },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-4 bg-[var(--color-dark-2)]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Pourquoi nous ?"
          title="Des experts à votre service"
          subtitle="Nous combinons expertise technique et proximité pour vous offrir le meilleur service."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            const variant = i % 2 === 0 ? slideLeft : slideRight;
            return (
              <motion.div key={r.title} variants={variant} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className="flex gap-4 bg-[var(--color-card)] border border-[var(--color-border)]
                           rounded-2xl p-6 hover:border-[var(--color-primary)]/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                  <Icon className="text-[var(--color-primary)] text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{r.title}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}