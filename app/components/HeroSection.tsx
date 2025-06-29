"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  MapPin,
  Clock,
  Star,
  Wifi,
  Users,
  BookOpen,
  Coffee,
  Camera,
  Heart,
} from "lucide-react";
import MenuGallery from "./MenuGallery";

interface HeroSectionProps {
  image: string;
  name_caffe: string;
  rekomendation: boolean;
  tagline: string;
  time_operational: string;
  onOpenMenuGallery?: () => void;
}

// Sample menu images - ganti dengan URL gambar menu kamu yang sebenarnya
const menuImages = [
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134406/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.09.46_tm2ili.png", // Coffee menu
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134404/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.10.11_btlkwx.png", // Food menu
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134399/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.10.19_zikaop.png", // Dessert menu
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134406/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.10.28_mwuhuh.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134410/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.10.38_etjsnl.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134417/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.10.47_ndmbto.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134419/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.10.55_y2rndo.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134410/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.11.02_kdj5gi.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134416/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.11.10_tbvjlw.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134424/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.11.18_ajinjd.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134422/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.11.26_gsu8ga.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134423/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.11.37_q1hgb2.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134398/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.11.46_hdnsbx.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134403/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.11.54_uhqufa.png",
  "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_1000/v1751134403/fashbrew/Menu%20Kattapa/Tangkapan_Layar_2025-06-29_pukul_01.12.02_cyjznr.png", // Beverage menu
];

const HeroSection = ({
  image,
  name_caffe,
  rekomendation,
  tagline,
  time_operational,
  onOpenMenuGallery,
}: HeroSectionProps) => {
  const [isMenuGalleryOpen, setIsMenuGalleryOpen] = useState(false);

  const handleOpenMenuGallery = () => {
    setIsMenuGalleryOpen(true);
    // Call the external handler if provided
    onOpenMenuGallery?.();
  };

  const handleCloseMenuGallery = () => {
    setIsMenuGalleryOpen(false);
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-cafe-50 to-cafe-100 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={name_caffe}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col justify-center min-h-screen">
          <div className="max-w-3xl animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              {rekomendation === true ? (
                <>
                  <span className="text-sm font-medium text-gray-800">
                    Favorit
                  </span>
                </>
              ) : (
                <></>
              )}
            </div>

            {/* Main Heading */}
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              {name_caffe}
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 text-white/90 mb-6">
              <MapPin className="w-5 h-5" />
              <span className="text-lg font-inter">Jember, Jawa Timur</span>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/95 font-inter font-light mb-8 max-w-2xl">
              {tagline}
            </p>

            {/* Cafe Categories */}
            <div className="mb-8">
              <h3 className="text-white/90 text-sm font-medium mb-3 font-inter">
                Cocok untuk:
              </h3>
              <div className="flex flex-wrap gap-3">
                {/* <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30">
                  <BookOpen className="w-4 h-4 text-blue-300" />
                  <span className="text-white text-sm font-medium">Nugas</span>
                </div> */}
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                  <Users className="w-4 h-4 text-green-300" />
                  <span className="text-white text-sm font-medium">
                    Nongkrong
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/30">
                  <Camera className="w-4 h-4 text-purple-300" />
                  <span className="text-white text-sm font-medium">
                    Foto-foto
                  </span>
                </div>
                {/* <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-400/30">
                  <Heart className="w-4 h-4 text-pink-300" />
                  <span className="text-white text-sm font-medium">Date</span>
                </div> */}
                <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30">
                  <Coffee className="w-4 h-4 text-amber-300" />
                  <span className="text-white text-sm font-medium">
                    Me Time
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white text-sm">
                  Buka {time_operational}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Wifi className="w-4 h-4 text-white" />
                <span className="text-white text-sm">Free WiFi</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white text-sm">💳 QRIS/E-wallet</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-cafe-600 hover:bg-cafe-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                <a
                  href="https://www.instagram.com/reel/DJTpXEFTV25/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat Review
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-all duration-300"
                onClick={handleOpenMenuGallery}
              >
                📔 Cek Menu
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-all duration-300"
              >
                <a
                  href="https://maps.app.goo.gl/CNf6bqi7YvM8A3CF7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📍 Lokasi
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-all duration-300"
              >
                <a
                  href="https://wa.me/6285179835825?text=Halo%20saya%20mau%20tanya%20terkait%20reservasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📩 Reservasi
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Menu Gallery Modal */}
      <MenuGallery
        isOpen={isMenuGalleryOpen}
        onClose={handleCloseMenuGallery}
        images={menuImages}
      />
    </>
  );
};

export default HeroSection;
