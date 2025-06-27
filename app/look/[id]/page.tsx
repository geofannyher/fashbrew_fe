"use client";

import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ProductList from "../../lookbook/components/ProductList";
import ProductModal from "../../lookbook/components/ProductModal";

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
  image: string;
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
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/outfit_today_ltfduo.jpg",
    title: "Effortless Weekend Layers",
    description:
      "Blazer oversized dan celana tailored untuk tampilan kasual elegan.",
    influencer: { name: "Emma Chen", handle: "@emmastyle" },
    products: [
      {
        id: "p1",
        name: "Oversized Blazer",
        price: "Rp 299.000",
        image:
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80",
        description: "Blazer oversized berbahan wol dengan potongan relaxed.",
        platforms: [
          { platform: "shopee", link: "#" },
          { platform: "tokopedia", link: "#" },
        ],
      },
      {
        id: "p2",
        name: "Wide-leg Trousers",
        price: "Rp 189.000",
        image:
          "https://images.unsplash.com/photo-1506629905851-6d4457aa2fe4?auto=format&fit=crop&w=500&q=80",
        description: "Celana high-waist dengan bahan crepe premium.",
        platforms: [
          { platform: "tokopedia", link: "#" },
          { platform: "tiktok", link: "#" },
        ],
      },
    ],
  },
  "2": {
    id: "2",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/one_set_maezula_pinvul.jpg",
    title: "Urban Monochrome",
    description: "Tampilan abu-abu modern untuk city vibes.",
    influencer: { name: "Liam Park", handle: "@liamstreet" },
    products: [
      {
        id: "p3",
        name: "Grey Hoodie",
        price: "Rp 159.000",
        image:
          "https://images.unsplash.com/photo-1602810317009-d76527da3d46?auto=format&fit=crop&w=500&q=80",
        description: "Hoodie abu polos berbahan fleece lembut.",
        platforms: [{ platform: "shopee", link: "#" }],
      },
      {
        id: "p4",
        name: "Black Slim Pants",
        price: "Rp 219.000",
        image:
          "https://images.unsplash.com/photo-1580894894519-ec6abfd8b18f?auto=format&fit=crop&w=500&q=80",
        description: "Celana hitam slim fit untuk gaya minimalis.",
        platforms: [{ platform: "tokopedia", link: "#" }],
      },
    ],
  },
  "3": {
    id: "3",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/caption_in_this_song_tsletd.jpg",
    title: "Vintage Parisian",
    description: "Gaya vintage ala Paris tahun 60-an.",
    influencer: { name: "Chloe Moret", handle: "@vintageparis" },
    products: [
      {
        id: "p5",
        name: "Polkadot Dress",
        price: "Rp 249.000",
        image:
          "https://images.unsplash.com/photo-1614289826380-3018be4e9d6c?auto=format&fit=crop&w=500&q=80",
        description: "Gaun polkadot klasik dengan potongan feminin.",
        platforms: [
          { platform: "shopee", link: "#" },
          { platform: "tiktok", link: "#" },
        ],
      },
      {
        id: "p6",
        name: "Beret Hat",
        price: "Rp 89.000",
        image:
          "https://images.unsplash.com/photo-1600185365483-26d625f38526?auto=format&fit=crop&w=500&q=80",
        description: "Topi baret klasik untuk melengkapi look vintage-mu.",
        platforms: [{ platform: "tokopedia", link: "#" }],
      },
    ],
  },
  "4": {
    id: "4",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/neon_outfit_ootd_ootdfashion_ootdneon_neon_coloroutfit_outfit_jhml0c.jpg",
    title: "Sporty Street",
    description: "Kombinasi athleisure dan streetwear yang santai.",
    influencer: { name: "Rio Santoso", handle: "@riodripp" },
    products: [
      {
        id: "p7",
        name: "Windbreaker Jacket",
        price: "Rp 179.000",
        image:
          "https://images.unsplash.com/photo-1593032457866-17ce1c2d153d?auto=format&fit=crop&w=500&q=80",
        description: "Jaket windbreaker ringan, tahan angin dan stylish.",
        platforms: [{ platform: "tiktok", link: "#" }],
      },
    ],
  },
  "5": {
    id: "5",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752063/fashbrew/take_your_coffee_%EF%B8%8F_ttmkeh.jpg",
    title: "Summer Breeze",
    description: "Pakaian musim panas yang ringan dan menyegarkan.",
    influencer: { name: "Ayu Wulandari", handle: "@ayuwstyle" },
    products: [
      {
        id: "p8",
        name: "Linen Shirt",
        price: "Rp 199.000",
        image:
          "https://images.unsplash.com/photo-1602810317008-6077bd35c845?auto=format&fit=crop&w=500&q=80",
        description: "Kemeja linen putih longgar untuk udara tropis.",
        platforms: [{ platform: "shopee", link: "#" }],
      },
    ],
  },
  "6": {
    id: "6",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752063/fashbrew/take_your_coffee_%EF%B8%8F_1_cgxt4b.jpg",
    title: "Bold and Black",
    description: "Semua serba hitam untuk gaya edgy dan tegas.",
    influencer: { name: "Nathan Lie", handle: "@darkbydefault" },
    products: [
      {
        id: "p9",
        name: "Black Turtleneck",
        price: "Rp 159.000",
        image:
          "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=500&q=80",
        description: "Turtleneck hitam slim fit yang klasik.",
        platforms: [{ platform: "tokopedia", link: "#" }],
      },
    ],
  },
  "7": {
    id: "7",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752313/fashbrew/my_dress_uafra2.jpg",
    title: "Minimal Tan",
    description: "Warna nude dan earth tone untuk nuansa bersih.",
    influencer: { name: "Dina Zhafira", handle: "@dinanudes" },
    products: [
      {
        id: "p10",
        name: "Tan Blouse",
        price: "Rp 189.000",
        image:
          "https://images.unsplash.com/photo-1556906781-9dd9d8e5a2c5?auto=format&fit=crop&w=500&q=80",
        description: "Blus warna tan elegan dengan detail lengan puff.",
        platforms: [
          { platform: "shopee", link: "#" },
          { platform: "tiktok", link: "#" },
        ],
      },
    ],
  },
  "8": {
    id: "8",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752313/fashbrew/my_dress_by_lsecjx.jpg",
    title: "Weekend Denim",
    description: "Casual denim for everyday weekend fun.",
    influencer: { name: "Kevin Lau", handle: "@kevindress" },
    products: [
      {
        id: "p11",
        name: "Denim Jacket",
        price: "Rp 299.000",
        image:
          "https://images.unsplash.com/photo-1551739440-62dfc2f7dcb2?auto=format&fit=crop&w=500&q=80",
        description: "Jaket denim biru klasik dengan aksen washed.",
        platforms: [{ platform: "tokopedia", link: "#" }],
      },
    ],
  },
  "9": {
    id: "9",
    image:
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69b?auto=format&fit=crop&w=1000&q=80",
    title: "Layered Neutrals",
    description: "Layering ringan dengan palet warna netral.",
    influencer: { name: "Rara Kamila", handle: "@raralayers" },
    products: [
      {
        id: "p12",
        name: "Long Cardigan",
        price: "Rp 229.000",
        image:
          "https://images.unsplash.com/photo-1614289828004-b3cf18caa828?auto=format&fit=crop&w=500&q=80",
        description: "Cardigan panjang warna krem dengan bahan halus.",
        platforms: [{ platform: "shopee", link: "#" }],
      },
    ],
  },
  "10": {
    id: "10",
    image:
      "https://images.unsplash.com/photo-1550966871-3ed3f4f10784?auto=format&fit=crop&w=1000&q=80",
    title: "Office Smart Casual",
    description: "Tampilan semi-formal untuk ke kantor.",
    influencer: { name: "Rico Hartanto", handle: "@ricoformal" },
    products: [
      {
        id: "p13",
        name: "Navy Blazer",
        price: "Rp 349.000",
        image:
          "https://images.unsplash.com/photo-1589571894960-20bbe2828d0c?auto=format&fit=crop&w=500&q=80",
        description: "Blazer navy formal dengan potongan modern.",
        platforms: [{ platform: "tokopedia", link: "#" }],
      },
    ],
  },
};

interface Props {
  params: {
    id: string;
  };
}

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
            <div className="aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden mb-6">
              <img
                src={ootd.image}
                alt={ootd.title}
                className="w-full h-full object-cover"
              />
            </div>

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

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}
