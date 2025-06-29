import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Navigation, Car, Clock } from "lucide-react";

const LocationSection = () => {
  const transportationTips = [
    {
      icon: Car,
      title: "Mobil/Motor",
      description: "Dari Alun-alun Jember: 10 menit ke arah JL.Jawa",
      time: "~10 menit",
    },
    {
      icon: Navigation,
      title: "Ojek Online",
      description: "Mudah dijangkau dengan Gojek/Grab",
      time: "Tersedia 24/7",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lokasi & Arah
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Temukan kami di jantung kota Jember dengan akses mudah dari berbagai
            arah
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* Google Maps Embed */}
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.390180423381!2d113.72612807603892!3d-8.163386381799286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695004d44ec7f%3A0xc4bb1933c4e6da3f!2sKattapa%20Coffee!5e0!3m2!1sid!2sid!4v1751182547148!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Senja Coffee Location"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                className="bg-cafe-600 hover:bg-cafe-700 text-white flex items-center gap-2"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/uQwXgENZuoSBUEjR6",
                    "_blank"
                  )
                }
              >
                <MapPin className="w-4 h-4" />
                Buka di Google Maps
              </Button>
              <Button
                variant="outline"
                className="border-cafe-300 text-cafe-700 hover:bg-cafe-50"
                onClick={() =>
                  window.open(
                    "https://www.waze.com/en/live-map/directions/id/jawa-timur/cuscuss-cafe-jember?place=ChIJ18ERPwCV1i0RGTNI3CpmN4U",
                    "_blank"
                  )
                }
              >
                Buka di Waze
              </Button>
            </div>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Address Card */}
            <Card className="p-6 border-cafe-200 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-cafe-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-cafe-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-gray-900 font-inter mb-2">
                    Alamat Lengkap
                  </h3>
                  <p className="text-gray-700 font-inter leading-relaxed">
                    Lingkungan Krajan Timur
                    <br />
                    Tegalgede, Kec. Sumbersari
                    <br />
                    Kabupaten Jember, Jawa Timur 68124
                  </p>
                </div>
              </div>
            </Card>

            {/* Operating Hours */}
            <Card className="p-6 border-cafe-200 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-cafe-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-cafe-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-gray-900 font-inter mb-3">
                    Jam Operasional
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-inter">
                        Senin - Minggu
                      </span>
                      <span className="font-medium text-gray-900 font-inter">
                        10:00 - 23:00
                      </span>
                    </div>
                    {/* <div className="flex justify-between">
                      <span className="text-gray-700 font-inter">
                        Sabtu - Minggu
                      </span>
                      <span className="font-medium text-gray-900 font-inter">
                        07:00 - 23:00
                      </span>
                    </div> */}
                  </div>
                  <p className="text-sm text-cafe-600 font-inter mt-3">
                    ⏰ Waktu ramai: 19:00 - 22:00 & Weekend
                  </p>
                </div>
              </div>
            </Card>

            {/* Transportation */}
            <div>
              <h3 className="font-semibold text-xl text-gray-900 font-inter mb-4">
                Transportasi
              </h3>
              <div className="space-y-4">
                {transportationTips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-cafe-50 rounded-lg"
                  >
                    <div className="bg-white p-2 rounded-full">
                      <tip.icon className="w-5 h-5 text-cafe-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 font-inter">
                        {tip.title}
                      </h4>
                      <p className="text-sm text-gray-600 font-inter">
                        {tip.description}
                      </p>
                      <span className="text-xs text-cafe-600 font-medium">
                        {tip.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking Info */}
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🅿️</span>
                <div>
                  <h4 className="font-medium text-gray-900 font-inter">
                    Parkir Tersedia
                  </h4>
                  <p className="text-sm text-gray-600 font-inter">
                    Area parkir luas untuk mobil dan motor. Gratis & aman.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
