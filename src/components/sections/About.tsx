"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaWindows, FaGlobe, FaHandshake, FaShieldAlt,
  FaAward, FaMapMarkerAlt, FaCheckCircle,
} from "react-icons/fa";
import { fadeUp, slideLeft, slideRight, staggerContainer, scaleIn } from "@/lib/variants";

const COMMITMENTS = [
  {
    icon: FaHandshake,
    title: "Partenariat contractuel Microsoft",
    desc: "Opérateur agréé en sous-traitance directe avec Microsoft Corporation pour la couverture des marchés français et européens.",
  },
  {
    icon: FaGlobe,
    title: "Couverture France & Europe",
    desc: "Nos prestations s'étendent à l'ensemble du territoire français ainsi qu'aux principaux marchés européens, avec une réactivité locale garantie.",
  },
  {
    icon: FaShieldAlt,
    title: "Conformité & Sécurité",
    desc: "Toutes nos interventions respectent les normes de sécurité Microsoft et les réglementations européennes en vigueur (RGPD, NIS2).",
  },
  {
    icon: FaAward,
    title: "Excellence technique certifiée",
    desc: "Nos techniciens sont formés et certifiés selon les standards Microsoft, garantissant des interventions de qualité professionnelle.",
  },
];

const STATS = [
  { value: "10+", label: "Années d'expérience" },
  { value: "500+", label: "Clients accompagnés" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "27", label: "Pays couverts en Europe" },
];

