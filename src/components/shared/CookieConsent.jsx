"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getConsent,
  setConsent,
  CONSENT_EVENT,
} from "../../lib/consent";

// Cookie-Consent-Banner.
// Wird angezeigt, solange noch keine Entscheidung getroffen wurde. Über den
// Footer-Link „Cookie-Einstellungen" (Event: mf-consent-change mit detail "reset")
// lässt sich das Banner erneut öffnen, um die Einwilligung zu widerrufen/ändern.
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Erst nach Mount entscheiden (kein Flackern beim SSR/Hydration)
    if (getConsent() === null) setVisible(true);

    const reopen = (e) => {
      if (e?.detail === "reset") setVisible(true);
    };
    window.addEventListener(CONSENT_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_EVENT, reopen);
  }, []);

  if (!visible) return null;

  const decide = (value) => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[9999] px-[5%] pb-4 pt-4 md:pb-6"
    >
      <div
        className="container mx-auto flex max-w-4xl flex-col gap-5 rounded-sm p-6 shadow-2xl md:flex-row md:items-center md:justify-between md:gap-8 md:p-7"
        style={{ backgroundColor: "#FDFCF8", border: "1px solid #E0D9CF" }}
      >
        <div className="font-body text-sm leading-relaxed text-[#28282B]/75">
          <p className="mb-1 font-heading text-base font-bold text-[#28282B]">
            Wir respektieren Ihre Privatsphäre
          </p>
          <p>
            Wir verwenden Cookies und Google Analytics (via Google Tag Manager),
            um die Nutzung unserer Website zu analysieren und zu verbessern. Diese
            Dienste werden nur mit Ihrer Einwilligung geladen. Technisch notwendige
            Cookies bleiben davon unberührt. Details finden Sie in unserer{" "}
            <Link
              to="/datenschutz"
              className="font-semibold text-[#8B1A1A] hover:underline"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="order-2 rounded-sm border px-5 py-2.5 font-body text-sm font-semibold transition-colors duration-200 sm:order-1"
            style={{ borderColor: "#28282B33", color: "#28282B" }}
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => decide("granted")}
            className="order-1 rounded-sm px-5 py-2.5 font-body text-sm font-semibold text-[#FDFCF8] transition-colors duration-200 sm:order-2"
            style={{ backgroundColor: "#8B1A1A" }}
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
