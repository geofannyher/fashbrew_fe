"use client";
import { useState } from "react";
import MoodFilter from "./components/MoodFilter";
import OOTDCard from "./components/OOTDCard";
import CoffeeFooter from "../footer/page";

const ootdData = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/outfit_today_ltfduo.jpg",
    title: "Effortless Weekend Layers",
    description:
      "The perfect blend of comfort and style for those leisurely Saturday mornings. A cozy oversized blazer paired with tailored trousers creates an elevated casual look.",
    mood: ["weekend", "all"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "Oversized Blazer",
        platforms: [
          {
            platform: "shopee" as const,
            price: "Rp 299.000",
            link: "https://shopee.co.id/blazer-affiliate",
          },
          {
            platform: "tokopedia" as const,
            price: "Rp 310.000",
            link: "https://tokopedia.com/blazer-affiliate",
          },
        ],
        position: { top: "25%", left: "60%" },
      },
      {
        name: "Wide-leg Trousers",
        platforms: [
          {
            platform: "tokopedia" as const,
            price: "Rp 189.000",
            link: "https://tokopedia.com/trousers-affiliate",
          },
          {
            platform: "tiktok" as const,
            price: "Rp 179.000",
            link: "https://tiktok.com/trousers-affiliate",
          },
        ],
        position: { top: "60%", left: "45%" },
      },
      {
        name: "Leather Loafers",
        platforms: [
          {
            platform: "shopee" as const,
            price: "Rp 345.000",
            link: "https://shopee.co.id/loafers-affiliate",
          },
          {
            platform: "tiktok" as const,
            price: "Rp 349.000",
            link: "https://tiktok.com/loafers-affiliate",
          },
        ],
        position: { top: "85%", left: "50%" },
      },
    ],
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/one_set_maezula_pinvul.jpg",
    title: "Cozy Street Vibe",
    description:
      "Layered hoodie and cargo pants for an effortless, edgy city look.",
    mood: ["casual", "urban"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "Oversized Hoodie",
        platforms: [
          { platform: "shopee" as const, price: "Rp 210.000", link: "#" },
          { platform: "tiktok" as const, price: "Rp 205.000", link: "#" },
        ],
        position: { top: "20%", left: "55%" },
      },
      {
        name: "Black Cargo Pants",
        platforms: [
          { platform: "tokopedia" as const, price: "Rp 250.000", link: "#" },
          { platform: "shopee" as const, price: "Rp 245.000", link: "#" },
        ],
        position: { top: "70%", left: "48%" },
      },
    ],
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/caption_in_this_song_tsletd.jpg",
    title: "Clean Office Look",
    description: "Sleek and minimal for professional elegance.",
    mood: ["office", "weekday"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "White Button-Up Shirt",
        platforms: [
          { platform: "tokopedia" as const, price: "Rp 150.000", link: "#" },
        ],
        position: { top: "22%", left: "50%" },
      },
      {
        name: "Tailored Trousers",
        platforms: [
          { platform: "shopee" as const, price: "Rp 200.000", link: "#" },
        ],
        position: { top: "68%", left: "45%" },
      },
    ],
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/neon_outfit_ootd_ootdfashion_ootdneon_neon_coloroutfit_outfit_jhml0c.jpg",
    title: "Beach Day Lightness",
    description:
      "Breezy fabrics and pastel tones perfect for seaside getaways.",
    mood: ["vacation", "beach"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "Floral Summer Dress",
        platforms: [
          { platform: "shopee" as const, price: "Rp 175.000", link: "#" },
        ],
        position: { top: "30%", left: "50%" },
      },
      {
        name: "Straw Hat",
        platforms: [
          { platform: "tokopedia" as const, price: "Rp 95.000", link: "#" },
        ],
        position: { top: "10%", left: "40%" },
      },
    ],
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752063/fashbrew/take_your_coffee_%EF%B8%8F_ttmkeh.jpg",
    title: "Monochrome Power",
    description: "All-black outfit for maximum impact and elegance.",
    mood: ["edgy", "night"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "Black Blazer Dress",
        platforms: [
          { platform: "tiktok" as const, price: "Rp 299.000", link: "#" },
        ],
        position: { top: "40%", left: "50%" },
      },
      {
        name: "Chunky Boots",
        platforms: [
          { platform: "shopee" as const, price: "Rp 275.000", link: "#" },
        ],
        position: { top: "90%", left: "52%" },
      },
    ],
  },
  {
    id: "6",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752063/fashbrew/take_your_coffee_%EF%B8%8F_1_cgxt4b.jpg",
    title: "Korean-Inspired Chill",
    description:
      "Loose-fit sweater, skirt combo and sneakers for laid-back cuteness.",
    mood: ["korean", "cute"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "Striped Knit Sweater",
        platforms: [
          { platform: "shopee" as const, price: "Rp 199.000", link: "#" },
        ],
        position: { top: "28%", left: "58%" },
      },
      {
        name: "Mini Skirt",
        platforms: [
          { platform: "tokopedia" as const, price: "Rp 160.000", link: "#" },
        ],
        position: { top: "65%", left: "46%" },
      },
    ],
  },
  {
    id: "7",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752313/fashbrew/my_dress_uafra2.jpg",
    title: "Sporty On-the-Go",
    description: "Athleisure outfit for moving in style.",
    mood: ["sporty", "daily"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "Athletic Crop Top",
        platforms: [
          { platform: "tiktok" as const, price: "Rp 145.000", link: "#" },
        ],
        position: { top: "18%", left: "55%" },
      },
      {
        name: "Running Leggings",
        platforms: [
          { platform: "shopee" as const, price: "Rp 220.000", link: "#" },
        ],
        position: { top: "75%", left: "48%" },
      },
    ],
  },
  {
    id: "8",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752313/fashbrew/my_dress_by_lsecjx.jpg",
    title: "Fall Neutrals",
    description: "Muted tones and cozy layers for autumn vibes.",
    mood: ["autumn", "neutral"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "Beige Trench Coat",
        platforms: [
          { platform: "tokopedia" as const, price: "Rp 365.000", link: "#" },
        ],
        position: { top: "35%", left: "52%" },
      },
      {
        name: "Knit Scarf",
        platforms: [
          { platform: "shopee" as const, price: "Rp 90.000", link: "#" },
        ],
        position: { top: "20%", left: "45%" },
      },
    ],
  },
];

export default function LookbookPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredOOTDs = ootdData.filter(
    (ootd) => activeFilter === "all" || ootd.mood.includes(activeFilter)
  );

  const handleFilterChange = (moodId: string) => {
    setActiveFilter(moodId);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="px-4 py-8 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-4 leading-tight">
          Today's Style
          <span className="block text-lg font-light text-neutral-600 mt-2">
            Curated looks from fashion's most inspiring voices
          </span>
        </h2>
      </section>

      <MoodFilter onFilterChange={handleFilterChange} />

      {/* OOTD Grid */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredOOTDs.map((ootd) => (
            <OOTDCard
              key={ootd.id}
              mood={ootd.mood}
              id={ootd.id}
              image={ootd.image}
              title={ootd.title}
              description={ootd.description}
              products={ootd.products}
              influencer={ootd.influencer}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-neutral-900 text-white text-sm font-light rounded-full hover:bg-neutral-800 transition-colors">
            Discover More Looks
          </button>
        </div>
      </main>

      {/* Footer */}
      <CoffeeFooter />
    </div>
  );
}