export default function About() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">

      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px]
                        bg-[var(--color-primary)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px]
                        bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ── En-tête ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full text-sm font-semibold
                       bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]
                       border border-[var(--color-primary)]/20">
            <FaWindows className="text-[var(--color-primary)]" />
            À propos de nous
          </motion.span>

          <motion.h2 variants={fadeUp} custom={1}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Un opérateur de confiance,{" "}
            <span className="text-transparent bg-clip-text
                             bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
              au service de l&apos;Europe
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} custom={2}
            className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto leading-relaxed">
            Constitué en qualité de prestataire contractuel en sous-traitance de{" "}
            <strong className="text-white">Microsoft Corporation</strong>, notre structure
            est mandatée pour assurer la couverture opérationnelle des marchés{" "}
            <strong className="text-[var(--color-primary-light)]">français et européens</strong>.
            Nous incarnons l&apos;excellence du support technique Microsoft à l&apos;échelle continentale,
            avec l&apos;exigence et la rigueur que nos clients sont en droit d&apos;attendre.
          </motion.p>
        </motion.div>

        {/* ── Bloc principal 2 colonnes ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Colonne gauche — Texte institutionnel */}
          <motion.div
            variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)]
                            rounded-2xl p-8 mb-6 relative overflow-hidden">
              {/* Accent décoratif */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b
                              from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-l-2xl" />

              <div className="pl-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10
                                  flex items-center justify-center">
                    <FaHandshake className="text-[var(--color-primary)] text-lg" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Notre mandat</h3>
                </div>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  En vertu d&apos;un accord de sous-traitance contractuelle établi avec{" "}
                  <strong className="text-white">Microsoft Corporation</strong>,
                  notre organisation est habilitée à déployer et à maintenir l&apos;ensemble
                  des solutions de l&apos;écosystème Windows auprès des utilisateurs particuliers
                  et professionnels en France et à travers l&apos;Europe.
                </p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Ce partenariat nous confère une légitimité technique et commerciale unique,
                  adossée aux standards d&apos;excellence définis par Microsoft et aux exigences
                  réglementaires propres au marché européen. Chaque intervention est conduite
                  selon des protocoles certifiés, garantissant à nos clients une prestation
                  irréprochable et sécurisée.
                </p>
              </div>
            </div>

            {/* Points clés */}
            <div className="space-y-3">
              {[
                "Prestataire contractuel agréé Microsoft Corporation",
                "Déploiement certifié sur les marchés français et européens",
                "Conformité totale aux standards RGPD et directives NIS2",
                "Techniciens certifiés Microsoft — formation continue",
                "Support multilingue disponible pour les marchés européens",
              ].map((point, i) => (
                <motion.div
                  key={point}
                  variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} custom={i}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-[var(--color-primary)] mt-0.5 shrink-0 text-sm" />
                  <span className="text-[var(--color-muted)] text-sm leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colonne droite — Visuels & stats */}
          <motion.div
            variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Carte identité société */}
            <div className="bg-[var(--color-card)] border border-[var(--color-primary)]/20
                            rounded-2xl p-6 shadow-[0_0_40px_rgba(0,120,212,0.1)]">
              <div className="flex items-center gap-4 mb-5 pb-5
                              border-b border-[var(--color-border)]">
                {/* Logo Microsoft */}
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center
                                shadow-sm shrink-0 overflow-hidden">
                  <Image
                    src="/images/microsoft/logo.avif"
                    alt="Microsoft"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-base">Assistance technique</p>
                  <p className="text-[var(--color-primary-light)] text-sm font-medium">
                    Microsoft (Windows)
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <FaMapMarkerAlt className="text-[var(--color-primary)] text-xs" />
                    <span className="text-[var(--color-muted)] text-xs">
                      Lyon, France 🇫🇷 — Couverture Europe 🇪🇺
                    </span>
                  </div>
                </div>
              </div>

              {/* Détails */}
              <div className="space-y-2.5">
                {[
                  { label: "Statut",    value: "Prestataire sous-traitant Microsoft Corp." },
                  { label: "Périmètre", value: "France & marchés européens" },
                  { label: "Domaine",   value: "assistechnique.com" },
                  { label: "Siège",     value: "14 rue Garibaldi, 69006 Lyon" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-[var(--color-muted)] text-xs">{item.label}</span>
                    <span className="text-white text-xs font-medium text-right max-w-[200px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Écosystème Microsoft icons strip */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5">
              <p className="text-xs text-[var(--color-muted)] uppercase tracking-widest mb-4 font-medium">
                Solutions déployées
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Windows", img: "/images/microsoft/logo.avif" },
                  { name: "Teams",   img: "/images/microsoft/teams.jpeg" },
                  { name: "Outlook", img: "/images/microsoft/outlook.jpeg" },
                  { name: "OneDrive",img: "/images/microsoft/onedrive.webp" },
                  { name: "Copilot", img: "/images/microsoft/copilot.jpeg" },
                  { name: "Surface", img: "/images/microsoft/surface.jpeg" },
                ].map((tool) => (
                  <div key={tool.name}
                    className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2
                               border border-[var(--color-border)] hover:border-[var(--color-primary)]/40
                               transition-colors">
                    <div className="w-5 h-5 rounded overflow-hidden bg-white/10">
                      <Image
                        src={tool.img}
                        alt={tool.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-[var(--color-muted)] font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Engagements ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp}
            className="text-center text-xs text-[var(--color-muted)] uppercase tracking-widest mb-8 font-medium">
            Nos engagements
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {COMMITMENTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={scaleIn} custom={i}
                  className="group bg-[var(--color-card)] border border-[var(--color-border)]
                             rounded-2xl p-6 hover:border-[var(--color-primary)]/40
                             hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center
                                  justify-center mb-4 group-hover:bg-[var(--color-primary)]/20
                                  transition-colors">
                    <Icon className="text-[var(--color-primary)] text-lg" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Statistiques ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} custom={i}
              className="relative bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent
                         border border-[var(--color-primary)]/20 rounded-2xl p-6 text-center
                         overflow-hidden group hover:border-[var(--color-primary)]/40
                         transition-all duration-300">
              <div className="absolute inset-0 bg-[var(--color-primary)]/0
                              group-hover:bg-[var(--color-primary)]/5 transition-all duration-300" />
              <div className="relative">
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--color-muted)] leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}