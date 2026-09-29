"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  isText?: boolean;
}

const STATS: StatItem[] = [
  { value: "26+", numericTarget: 26, suffix: "+", label: "Years of Experience" },
  { value: "15+", numericTarget: 15, suffix: "+", label: "Fleet Vehicles" },
  { value: "PAN INDIA", label: "Transportation Coverage", isText: true },
  { value: "OWN + ATTACHED", label: "Fleet Network", isText: true },
];

function CounterStat({ stat }: { stat: StatItem }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!stat.numericTarget) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const target = stat.numericTarget!;
          const duration = 1600;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat.numericTarget]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-white font-extrabold leading-none tracking-tight"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}>
        {stat.numericTarget ? (
          <>
            <span>{count}</span>
            <span className="text-[#b82025]">{stat.suffix}</span>
          </>
        ) : (
          <span style={{ fontSize: "clamp(1rem, 1.8vw, 1.6rem)" }}>
            {stat.value}
          </span>
        )}
      </div>
      <div className="text-[#9a9a9a] text-[0.7rem] font-medium tracking-[0.1em] uppercase mt-2 text-center">
        {stat.label}
      </div>
    </div>
  );
}

export default function TrustStats() {
  return (
    <div
      className="bg-[#0b0d0f] py-12 md:py-14 px-6 md:px-16 lg:px-20"
      role="region"
      aria-label="Key statistics"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px
        bg-white/[0.07] border border-white/[0.07]">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="bg-[#0b0d0f] px-6 py-8 flex flex-col items-center text-center"
          >
            <CounterStat stat={stat} />
          </div>
        ))}
      </div>
    </div>
  );
}
