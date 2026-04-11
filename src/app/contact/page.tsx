"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaClock, FaWindows, FaHandshake, FaGlobe,
} from "react-icons/fa";
import { fadeUp, staggerContainer } from "@/lib/variants";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/constants";

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen">

      {/* ── Hero simple ── */}
      <div className="py-14 px-4 text-center bg-[var(--color-dark-2)]
                      border-b border-[var(--color-border)]">
        <motion.div
          variants={staggerContainer} initial="hidden" animate="visible"
        >
          <motion.span variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full text-xs font-semibold
                       bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]
                       border border-[var(--color-primary)]/20">
            <FaWindows /> Assistance technique Microsoft (Windows)
          </motion.span>

          <motion.h1 variants={fadeUp} custom={1}
            className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Contactez-nous
          </motion.h1>

          <motion.p variants={fadeUp} custom={2}
            className="text-[var(--color-muted)] max-w-md mx-auto text-sm sm:text-base">
            Disponibles du lundi au samedi, 8h–20h.
            Réponse garantie sous 2h.
          </motion.p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14 space-y-10">

        {/* ── Coordonnées ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Téléphones */}
          <motion.div variants={fadeUp}
            className="bg-[var(--color-card)] border border-[var(--color-border)]
                       rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <FaPhone className="text-[var(--color-primary)]" />
              <span className="text-white font-semibold text-sm">Téléphone</span>
            </div>
            {COMPANY.phones.map((phone) => (
              <a key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="text-[var(--color-muted)] hover:text-white
                           transition-colors text-sm font-medium">
                {phone}
              </a>
            ))}
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeUp} custom={1}
            className="bg-[var(--color-card)] border border-[var(--color-border)]
                       rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <FaEnvelope className="text-[var(--color-primary)]" />
              <span className="text-white font-semibold text-sm">Email</span>
            </div>
            <a href={`mailto:${COMPANY.email}`}
              className="text-[var(--color-muted)] hover:text-white
                         transition-colors text-sm break-all font-medium">
              {COMPANY.email}
            </a>
          </motion.div>

          {/* Adresse */}
          <motion.div variants={fadeUp} custom={2}
            className="bg-[var(--color-card)] border border-[var(--color-border)]
                       rounded-2xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <FaMapMarkerAlt className="text-[var(--color-primary)]" />
              <span className="text-white font-semibold text-sm">Adresse</span>
            </div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              {COMPANY.address.street}<br />
              {COMPANY.address.zip} {COMPANY.address.city}<br />
              {COMPANY.address.country} 🇫🇷
            </p>
          </motion.div>

          {/* Horaires */}
          <motion.div variants={fadeUp} custom={3}
            className="bg-[var(--color-card)] border border-[var(--color-border)]
                       rounded-2xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <FaClock className="text-[var(--color-primary)]" />
              <span className="text-white font-semibold text-sm">Horaires</span>
            </div>
            <p className="text-[var(--color-muted)] text-sm">Lun – Sam : 8h00 – 20h00</p>
            <p className="text-[var(--color-muted)] text-sm">Dimanche : sur rendez-vous</p>
          </motion.div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
            size="lg" className="w-full sm:w-auto justify-center">
            <FaPhone /> Appeler maintenant
          </Button>
          <Button href={`mailto:${COMPANY.email}`}
            variant="outline" size="lg" className="w-full sm:w-auto justify-center">
            <FaEnvelope /> Envoyer un email
          </Button>
        </motion.div>

        {/* ── Séparateur ── */}
        <div className="h-px bg-gradient-to-r from-transparent
                        via-[var(--color-border)] to-transparent" />

        {/* ── À propos — version condensée ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Titre section */}
          <motion.div variants={fadeUp} className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
                             bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]
                             border border-[var(--color-primary)]/20 mb-4">
              À propos
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Qui sommes-nous ?
            </h2>
          </motion.div>

          {/* Carte principale about */}
          <motion.div variants={fadeUp} custom={1}
            className="bg-[var(--color-card)] border border-[var(--color-border)]
                       rounded-2xl p-6 sm:p-8 relative overflow-hidden">

            {/* Barre accent gauche */}
            <div className="absolute top-0 left-0 w-1 h-full
                            bg-gradient-to-b from-[var(--color-primary)]
                            to-[var(--color-primary-light)] rounded-l-2xl" />

            <div className="pl-4 sm:pl-6">
              {/* Logo + nom */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center
                                justify-center shrink-0 overflow-hidden shadow-sm">
                  <Image
                    src="/images/microsoft/logo.avif"
                    alt="Microsoft"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight">
                    Assistance technique Microsoft support
                  </p>
                  <p className="text-[var(--color-primary-light)] text-xs mt-0.5">
                    Prestataire contractuel agréé — France &amp; Europe
                  </p>
                </div>
              </div>

              {/* Texte */}
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5">
                Notre structure opère en qualité de prestataire contractuel en
                sous-traitance de <strong className="text-white">Microsoft Corporation</strong>,
                habilitée à déployer et maintenir l&apos;ensemble des solutions de l&apos;écosystème
                Windows auprès des utilisateurs particuliers et professionnels en{" "}
                <strong className="text-white">France et en Europe</strong>.
                Chaque intervention est conduite selon les protocoles certifiés Microsoft,
                avec rigueur et exigence professionnelle.
              </p>

              {/* 3 piliers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: FaHandshake, label: "Partenariat contractuel", sub: "Microsoft Corporation" },
                  { icon: FaGlobe,     label: "Couverture opérationnelle", sub: "France & Europe" },
                  { icon: FaWindows,   label: "Standards certifiés",    sub: "Protocoles Microsoft" },
                ].map((pilier) => {
                  const Icon = pilier.icon;
                  return (
                    <div key={pilier.label}
                      className="flex items-start gap-3 bg-white/5 rounded-xl p-3
                                 border border-[var(--color-border)]">
                      <Icon className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-white text-xs font-semibold leading-tight">
                          {pilier.label}
                        </p>
                        <p className="text-[var(--color-muted)] text-[11px] mt-0.5">
                          {pilier.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Stats légères */}
          <motion.div variants={fadeUp} custom={2}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: "10+",  label: "Ans d'expérience" },
              { value: "500+", label: "Clients accompagnés" },
              { value: "98%",  label: "Satisfaction client" },
              { value: "27",   label: "Pays couverts" },
            ].map((stat) => (
              <div key={stat.label}
                className="bg-[var(--color-card)] border border-[var(--color-border)]
                           rounded-xl p-4 text-center">
                <div className="text-xl font-bold text-[var(--color-primary)]">
                  {stat.value}
                </div>
                <div className="text-[11px] text-[var(--color-muted)] mt-0.5 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}