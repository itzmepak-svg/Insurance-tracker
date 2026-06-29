import { cn } from "@/lib/utils";

const specialties = [
  { name: "General Medicine", icon: "🩺", href: "#general-medicine" },
  { name: "General Surgery", icon: "🔬", href: "#surgery" },
  { name: "Cardiology", icon: "❤️", href: "#cardiology" },
  { name: "Neurology", icon: "🧠", href: "#neurology" },
  { name: "Orthopaedics", icon: "🦴", href: "#orthopaedics" },
  { name: "Obs & Gynaecology", icon: "🤱", href: "#obg" },
  { name: "Paediatrics", icon: "👶", href: "#paediatrics" },
  { name: "Oncology", icon: "🧬", href: "#oncology" },
  { name: "Dermatology", icon: "🩹", href: "#dermatology" },
  { name: "ENT", icon: "👂", href: "#ent" },
  { name: "Ophthalmology", icon: "👁️", href: "#ophthalmology" },
  { name: "Psychiatry", icon: "🧘", href: "#psychiatry" },
  { name: "Radiology", icon: "📡", href: "#radiology" },
  { name: "Anaesthesiology", icon: "💉", href: "#anaesthesia" },
  { name: "Nephrology", icon: "🫘", href: "#nephrology" },
  { name: "Pulmonology", icon: "🫁", href: "#pulmonology" },
  { name: "Gastroenterology", icon: "🏥", href: "#gastro" },
  { name: "Endocrinology", icon: "⚗️", href: "#endocrinology" },
  { name: "Rheumatology", icon: "🦾", href: "#rheumatology" },
  { name: "Emergency Medicine", icon: "🚨", href: "#emergency" },
];

export function Specialties() {
  return (
    <section
      id="specialties"
      className="py-14 md:py-20 bg-[oklch(0.97_0_0)]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 text-[oklch(0.68_0.19_46)] font-semibold text-sm mb-3">
            <span className="w-8 h-0.5 bg-[oklch(0.68_0.19_46)]" />
            SPECIALITIES
            <span className="w-8 h-0.5 bg-[oklch(0.68_0.19_46)]" />
          </div>
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl md:text-3xl text-gray-900 mb-3">
            Departments &amp; Specialities
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Comprehensive care across 35+ clinical departments staffed by
            experienced consultants and postgraduate trainees.
          </p>
        </div>

        {/* Specialties grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {specialties.map((spec) => (
            <a
              key={spec.name}
              href={spec.href}
              className={cn(
                "group flex flex-col items-center gap-3 p-4 md:p-5 rounded-xl",
                "bg-white border border-gray-100 hover:border-[oklch(0.28_0.09_255)]/30",
                "hover:shadow-md hover:-translate-y-0.5 transition-all duration-200",
                "text-center cursor-pointer"
              )}
            >
              <span className="text-3xl md:text-4xl leading-none select-none" aria-hidden="true">
                {spec.icon}
              </span>
              <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-[oklch(0.28_0.09_255)] transition-colors leading-tight">
                {spec.name}
              </span>
            </a>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-8">
          <a
            href="#all-specialties"
            className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[oklch(0.28_0.09_255)] text-[oklch(0.28_0.09_255)] hover:bg-[oklch(0.28_0.09_255)] hover:text-white font-semibold rounded-md transition-colors text-sm"
          >
            View All Departments
          </a>
        </div>
      </div>
    </section>
  );
}
