import { Card } from "./ui/card";
import { Car, Bike, MapPin, Shield, Clock } from "lucide-react";

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
      title: "Gratis",
      description: "Tanpa biaya parkir",
      detail: "Selama jam operasional cafe",
    },
  ];

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
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=800&q=80"
                alt="Area parkir Senja Coffee"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium font-inter">
                    Area Parkir Senja Coffee
                  </span>
                </div>
              </div>
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
                    <li>
                      • Datang lebih pagi di weekend untuk tempat parkir terbaik
                    </li>
                    <li>• Area parkir motor ada di sebelah kiri bangunan</li>
                    <li>• Parkir mobil tersedia di depan dan samping cafe</li>
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
