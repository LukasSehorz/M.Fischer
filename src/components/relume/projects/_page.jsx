import React from "react";
import { Portfolio15 } from "./Portfolio15";
import { Stats20 } from "./Stats20";
import { Gallery22 } from "./Gallery22";
import { Testimonial6 } from "./Testimonial6";

export default function Page() {
  return (
    <div className="relative">
      {/* Hintergrundbild als fixed-positioned div — funktioniert auf iOS Safari */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/images/bild12.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Portfolio15 />
      <Stats20 />
      <Gallery22 />
      <Testimonial6 />
    </div>
  );
}
