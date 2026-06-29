import { GraduationCap, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

const doctors = [
  {
    id: "1",
    name: "Dr. S. Natarajan",
    designation: "Professor & Head",
    department: "General Medicine",
    qualifications: "MD, MRCP (UK)",
    experience: "28 years",
    initials: "SN",
    color: "bg-blue-600",
  },
  {
    id: "2",
    name: "Dr. R. Kavitha",
    designation: "Professor & Head",
    department: "Obstetrics & Gynaecology",
    qualifications: "MS (OBG), DGO",
    experience: "24 years",
    initials: "RK",
    color: "bg-purple-600",
  },
  {
    id: "3",
    name: "Dr. P. Murugesan",
    designation: "Associate Professor",
    department: "Cardiology",
    qualifications: "MD, DM (Cardiology)",
    experience: "18 years",
    initials: "PM",
    color: "bg-red-600",
  },
  {
    id: "4",
    name: "Dr. V. Subramanian",
    designation: "Professor & Head",
    department: "Orthopaedics",
    qualifications: "MS (Ortho), DNB",
    experience: "22 years",
    initials: "VS",
    color: "bg-green-600",
  },
  {
    id: "5",
    name: "Dr. M. Padmavathi",
    designation: "Professor",
    department: "Paediatrics",
    qualifications: "MD (Paed), DCH",
    experience: "20 years",
    initials: "MP",
    color: "bg-teal-600",
  },
  {
    id: "6",
    name: "Dr. K. Rajan",
    designation: "Professor & Head",
    department: "Neurology",
    qualifications: "MD, DM (Neurology)",
    experience: "25 years",
    initials: "KR",
    color: "bg-indigo-600",
  },
];

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 text-[oklch(0.68_0.19_46)] font-semibold text-sm mb-3">
            <span className="w-8 h-0.5 bg-[oklch(0.68_0.19_46)]" />
            OUR TEAM
            <span className="w-8 h-0.5 bg-[oklch(0.68_0.19_46)]" />
          </div>
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl md:text-3xl text-gray-900 mb-3">
            Meet Our Senior Consultants
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Our faculty and senior consultants bring decades of clinical
            expertise combined with cutting-edge research and teaching.
          </p>
        </div>

        {/* Doctors grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group flex gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-[oklch(0.28_0.09_255)]/20 hover:shadow-lg transition-all duration-200"
            >
              {/* Avatar */}
              <div
                className={cn(
                  "flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg",
                  doctor.color
                )}
              >
                {doctor.initials}
              </div>

              {/* Info */}
              <div className="min-w-0">
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-gray-900 text-sm leading-tight mb-0.5">
                  {doctor.name}
                </h3>
                <p className="text-[oklch(0.28_0.09_255)] text-xs font-medium mb-1">
                  {doctor.designation}
                </p>
                <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                  <Stethoscope className="w-3 h-3 flex-shrink-0" />
                  <span>{doctor.department}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                  <GraduationCap className="w-3 h-3 flex-shrink-0" />
                  <span>{doctor.qualifications}</span>
                </div>
                <span className="inline-block text-[10px] px-2 py-0.5 bg-blue-50 text-[oklch(0.28_0.09_255)] rounded-full font-medium">
                  {doctor.experience} experience
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-8">
          <a
            href="#all-doctors"
            className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[oklch(0.28_0.09_255)] text-[oklch(0.28_0.09_255)] hover:bg-[oklch(0.28_0.09_255)] hover:text-white font-semibold rounded-md transition-colors text-sm"
          >
            View All Doctors
          </a>
        </div>
      </div>
    </section>
  );
}
