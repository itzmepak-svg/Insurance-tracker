import { Phone, Mail, MapPin, Share2 } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "#about" },
    { label: "Specialities", href: "#specialties" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Facilities", href: "#facilities" },
    { label: "Contact Us", href: "#contact" },
    { label: "Book Appointment", href: "#appointment" },
  ],
  "Specialities": [
    { label: "Cardiology", href: "#cardiology" },
    { label: "Neurology", href: "#neurology" },
    { label: "Orthopaedics", href: "#orthopaedics" },
    { label: "Oncology", href: "#oncology" },
    { label: "Paediatrics", href: "#paediatrics" },
    { label: "Obs & Gynaecology", href: "#obg" },
  ],
  "Patient Services": [
    { label: "OPD Registration", href: "#opd" },
    { label: "Inpatient Services", href: "#inpatient" },
    { label: "Diagnostic Services", href: "#diagnostics" },
    { label: "Blood Bank", href: "#blood-bank" },
    { label: "Pharmacy", href: "#pharmacy" },
    { label: "Ayushman Bharat", href: "#govt-schemes" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.04_255)] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">CMCH</span>
              </div>
              <div>
                <div className="font-bold text-white text-base font-[family-name:var(--font-poppins)] leading-tight">
                  Coimbatore Medical
                </div>
                <div className="font-bold text-white text-base font-[family-name:var(--font-poppins)] leading-tight">
                  College &amp; Hospital
                </div>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              A premier government medical institution dedicated to providing
              compassionate, comprehensive healthcare to the people of Tamil
              Nadu since 1966.
            </p>

            {/* Contact mini */}
            <div className="space-y-2.5 mb-6">
              {[
                { Icon: MapPin, text: "Avinashi Road, Coimbatore – 641 018" },
                { Icon: Phone, text: "0422-2301945" },
                { Icon: Mail, text: "dean.cmch@tn.gov.in" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-sm text-white/60">
                  <Icon className="w-4 h-4 flex-shrink-0 mt-0.5 text-[oklch(0.68_0.19_46)]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { label: "FB", href: "#" },
                { label: "TW", href: "#" },
                { label: "YT", href: "#" },
                { label: "IG", href: "#" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[oklch(0.28_0.09_255)] flex items-center justify-center transition-colors text-[10px] font-bold text-white/70 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditation bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span className="px-2 py-1 rounded bg-white/10 text-white/70 font-medium text-[10px]">
              NAAC A Grade
            </span>
            <span className="px-2 py-1 rounded bg-white/10 text-white/70 font-medium text-[10px]">
              Affiliated: TNMGRMU
            </span>
            <span className="px-2 py-1 rounded bg-white/10 text-white/70 font-medium text-[10px]">
              Govt. of Tamil Nadu
            </span>
          </div>
          <p className="text-white/40 text-xs text-center sm:text-right">
            © {new Date().getFullYear()} Coimbatore Medical College &amp; Hospital.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
