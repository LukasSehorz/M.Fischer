"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import React, { useState } from "react";

const HOUSE_PATH = "M6 20L24 6L42 20V42H30V30H18V42H6V20Z";

const navLinks = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über mich", href: "/ueber-uns" },
  { label: "Prozess", href: "/prozess" },
  { label: "Kontakt", href: "/kontakt" },
];

function DropdownLink({ link, active }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleChildClick(e, child) {
    setOpen(false);
    if (!child.href.includes("#")) return;
    e.preventDefault();
    const [path, hash] = child.href.split("#");
    const scrollToEl = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    if (pathname === path) {
      scrollToEl();
    } else {
      navigate(path);
      setTimeout(scrollToEl, 120);
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={link.href}
        className={clsx(
          "relative flex items-center gap-1 text-sm font-medium tracking-wide transition-all duration-200",
          active
            ? "text-[#8B1A1A] opacity-100"
            : "text-[#28282B] opacity-65 hover:opacity-100 hover:text-[#8B1A1A]"
        )}
      >
        {link.label}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="mt-[1px] opacity-60">
          <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {active && (
          <motion.span
            layoutId="nav-underline"
            className="absolute -bottom-[1.5px] left-0 right-0 h-px bg-[#8B1A1A]"
          />
        )}
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full pt-2 z-50"
          >
            <div className="min-w-[160px] border border-white/10 bg-[#000000] shadow-xlarge py-1">
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  onClick={(e) => handleChildClick(e, child)}
                  className="block px-5 py-3 text-sm font-medium text-white/70 transition-colors duration-150 hover:text-white hover:bg-white/5"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const { pathname } = useLocation();
  const toggle = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md relative">
      <div className="grid h-auto min-h-[4.5rem] grid-cols-[1fr_max-content_1fr] items-center px-[5%]">

        {/* Left: hamburger (mobile) or nav links (desktop) */}
        <div className="flex items-center">
          <button
            className="flex size-10 flex-col justify-center gap-[5px] lg:hidden text-[#28282B]"
            onClick={toggle}
            aria-label="Navigation öffnen"
          >
            <motion.span
              className="h-[1.5px] w-6 bg-[#28282B] origin-center block"
              animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            />
            <motion.span
              className="h-[1.5px] w-6 bg-[#28282B] block"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="h-[1.5px] w-6 bg-[#28282B] origin-center block"
              animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            />
          </button>

          <div className="hidden lg:flex items-center gap-x-8">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              if (link.children) {
                return (
                  <DropdownLink key={link.href} link={link} active={active} />
                );
              }
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={clsx(
                    "relative text-sm font-medium tracking-wide transition-all duration-200",
                    active
                      ? "text-[#8B1A1A] opacity-100"
                      : "text-[#28282B] opacity-65 hover:opacity-100 hover:text-[#8B1A1A]"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-[1.5px] left-0 right-0 h-px bg-[#8B1A1A]"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Center: logo */}
        <Link to="/" className="flex items-end justify-center self-stretch">
          <img
            src="/images/bild31.webp"
            alt="M. Fischer Maschinenbetrieb"
            style={{ height: 80, width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Right: phone CTA */}
        <div className="flex items-center justify-end gap-3">
          <a
            href="tel:+491754322110"
            className="hidden sm:inline-flex items-center gap-2 border border-[#28282B]/30 px-5 py-2 font-body text-sm font-medium tracking-wide text-[#28282B]/75 transition-colors duration-200 hover:border-[#8B1A1A] hover:text-[#8B1A1A]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
            </svg>
            0175 / 4322110
          </a>
        </div>
      </div>

      {/* Full-width black ground strip */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: 6, background: "#000000" }} />

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={toggle}
            />
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", duration: 0.45, bounce: 0 }}
              className={clsx(
                "fixed left-0 top-0 z-50 flex h-dvh w-[85%] max-w-sm flex-col",
                "bg-white border-r border-[#28282B]/10 shadow-xlarge px-8 pb-10"
              )}
            >
              <div className="flex items-center justify-between py-5 mb-8 border-b border-[#28282B]/10">
                <img
                  src="/images/bild31.webp"
                  alt="M. Fischer Maschinenbetrieb"
                  style={{ height: 36, width: "auto", objectFit: "contain" }}
                />
                <button onClick={toggle} className="size-8 flex items-center justify-center text-[#28282B]/50 text-2xl leading-none hover:text-[#28282B] transition-colors">
                  ×
                </button>
              </div>
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <React.Fragment key={link.href}>
                    <Link
                      to={link.href}
                      onClick={toggle}
                      className={clsx(
                        "py-4 text-base font-medium border-b border-[#28282B]/10 transition-all duration-200",
                        pathname === link.href
                          ? "text-[#8B1A1A] pl-2"
                          : "text-[#28282B]/65 hover:text-[#28282B] hover:pl-2"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={toggle}
                        className={clsx(
                          "py-3 pl-6 text-sm font-medium border-b border-[#28282B]/8 transition-all duration-200",
                          pathname === child.href
                            ? "text-[#8B1A1A]"
                            : "text-[#28282B]/45 hover:text-[#28282B]"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </React.Fragment>
                ))}
              </nav>
              <div className="mt-auto pt-8">
                <Link
                  to="/kontakt"
                  onClick={toggle}
                  className="flex w-full items-center justify-center bg-[#8B1A1A] px-6 py-3 text-sm font-semibold tracking-wide text-white hover:opacity-90 transition-opacity duration-200"
                >
                  Beratung anfragen
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
