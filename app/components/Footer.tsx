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
              Senja Coffee
            </h3>
            <p className="text-gray-300 font-inter leading-relaxed mb-6">
              Cafe instagramable terpopuler di Jember. Tempat favorit para
              influencer untuk nongkrong, kerja, dan menciptakan konten
              aesthetic.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-cafe-400 text-cafe-400 hover:bg-cafe-400 hover:text-white"
                onClick={() =>
                  window.open("https://instagram.com/senjacoffee", "_blank")
                }
              >
                <Instagram className="w-4 h-4 mr-2" />
                Follow @senjacoffee
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
                    Jl. Gajah Mada No. 123
                    <br />
                    Sumbersari, Jember 68121
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cafe-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-inter text-sm">
                    Senin - Minggu
                    <br />
                    08:00 - 22:00 WIB
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-cafe-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-inter text-sm">
                    Rating 4.8/5 ⭐<br />
                    2,500+ Google Reviews
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
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start p-0 h-auto font-inter"
                >
                  📍 Lihat di Google Maps
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start p-0 h-auto font-inter"
                >
                  📱 Order via WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start p-0 h-auto font-inter"
                >
                  📖 Menu Lengkap
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start p-0 h-auto font-inter"
                >
                  ⭐ Lihat Review Lainnya
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-inter text-sm">
              © 2024 Senja Coffee. All rights reserved. Made with ❤️ in Jember.
            </p>
            <div className="flex items-center gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
