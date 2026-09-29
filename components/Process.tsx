const STEPS = [
  {
    num: "01",
    title: "Share Your Requirement",
    desc: "Tell us your pickup location, destination, and cargo details. The more specific, the better we can help you.",
  },
  {
    num: "02",
    title: "Get a Transport Quote",
    desc: "We review your requirement and discuss the transportation arrangement that best fits your cargo and timeline.",
  },
  {
    num: "03",
    title: "Vehicle Allocation",
    desc: "A suitable vehicle is arranged from our own fleet or attached network based on cargo type and destination.",
  },
  {
    num: "04",
    title: "Cargo Movement",
    desc: "Your cargo begins its journey. Our experienced drivers and network ensure smooth movement toward the destination.",
  },
  {
    num: "05",
    title: "Delivery at Destination",
    desc: "Transportation is completed at the destination. Your cargo reaches where it needs to go.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#0b0d0f] py-24 px-6 md:px-16 lg:px-20">
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-[2px] bg-[#b82025]/90" aria-hidden="true" />
            <span className="text-[#b82025]/90 text-[0.7rem] font-bold tracking-[0.18em] uppercase">
              How It Works
            </span>
          </div>
          <h2
            className="font-extrabold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            FROM REQUIREMENT<br />TO DELIVERY.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative process-line" role="list">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`flex gap-8 md:gap-10 items-start py-7 relative
                ${i > 0 ? "border-t border-white/[0.05]" : ""}`}
              role="listitem"
            >
              {/* Step number circle */}
              <div
                className="flex-shrink-0 w-11 h-11 bg-[#b82025] rounded-full
                  flex items-center justify-center text-white text-[0.72rem]
                  font-extrabold tracking-[0.05em] relative z-[1]"
                aria-hidden="true"
              >
                {step.num}
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="text-white font-bold text-[1rem] mb-2">{step.title}</h3>
                <p className="text-[rgba(247,245,240,0.52)] text-[0.87rem] leading-[1.7] max-w-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
