"use client";

import { Link } from "react-router-dom";
import { CONSENT_EVENT } from "../../lib/consent";

// Öffnet das Cookie-Banner erneut, damit die Einwilligung widerrufen/geändert
// werden kann (Art. 7 Abs. 3 DSGVO).
function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: "reset" }));
}

const navCols = [
  {
    heading: "Leistungen",
    links: [
      { label: "Tiefbau", to: "/leistungen" },
      { label: "Erdarbeiten & Baggerarbeiten", to: "/leistungen" },
      { label: "Abbruch", to: "/leistungen" },
      { label: "Außenanlagen", to: "/leistungen" },
      { label: "Baumfällungen", to: "/leistungen" },
    ],
  },
  {
    heading: "Unternehmen",
    links: [
      { label: "Über uns", to: "/ueber-uns" },
      { label: "Unser Prozess", to: "/prozess" },
      { label: "Projekte", to: "/projekte" },
    ],
  },
  {
    heading: "Kontakt",
    links: [
      { label: "Beratung anfragen", to: "/kontakt" },
      { label: "Impressum", to: "/impressum" },
      { label: "Datenschutz", to: "/datenschutz" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Top hairline accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative px-[5%] pt-16 pb-10 md:pt-24 md:pb-12">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-16 mb-16 border-b border-[#28282B]/10 pb-16">

          {/* Brand column */}
          <div>
            <Link to="/" className="mb-6 inline-block">
              <img
                src="/images/bild31.webp"
                alt="M. Fischer Maschinenbetrieb"
                style={{ height: 40, width: "auto", objectFit: "contain" }}
              />
            </Link>

            <p className="mb-8 font-body text-sm leading-relaxed text-[#28282B]/50 max-w-[22ch]">
              Persönlich. Flexibel. Zuverlässig. Tiefbau, Abbruch und Außenanlagen aus Rott am Inn.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href="tel:+491754322110"
                className="flex items-center gap-3 font-body text-sm text-[#28282B]/60 transition-colors duration-200 hover:text-[#8B1A1A]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-60">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                </svg>
                0175 / 4322110
              </a>
              <a
                href="mailto:m.fischer-mab@web.de"
                className="flex items-center gap-3 font-body text-sm text-[#28282B]/60 transition-colors duration-200 hover:text-[#8B1A1A]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-60">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                m.fischer-mab@web.de
              </a>
              <p className="flex items-start gap-3 font-body text-sm text-[#28282B]/40">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-60 mt-0.5">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Rott am Inn · Inntal und Chiemgau
              </p>
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#28282B]/35">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-body text-sm text-[#28282B]/55 transition-colors duration-200 hover:text-[#8B1A1A]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-[#28282B]/30">
            © {new Date().getFullYear()} M. Fischer Maschinenbetrieb. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="font-body text-xs text-[#28282B]/35 transition-colors duration-200 hover:text-[#28282B]/70">
              Impressum
            </Link>
            <Link to="/datenschutz" className="font-body text-xs text-[#28282B]/35 transition-colors duration-200 hover:text-[#28282B]/70">
              Datenschutz
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="font-body text-xs text-[#28282B]/35 transition-colors duration-200 hover:text-[#28282B]/70"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>

        {/* KI-Hinweis */}
        <p className="mt-6 font-body text-xs text-[#28282B]/45">
          Teile der Inhalte dieser Website wurden mit Unterstützung von KI erstellt.
        </p>
      </div>
    </footer>
  );
}
