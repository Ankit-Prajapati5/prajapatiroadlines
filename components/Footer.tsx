import { BUSINESS, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

const SERVICES_LIST = [
  "Full Truck Load",
  "General Goods Transportation",
  "Industrial Transportation",
  "Pan-India Transportation",
  "Attached Vehicle Network",
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#060708] border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-20 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[3px]">
              <span className="text-white font-extrabold text-[1.1rem] tracking-tight leading-none">PRAJAPATI</span>
              <span className="text-white/40 text-[0.58rem] font-medium tracking-[0.22em] uppercase">Road Lines</span>
            </div>
            <p className="text-[0.84rem] text-[#9a9a9a] leading-[1.65] max-w-[220px]">
              Reliable road transportation from Lucknow to destinations across India since 1998.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#9a9a9a] mb-4">Navigation</div>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-[0.84rem] text-[rgba(247,245,240,0.45)] hover:text-[#f7f5f0] transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#9a9a9a] mb-4">Services</div>
            <div className="flex flex-col gap-2.5">
              {SERVICES_LIST.map((s) => (
                <span key={s} className="text-[0.82rem] text-[rgba(247,245,240,0.38)]">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#9a9a9a] mb-4">Contact</div>
            <div className="flex flex-col gap-3">
              <address className="not-italic text-[0.84rem] text-[rgba(247,245,240,0.45)] leading-[1.7]">
                Transport Nagar,<br />Shaheedpath Road,<br />Lucknow, UP — 226010
              </address>
              <a href={BUSINESS.phoneTel}
                className="text-[0.84rem] text-[rgba(247,245,240,0.55)] hover:text-white transition-colors duration-200">
                {BUSINESS.phoneDisplay}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="text-[0.84rem] text-[#25D366] hover:text-[#1EB85A] transition-colors duration-200">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row
          justify-between items-center gap-2">
          <p className="text-[0.73rem] text-[rgba(247,245,240,0.28)]">
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-[0.7rem] text-[rgba(247,245,240,0.18)]">
            Transport Nagar, Lucknow &middot; PAN India
          </p>
        </div>
      </div>
    </footer>
  );
}
