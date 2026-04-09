"use client";
import { fadeUp } from "@/lib/variants";
import { motion } from "framer-motion";


interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ badge, title, subtitle, center = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <motion.span
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full
                     bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]
                     border border-[var(--color-primary)]/20"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        custom={1}
        className="text-3xl md:text-4xl font-bold text-white leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          custom={2}
          className="mt-4 text-[var(--color-muted)] text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}