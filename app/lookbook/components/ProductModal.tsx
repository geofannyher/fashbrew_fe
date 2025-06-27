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
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full relative overflow-hidden">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-gray-700 shadow-md flex items-center justify-center hover:bg-gray-100 transition"
        >
          &times;
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            {product.name}
          </h2>
          <p className="text-lg text-green-600 font-medium mb-2">
            {product.price}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.platforms.map((p, idx) => (
              <a
                key={idx}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
              >
                Beli di{" "}
                {p.platform.charAt(0).toUpperCase() + p.platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
