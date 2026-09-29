const REASONS = [
  {
    title: "26+ Years of Experience",
    desc: "A transportation business built through decades of road experience and reliable service across India.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Flexible Fleet",
    desc: "Own trucks combined with attached vehicles provide adaptable capacity for varying cargo requirements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Pan-India Reach",
    desc: "Transportation capability across destinations throughout India from our Lucknow base.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Practical Service",
    desc: "Transportation solutions designed around real business requirements, not generic packages.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "Established Trust",
    desc: "A long-running family business focused on dependable transportation service built over generations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-24 px-6 md:px-16 lg:px-20 bg-[#f0edea]">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-[2px] bg-[#b82025]" aria-hidden="true" />
            <span className="text-[#b82025] text-[0.7rem] font-bold tracking-[0.18em] uppercase">
              Why Choose Us
            </span>
          </div>
          <h2
            className="font-extrabold leading-[1.1] tracking-tight text-[#0b0d0f]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            WHY PRAJAPATI ROAD LINES?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="bg-white border border-black/[0.06] rounded p-6
                transition-all duration-200 hover:-translate-y-1
                hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)]"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(184,32,37,0.1)]
                flex items-center justify-center mb-4">
                <div className="w-5 h-5 text-[#b82025]">{r.icon}</div>
              </div>
              <h3 className="text-[0.95rem] font-bold text-[#0b0d0f] mb-2">{r.title}</h3>
              <p className="text-[0.83rem] text-[#666] leading-[1.65]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
