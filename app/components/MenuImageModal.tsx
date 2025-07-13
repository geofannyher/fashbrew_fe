import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface MenuImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

/**
 * MenuImageModal Component
 *
 * Interactive modal for viewing menu images with zoom and pan gestures.
 * Features:
 * - Zoom in/out with mouse wheel or pinch gestures
 * - Pan/drag functionality when zoomed
 * - Double click to zoom
 * - Smooth animations and transitions
 * - Mobile-friendly touch support
 */
const MenuImageModal = ({ imageUrl, onClose }: MenuImageModalProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset position when scale changes
  useEffect(() => {
    if (scale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [scale]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(scale + delta, 1), 4);
    setScale(newScale);
  };

  const handleDoubleClick = () => {
    if (scale === 1) {
      setScale(2);
    } else {
      setScale(1);
      setPosition({ x: 0, y: 0 });
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
        y: e.clientY - lastPosition.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && scale > 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setLastPosition({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging && scale > 1) {
      e.preventDefault();
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - lastPosition.x,
        y: touch.clientY - lastPosition.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Zoom controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
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
          onClick={() => {
            setScale(1);
            setPosition({ x: 0, y: 0 });
          }}
          className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full hover:bg-white/30 transition-colors duration-200 text-sm font-medium"
        >
          Reset
        </button>
      </div>

      {/* Zoom indicator */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm">
        {Math.round(scale * 100)}%
      </div>

      {/* Image container */}
      <div
        ref={containerRef}
        className="relative max-w-full max-h-full overflow-hidden cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
        }}
      >
        <img
          ref={imageRef}
          src={imageUrl}
          alt="Menu item"
          className="max-w-full max-h-[90vh] object-contain transition-transform duration-200 select-none"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${
              position.y / scale
            }px)`,
            transformOrigin: "center center",
          }}
          onDoubleClick={handleDoubleClick}
          draggable={false}
        />
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-lg text-sm max-w-xs">
        <p className="mb-1">
          💡 <strong>Tips:</strong>
        </p>
        <p>• Double click untuk zoom</p>
        <p>• Scroll wheel untuk zoom in/out</p>
        <p>• Drag untuk menggeser gambar</p>
      </div>
    </div>
  );
};

export default MenuImageModal;
