"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact14() {
  return (
    <section className="px-[5%] pt-10 pb-16 md:pt-14 md:pb-24" style={{ backgroundColor: "#FDFCF8" }}>
      <div className="container">

        {/* Top row: text left, map right */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 mb-14 md:mb-20">

          {/* Left: heading + description */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.25em] text-[#8B1A1A]">
              Kontakt
            </p>
            <h2
              className="mb-5 font-heading font-bold leading-tight tracking-tight text-[#28282B]"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Sprechen Sie mit mir.
            </h2>
            <p className="font-body text-base leading-relaxed text-[#28282B]/60 md:text-lg">
              Ich bin Ihr direkter Ansprechpartner für alle Fragen rund um Ihr Vorhaben –
              von der ersten Besichtigung bis zur fertigen Baustelle.
            </p>
          </div>

          {/* Right: Google Maps */}
          <div className="overflow-hidden rounded-sm" style={{ minHeight: 280 }}>
            <iframe
              title="M. Fischer Maschinenbetrieb Standort"
              src="https://maps.google.com/maps?q=Ritzmehring+1%2C+83543+Rott+am+Inn&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 280 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom row: contact info */}
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-12">
          <div>
            <div className="mb-3 text-[#8B1A1A] md:mb-4">
              <BiPhone className="size-6" />
            </div>
            <h3 className="mb-1 font-heading text-base font-bold text-[#28282B]">
              Telefon
            </h3>
            <p className="mb-2 font-body text-sm text-[#28282B]/50">
              Mo – Sa, 7:00 – 18:00 Uhr
            </p>
            <a
              className="font-body text-base font-semibold text-[#28282B] transition-colors duration-200 hover:text-[#8B1A1A]"
              href="tel:+491754322110"
            >
              0175 / 4322110
            </a>
          </div>

          <div>
            <div className="mb-3 text-[#8B1A1A] md:mb-4">
              <BiEnvelope className="size-6" />
            </div>
            <h3 className="mb-1 font-heading text-base font-bold text-[#28282B]">
              E-Mail
            </h3>
            <p className="mb-2 font-body text-sm text-[#28282B]/50">
              Projektanfragen und allgemeine Fragen
            </p>
            <a
              className="font-body text-base font-semibold text-[#28282B] transition-colors duration-200 hover:text-[#8B1A1A]"
              href="mailto:m.fischer-mab@web.de"
            >
              m.fischer-mab@web.de
            </a>
          </div>

          <div>
            <div className="mb-3 text-[#8B1A1A] md:mb-4">
              <BiMap className="size-6" />
            </div>
            <h3 className="mb-1 font-heading text-base font-bold text-[#28282B]">
              Standort
            </h3>
            <p className="font-body text-base text-[#28282B]/60">
              Ritzmehring 1<br />
              83543 Rott am Inn
            </p>
          </div>

          <div>
            <div className="mb-3 text-[#8B1A1A] md:mb-4">
              <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 className="mb-1 font-heading text-base font-bold text-[#28282B]">
              Instagram
            </h3>
            <p className="mb-4 font-body text-sm text-[#28282B]/50">
              Einblicke aus dem Arbeitsalltag
            </p>
            <a
              href="https://www.instagram.com/m.fischer_maschienenbetrieb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-base font-semibold text-[#28282B] transition-colors duration-200 hover:text-[#8B1A1A]"
            >
              Profil ansehen <span style={{ color: "#8B1A1A" }}>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
