"use client";
import { motion } from "framer-motion";
import { FaWindows, FaShieldAlt, FaArrowRight, FaPhone } from "react-icons/fa";
import { fadeUp, staggerContainer } from "@/lib/variants";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/constants";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
                        bg-[var(--color-primary)]/5 rounded-full blur-[100px]"
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne texte — gauche */}
          <div className="text-left">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full
          bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20
          text-[var(--color-primary-light)] text-sm font-medium"
            >
              <FaWindows className="text-[var(--color-primary)]" />
              Assistance Technique Microsoft support
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              Votre système Windows,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
                protégé et optimisé
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed"
            >
              Installation, maintenance et sécurisation de vos postes Windows.
              Partenaire officiel{" "}
              <strong className="text-orange-400">Avast Business</strong> —
              licence incluse.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button href="/contact" size="lg">
                <FaPhone /> Demander une intervention
              </Button>
              <Button href="/antivirus" variant="outline" size="lg">
                <FaShieldAlt /> Découvrir Avast <FaArrowRight />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { value: "5000+", label: "Clients satisfaits" },
                { value: "6j/7", label: "Disponibilité" },
                { value: "1h", label: "Délai d'intervention" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-3 text-center"
                >
                  <div className="text-xl font-bold text-[var(--color-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Colonne image — droite */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="relative hidden lg:block"
          >
            {/* Image principale */}
            <div
              className="relative rounded-2xl overflow-hidden border border-[var(--color-border)]
                      shadow-[var(--shadow-card)]"
            >
              <Image
                src="/images/home/hero-windows.png"
                alt="Assistance technique Windows"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              {/* Overlay dégradé bas */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24
                        bg-gradient-to-t from-[var(--color-dark)] to-transparent"
              />
            </div>

            {/* Badge flottant partenaire */}
            <div
              className="absolute -bottom-4 -left-4 bg-[var(--color-card)] border border-[var(--color-border)]
                      rounded-xl px-4 py-3 flex items-center gap-3 shadow-[var(--shadow-card)]"
            >
              <Image
                src="/images/home/microsoft-partner.png"
                alt="Microsoft"
                width={28}
                height={28}
              />
              <div>
                <div className="text-white text-xs font-semibold">
                  Partenaire Microsoft
                </div>
                <div className="text-[var(--color-muted)] text-xs">
                  Windows Certified
                </div>
              </div>
            </div>

            {/* Badge flottant Avast */}
            <div
              className="absolute -top-4 -right-4 bg-orange-500/10 border border-orange-500/30
                      rounded-xl px-4 py-3 flex items-center gap-2 shadow-[var(--shadow-card)]"
            >
              <FaShieldAlt className="text-orange-400 text-lg" />
              <div>
                <div className="text-white text-xs font-semibold">
                  Avast Business
                </div>
                <div className="text-orange-400/70 text-xs">
                  Licence officielle
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Phones */}
        <motion.div
          variants={fadeUp}
          custom={5}
          className="mt-10 flex flex-wrap gap-4"
        >
          {COMPANY.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-[var(--color-muted)] hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              <FaPhone className="text-[var(--color-primary)] text-xs" />{" "}
              {phone}
            </a>
          ))}
        </motion.div>

        {/* ── Microsoft Services Strip ── */}
        <motion.div variants={fadeUp} custom={6} className="mt-14 w-full">
          {/* Ligne séparatrice */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
            <span className="text-xs text-[var(--color-muted)] font-medium uppercase tracking-widest">
              Écosystème Microsoft
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
          </div>

          {/* Scroll horizontal sur mobile, flex wrap sur desktop */}
          <div
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide
                  sm:flex-wrap sm:justify-center sm:overflow-visible"
          >
            {[
              {
                name: "Microsoft",
                img: "/images/microsoft/logo.avif",
                href: "https://www.microsoft.com/fr-fr",
              },
              {
                name: "Teams",
                img: "/images/microsoft/teams.jpeg",
                href: "https://www.microsoft.com/fr-fr/microsoft-teams/group-chat-software",
              },
              {
                name: "Copilot",
                img: "/images/microsoft/copilot.jpeg",
                href: "https://copilot.microsoft.com",
              },
              {
                name: "OneDrive",
                img: "/images/microsoft/onedrive.webp",
                href: "https://www.microsoft.com/fr-fr/microsoft-365/onedrive/online-cloud-storage",
              },
              {
                name: "Outlook",
                img: "/images/microsoft/outlook.jpeg",
                href: "https://www.microsoft.com/fr-fr/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook",
              },
              {
                name: "Surface",
                img: "/images/microsoft/surface.jpeg",
                href: "https://www.microsoft.com/fr-fr/surface",
              },
              {
                name: "Xbox",
                img: "/images/microsoft/xbox.avif",
                href: "https://www.xbox.com/fr-FR",
              },
            ].map((service, i) => (
              <motion.a
                key={service.name}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + i * 0.07,
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col items-center gap-2 flex-shrink-0
                   bg-[var(--color-card)] border border-[var(--color-border)]
                   rounded-2xl px-5 py-4 min-w-[80px]
                   hover:border-[var(--color-primary)]/50
                   hover:shadow-[0_0_20px_rgba(0,120,212,0.15)]
                   transition-all duration-300 cursor-pointer group"
              >
                <div
                  className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center
                        bg-white/5 group-hover:bg-white/10 transition-colors"
                >
                  <Image
                    src={service.img}
                    alt={service.name}
                    width={40}
                    height={40}
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <span
                  className="text-xs text-[var(--color-muted)] group-hover:text-white
                         transition-colors font-medium whitespace-nowrap"
                >
                  {service.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
