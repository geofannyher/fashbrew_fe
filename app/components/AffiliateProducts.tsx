import { Card } from "./ui/card";
import { ExternalLink, Star } from "lucide-react";

const AffiliateProducts = () => {
  const products = [
    {
      name: "Gow Pants",
      price: "Rp 118.012",
      originalPrice: "Rp 215.000",
      image:
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8249051c53a0419e9f56b0226e308470~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
      description: "Canvas tote bag minimalis perfect untuk OOTD cafe",
      influencer: "@rere_amalia",
      rating: 4.9,
      affiliate: "Tiktok",
      discount: "26%",
      link: "https://vt.tokopedia.com/t/ZSBkefKT6/",
    },
    {
      name: "Tube Buttons Tanktop",
      price: "Rp 127.000",
      originalPrice: "Rp 129.000",
      image:
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7a75566bd8214b4cbf7326e399445630~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393",
      description: "Kamera analog untuk foto aesthetic seperti selebgram",
      influencer: "@rere_amalia",
      rating: 4.8,
      affiliate: "Tiktok",
      discount: "22%",
      link: "https://vt.tokopedia.com/t/ZSBkdjKe5/",
    },
    {
      name: "KIT Blazer",
      price: "Rp 96.644",
      originalPrice: "Rp 215.000",
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-7rbnc-lqq7wwkjfsx8e3.webp",
      description: "Phone case aesthetic cocok untuk flat lay foto",
      influencer: "@rere_amalia",
      rating: 4.9,
      affiliate: "Shopee",
      discount: "31%",
      link: "https://s.shopee.co.id/9pT41M4522",
    },
    {
      name: "Vast Turtleneck Rajut",
      price: "Rp 70.000",
      originalPrice: "Rp 90.000",
      image:
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c1c7ae27a3a04590a1e12dbd9f7a5d81~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
      description: "Jam tangan minimalis yang sering dipakai influencer",
      influencer: "@rere_amalia",
      rating: 4.9,
      affiliate: "Tiktok",
      discount: "25%",
    },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Barang-barang yang Dipakai Rere
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
            Dapatkan look aesthetic seperti Rere dengan produk-produk yang rere
            gunakan saat berkunjung ke Kattapa Coffee
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
                {/* <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                  -{product.discount}
                </Badge> */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium text-black">
                    {product.rating}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 font-inter mb-2">
                  {product.name}
                </h3>

                {/* <p className="text-gray-600 font-inter text-sm mb-3 leading-relaxed">
                  {product.description}
                </p> */}

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

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-cafe-600 hover:bg-cafe-700 text-white flex items-center justify-center gap-2 transition-all duration-300 px-4 py-2 rounded-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  Beli Sekarang
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-4xl mx-auto">
          <p className="text-sm text-amber-700 font-inter text-center">
            <strong>Disclaimer:</strong> Produk-produk di atas adalah
            rekomendasi affiliate. Harga dapat berubah sewaktu-waktu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffiliateProducts;
