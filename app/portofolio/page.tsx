"use client";
import {
  Instagram,
  Heart,
  MessageCircle,
  Share2,
  Star,
  Users,
  TrendingUp,
  Camera,
  Music,
  Coffee,
  Sparkles,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  Send,
  MapPin,
  InstagramIcon,
  TicketCheckIcon,
} from "lucide-react";
import { ElementType, ReactElement, ReactNode, useState } from "react";

export default function RereAmaliaLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Dummy data for Instagram posts
  const instagramPosts = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/neon_outfit_ootd_ootdfashion_ootdneon_neon_coloroutfit_outfit_jhml0c.jpg",
      likes: 2341,
      comments: 89,
      type: "fashion",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/caption_in_this_song_tsletd.jpg",
      likes: 1987,
      comments: 156,
      type: "food",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752313/fashbrew/my_dress_by_lsecjx.jpg",
      likes: 3456,
      comments: 234,
      type: "lifestyle",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752313/fashbrew/my_dress_uafra2.jpg",
      likes: 2789,
      comments: 178,
      type: "dj",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752063/fashbrew/take_your_coffee_%EF%B8%8F_1_cgxt4b.jpg",
      likes: 2134,
      comments: 123,
      type: "fashion",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752063/fashbrew/take_your_coffee_%EF%B8%8F_ttmkeh.jpg",
      likes: 1876,
      comments: 98,
      type: "lifestyle",
    },
  ];

  // Portfolio items
  const portfolioItems = [
    {
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=400&fit=crop",
      title: "Summer Collection 2024",
    },
    {
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=400&fit=crop",
      title: "Local Coffee Review",
    },
    {
      category: "DJ",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=400&fit=crop",
      title: "Weekend Vibes Set",
    },
    {
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=400&fit=crop",
      title: "Morning Routine",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      brand: "Beauty Brand Co.",
      logo: "BB",
      text: "Rere's authentic content style perfectly aligned with our brand values. Amazing engagement!",
      rating: 5,
    },
    {
      brand: "Cafe Nusantara",
      logo: "CN",
      text: "Professional collaboration and beautiful food photography. Highly recommended!",
      rating: 5,
    },
    {
      brand: "Fashion Forward",
      logo: "FF",
      text: "Creative content that drove real results for our summer campaign.",
      rating: 5,
    },
  ];

  // Rate card data
  const rateCard = {
    umkm: [
      {
        service: "Story Only",
        price: "150.000",
        features: ["1x Instagram Story", "Tag akun brand", "Call to action"],
      },
      {
        service: "Story + Feed",
        price: "350.000",
        popular: true,
        features: [
          "1x Feed Post",
          "1x Instagram Story",
          "CTA & Hashtag support",
        ],
      },
    ],
    menengah: [
      {
        service: "Premium Feed",
        price: "750.000",
        popular: true,
        features: [
          "High-res photo & caption",
          "Brand mention & hashtag",
          "7-day story highlight",
        ],
      },
      {
        service: "Reel + Story",
        price: "1.200.000",
        features: ["Engaging 15-30s Reel", "CTA in caption", "Brand-tagged"],
      },
    ],
    custom: [
      {
        service: "Campaign Series",
        price: "Custom",
        features: [
          "Multiple post series",
          "Cross-platform campaign",
          "Full creative support",
        ],
      },
      {
        service: "Event Collaboration",
        price: "By Request",
        features: ["Live Coverage", "Booth visit", "IG Live optional"],
      },
    ],
  };

  interface ContactItemProps {
    icon: ElementType;
    label: string;
    value: string;
  }

  const ContactItem: React.FC<ContactItemProps> = ({
    icon: Icon,
    label,
    value,
  }) => {
    return (
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="font-medium text-gray-900">{label}</p>
          <p className="text-gray-600">{value}</p>
        </div>
      </div>
    );
  };

  interface QuickButtonProps {
    label: string;
    url: string;
    icon: ReactNode;
    color: string; // contoh: 'from-pink-500 to-purple-500'
  }

  const QuickButton: React.FC<QuickButtonProps> = ({
    label,
    url,
    icon,
    color,
  }) => (
    <button
      onClick={() => window.open(url, "_blank")}
      className={`w-full bg-gradient-to-r ${color} text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-md transition`}
    >
      {icon}
      {label}
    </button>
  );

  interface CardProps {
    item: {
      service: string;
      price: string;
      popular?: boolean;
      features: string[];
    };
  }

  const Card = ({ item }: CardProps) => (
    <div
      className={`relative p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-2 ${
        item.popular
          ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white scale-105"
          : "bg-white/80 backdrop-blur-sm text-gray-900"
      }`}
    >
      {item.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{item.service}</h3>
        <div className="text-3xl font-bold mb-1">Rp {item.price}</div>
        <p
          className={`text-sm ${
            item.popular ? "text-orange-100" : "text-gray-600"
          }`}
        >
          per content
        </p>
      </div>
      <ul className="space-y-3 mb-8">
        {item.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                item.popular ? "bg-white" : "bg-orange-500"
              }`}
            ></div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          item.popular
            ? "bg-white text-orange-600 hover:bg-orange-50"
            : "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg"
        }`}
      >
        Choose Package
      </button>
    </div>
  );

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Terima kasih! Pesan Anda telah terkirim.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden sm:py-16">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-orange-300 rounded-full opacity-50"></div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Rere Amalia
                </span>
              </h1>
              <p className="text-xl sm:text-xl md:text-2xl font-serif text-gray-700 font-medium">
                Let's Create Something Beautiful Together
              </p>
              {/* Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-base sm:text-base">
                <span className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-300 shadow-sm hover:shadow-md transition text-xs sm:text-sm">
                  <Sparkles className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-800 font-medium">Fashion</span>
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-300 shadow-sm hover:shadow-md transition text-xs sm:text-sm">
                  <Coffee className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-800 font-medium">Food</span>
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-300 shadow-sm hover:shadow-md transition text-xs sm:text-sm">
                  <Camera className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-800 font-medium">Lifestyle</span>
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-300 shadow-sm hover:shadow-md transition text-xs sm:text-sm">
                  <Music className="h-5 w-5 text-amber-500" />
                  <span className="text-gray-800 font-medium">DJ</span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                WhatsApp
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full font-semibold text-base sm:text-lg border border-orange-200 hover:bg-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                Email Rere
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-amber-300 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-300 rounded-3xl transform -rotate-3 opacity-20"></div>
              <img
                src="https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/one_set_maezula_pinvul.jpg"
                alt="Rere Amalia"
                className="relative w-full h-80 sm:h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">125K</p>
                    <p className="text-sm text-gray-600">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 bg-gradient-to-br from-white via-white/70 to-pink-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dvuza2lpc/image/upload/v1751017202/fashbrew/Terimakasih_aspal_kiri_%EF%B8%8F_jbi.tobbaco_uabiht.jpg"
                alt="Rere Amalia smiling outdoor"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>

            {/* Text Section */}
            <div className="space-y-6">
              <h2 className="text-5xl font-serif font-bold text-gray-900">
                Meet <span className="text-pink-600">Rere Amalia</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Hello! I’m Rere Amalia — a content creator based in Jember,
                Indonesia. I specialize in{" "}
                <strong>fashion, lifestyle, food reviews</strong>, and
                occasionally perform as a <strong>DJ</strong> at exclusive
                events.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                With over <strong>125,000 engaged followers</strong> on
                Instagram, I collaborate with brands to deliver authentic
                stories that connect with real people.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My passion lies in discovering new trends, spotlighting brands I
                believe in, and creating beautiful, purposeful content that
                resonates with audiences.
              </p>

              {/* Location */}
              <div className="flex items-center gap-3 pt-6 text-pink-600 font-medium">
                <MapPin className="w-5 h-5" />
                <span>Based in Jember, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Stats */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">
            Social Media Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Instagram Card */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl">
              <div className="flex justify-center mb-4">
                <InstagramIcon className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Instagram
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <p className="text-3xl font-bold text-gray-900">125K+</p>
                  <p className="text-gray-600 text-sm">Followers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">8.5%</p>
                  <p className="text-gray-600 text-sm">Engagement</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">50K+</p>
                  <p className="text-gray-600 text-sm">Avg Reach</p>
                </div>
              </div>
            </div>

            {/* TikTok Card */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl">
              <div className="flex justify-center mb-4">
                <TicketCheckIcon className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">TikTok</h3>
              <div className="grid grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <p className="text-3xl font-bold text-gray-900">40K+</p>
                  <p className="text-gray-600 text-sm">Followers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">6.2%</p>
                  <p className="text-gray-600 text-sm">Engagement</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">30K+</p>
                  <p className="text-gray-600 text-sm">Avg Reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Instagram Feed */}
      <section className="py-24 bg-gradient-to-br from-white/60 to-orange-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3">
              Latest from Instagram
            </h2>
            <p className="text-lg text-gray-700">
              Stay updated with my latest content and stories ✨
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.03]"
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-72 object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                  <div className="flex items-center gap-6 text-white text-sm sm:text-base font-medium">
                    <div className="flex items-center gap-1">
                      <Heart className="h-5 w-5 text-pink-400" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-5 w-5 text-amber-300" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3">
              Portfolio Highlights
            </h2>
            <p className="text-lg text-gray-700">
              A curated collection of my diverse content collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="mb-2">
                      <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Card Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Collaboration Packages
            </h2>
            <p className="text-lg text-gray-600">
              Professional rates for authentic brand partnerships
            </p>
          </div>

          {/* === Section: UMKM === */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Untuk UMKM
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Paket terjangkau yang dirancang khusus untuk membantu bisnis kecil
              berkembang dengan promosi yang efektif.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rateCard.umkm.map((item, index) => (
                <Card item={item} key={`umkm-${index}`} />
              ))}
            </div>
          </div>

          {/* === Section: Menengah ke Atas === */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Untuk Bisnis Menengah ke Atas
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Paket lengkap dengan value tinggi yang cocok untuk brand yang
              ingin meningkatkan exposure secara maksimal.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rateCard.menengah.map((item, index) => (
                <Card item={item} key={`menengah-${index}`} />
              ))}
            </div>
          </div>

          {/* === Section: Custom === */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Custom Collaboration
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Ingin sesuatu yang lebih spesifik? Diskusikan kebutuhan brand Anda
              dan kami akan sesuaikan penawarannya.
            </p>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
              {rateCard.custom.map((item, index) => (
                <Card item={item} key={`custom-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Testimonials */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-2">
              What Brands Say
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Trusted by leading brands across Indonesia
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-500 max-w-md mx-auto sm:max-w-full">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-md">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    {testimonials[currentTestimonial].logo}
                  </span>
                </div>

                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current drop-shadow"
                      />
                    )
                  )}
                </div>

                <p className="text-base sm:text-lg text-gray-800 mb-5 sm:mb-6 italic leading-relaxed">
                  “{testimonials[currentTestimonial].text}”
                </p>

                <p className="font-semibold text-gray-900 text-sm sm:text-base tracking-wide">
                  — {testimonials[currentTestimonial].brand}
                </p>
              </div>
            </div>

            {/* Navigation Buttons - sembunyikan di mobile */}
            <button
              onClick={prevTestimonial}
              className="hidden sm:flex absolute left-0 -ml-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:scale-105 transition"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>

            <button
              onClick={nextTestimonial}
              className="hidden sm:flex absolute right-0 -mr-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:scale-105 transition"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>

            <div className="flex justify-center gap-4 mt-6 sm:hidden">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow hover:scale-105 transition"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow hover:scale-105 transition"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
              Let’s Work Together
            </h2>
            <p className="text-lg text-gray-600">
              Ready to create something amazing? Let’s connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-black"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-black"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none text-black"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Info
                </h3>
                <div className="space-y-5">
                  <ContactItem
                    icon={Phone}
                    // title="WhatsApp"
                    value="+62 812-3456-7890"
                    // color="from-green-500 to-green-600"
                    label="WhatsApp"
                  />
                  <ContactItem
                    icon={Mail}
                    // title="Email"
                    value="hello@reamalia.com"
                    // color="from-blue-500 to-blue-600"
                    label="Email"
                  />
                  {/* <ContactItem
                    icon={Instagram}
                    // title="Instagram"
                    value="@reamalia"
                    // color="from-pink-500 to-purple-500"
                    label="Instagram"
                  /> */}
                </div>
              </div>

              {/* <div className="grid gap-4">
                <QuickButton
                  label="WhatsApp Me"
                  url="https://wa.me/6281234567890"
                  icon={<Phone className="h-5 w-5" />}
                  color="from-green-500 to-green-600"
                />
                <QuickButton
                  label="Follow on Instagram"
                  url="https://instagram.com/reamalia"
                  icon={<Instagram className="h-5 w-5" />}
                  color="from-pink-500 to-purple-500"
                />
                <QuickButton
                  label="Send Email"
                  url="mailto:hello@reamalia.com"
                  icon={<Mail className="h-5 w-5" />}
                  color="from-blue-500 to-blue-600"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <footer className=" text-gray-800 pt-10 pb-6 mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            {/* Brand Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-orange-600 mb-2">
                Rere Amalia
              </h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Fashion | Food | Lifestyle | DJ <br />
                Let’s create something beautiful together 🌟
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-8 text-sm">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Explore</h4>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#portfolio"
                      className="hover:text-orange-500 transition"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-orange-500 transition"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-orange-500 transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Social</h4>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="https://instagram.com"
                      className="hover:text-orange-500 transition"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:rere@email.com"
                      className="hover:text-orange-500 transition"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/6281234567890"
                      className="hover:text-orange-500 transition"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-orange-200 mt-8 pt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Rere Amalia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
