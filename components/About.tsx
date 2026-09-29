import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-20 bg-[#f7f5f0]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Image */}
        <div className="relative rounded overflow-hidden aspect-[4/3] group">
          <Image
            src="/assets/images/about-team.jpg"
            alt="Prajapati Road Lines team with fleet of trucks at Transport Nagar, Lucknow"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Experience badge */}
          <div className="absolute top-4 right-4 lg:-right-6 bg-[#b82025] text-white
            px-5 py-4 text-center shadow-[0_8px_32px_rgba(184,32,37,0.35)] z-10">
            <span className="block text-3xl font-extrabold leading-none">26+</span>
            <span className="block text-[0.62rem] tracking-[0.12em] uppercase opacity-85 mt-1">
              Years on<br />the Road
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="block w-5 h-[2px] bg-[#b82025]" aria-hidden="true" />
            <span className="text-[#b82025] text-[0.7rem] font-bold tracking-[0.18em] uppercase">
              About Us
            </span>
          </div>

          <h2 className="font-extrabold leading-[1.1] tracking-tight text-[#0b0d0f]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            26+ YEARS ON THE ROAD.<br />BUILT ON TRUST.
          </h2>

          <p className="text-[1.05rem] text-[#333] font-medium leading-[1.8]">
            Prajapati Road Lines is a Lucknow-based road transportation business
            with more than 26 years of experience in serving transportation
            requirements across India.
          </p>

          <p className="text-[0.97rem] text-[#555] leading-[1.8]">
            With our own trucks and a trusted network of attached vehicles, we
            provide flexible road transportation solutions for a wide range of
            general and commercial cargo requirements.
          </p>

          <p className="text-[0.97rem] text-[#555] leading-[1.8]">
            Based out of Transport Nagar on Shaheedpath Road, Lucknow — the heart
            of UP&apos;s logistics ecosystem — we have built our reputation one
            delivery at a time.
          </p>

          <a
            href="#quote"
            className="self-start mt-2 inline-flex items-center gap-2 bg-[#b82025]
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
