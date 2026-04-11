"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMedal, FaClock, FaUserShield, FaMapMarkerAlt } from "react-icons/fa";
import { fadeUp, slideLeft, slideRight } from "@/lib/variants";
import SectionTitle from "@/components/ui/SectionTitle";

const REASONS = [
  { icon: FaMedal,        title: "Expertise certifiée",      desc: "Techniciens qualifiés Microsoft avec années d'expérience.", variant: slideLeft  },
  { icon: FaClock,        title: "Intervention rapide",      desc: "Délai d'intervention garanti sous 1h à Lyon et alentours.", variant: slideRight },
  { icon: FaUserShield,   title: "Licence Avast officielle", desc: "Nous détenons une licence Avast Business pour vous protéger au meilleur prix.", variant: slideLeft  },
  { icon: FaMapMarkerAlt, title: "Basés à Lyon",             desc: "14 rue Garibaldi, 69006 — au cœur de Lyon pour vous servir.", variant: slideRight },
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[var(--color-dark-2)]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Pourquoi nous ?"
          title="Des experts à votre service"
          subtitle="Nous combinons expertise technique et proximité pour vous offrir le meilleur service."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                variants={r.variant} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i}
                className="flex gap-4 bg-[var(--color-card)] border border-[var(--color-border)]
                           rounded-2xl p-5 sm:p-6
                           hover:border-[var(--color-primary)]/40 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10
                                flex items-center justify-center shrink-0">
                  <Icon className="text-[var(--color-primary)] text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
                    {r.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bannière technicien */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-[var(--color-border)] relative"
        >
          <Image
            src="/images/home/tech-support.png"
            alt="Technicien assistance Windows"
            width={1200}
            height={400}
            className="w-full h-44 sm:h-64 object-cover object-top"
          />
          <div className="absolute inset-0
                          bg-gradient-to-r from-[var(--color-dark-2)]/85
                          via-[var(--color-dark-2)]/40 to-[var(--color-dark-2)]/85" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center">
              <p className="text-white font-bold text-lg sm:text-2xl mb-1">
                Intervention à domicile &amp; en entreprise
              </p>
              <p className="text-[var(--color-muted)] text-xs sm:text-sm">
                France — Déplacement rapide garanti
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}