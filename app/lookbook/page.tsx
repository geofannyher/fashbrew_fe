"use client";
import { useState } from "react";
import MoodFilter from "./components/MoodFilter";
import OOTDCard from "./components/OOTDCard";
import CoffeeFooter from "../footer/page";

const ootdData = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616727/fashbrew/OOTD1/take_your_coffee_%EF%B8%8F_5_ubxh20.jpg",
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
        name: "Kemeja Lengan Panjang",
        platforms: [
          {
            platform: "tiktok" as const,
            price: "Rp 206.000",
            link: "https://vt.tokopedia.com/t/ZSBke9fW9/",
          },
        ],
        position: { top: "35%", left: "60%" },
      },
      {
        name: "Gouw Pants",
        platforms: [
          {
            platform: "shopee" as const,
            price: "Rp 112.000",
            link: "https://s.shopee.co.id/z8J9MP6g",
          },
        ],
        position: { top: "85%", left: "50%" },
      },
    ],
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616816/fashbrew/OOTD2/hello_mid_april_fashionphotography_fashionista_fashionoftheday_styleinspiration_6_aqxyt0.jpg",
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
        name: "Kit Blazer",
        platforms: [
          {
            platform: "shopee" as const,
            price: "Rp 96.000",
            link: "https://s.shopee.co.id/9pT41M4522",
          },
        ],
        position: { top: "35%", left: "55%" },
      },
      {
        name: "Gouw Pants",
        platforms: [
          {
            platform: "shopee" as const,
            price: "Rp 112.000",
            link: "https://s.shopee.co.id/z8J9MP6g",
          },
        ],
        position: { top: "70%", left: "48%" },
      },
    ],
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616846/fashbrew/OOTD3/outfit_today_3_pu6gxm.jpg",
    title: "Clean Office Look",
    description: "Sleek and minimal for professional elegance.",
    mood: ["office", "weekday"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "White Evie Top",
        platforms: [
          {
            platform: "tiktok" as const,
            price: "Rp 155.000",
            link: "https://vt.tokopedia.com/t/ZSBkRXtrT",
          },
        ],
        position: { top: "35%", left: "45%" },
      },
      {
        name: "Jeha Kulot",
        platforms: [
          {
            platform: "tiktok" as const,
            price: "Rp 199.000",
            link: "https://vt.tokopedia.com/t/ZSBkRNgj5/",
          },
        ],
        position: { top: "68%", left: "45%" },
      },
    ],
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616872/fashbrew/OOTD4/Do_whatever_makes_you_happiest_._3_z9pthq.jpg",
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
        name: "Vest Turtleneck",
        platforms: [
          {
            platform: "tiktok" as const,
            price: "Rp 70.000",
            link: "https://vt.tokopedia.com/t/ZSBkRce5F/",
          },
        ],
        position: { top: "60%", left: "50%" },
      },
      {
        name: "Kacamata Hitam",
        platforms: [
          {
            platform: "tiktok" as const,
            price: "Rp 9.900",
            link: "https://vt.tokopedia.com/t/ZSBk8e4j8/",
          },
        ],
        position: { top: "42%", left: "46%" },
      },
    ],
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616896/fashbrew/OOTD5/Snapshots_of_spontaneity___%EF%B8%8F_1_mzbk3y.jpg",
    title: "Monochrome Power",
    description: "All-black outfit for maximum impact and elegance.",
    mood: ["edgy", "night"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "Rok Tule Midi",
        platforms: [
          {
            platform: "tiktok" as const,
            price: "Rp 189.000",
            link: "https://vt.tokopedia.com/t/ZSB5Pm5Ga",
          },
        ],
        position: { top: "80%", left: "50%" },
      },
      {
        name: "Lessa Lexia Bag",
        platforms: [
          {
            platform: "shopee" as const,
            price: "Rp 89.500",
            link: "https://vt.tokopedia.com/t/ZSB5514t8/",
          },
        ],
        position: { top: "55%", left: "55%" },
      },
    ],
  },
  {
    id: "6",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751616926/fashbrew/OOTD6/enjoy_5_oshr8z.jpg",
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
        name: "Nancy Top",
        platforms: [
          {
            platform: "shopee" as const,
            price: "Rp 45.000",
            link: "https://s.shopee.co.id/3qBxg8J7GV",
          },
        ],
        position: { top: "60%", left: "40%" },
      },
      {
        name: "Gow Pants",
        platforms: [
          {
            platform: "shopee" as const,
            price: "Rp 118.000",
            link: "https://s.shopee.co.id/6ppZFi6M30",
          },
        ],
        position: { top: "85%", left: "60%" },
      },
    ],
  },
  {
    id: "7",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751617264/fashbrew/OOTD7/the_last_slide_is_a_mess_2_ihr1bf.jpg",
    title: "Sporty On-the-Go",
    description: "Athleisure outfit for moving in style.",
    mood: ["sporty", "daily"],
    influencer: {
      name: "rere amalia",
      handle: "@_rereamalia_",
    },
    products: [
      {
        name: "Tanktop Leather",
        platforms: [
          {
            platform: "tiktok" as const,
            price: "Rp 32.400",
            link: "https://vt.tokopedia.com/t/ZSB55qfGu/",
          },
        ],
        position: { top: "55%", left: "45%" },
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
    <>
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
          {/* <div className="text-center mt-12">
            <button className="px-8 py-3 bg-neutral-900 text-white text-sm font-light rounded-full hover:bg-neutral-800 transition-colors">
              Discover More Looks
            </button>
          </div> */}
        </main>
      </div>
      <CoffeeFooter />
    </>
  );
}
