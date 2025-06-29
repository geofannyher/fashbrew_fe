"use client";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import OOTDDetailPopup from "./OOTDDetailPopup";

const InstagramGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedOOTD, setSelectedOOTD] = useState<any>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=80",
      caption: "Spot Favorit untuk OOTD",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80",
      caption: "Coffee Art Aesthetic",
      category: "Menu",
    },
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80",
      caption: "Outdoor Vibes",
      category: "Outdoor",
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80",
      caption: "Signature Drinks",
      category: "Menu",
    },
    {
      src: "https://images.unsplash.com/photo-1559058922-94dc0956862c?auto=format&fit=crop&w=500&q=80",
      caption: "Cozy Corner",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
      caption: "Perfect Lighting",
      category: "Interior",
    },
  ];

  const ootdCatalog = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752063/fashbrew/take_your_coffee_%EF%B8%8F_1_cgxt4b.jpg",
      style: "Casual Chic",
      description: "Perfect untuk ngopi santai",
      products: [
        {
          name: "Oversized Sweater",
          image:
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=200&q=80",
          links: {
            tokopedia: "https://tokopedia.com/example1",
            shopee: "https://s.shopee.co.id/8UxQSUGnkv",
          },
        },
        {
          name: "High Waist Jeans",
          image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=200&q=80",
          links: {
            tokopedia: "https://tokopedia.com/example2",
            shopee: "https://shopee.co.id/example2",
          },
        },
      ],
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752063/fashbrew/take_your_coffee_%EF%B8%8F_ttmkeh.jpg",
      style: "Date Night",
      description: "Romantic dan elegant",
      products: [
        {
          name: "Little Black Dress",
          image:
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=200&q=80",
          links: {
            shopee: "https://shopee.co.id/example3",
            tiktok: "https://shop.tiktok.com/example3",
          },
        },
        {
          name: "Heels",
          image:
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=200&q=80",
          links: {
            tokopedia: "https://tokopedia.com/example4",
            shopee: "https://shopee.co.id/example4",
          },
        },
      ],
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/outfit_today_ltfduo.jpg",
      style: "Vintage Vibes",
      description: "Retro aesthetic look",
      products: [
        {
          name: "Vintage Blouse",
          image:
            "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=200&q=80",
          links: {
            tokopedia: "https://tokopedia.com/example5",
            shopee: "https://shopee.co.id/example5",
          },
        },
        {
          name: "High Waist Skirt",
          image:
            "https://images.unsplash.com/photo-1583496661160-fb5886a13d4e?auto=format&fit=crop&w=200&q=80",
          links: {
            tokopedia: "https://tokopedia.com/example6",
            tiktok: "https://shop.tiktok.com/example6",
          },
        },
      ],
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/caption_in_this_song_tsletd.jpg",
      style: "Boho Style",
      description: "Free spirited dan comfortable",
      products: [
        {
          name: "Flowy Maxi Dress",
          image:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=200&q=80",
          links: {
            shopee: "https://shopee.co.id/example7",
            tokopedia: "https://tokopedia.com/example7",
          },
        },
        {
          name: "Layered Necklace",
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=200&q=80",
          links: {
            tiktok: "https://shop.tiktok.com/example8",
            shopee: "https://shopee.co.id/example8",
          },
        },
      ],
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/one_set_maezula_pinvul.jpg",
      style: "Minimalist",
      description: "Simple tapi tetap stylish",
      products: [
        {
          name: "Basic White Tee",
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80",
          links: {
            tokopedia: "https://tokopedia.com/example9",
            shopee: "https://shopee.co.id/example9",
          },
        },
        {
          name: "Denim Jacket",
          image:
            "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=200&q=80",
          links: {
            shopee: "https://shopee.co.id/example10",
            tiktok: "https://shop.tiktok.com/example10",
          },
        },
      ],
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/neon_outfit_ootd_ootdfashion_ootdneon_neon_coloroutfit_outfit_jhml0c.jpg",
      style: "Sporty Chic",
      description: "Active lifestyle yang trendy",
      products: [
        {
          name: "Sports Bra Set",
          image:
            "https://images.unsplash.com/photo-1506629905607-cc00f4d3d981?auto=format&fit=crop&w=200&q=80",
          links: {
            tokopedia: "https://tokopedia.com/example11",
            shopee: "https://shopee.co.id/example11",
          },
        },
        {
          name: "Sneakers",
          image:
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=200&q=80",
          links: {
            shopee: "https://shopee.co.id/example12",
            tiktok: "https://shop.tiktok.com/example12",
          },
        },
      ],
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752313/fashbrew/my_dress_uafra2.jpg",
      style: "Korean Style",
      description: "K-fashion inspired look",
      products: [
        {
          name: "Oversized Cardigan",
          image:
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=200&q=80",
          links: {
            tokopedia: "https://tokopedia.com/example13",
            shopee: "https://shopee.co.id/example13",
          },
        },
        {
          name: "Pleated Skirt",
          image:
            "https://images.unsplash.com/photo-1583496661160-fb5886a13d4e?auto=format&fit=crop&w=200&q=80",
          links: {
            shopee: "https://shopee.co.id/example14",
            tiktok: "https://shop.tiktok.com/example14",
          },
        },
      ],
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752313/fashbrew/my_dress_by_lsecjx.jpg",
      style: "Elegant Casual",
      description: "Sophisticated yet relaxed",
      products: [
        {
          name: "Silk Blouse",
          image:
            "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=200&q=80",
          links: {
            tokopedia: "https://tokopedia.com/example15",
            shopee: "https://shopee.co.id/example15",
          },
        },
        {
          name: "Tailored Pants",
          image:
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=200&q=80",
          links: {
            shopee: "https://shopee.co.id/example16",
            tokopedia: "https://tokopedia.com/example16",
          },
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galeri Instagramable
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Spot-spot foto terbaik yang akan membuat feed Instagram Anda lebih
            aesthetic
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-20">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg">📸</span>
                  <span className="font-medium font-inter text-sm">
                    {image.caption}
                  </span>
                </div>
                <span className="text-xs text-white/80 font-inter">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* OOTD Catalog Carousel */}
        <div className="mt-16 bg-gradient-to-br from-cafe-50 to-cafe-100 rounded-3xl p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Katalog OOTD di Kattapa Coffee
            </h3>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto">
              Inspirasi outfit aesthetic untuk foto-foto Instagramable di
              Kattapa Coffee
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3 sm:-ml-4">
                {ootdCatalog.map((outfit) => (
                  <CarouselItem
                    key={outfit.id}
                    className="pl-3 sm:pl-4 basis-3/4 xs:basis-2/3 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4"
                  >
                    <div
                      className="relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group bg-white"
                      onClick={() => setSelectedOOTD(outfit)}
                    >
                      <img
                        src={outfit.image}
                        alt={outfit.style}
                        className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                        <h4 className="font-semibold text-sm sm:text-base font-inter mb-1 line-clamp-1">
                          {outfit.style}
                        </h4>
                        <p className="text-xs sm:text-sm opacity-90 line-clamp-2 font-inter">
                          {outfit.description}
                        </p>

                        {/* Products Count */}
                        <div className="flex items-center gap-1 mt-2 text-xs opacity-80">
                          <span>🛍️</span>
                          <span>{outfit.products.length} produk</span>
                        </div>
                      </div>

                      {/* Hover Effect - Click Indicator */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm">👁️</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Arrows */}
              <CarouselPrevious className="hidden md:flex -left-6 w-12 h-12 bg-white shadow-lg hover:bg-cafe-50 border-cafe-200" />
              <CarouselNext className="hidden md:flex -right-6 w-12 h-12 bg-white shadow-lg hover:bg-cafe-50 border-cafe-200" />
            </Carousel>
          </div>

          {/* Info Text */}
          <div className="text-center mt-8">
            <p className="text-gray-600 font-inter text-sm">
              Geser untuk melihat lebih banyak inspirasi OOTD • Klik foto untuk
              detail produk dan link pembelian
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span>🛒</span>
                Tokopedia
              </span>
              <span className="flex items-center gap-1">
                <span>🛍️</span>
                Shopee
              </span>
              <span className="flex items-center gap-1">
                <span>🎵</span>
                TikTok Shop
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* OOTD Detail Popup */}
      {selectedOOTD && (
        <OOTDDetailPopup
          outfit={selectedOOTD}
          onClose={() => setSelectedOOTD(null)}
        />
      )}
    </section>
  );
};

export default InstagramGallery;
