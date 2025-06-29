import React, { useState } from "react";
import {
  Wifi,
  Car,
  Utensils,
  Coffee,
  Users,
  Music,
  Camera,
  Zap,
  MapPin,
  Clock,
  Star,
  X,
  ChevronRight,
  Plug,
  Cable,
  Snowflake,
  Toilet,
  Music2,
  FileText,
  Video,
  Cigarette,
  Gamepad2,
  Presentation,
  Droplet,
  Accessibility,
  SprayCan,
  Baby,
  Moon,
  Lock,
  Box,
  Clipboard,
} from "lucide-react";

const CafeFacilitiesModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const facilities = [
    {
      icon: Wifi,
      label: "WiFi Gratis",
      description:
        "Internet cepat dengan bandwidth unlimited untuk kebutuhan kerja dan browsing",
      category: "connectivity",
      rating: 4.8,
      available: true,
    },
    {
      icon: Plug,
      label: "Stop Kontak",
      description:
        "Stop kontak tersedia di berbagai sudut ruangan untuk kemudahan mengisi daya perangkat.",
      category: "connectivity",
      rating: 4.8,
      available: true,
    },
    {
      icon: Cable,
      label: "Kabel Olor",
      description: "Kabel perpanjangan saat ini sedang tidak tersedia.",
      category: "connectivity",
      rating: 4.8,
      available: false,
    },
    {
      icon: Snowflake, // Ganti dengan ikon AC yang paling cocok dari lucide-react
      label: "AC",
      description:
        "Ruangan dilengkapi dengan pendingin udara (AC) untuk kenyamanan maksimal.",
      category: "comfort",
      rating: 4.9,
      available: true,
    },
    {
      icon: Toilet, // Gunakan ikon paling relevan dari lucide-react, misalnya 'Toilet', 'Droplet', atau 'ShowerHead' jika tersedia
      label: "Toilet Bersih",
      description:
        "Toilet bersih dan terawat tersedia di area strategis untuk kenyamanan penghuni.",
      category: "facility",
      rating: 4.7,
      available: true,
    },
    {
      icon: Music2, // Ikon 'Music2' dari lucide-react cocok untuk live music
      label: "Live Musik",
      description:
        "Nikmati live musik akustik di waktu-waktu tertentu meski tanpa jadwal tetap.",
      category: "entertainment",
      rating: 4.3,
      available: true,
    },
    {
      icon: Music, // Ikon 'Music' dari lucide-react cocok untuk pemutaran musik biasa
      label: "Playlist Musik",
      description:
        "Musik santai dari playlist pilihan diputar sepanjang hari untuk menemani suasana.",
      category: "entertainment",
      rating: 4.2,
      available: true,
    },
    {
      icon: Box, // Ikon 'FileText' dari lucide-react paling mendekati visual tisu
      label: "Tisu Tersedia",
      description:
        "Tisu disediakan di area umum seperti toilet dan ruang makan untuk kenyamanan bersama.",
      category: "facility",
      rating: 4.6,
      available: true,
    },
    {
      icon: Video, // Ikon 'Video' dari lucide-react dapat mewakili CCTV
      label: "CCTV 24 Jam",
      description:
        "Area diawasi dengan CCTV aktif 24 jam untuk meningkatkan keamanan pengunjung.",
      category: "security",
      rating: 4.8,
      available: true,
    },
    {
      icon: Cigarette, // Ikon 'Cigarette' dari lucide-react cocok untuk smoking area
      label: "Smoking Area",
      description:
        "Area khusus merokok tersedia di dalam ruangan lantai 2 agar tidak mengganggu kenyamanan pengunjung lain.",
      category: "facility",
      rating: 4.4,
      available: true,
    },
    {
      icon: Gamepad2, // Masih relevan karena ikon ini menggambarkan hiburan
      label: "Game Tongkrongan",
      description:
        "Tersedia permainan seperti kartu, UNO, catur, dan board games lainnya untuk seru-seruan bareng.",
      category: "entertainment",
      rating: 4.5,
      available: false,
    },
    {
      icon: Presentation, // Ikon 'Presentation' cocok untuk ruang rapat
      label: "Ruang Rapat",
      description:
        "Ruang khusus tersedia untuk keperluan rapat, diskusi kelompok, atau meeting pekerjaan dengan suasana nyaman.",
      category: "facility",
      rating: 4.6,
      available: false,
    },
    {
      icon: Camera, // Ikon 'Camera' dari lucide-react cocok untuk photobooth
      label: "Photobooth",
      description:
        "Spot photobooth estetik tersedia untuk mengabadikan momen seru bareng teman atau penghuni lainnya.",
      category: "entertainment",
      rating: 4.4,
      available: false,
    },
    {
      icon: Droplet, // Ikon 'Droplet' dari lucide-react paling mendekati fungsi wastafel
      label: "Wastafel",
      description:
        "Wastafel tersedia di area umum untuk cuci tangan dan menjaga kebersihan sebelum dan sesudah makan.",
      category: "facility",
      rating: 4.5,
      available: true,
    },
    {
      icon: Accessibility, // Ikon 'Accessibility' dari lucide-react cocok untuk jalur difabel
      label: "Akses Difabel",
      description:
        "Tersedia jalur khusus dan akses ramah difabel agar semua penghuni dapat beraktivitas dengan nyaman dan aman.",
      category: "facility",
      rating: 4.6,
      available: false,
    },
    {
      icon: SprayCan, // Ikon 'SprayCan' dari lucide-react paling cocok untuk mewakili parfum ruangan
      label: "Parfum Ruangan",
      description:
        "Aroma ruangan dijaga tetap segar dengan parfum ruangan yang rutin disemprotkan di area umum.",
      category: "facility",
      rating: 4.5,
      available: true,
    },
    {
      icon: Lock, // Ikon 'Lock' dari lucide-react merepresentasikan keamanan loker
      label: "Loker Penitipan",
      description:
        "Loker penitipan tersedia untuk menyimpan barang bawaan Anda dengan aman selama berkunjung.",
      category: "facility",
      rating: 4.6,
      available: false,
    },
    {
      icon: Baby, // Ikon 'Baby' dari lucide-react paling relevan untuk baby chair
      label: "Baby Chair",
      description:
        "Tersedia kursi bayi di area makan untuk kenyamanan keluarga yang membawa anak kecil.",
      category: "facility",
      rating: 4.4,
      available: true,
    },
    {
      icon: Moon, // Jika tidak tersedia, bisa pakai 'Home' atau 'TentTree' sebagai alternatif
      label: "Mushola",
      description:
        "Disediakan mushola yang bersih dan nyaman untuk memenuhi kebutuhan ibadah para penghuni.",
      category: "facility",
      rating: 4.7,
      available: true,
    },
    {
      icon: Car,
      label: "Parkir Luas",
      description:
        "Area parkir yang memadai untuk mobil dan motor dengan sistem keamanan 24 jam",
      category: "parking",
      rating: 4.5,
      available: true,
    },
    {
      icon: Zap,
      label: "Power Outlet",
      description:
        "Tersedia colokan listrik di setiap meja untuk charging laptop dan smartphone",
      category: "connectivity",
      rating: 4.3,
      available: true,
    },
  ];

  const categories = [
    { id: "all", label: "Semua Fasilitas", count: facilities.length },
    {
      id: "connectivity",
      label: "Konektivitas",
      count: facilities.filter((f) => f.category === "connectivity").length,
    },
    {
      id: "comfort",
      label: "Kenyamanan",
      count: facilities.filter((f) => f.category === "comfort").length,
    },
    {
      id: "facility",
      label: "Fasilitas Umum",
      count: facilities.filter((f) => f.category === "facility").length,
    },
    {
      id: "entertainment",
      label: "Hiburan",
      count: facilities.filter((f) => f.category === "entertainment").length,
    },
    {
      id: "security",
      label: "Keamanan",
      count: facilities.filter((f) => f.category === "security").length,
    },
    {
      id: "parking",
      label: "Parkir",
      count: facilities.filter((f) => f.category === "parking").length,
    },
  ];

  const filteredFacilities =
    selectedCategory === "all"
      ? facilities
      : facilities.filter((f) => f.category === selectedCategory);

  // const getRatingColor = (rating: any) => {
  //   if (rating >= 4.7) return "text-green-600 bg-green-50";
  //   if (rating >= 4.4) return "text-blue-600 bg-blue-50";
  //   return "text-yellow-600 bg-yellow-50";
  // };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Trigger Button */}
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Lihat Detail Fasilitas Cafe
        </button>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-b border-gray-100">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-6 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Fasilitas Lengkap Cafe
                </h3>
                <p className="text-gray-600">
                  Nikmati berbagai fasilitas premium untuk pengalaman terbaik
                  Anda
                </p>
              </div>
            </div>

            {/* Category Filter */}
            <div className="px-8 py-4 bg-gray-50 border-b border-gray-100">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-amber-600 text-white shadow-md"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Facilities Content */}
            <div className="px-8 py-6 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredFacilities.map((facility, index) => (
                  <div
                    key={index}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                      facility.available
                        ? "border-gray-200 hover:border-amber-300 bg-white"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    {/* Availability Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          facility.available
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {facility.available ? "Tersedia" : "Tidak Tersedia"}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          facility.available
                            ? "bg-gradient-to-br from-amber-100 to-orange-100"
                            : "bg-gray-100"
                        }`}
                      >
                        <facility.icon
                          className={`w-7 h-7 ${
                            facility.available
                              ? "text-amber-600"
                              : "text-gray-400"
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h4
                            className={`font-semibold text-lg ${
                              facility.available
                                ? "text-gray-900"
                                : "text-gray-500"
                            }`}
                          >
                            {facility.label}
                          </h4>

                          {/* Rating */}
                          {/* <div
                            className={`flex items-center gap-1 px-2 py-1 rounded-full ${getRatingColor(
                              facility.rating
                            )}`}
                          >
                            <Star className="w-3 h-3 fill-current" />
                            <span className="text-xs font-medium">
                              {facility.rating}
                            </span>
                          </div> */}
                        </div>

                        <p
                          className={`text-sm leading-relaxed ${
                            facility.available
                              ? "text-gray-600"
                              : "text-gray-400"
                          }`}
                        >
                          {facility.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Arrow */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ChevronRight className="w-4 h-4 text-amber-600" />
                    </div>
                  </div>
                ))}
              </div>

              {filteredFacilities.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">
                    Tidak ada fasilitas dalam kategori ini
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Jl. Raya Darmo No. 123, Surabaya</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Buka: 07:00 - 22:00 WIB</span>
                </div>
              </div> */}

              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Tutup Detail Fasilitas
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CafeFacilitiesModal;
