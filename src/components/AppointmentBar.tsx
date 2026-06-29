"use client";

import { Phone, CalendarCheck } from "lucide-react";

export function AppointmentBar() {
  return (
    <section
      id="appointment"
      className="bg-[oklch(0.68_0.19_46)] py-6 md:py-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          {/* Left text */}
          <div className="text-center md:text-left">
            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-white text-xl md:text-2xl leading-tight">
              Book Your Appointment
            </h2>
            <p className="text-white/80 text-sm mt-1">
              OPD Hours: Mon – Sat, 8:00 AM – 1:00 PM &amp; 2:00 PM – 5:00 PM
            </p>
          </div>

          {/* Form */}
          <form
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <select
              className="px-4 py-2.5 rounded-md text-sm text-gray-700 bg-white border-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[180px]"
              defaultValue=""
            >
              <option value="" disabled>
                Select Department
              </option>
              <option>General Medicine</option>
              <option>Surgery</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopaedics</option>
              <option>Obstetrics & Gynaecology</option>
              <option>Paediatrics</option>
              <option>Oncology</option>
              <option>Dermatology</option>
              <option>ENT</option>
              <option>Ophthalmology</option>
              <option>Psychiatry</option>
            </select>
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2.5 rounded-md text-sm text-gray-700 bg-white border-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-2.5 rounded-md text-sm text-gray-700 bg-white border-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[oklch(0.28_0.09_255)] hover:bg-[oklch(0.20_0.09_255)] text-white font-semibold rounded-md transition-colors shadow-sm text-sm flex-shrink-0"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Now
            </button>
          </form>

          {/* Phone CTA */}
          <a
            href="tel:04222301945"
            className="flex items-center gap-2.5 bg-white/20 hover:bg-white/30 border border-white/30 text-white px-5 py-2.5 rounded-md transition-colors flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            <div className="text-left">
              <div className="text-[10px] text-white/70 leading-none mb-0.5">
                Call OPD
              </div>
              <div className="font-bold text-sm leading-none">0422-2301945</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
