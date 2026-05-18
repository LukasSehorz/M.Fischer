"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../../utils/gsap";

export function Header78() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const scope = sectionRef.current;
    if (!scope) return;

    // Window flag (resets on page refresh, persists across SPA navigation).
    // sessionStorage was wrong — it persisted across refreshes, but the intro
    // ALWAYS replays on refresh (App.tsx introComplete inits to false).
    const introAlreadyDone = window.__schmidIntroDone === true;

    let tl = null;
    const animatableSelector = ".hero-bg-img, .hero-eyebrow-line, .hero-eyebrow-inner, .hero-headline-inner, .hero-body, .hero-cta";

    const startAnimations = (delay, s) => {
      // Kill any lingering tweens from StrictMode's first-run cleanup
      gsap.killTweensOf(scope.querySelectorAll(animatableSelector));

      tl = gsap.timeline({ delay, defaults: { ease: "power3.out" } });
      tl.fromTo(scope.querySelector(".hero-bg-img"),
        { scale: 1.08 }, { scale: 1, duration: 3.5 * s, ease: "power1.out" }, 0);
      tl.fromTo(scope.querySelector(".hero-eyebrow-line"),
        { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", duration: 0.85 * s }, 0.35 * s);
      tl.fromTo(scope.querySelector(".hero-eyebrow-inner"),
        { y: "120%" }, { y: "0%", duration: 0.65 * s }, 0.7 * s);
      tl.fromTo(scope.querySelectorAll(".hero-headline-inner"),
        { y: "110%" }, { y: "0%", stagger: 0.13 * s, duration: 1.15 * s }, 0.95 * s);
      tl.fromTo(scope.querySelector(".hero-body"),
        { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 * s }, 1.5 * s);
      tl.fromTo(scope.querySelectorAll(".hero-cta"),
        { y: 22, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.11 * s, duration: 0.7 * s }, 1.85 * s);
    };

    // Parallax: sync, safe in gsap.context
    const ctx = gsap.context(() => {
      gsap.to(".hero-bg-img", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, scope);

    let onIntroComplete = null;

    if (introAlreadyDone) {
      // SPA navigation back to home — intro already played in this page load
      startAnimations(0.05, 0.75);
    } else {
      // Intro is playing (or about to). Hide elements NOW so they're not
      // briefly visible behind the intro, then animate when intro finishes.
      gsap.set(scope.querySelector(".hero-eyebrow-line"), { scaleX: 0 });
      gsap.set(scope.querySelector(".hero-eyebrow-inner"), { y: "120%" });
      gsap.set(scope.querySelectorAll(".hero-headline-inner"), { y: "110%" });
      gsap.set(scope.querySelector(".hero-body"), { y: 28, opacity: 0 });
      gsap.set(scope.querySelectorAll(".hero-cta"), { y: 22, opacity: 0 });

      onIntroComplete = () => startAnimations(0.3, 1);
      window.addEventListener("schmid-intro-complete", onIntroComplete, { once: true });
    }

    return () => {
      if (tl) tl.kill();
      ctx.revert();
      if (onIntroComplete) {
        window.removeEventListener("schmid-intro-complete", onIntroComplete);
      }
    };
  }, []);

  // Start video only after the intro is done (same gate as the GSAP animations)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => video.play().catch(() => {});

    if (window.__schmidIntroDone === true) {
      playVideo();
    } else {
      window.addEventListener("schmid-intro-complete", playVideo, { once: true });
      return () => window.removeEventListener("schmid-intro-complete", playVideo);
    }
  }, []);

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "calc(100vh - 4.5rem)" }}
    >
      {/* ── Video: Hintergrund ── */}
      <video
        ref={videoRef}
        className="hero-bg-img absolute inset-0 h-full w-full object-cover object-center"
        style={{ willChange: "transform", filter: "saturate(0.85) brightness(0.9)" }}
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        poster="/images/prozess-hero.webp"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dunkler Verlauf — links dicht, rechts ausblendend */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(18,18,18,0.93) 0%, rgba(18,18,18,0.80) 38%, rgba(18,18,18,0.45) 65%, rgba(18,18,18,0.12) 100%)",
        }}
      />



      {/* ── Text-Inhalt ── */}
      <div className="relative z-10 flex h-full flex-col justify-center px-[6%] pt-20 pb-12 md:max-w-[58%] lg:max-w-[52%]">

        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-4">
          <span className="hero-eyebrow-line h-px w-10 flex-shrink-0" style={{ background: "#8B1A1A" }} />
          <div style={{ overflow: "hidden" }}>
            <p className="hero-eyebrow-inner font-body text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "#8B1A1A" }}>
              Rott am Inn · Gegründet 2020
            </p>
          </div>
        </div>

        {/* Headline – each line in its own overflow:hidden mask */}
        <h1
          className="mb-6 font-serif font-bold tracking-tight text-white"
          style={{ fontSize: "clamp(2.4rem, 4.8vw, 5.8rem)", lineHeight: 1.04, marginBottom: "3.5rem" }}
        >
          <span className="block" style={{ overflow: "hidden", paddingBottom: "0.1em" }}>
            <span className="hero-headline-inner block">
              Qualität aus{" "}
              <em className="italic" style={{ color: "#8B1A1A", whiteSpace: "nowrap" }}>erster Hand.</em>
            </span>
          </span>
          <span className="block" style={{ overflow: "hidden", paddingBottom: "0.1em" }}>
            <span className="hero-headline-inner block">
              Persönlich vor Ort.
            </span>
          </span>
        </h1>

        {/* Body */}
        <p className="hero-body mb-16 max-w-[440px] font-body text-base leading-relaxed text-white/70 md:text-lg">
          Kein Subunternehmer – Markus Fischer steht persönlich auf jeder Baustelle.
          Tiefbau, Abbruch, Erdarbeiten und Außenanlagen im Inntal und Chiemgau.
        </p>

        {/* CTAs — both get the fill-on-hover effect */}
        <div className="flex flex-wrap gap-3">
          <a
            href="/kontakt"
            className="hero-cta group inline-flex items-center gap-3 border border-white/40 bg-transparent px-7 py-4 font-body text-sm font-semibold uppercase tracking-[0.14em] text-white/85 transition-all duration-300 hover:bg-white hover:border-white hover:text-[#8B1A1A]"
          >
            Projekt anfragen
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="https://wa.me/491754322110"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta group inline-flex items-center gap-3 border border-white/40 bg-transparent px-7 py-4 font-body text-sm font-semibold uppercase tracking-[0.14em] text-white/85 transition-all duration-300 hover:bg-white hover:border-white hover:text-[#25D366]"
          >
            <svg className="h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp schreiben
          </a>
        </div>
      </div>

    </section>
  );
}
