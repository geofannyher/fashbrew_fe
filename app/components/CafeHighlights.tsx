import { useState } from "react";
import { Card } from "./ui/card";
import { MapPin, Clock, Wifi, Zap, Car, CreditCard } from "lucide-react";
import CafeFacilitiesModal from "./FasilitasModal";

const CafeHighlights = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const facilities = [
    { icon: Wifi, label: "Free WiFi", description: "High-speed internet" },
    { icon: Zap, label: "Power Outlets", description: "Di beberapa meja" },
    { icon: Car, label: "Parking", description: "Parkir mudah & aman" },
    { icon: CreditCard, label: "Cashless", description: "QRIS" },
  ];

  return (
    <section className="py-20 from-cafe-50 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751117008/fashbrew/IMG_6811_hzqgew.jpg"
                alt="Interior aesthetic"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <img
                src="https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751116766/fashbrew/Hilight_Kattapa_ri8l2b.jpg"
                alt="Coffee and pastries"
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <img
              src="https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751116772/fashbrew/Hilight_Kattapa_2_e3yszj.jpg"
              alt="Outdoor seating"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Highlight Cafe
              </h2>
              <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                Kattapa hadir sebagai ruang kopi dan produktivitas yang nyaman
                di tengah kota, dengan konsep hangat dan homey. Sejak pertama
                kali dibuka, Kattapa telah menjadi pilihan favorit para
                mahasiswa, freelancer, dan pekerja kreatif untuk bekerja,
                berdiskusi, atau sekadar menikmati waktu santai. Dikenal dengan
                atmosfernya yang tenang dan pelayanan yang ramah, Kattapa juga
                menjadi tempat ideal untuk menciptakan ide-ide baru sambil
                menyeruput kopi andalan.
              </p>
            </div>

            {/* Key Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 border-cafe-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-cafe-600" />
                  <span className="font-semibold text-gray-900 font-inter">
                    Lokasi
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-inter">
                  Lingkungan Krajan Timur
                  <br />
                  Sumbersari, Jember
                </p>
              </Card>

              <Card className="p-4 border-cafe-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-cafe-600" />
                  <span className="font-semibold text-gray-900 font-inter">
                    Jam Operasional
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-inter">
                  Senin - Minggu
                  <br />
                  10:00 - 23:00 WIB
                </p>
              </Card>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="font-semibold text-xl text-gray-900 font-inter mb-4">
                Fasilitas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cafe-100 rounded-full flex items-center justify-center">
                      <facility.icon className="w-5 h-5 text-cafe-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 font-inter text-sm">
                        {facility.label}
                      </div>
                      <div className="text-xs text-gray-600 font-inter">
                        {facility.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Tombol Detail */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 inline-block text-sm text-cafe-600 hover:text-cafe-800 underline"
              >
                Lihat Semua Detail Fasilitas
              </button>
            </div>

            {/* Price Range & Peak Hours */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 font-inter mb-2">
                  Range Harga
                </h4>
                <p className="text-gray-700 font-inter">
                  Rp 15.000 - Rp 35.000
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 font-inter mb-2">
                  Waktu Ramai
                </h4>
                <p className="text-gray-700 font-inter">Malam Hari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        //   <div className="bg-white rounded-xl p-6 shadow-xl max-w-lg w-full relative">
        //     <button
        //       onClick={() => setIsModalOpen(false)}
        //       className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        //     >
        //       ×
        //     </button>

        //     <h3 className="text-xl font-semibold text-gray-900 font-inter mb-4">
        //       Detail Fasilitas Cafe
        //     </h3>

        //     <div className="space-y-4">
        //       {facilities.map((facility, index) => (
        //         <div key={index} className="flex items-start gap-3">
        //           <div className="w-10 h-10 bg-cafe-100 rounded-full flex items-center justify-center mt-1">
        //             <facility.icon className="w-5 h-5 text-cafe-600" />
        //           </div>
        //           <div>
        //             <div className="font-medium text-gray-900 font-inter">
        //               {facility.label}
        //             </div>
        //             <p className="text-sm text-gray-600 font-inter">
        //               {facility.description}
        //             </p>
        //           </div>
        //         </div>
        //       ))}
        //     </div>
        //   </div>
        // </div>
        <CafeFacilitiesModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </section>
  );
};

export default CafeHighlights;
