import { useState } from "react";
import { Sparkles, ChefHat, Clock, ArrowRight, X } from "lucide-react";
import { Button } from "./ui/button";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isNew?: boolean;
  category: string;
}

interface MenuHighlightProps {
  className?: string;
}

// Sample new menu items - ganti dengan data menu baru yang sebenarnya
const newMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Matcha Late",
    description: "Espresso dengan susu creamy dan brown sugar syrup",
    price: "55K",
    image:
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1753946733/fashbrew/IMG_9317_1_j9qpgd.jpg",
    isNew: true,
    category: "Coffee",
  },
];

const MenuHighlight = ({ className = "" }: MenuHighlightProps) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % newMenuItems.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + newMenuItems.length) % newMenuItems.length
    );
  };

  const currentItem = newMenuItems[currentIndex];

  return (
    <>
      {/* Desktop Version - Large Card */}
      <div className={`hidden lg:block`}>
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20 mx-auto w-[30rem]">
          {/* Main Image */}
          <div className="relative overflow-hidden">
            <img
              src={currentItem.image}
              alt={currentItem.name}
              className="object-cover transition-transform duration-700 hover:scale-105 bg-red-50 w-full md:h-[30rem]"
            />
            {currentItem.isNew && (
              <div className="absolute top-6 left-6 bg-red-500 text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                NEW Menu
              </div>
            )}

            {/* Navigation Arrows */}
            {newMenuItems.length === 1 ? null : (
              <>
                <button
                  onClick={prevItem}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={nextItem}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Category Badge */}
            {/* <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-gray-800">
                  {currentItem.category}
                </span>
              </div>
            </div> */}
          </div>

          {/* Content */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl">
            <h4 className="font-bold text-2xl text-gray-800 mb-4 leading-tight">
              {currentItem.name}
            </h4>

            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-amber-600">
                {currentItem.price}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Large Card */}
      <div className="lg:hidden mx-4 mb-8">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/20">
          {/* Main Image */}
          <div className="relative overflow-hidden">
            <img
              src={currentItem.image}
              alt={currentItem.name}
              className="object-cover transition-transform duration-700 hover:scale-105 bg-red-50 w-full md:h-[30rem]"
            />
            {currentItem.isNew && (
              <div className="absolute top-6 left-6 bg-red-500 text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                NEW Menu
              </div>
            )}

            {/* Navigation Arrows */}
            {newMenuItems.length === 1 ? null : (
              <>
                <button
                  onClick={prevItem}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={nextItem}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Category Badge */}
            {/* <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-gray-800">
                  {currentItem.category}
                </span>
              </div>
            </div> */}
          </div>

          {/* Content */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl">
            <h4 className="font-bold text-2xl text-gray-800 mb-4 leading-tight">
              {currentItem.name}
            </h4>

            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-amber-600">
                {currentItem.price}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Item Detail */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              {selectedItem.isNew && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-bold">
                  NEW ITEM
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <ChefHat className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-gray-600">
                  {selectedItem.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {selectedItem.name}
              </h3>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-600">
                  {selectedItem.price}
                </span>
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl px-6">
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuHighlight;
