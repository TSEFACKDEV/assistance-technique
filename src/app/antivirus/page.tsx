"use client";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaDownload,
  FaCheck,
  FaBolt,
  FaLock,
  FaEye,
  FaWifi,
  FaTrash,
  FaPhone,
} from "react-icons/fa";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/variants";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Contact from "@/components/sections/Contact";
import Image from "next/image";
const AVAST_FEATURES = [
  {
    icon: FaShieldAlt,
    title: "Protection en temps réel",
    desc: "Détection et blocage instantané des virus, ransomwares et logiciels espions avant qu'ils ne s'exécutent.",
    badge: "Essentiel",
  },
  {
    icon: FaBolt,
    title: "Performances optimisées",
    desc: "Analyse intelligente en arrière-plan pour ne jamais ralentir votre machine pendant le travail.",
    badge: "Rapide",
  },
  {
    icon: FaLock,
    title: "Protection Web & Phishing",
    desc: "Blocage automatique des sites frauduleux, liens malveillants et tentatives de vol de données en ligne.",
    badge: "Web",
  },
  {
    icon: FaEye,
    title: "Sandbox comportemental",
    desc: "Exécution des fichiers suspects dans un environnement isolé pour analyser leur comportement sans risque.",
    badge: "Avancé",
  },
  {
    icon: FaWifi,
    title: "Inspecteur de réseau Wi-Fi",
    desc: "Analyse votre réseau Wi-Fi pour détecter les vulnérabilités et les intrusions potentielles.",
    badge: "Réseau",
  },
  {
    icon: FaTrash,
    title: "Nettoyage & Optimisation",
    desc: "Suppression des fichiers inutiles, registre nettoyé et démarrage accéléré pour un PC toujours au top.",
    badge: "Boost",
  },
];

const AVAST_PLANS = [
  {
    name: "Avast Free",
    price: "Gratuit",
    color: "border-[var(--color-border)]",
    features: ["Antivirus de base", "Protection Web", "Analyse à la demande"],
    cta: false,
  },
  {
    name: "Avast Business",
    price: "Avec notre licence",
    color: "border-[var(--color-primary)]",
    highlight: true,
    badge: "Notre offre",
    features: [
      "Protection complète en temps réel",
      "Sandbox comportemental",
      "Inspecteur Wi-Fi",
      "Mises à jour automatiques",
      "Console de gestion centralisée",
      "Support prioritaire inclus",
    ],
    cta: true,
  },
];

