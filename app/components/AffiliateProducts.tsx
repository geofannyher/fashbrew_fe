import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Star } from "lucide-react";

const AffiliateProducts = () => {
  const products = [
    {
      name: "Aesthetic Tote Bag",
      price: "Rp 89.000",
      originalPrice: "Rp 120.000",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
      description: "Canvas tote bag minimalis perfect untuk OOTD cafe",
      influencer: "@jessicatanoe",
      rating: 4.8,
      affiliate: "shopee.co.id",
      discount: "26%",
    },
    {
      name: "Vintage Film Camera",
      price: "Rp 450.000",
      originalPrice: "Rp 580.000",
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=400&q=80",
      description: "Kamera analog untuk foto aesthetic seperti selebgram",
      influencer: "@radityadika",
      rating: 4.9,
      affiliate: "tokopedia.com",
      discount: "22%",
    },
    {
      name: "Aesthetic Phone Case",
      price: "Rp 45.000",
      originalPrice: "Rp 65.000",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=400&q=80",
      description: "Phone case aesthetic cocok untuk flat lay foto",
      influencer: "@jessicatanoe",
      rating: 4.7,
      affiliate: "shopee.co.id",
      discount: "31%",
    },
    {
      name: "Minimalist Watch",
      price: "Rp 285.000",
      originalPrice: "Rp 380.000",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=400&q=80",
      description: "Jam tangan minimalis yang sering dipakai influencer",
      influencer: "@radityadika",
      rating: 4.8,
      affiliate: "tokopedia.com",
      discount: "25%",
    },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Barang-barang yang Dipakai Selebgram
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
            Dapatkan look aesthetic seperti influencer favorit Anda dengan
            produk-produk yang mereka gunakan saat berkunjung ke Senja Coffee
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                  -{product.discount}
                </Badge>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 font-inter mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 font-inter text-sm mb-3 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-500 font-inter">
                    Dipakai oleh:
                  </span>
                  <span className="text-xs text-cafe-600 font-medium">
                    {product.influencer}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-cafe-600 font-inter">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through font-inter">
                      {product.originalPrice}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-inter">
                    dari {product.affiliate}
                  </span>
                </div>

                <Button
                  className="w-full bg-cafe-600 hover:bg-cafe-700 text-white flex items-center justify-center gap-2 transition-all duration-300"
                  onClick={() => window.open("#", "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  Beli Sekarang
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-4xl mx-auto">
          <p className="text-sm text-amber-700 font-inter text-center">
            <strong>Disclaimer:</strong> Produk-produk di atas adalah
            rekomendasi affiliate. Harga dapat berubah sewaktu-waktu. Kami
            mendapat komisi dari pembelian melalui link ini.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffiliateProducts;
