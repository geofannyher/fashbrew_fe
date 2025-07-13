"use client";

import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import ProductList from "../../lookbook/components/ProductList";
import ProductModal from "../../lookbook/components/ProductModal";
import CoffeeFooter from "@/app/footer/page";
import Image from "next/image";

interface ProductPlatform {
  platform: "shopee" | "tokopedia" | "tiktok";
  link: string;
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  platforms: ProductPlatform[];
}

interface OOTDDetail {
  id: string;
  images: string[]; // Changed from single image to array of images
  title: string;
  description: string;
  influencer: {
    name: string;
    handle: string;
  };
  products: Product[];
}

const ootdDetailData: Record<string, OOTDDetail> = {
  "1": {
    id: "1",
    images: [
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616729/fashbrew/OOTD1/take_your_coffee_%EF%B8%8F_6_supx53.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616728/fashbrew/OOTD1/take_your_coffee_%EF%B8%8F_3_cydfh4.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616728/fashbrew/OOTD1/take_your_coffee_%EF%B8%8F_2_dtsmj4.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616727/fashbrew/OOTD1/take_your_coffee_%EF%B8%8F_7_dehqbh.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616727/fashbrew/OOTD1/take_your_coffee_%EF%B8%8F_5_ubxh20.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616727/fashbrew/OOTD1/take_your_coffee_%EF%B8%8F_4_wpkgwe.jpg",
    ],
    title: "Take Your Coffee ☕",
    description:
      "Gaya santai untuk momen ngopi. Simpel, hangat, dan tetap stylish.",
    influencer: { name: "rere_amalia", handle: "@rere_amalia" },
    products: [
      {
        id: "p1",
        name: "Kemeja Putih Lengan Panjang",
        price: "Rp 220.000",
        image:
          "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e3d67e8ff042449e9e7fb2f71f1a55a2~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
        description: "Blazer oversized berbahan wol dengan potongan relaxed.",
        platforms: [
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBke9fW9/" },
        ],
      },
      {
        id: "p2",
        name: "Tube Buttons Tanktop",
        price: "Rp 129.000",
        image:
          "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/a500c2cf35934f259965dcd015943a1b~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
        description: "Celana high-waist dengan bahan crepe premium.",
        platforms: [
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkdjKe5/" },
          { platform: "shopee", link: "https://s.shopee.co.id/2VgZsBar2b" },
        ],
      },
      {
        id: "p3",
        name: "Gouw Pants",
        price: "Rp 118.000",
        image:
          "https://down-id.img.susercontent.com/file/sg-11134201-23010-p2merdrn7ymv34.webp",
        description: "Celana high-waist dengan bahan crepe premium.",
        platforms: [
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkefKT6/" },
          { platform: "shopee", link: "https://s.shopee.co.id/z8J9MP6g" },
        ],
      },
    ],
  },
  "2": {
    id: "2",
    images: [
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616815/fashbrew/OOTD2/hello_mid_april_fashionphotography_fashionista_fashionoftheday_styleinspiration_5_wsg890.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616815/fashbrew/OOTD2/hello_mid_april_fashionphotography_fashionista_fashionoftheday_styleinspiration_13_yg5zph.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616814/fashbrew/OOTD2/hello_mid_april_fashionphotography_fashionista_fashionoftheday_styleinspiration_4_f6yp1m.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616817/fashbrew/OOTD2/hello_mid_april_fashionphotography_fashionista_fashionoftheday_styleinspiration_gqrb4c.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616818/fashbrew/OOTD2/hello_mid_april_fashionphotography_fashionista_fashionoftheday_styleinspiration_16_fa8gxz.jpg",
    ],
    title: "Mid-April Mood",
    description:
      "Sentuhan chic untuk hari cerah di pertengahan April. Simpel, segar, dan penuh gaya.",
    influencer: { name: "rere_amalia", handle: "@rere_amalia" },
    products: [
      {
        id: "p4",
        name: "Tank Top Kulit",
        price: "Rp 37.000",
        image:
          "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lwy37210ixy3c5.webp",
        description: "Hoodie abu polos berbahan fleece lembut.",
        platforms: [
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkR2sry/" },
          { platform: "shopee", link: "https://s.shopee.co.id/9KWnQa6kPk" },
        ],
      },
      {
        id: "p5",
        name: "Kit Blazer",
        price: "Rp 109.000",
        image:
          "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/95d71dfefa6549b38752b3b67cb54e60~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
        description: "Celana hitam slim fit untuk gaya minimalis.",
        platforms: [
          { platform: "shopee", link: "https://s.shopee.co.id/9pT41M4522" },
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkdy3gn" },
        ],
      },
      {
        id: "p6",
        name: "Gouw Pants",
        price: "Rp 118.000",
        image:
          "https://down-id.img.susercontent.com/file/sg-11134201-23010-p2merdrn7ymv34.webp",
        description: "Celana hitam slim fit untuk gaya minimalis.",
        platforms: [
          { platform: "shopee", link: "https://s.shopee.co.id/z8J9MP6g" },
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkdHMSr/" },
        ],
      },
    ],
  },
  "3": {
    id: "3",
    images: [
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616846/fashbrew/OOTD3/outfit_today_1_klzdas.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616846/fashbrew/OOTD3/outfit_today_3_pu6gxm.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616845/fashbrew/OOTD3/outfit_today_4_oiwfal.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616844/fashbrew/OOTD3/outfit_today_7_hjugza.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616844/fashbrew/OOTD3/outfit_today_6_ifxhsh.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616843/fashbrew/OOTD3/outfit_today_5_gw6ge6.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616842/fashbrew/OOTD3/outfit_today_2_oybuij.jpg",
    ],
    title: "Outfit Today",
    description:
      "Gaya kasual harian yang simpel tapi tetap standout. Siap temani aktivitasmu seharian.",
    influencer: { name: "rere_amalia", handle: "@rere_amalia" },
    products: [
      {
        id: "p7",
        name: "Evie Top",
        price: "Rp 159.000",
        image:
          "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e0c13971d8f7494383ffd85b4cd8ce92~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
        description: "Gaun polkadot klasik dengan potongan feminin.",
        platforms: [
          {
            platform: "tiktok",
            link: "https://vt.tokopedia.com/t/ZSBkRXtrT/",
          },
        ],
      },
      {
        id: "p8",
        name: "Jeha Kulot",
        price: "Rp 199.000",
        image:
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/7fa139c3731b4113b2c10081fac4dbf2~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
        description: "Topi baret klasik untuk melengkapi look vintage-mu.",
        platforms: [
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkRNgj5/" },
          { platform: "shopee", link: "https://s.shopee.co.id/6fW8qs2UmS" },
        ],
      },
    ],
  },
  // Continue with other items, converting single image to images array...
  "4": {
    id: "4",
    images: [
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616872/fashbrew/OOTD4/Do_whatever_makes_you_happiest_._3_z9pthq.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616870/fashbrew/OOTD4/Do_whatever_makes_you_happiest_._2_fq35tb.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616869/fashbrew/OOTD4/Do_whatever_makes_you_happiest_._1_icdt5t.jpg",
    ],
    title: "Do What Makes You Happy",
    description:
      "Outfit simpel yang mencerminkan mood bebas dan percaya diri. Karena gaya terbaik adalah jadi diri sendiri.",
    influencer: { name: "rere_amalia", handle: "@rere_amalia" },
    products: [
      {
        id: "p8",
        name: "Kacamata Hitam",
        price: "Rp 9.900",
        image:
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2024/6/30/d2124e6b-aee2-4ab2-80c7-e621af3a7ea7.jpg~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
        description: "Jaket windbreaker ringan, tahan angin dan stylish.",
        platforms: [
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBk8e4j8/" },
        ],
      },
      {
        id: "p9",
        name: "Vest Turtleneck",
        price: "Rp 70.900",
        image:
          "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c1c7ae27a3a04590a1e12dbd9f7a5d81~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
        description: "Jaket windbreaker ringan, tahan angin dan stylish.",
        platforms: [
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkRce5F/" },
          { platform: "shopee", link: "https://s.shopee.co.id/20kJLAkb0W" },
        ],
      },
    ],
  },
  "5": {
    id: "5",
    images: [
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616897/fashbrew/OOTD5/Snapshots_of_spontaneity___%EF%B8%8F_dklh7t.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616896/fashbrew/OOTD5/Snapshots_of_spontaneity___%EF%B8%8F_1_mzbk3y.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616895/fashbrew/OOTD5/Snapshots_of_spontaneity___%EF%B8%8F_2_kyvp66.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616893/fashbrew/OOTD5/Snapshots_of_spontaneity___%EF%B8%8F_3_fbqwrz.jpg",
    ],
    title: "Summer Breeze",
    description: "Pakaian musim panas yang ringan dan menyegarkan.",
    influencer: { name: "Ayu Wulandari", handle: "@ayuwstyle" },
    products: [
      {
        id: "p10",
        name: "Rok Tule Midi",
        price: "Rp 189.000",
        image:
          "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/868fb9658fd24c5c9e77605810c6c39e~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
        description: "Kemeja linen putih longgar untuk udara tropis.",
        platforms: [
          { platform: "shopee", link: "https://s.shopee.co.id/4fl4kHNkDA" },
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSB5Pm5Ga/" },
        ],
      },
      {
        id: "p11",
        name: "Lessa Lexia Bag",
        price: "Rp 89.500",
        image:
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/4743df2b4b9a4c158034339082256a96~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
        description: "Kemeja linen putih longgar untuk udara tropis.",
        platforms: [
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSB5514t8" },
        ],
      },
    ],
  },
  "6": {
    id: "6",
    images: [
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616927/fashbrew/OOTD6/enjoy_6_ryvqu0.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616927/fashbrew/OOTD6/enjoy_8_invqon.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616926/fashbrew/OOTD6/enjoy_5_oshr8z.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616926/fashbrew/OOTD6/enjoy_9_dyvqtj.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616925/fashbrew/OOTD6/enjoy_7_gloqkb.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616925/fashbrew/OOTD6/enjoy_2_wgdoxf.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616923/fashbrew/OOTD6/enjoy_3_v96kag.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616923/fashbrew/OOTD6/enjoy_1_mf0sem.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616923/fashbrew/OOTD6/enjoy_4_f0ahic.jpg",
    ],
    title: "Bold and Black",
    description: "Semua serba hitam untuk gaya edgy dan tegas.",
    influencer: { name: "Nathan Lie", handle: "@darkbydefault" },
    products: [
      {
        id: "p12",
        name: "Nancy Top",
        price: "Rp 45.000",
        image:
          "https://down-id.img.susercontent.com/file/2e268e6a27f504139fb6a9b802085bb9.webp",
        description: "Turtleneck hitam slim fit yang klasik.",
        platforms: [
          { platform: "shopee", link: "https://s.shopee.co.id/3qBxg8J7GV" },
        ],
      },
      {
        id: "p13",
        name: "Gouw Pants",
        price: "Rp 118.000",
        image:
          "https://down-id.img.susercontent.com/file/sg-11134201-23010-p2merdrn7ymv34.webp",
        description: "Turtleneck hitam slim fit yang klasik.",
        platforms: [
          { platform: "shopee", link: "https://s.shopee.co.id/6ppZFi6M30" },
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSB554vMT/" },
        ],
      },
    ],
  },
  "7": {
    id: "7",
    images: [
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751617267/fashbrew/OOTD7/the_last_slide_is_a_mess_nokeii.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751617266/fashbrew/OOTD7/the_last_slide_is_a_mess_1_lrxpwx.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751617264/fashbrew/OOTD7/the_last_slide_is_a_mess_2_ihr1bf.jpg",
    ],
    title: "Minimal Tan",
    description: "Warna nude dan earth tone untuk nuansa bersih.",
    influencer: { name: "Dina Zhafira", handle: "@dinanudes" },
    products: [
      {
        id: "p13",
        name: "Tanktop Leather Suspender",
        price: "Rp 189.000",
        image:
          "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/706fbcd061284758b7a0f090fcc510f7~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
        description: "Blus warna tan elegan dengan detail lengan puff.",
        platforms: [
          { platform: "shopee", link: "https://s.shopee.co.id/4VReTdHCjY" },
          { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSB55qfGu/" },
        ],
      },
    ],
  },
};

interface Props {
  params: {
    id: string;
  };
}

// Image Carousel Component
interface ImageCarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative">
      {/* Main Image Container */}
      <div className="aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden mb-4 relative group">
        <img
          src={images[currentImageIndex]}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Navigation Arrows - Only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation - Only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                currentImageIndex === index
                  ? "border-neutral-800 opacity-100"
                  : "border-transparent opacity-60 hover:opacity-80"
              }`}
            >
              <img
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Dot Indicators - Alternative to thumbnails for minimal design */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentImageIndex === index
                  ? "bg-neutral-800"
                  : "bg-neutral-300 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function OotdDetail({
  params,
}: {
  params: Promise<Props["params"]>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const ootd = ootdDetailData[id];

  if (!ootd) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl text-neutral-900 mb-4">Look not found</h2>
          <button
            onClick={() => router.push("/")}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Return to catalog
          </button>
        </div>
      </div>
    );
  }

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto lg:px-8 px-4 py-4">
        <button
          onClick={() => router.push("/lookbook")}
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-light">Back to Looks</span>
        </button>
      </div>

      <main className="container max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {/* Image Carousel */}
            <ImageCarousel images={ootd.images} title={ootd.title} />

            <h1 className="text-2xl font-light text-neutral-900 leading-relaxed">
              {ootd.title}
            </h1>

            <p className="text-neutral-600 leading-relaxed mt-4">
              {ootd.description}
            </p>

            <div className="text-sm text-neutral-500 pt-4 border-t mt-6 border-neutral-200">
              Styled by{" "}
              <span className="font-medium text-neutral-700">
                {ootd.influencer.name}
              </span>
              <span className="ml-1 text-neutral-400">
                {ootd.influencer.handle}
              </span>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <h2 className="text-lg font-light text-neutral-900 mb-6">
                Shop This Look
              </h2>

              <ProductList
                products={ootd.products}
                onProductClick={handleProductClick}
              />
            </div>
          </div>
        </div>
      </main>
      <div className="mt-12">
        <CoffeeFooter />
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}
