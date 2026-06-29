import { ChevronRight, MapPin } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.28_0.09_255)] min-h-[420px] md:min-h-[500px] flex items-end">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.20_0.09_255)]/95 via-[oklch(0.28_0.09_255)]/80 to-transparent z-10" />

      {/* Background image placeholder — hospital building */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(135deg, oklch(0.20 0.09 255) 0%, oklch(0.32 0.08 240) 50%, oklch(0.40 0.06 220) 100%)",
        }}
        aria-hidden="true"
      >
        {/* Decorative geometric elements representing hospital structure */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <div className="absolute top-8 right-8 w-64 h-64 border-2 border-white rounded-full" />
          <div className="absolute top-16 right-16 w-48 h-48 border border-white/60 rounded-full" />
          <div className="absolute bottom-8 right-4 w-80 h-80 border border-white/30 rounded-full" />
        </div>
        {/* Red cross medical symbol */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2 opacity-[0.07]">
          <div className="relative w-48 h-48">
            <div className="absolute top-1/2 left-0 right-0 h-16 -translate-y-1/2 bg-white rounded-sm" />
            <div className="absolute left-1/2 top-0 bottom-0 w-16 -translate-x-1/2 bg-white rounded-sm" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-12 pt-24 md:pb-16 md:pt-28">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-white/60 text-sm mb-6">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href="/our-locations" className="hover:text-white transition-colors">
            Our Locations
          </a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white">Coimbatore</span>
        </nav>

        {/* Hospital badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Government Medical Institution · Est. 1966
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-poppins)] text-3xl md:text-5xl font-bold text-white leading-tight mb-3 max-w-2xl">
          Coimbatore Medical
          <br />
          College &amp; Hospital
        </h1>

        <div className="flex items-start gap-2 text-white/80 text-sm md:text-base mb-8 max-w-xl">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-300" />
          <span>
            Avinashi Road, Coimbatore – 641 018, Tamil Nadu, India
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.68_0.19_46)] hover:bg-[oklch(0.56_0.20_46)] text-white font-semibold rounded-md transition-colors shadow-md text-sm"
          >
            Book Appointment
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-md transition-colors text-sm backdrop-blur-sm"
          >
            Get Directions
          </a>
          <a
            href="tel:04222301945"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold rounded-md transition-colors text-sm"
          >
            Call Us
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 10C480 20 240 0 0 10V40Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
