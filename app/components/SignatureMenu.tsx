"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Info, ExternalLink, Truck } from "lucide-react";
import MenuImageModal from "./MenuImageModal";
import MenuCategoryModal from "./MenuCategoryModal";

const SignatureMenu = () => {
  const [selectedMenuImage, setSelectedMenuImage] = useState<string | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const menuItems = [
    {
      name: "Matcha Chocolate Fusion",
      price: "Rp 32.000",
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80",
      description: "Perpaduan unik matcha premium dengan coklat belgia",
      isSignature: true,
      rating: 4.9,
      influencerQuote: "Coklat matcha-nya beneran bikin balik lagi 😍",
      category: "Coffee",
    },
    {
      name: "Senja Signature Coffee",
      price: "Rp 28.000",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
      description: "House blend spesial dengan aroma khas Senja Coffee",
      isSignature: true,
      rating: 4.8,
      influencerQuote: "Coffee lover wajib coba ini!",
      category: "Coffee",
    },
    {
      name: "Aesthetic Latte Art",
      price: "Rp 25.000",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
      description: "Latte dengan latte art custom untuk foto Instagram",
      isSignature: false,
      rating: 4.7,
      influencerQuote: "Latte art nya selalu perfect buat foto!",
      category: "Coffee",
    },
    {
      name: "Croffle Premium",
      price: "Rp 35.000",
      image:
        "https://images.unsplash.com/photo-1559058922-94dc0956862c?auto=format&fit=crop&w=400&q=80",
      description: "Croissant waffle dengan berbagai topping menarik",
      isSignature: false,
      rating: 4.6,
      influencerQuote: "Enak dan instagramable banget!",
      category: "Dessert",
    },
    {
      name: "Sunset Smoothie Bowl",
      price: "Rp 38.000",
      image:
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&q=80",
      description: "Smoothie bowl dengan garnish cantik layaknya sunset",
      isSignature: true,
      rating: 4.8,
      influencerQuote: "Healthy dan cantik, perfect!",
      category: "Smoothies",
    },
    {
      name: "Avocado Toast Deluxe",
      price: "Rp 42.000",
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=400&q=80",
      description: "Avocado toast dengan sourdough bread dan garnish premium",
      isSignature: false,
      rating: 4.5,
      influencerQuote: "Sehat dan mengenyangkan!",
      category: "Light Meals",
    },
    {
      name: "Iced Chocolate Delight",
      price: "Rp 30.000",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
      description: "Minuman coklat dingin dengan whipped cream",
      isSignature: false,
      rating: 4.4,
      influencerQuote: "Perfect untuk cuaca panas!",
      category: "Non-Coffee",
    },
    {
      name: "Caesar Salad Fresh",
      price: "Rp 40.000",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=400&q=80",
      description: "Salad segar dengan dressing caesar homemade",
      isSignature: false,
      rating: 4.3,
      influencerQuote: "Segar dan sehat!",
      category: "Light Meals",
    },
  ];

  const categories = [
    { name: "Coffee", emoji: "☕", color: "bg-amber-500" },
    { name: "Non-Coffee", emoji: "🥤", color: "bg-blue-500" },
    { name: "Dessert", emoji: "🍰", color: "bg-pink-500" },
    { name: "Light Meals", emoji: "🥗", color: "bg-green-500" },
    { name: "Smoothies", emoji: "🥤", color: "bg-purple-500" },
  ];

  const getCategoryImages = (categoryName: string) => {
    return menuItems
      .filter((item) => item.category === categoryName)
      .map((item) => ({
        url: item.image,
        title: item.name,
        price: item.price,
      }));
  };

  const deliveryPlatforms = [
    {
      name: "GoFood",
      url: "https://gofood.link/a/LBBtsfC",
      bgColor: "bg-gradient-to-r from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      icon: "🛵",
      description: "Pesan langsung via GoFood",
    },
    {
      name: "GrabFood",
      url: "https://r.grab.com/g/6-20250629_184712_da5851df37fb4a41a2dbcbba9517b924_MEXMPS-6-C6LEA3MAVGM2LA",
      bgColor: "bg-gradient-to-r from-emerald-500 to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
      icon: "🏍️",
      description: "Order mudah di GrabFood",
    },
    // {
    //   name: "ShopeeFood",
    //   url: "https://shopee.co.id/m/shopeefood-resto/example",
    //   bgColor: "bg-gradient-to-r from-orange-500 to-red-500",
    //   hoverColor: "hover:from-orange-600 hover:to-red-600",
    //   icon: "🍜",
    //   description: "Tersedia di ShopeeFood",
    // },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Menu Unggulan
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Rere udah coba dan rekomen banget menu ini—wajib kamu cobain juga!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.isSignature && (
                  <Badge className="absolute top-3 left-3 bg-cafe-600 text-white">
                    Signature
                  </Badge>
                )}
                <button
                  onClick={() => setSelectedMenuImage(item.image)}
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200 group/info"
                >
                  <Info className="w-4 h-4 text-gray-700 group-hover/info:text-cafe-600 transition-colors duration-200" />
                </button>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium text-black">
                    {item.rating}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-xl text-gray-900 font-inter">
                    {item.name}
                  </h3>
                  <span className="font-bold text-cafe-600 font-inter">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-600 font-inter text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="bg-cafe-50 rounded-lg p-3 border-l-4 border-cafe-300">
                  <p className="text-sm text-gray-700 font-inter italic">
                    "{item.influencerQuote}"
                  </p>
                  <span className="text-xs text-cafe-600 font-medium">
                    - Review Selebgram
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Minimalist Delivery Section */}
        <div className="mt-16 text-center">
          <div className="bg-cafe-50 rounded-2xl p-8 border border-cafe-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 text-center">
              <Truck className="w-5 h-5 text-cafe-600" />
              <h3 className="font-playfair text-xl font-bold text-gray-900">
                Tersedia juga di platform delivery
              </h3>
            </div>

            <div className="flex justify-center items-center gap-4 flex-wrap mb-6">
              {deliveryPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 px-4 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <span className="text-lg">{platform.icon}</span>
                  <span className="font-medium text-gray-700 font-inter text-sm">
                    {platform.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 font-inter flex-wrap">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>Rating 4.8/5</span>
              </div>
              {/* <div className="flex items-center gap-1">
                <Truck className="w-4 h-4 text-cafe-600" />
                <span>Gratis ongkir min. 50k</span>
              </div> */}
            </div>
          </div>

          <p className="mt-4 text-gray-600 font-inter text-sm">
            *Harga dapat berubah sewaktu-waktu. Syarat dan ketentuan berlaku.
          </p>
        </div>
      </div>

      {/* Menu Image Modal */}
      {selectedMenuImage && (
        <MenuImageModal
          imageUrl={selectedMenuImage}
          onClose={() => setSelectedMenuImage(null)}
        />
      )}

      {/* Category Gallery Modal */}
      {selectedCategory && (
        <MenuCategoryModal
          category={selectedCategory}
          images={getCategoryImages(selectedCategory)}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </section>
  );
};

export default SignatureMenu;
