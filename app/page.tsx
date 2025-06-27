"use client";

import { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import fetcher from "./lib/fetcher";
import {
  Clock,
  Coffee,
  Filter,
  Heart,
  MapPin,
  Search,
  Share2,
  Star,
} from "lucide-react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  const dummyCafes = [
    {
      id: 1,
      name: "Kopi Nako",
      location: "Jakarta Selatan",
      rating: 4.5,
      category: ["nugas", "nongkrong"],
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      openHour: "08:00 - 22:00",
      reviews: 142,
      price: "20.000 - 30.000",
    },
  ];

  // const { data, error, isLoading } = useSWR(
  //   "http://localhost:3500/caffe/getall",
  //   fetcher
  // );
  // const datas = data?.data;
  // console.log(data);

  const toggleFavorite = (cafeId: any) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(cafeId)) {
      newFavorites.delete(cafeId);
    } else {
      newFavorites.add(cafeId);
    }
    setFavorites(newFavorites);
  };

  const handleShare = (cafe: any) => {
    const shareUrl = `${window.location.origin}/cafe/${cafe.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`;

    const shareData = {
      title: `${cafe.name} - Cafe Hits di Jember`,
      text: "Lihat cafe keren ini!",
      url: shareUrl,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Berhasil dibagikan!"))
        .catch((error) => console.error("Gagal membagikan:", error));
    } else {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => alert("Link disalin ke clipboard!"))
        .catch(() => alert("Gagal menyalin link."));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
              Coffee Spot
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing cafes around you. From cozy study spots to trendy
            hangout places.
          </p>

          {/* Enhanced Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search cafes, locations, or vibes..."
                className="w-full pl-12 pr-16 py-4 rounded-2xl border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-lg bg-white"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
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
            {/* {datas && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-6 z-40">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                      Location
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {uniqueLocations.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => setFilterLocation(loc)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                            filterLocation === loc
                              ? "bg-amber-500 text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-amber-100"
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                      Category
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {uniqueCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setFilterCategory(cat)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                            filterCategory === cat
                              ? "bg-orange-500 text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        {/* <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {filteredCafes.length} Cafes Found
            </h3>
            <p className="text-gray-600">
              {searchTerm && `Results for "${searchTerm}"`}
              {filterLocation !== "All" && ` in ${filterLocation}`}
              {filterCategory !== "All" && ` • ${filterCategory}`}
            </p>
          </div>

          <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option>Sort by Rating</option>
            <option>Sort by Distance</option>
            <option>Sort by Reviews</option>
          </select>
        </div> */}

        {/* Cafe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(dummyCafes) ? (
            dummyCafes?.map((cafe: any) => (
              <div key={cafe.id} className="group relative cursor-pointer">
                {/* Tombol-tombol di luar Link */}
                <div className="absolute top-3 right-3 flex space-x-2 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(cafe.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                      favorites.has(cafe.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/80 text-gray-600 hover:bg-white"
                    }`}
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        favorites.has(cafe.id) ? "fill-current" : ""
                      }`}
                    />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(cafe); // Pastikan fungsi ini ada
                    }}
                    className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-white transition-all backdrop-blur-sm"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Bagian yang bisa diklik ke detail */}
                <Link href={`/cafe/${cafe.name}`}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={cafe.image}
                        alt={cafe.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Price Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                          Rp.{cafe.price}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {cafe.name}
                        </h3>
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-medium text-gray-900">5</span>
                        </div>
                      </div>

                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">Jember</span>
                      </div>

                      <div className="flex items-center text-gray-600 mb-4">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">09:00 - 18:00</span>
                      </div>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-1.5">
                        {dummyCafes[0].category.map((cat: any) => (
                          <span
                            key={cat}
                            className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-medium"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Data tidak tersedia</p>
          )}
          {/* // : isLoading ? ( // <p>Loading...</p>
          // ) : error ? ( // <p>Error loading data</p>
          // ) : ( // <p>Data tidak tersedia</p>
          // ) */}
        </div>

        {/* No Results */}
        {dummyCafes?.length === 0 && (
          <div className="text-center py-12">
            <Coffee className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No cafes found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterLocation("All");
                setFilterCategory("All");
              }}
              className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center space-x-3 mb-4 md:mb-0 hover:opacity-80 transition-opacity cursor-pointer group"
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-xl group-hover:shadow-lg transition-shadow">
                <Coffee className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                CafeFinder
              </span>
            </button>
            <p className="text-gray-600 text-sm">
              © 2025 CafeFinder. Find your perfect coffee spot.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
