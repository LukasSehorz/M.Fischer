/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        // ── Surfaces ────────────────────────────────────────────────
        background: {
          primary: "#FDFCF8",
          secondary: "#F2EFE6",
          alternative: "#8B1A1A",
        },
        // ── Text ────────────────────────────────────────────────────
        text: {
          DEFAULT: "#28282B",
          primary: "#28282B",
          secondary: "#5A5A5D",
          alternative: "#FFFFFF",
        },
        // ── Borders ─────────────────────────────────────────────────
        border: {
          primary: "rgba(139,26,26,0.14)",
          alternative: "rgba(139,26,26,0.08)",
        },
        // ── Brand palette ───────────────────────────────────────────
        hoser: {
          gold: "#8B1A1A",         // primary brand wine red
          "gold-light": "#A52020", // lighter wine red
          cream: "#FDFCF8",        // canvas off-white
          charcoal: "#28282B",     // near-black
          stone: "#5A5A5D",        // mid gray
          navy: "#8B1A1A",         // deep wine red — feature blocks
          "navy-light": "#A52020",
          "navy-deep": "#5C0F0F",
        },
        neutral: {
          lightest: "#FFFFFF",
        },
      },
      animation: {
        "marquee-top": "marquee-top 50s linear infinite",
        "marquee-bottom": "marquee-bottom 50s linear infinite",
        "marquee-left": "marquee-left 25s linear infinite",
        "marquee-right": "marquee-right 25s linear infinite",
        "scroll-down": "scroll-down 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
      },
      keyframes: {
        "marquee-top": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "marquee-bottom": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      boxShadow: {
        xlarge: "0px 24px 48px -12px rgba(139, 26, 26, 0.10)",
      },
      fontSize: {
        md: ["1.125rem", { lineHeight: "1.5" }],
        "10xl": ["3.5rem", { lineHeight: "1.2" }],
      },
      spacing: {
        18: "4.5rem",
      },
      minHeight: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
