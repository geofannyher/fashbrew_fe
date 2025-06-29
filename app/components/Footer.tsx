import { Button } from "./ui/button";
import { Instagram, MapPin, Clock, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-3xl font-bold text-white mb-4">
              Kattapa Coffee
            </h3>
            <p className="text-gray-300 font-inter leading-relaxed mb-6">
              Cafe instagramable terpopuler di Jember. Tempat favorit rere untuk
              nongkrong, kerja, dan menciptakan konten aesthetic.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-cafe-400 text-cafe-400 hover:bg-cafe-400 hover:text-white"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/kattapacoffee",
                    "_blank"
                  )
                }
              >
                <Instagram className="w-4 h-4 mr-2" />
                Follow @kattapacoffee
              </Button>
            </div>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="font-semibold text-xl font-inter mb-6">
              Informasi Cepat
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cafe-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-inter text-sm">
                    Lingkungan Krajan Timur
                    <br />
                    Sumbersari, Jember 68124
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cafe-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-inter text-sm">
                    Senin - Minggu
                    <br />
                    10:00 - 23:00 WIB
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-cafe-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-inter text-sm">
                    Rating 4.7 ⭐<br />
                    650+ Google Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xl font-inter mb-6">
              Quick Links
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <a
                  href="https://maps.app.goo.gl/FQe3Enq8QFQ5Jz3s8" // Ganti dengan link lokasi sebenarnya
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start p-0 h-auto font-inter"
                  >
                    📍 Lihat di Google Maps
                  </Button>
                </a>

                {/* <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start p-0 h-auto font-inter"
                >
                  📱 Order via WhatsApp
                </Button> */}
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start p-0 h-auto font-inter"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  📖 Menu Lengkap
                </Button>

                <a
                  href="https://maps.app.goo.gl/FQe3Enq8QFQ5Jz3s8" // Ganti dengan link lokasi sebenarnya
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start p-0 h-auto font-inter"
                  >
                    ⭐ Lihat Review Lainnya
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-inter text-sm">
              © 2025 Kattapa Coffee. All rights reserved. Made with ❤️ in
              Jember. <br />
              Website by{" "}
              <a
                href="https://www.instagram.com/jumptech.studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-cafe-600 hover:underline font-medium"
              >
                Jumptech Studio
              </a>
              .
            </p>
            {/* <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white font-inter text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white font-inter text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white font-inter text-sm transition-colors"
              >
                Contact Us
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
