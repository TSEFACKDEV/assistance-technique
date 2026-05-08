"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  download?: boolean | string;
  className?: string;
}

export default function Button({
  children, href, onClick, variant = "primary",
  size = "md", external = false, download, className = "",
}: ButtonProps) {
  const base = "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary: "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-[0_0_20px_rgba(0,120,212,0.4)] hover:shadow-[0_0_30px_rgba(0,120,212,0.6)]",
    outline: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
    accent:  "bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white shadow-[0_0_20px_rgba(255,105,0,0.4)] hover:shadow-[0_0_30px_rgba(255,105,0,0.6)]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const MotionLink = motion.create(Link);

  if (href) {
    return (
      <MotionLink
        href={href}
        target={external && !download ? "_blank" : undefined}
        rel={external && !download ? "noopener noreferrer" : undefined}
        download={download}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}