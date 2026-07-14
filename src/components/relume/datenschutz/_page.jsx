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
            className="mb-4 font-heading font-bold leading-tight tracking-tight text-[#28282B]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Datenschutzerklärung
          </h1>
          <p className="mb-12 font-body text-sm text-[#5A6478]">Stand: Juli 2026</p>

          <div className="space-y-10 font-body text-base leading-relaxed text-[#28282B]/75">

            {/* 1. ÜBERBLICK */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">1. Datenschutz auf einen Blick</h2>
              <h3 className="mb-2 font-heading text-base font-semibold text-[#28282B]">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz
                entnehmen Sie unserer nachfolgenden Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-heading text-base font-semibold text-[#28282B]">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong className="text-[#28282B]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                können Sie dem Abschnitt „Verantwortliche Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
              <p className="mb-4">
                <strong className="text-[#28282B]">Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. per E-Mail oder
                Telefon). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
                Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs).
              </p>
              <p className="mb-4">
                <strong className="text-[#28282B]">Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                Kontaktdaten werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt.
              </p>
              <p>
                <strong className="text-[#28282B]">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung,
                Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Näheres hierzu
                finden Sie unter „Ihre Rechte als betroffene Person" weiter unten.
              </p>
            </div>

            {/* 2. HOSTING */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">2. Hosting</h2>
              <p className="mb-4">
                Diese Website wird bei folgendem Anbieter gehostet:{" "}
                <strong>Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA.</strong>
              </p>
              <p className="mb-4">
                Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des
                Hosters gespeichert. Hierbei kann es sich um IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten
                handeln, die über eine Website generiert werden.
              </p>
              <p className="mb-4">
                Da Netlify ein US-amerikanisches Unternehmen ist, können Daten in die USA übertragen werden.
                Netlify hat sich den EU-Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO
                unterworfen, die ein angemessenes Datenschutzniveau gewährleisten. Mit Netlify wurde ein
                Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen.
              </p>
              <p>
                Die Nutzung des Hosters erfolgt zum Zweck der Vertragserfüllung gegenüber unseren potenziellen
                und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter
                (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>

            {/* 3. SSL/TLS */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">3. Sicherheit und SSL-/TLS-Verschlüsselung</h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
                eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer
                Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
                an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </div>

            {/* 4. ALLGEMEINE PFLICHTINFORMATIONEN */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">4. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="mb-2 font-heading text-base font-semibold text-[#28282B]">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-heading text-base font-semibold text-[#28282B]">Verantwortliche Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                M. Fischer Maschinenbetrieb<br />
                Markus Fischer<br />
                Ritzmehring 1<br />
                83543 Rott am Inn<br /><br />
                Telefon: <a href="tel:+491754322110" className="text-[#8B1A1A] hover:underline">0175 / 4322110</a><br />
                E-Mail: <a href="mailto:m.fischer-mab@web.de" className="text-[#8B1A1A] hover:underline">m.fischer-mab@web.de</a>
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-heading text-base font-semibold text-[#28282B]">Datenschutzbeauftragter</h3>
              <p>
                Wir sind gemäß Art. 37 DSGVO nicht verpflichtet, einen Datenschutzbeauftragten zu bestellen,
                da wir als Einzelunternehmen keine umfangreiche Verarbeitung besonderer Kategorien von Daten
                vornehmen und regelmäßig weniger als 20 Personen mit der Verarbeitung personenbezogener Daten
                beschäftigt sind.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-heading text-base font-semibold text-[#28282B]">Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen);
                im letzteren Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>
            </div>

            {/* 5. BETROFFENENRECHTE */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">5. Ihre Rechte als betroffene Person</h2>
              <p className="mb-4">
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
              </p>
              <ul className="ml-4 space-y-2 list-disc list-inside">
                <li><strong className="text-[#28282B]">Auskunftsrecht</strong> (Art. 15 DSGVO): Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
                <li><strong className="text-[#28282B]">Berichtigungsrecht</strong> (Art. 16 DSGVO): Sie können unverzüglich die Berichtigung unrichtiger oder Vervollständigung unvollständiger personenbezogener Daten verlangen.</li>
                <li><strong className="text-[#28282B]">Löschungsrecht</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer personenbezogenen Daten verlangen, soweit die gesetzlichen Voraussetzungen erfüllt sind.</li>
                <li><strong className="text-[#28282B]">Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO): Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
                <li><strong className="text-[#28282B]">Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie haben das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.</li>
                <li><strong className="text-[#28282B]">Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit der Verarbeitung Ihrer personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, zu widersprechen.</li>
                <li><strong className="text-[#28282B]">Widerruf einer Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Wenn die Datenverarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</li>
              </ul>
              <p className="mt-4">
                Zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an die oben genannte verantwortliche Stelle.
              </p>
            </div>

            {/* BESCHWERDERECHT */}
            <div>
              <h3 className="mb-2 font-heading text-base font-semibold text-[#28282B]">Beschwerderecht bei der Aufsichtsbehörde</h3>
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht
                Ihnen das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde zu, wenn Sie der Ansicht
                sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
              <p className="mt-3">
                Die zuständige Aufsichtsbehörde für Bayern ist:<br /><br />
                Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
                Promenade 18<br />
                91522 Ansbach<br />
                Telefon: +49 981 180093-0<br />
                E-Mail: <a href="mailto:poststelle@lda.bayern.de" className="text-[#8B1A1A] hover:underline">poststelle@lda.bayern.de</a><br />
                Website:{" "}
                <a
                  href="https://www.lda.bayern.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B1A1A] hover:underline"
                >
                  www.lda.bayern.de
                </a>
              </p>
            </div>

            {/* 6. COOKIES & EINWILLIGUNG */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">6. Cookies und Einwilligung</h2>
              <p className="mb-4">
                Technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind, werden auf
                Grundlage von § 25 Abs. 2 TDDDG gesetzt und erfordern keine gesonderte Einwilligung. Ihre
                getroffene Cookie-Auswahl speichern wir hierzu lokal in Ihrem Browser (localStorage), damit das
                Einwilligungsbanner bei weiteren Besuchen nicht erneut angezeigt werden muss.
              </p>
              <p className="mb-4">
                Darüber hinaus setzen wir Cookies und vergleichbare Technologien für Analyse- und
                Statistikzwecke (siehe Abschnitt „Google Tag Manager und Google Analytics") ein. Diese werden
                ausschließlich nach Ihrer aktiven Einwilligung geladen (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a
                DSGVO). Beim ersten Besuch der Website erhalten Sie hierzu einen Cookie-Hinweis, über den Sie
                der Verwendung zustimmen oder sie ablehnen können.
              </p>
              <p>
                Ihre Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft widerrufen
                werden. Sie können Ihre Cookie-Einstellungen jederzeit über den Link „Cookie-Einstellungen"
                im Footer der Website ändern oder widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Verarbeitung bleibt vom Widerruf unberührt.
              </p>
            </div>

            {/* 6a. GOOGLE TAG MANAGER & GOOGLE ANALYTICS */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">
                6a. Google Tag Manager und Google Analytics
              </h2>
              <p className="mb-4">
                Diese Website nutzt den Google Tag Manager sowie den Webanalysedienst Google Analytics.
                Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
                („Google").
              </p>
              <p className="mb-4">
                Der Google Tag Manager ist ein Werkzeug, mit dem wir Tracking- und Analysedienste (hier: Google
                Analytics) einbinden und verwalten. Google Analytics ermöglicht eine Analyse des
                Nutzungsverhaltens der Websitebesucher (z. B. aufgerufene Seiten, Verweildauer, ungefähre
                Herkunft). Hierzu werden Cookies auf Ihrem Endgerät gespeichert bzw. es wird auf Ihrem Endgerät
                gespeicherte Information ausgelesen. Die so erhobenen Informationen werden in der Regel an einen
                Server von Google übertragen und dort gespeichert. Dabei kann es zu einer Übermittlung von Daten
                in die USA kommen; für diese Übermittlung stützt sich Google auf die
                EU-Standardvertragsklauseln (Art. 46 DSGVO).
              </p>
              <p className="mb-4">
                Der Google Tag Manager und Google Analytics werden erst geladen, nachdem Sie über unseren
                Cookie-Hinweis aktiv eingewilligt haben. Vor Ihrer Einwilligung findet keine Übertragung an
                Google statt. Die Rechtsgrundlage der Verarbeitung ist Ihre Einwilligung gemäß Art. 6 Abs. 1
                lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit über die
                „Cookie-Einstellungen" im Footer mit Wirkung für die Zukunft widerrufbar.
              </p>
              <p className="mb-4">
                Mit Google wurde ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO geschlossen.
              </p>
              <p>
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
                Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B1A1A] hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>
            </div>

            {/* 7. SERVER-LOG-DATEIEN */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">7. Server-Log-Dateien</h2>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="mt-3 ml-4 space-y-1 list-disc list-inside">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Server-Log-Dateien
                werden ausschließlich zu Zwecken der technischen Bereitstellung und Sicherheit verarbeitet und im Rahmen
                der Systeme unseres Hosters für den technisch erforderlichen Zeitraum gespeichert. Die Erfassung dieser
                Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                Interesse an der technisch fehlerfreien Darstellung und der Sicherheit seiner Website.
              </p>
            </div>

            {/* 8. KONTAKTAUFNAHME */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">8. Kontaktaufnahme per E-Mail oder Telefon</h2>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zweck der Bearbeitung Ihres Anliegens
                bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
                Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
                Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="mt-4">
                Die von Ihnen übermittelten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
                Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt.
                Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>

            {/* 9. GOOGLE FONTS */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">9. Schriftarten (lokal eingebunden)</h2>
              <p>
                Diese Website verwendet Web-Schriftarten (Syne, DM Sans, Playfair Display), die vollständig
                lokal auf dem Server dieser Website gespeichert und eingebunden sind. Eine Verbindung zu
                externen Servern – insbesondere zu Google-Servern – findet dabei nicht statt. Es werden keine
                personenbezogenen Daten an Dritte übertragen.
              </p>
            </div>

            {/* 10. GOOGLE MAPS */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">10. Google Maps</h2>
              <p className="mb-4">
                Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited,
                Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mb-4">
                Google Maps wird auf dieser Website erst nach Ihrer aktiven Einwilligung geladen
                (sog. 2-Klick-Lösung). Erst wenn Sie auf „Karte laden" klicken, wird eine Verbindung zu
                den Servern von Google hergestellt. Dabei wird Ihre IP-Adresse an Google übertragen und
                in der Regel auf Servern in den USA gespeichert. Der Anbieter dieser Seite hat keinen
                Einfluss auf diese Datenübertragung.
              </p>
              <p className="mb-4">
                Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO
                und § 25 Abs. 1 TDDDG. Sie können Ihre Einwilligung jederzeit verweigern, indem Sie die
                Karte nicht laden.
              </p>
              <p>
                Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B1A1A] hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>
            </div>

            {/* 11. INSTAGRAM */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-[#28282B]">11. Externe Links zu Instagram</h2>
              <p>
                Diese Website enthält einen Link zum Instagram-Profil von M. Fischer Maschinenbetrieb. Beim
                Klick auf den Link verlassen Sie diese Website und werden zu Instagram weitergeleitet. Dort
                gelten die Datenschutzbestimmungen von Meta Platforms Ireland Limited. Wir haben keinen Einfluss
                auf die Datenverarbeitung durch Instagram. Durch das bloße Verlinken auf das Profil werden
                keine personenbezogenen Daten an Instagram übertragen.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
