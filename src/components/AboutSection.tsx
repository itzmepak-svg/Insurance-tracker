import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai",
  "NAAC Accredited A-grade Institution",
  "Over 1,200 beds across general and specialty wards",
  "24×7 Emergency & Trauma Care Centre",
  "Advanced Diagnostic & Imaging Centre",
  "Free treatment for economically weaker sections under government schemes",
  "Super-specialty services in Cardiology, Neurology, Oncology & more",
  "Academic hub with MD, MS, DM and MCh postgraduate programmes",
];

export function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Visual side */}
          <div className="relative">
            {/* Main card */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.28_0.09_255)] to-[oklch(0.20_0.09_255)] aspect-[4/3] shadow-2xl">
              {/* Decorative hospital illustration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="relative">
                  {/* Cross symbol */}
                  <div className="w-40 h-40 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-14 -translate-y-1/2 bg-white rounded-md" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-14 -translate-x-1/2 bg-white rounded-md" />
                  </div>
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white">
                  <div className="text-4xl font-bold font-[family-name:var(--font-poppins)]">
                    58+
                  </div>
                  <div className="text-white/80 text-sm">Years of Healing</div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/5" />
              <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-white/5" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white rounded-xl shadow-xl border border-gray-100 px-5 py-4">
              <div className="text-2xl font-bold text-[oklch(0.28_0.09_255)] font-[family-name:var(--font-poppins)]">
                1,200+
              </div>
              <div className="text-xs text-gray-500 mt-0.5">Total Beds</div>
            </div>

            {/* Floating stat card 2 */}
            <div className="absolute -top-4 -left-2 md:-left-6 bg-[oklch(0.68_0.19_46)] rounded-xl shadow-xl px-5 py-4">
              <div className="text-2xl font-bold text-white font-[family-name:var(--font-poppins)]">
                35+
              </div>
              <div className="text-xs text-white/80 mt-0.5">Departments</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            {/* Section label */}
            <div className="inline-flex items-center gap-2 text-[oklch(0.68_0.19_46)] font-semibold text-sm mb-3">
              <span className="w-8 h-0.5 bg-[oklch(0.68_0.19_46)]" />
              ABOUT US
            </div>

            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
              A Legacy of Care &amp; Excellence in Coimbatore
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Coimbatore Medical College &amp; Hospital (CMCH) was established in
              1966 under the Government of Tamil Nadu. Over five decades, it has
              grown into one of the most trusted tertiary-care public hospitals
              in South India, serving patients across Coimbatore and the
              Kongu region.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              The hospital provides comprehensive medical and surgical care
              across more than 35 specialties, supported by a dedicated team of
              consultants, resident doctors, nurses and paramedical staff. It is
              the only government teaching hospital in the Coimbatore district
              capable of offering super-specialty services.
            </p>

            {/* Highlights list */}
            <ul className="grid sm:grid-cols-1 gap-2.5">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[oklch(0.28_0.09_255)] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