import { slideLeft, slideRight } from "@/lib/variants";
export default function AntivirusPage() {
  return (
    <div className="pt-16">
      {/* Hero Antivirus */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-primary)]/8 rounded-full blur-3xl" />
        </div>

        {/* Hero restructuré 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Texte gauche — tout le contenu texte/boutons existant */}
           <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full
              bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium"
          >
            <FaShieldAlt /> Partenaire officiel Avast Business
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Protégez votre PC avec{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Avast Antivirus
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Leader mondial de la cybersécurité, Avast protège plus de{" "}
            <strong className="text-white">
              400 millions d&apos;utilisateurs
            </strong>{" "}
            dans le monde. Nous installons et configurons Avast Business avec
            notre licence officielle.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              href="https://www.avast.com/fr-fr/download-thank-you.php?product=FAV-ANTIVIRUS&locale=fr-fr"
              variant="accent"
              size="lg"
              external
            >
              <FaDownload /> Télécharger Avast
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <FaShieldAlt /> Installation avec licence
            </Button>
          </motion.div>
          {/* Logo Avast officiel */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex justify-center"
          >
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl px-8 py-4 flex items-center gap-4">
              <Image
                src="/images/avast/avast-logo.png"
                alt="Avast Antivirus"
                width={120}
                height={40}
                className="object-contain"
              />
              <div className="h-8 w-px bg-[var(--color-border)]" />
              <div className="text-left">
                <div className="text-white text-sm font-semibold">
                  Solution officielle
                </div>
                <div className="text-[var(--color-muted)] text-xs">
                  Partenaire agréé Avast Business
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

          {/* Image droite */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="hidden lg:block relative"
          >
            <div className="rounded-2xl overflow-hidden border border-orange-500/20">
              <Image
                src="/images/avast/virus-protection.png"
                alt="Protection antivirus Avast"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </div>
            {/* Badge flottant */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2
                    bg-[var(--color-card)] border border-orange-500/30
                    rounded-xl px-5 py-3 flex items-center gap-3 whitespace-nowrap"
            >
              <FaShieldAlt className="text-orange-400 text-xl" />
              <div>
                <div className="text-white text-sm font-semibold">
                  400M+ utilisateurs protégés
                </div>
                <div className="text-[var(--color-muted)] text-xs">
                  Leader mondial de l'antivirus
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-[var(--color-dark-2)]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Fonctionnalités"
            title="Pourquoi choisir Avast ?"
            subtitle="Une protection multicouche conçue pour les professionnels et particuliers."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {AVAST_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={scaleIn}
                  custom={i}
                  className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6
                             hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(255,105,0,0.1)] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center
                                    group-hover:bg-orange-500/20 transition-colors"
                    >
                      <Icon className="text-orange-400 text-xl" />
                    </div>
                    <Badge color="orange">{feature.badge}</Badge>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════ Section Certification ══════════ */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full
                         bg-orange-500/10 text-orange-400 border border-orange-500/20"
              >
                Certification officielle
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">
                Nous sommes partenaires certifiés Avast Business
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Notre certification officielle Avast Business nous permet de
                vous fournir des licences authentiques à tarif partenaire, avec
                un support dédié et des mises à jour garanties.
              </p>
              <ul className="space-y-3">
                {[
                  "Licences Avast Business authentiques et activées",
                  "Installation et configuration par nos techniciens",
                  "Support technique inclus post-installation",
                  "Mises à jour automatiques des définitions virales",
                  "Console d'administration centralisée disponible",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--color-muted)]"
                  >
                    <FaCheck className="text-orange-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="accent">
                  <FaShieldAlt /> Obtenir notre offre certifiée
                </Button>
              </div>
            </motion.div>

            {/* Images certification */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {/* Badge certification */}
              <div
                className="bg-[var(--color-card)] border border-orange-500/30 rounded-2xl p-6 text-center
                        shadow-[0_0_30px_rgba(255,105,0,0.1)]"
              >
                <Image
                  src="/images/avast/avast-certification.png"
                  alt="Certification partenaire Avast Business"
                  width={200}
                  height={200}
                  className="object-contain mx-auto mb-4"
                />
                <p className="text-white font-semibold text-sm">
                  Partenaire certifié Avast Business
                </p>
                <p className="text-[var(--color-muted)] text-xs mt-1">
                  Certification valide — Licence officielle
                </p>
              </div>

              {/* Dashboard screenshot */}
              <div className="rounded-2xl overflow-hidden border border-[var(--color-border)]">
                <Image
                  src="/images/avast/avast-dashboard.png"
                  alt="Interface Avast Antivirus"
                  width={600}
                  height={350}
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            badge="Nos offres"
            title="Choisissez votre protection"
            subtitle="Nous recommandons Avast Business pour une protection professionnelle complète."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AVAST_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`relative bg-[var(--color-card)] border-2 ${plan.color} rounded-2xl p-8
                  ${plan.highlight ? "shadow-[0_0_40px_rgba(0,120,212,0.2)]" : ""}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-white font-bold text-xl mb-1">
                  {plan.name}
                </h3>
                <p
                  className={`text-sm font-semibold mb-6 ${plan.highlight ? "text-[var(--color-primary-light)]" : "text-[var(--color-muted)]"}`}
                >
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-[var(--color-muted)]"
                    >
                      <FaCheck
                        className={
                          plan.highlight
                            ? "text-[var(--color-primary)]"
                            : "text-gray-500"
                        }
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.cta && (
                  <Button href="/contact" className="w-full justify-center">
                    Nous contacter pour l&apos;installation
                  </Button>
                )}
                {!plan.cta && (
                  <Button
                    href="https://www.avast.com/fr-fr/index"
                    variant="outline"
                    external
                    className="w-full justify-center"
                  >
                    <FaDownload /> Télécharger gratuitement
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-4 bg-[var(--color-dark-2)] border-y border-[var(--color-border)]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <FaShieldAlt className="text-orange-400 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            Besoin qu&apos;on installe Avast pour vous ?
          </h2>
          <p className="text-[var(--color-muted)] mb-6">
            Nos techniciens installent et configurent Avast Business directement
            sur votre poste, avec notre licence officielle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              <FaPhone /> Prendre rendez-vous
            </Button>
            <Button
              href="https://www.avast.com/fr-fr/download-thank-you.php?product=FAV-ANTIVIRUS&locale=fr-fr"
              variant="accent"
              size="lg"
              external
            >
              <FaDownload /> Télécharger Avast
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
