"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaWindows, FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-[var(--color-dark-2)]/95 backdrop-blur-md shadow-[var(--shadow-card)] border-b border-[var(--color-border)]" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-lg bg-[var(--color-primary)] flex items-center justify-center
                  group-hover:bg-[var(--color-primary-dark)] transition-colors shadow-[var(--shadow-glow)]"
          >
            <FaWindows className="text-white text-lg" />
          </div>
          <div className="leading-tight">
            <span className="font-bold text-white text-sm block">
              Assistance technique
            </span>
            <span className="font-bold text-[var(--color-primary)] text-xs">
              Microsoft Windows
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-[var(--color-primary)]/15 text-[var(--color-primary-light)]"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+33644664021"
            className="text-sm text-[var(--color-muted)] hover:text-white transition-colors"
          >
            +33 6 44 66 40 21
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--color-primary)]
                       hover:bg-[var(--color-primary-dark)] text-white transition-all
                       shadow-[0_0_15px_rgba(0,120,212,0.3)]"
          >
            Nous contacter
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-dark-2)] border-t border-[var(--color-border)]"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all
                      ${
                        pathname === link.href
                          ? "bg-[var(--color-primary)]/15 text-[var(--color-primary-light)]"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-semibold text-center
                             bg-[var(--color-primary)] text-white"
                >
                  Nous contacter
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
