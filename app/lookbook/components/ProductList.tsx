import React from "react";

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

interface Props {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const platformLabels: Record<string, string> = {
  shopee: "Shopee",
  tokopedia: "Tokopedia",
  tiktok: "TikTok",
};

const platformColors: Record<string, string> = {
  shopee: "bg-orange-500",
  tokopedia: "bg-green-500",
  tiktok: "bg-black",
};

export default function ProductList({ products, onProductClick }: Props) {
  return (
    <div className="space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition cursor-pointer"
          onClick={() => onProductClick(product)}
        >
          <div className="flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <h3 className="text-base font-medium text-neutral-900">
                {product.name}
              </h3>
              <p className="text-sm text-neutral-500">{product.price}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.platforms.map((p, idx) => (
                  <a
                    key={idx}
                    href={p.link}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-xs text-neutral-500 hover:underline"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        platformColors[p.platform]
                      }`}
                    />
                    {platformLabels[p.platform]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
