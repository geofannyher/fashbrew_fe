import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ExternalLink } from "lucide-react";

interface Product {
  name: string;
  image: string;
  links: {
    tokopedia?: string;
    shopee?: string;
    tiktok?: string;
  };
}

interface Outfit {
  id: number;
  image: string;
  style: string;
  description: string;
  products: Product[];
}

interface OOTDDetailPopupProps {
  outfit: Outfit;
  onClose: () => void;
}

/**
 * OOTDDetailPopup Component
 *
 * Interactive popup for displaying detailed OOTD information with affiliate links.
 * Features:
 * - Responsive layout (image left, details right on desktop)
 * - Mobile-friendly stacked layout
 * - Platform-specific icons for affiliate links
 * - Smooth animations and transitions
 *
 * Props:
 * - outfit: Complete outfit data including products and affiliate links
 * - onClose: Callback function to close the popup
 */
const OOTDDetailPopup = ({ outfit, onClose }: OOTDDetailPopupProps) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "tokopedia":
        return "🟢"; // Green circle for Tokopedia
      case "shopee":
        return "🟠"; // Orange circle for Shopee
      case "tiktok":
        return "⚫"; // Black circle for TikTok
      default:
        return "🔗";
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case "tokopedia":
        return "Tokopedia";
      case "shopee":
        return "Shopee";
      case "tiktok":
        return "TikTok Shop";
      default:
        return platform;
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] max-h-[800px] p-0 overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Image */}
          <div className="md:w-1/2 h-64 md:h-full relative">
            <img
              src={outfit.image}
              alt={outfit.style}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden">
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-playfair text-xl font-bold">
                  {outfit.style}
                </h3>
                <p className="text-sm opacity-90">{outfit.description}</p>
              </div>
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="md:w-1/2 p-6 overflow-y-auto">
            <DialogHeader className="hidden md:block mb-6">
              <DialogTitle className="font-playfair text-2xl font-bold text-gray-900">
                {outfit.style}
              </DialogTitle>
              <p className="text-gray-600 font-inter mt-2">
                {outfit.description}
              </p>
            </DialogHeader>

            <div className="space-y-6">
              <h4 className="font-inter text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                Produk dalam OOTD ini
              </h4>

              {outfit.products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-inter font-medium text-gray-900 mb-3">
                        {product.name}
                      </h5>

                      <div className="space-y-2">
                        {Object.entries(product.links).map(
                          ([platform, url]) => (
                            <a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-gray-700 hover:text-cafe-600 transition-colors duration-200 group"
                            >
                              <span className="text-base">
                                {getPlatformIcon(platform)}
                              </span>
                              <span className="font-inter">
                                {getPlatformName(platform)}
                              </span>
                              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {outfit.products.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p className="font-inter">Produk sedang diperbarui</p>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 font-inter text-center">
                💡 Klik link di atas untuk mendapatkan produk yang sama
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OOTDDetailPopup;
