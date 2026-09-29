"use client";

import { useState, useEffect, useCallback } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between
          px-6 md:px-12 lg:px-20 transition-all duration-300
          ${scrolled ? "bg-[#0b0d0f]/96 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]" : "bg-transparent"}`}
        aria-label="Main navigation"
      >
        {/* Brand text — no logo */}
        <a href="#home" className="flex flex-col justify-center gap-[2px]" aria-label="Prajapati Road Lines — Home">
          <span className="nav-brand-text">PRAJAPATI</span>
          <span className="nav-brand-sub">Road Lines</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[rgba(247,245,240,0.75)] hover:text-white text-[0.78rem]
                  font-semibold uppercase tracking-[0.08em] transition-colors duration-200
                  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0
                  after:w-0 after:h-[1px] after:bg-[#b82025] after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919839322072"
            className="text-[rgba(247,245,240,0.7)] hover:text-white text-[0.78rem] font-semibold
              tracking-[0.03em] transition-colors duration-200"
          >
            +91 98393 22072
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#b82025] hover:bg-[#8b1518]
              text-white px-5 py-2.5 rounded-sm text-[0.75rem] font-bold tracking-[0.06em]
              uppercase transition-all duration-200"
          >
            Get Quote
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[99] bg-[#0b0d0f] flex flex-col pt-24 px-8 pb-8
          transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        role="dialog" aria-modal="true" aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
            className={`text-white text-[1.6rem] font-bold py-4 border-b border-white/10
              last:border-none tracking-tight transition-all duration-300
              ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          >
            {link.label}
          </a>
        ))}
        <div className="flex gap-3 mt-8 flex-wrap">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="flex-1 min-w-[120px] bg-[#25D366] text-white py-3.5 px-5
              rounded-sm text-center text-[0.82rem] font-bold tracking-[0.05em] uppercase">
            WhatsApp Us
          </a>
          <a href="tel:+919839322072"
            className="flex-1 min-w-[120px] bg-[#b82025] text-white py-3.5 px-5
              rounded-sm text-center text-[0.82rem] font-bold tracking-[0.05em] uppercase">
            Call Now
          </a>
        </div>
      </div>
    </>
  );
}
