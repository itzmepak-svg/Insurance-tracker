"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Overview", href: "#about" },
      { label: "Mission & Vision", href: "#mission" },
      { label: "Leadership", href: "#team" },
    ],
  },
  {
    label: "Specialities",
    href: "#specialties",
    children: [
      { label: "General Medicine", href: "#general-medicine" },
      { label: "Surgery", href: "#surgery" },
      { label: "Cardiology", href: "#cardiology" },
      { label: "Neurology", href: "#neurology" },
      { label: "Orthopaedics", href: "#orthopaedics" },
      { label: "Obstetrics & Gynaecology", href: "#obg" },
      { label: "Paediatrics", href: "#paediatrics" },
      { label: "Oncology", href: "#oncology" },
      { label: "View All", href: "#specialties" },
    ],
  },
  { label: "Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[oklch(0.20_0.09_255)] text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="text-white/80">
            Avinashi Road, Coimbatore – 641 018, Tamil Nadu
          </span>
          <div className="flex items-center gap-6">
            <a
              href="tel:04222301945"
              className="flex items-center gap-1.5 hover:text-orange-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              0422-2301945
            </a>
            <span className="text-white/40">|</span>
            <a
              href="tel:18001208040"
              className="flex items-center gap-1.5 text-orange-300 font-semibold hover:text-orange-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              1800-120-8040 (Toll Free)
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-white transition-shadow duration-300",
          isScrolled ? "shadow-lg" : "shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[oklch(0.28_0.09_255)] flex items-center justify-center shadow">
              <span className="text-white font-bold text-sm md:text-base leading-none">
                CMCH
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-[oklch(0.28_0.09_255)] text-sm md:text-base leading-tight font-[family-name:var(--font-poppins)]">
                Coimbatore Medical
              </div>
              <div className="font-bold text-[oklch(0.28_0.09_255)] text-sm md:text-base leading-tight font-[family-name:var(--font-poppins)]">
                College &amp; Hospital
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    "text-gray-700 hover:text-[oklch(0.28_0.09_255)] hover:bg-blue-50"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </a>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[oklch(0.28_0.09_255)] transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#appointment"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.68_0.19_46)] hover:bg-[oklch(0.56_0.20_46)] text-white text-sm font-semibold rounded-md transition-colors shadow-sm"
            >
              Book Appointment
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
            <div className="px-4 py-3 flex items-center gap-2 bg-[oklch(0.28_0.09_255)] text-white text-sm">
              <Phone className="w-4 h-4" />
              <a href="tel:04222301945">0422-2301945</a>
            </div>
            <nav className="px-4 py-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 hover:text-[oklch(0.28_0.09_255)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setMobileOpen(false)}
                className="mt-3 mb-2 block text-center px-4 py-2.5 bg-[oklch(0.68_0.19_46)] text-white font-semibold rounded-md text-sm"
              >
                Book Appointment
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
