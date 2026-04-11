"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaWindows, FaShieldAlt, FaArrowRight, FaPhone,
} from "react-icons/fa";
import { fadeUp, staggerContainer } from "@/lib/variants";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/constants";

const MS_SERVICES = [
  { name: "Microsoft",  img: "/images/microsoft/logo.avif",     href: "https://www.microsoft.com/fr-fr" },
  { name: "Teams",      img: "/images/microsoft/teams.jpeg",    href: "https://www.microsoft.com/fr-fr/microsoft-teams/group-chat-software" },
  { name: "Copilot",    img: "/images/microsoft/copilot.jpeg",  href: "https://copilot.microsoft.com" },
  { name: "OneDrive",   img: "/images/microsoft/onedrive.webp", href: "https://www.microsoft.com/fr-fr/microsoft-365/onedrive/online-cloud-storage" },
  { name: "Outlook",    img: "/images/microsoft/outlook.jpeg",  href: "https://www.microsoft.com/fr-fr/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook" },
  { name: "Surface",    img: "/images/microsoft/surface.jpeg",  href: "https://www.microsoft.com/fr-fr/surface" },
  { name: "Xbox",       img: "/images/microsoft/xbox.avif",     href: "https://www.xbox.com/fr-FR" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96
                        bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-56 md:w-80 h-56 md:h-80
                        bg-blue-800/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Grille Hero : texte gauche / image droite ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">

          {/* ── Colonne texte ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full
                         bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20
                         text-[var(--color-primary-light)] text-xs sm:text-sm font-medium">
              <FaWindows className="text-[var(--color-primary)] shrink-0" />
              <span>Assistance Technique Microsoft support</span>
            </motion.div>

            {/* Titre */}
            <motion.h1 variants={fadeUp} custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Votre système Windows,{" "}
              <span className="text-transparent bg-clip-text
                               bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
                protégé et optimisé
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p variants={fadeUp} custom={2}
              className="text-base sm:text-lg text-[var(--color-muted)] mb-8 leading-relaxed
                         max-w-lg mx-auto lg:mx-0">
              Installation, maintenance et sécurisation de vos postes Windows.
              Partenaire officiel{" "}
              <strong className="text-orange-400">Avast Business</strong> — licence incluse.
            </motion.p>

            {/* Boutons */}
            <motion.div variants={fadeUp} custom={3}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Button href="/contact" size="lg" className="w-full sm:w-auto justify-center">
                <FaPhone /> Demander une intervention
              </Button>
              <Button href="/antivirus" variant="outline" size="lg"
                className="w-full sm:w-auto justify-center">
                <FaShieldAlt /> Découvrir Avast <FaArrowRight />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} custom={4}
              className="grid grid-cols-3 gap-3 max-w-sm mx-auto lg:mx-0">
              {[
                { value: "500+", label: "Clients" },
                { value: "6j/7", label: "Disponible" },
                { value: "1h",   label: "Intervention" },
              ].map((stat) => (
                <div key={stat.label}
                  className="bg-[var(--color-card)] border border-[var(--color-border)]
                             rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-[var(--color-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[var(--color-muted)] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Téléphones */}
            <motion.div variants={fadeUp} custom={5}
              className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              {COMPANY.phones.map((phone) => (
                <a key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-[var(--color-muted)] hover:text-white transition-colors
                             text-sm flex items-center gap-1.5">
                  <FaPhone className="text-[var(--color-primary)] text-xs shrink-0" />
                  {phone}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Colonne image (desktop uniquement) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)]
                            shadow-[var(--shadow-card)]">
              <Image
                src="/images/home/hero-windows.png"
                alt="Assistance technique Windows"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-24
                              bg-gradient-to-t from-[var(--color-dark)] to-transparent" />
            </div>

            {/* Badge Microsoft */}
            <div className="absolute -bottom-4 -left-4 bg-[var(--color-card)]
                            border border-[var(--color-border)] rounded-xl px-4 py-3
                            flex items-center gap-3 shadow-[var(--shadow-card)]">
              <div className="w-7 h-7 bg-white rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                <Image src="/images/microsoft/logo.avif" alt="Microsoft" width={24} height={24} className="object-contain" />
              </div>
              <div>
                <div className="text-white text-xs font-semibold">Partenaire Microsoft</div>
                <div className="text-[var(--color-muted)] text-[10px]">Windows Certified</div>
              </div>
            </div>

            {/* Badge Avast */}
            <div className="absolute -top-4 -right-4 bg-orange-500/10
                            border border-orange-500/30 rounded-xl px-4 py-3
                            flex items-center gap-2 shadow-[var(--shadow-card)]">
              <FaShieldAlt className="text-orange-400 text-lg shrink-0" />
              <div>
                <div className="text-white text-xs font-semibold">Avast Business</div>
                <div className="text-orange-400/70 text-[10px]">Licence officielle</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Strip Écosystème Microsoft ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Séparateur */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
            <span className="text-[10px] sm:text-xs text-[var(--color-muted)] font-medium
                             uppercase tracking-widest whitespace-nowrap shrink-0">
              Écosystème Microsoft
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
          </div>

          {/* Scroll horizontal mobile / flex centré desktop */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2
                          sm:flex-wrap sm:justify-center sm:overflow-visible
                          scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {MS_SERVICES.map((service, i) => (
              <motion.a
                key={service.name}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.06, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="flex flex-col items-center gap-1.5 flex-shrink-0
                           bg-[var(--color-card)] border border-[var(--color-border)]
                           rounded-xl px-3 sm:px-4 py-3 sm:py-3.5
                           hover:border-[var(--color-primary)]/50
                           hover:shadow-[0_0_20px_rgba(0,120,212,0.15)]
                           transition-all duration-300 group cursor-pointer
                           min-w-[68px] sm:min-w-[80px]"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden
                                flex items-center justify-center
                                bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Image
                    src={service.img}
                    alt={service.name}
                    width={36}
                    height={36}
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  />
                </div>
                <span className="text-[10px] sm:text-xs text-[var(--color-muted)]
                                 group-hover:text-white transition-colors
                                 font-medium whitespace-nowrap">
                  {service.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}