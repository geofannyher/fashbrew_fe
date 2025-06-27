import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductTag from "./ProductTag";
import { useRouter } from "next/navigation";

type PlatformType = "shopee" | "tokopedia" | "tiktok";

interface Product {
  name: string;
  platforms: {
    platform: PlatformType;
    price: string;
    link: string;
  }[];
  position: {
    top: string;
    left: string;
  };
}

interface OOTDCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  mood: string[];
  products: Product[];
  influencer: {
    name: string;
    handle: string;
  };
}

const OOTDCard = ({
  id,
  image,
  title,
  description,
  products,
  influencer,
}: OOTDCardProps) => {
  const [showTags, setShowTags] = useState(false);
  const [tooltipPositions, setTooltipPositions] = useState<string[]>([]);
  const router = useRouter();

  // Fungsi untuk menghitung posisi tooltip yang tidak tumpang tindih
  const calculateTooltipPosition = (
    index: number,
    productPosition: { top: string; left: string }
  ) => {
    const positions = [
      "bottom",
      "top",
      "right",
      "left",
      "bottom-right",
      "bottom-left",
      "top-right",
      "top-left",
    ];

    // Konversi position ke number untuk kalkulasi
    const topPercent = parseFloat(productPosition.top);
    const leftPercent = parseFloat(productPosition.left);

    // Tentukan posisi optimal berdasarkan lokasi pin
    let optimalPositions = [];

    // Jika pin di bagian atas, prioritaskan tooltip ke bawah
    if (topPercent < 30) {
      optimalPositions = [
        "bottom",
        "bottom-right",
        "bottom-left",
        "right",
        "left",
      ];
    }
    // Jika pin di bagian bawah, prioritaskan tooltip ke atas
    else if (topPercent > 70) {
      optimalPositions = ["top", "top-right", "top-left", "right", "left"];
    }
    // Jika pin di kiri, prioritaskan tooltip ke kanan
    else if (leftPercent < 30) {
      optimalPositions = [
        "right",
        "bottom-right",
        "top-right",
        "bottom",
        "top",
      ];
    }
    // Jika pin di kanan, prioritaskan tooltip ke kiri
    else if (leftPercent > 70) {
      optimalPositions = ["left", "bottom-left", "top-left", "bottom", "top"];
    }
    // Jika pin di tengah, gunakan rotasi berdasarkan index
    else {
      const rotationIndex = index % 4;
      const rotations = [
        ["bottom", "bottom-right", "right"],
        ["right", "top-right", "top"],
        ["top", "top-left", "left"],
        ["left", "bottom-left", "bottom"],
      ];
      optimalPositions = rotations[rotationIndex];
    }

    return optimalPositions[0];
  };

  const getTooltipClasses = (position: string) => {
    const baseClasses =
      "absolute bg-white rounded-lg shadow-xl p-3 min-w-[200px] border z-20";

    switch (position) {
      case "bottom":
        return `${baseClasses} top-8 left-1/2 transform -translate-x-1/2`;
      case "top":
        return `${baseClasses} bottom-8 left-1/2 transform -translate-x-1/2`;
      case "right":
        return `${baseClasses} top-1/2 left-8 transform -translate-y-1/2`;
      case "left":
        return `${baseClasses} top-1/2 right-8 transform -translate-y-1/2`;
      case "bottom-right":
        return `${baseClasses} top-8 left-0`;
      case "bottom-left":
        return `${baseClasses} top-8 right-0`;
      case "top-right":
        return `${baseClasses} bottom-8 left-0`;
      case "top-left":
        return `${baseClasses} bottom-8 right-0`;
      default:
        return `${baseClasses} top-8 left-1/2 transform -translate-x-1/2`;
    }
  };

  const getArrowClasses = (position: string) => {
    const baseArrow = "absolute w-4 h-4 bg-white border rotate-45";

    switch (position) {
      case "bottom":
        return `${baseArrow} -top-2 left-1/2 transform -translate-x-1/2 border-l border-t`;
      case "top":
        return `${baseArrow} -bottom-2 left-1/2 transform -translate-x-1/2 border-r border-b`;
      case "right":
        return `${baseArrow} -left-2 top-1/2 transform -translate-y-1/2 border-l border-b`;
      case "left":
        return `${baseArrow} -right-2 top-1/2 transform -translate-y-1/2 border-r border-t`;
      case "bottom-right":
        return `${baseArrow} -top-2 left-4 border-l border-t`;
      case "bottom-left":
        return `${baseArrow} -top-2 right-4 border-l border-t`;
      case "top-right":
        return `${baseArrow} -bottom-2 left-4 border-r border-b`;
      case "top-left":
        return `${baseArrow} -bottom-2 right-4 border-r border-b`;
      default:
        return `${baseArrow} -top-2 left-1/2 transform -translate-x-1/2 border-l border-t`;
    }
  };

  const handleCardClick = () => {
    router.push(`/look/${id}`);
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered - showing tags");
    setShowTags(true);

    // Kalkulasi posisi tooltip untuk setiap product
    const positions = products.map((product, index) =>
      calculateTooltipPosition(index, product.position)
    );
    setTooltipPositions(positions);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left - hiding tags"); // Debug log
    setShowTags(false);
  };

  return (
    <article className="mb-12 bg-white">
      {/* Image Container */}
      <div
        className="relative group cursor-pointer mb-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <div className="aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Product Tags */}
        {products.map((product, index) => (
          <ProductTag
            key={index}
            product={product}
            position={product.position}
            isVisible={showTags}
          />
        ))}

        {/* Fallback product tags dengan smart positioning */}
        {products.map((product, index) => {
          const tooltipPosition = tooltipPositions[index] || "bottom";

          return (
            <div
              key={`fallback-${index}`}
              className={`absolute z-10 transition-all duration-300 ${
                showTags ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{
                top: product.position.top,
                left: product.position.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Tag Pin */}
              <div className="relative">
                <div className="w-6 h-6 bg-white rounded-full shadow-lg border-2 border-amber-500 flex items-center justify-center hover:scale-110 transition-transform">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                </div>

                {/* Product Info Tooltip dengan posisi dinamis */}
                <div className={getTooltipClasses(tooltipPosition)}>
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    {product.name}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {product.platforms[0].price}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded-full">
                      {product.platforms[0].platform}
                    </span>
                    <a
                      href={product.platforms[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs bg-amber-500 text-white px-3 py-1.5 rounded-full hover:bg-amber-600 transition-colors font-medium"
                    >
                      Shop Now
                    </a>
                  </div>

                  {/* Arrow dengan posisi dinamis */}
                  <div className={getArrowClasses(tooltipPosition)}></div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Tag indicator */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-4 h-4 text-neutral-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
          </div>
        </div>

        {/* View Details Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center pb-6 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-medium text-neutral-900">
              View Details
            </span>
          </div>
        </div>

        {/* Debug indicator */}
        {showTags && (
          <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Tags: ON
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between px-2 h-40">
        {/* Title & Description */}
        <h3 className="text-lg font-light text-neutral-900 mb-1 leading-relaxed line-clamp-1">
          {title}
        </h3>

        <div className="h-20">
          <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Influencer Credit */}
        <div className="flex items-center justify-between bg-white p-4 border-t border-gray-100/60 rounded-b-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm">
              <span className="text-white text-xs font-semibold">
                {influencer.name.charAt(0)}
              </span>
            </div>

            <div className="flex flex-col">
              <div className="text-xs text-neutral-600 font-medium">
                Styled by{" "}
                <a
                  href={`https://instagram.com/${influencer.handle.replace(
                    "@",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-semibold text-neutral-800 hover:text-amber-600 transition-colors duration-200 underline decoration-amber-500/30 hover:decoration-amber-500 underline-offset-2"
                >
                  {influencer.name}
                </a>
              </div>
              <div className="text-xs text-neutral-400 font-medium">
                {influencer.handle}
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("Save look clicked");
            }}
            className="group flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <svg
              className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs font-medium text-neutral-600 group-hover:text-amber-700 transition-colors">
              Save Look
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default OOTDCard;
