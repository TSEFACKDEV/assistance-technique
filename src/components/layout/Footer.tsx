import Link from "next/link";
import {
  FaWindows,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { COMPANY, NAV_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-2)] border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
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
                  Microsoft support
                </span>
              </div>
            </Link>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-sm">
              Votre expert en assistance technique Microsoft Windows en France.
              Installation, maintenance et sécurisation de vos{" "}
              <Link href="/teleassistance" className="text-[var(--color-primary-light)] hover:underline">
                systèmes
              </Link>.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[var(--color-muted)]">
              <FaShieldAlt className="text-orange-400" />
              <span>Partenaire officiel Avast & Microsoft</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-primary-light)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                <span className="text-[var(--color-muted)] text-sm">
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.zip} {COMPANY.address.city}
                  <br />
                  {COMPANY.address.country} 🇫🇷
                </span>
              </li>
              {COMPANY.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <FaPhone className="text-[var(--color-primary)] shrink-0" />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-[var(--color-muted)] hover:text-white text-sm transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[var(--color-primary)] shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-[var(--color-muted)] hover:text-white text-sm transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--color-muted)] text-xs">
            © {new Date().getFullYear()} AssisTechnique — Tous droits réservés.
          </p>
          <p className="text-[var(--color-muted)] text-xs">
            {COMPANY.address.city}, {COMPANY.address.country} · {COMPANY.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
