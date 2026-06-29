import {
  Ambulance,
  FlaskConical,
  Microscope,
  Heart,
  Brain,
  ShieldCheck,
  Building2,
  Pill,
} from "lucide-react";

const facilities = [
  {
    icon: Ambulance,
    name: "24×7 Emergency & Trauma",
    description:
      "Round-the-clock emergency care with dedicated trauma bays, resuscitation teams, and ICU support.",
  },
  {
    icon: FlaskConical,
    name: "Advanced Diagnostics",
    description:
      "Fully automated biochemistry, haematology, microbiology labs with NABL accreditation.",
  },
  {
    icon: Microscope,
    name: "Imaging Centre",
    description:
      "1.5T MRI, Multi-Detector CT, Digital X-ray, 4D Ultrasound, Mammography and Bone Densitometry.",
  },
  {
    icon: Heart,
    name: "Cardiac Care Unit",
    description:
      "12-bed Coronary Care Unit with telemetry, cath lab for angiography and angioplasty.",
  },
  {
    icon: Brain,
    name: "Neurosciences",
    description:
      "EEG, EMG, NCS, digital subtraction angiography and neuro-intervention suite.",
  },
  {
    icon: ShieldCheck,
    name: "Infection Control",
    description:
      "Dedicated isolation wards, CSSD, and hospital infection control committee ensuring safe care.",
  },
  {
    icon: Building2,
    name: "Operation Theatres",
    description:
      "12 modular OTs with laminar airflow, endoscopy suites, and laparoscopic surgical units.",
  },
  {
    icon: Pill,
    name: "In-house Pharmacy",
    description:
      "24-hour pharmacy with generic medicines under Tamil Nadu Medical Supplies Corporation.",
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-14 md:py-20 bg-[oklch(0.97_0_0)]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 text-[oklch(0.68_0.19_46)] font-semibold text-sm mb-3">
            <span className="w-8 h-0.5 bg-[oklch(0.68_0.19_46)]" />
            FACILITIES
            <span className="w-8 h-0.5 bg-[oklch(0.68_0.19_46)]" />
          </div>
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl md:text-3xl text-gray-900 mb-3">
            World-Class Infrastructure
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            State-of-the-art equipment and facilities ensuring the highest
            standard of diagnosis and treatment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.name}
                className="group p-5 md:p-6 rounded-xl bg-white border border-gray-100 hover:border-[oklch(0.28_0.09_255)]/20 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-lg bg-[oklch(0.28_0.09_255)]/10 flex items-center justify-center mb-4 group-hover:bg-[oklch(0.28_0.09_255)] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[oklch(0.28_0.09_255)] group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-gray-900 text-sm mb-2 leading-tight">
                  {facility.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
