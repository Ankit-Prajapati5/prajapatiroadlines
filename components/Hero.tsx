"use client";

import { useEffect, useRef } from "react";
import { BUSINESS, WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = () => { video.play().catch(() => {}); };
    if (video.readyState >= 2) play();
    else video.addEventListener("canplay", play, { once: true });
    return () => video.removeEventListener("canplay", play);
  }, []);

  // GSAP hero animations
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    (async () => {
      const { gsap } = await import("gsap");
      gsap.from(".hero-eyebrow", { opacity: 0, y: 20, duration: 0.8, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-company", { opacity: 0, y: 20, duration: 0.8, delay: 0.5, ease: "power3.out" });
      gsap.from(".hero-h1", { opacity: 0, y: 40, duration: 1, delay: 0.65, ease: "power3.out" });
      gsap.from(".hero-sub", { opacity: 0, y: 20, duration: 0.8, delay: 0.9, ease: "power3.out" });
      gsap.from(".hero-cta", { opacity: 0, y: 20, duration: 0.8, delay: 1.05, ease: "power3.out", stagger: 0.1 });
      gsap.from(".hero-scroll", { opacity: 0, duration: 1, delay: 1.5, ease: "power2.out" });
    })();
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-end overflow-hidden" aria-label="Hero">
      {/* Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline preload="auto"
          poster="/assets/images/hero-highway.jpg"
          aria-hidden="true"
          disablePictureInPicture
        >
          <source src="/assets/video/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/hero-highway.jpg')" }}
          aria-hidden="true" />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(105deg, rgba(11,13,15,0.95) 0%, rgba(11,13,15,0.75) 50%, rgba(11,13,15,0.25) 100%)" }}
        aria-hidden="true" />
      <div className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(to top, rgba(11,13,15,0.8) 0%, transparent 40%)" }}
        aria-hidden="true" />

      {/* Content */}
      <div className="relative z-[3] w-full px-6 md:px-16 lg:px-20 pb-24 lg:pb-32">
        <div className="max-w-3xl">
          <div className="hero-eyebrow flex items-center gap-3 mb-5">
            <span className="block w-8 h-[2px] bg-[#b82025]" aria-hidden="true" />
            <span className="text-[#b82025] text-[0.68rem] font-bold tracking-[0.2em] uppercase">
              {BUSINESS.experience} Years of Road Transportation
            </span>
          </div>

          <p className="hero-company text-white/50 font-bold uppercase tracking-[0.25em] mb-3"
            style={{ fontSize: "clamp(0.65rem, 1vw, 0.8rem)" }}>
            Prajapati Road Lines
          </p>

          <h1 className="hero-h1 text-white font-extrabold leading-[1.02] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)" }}>
            MOVING INDIA.<br />
            <span style={{
              background: "linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.55) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>DELIVERING TRUST.</span>
          </h1>

          <p className="hero-sub text-[rgba(247,245,240,0.65)] leading-[1.8] mb-10 max-w-xl"
            style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)" }}>
            Reliable road transportation from Lucknow to destinations across India —
            backed by our own fleet and a trusted network of attached vehicles.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#quote"
              className="hero-cta inline-flex items-center gap-2 bg-[#b82025] hover:bg-[#8b1518]
                text-white px-7 py-4 rounded-sm text-[0.78rem] font-bold tracking-[0.08em]
                uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(184,32,37,0.4)]">
              Get a Transport Quote
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="hero-cta inline-flex items-center gap-2.5 border border-[#25D366]/70
                hover:border-[#25D366] hover:bg-[#25D366]/10 text-white px-7 py-4 rounded-sm
                text-[0.78rem] font-bold tracking-[0.08em] uppercase transition-all duration-200">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a href={BUSINESS.phoneTel}
              className="hero-cta inline-flex items-center gap-2 border border-white/15
                hover:border-white/30 bg-white/5 hover:bg-white/10 text-[rgba(247,245,240,0.8)]
                px-6 py-4 rounded-sm text-[0.78rem] font-semibold tracking-[0.04em]
                uppercase transition-all duration-200">
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 right-8 md:right-16 z-[3] flex flex-col items-center gap-2"
        aria-hidden="true">
        <div className="w-px h-14 bg-white/15 relative overflow-hidden">
          <div className="scroll-line-inner absolute top-0 left-0 w-full h-full bg-[#b82025]" />
        </div>
        <span className="text-[0.55rem] tracking-[0.18em] uppercase text-white/30"
          style={{ writingMode: "vertical-rl" }}>Scroll</span>
      </div>
    </section>
  );
}
