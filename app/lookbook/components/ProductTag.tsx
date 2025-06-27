import React from "react";

type PlatformType = "shopee" | "tokopedia" | "tiktok";
interface ProductTagProps {
  product: {
    name: string;
    platforms: {
      platform: PlatformType;
      price: string;
      link: string;
    }[];
  };
  position: {
    top: string;
    left: string;
  };
  isVisible: boolean;
}

const ProductTag = ({ product, position, isVisible }: ProductTagProps) => {
  const platformColors = {
    shopee: "bg-orange-500",
    tokopedia: "bg-green-500",
    tiktok: "bg-black",
  };

  const platformLabels = {
    shopee: "Shopee",
    tokopedia: "Tokopedia",
    tiktok: "TikTok Shop",
  };

  if (!isVisible) return null;

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ top: position.top, left: position.left }}
    >
      {/* Tag dot */}
      <div className="relative">
        <div className="w-3 h-3 bg-white rounded-full border-2 border-neutral-900 animate-pulse"></div>

        {/* Hover card */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none hover:pointer-events-auto">
          <div className="bg-white p-3 rounded-lg shadow-lg border border-neutral-200 min-w-[180px]">
            <div className="text-xs font-medium text-neutral-900 mb-1">
              {product.name}
            </div>
            <div className="text-xs text-neutral-600 mb-2">
              {product.platforms[0].price}
            </div>
            <a
              href={product.platforms[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-1 px-2 py-1 rounded text-xs text-white
                ${
                  platformColors[product.platforms[0].platform]
                } hover:opacity-90 transition-opacity
              `}
            >
              Shop on {platformLabels[product.platforms[0].platform]}
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTag;
