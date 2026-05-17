"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "../../../utils/gsap";

const splitWords = (el, text) => {
  el.innerHTML = "";
  return text.split(" ").map((word, i, arr) => {
    const wrap = document.createElement("span");
    wrap.style.display = "inline-block";
    wrap.style.overflow = "hidden";
    wrap.style.paddingBottom = "0.08em";
    if (i < arr.length - 1) wrap.style.marginRight = "0.28em";
    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.style.willChange = "transform";
    inner.textContent = word;
    wrap.appendChild(inner);
    el.appendChild(wrap);
    return inner;
  });
};

const vorteile = [
  {
    num: "01",
    title: "Fairer Lohn",
    desc: "Faire Bezahlung und pünktliche Abrechnung – verlässlich, transparent und leistungsgerecht.",
  },
  {
    num: "02",
    title: "Modernster Maschinenpark",
    desc: "Neueste Maschinen und Geräte für effizientes und sicheres Arbeiten auf jeder Baustelle.",
  },
  {
    num: "03",
    title: "Abwechslungsreiche Projekte",
    desc: "Tiefbau, Abbruch, Erdarbeiten, Außenanlagen – kein Tag ist wie der andere.",
  },
  {
    num: "04",
    title: "Direkter Kontakt",
    desc: "Seit 2020 Einmannbetrieb. Flache Hierarchien, direkte Kommunikation und schnelle Entscheidungen.",
  },
  {
    num: "05",
    title: "Sicherer Auftrag",
    desc: "Konstante Auftragslage durch ein starkes regionales Netzwerk und top Kundenbewertungen.",
  },
  {
    num: "06",
    title: "Flexible Arbeitszeiten",
    desc: "Als kleines Unternehmen reagieren wir flexibel auf die Bedürfnisse unserer Mitarbeiter.",
  },
];

export function KarriereVorteile() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const ctaRef     = useRef(null);
  const ghostRef   = useRef(null);
  const cellsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.set(eyebrowRef.current, { y: 22, opacity: 0 });
      const headingWords = headingRef.current
        ? splitWords(headingRef.current, "Warum bei uns arbeiten?")
        : [];
      gsap.set(headingWords, { yPercent: 110 });
      gsap.set(subRef.current, { y: 18, opacity: 0 });
      gsap.set(ctaRef.current, { y: 18, opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { force3D: true },
      })
        .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
        .to(headingWords, { yPercent: 0, duration: 1.0, ease: "expo.out", stagger: 0.07 }, "-=0.35")
        .to(subRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.5")
        .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.4)" }, "-=0.4");

      // Ghost "HOSER" parallax
      if (ghostRef.current) {
        gsap.to(ghostRef.current, {
          x: -120,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Per-cell entrance: gold number scale + content lift + bottom line wipe
      cellsRef.current.filter(Boolean).forEach((cell, idx) => {
        const num   = cell.querySelector("[data-vt-num]");
        const title = cell.querySelector("[data-vt-title]");
        const desc  = cell.querySelector("[data-vt-desc]");
        const line  = cell.querySelector("[data-vt-line]");

        gsap.set(cell,  { y: 36, opacity: 0 });
        gsap.set(num,   { scale: 0.5, opacity: 0, transformOrigin: "left center" });
        gsap.set(title, { y: 14, opacity: 0 });
        gsap.set(desc,  { y: 14, opacity: 0 });
        gsap.set(line,  { scaleX: 0, transformOrigin: "left center" });

        gsap.timeline({
          scrollTrigger: {
            trigger: cell,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          delay: (idx % 3) * 0.08,
          defaults: { force3D: true },
        })
          .to(cell,  { y: 0, opacity: 1, duration: 0.8, ease: "expo.out" })
          .to(num,   { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.6)" }, "-=0.55")
          .to(title, { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, "-=0.45")
          .to(desc,  { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, "-=0.4")
          .to(line,  { scaleX: 1, duration: 0.7, ease: "expo.inOut" }, "-=0.4");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="jobs"
      className="overflow-hidden"
      style={{ background: "linear-gradient(135deg, #8B1A1A 0%, #6B1515 60%, #5C0F0F 100%)" }}
    >
      {/* Top: image background behind heading */}
      <div
        className="relative px-[5%] py-16 md:py-24 lg:py-28"
        style={{
          backgroundImage: "url('/images/bild14.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Brand-blue overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(139,26,26,0.62) 0%, rgba(139,26,26,0.40) 40%, rgba(92,15,15,0.78) 75%, rgba(92,15,15,1) 100%)",
          }}
        />

        {/* Decorative background text */}
        <div
          ref={ghostRef}
          className="pointer-events-none absolute right-[-2%] top-[50%] -translate-y-1/2 select-none font-heading font-bold leading-none text-white/[0.07]"
          style={{ fontSize: "clamp(6rem, 18vw, 20rem)" }}
          aria-hidden="true"
        >
          FISCHER
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p ref={eyebrowRef} className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.28em] text-white/85">
                Karriere bei M. Fischer
              </p>
              <h2
                ref={headingRef}
                className="font-heading font-bold leading-tight tracking-tight text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
              >
                Warum bei uns arbeiten?
              </h2>
            </div>
            <div className="md:text-right">
              <p ref={subRef} className="font-body text-base leading-relaxed text-white/75 max-w-md md:ml-auto">
                Ein kleiner Betrieb mit großem Einsatz. Wer gerne anpackt und
                auf einer Baustelle mit modernem Gerät arbeitet, ist willkommen.
              </p>
              <a
                ref={ctaRef}
                href="#stellenangebote"
                className="mt-6 inline-flex items-center gap-2 border border-white/35 px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-white hover:text-hoser-gold hover:border-white"
              >
                Alle Stellen ansehen <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits grid */}
      <div className="px-[5%] pb-16 md:pb-24 lg:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.10]">
            {vorteile.map((v, idx) => (
              <div
                key={v.num}
                ref={(el) => (cellsRef.current[idx] = el)}
                className="group relative bg-[#6B1515] p-8 md:p-10 transition-colors duration-300 hover:bg-[#7A1818]"
              >
                <span data-vt-num className="mb-6 block font-body text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60">
                  {v.num}
                </span>
                <h3 data-vt-title className="mb-3 font-heading text-lg font-bold text-white md:text-xl transition-colors duration-300">
                  {v.title}
                </h3>
                <p data-vt-desc className="font-body text-sm leading-relaxed text-white/55">
                  {v.desc}
                </p>
                <div data-vt-line className="absolute bottom-0 left-0 h-[2px] w-full bg-white/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
