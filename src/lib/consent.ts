// Cookie-/Consent-Verwaltung (TDDDG § 25 Abs. 1 / DSGVO Art. 6 Abs. 1 lit. a)
//
// GTM (und damit Google Analytics) darf erst NACH aktiver Einwilligung geladen
// werden. Diese Datei kapselt das Speichern der Einwilligung und das einmalige
// Nachladen des GTM-Containers.

const GTM_ID = "GTM-NTWB96HL";
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
  if (value === "granted") {
    loadGtm();
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

let gtmLoaded = false;

// Lädt den GTM-Container genau einmal. Entspricht dem Standard-GTM-Snippet,
// wird aber ausschließlich nach erteilter Einwilligung aufgerufen.
export function loadGtm(): void {
  if (gtmLoaded || typeof window === "undefined") return;
  gtmLoaded = true;

  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const f = document.getElementsByTagName("script")[0];
  const j = document.createElement("script");
  j.async = true;
  j.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  f.parentNode!.insertBefore(j, f);
}

// Beim App-Start aufrufen: wenn früher bereits zugestimmt wurde, GTM direkt laden.
export function initConsent(): void {
  if (getConsent() === "granted") {
    loadGtm();
  }
}
