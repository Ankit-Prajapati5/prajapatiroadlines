import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export default function Network() {
  return (
    <section id="network" className="relative" aria-labelledby="network-heading">
      <div className="relative">
        <Image
          src="/assets/images/india-network.jpg"
          alt="India road transportation network — Prajapati Road Lines serves all of India from Lucknow"
          width={1920}
          height={700}
          className="w-full object-cover max-h-[650px]"
          loading="lazy"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 flex items-center
            px-6 md:px-16 lg:px-20"
          style={{
            background:
              "linear-gradient(to right, rgba(11,13,15,0.82) 0%, rgba(11,13,15,0.55) 55%, rgba(11,13,15,0.15) 100%)",
          }}
        >
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-5 h-[2px] bg-[#b82025]/90" aria-hidden="true" />
              <span className="text-[#b82025]/90 text-[0.7rem] font-bold tracking-[0.18em] uppercase">
                Pan-India Network
              </span>
            </div>

            <h2
              id="network-heading"
              className="font-extrabold leading-[1.1] tracking-tight text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              FROM LUCKNOW<br />TO ACROSS INDIA.
            </h2>

            <p className="text-[rgba(247,245,240,0.68)] leading-[1.75] mb-6"
              style={{ fontSize: "clamp(0.92rem, 1.3vw, 1.02rem)" }}>
              Strategically based in Lucknow&apos;s Transport Nagar,{" "}
              {BUSINESS.name} provides road transportation connectivity to
              destinations across India.
            </p>

            {/* Address card */}
            <address
              className="not-italic pl-4 py-4 pr-5
                bg-white/[0.07] border-l-[3px] border-[#b82025] rounded-r
                text-[0.86rem] leading-[1.9] text-[rgba(247,245,240,0.72)]"
            >
              <strong className="text-white font-bold block text-[0.88rem]">
                TRANSPORT NAGAR
              </strong>
              Shaheedpath Road,<br />
              {BUSINESS.address.city}, {BUSINESS.address.state} —{" "}
              {BUSINESS.address.pincode}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
