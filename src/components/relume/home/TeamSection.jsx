"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../../utils/gsap";

const michael = {
  num: "01",
  name: "Markus Fischer",
  title: "Inhaber",
  role: "Baumaschinenmeister",
  image: "/images/bild32.webp",
  email: "m.fischer-mab@web.de",
  bio: "Ich habe meinen Maschinenbetrieb 2020 in Rott am Inn gegründet. Als Baumaschinenmeister führe ich jeden Auftrag persönlich aus – von der ersten Besprechung bis zur Abnahme. Kein Subunternehmer, kein Umweg.",
  facts: [
    { label: "Gründung", value: "2020" },
    { label: "Spezialisierung", value: "Tiefbau, Abbruch & Außenanlagen" },
    { label: "Region", value: "Inntal und Chiemgau" },
  ],
};

export function TeamSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const scope = sectionRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Image: clip-path wipe in from right
      tl.fromTo(".team-img-wrap",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power2.inOut" },
        0
      );

      // Eyebrow label
      tl.fromTo(".team-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.2
      );

      // Name – mask reveal
      tl.fromTo(".team-name-inner",
        { y: "105%" },
        { y: "0%", duration: 0.85 },
        0.35
      );

      // Sub-title
      tl.fromTo(".team-subtitle",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55 },
        0.55
      );

      // Gold divider line
      tl.fromTo(".team-divider",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.6 },
        0.65
      );

      // Bio paragraph
      tl.fromTo(".team-bio",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.75
      );

      // Fact rows staggered
      tl.fromTo(".team-fact",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        0.9
      );

      // Email
      tl.fromTo(".team-email",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45 },
        1.2
      );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" style={{ backgroundColor: "#28282B" }} ref={sectionRef}>

      {/* Mobile: Bild oben, Text unten — Desktop: side-by-side h-screen */}
      <div className="relative w-full overflow-hidden flex flex-col md:flex-row md:h-screen">

        {/* Bild — mobile: full width, feste Höhe — desktop: halbe Breite, volle Höhe */}
        <div className="team-img-wrap h-[100vw] max-h-[480px] w-full bg-[#f0ede8] md:order-2 md:h-full md:max-h-none md:w-1/2">
          <img
            src={michael.image}
            alt={michael.name}
            loading="lazy"
            className="h-full w-full object-cover [object-position:65%_0%] md:[object-position:65%_15%]"
          />
        </div>

        {/* Text */}
        <div className="flex w-full flex-col justify-center px-8 py-10 md:order-1 md:h-full md:w-1/2 md:px-16 lg:px-20">
          <p className="team-eyebrow mb-5 font-body text-xs font-semibold uppercase tracking-[0.32em]" style={{ color: "#8B1A1A" }}>
            {michael.num} · Über mich
          </p>

          <div style={{ overflow: "hidden", marginBottom: "0.5rem" }}>
            <h2
              className="team-name-inner font-heading font-bold leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
            >
              {michael.name}
            </h2>
          </div>

          <p className="team-subtitle mb-6 font-body text-sm uppercase tracking-[0.18em] text-white/50">
            {michael.title}
          </p>

          <div className="team-divider mb-6 h-px w-12" style={{ backgroundColor: "#8B1A1A" }} />

          <p className="team-bio mb-8 max-w-md font-body text-sm leading-relaxed text-white/60 md:text-base">
            {michael.bio}
          </p>

          <div className="mb-8 space-y-4">
            {michael.facts.map((f) => (
              <div key={f.label} className="team-fact flex items-baseline gap-4">
                <span className="w-32 shrink-0 font-body text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#8B1A1A" }}>
                  {f.label}
                </span>
                <span className="font-body text-sm text-white/80">{f.value}</span>
              </div>
            ))}
          </div>

          <a
            href={`mailto:${michael.email}`}
            className="team-email inline-flex items-center gap-2 font-body text-sm text-white/50 transition-colors duration-200 hover:text-white"
          >
            {michael.email} <span style={{ color: "#8B1A1A" }}>→</span>
          </a>
        </div>

      </div>
    </div>
  );
}
