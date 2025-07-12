import { useState } from "react";
import { Card } from "./ui/card";
import {
  Car,
  Bike,
  MapPin,
  Shield,
  Clock,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";

const ParkingInfo = () => {
  const parkingFeatures = [
    {
      icon: Car,
      title: "Parkir Mobil",
      description: "Kapasitas 20+ mobil",
      detail: "Area parkir luas dengan pengamanan CCTV",
    },
    {
      icon: Bike,
      title: "Parkir Motor",
      description: "Kapasitas 50+ motor",
      detail: "Area terpisah dan tertutup atap",
    },
    {
      icon: Shield,
      title: "Keamanan 24/7",
      description: "CCTV & Security",
      detail: "Pengawasan ketat dan penjaga parkir",
    },
    {
      icon: Clock,
      title: "Parkir Fleksibel",
      description: "Tanpa tarif tetap",
      detail: "Parkir bersifat sukarela sesuai kenyamanan Anda",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751521121/fashbrew/IMG_6835_bccc9u.jpg",
      title: "Area Parkir Motor",
      location: "Area Parkir Motor",
    },
    {
      url: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751521122/fashbrew/IMG_6838_ic5rtt.jpg",
      title: "Area Parkir Mobil",
      location: "Area Parkir Mobil",
    },
    {
      url: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751521119/fashbrew/IMG_6839_l4lhlw.jpg",
      title: "Area Parkir Mobil",
      location: "Area Parkir Mobil",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Area Parkir
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Parkir luas, aman, dan gratis untuk kenyamanan kunjungan Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Parking Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              {/* Main Image */}
              <div className="relative">
                <Image
                  src={images[currentIndex].url}
                  alt={images[currentIndex].title}
                  className="w-full h-80 object-cover transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Location Info */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium font-inter">
                      {images[currentIndex].location}
                    </span>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {images.map((image: any, index: any) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-blue-500 scale-105"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Parking Details */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="font-semibold text-2xl text-gray-900 font-inter mb-4">
                Fasilitas Parkir
              </h3>
              <p className="text-gray-700 font-inter leading-relaxed mb-6">
                Kami menyediakan area parkir yang luas dan aman untuk kenyamanan
                pengunjung. Terletak strategis di depan cafe dengan akses mudah.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {parkingFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="p-4 border-cafe-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-cafe-100 p-2 rounded-full">
                      <feature.icon className="w-5 h-5 text-cafe-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 font-inter mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-cafe-600 font-medium mb-1">
                        {feature.description}
                      </p>
                      <p className="text-xs text-gray-600 font-inter">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Parking Tips */}
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-medium text-gray-900 font-inter mb-2">
                    Tips Parkir
                  </h4>
                  <ul className="text-sm text-gray-700 font-inter space-y-1">
                    {/* <li>
                      • Datang lebih pagi di weekend untuk tempat parkir terbaik
                    </li> */}
                    <li>• Area parkir motor ada di depan bangunan</li>
                    <li>• Parkir mobil tersedia di samping cafe</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingInfo;
