"use client";
import { motion } from "framer-motion";
import { FaDownload, FaDesktop, FaShieldAlt, FaCheck } from "react-icons/fa";
import { fadeUp, staggerContainer } from "@/lib/variants";
import Button from "@/components/ui/Button";

const TOOLS = [
  {
    name: "RemotePC",
    description:
      "Solution professionnelle de prise en main à distance utilisée par notre équipe pour intervenir rapidement sur votre poste Windows.",
    href: "https://download.remotepc.com/downloads/rpc/310326/RemotePCHost.exe",
    icon: FaDesktop,
    badge: "Recommandé",
    badgeClass: "bg-[var(--color-primary)]/10 border-[var(--color-primary)]/30 text-[var(--color-primary-light)]",
    variant: "primary" as const,
    features: ["Connexion chiffrée AES-256", "Aucune configuration requise", "Compatible Windows 10 / 11"],
  },
  {
    name: "AnyDesk",
    description:
      "Outil léger et rapide de bureautique à distance, idéal pour les interventions ponctuelles et le support immédiat.",
    href: "https://anydesk.com/fr/downloads/thank-you?dv=win_exe",
    icon: FaShieldAlt,
    badge: "Alternatif",
    badgeClass: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    variant: "accent" as const,
    features: ["Moins de 4 Mo à télécharger", "Démarrage instantané", "Compatible Windows 10 / 11"],
  },
];

export default function TeleassistancePage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-14"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full
                       bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20
                       text-[var(--color-primary-light)] text-xs sm:text-sm font-medium"
          >
            <FaDesktop className="text-[var(--color-primary)] shrink-0" />
            <span>Téléassistance à distance</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            Choisissez votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
              outil de connexion
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base sm:text-lg text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed"
          >
            Téléchargez l&apos;application indiquée par notre technicien. Le
            téléchargement démarre automatiquement au clic.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i + 3}
              className="bg-[var(--color-card)] border border-[var(--color-border)]
                         rounded-2xl p-7 flex flex-col gap-5
                         hover:border-[var(--color-primary)]/40
                         hover:shadow-[0_0_30px_rgba(0,120,212,0.12)]
                         transition-all duration-300"
            >
              {/* Badge + icon */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                  <tool.icon className="text-[var(--color-primary)] text-xl" />
                </div>
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${tool.badgeClass}`}>
                  {tool.badge}
                </span>
              </div>

              {/* Name + description */}
              <div>
                <h2 className="text-white font-bold text-xl mb-2">{tool.name}</h2>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{tool.description}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {tool.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                    <FaCheck className="text-[var(--color-primary)] shrink-0 text-xs" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Download button */}
              <Button
                href={tool.href}
                variant={tool.variant}
                size="md"
                external
                className="mt-auto justify-center"
              >
                <FaDownload />
                Télécharger {tool.name}
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
