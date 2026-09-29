import Image from "next/image";
import { BUSINESS, WHATSAPP_URL } from "@/lib/constants";

const HIGHLIGHTS = [
  { strong: "15+", text: "Fleet Vehicles" },
  { strong: "Own Fleet", text: "Direct control & reliability" },
  { strong: "Attached Fleet", text: "Expanded capacity network" },
  { strong: "Pan-India", text: "Movement capability" },
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="bg-[#0b0d0f] py-24 px-6 md:px-16 lg:px-20"
      aria-labelledby="fleet-heading"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Image */}
        <div className="rounded overflow-hidden">
          <Image
            src="/assets/images/fleet-lineup.jpg"
            alt="Prajapati Road Lines fleet lineup — 15+ vehicles at Transport Nagar at sunrise"
            width={700}
            height={467}
            className="w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="block w-5 h-[2px] bg-[#b82025]/90" aria-hidden="true" />
            <span className="text-[#b82025]/90 text-[0.7rem] font-bold tracking-[0.18em] uppercase">
              Our Fleet
            </span>
          </div>

          <h2
            id="fleet-heading"
            className="font-extrabold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            OUR FLEET.<br />YOUR DELIVERY CONFIDENCE.
          </h2>

          <p className="text-[rgba(247,245,240,0.65)] leading-[1.75]"
            style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)" }}>
            With {BUSINESS.fleetSize} vehicles across our own fleet and attached
            vehicle network, {BUSINESS.name} can adapt transportation capacity
            to different cargo and destination requirements.
          </p>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-px bg-white/[0.07] border border-white/[0.07]">
            {HIGHLIGHTS.map((h) => (
              <div key={h.strong} className="bg-white/[0.03] px-5 py-5">
                <strong className="block text-[0.72rem] font-bold tracking-[0.1em]
                  uppercase text-[#b82025] mb-1">
                  {h.strong}
                </strong>
                <span className="text-[0.83rem] text-[rgba(247,245,240,0.58)]">{h.text}</span>
              </div>
            ))}
          </div>

          <a
            href="#quote"
            className="self-start inline-flex items-center gap-2 bg-[#b82025]
              hover:bg-[#8b1518] text-white px-7 py-3.5 rounded text-[0.8rem] font-bold
              tracking-[0.07em] uppercase transition-all duration-200 hover:-translate-y-px"
          >
            Get a Transport Quote
          </a>
        </div>
      </div>
    </section>
  );
}
