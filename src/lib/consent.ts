// Cookie-/Consent-Verwaltung (TDDDG § 25 Abs. 1 / DSGVO Art. 6 Abs. 1 lit. a)
//
// Diese Datei ist ausschließlich der Einwilligungs-SPEICHER: sie liest und
// schreibt die Entscheidung und meldet jede Änderung per Event.
//
// Das Laden von GTM passiert bewusst NICHT mehr hier, sondern im Inline-Script
// in index.html. Grund: Die Google Search Console verifiziert die Inhaberschaft
// anhand des ausgelieferten HTML und führt dabei kein JavaScript aus — eine per
// JS nachgeladene Container-ID sieht sie nie. Das Inline-Script trägt die ID im
// Quelltext, prüft aber vor dem Nachladen von gtm.js denselben localStorage-Key
// und lauscht auf dasselbe Event wie hier. Ohne Einwilligung geht daher weiter
// kein Request an Google.
//
// Wichtig: Key und Event-Name müssen mit dem Inline-Script in index.html
// übereinstimmen.

export const CONSENT_KEY = "mf_cookie_consent"; // "granted" | "denied"
export const CONSENT_EVENT = "mf-consent-change";

export type ConsentValue = "granted" | "denied";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* localStorage nicht verfügbar – Consent gilt dann nur für diese Sitzung */
  }
  // Bei "granted" startet das Inline-Script aus index.html den GTM-Container,
  // sobald es dieses Event sieht.
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
