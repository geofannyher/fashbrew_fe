"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Star,
  ExternalLink,
  Heart,
  Share2,
  Tag,
  ShoppingCart,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react";
import CoffeeFooter from "../footer/page";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  tags: string[];
  image: string;
  affiliateLink: string;
  commission: number;
  clicks: number;
  conversions: number;
  lastUpdated: string;
  featured: boolean;
}

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterPrice, setFilterPrice] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set<number>());

  // Dummy data produk affiliate
  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Earbuds X10",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 499000,
      originalPrice: 699000,
      rating: 4.5,
      reviewCount: 320,
      category: "Electronics",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://images.unsplash.com/photo-1585386959984-a415522ad75e?w=400&h=300&fit=crop",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
    },
    {
      id: 2,
      name: "Smart LED Bulb",
      description: "Lampu pintar yang bisa diatur lewat aplikasi dan suara",
      price: 99000,
      originalPrice: 129000,
      rating: 4.7,
      reviewCount: 198,
      category: "Home & Living",
      tags: ["smart home", "lighting"],
      image:
        "https://images.unsplash.com/photo-1599417075305-6c066b8e0b7e?w=400&h=300&fit=crop",
      affiliateLink: "https://example.com/affiliate/smart-bulb",
      commission: 8,
      clicks: 312,
      conversions: 62,
      lastUpdated: "2025-06-28",
      featured: false,
    },
    {
      id: 3,
      name: "Minimalist Analog Watch",
      description: "Jam tangan bergaya minimalis unisex",
      price: 299000,
      originalPrice: 399000,
      rating: 4.2,
      reviewCount: 89,
      category: "Fashion",
      tags: ["watch", "style"],
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=300&fit=crop",
      affiliateLink: "https://example.com/affiliate/minimalist-watch",
      commission: 12,
      clicks: 180,
      conversions: 24,
      lastUpdated: "2025-06-27",
      featured: false,
    },
    {
      id: 4,
      name: "Portable Blender",
      description: "Blender mini USB untuk jus dan smoothies",
      price: 189000,
      originalPrice: 249000,
      rating: 4.4,
      reviewCount: 210,
      category: "Home & Living",
      tags: ["blender", "kitchen", "portable"],
      image:
        "https://images.unsplash.com/photo-1601041371190-5c0087f29dfc?w=400&h=300&fit=crop",
      affiliateLink: "https://example.com/affiliate/portable-blender",
      commission: 10,
      clicks: 220,
      conversions: 38,
      lastUpdated: "2025-06-25",
      featured: false,
    },
    {
      id: 5,
      name: "Gaming Mouse RGB",
      description:
        "Mouse gaming ergonomis dengan lampu RGB dan DPI hingga 7200",
      price: 199000,
      originalPrice: 249000,
      rating: 4.6,
      reviewCount: 540,
      category: "Electronics",
      tags: ["gaming", "mouse", "RGB"],
      image:
        "https://images.unsplash.com/photo-1593642632559-0c8e6676f5c5?w=400&h=300&fit=crop",
      affiliateLink: "https://example.com/affiliate/gaming-mouse",
      commission: 15,
      clicks: 355,
      conversions: 52,
      lastUpdated: "2025-06-26",
      featured: true,
    },
    {
      id: 6,
      name: "Yoga Mat Premium",
      description:
        "Matras yoga anti slip, tebal dan empuk untuk olahraga di rumah",
      price: 149000,
      originalPrice: 179000,
      rating: 4.3,
      reviewCount: 112,
      category: "Sports",
      tags: ["yoga", "fitness", "mat"],
      image:
        "https://images.unsplash.com/photo-1583454110558-ccb9444a8a0e?w=400&h=300&fit=crop",
      affiliateLink: "https://example.com/affiliate/yoga-mat",
      commission: 9,
      clicks: 130,
      conversions: 22,
      lastUpdated: "2025-06-24",
      featured: false,
    },
    {
      id: 7,
      name: "Face Serum Vitamin C",
      description: "Serum wajah untuk mencerahkan dan menghaluskan kulit",
      price: 89000,
      originalPrice: 109000,
      rating: 4.8,
      reviewCount: 620,
      category: "Beauty",
      tags: ["skincare", "serum", "vitamin C"],
      image:
        "https://images.unsplash.com/photo-1612392061783-b8f3aefc8e18?w=400&h=300&fit=crop",
      affiliateLink: "https://example.com/affiliate/vitamin-c-serum",
      commission: 11,
      clicks: 430,
      conversions: 74,
      lastUpdated: "2025-06-26",
      featured: true,
    },
    {
      id: 8,
      name: "RC Toy Car Off-Road",
      description: "Mobil remote control off-road untuk anak dan dewasa",
      price: 259000,
      originalPrice: 299000,
      rating: 4.5,
      reviewCount: 143,
      category: "Toys",
      tags: ["remote control", "toy car"],
      image:
        "https://images.unsplash.com/photo-1616627980124-181d49e3656b?w=400&h=300&fit=crop",
      affiliateLink: "https://example.com/affiliate/rc-toy-car",
      commission: 13,
      clicks: 160,
      conversions: 28,
      lastUpdated: "2025-06-23",
      featured: false,
    },
    {
      id: 9,
      name: "Magnetic Phone Holder Mobil",
      description: "Holder HP mobil kuat dengan magnet dan rotasi 360°",
      price: 69000,
      originalPrice: 89000,
      rating: 4.1,
      reviewCount: 76,
      category: "Automotive",
      tags: ["car accessories", "holder", "magnet"],
      image:
        "https://images.unsplash.com/photo-1619851456320-d2cfbe164a1e?w=400&h=300&fit=crop",
      affiliateLink: "https://example.com/affiliate/magnetic-holder",
      commission: 7,
      clicks: 90,
      conversions: 14,
      lastUpdated: "2025-06-20",
      featured: false,
    },
    {
      id: 10,
      name: "Slim Laptop Backpack",
      description:
        "Tas ransel laptop slim dengan banyak kompartemen dan bahan waterproof",
      price: 179000,
      originalPrice: 229000,
      rating: 4.4,
      reviewCount: 197,
      category: "Fashion",
      tags: ["backpack", "laptop", "anti air"],
      image:
        "https://images.unsplash.com/photo-1523475496153-3d6ccdb021b2?w=400&h=300&fit=crop",
      affiliateLink: "https://example.com/affiliate/laptop-backpack",
      commission: 10,
      clicks: 210,
      conversions: 31,
      lastUpdated: "2025-06-22",
      featured: true,
    },
  ];

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home & Living",
    "Beauty",
    "Sports",
    "Toys",
    "Automotive",
  ];

  const priceRanges = [
    "All",
    "Under 200k",
    "200k - 500k",
    "500k - 1M",
    "Above 1M",
  ];

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleShare = (product: Product) => {
    const shareData = {
      title: `${product.name} - Recommended Product`,
      text: `Check out this amazing product: ${product.description}`,
      url: product.affiliateLink,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Product shared successfully!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard
        .writeText(product.affiliateLink)
        .then(() => alert("Product link copied to clipboard!"))
        .catch(() => alert("Failed to copy link."));
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      filterCategory === "All" || product.category === filterCategory;

    const matchesPrice =
      filterPrice === "All" ||
      (filterPrice === "Under 200k" && product.price < 200000) ||
      (filterPrice === "200k - 500k" &&
        product.price >= 200000 &&
        product.price < 500000) ||
      (filterPrice === "500k - 1M" &&
        product.price >= 500000 &&
        product.price < 1000000) ||
      (filterPrice === "Above 1M" && product.price >= 1000000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "featured":
        return b.featured ? 1 : -1;
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (
          new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        );
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Affiliate Products
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
              Curated for You
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore the best affiliate products across all categories –
            electronics, fashion, home, and more.
          </p>

          {/* Enhanced Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products, brands, or categories..."
                className="w-full pl-12 pr-16 py-4 text-black rounded-2xl border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-lg bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-xl transition-colors ${
                  showFilters
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Filter className="h-5 w-5" />
              </button>
            </div>

            {/* Filter Dropdown */}
            {showFilters && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-6 z-40">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                      Category
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setFilterCategory(category)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                            filterCategory === category
                              ? "bg-amber-500 text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-amber-100"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                      Price Range
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => setFilterPrice(range)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                            filterPrice === range
                              ? "bg-orange-500 text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {sortedProducts.length} Products Found
            </h3>
            <p className="text-gray-600">
              {searchTerm && `Results for "${searchTerm}"`}
              {filterCategory !== "All" && ` in ${filterCategory}`}
              {filterPrice !== "All" && ` • ${filterPrice}`}
            </p>
          </div>

          <select
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured First</option>
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="group relative">
              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex space-x-2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                    favorites.has(product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white/80 text-gray-600 hover:bg-white"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      favorites.has(product.id) ? "fill-current" : ""
                    }`}
                  />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(product);
                  }}
                  className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-white transition-all backdrop-blur-sm"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>

              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </span>
                </div>
              )}

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Image */}
                {/* Image - Made larger and more dominant */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    </div>
                  )}

                  {/* Rating on Image */}
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Minimal Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2">
                    {product.name}
                  </h3>

                  {/* Price - More prominent */}
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xl font-bold text-gray-900">
                      {formatCurrency(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatCurrency(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Single most important tag */}
                  <div className="mb-3">
                    <span className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>

                  {/* Action Button */}

                  <Link
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2.5 px-4 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
                  >
                    <span>Shop Now</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <Tag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterCategory("All");
                setFilterPrice("All");
                setShowFilters(false);
              }}
              className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-12">
        <CoffeeFooter />
      </div>
    </div>
  );
}
