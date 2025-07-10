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
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751569044/fashbrew/unnamed_3_eqmxry.jpg",
      caption: "Spot Favorit untuk OOTD",
      category: "Interior",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751569695/fashbrew/unnamed_5_yyb63u.jpg",
      caption: "Coffee Art Aesthetic",
      category: "Interior",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751600811/fashbrew/469524322_17885217813163877_1328757443699079086_n_egg4cj.jpg",
      caption: "Cozy Indoor Ambience",
      category: "Indoor",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751524107/fashbrew/Tezza-0933_gof9na.jpg",
      caption: "Signature Drinks",
      category: "Menu",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751569043/fashbrew/unnamed_4_kfj30v.jpg",
      caption: "Cozy Corner",
      category: "Interior",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751569044/fashbrew/unnamed_1_pjtcxk.jpg",
      caption: "Perfect Lighting",
      category: "Interior",
    },
  ];

  const ootdCatalog = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616727/fashbrew/OOTD1/take_your_coffee_%EF%B8%8F_5_ubxh20.jpg",
      style: "Formal Style",
      description:
        "Tampilan rapi dan elegan dengan setelan jas, kemeja, dan sepatu pantofel, cocok untuk acara resmi atau profesional.",
      products: [
        {
          name: "Kemben Tube Top",
          image:
            "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f760ccf23c1d45a38bfdc591655247ef~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
          links: {
            tiktok: "https://vt.tokopedia.com/t/ZSBkdjKe5/",
          },
        },
        {
          name: "Kemeja Putih",
          image:
            "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e3d67e8ff042449e9e7fb2f71f1a55a2~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393",
          links: {
            tiktok: "https://vt.tokopedia.com/t/ZSBke9fW9/",
          },
        },
        {
          name: "Celana Gouw Pants",
          image:
            "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8b18eb41d0ac477baacef906d31cc124~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
          links: {
            tiktok: "https://vt.tokopedia.com/t/ZSBkefKT6/",
            shopee: "https://s.shopee.co.id/z8J9MP6g",
          },
        },
      ],
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616846/fashbrew/OOTD3/outfit_today_1_klzdas.jpg",
      style: "Casual Outfit",
      description:
        "Tampilan santai dengan sentuhan romantis dan elegan, cocok untuk kencan atau acara kasual spesial.",
      products: [
        {
          name: "Korean Top",
          image:
            "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e0c13971d8f7494383ffd85b4cd8ce92~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
          links: {
            tiktok: "https://vt.tokopedia.com/t/ZSBkRXtrT/",
          },
        },
        {
          name: "Kulot Rok Hijau",
          image:
            "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/7fa139c3731b4113b2c10081fac4dbf2~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393",
          links: {
            tiktok: "https://vt.tokopedia.com/t/ZSBkRNgj5/",
          },
        },
      ],
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616872/fashbrew/OOTD4/Do_whatever_makes_you_happiest_._3_z9pthq.jpg",
      style: "",
      description: "Retro aesthetic look",
      products: [
        {
          name: "Baju Hitam",
          image:
            "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f66ed30f518142b7a3546ede469c251f~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393",
          links: {
            tiktok: "https://vt.tokopedia.com/t/ZSBkRce5F/",
          },
        },
        {
          name: "Kacamata",
          image:
            "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2024/6/30/d2124e6b-aee2-4ab2-80c7-e621af3a7ea7.jpg~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393",
          links: {
            tiktok: "https://vt.tokopedia.com/t/ZSBk8e4j8/",
          },
        },
      ],
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616893/fashbrew/OOTD5/Snapshots_of_spontaneity___%EF%B8%8F_3_fbqwrz.jpg",
      style: "Boho Style",
      description: "Free spirited dan comfortable",
      products: [
        {
          name: "Rok Tule Midi",
          image:
            "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/868fb9658fd24c5c9e77605810c6c39e~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
          links: {
            tiktok: "https://vt.tokopedia.com/t/ZSB5Pm5Ga/ ",
            shopee: "https://s.shopee.co.id/4fl4kHNkDA",
          },
        },
        {
          name: "Lessa Lexia Bag",
          image:
            "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/4743df2b4b9a4c158034339082256a96~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
          links: {
            tiktok: "https://vt.tokopedia.com/t/ZSB5514t8",
          },
        },
      ],
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616927/fashbrew/OOTD6/enjoy_8_invqon.jpg",
      style: "Minimalist",
      description: "Simple tapi tetap stylish",
      products: [
        {
          name: "Nancy Top",
          image:
            "https://down-id.img.susercontent.com/file/2e268e6a27f504139fb6a9b802085bb9.webp",
          links: {
            shopee: "https://s.shopee.co.id/3qBxg8J7GV",
          },
        },
        {
          name: "Gouw Pants",
          image:
            "https://down-id.img.susercontent.com/file/sg-11134201-23010-p2merdrn7ymv34.webp",
          links: {
            shopee: "https://s.shopee.co.id/6ppZFi6M30",
            tiktok: "https://vt.tokopedia.com/t/ZSB554vMT/",
          },
        },
      ],
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751617266/fashbrew/OOTD7/the_last_slide_is_a_mess_1_lrxpwx.jpg",
      style: "Sporty Chic",
      description: "Active lifestyle yang trendy",
      products: [
        {
          name: "Tanktop Leather Suspender",
          image:
            "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/706fbcd061284758b7a0f090fcc510f7~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
          links: {
            tiktok: "https://vt.tokopedia.com/t/ZSB55qfGu/",
            shopee: "https://s.shopee.co.id/4VReTdHCjY",
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
              <CarouselPrevious className="hidden md:flex -left-6 w-12 h-12 bg-white shadow-lg hover:bg-cafe-50 border-cafe-200 text-black hover:text-white" />
              <CarouselNext className="hidden md:flex -right-6 w-12 h-12 bg-white shadow-lg hover:bg-cafe-50 border-cafe-200 text-black hover:text-white" />
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
