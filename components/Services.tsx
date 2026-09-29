import Image from "next/image";

const SERVICES = [
  {
    num: "01",
    title: "Full Truck Load",
    desc: "Dedicated transportation solutions for complete loads and long-distance movement across India.",
    img: "/assets/images/svc-ftl.jpg",
    alt: "Full truck load transportation on highway",
  },
  {
    num: "02",
    title: "General Goods Transportation",
    desc: "Reliable road transportation for a wide range of commercial and general cargo requirements.",
    img: "/assets/images/svc-general.jpg",
    alt: "General goods transportation at industrial facility",
  },
  {
    num: "03",
    title: "Industrial Transportation",
    desc: "Transportation support for industrial and business cargo requirements across destinations.",
    img: "/assets/images/svc-industrial.jpg",
    alt: "Loading cargo at warehouse with workers and forklift",
  },
  {
    num: "04",
    title: "Pan-India Transportation",
    desc: "Road transportation from Lucknow to destinations across India, leveraging our established route network.",
    img: "/assets/images/svc-panindia.jpg",
    alt: "Truck on Indian highway at sunset",
  },
  {
    num: "05",
    title: "Attached Vehicle Network",
    desc: "Additional transportation capacity through a trusted network of attached vehicles for varied requirements.",
    img: "/assets/images/svc-attached.jpg",
    alt: "Fleet of attached vehicles parked at facility",
  },
  {
    num: "06",
    title: "Customized Transport Solutions",
    desc: "Flexible transportation arrangements based on cargo type, destination and specific requirement.",
    img: "/assets/images/svc-custom.jpg",
    alt: "Truck docked at loading warehouse",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-20 bg-[#f0edea]">
      {/* Heading */}
      <div className="max-w-[1200px] mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-5 h-[2px] bg-[#b82025]" aria-hidden="true" />
          <span className="text-[#b82025] text-[0.7rem] font-bold tracking-[0.18em] uppercase">
            Our Services
          </span>
        </div>
        <h2
          className="font-extrabold leading-[1.1] tracking-tight text-[#0b0d0f]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          TRANSPORTATION BUILT<br />AROUND YOUR REQUIREMENT.
        </h2>
      </div>

      {/* Grid */}
      <div
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-px bg-black/[0.07] border border-black/[0.07]"
        role="list"
      >
        {SERVICES.map((svc) => (
          <article
            key={svc.num}
            className="bg-[#f7f5f0] overflow-hidden group cursor-default
              transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
              hover:relative hover:z-[1]"
            role="listitem"
          >
            {/* Image */}
            <div className="w-full aspect-[3/2] overflow-hidden">
              <Image
                src={svc.img}
                alt={svc.alt}
                width={500}
                height={333}
                className="w-full h-full object-cover transition-transform duration-500
                  group-hover:scale-[1.06]"
                loading="lazy"
              />
            </div>

            {/* Body */}
            <div className="p-6 pb-8">
              <div className="text-[0.65rem] font-bold tracking-[0.15em] text-[#b82025]
                uppercase mb-2">
                {svc.num}
              </div>
              <h3 className="text-[1.05rem] font-bold text-[#0b0d0f] mb-2">
                {svc.title}
              </h3>
              <p className="text-[0.86rem] text-[#666] leading-[1.65]">{svc.desc}</p>
              <div className="svc-arrow mt-4" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
