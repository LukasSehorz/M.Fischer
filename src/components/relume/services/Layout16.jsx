"use client";

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "../../../utils/gsap";

const points = [
  "Der Inhaber arbeitet persönlich auf jeder Baustelle",
  "Moderner Maschinenpark für Tiefbau, Abbruch und Erdarbeiten",
  "Direkte Kommunikation – kein Vermittler, keine Überraschungen",
];

// Helper: split text into char spans
const splitChars = (el, text) => {
  el.innerHTML = "";
  return text.split("").map((char) => {
    const s = document.createElement("span");
    s.style.display = "inline-block";
    s.style.willChange = "transform, opacity";
    s.textContent = char === " " ? " " : char;
    el.appendChild(s);
    return s;
  });
};

// Helper: split into word spans (for line-by-line wraps)
const splitWords = (el, text) => {
  el.innerHTML = "";
  return text.split(" ").map((word, i, arr) => {
    const wrap = document.createElement("span");
    wrap.style.display = "inline-block";
    wrap.style.overflow = "hidden";
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

export function Layout16() {
  const sectionRef = useRef(null);
  const videoRef   = useRef(null);
  const overlayRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef    = useRef(null);
  const listRef    = useRef(null);
  const ctaRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video parallax: subtle scale + brightness scrub
      if (videoRef.current) {
        gsap.fromTo(videoRef.current,
          { scale: 1.15, filter: "brightness(0.6)" },
          {
            scale: 1.0, filter: "brightness(1)",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // Overlay darkens slightly as content reveals
      if (overlayRef.current) {
        gsap.fromTo(overlayRef.current,
          { opacity: 1.1 },
          {
            opacity: 0.85,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      }

      // Eyebrow
      if (eyebrowRef.current) {
        gsap.set(eyebrowRef.current, { opacity: 0, x: -30 });
      }

      // Heading: word-by-word lift from below
      let headingWords = [];
      if (headingRef.current) {
        headingWords = splitWords(headingRef.current, "Kompetenz und Termintreue – garantiert.");
        gsap.set(headingWords, { yPercent: 110 });
      }

      // Paragraph: fade in as block
      if (paraRef.current) {
        gsap.set(paraRef.current, { opacity: 0, y: 8 });
      }

      // List items
      const listItems = listRef.current ? listRef.current.querySelectorAll("li") : [];
      gsap.set(listItems, { x: -40, opacity: 0 });

      // CTA
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { y: 28, opacity: 0 });
      }

      // Master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(eyebrowRef.current, {
          opacity: 1, x: 0, duration: 0.6, ease: "power3.out",
        })
        .to(headingWords, {
          yPercent: 0, duration: 1.0, ease: "expo.out",
          stagger: 0.08,
        }, "-=0.35")
        .to(paraRef.current, {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
        }, "-=0.5")
        .to(listItems, {
          x: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          stagger: 0.14,
        }, "-=0.4")
        .to(ctaRef.current, {
          y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.4)",
        }, "-=0.3");

      // List bullet dots: pulse on enter
      listItems.forEach((li, idx) => {
        const dot = li.querySelector("[data-dot]");
        if (!dot) return;
        gsap.from(dot, {
          scale: 0, duration: 0.5, ease: "back.out(2.4)",
          delay: 0.1 + idx * 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Background image */}
      <img
        ref={videoRef}
        src="/images/bild11.webp"
        alt="M. Fischer Maschinenbetrieb"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ willChange: "transform, filter" }}
      />
      {/* Dark overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p ref={eyebrowRef} className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.25em]" style={{ color: "#8B1A1A" }}>
              Warum M. Fischer
            </p>
            <h2
              ref={headingRef}
              className="mb-5 font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
            >
              Kompetenz und Termintreue – garantiert.
            </h2>
            <p
              ref={paraRef}
              data-text="Durch geschultes Personal, neueste Technik und einen umfangreichen Maschinenpark bieten wir Ihnen ein Know-how, das Kompetenz und Terminsicherheit garantiert. Hoher Qualitätsstandard der verarbeiteten Materialien und erfahrene Fachkräfte bürgen für zuverlässige Ausführung."
              className="mb-6 font-body text-base leading-relaxed text-white/90 md:text-lg"
            >
              Als Einmannbetrieb arbeite ich persönlich auf jeder Baustelle.
              Mit modernem Maschinenpark und jahrelanger Erfahrung in Tiefbau,
              Abbruch und Außenanlagen biete ich Qualität und Termintreue,
              die Sie direkt erleben – nicht nur versprochen bekommen.
            </p>
            <ul ref={listRef} className="mb-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 font-body text-sm text-white/90 md:text-base">
                  <span data-dot className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#8B1A1A" }} />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              ref={ctaRef}
              to="/kontakt"
              className="inline-flex items-center gap-2 border border-white/60 px-7 py-3 font-body text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:border-[#8B1A1A] hover:text-[#8B1A1A]"
            >
              Projekt besprechen
              <span style={{ color: "#8B1A1A" }}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
