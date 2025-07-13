import Image from "next/image";
import { Card } from "./ui/card";
import { Laptop, Users, Coffee, Book, Heart, Camera } from "lucide-react";

const CafeCategories = () => {
  const categories = [
    {
      icon: Laptop,
      title: "Nugas",
      description:
        "Perfect untuk mengerjakan tugas, skripsi, atau kerja remote",
      features: ["WiFi Kencang", "Colokan di Setiap Meja", "Suasana Tenang"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Users,
      title: "Nongkrong",
      description: "Tempat ideal untuk berkumpul dengan teman-teman",
      features: ["Area Outdoor", "Meja Besar", "Sharing Menu"],
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Coffee,
      title: "Santai",
      description: "Nikmati kopi sambil bersantai di suasana cozy",
      features: ["Sofa Nyaman", "Background Music", "Pencahayaan Hangat"],
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Book,
      title: "Baca Buku",
      description: "Zona tenang untuk membaca dan belajar",
      features: ["Area Sunyi", "Pencahayaan Bagus", "Kursi Ergonomis"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Heart,
      title: "Date",
      description: "Suasana romantis untuk quality time berdua",
      features: ["Meja Privat", "Dekorasi Aesthetic", "Menu Sharing"],
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Camera,
      title: "Foto-foto",
      description: "Spot instagramable untuk konten creator",
      features: ["Background Aesthetic", "Lighting Natural", "Props Lucu"],
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kategori Cafe
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
            Senja Coffee cocok untuk berbagai kebutuhan - mulai dari nugas,
            nongkrong, hingga foto-foto aesthetic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <category.icon className="w-6 h-6 text-cafe-600" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-900 font-inter mb-2">
                  {category.title}
                </h3>

                <p className="text-gray-600 font-inter text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cafe-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-inter">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CafeCategories;
