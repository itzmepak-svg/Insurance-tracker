import { Bed, Users, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "1966",
    label: "Established",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Bed,
    value: "1,200+",
    label: "Beds",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Users,
    value: "35+",
    label: "Departments",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Award,
    value: "58+",
    label: "Years of Excellence",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export function QuickStats() {
  return (
    <section className="bg-white py-8 md:py-10 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 md:gap-4"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-poppins)] font-bold text-xl md:text-2xl text-gray-900 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
