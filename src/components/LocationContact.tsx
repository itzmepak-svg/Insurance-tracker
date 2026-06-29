import { MapPin, Phone, Mail, Clock, Car, Bus, Train } from "lucide-react";

export function LocationContact() {
  return (
    <section id="contact" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 text-[oklch(0.68_0.19_46)] font-semibold text-sm mb-3">
            <span className="w-8 h-0.5 bg-[oklch(0.68_0.19_46)]" />
            CONTACT & LOCATION
            <span className="w-8 h-0.5 bg-[oklch(0.68_0.19_46)]" />
          </div>
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl md:text-3xl text-gray-900 mb-3">
            Find Us
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
            Centrally located on Avinashi Road, easily accessible by all modes
            of transport.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-10">
          {/* Contact details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[oklch(0.28_0.09_255)]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  Address
                </div>
                <address className="not-italic text-gray-600 text-sm leading-relaxed">
                  Coimbatore Medical College &amp; Hospital
                  <br />
                  Avinashi Road
                  <br />
                  Coimbatore – 641 018
                  <br />
                  Tamil Nadu, India
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[oklch(0.28_0.09_255)]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  Phone
                </div>
                <a
                  href="tel:04222301945"
                  className="text-gray-600 text-sm hover:text-[oklch(0.28_0.09_255)] block transition-colors"
                >
                  0422-2301945 (OPD)
                </a>
                <a
                  href="tel:04222302001"
                  className="text-gray-600 text-sm hover:text-[oklch(0.28_0.09_255)] block transition-colors"
                >
                  0422-2302001 (Admin)
                </a>
                <a
                  href="tel:18001208040"
                  className="text-[oklch(0.68_0.19_46)] text-sm font-semibold hover:text-[oklch(0.56_0.20_46)] block transition-colors mt-1"
                >
                  1800-120-8040 (Toll Free)
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[oklch(0.28_0.09_255)]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  Email
                </div>
                <a
                  href="mailto:dean.cmch@tn.gov.in"
                  className="text-gray-600 text-sm hover:text-[oklch(0.28_0.09_255)] transition-colors"
                >
                  dean.cmch@tn.gov.in
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[oklch(0.28_0.09_255)]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  OPD Hours
                </div>
                <div className="text-gray-600 text-sm space-y-0.5">
                  <div>Monday – Friday: 8:00 AM – 5:00 PM</div>
                  <div>Saturday: 8:00 AM – 1:00 PM</div>
                  <div className="text-green-600 font-medium">
                    Emergency: 24 × 7 × 365
                  </div>
                </div>
              </div>
            </div>

            {/* How to reach */}
            <div className="border-t border-gray-100 pt-5">
              <div className="font-semibold text-gray-900 text-sm mb-3">
                How to Reach
              </div>
              <div className="space-y-2.5">
                {[
                  {
                    Icon: Car,
                    label: "By Road",
                    info: "On NH-544 (Avinashi Road), 4 km from Coimbatore Railway Station",
                  },
                  {
                    Icon: Bus,
                    label: "By Bus",
                    info: "TNSTC buses: Routes 10, 11, 15, 18, 35 — stop at CMCH",
                  },
                  {
                    Icon: Train,
                    label: "By Train",
                    info: "Nearest: Coimbatore Junction (4 km), auto/cab readily available",
                  },
                ].map(({ Icon, label, info }) => (
                  <div key={label} className="flex gap-2.5">
                    <Icon className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-gray-700">
                        {label}:{" "}
                      </span>
                      <span className="text-xs text-gray-500">{info}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md h-full min-h-[400px] bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2659370905485!2d76.97348661462654!3d11.020378992149386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a5a8e80085%3A0x5d59d5c3a0e3a58c!2sCoimbatore%20Medical%20College%20%26%20Hospital!5e0!3m2!1sen!2sin!4v1719600000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CMCH Location Map"
              />
            </div>
            <div className="mt-3 flex gap-3">
              <a
                href="https://maps.google.com/?q=Coimbatore+Medical+College+Hospital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2.5 bg-[oklch(0.28_0.09_255)] hover:bg-[oklch(0.20_0.09_255)] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Open in Google Maps
              </a>
              <a
                href="https://maps.google.com/?q=Coimbatore+Medical+College+Hospital&dirflg=d"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2.5 border-2 border-[oklch(0.28_0.09_255)] text-[oklch(0.28_0.09_255)] hover:bg-[oklch(0.28_0.09_255)] hover:text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
