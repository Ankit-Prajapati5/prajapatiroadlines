import { BUSINESS, WHATSAPP_URL } from "@/lib/constants";

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[98] lg:hidden
        bg-[#0b0d0f] border-t border-white/10
        flex gap-3 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      role="complementary"
      aria-label="Quick contact actions"
    >
      <a
        href={BUSINESS.phoneTel}
        className="flex-1 bg-[#b82025] text-white py-3 rounded text-center
          text-[0.8rem] font-bold tracking-[0.04em] uppercase"
        aria-label="Call us now"
      >
        📞 Call Now
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white py-3 rounded text-center
          text-[0.8rem] font-bold tracking-[0.04em] uppercase"
        aria-label="Message us on WhatsApp"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
