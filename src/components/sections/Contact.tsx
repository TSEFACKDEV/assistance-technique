"use client";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { fadeUp, staggerContainer } from "@/lib/variants";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/constants";

const INFOS = [
  { icon: FaPhone, label: "Téléphone", values: COMPANY.phones, type: "tel" },
  { icon: FaEnvelope, label: "Email", values: [COMPANY.email], type: "mailto" },
  { icon: FaMapMarkerAlt, label: "Adresse", values: [`${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`], type: null },
  { icon: FaClock, label: "Horaires", values: ["Lun–Sam : 8h–20h", "Dim : sur rendez-vous"], type: null },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          badge="Contact"
          title="Besoin d'une intervention ?"
          subtitle="Notre équipe est disponible 6 jours sur 7. Contactez-nous, nous répondons rapidement."
        />

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        >
          {INFOS.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div key={info.label} variants={fadeUp} custom={i}
                className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-[var(--color-primary)]" />
                  <span className="text-white font-semibold text-sm">{info.label}</span>
                </div>
                {info.values.map((v) => (
                  <div key={v} className="text-[var(--color-muted)] text-sm">
                    {info.type ? (
                      <a href={`${info.type}:${v.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                        {v}
                      </a>
                    ) : v}
                  </div>
                ))}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center">
          <Button href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`} size="lg">
            <FaPhone /> Appeler maintenant
          </Button>
        </motion.div>
      </div>
    </section>
  );
}