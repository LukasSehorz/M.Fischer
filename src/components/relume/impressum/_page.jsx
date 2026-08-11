"use client";

import React from "react";

export default function Page() {
  return (
    <div style={{ backgroundColor: "#FDFCF8" }}>
      <section className="px-[5%] pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="container max-w-3xl">

          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.25em] text-[#8B1A1A]">
            Rechtliches
          </p>
          <h1
            className="mb-12 font-heading font-bold leading-tight tracking-tight text-[#28282B]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Impressum
          </h1>

          <div className="space-y-10 font-body text-base leading-relaxed text-[#28282B]/75">

            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">Angaben gemäß § 5 DDG</h2>
              <p>
                M. Fischer Maschinenbetrieb<br />
                Inhaber: Markus Fischer<br />
                Ritzmehring 1<br />
                83543 Rott am Inn
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">Kontakt</h2>
              <p>
                Telefon: <a href="tel:+491754322110" className="text-[#8B1A1A] hover:underline">0175 / 4322110</a><br />
                E-Mail: <a href="mailto:m.fischer-mab@web.de" className="text-[#8B1A1A] hover:underline">m.fischer-mab@web.de</a>
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">Umsatzsteuer</h2>
              <p>
                {/* HINWEIS FÜR WEBSITEBETREIBER: Bitte eine der folgenden Optionen wählen und die andere löschen: */}
                {/* Option A (wenn USt-ID vorhanden): */}
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <strong className="text-[#8B1A1A] font-semibold">[BITTE EINTRAGEN: USt-IdNr. DE...]</strong>
              </p>
              {/* Option B (wenn Kleinunternehmer § 19 UStG): diesen Abschnitt durch folgenden Text ersetzen: */}
              {/* "Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und daher auch nicht ausgewiesen." */}
            </div>

            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Baumaschinenmeister<br />
                Verliehen durch: Deutschland<br />
                Zuständige Kammer: Handwerkskammer für München und Oberbayern<br />
                Eintrag in der Handwerksrolle: <strong className="text-[#8B1A1A] font-semibold">[BITTE EINTRAGEN: Handwerksrollen-Nummer]</strong>
              </p>
              <p className="mt-3">
                Es gelten folgende berufsrechtliche Regelungen:{" "}
                <a
                  href="https://www.gesetze-im-internet.de/hwo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B1A1A] hover:underline"
                >
                  Handwerksordnung (HwO)
                </a>
              </p>
            </div>

            {/* Geändert von § 55 Abs. 2 RStV → § 18 Abs. 2 MStV (gilt seit 01.11.2020) */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>
                Markus Fischer<br />
                Ritzmehring 1<br />
                83543 Rott am Inn
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">Streitschlichtung</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Aktualisiert: §§ 7-10 TMG wurden zum 14.05.2024 durch das DDG/DSA abgelöst */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach
                den allgemeinen Gesetzen verantwortlich. Nach Art. 4 bis 6 der Verordnung (EU) 2022/2065
                (Digital Services Act, DSA) i. V. m. § 1 DDG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">Hinweis zu KI-generierten Inhalten</h2>
              <p>
                Teile der Inhalte dieser Website (Texte und Bilder) wurden mit Unterstützung von künstlicher
                Intelligenz erstellt und redaktionell geprüft.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
