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
import { platform } from "os";

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
  platforms: { platform: string; link: string }[];
}

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterPrice, setFilterPrice] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set<number>());
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  // Dummy data produk affiliate
  const products: Product[] = [
    {
      id: 1,
      name: "Kemeja Putih Lengan Panjang",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 200000,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e3d67e8ff042449e9e7fb2f71f1a55a2~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBke9fW9/" },
      ],
    },
    {
      id: 2,
      name: "Tube Buttons Tanktop",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 129000,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/a500c2cf35934f259965dcd015943a1b~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkdjKe5/" },
        { platform: "shopee", link: "https://s.shopee.co.id/2VgZsBar2b" },
      ],
    },
    {
      id: 3,
      name: "Gouw Pants",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 118000,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-23010-p2merdrn7ymv34.webp",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkefKT6/" },
        { platform: "shopee", link: "https://s.shopee.co.id/z8J9MP6g" },
      ],
    },
    {
      id: 4,
      name: "Tank Top Kulit",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 37000,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lwy37210ixy3c5.webp",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkR2sry/" },
        { platform: "shopee", link: "https://s.shopee.co.id/9KWnQa6kPk" },
      ],
    },
    {
      id: 5,
      name: "Kit Blazer",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 109000,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/95d71dfefa6549b38752b3b67cb54e60~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkdy3gn" },
        { platform: "shopee", link: "https://s.shopee.co.id/9pT41M4522" },
      ],
    },
    {
      id: 6,
      name: "Evie Top",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 159000,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e0c13971d8f7494383ffd85b4cd8ce92~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkRXtrT/" },
      ],
    },
    {
      id: 7,
      name: "Jeha Kulot",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 199000,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/7fa139c3731b4113b2c10081fac4dbf2~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkRNgj5/" },
        { platform: "shopee", link: "https://s.shopee.co.id/6fW8qs2UmS" },
      ],
    },
    {
      id: 8,
      name: "Kacamata Hitam",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 9900,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2024/6/30/d2124e6b-aee2-4ab2-80c7-e621af3a7ea7.jpg~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBk8e4j8/" },
      ],
    },
    {
      id: 9,
      name: "Vest Turtleneck",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 70900,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c1c7ae27a3a04590a1e12dbd9f7a5d81~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSBkRce5F/" },
        { platform: "shopee", link: "https://s.shopee.co.id/20kJLAkb0W" },
      ],
    },
    {
      id: 10,
      name: "Rok Tule Midi",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 189000,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/868fb9658fd24c5c9e77605810c6c39e~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSB5Pm5Ga/ " },
      ],
    },
    {
      id: 11,
      name: "Lessa Lexia Bag",
      description:
        "Bluetooth earbuds dengan peredam bising dan baterai tahan 8 jam",
      price: 89500,
      rating: 4.5,
      reviewCount: 320,
      category: "Fashion",
      tags: ["audio", "wireless", "gadget"],
      image:
        "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/5d3e9f13257f424293b52df63782df97~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my2&from=1826719393",
      affiliateLink: "https://example.com/affiliate/earbuds-x10",
      commission: 10,
      clicks: 415,
      conversions: 48,
      lastUpdated: "2025-06-28",
      featured: true,
      platforms: [
        { platform: "tiktok", link: "https://vt.tokopedia.com/t/ZSB5514t8/" },
      ],
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
              {/* {product.featured && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </span>
                </div>
              )} */}

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
                  {/* {product.originalPrice && (
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
                  )} */}

                  {/* Rating on Image */}
                  {/* <div className="absolute bottom-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">
                        {product.rating}
                      </span>
                    </div>
                  </div> */}
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

                  <button
                    onClick={() => openModal(product)}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2.5 px-4 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
                  >
                    <span>Shop Now</span>
                    <ExternalLink
                      size={16}
                      className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                    />
                  </button>
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
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  Pilih Platform
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Pilih platform untuk membeli{" "}
                <span className="font-medium">{selectedProduct.name}</span>
              </p>
            </div>

            {/* Platform Options */}
            <div className="p-6">
              <div className="space-y-3">
                {selectedProduct.platforms.map((platform) => (
                  <button
                    key={platform.platform}
                    className="w-full group relative overflow-hidden bg-gradient-to-r hover:shadow-lg transition-all duration-200 rounded-xl border-2 border-gray-100 hover:border-transparent"
                    onClick={() => {
                      // Buka link platform langsung (misalnya TikTok Shop)
                      window.open(platform.link, "_blank"); // buka di tab baru

                      // Jika ingin buka di tab yang sama, gunakan:
                      // window.location.href = platform.link;
                    }}
                    data-platform={platform.platform}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        platform.platform === "tiktok"
                          ? "from-black to-gray-800"
                          : platform.platform === "shopee"
                          ? "from-orange-500 to-red-500"
                          : "from-green-500 to-green-600"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                    />
                    <div className="relative flex items-center space-x-4 p-4 group-hover:text-white transition-colors">
                      <div className="text-2xl">
                        {platform.platform === "tiktok"
                          ? "🎵"
                          : platform.platform === "shopee"
                          ? "🛍️"
                          : "🛒"}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-lg text-black hover:text-white">
                          {platform.platform}
                        </div>
                        {/* <div className="text-sm opacity-75 group-hover:opacity-90">
                          {selectedProduct.description}
                        </div> */}
                      </div>
                      <div className="text-gray-400 group-hover:text-white/80">
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Product Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-amber-600 font-bold">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(selectedProduct.price)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <button
                className="w-full text-center text-gray-500 hover:text-gray-700 transition-colors py-2 text-sm"
                onClick={closeModal}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
