import { AlertCircle, Phone } from "lucide-react";

export function EmergencyBanner() {
  return (
    <div className="bg-red-600 py-3">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white text-sm">
        <div className="flex items-center gap-2 font-semibold">
          <AlertCircle className="w-4 h-4 animate-pulse flex-shrink-0" />
          <span>24×7 Emergency &amp; Trauma Care</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-white/30" />
        <a
          href="tel:04222302232"
          className="flex items-center gap-1.5 font-bold hover:text-red-200 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Emergency: 0422-2302232
        </a>
        <div className="hidden sm:block w-px h-4 bg-white/30" />
        <a
          href="tel:108"
          className="flex items-center gap-1.5 font-bold hover:text-red-200 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Ambulance: 108
        </a>
      </div>
    </div>
  );
}
