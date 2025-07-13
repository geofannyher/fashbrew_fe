import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Play, Instagram, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ReviewSection {
  url_review: string;
}

const InfluencerReview = ({ url_review }: ReviewSection) => {
  const influencers = [
    // {
    //   name: "Jessica Tanoesoedibjo",
    //   username: "@jessicatanoe",
    //   quote:
    //     "Coklat matcha-nya beneran bikin balik lagi 😍 Interior nya juga super aesthetic buat foto OOTD!",
    //   avatar:
    //     "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80",
    //   isSpecialCollaboration: true,
    //   videoThumbnail:
    //     "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80",
    //   instagramUrl:
    //     "https://www.instagram.com/reel/DJTpXEFTV25/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    //   hasEmbeddableVideo: true,
    //   videoId: "example1",
    // },
    {
      name: "Rere Amalia",
      username: "@_rereamalia_",
      quote:
        "Kattapa tuh tempatnya nyaman banget, bikin betah berlama-lama. Cocok buat nugas, kerja, atau sekadar healing. Plus, stafnya super ramah dan helpful!",
      avatar:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1750752061/fashbrew/caption_in_this_song_tsletd.jpg",
      isSpecialCollaboration: false,
      videoThumbnail:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751569044/fashbrew/unnamed_wbpmbk.jpg",
      instagramUrl: "https://www.instagram.com/_rereamalia_",
      hasEmbeddableVideo: false,
      videoId: "example2",
    },
  ];

  const handleVideoClick = (influencer: (typeof influencers)[0]) => {
    if (influencer.hasEmbeddableVideo) {
      // For embeddable videos, we could implement a modal with embedded Instagram content
      // For now, we'll redirect to Instagram as embedding requires Instagram's API
      window.open(url_review, "_blank");
    } else {
      // Direct link to Instagram post
      window.open(url_review, "_blank");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Review Rere
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Lihat apa kata rere tentang pengalaman di Kattapa Coffee
          </p>
        </div>

        <div
          className={`${
            influencers.length === 1
              ? "flex justify-center"
              : "grid md:grid-cols-2"
          } gap-8 max-w-6xl mx-auto`}
        >
          {influencers.map((influencer, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={influencer.videoThumbnail}
                  alt={`${influencer.name} review video`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={() => handleVideoClick(influencer)}
                    className="bg-white/90 hover:bg-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Play className="w-8 h-8 text-gray-800 ml-1" />
                  </button>
                </div>
                {/* Instagram indicator */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </div>
                {influencer.isSpecialCollaboration && (
                  <Badge className="absolute top-4 left-4 bg-cafe-600 text-white">
                    Special Collaboration
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={influencer.avatar}
                    alt={influencer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 font-inter">
                      {influencer.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Instagram className="w-4 h-4" />
                      <span className="text-sm">{influencer.username}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleVideoClick(influencer)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    title="Lihat di Instagram"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>

                <blockquote className="text-gray-700 font-inter leading-relaxed max-w-[600px]">
                  {influencer.quote}
                </blockquote>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-cafe-600 font-playfair">
                90+
              </div>
              <div className="text-sm text-gray-600 font-inter">
                Instagram Posts
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cafe-600 font-playfair">
                4.7★
              </div>
              <div className="text-sm text-gray-600 font-inter">
                Google Rating
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cafe-600 font-playfair">
                650+
              </div>
              <div className="text-sm text-gray-600 font-inter">
                Customer Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerReview;
