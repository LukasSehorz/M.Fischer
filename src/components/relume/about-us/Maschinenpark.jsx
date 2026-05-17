"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "../../../utils/gsap";

const machines = [
  {
    num: "01",
    name: "Minibagger",
    img: "/images/bild9.png",
    tags: ["Tiefbau", "Erdarbeiten", "Außenanlagen"],
    desc: "Kompakt und wendig – für Kanalgräben, Aushub und Arbeiten in engen Bereichen direkt am Haus.",
  },
  {
    num: "02",
    name: "Anhänger",
    img: "/images/bild20.png",
    tags: ["Transport", "Eigenregie"],
    desc: "Alle Geräte werden selbst transportiert – kein Subunternehmer, keine Wartezeiten.",
  },
  {
    num: "03",
    name: "Verdichtungsgeräte",
    img: "/images/bild21.png",
    tags: ["Rüttelplatte", "Pflasterarbeiten", "Tiefbau"],
    desc: "Rüttelplatte und Stampfer für dauerhaft tragfähige Unterböden bei Stellplätzen und Wegen.",
  },
  {
    num: "04",
    name: "Forstausrüstung",
    img: "/images/bild22.png",
    tags: ["Baumfällung", "Rodung", "Grundstückspflege"],
    desc: "Motorsäge und Freischneider – Fällung, Rückschnitt und vollständige Rodung aus einer Hand.",
  },
];

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

export function Maschinenpark() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading
      gsap.set(eyebrowRef.current, { y: 22, opacity: 0 });
      const headingWords = headingRef.current
        ? splitWords(headingRef.current, "Mein Maschinenpark")
        : [];
      gsap.set(headingWords, { yPercent: 110 });
      gsap.set(subRef.current, { y: 18, opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
        defaults: { force3D: true },
      })
        .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
        .to(headingWords, { yPercent: 0, duration: 1.0, ease: "expo.out", stagger: 0.07 }, "-=0.35")
        .to(subRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.5");

      // Cards: staggered reveal
      cardsRef.current.filter(Boolean).forEach((card, idx) => {
        const num  = card.querySelector("[data-card-num]");
        const line = card.querySelector("[data-card-line]");
        const body = card.querySelector("[data-card-body]");

        gsap.set(card, { y: 40, opacity: 0 });
        gsap.set(num,  { scale: 0.6, opacity: 0 });
        gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(body, { y: 16, opacity: 0 });

        gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          delay: (idx % 2) * 0.08,
          defaults: { force3D: true },
        })
          .to(card, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" })
          .to(num,  { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.8)" }, "-=0.5")
          .to(line, { scaleX: 1, duration: 0.6, ease: "expo.inOut" }, "-=0.35")
          .to(body, { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, "-=0.4");
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#0e0e0e" }}>
      <div className="container">

        {/* Heading */}
        <div className="mb-14 md:mb-18">
          <p ref={eyebrowRef} className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-[#8B1A1A]">
            Ausrüstung
          </p>
          <h2
            ref={headingRef}
            className="mb-4 font-heading font-bold leading-tight tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            Mein Maschinenpark
          </h2>
          <p ref={subRef} className="max-w-xl font-body text-base text-white/50">
            Alle Maschinen im Eigenbesitz – kein Subunternehmer, kein Zeitverlust. Was ich verspreche, führe ich selbst aus.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-px bg-white/[0.06] sm:grid-cols-2">
          {machines.map((m, i) => (
            <div
              key={m.num}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative flex flex-col p-8 transition-colors duration-300 hover:bg-white/[0.04]"
              style={{ backgroundColor: "#0e0e0e", opacity: 0 }}
            >
              {/* Background image */}
              {m.img && (
                <>
                  <img
                    src={m.img}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ opacity: 0.35 }}
                  />
                  <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/30" />
                </>
              )}

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#8B1A1A] transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <span
                data-card-num
                className="relative z-10 mb-6 font-heading font-bold leading-none text-[#8B1A1A]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", opacity: 0 }}
              >
                {m.num}
              </span>

              {/* Divider */}
              <div data-card-line className="relative z-10 mb-6 h-px w-8 bg-white/15" />

              {/* Content */}
              <div data-card-body className="relative z-10" style={{ opacity: 0 }}>
                <h3 className="mb-1 font-heading text-xl font-bold text-white md:text-2xl">
                  {m.name}
                </h3>
                <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8B1A1A]/70">
                  {m.spec}
                </p>
                <p className="mb-5 font-body text-sm leading-relaxed text-white/55">
                  {m.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35 transition-colors duration-300 group-hover:border-[#8B1A1A]/30 group-hover:text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
