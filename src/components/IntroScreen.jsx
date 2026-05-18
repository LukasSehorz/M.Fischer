"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE   = [0.76, 0, 0.24, 1];
const SMOOTH = [0.43, 0.13, 0.23, 0.96];

export default function IntroScreen({ onComplete }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setRevealed(true), 600);
    const t2 = setTimeout(onComplete, 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <motion.div
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "#ffffff",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
      initial={{ opacity: 1 }}
      exit={{
        clipPath: "inset(0 0 100% 0)",
        transition: { duration: 0.85, ease: EASE },
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 2vw, 36px)" }}>

        {/* Bagger – immer sichtbar, wird durch den wachsenden Text nach links geschoben */}
        <motion.img
          src="/images/logo-bagger.webp"
          alt="M. Fischer Bagger"
          style={{ display: "block", height: "clamp(80px, 12vw, 160px)", width: "auto", flexShrink: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />

        {/* Text-Container wächst von 0 nach rechts → schiebt Bagger nach links */}
        <motion.div
          style={{ overflow: "hidden" }}
          initial={{ maxWidth: 0 }}
          animate={{ maxWidth: revealed ? 700 : 0 }}
          transition={{ duration: 1.15, ease: SMOOTH }}
        >
          <div style={{ overflow: "hidden" }}>
            <motion.img
              src="/images/logo-text.webp"
              alt="M. Fischer Bauunternehmen"
              style={{ display: "block", height: "clamp(44px, 6.5vw, 88px)", width: "auto" }}
              initial={{ y: "110%" }}
              animate={{ y: revealed ? 0 : "110%" }}
              transition={{ duration: 0.9, ease: SMOOTH, delay: 0.2 }}
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
