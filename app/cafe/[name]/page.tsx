"use client";
// app/cafe/[id]/page.tsx
import AffiliateProducts from "@/app/components/AffiliateProducts";
import CafeHighlights from "@/app/components/CafeHighlights";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import InfluencerReview from "@/app/components/InfluencerReview";
import InstagramGallery from "@/app/components/InstagramGallery";
import LocationSection from "@/app/components/LocationSection";
import ParkingInfo from "@/app/components/ParkingInfo";
import SEOContent from "@/app/components/SEOContent";
import SignatureMenu from "@/app/components/SignatureMenu";
import { notFound, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

interface Caffe {
  id: number;
  name_caffe: string;
  url_map: string;
  istagram: string;
  tagline: string;
  day_operational: string;
  time_operational: string;
  url_img_hero: string;
  url_img_parking: string;
  rekomendation: boolean;
  url_review: string;
  lokasi_lengkap: string;
  biaya_parking_mobil: string;
  biaya_parking_motor: string;
  status_complete: boolean;
  createdAt: string; // bisa juga pakai Date kalau datanya sudah di-convert
  updatedAt: string;
  isdeleted: boolean;
}

export default function CafeDetail({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = use(params); // <- Unwrap promise
  const router = useRouter();

  // State untuk menyimpan data cafe
  const [cafeData, setCafeData] = useState<Caffe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // useEffect untuk menjalankan axios hanya sekali
  // useEffect(() => {
  //   const fetchCafeData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.post(
  //         "http://localhost:3500/caffe/getname",
  //         {
  //           name: decodeURIComponent(name),
  //         }
  //       );
  //       setCafeData(response.data.data);
  //     } catch (err: any) {
  //       console.error("Error fetching cafe data:", err);
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (name) {
  //     fetchCafeData();
  //   }
  // }, [name]); // Dependency array dengan 'name' agar re-fetch jika name berubah

  const dummyCafeData: Caffe = {
    id: 1,
    name_caffe: "Kattapa Coffee",
    url_map: "https://maps.google.com/?q=kopi+kenangan+surabaya",
    istagram: "@kopikenangan.sby",
    tagline: "ForYouKattapista – Karena Kamu Spesial di Hati Kattapa",
    day_operational: "Senin - Minggu",
    time_operational: "10:00 - 23:00 WIB",
    url_img_hero:
      // "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751112911/fashbrew/IMG_6780_c1sxoe.jpg",
      "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751112911/fashbrew/IMG_6780_c1sxoe.jpg",

    url_img_parking:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rekomendation: true,
    url_review:
      "https://www.instagram.com/reel/DMzZ_N9utlX/?utm_source=ig_web_copy_link",
    lokasi_lengkap:
      "Jl. Raya Darmo No. 123, Wonokromo, Surabaya, Jawa Timur 60241",
    biaya_parking_mobil: "Rp 5.000/jam",
    biaya_parking_motor: "Rp 2.000/jam",
    status_complete: true,
    createdAt: "2024-01-15T08:30:00.000Z",
    updatedAt: "2024-01-20T10:15:00.000Z",
    isdeleted: false,
  };
  useEffect(() => {
    // Simulasikan pemanggilan data (dummy)
    setCafeData(dummyCafeData);
    setLoading(false);
  }, []);
  const handleBack = () => {
    router.push("/");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading cafe data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading cafe data</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Jika data tidak ditemukan
  if (!cafeData) {
    return notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="fixed top-[90px] left-4 z-50">
        <button
          onClick={handleBack}
          className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-105 border border-gray-200"
          aria-label="Kembali ke halaman sebelumnya"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <HeroSection
        image={dummyCafeData.url_img_hero}
        name_caffe={dummyCafeData.name_caffe}
        rekomendation={dummyCafeData.rekomendation}
        tagline={dummyCafeData.tagline}
        time_operational={dummyCafeData.time_operational}
      />

      {/* Influencer Reviews */}
      <InfluencerReview url_review={dummyCafeData.url_review} />

      {/* Cafe Highlights */}
      <CafeHighlights />

      {/* Cafe Categories */}
      {/* <CafeCategories /> */}

      {/* Instagram Gallery */}
      <InstagramGallery />

      {/* Signature Menu */}
      <SignatureMenu />

      {/* Affiliate Products */}
      <AffiliateProducts />

      {/* Parking Information */}
      <ParkingInfo />

      {/* Location & Directions */}
      <LocationSection />

      {/* SEO Content */}
      <SEOContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}
