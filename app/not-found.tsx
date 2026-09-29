import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0d0f] flex flex-col items-center justify-center
      px-6 text-center gap-6">
      <div className="text-[#b82025] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
        404 — Page Not Found
      </div>
      <h1 className="text-white font-extrabold text-5xl tracking-tight">
        Off the Route.
      </h1>
      <p className="text-[rgba(247,245,240,0.55)] text-[0.97rem] max-w-sm leading-[1.7]">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back on the road.
      </p>
      <a
        href="/"
        className="mt-2 inline-flex items-center gap-2 bg-[#b82025] hover:bg-[#8b1518]
          text-white px-7 py-3.5 rounded text-[0.8rem] font-bold tracking-[0.07em]
          uppercase transition-colors duration-200"
      >
        Back to Home
      </a>
    </div>
  );
}
