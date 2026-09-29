"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const TEAM = [
  {
    name: "Mr. Kapil Prajapati",
    role: "Assistant Manager",
    desc: "Handles day-to-day operations and coordinates vehicle dispatch with precision.",
    img: "/assets/images/team-assistant.jpg",
  },
  {
    name: "Mr. Ram Kishore Prajapati",
    role: "Founder & Managing Director",
    desc: "Built Prajapati Road Lines from the ground up over 26+ years. The backbone of every route we run.",
    img: "/assets/images/team-founder.jpg",
    isFounder: true,
  },
  {
    name: "Mr. Dharma Prajapati",
    role: "Operations Manager",
    desc: "Oversees fleet management and ensures every consignment reaches its destination safely.",
    img: "/assets/images/team-manager.jpg",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.from(sectionRef.current.querySelectorAll(".team-reveal-head"), {
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(sectionRef.current.querySelectorAll(".team-card"), {
        opacity: 0, y: 60, duration: 0.9, ease: "power3.out",
        stagger: 0.15, delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    })();
  }, []);

  return (
    <section ref={sectionRef} id="team" className="py-24 px-6 md:px-16 lg:px-20 bg-[#0b0d0f]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="team-reveal-head mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-[2px] bg-[#b82025]" aria-hidden="true" />
            <span className="text-[#b82025] text-[0.68rem] font-bold tracking-[0.2em] uppercase">
              Our Team
            </span>
          </div>
          <h2 className="font-extrabold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            THE PEOPLE BEHIND<br />EVERY DELIVERY.
          </h2>
        </div>

        {/* Cards — founder center, larger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className={`team-card group bg-[#13161a] border border-white/[0.06] overflow-hidden
                ${member.isFounder ? "md:-mt-8 border-[#b82025]/30" : ""}`}
            >
              {/* Photo */}
              <div className={`w-full overflow-hidden ${member.isFounder ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
                <Image
                  src={member.img}
                  alt={member.name}
                  width={500}
                  height={member.isFounder ? 667 : 625}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              {/* Info */}
              <div className={`p-6 ${member.isFounder ? "pb-8" : ""}`}>
                {member.isFounder && (
                  <div className="inline-flex items-center gap-2 bg-[#b82025]/10 border border-[#b82025]/30
                    px-3 py-1 rounded-sm mb-3">
                    <span className="block w-1.5 h-1.5 rounded-full bg-[#b82025]" />
                    <span className="text-[#b82025] text-[0.62rem] font-bold tracking-[0.12em] uppercase">Founder</span>
                  </div>
                )}
                <h3 className={`font-bold text-white mb-1 ${member.isFounder ? "text-[1.1rem]" : "text-[1rem]"}`}>
                  {member.name}
                </h3>
                <p className="text-[#b82025] text-[0.7rem] font-semibold tracking-[0.1em] uppercase mb-2.5">
                  {member.role}
                </p>
                <p className="text-[0.82rem] text-[rgba(247,245,240,0.45)] leading-[1.65]">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
