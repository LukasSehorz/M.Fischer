"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2020",
    title: "Die Gründung",
    desc: "M. Fischer Maschinenbetrieb wird gegründet. Von Anfang an stehen persönliche Ausführung, Zuverlässigkeit und faire Preise im Mittelpunkt.",
    detail: "Was in Rott am Inn als Einmannbetrieb begann, legte den Grundstein für einen soliden Ruf in der Region – für Tiefbau, Abbruch und Außenanlagen.",
  },
  {
    year: "2022",
    title: "Erste Stammkunden",
    desc: "Durch konsequente Qualität und persönlichen Einsatz auf jeder Baustelle entstehen die ersten dauerhaften Kundenbeziehungen in der Region Inn-Salzach.",
    detail: "Mundpropaganda und positive Bewertungen auf Google und MyHammer sprechen für die Qualität der Arbeit – die Auftragslage wächst stetig.",
  },
  {
    year: "2024",
    title: "Maschinenpark erweitert",
    desc: "Investitionen in moderne Maschinen und Geräte ermöglichen ein breiteres Leistungsspektrum und noch effizientere Ausführung auf den Baustellen.",
    detail: "Von Baggerarbeiten über Baumfällungen bis zu Abbruch und Außenanlagen – der Betrieb ist für alle Aufgaben bestens ausgerüstet.",
  },
  {
    year: "Heute",
    title: "5+ Jahre Erfahrung",
    desc: "Fünf Jahre nach der Gründung steht M. Fischer Maschinenbetrieb für verlässliches Handwerk in der Region. Google 5/5 – MyHammer 4,8/5.",
    detail: "Persönlich auf jeder Baustelle, flexibel bei jedem Auftrag und zuverlässig bei jedem Termin – das ist das Versprechen von M. Fischer.",
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

export function Geschichte() {
  const sectionRef  = useRef(null);
  const eyebrowRef  = useRef(null);
  const headingRef  = useRef(null);
  const subRef      = useRef(null);
  const timelineRef = useRef(null);
  const lineRef     = useRef(null);
  const dotRefs     = useRef([]);
  const cardRefs    = useRef([]);
  const ghostRefs   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading intro
      gsap.set(eyebrowRef.current, { y: 22, opacity: 0 });
      const headingWords = headingRef.current
        ? splitWords(headingRef.current, "Meine Geschichte")
        : [];
      gsap.set(headingWords, { yPercent: 110 });
      gsap.set(subRef.current, { y: 22, opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        defaults: { force3D: true },
      })
        .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
        .to(headingWords, { yPercent: 0, duration: 1.0, ease: "expo.out", stagger: 0.07 }, "-=0.35")
        .to(subRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.5");

      // Timeline line grows with scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            end: "bottom 75%",
            scrub: 1.2,
          },
        }
      );

      // Dots pop in
      dotRefs.current.forEach((dot) => {
        if (!dot) return;
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2.5)",
            scrollTrigger: { trigger: dot, start: "top 72%", toggleActions: "play none none reverse" },
          }
        );
      });

      // Cards slide in from right
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, x: 60 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      });

      // Ghost year numbers fade in and drift upward slowly
      ghostRefs.current.forEach((ghost) => {
        if (!ghost) return;
        gsap.fromTo(ghost,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: ghost, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden" style={{ backgroundColor: "#0e0e0e" }}>

      {/* Heading */}
      <div
        className="relative px-[5%] py-16 md:py-24 lg:py-28"
        style={{
          backgroundImage: "url('/images/geschichte-mauerwerk.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,14,14,0.80) 0%, rgba(14,14,14,0.92) 60%, rgba(14,14,14,1) 100%)" }} />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p ref={eyebrowRef} className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-[#8B1A1A]">
              Seit 2020
            </p>
            <h2
              ref={headingRef}
              className="mb-5 font-heading font-bold leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Meine Geschichte
            </h2>
            <p ref={subRef} className="font-body text-base leading-relaxed text-white/50">
              Einmannbetrieb seit 2020.<br />Ein Anspruch: Persönlich. Flexibel. Zuverlässig.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-[5%] pb-16 md:pb-24 lg:pb-28">
        <div className="container">
          <div ref={timelineRef} className="relative">

            {/* Vertical line track */}
            <div
              className="absolute top-0 bottom-0"
              style={{ left: "23px", width: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "2px" }}
            >
              <div
                ref={lineRef}
                className="absolute inset-0 origin-top"
                style={{
                  borderRadius: "2px",
                  background: "linear-gradient(to bottom, #8B1A1A, #C94040 50%, #8B1A1A)",
                  boxShadow: "0 0 12px rgba(139,26,26,0.6)",
                  transform: "scaleY(0)",
                }}
              />
            </div>

            {/* Milestones */}
            <div>
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className="relative grid grid-cols-[48px_1fr] pb-20 last:pb-0"
                >
                  {/* Dot */}
                  <div className="flex justify-center pt-3 z-10">
                    <div
                      ref={(el) => (dotRefs.current[i] = el)}
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle at 35% 32%, #C94040, #8B1A1A 48%, #5C0F0F 100%)",
                        boxShadow: "0 0 0 3px #0e0e0e, 0 0 0 5px rgba(139,26,26,0.5), 0 0 16px rgba(139,26,26,0.4)",
                        opacity: 0,
                        transform: "scale(0)",
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    ref={(el) => (cardRefs.current[i] = el)}
                    className="relative pl-8 md:pl-14 overflow-hidden"
                    style={{ opacity: 0 }}
                  >
                    {/* Ghost year watermark */}
                    <span
                      ref={(el) => (ghostRefs.current[i] = el)}
                      className="pointer-events-none absolute right-0 top-[-0.15em] select-none font-heading font-bold leading-none"
                      style={{
                        fontSize: "clamp(6rem, 18vw, 16rem)",
                        color: "rgba(255,255,255,0.03)",
                        lineHeight: 1,
                        opacity: 0,
                      }}
                    >
                      {m.year}
                    </span>

                    {/* Step number */}
                    <span className="mb-4 block font-body text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8B1A1A]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Year label */}
                    <p className="mb-2 font-heading font-bold text-white/20" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", letterSpacing: "0.1em" }}>
                      {m.year}
                    </p>

                    <h3 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                      {m.title}
                    </h3>

                    {/* Weinrot-Linie */}
                    <div className="mb-6 h-px w-10" style={{ background: "#8B1A1A" }} />

                    <p className="mb-3 font-body text-base leading-relaxed text-white/70 max-w-2xl">
                      {m.desc}
                    </p>
                    <p className="font-body text-sm leading-relaxed text-white/35 max-w-xl">
                      {m.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
