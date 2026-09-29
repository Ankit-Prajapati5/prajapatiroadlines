import { BUSINESS, WHATSAPP_URL } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b0d0f] py-24 px-6 md:px-16 lg:px-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Map / Location card */}
        <div
          className="w-full aspect-[4/3] rounded border border-white/[0.08]
            bg-[rgba(20,22,25,1)] flex flex-col items-center justify-center
            gap-5 text-center p-8"
          aria-label="Business location"
        >
          <svg
            className="w-10 h-10 text-[#b82025]"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <p className="text-[rgba(247,245,240,0.62)] text-[0.85rem] leading-[1.7]">
            Transport Nagar, Shaheedpath Road,<br />
            Lucknow, Uttar Pradesh 226010
          </p>
          <a
            href={BUSINESS.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#b82025] hover:bg-[#8b1518]
              text-white px-5 py-2.5 rounded text-[0.8rem] font-bold tracking-[0.06em]
              uppercase transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View on Google Maps
          </a>
          <p className="text-[rgba(247,245,240,0.25)] text-[0.7rem]">
            Add Google Business Profile embed here after listing creation
          </p>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="block w-5 h-[2px] bg-[#b82025]/90" aria-hidden="true" />
            <span className="text-[#b82025]/90 text-[0.7rem] font-bold tracking-[0.18em] uppercase">
              Contact Us
            </span>
          </div>

          <h2
            className="font-extrabold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            LET&apos;S MOVE<br />YOUR CARGO.
          </h2>

          {/* Address */}
          <div className="pb-6 border-b border-white/[0.07]">
            <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#b82025] mb-2">
              Address
            </div>
            <address className="not-italic text-[0.93rem] text-white leading-[1.75]">
              <strong className="font-bold block text-[1rem]">{BUSINESS.name}</strong>
              {BUSINESS.address.street},<br />
              {BUSINESS.address.city}, {BUSINESS.address.state} —{" "}
              {BUSINESS.address.pincode}
            </address>
          </div>

          {/* Phone */}
          <div className="pb-6 border-b border-white/[0.07]">
            <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#b82025] mb-2">
              Phone / WhatsApp
            </div>
            <a
              href={BUSINESS.phoneTel}
              className="text-white text-[1.05rem] font-medium hover:text-[#e8e6e1]
                transition-colors duration-200"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* Coverage */}
          <div>
            <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#b82025] mb-2">
              Coverage
            </div>
            <div className="text-white text-[0.93rem]">{BUSINESS.coverage}</div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap mt-2">
            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center gap-2 bg-[#b82025] hover:bg-[#8b1518]
                text-white px-7 py-3.5 rounded text-[0.8rem] font-bold tracking-[0.07em]
                uppercase transition-all duration-200 hover:-translate-y-px"
            >
              Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/40
                hover:border-white hover:bg-white/10 text-white px-7 py-3.5 rounded
                text-[0.8rem] font-bold tracking-[0.07em] uppercase
                transition-all duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
