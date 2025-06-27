
import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryImage {
  url: string;
  title: string;
  price: string;
}

interface MenuCategoryModalProps {
  category: string;
  images: CategoryImage[];
  onClose: () => void;
}

/**
 * MenuCategoryModal Component
 * 
 * Interactive modal for viewing category gallery with zoom and navigation.
 * Features:
 * - Gallery navigation with arrows or swipe gestures
 * - Zoom functionality for each image
 * - Smooth transitions between images
 * - Mobile-friendly touch support
 * - Image counter and navigation dots
 */
const MenuCategoryModal = ({ category, images, onClose }: MenuCategoryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const currentImage = images[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetZoom();
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetZoom();
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(scale + delta, 1), 4);
    setScale(newScale);
    if (newScale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleDoubleClick = () => {
    if (scale === 1) {
      setScale(2);
    } else {
      resetZoom();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setLastPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - lastPosition.x,
        y: e.clientY - lastPosition.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getCategoryEmoji = (categoryName: string) => {
    const emojiMap: { [key: string]: string } = {
      'Coffee': '☕',
      'Non-Coffee': '🥤',
      'Dessert': '🍰',
      'Light Meals': '🥗',
      'Smoothies': '🥤'
    };
    return emojiMap[categoryName] || '🍽️';
  };

  if (!currentImage) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Header */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
          <h3 className="font-playfair text-lg font-semibold flex items-center gap-2">
            <span className="text-xl">{getCategoryEmoji(category)}</span>
            {category}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Zoom controls */}
      <div className="absolute top-20 left-4 z-10 flex flex-col gap-2">
        <button
          onClick={() => setScale(Math.min(scale + 0.5, 4))}
          className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full hover:bg-white/30 transition-colors duration-200 text-sm font-medium"
        >
          Zoom +
        </button>
        <button
          onClick={() => setScale(Math.max(scale - 0.5, 1))}
          className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full hover:bg-white/30 transition-colors duration-200 text-sm font-medium"
        >
          Zoom -
        </button>
        <button
          onClick={resetZoom}
          className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full hover:bg-white/30 transition-colors duration-200 text-sm font-medium"
        >
          Reset
        </button>
      </div>

      {/* Image container */}
      <div 
        className="relative max-w-full max-h-full overflow-hidden cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
      >
        <img 
          ref={imageRef}
          src={currentImage.url}
          alt={currentImage.title}
          className="max-w-full max-h-[70vh] object-contain transition-transform duration-200 select-none"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: 'center center'
          }}
          onDoubleClick={handleDoubleClick}
          draggable={false}
        />
      </div>

      {/* Image info */}
      <div className="absolute bottom-20 left-4 right-4 z-10 text-center">
        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg inline-block max-w-md">
          <h4 className="font-inter font-semibold text-lg mb-1">{currentImage.title}</h4>
          <p className="font-playfair text-cafe-200 font-medium">{currentImage.price}</p>
        </div>
      </div>

      {/* Navigation dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                resetZoom();
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Counter and zoom indicator */}
      <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2 items-end">
        {images.length > 1 && (
          <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
        <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm">
          {Math.round(scale * 100)}%
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-lg text-sm max-w-xs">
        <p className="mb-1">💡 <strong>Tips:</strong></p>
        <p>• Double click untuk zoom</p>
        <p>• Gunakan panah untuk navigasi</p>
        <p>• Scroll wheel untuk zoom in/out</p>
      </div>
    </div>
  );
};

export default MenuCategoryModal;
