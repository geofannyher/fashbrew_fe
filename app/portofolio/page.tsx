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
  Music2,
  ExternalLink,
  Play,
  Briefcase,
  Mic,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  ElementType,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import Footer from "../components/Footer";
import CoffeeFooter from "../footer/page";

export default function RereAmaliaLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [imageIndex1, setImageIndex1] = useState(0);
  const [imageIndex2, setImageIndex2] = useState(0);
  const [bioIndex, setBioIndex] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nextImage1 = () =>
    setImageIndex1((prev) => (prev + 1) % images1.length);
  const prevImage1 = () =>
    setImageIndex1((prev) => (prev - 1 + images1.length) % images1.length);
  const nextImage2 = () =>
    setImageIndex2((prev) => (prev + 1) % images2.length);
  const prevImage2 = () =>
    setImageIndex2((prev) => (prev - 1 + images2.length) % images2.length);

  const nextBio = () => setBioIndex((prev) => (prev + 1) % bios.length);
  const prevBio = () =>
    setBioIndex((prev) => (prev - 1 + bios.length) % bios.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); // clear saat unmount
  }, []);

  // Dummy data for Instagram posts
  const socialPosts = [
    {
      id: 1,
      type: "instagram",
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751820425/fashbrew/coba_tebak_mau_kemana_%EF%B8%8F_wisata_wisataindonesia_i3myqa.jpg",
      likes: "2.4k",
      comments: "510",
      url: "https://www.instagram.com/reel/C6s7UjwSoIN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
    },
    {
      id: 2,
      type: "tiktok",
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752028320/fashbrew/Tangkapan_Layar_2025-07-09_pukul_09.33.13_xjxkut.png",
      likes: "2.2k",
      views: "52.8k",
      shares: "110",
      url: "https://www.tiktok.com/@rere_feliysia/video/7512439161597513016?is_from_webapp=1&sender_device=pc&web_id=7511261970013226512",
    },
    {
      id: 3,
      type: "instagram",
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751364573/fashbrew/pi_newyear_thank_u_luminorhotel.sidoarjo_qqjfn5.jpg",
      likes: "683",
      comments: "20",
      url: "https://www.instagram.com/p/DERYqRTzSgT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
    },
    {
      id: 4,
      type: "instagram",
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752028908/fashbrew/info_mancing_bolo_fyp_trend_trendbedaangin_bedaangin_jdk3d6.jpg",
      likes: "2.8k",
      comments: "75",
      url: "https://www.instagram.com/p/DGzvENTTXmq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: 5,
      type: "instagram",
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752249347/fashbrew/Focus_on_yourself._The_rest_will_follow._basket_basketball_basketballlovers_basketballgames_2_fpcirn.jpg",
      likes: "668",
      comments: "20",
      url: "https://www.instagram.com/reel/DLCRySSPCnX/?igsh=MW05c2QyaWcwbDdxMw==",
    },
    {
      id: 6,
      type: "instagram",
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752249466/fashbrew/mau_renang_takut_tenggelam_tenggelam_dalam_senyummu_misalnya_swimmingpool_swimming_vibgxi.jpg",
      likes: "491",
      comments: "14",
      url: "https://www.instagram.com/reel/C5su07xy2WX/?utm_source=ig_web_copy_link",
    },
  ];

  const skills = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Content Creator",
      description:
        "I create compelling fashion and lifestyle content that tells authentic stories and connects with audiences on a deeper level. My approach combines creative visuals with genuine storytelling to produce content that not only looks beautiful but also drives meaningful engagement.",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-orange-400 to-amber-500",
      rating: 5,
      offers: [
        "High-quality photo and video content creation",
        "Brand storytelling through authentic visual narratives",
        "Fashion and lifestyle photography sessions",
        "Social media content planning and execution",
        "Creative direction for brand campaigns",
      ],
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "DJ & Performer",
      description:
        "As a professional DJ, I bring energy and excitement to exclusive events with my expertise in music curation and crowd engagement. I specialize in creating the perfect atmosphere for various occasions, from intimate gatherings to large-scale celebrations.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-amber-400 to-orange-500",
      rating: 4,
      offers: [
        "Professional DJ services for events and parties",
        "Music curation and playlist creation",
        "Live performance and crowd engagement",
        "Sound system setup and technical support",
        "Event atmosphere creation and management",
      ],
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Talent Vidio",
      description:
        "I work as a digital talent for Vidio, Indonesia's leading streaming platform, creating engaging video content that entertains and informs audiences. My experience includes hosting, presenting, and participating in various digital productions.",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-orange-500 to-red-500",
      rating: 5,
      offers: [
        "Digital content hosting and presenting",
        "Live streaming and interactive content",
        "Video production and post-production collaboration",
        "Platform-specific content optimization",
        "Audience engagement through digital platforms",
      ],
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Brand Ambassador",
      description:
        "I partner with brands to create authentic connections between products and consumers. My approach focuses on building long-term relationships with brands that align with my values, ensuring genuine endorsements that resonate with my audience.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-amber-500 to-yellow-500",
      rating: 5,
      offers: [
        "Long-term brand partnership development",
        "Product integration in lifestyle content",
        "Brand awareness campaigns and activations",
        "Authentic product reviews and testimonials",
        "Cross-platform brand promotion strategies",
      ],
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Food Reviewer",
      description:
        "I explore and review culinary experiences across Jember and beyond, sharing honest opinions about restaurants, cafes, and food trends. My reviews combine visual appeal with detailed descriptions to help followers discover great dining experiences.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-red-400 to-pink-500",
      rating: 4,
      offers: [
        "Comprehensive restaurant and cafe reviews",
        "Food photography and styling",
        "Culinary trend analysis and reporting",
        "Local food scene documentation",
        "Dining experience storytelling",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Influencer Marketing",
      description:
        "I leverage my social media presence to create impactful marketing campaigns that drive real results. With deep understanding of audience behavior and platform algorithms, I help brands reach their target demographics effectively.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "from-pink-400 to-rose-500",
      rating: 5,
      offers: [
        "Social media campaign strategy and execution",
        "Audience analysis and targeting",
        "Performance tracking and optimization",
        "Multi-platform content distribution",
        "Influencer collaboration and networking",
      ],
    },
  ];

  // Portfolio items
  const portfolioItems = [
    {
      category: "Fashion",
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/neon_outfit_ootd_ootdfashion_ootdneon_neon_coloroutfit_outfit_jhml0c.jpg",
      title: "Summer Collection 2024",
    },
    {
      category: "Food",
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752063/fashbrew/take_your_coffee_%EF%B8%8F_ttmkeh.jpg",
      title: "Local Coffee Review",
    },
    {
      category: "DJ",
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751364573/fashbrew/pi_newyear_thank_u_luminorhotel.sidoarjo_qqjfn5.jpg",
      title: "Weekend Vibes Set",
    },
    {
      category: "Lifestyle",
      image:
        "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751364720/fashbrew/Do_whatever_makes_you_happiest_._cd7aod.jpg",
      title: "Morning Routine",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      brand: "Scarlett",
      logo: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751365729/fashbrew/Tangkapan_Layar_2025-07-01_pukul_17.30.00_gjabxz.png",
      text: "Gaya konten autentik Rere sangat selaras dengan nilai-nilai brand kami. Hasilnya luar biasa, engagement-nya benar-benar mengesankan! Kami sangat puas dengan kolaborasi ini.",
      rating: 5,
    },
    {
      brand: "3Second",
      logo: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751365933/fashbrew/Tangkapan_Layar_2025-07-01_pukul_17.33.19_bbtpqx.png",
      text: "Kolaborasi yang sangat profesional! Konten yang dihasilkan menampilkan produk kami dengan cara yang stylish dan autentik. Visualnya clean, estetik, dan benar-benar mencerminkan karakter brand 3Second. Sangat puas dengan hasilnya – recommended untuk campaign fashion!",
      rating: 5,
    },
    {
      brand: "Colorbox",
      logo: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751385123/fashbrew/Tangkapan_Layar_2025-07-01_pukul_22.52.55_ropzwu.png",
      text: "Rere berhasil menangkap semangat Colorbox yang fun, youthful, dan penuh warna lewat konten yang kreatif dan autentik. Visual yang ditampilkan benar-benar menggambarkan karakter brand kami. Engagement-nya juga tinggi banget! Senang bisa berkolaborasi dengan Rere.Creative content that drove real results for our summer campaign.",
      rating: 5,
    },
    {
      brand: "Universitas Terbuka",
      logo: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751431866/fashbrew/Tangkapan_Layar_2025-07-02_pukul_11.51.44_e8jwxo.png",
      text: "Terima kasih banyak untuk Rere yang telah membantu memperkenalkan Universitas Terbuka kepada lebih banyak orang. Kami sangat mengapresiasi cara Rere menyampaikan nilai-nilai fleksibilitas, keterbukaan akses, dan kualitas pendidikan yang kami usung.",
      rating: 5,
    },
    {
      brand: "Bank Jatim",
      logo: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751432213/fashbrew/Tangkapan_Layar_2025-07-02_pukul_11.57.44_onqxnf.png",
      text: "Kami dari Bank Jatim menyampaikan apresiasi yang sebesar-besarnya kepada Rere atas dukungan dan promosi positif yang diberikan. Terima kasih telah membantu memperkenalkan layanan dan komitmen kami kepada masyarakat luas dengan cara yang menarik dan informatif.",
      rating: 5,
    },
    {
      brand: "Djarum",
      logo: "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751432694/fashbrew/Tangkapan_Layar_2025-07-02_pukul_12.06.12_v4uzxo.png",
      text: "Terima kasih kepada Rere atas dukungan dan dedikasinya dalam memperkenalkan brand Djarum dengan cara yang elegan dan penuh integritas. Kami sangat mengapresiasi bagaimana Rere mampu menyampaikan nilai dan citra Djarum secara positif kepada publik.",
      rating: 5,
    },
  ];

  // Rate card data
  const rateCard = {
    custom: [
      {
        title: "Starter Package",
        description:
          "Paket kolaborasi ringan untuk pengenalan brand secara cepat.",
        features: ["1x Feed or Reels", "Story Instagram"],
      },
      {
        title: "Engagement Package",
        description: "Fokus pada interaksi dan jangkauan yang lebih luas.",
        features: [
          "Visit Location (Jember Kota)",
          "1x Feed or Reels",
          "Story Instagram",
          "Mirroring Tiktok",
        ],
      },
      {
        title: "Ultimate Collaboration",
        description:
          "Paket lengkap untuk kampanye maksimal dengan storytelling.",
        features: [
          "Visit Location (Area Tapal Kuda)",
          "1x Reels or Feed",
          "Story Instagram",
          "Mirroring Tiktok",
        ],
      },
      {
        title: "Customize Package",
        description:
          "Pilih sendiri kombinasi konten dan layanan sesuai dengan kebutuhan brand Anda.",
        features: [
          "Request jumlah dan jenis konten (Feed/Reels/Story Instagram atau Tiktok)",
          "Visit Location (opsional, area disesuaikan)",
          "Diskusi konsep dan storytelling",
          "Estimasi harga berdasarkan permintaan",
        ],
      },
    ],
  };

  const images1 = [
    "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751820222/fashbrew/Outfit_today_Cardi_rajut_under_100k_%EF%B8%8F_shanumastore_ootd_cardi_cardigan_cardiganmurah_fjeohb.jpg",
    "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751820425/fashbrew/coba_tebak_mau_kemana_%EF%B8%8F_wisata_wisataindonesia_i3myqa.jpg",
    "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751364573/fashbrew/pi_newyear_thank_u_luminorhotel.sidoarjo_qqjfn5.jpg",
  ];
  const images2 = [
    "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1751017202/fashbrew/Terimakasih_aspal_kiri_%EF%B8%8F_jbi.tobbaco_uabiht.jpg",
    "https://res.cloudinary.com/dvuza2lpc/image/upload/f_auto,q_auto,w_800/v1750752061/fashbrew/one_set_maezula_pinvul.jpg",
    "https://res.cloudinary.com/dvuza2lpc/image/upload/v1750752061/fashbrew/neon_outfit_ootd_ootdfashion_ootdneon_neon_coloroutfit_outfit_jhml0c.jpg",
  ];

  const bios = [
    {
      role: "Content Creator",
      desc: `Hello! I’m Rere Amalia — a content creator based in Jember, Indonesia. I specialize in fashion, lifestyle, food reviews.`,
    },
    {
      role: "DJ Performer",
      desc: `I occasionally perform as a DJ at exclusive events, bringing energy and great vibes to the crowd.`,
    },
    {
      role: "Brand Ambassador",
      desc: `I work with brands as a BA to tell real, human stories that connect and convert audiences.`,
    },
  ];

  const quotes = [
    "Confidence is the best outfit.",
    "Beauty begins the moment you decide to be yourself.",
    "Style is a way to say who you are without speaking.",
  ];

  const brandLogos = [
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751365933/fashbrew/Tangkapan_Layar_2025-07-01_pukul_17.33.19_bbtpqx.png",
      instagram:
        "https://www.instagram.com/reel/DLaBDC5zSfj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751365729/fashbrew/Tangkapan_Layar_2025-07-01_pukul_17.30.00_gjabxz.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752027782/fashbrew/Tangkapan_Layar_2025-07-01_pukul_22.52.55_1_aokd6d.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752027961/fashbrew/Tangkapan_Layar_2025-07-02_pukul_11.51.44_e8jwxo_1_zne03t.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752027316/fashbrew/Tangkapan_Layar_2025-07-02_pukul_11.57.44_1_f8czs9.png",
      instagram:
        "https://www.instagram.com/reel/DLCRySSPCnX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751432694/fashbrew/Tangkapan_Layar_2025-07-02_pukul_12.06.12_v4uzxo.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751436306/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.04.02_f0hnea.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751436424/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.08.24_tnj0hs.png",
      instagram:
        "https://www.instagram.com/p/DERYqRTzSgT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752027050/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.10.14_1_ocit2e.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751436627/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.11.47_l3zona.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752027453/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.13.47_1_qdwlcp.png",
      instagram:
        "https://www.instagram.com/reel/C5su07xy2WX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751436907/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.16.24_myphi2.png",
      instagram:
        "https://www.instagram.com/reel/DCOUUBbSs05/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751436988/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.17.47_po7eor.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752027050/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.19.16_1_bkghut.png",
      instagram:
        "https://www.instagram.com/reel/C36r4eYyxNF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752027050/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.20.59_1_gjtneh.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752027050/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.20.40_1_gxsrax.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751437309/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.23.03_ewadwq.png",
      instagram:
        "https://www.instagram.com/reel/C2ZF1KBSVji/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752027050/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.24.12_1_bihvqz.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751437463/fashbrew/LOGO-ORIGINAL-Elizabeth-PNG-_suixbv.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1751437562/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.27.03_fyphwh.png",
      instagram: "#",
    },
    {
      src: "https://res.cloudinary.com/dvuza2lpc/image/upload/v1752027050/fashbrew/Tangkapan_Layar_2025-07-02_pukul_13.28.19_1_nvx0xn.png",
      instagram:
        "https://www.instagram.com/reel/DKhKyUkzV33/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

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
    const user = name;
    const pesan = message;
    const waMessage = `Halo rere, saya ${user}. \n\n${pesan}`;
    const waLink = `https://wa.me/6285748578429?text=${encodeURIComponent(
      waMessage
    )}`;

    // Redirect ke WhatsApp
    window.open(waLink, "_blank");
  };

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostClick = (url: any) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleSocialClick = (platform: "instagram" | "tiktok") => {
    const urls = {
      instagram:
        "https://www.instagram.com/_rereamalia_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw",
      tiktok:
        "https://www.tiktok.com/@rere_feliysia?is_from_webapp=1&sender_device=pc  ",
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer");
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
              <a
                href="https://wa.me/6285748578429?text=Hallo%20Rere%2C%20mau%20endorse%20dong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  WhatsApp
                </button>
              </a>
              <a href="mailto:rere@example.com?subject=Endorsement&body=Hallo%20Rere%2C%20mau%20endorse%20dong%20😊">
                <button className="bg-white/80 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full font-semibold text-base sm:text-lg border border-orange-200 hover:bg-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Rere
                </button>
              </a>
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
                    <p className="font-bold text-gray-900">45K +</p>
                    <p className="text-sm text-gray-600">Followers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                    <Music2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">63K +</p>
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
            {/* Image Slider + Enhancements */}
            <div className="relative">
              {/* Polaroid style */}
              <div className="bg-white p-4 rounded-3xl border border-pink-100 shadow-2xl relative">
                <img
                  src={images1[imageIndex1]}
                  alt={`Slide ${imageIndex1}`}
                  className="w-full h-[500px] object-cover rounded-2xl"
                />

                {/* Quote overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/70 px-4 py-2 rounded-full text-sm text-pink-700 font-semibold shadow-md">
                  {quotes[imageIndex1]}
                </div>

                {/* Navigasi */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    onClick={prevImage1}
                    className="bg-white/80 hover:bg-white rounded-full p-2 shadow"
                  >
                    <ArrowLeft className="w-5 h-5 text-pink-600" />
                  </button>
                  <button
                    onClick={nextImage1}
                    className="bg-white/80 hover:bg-white rounded-full p-2 shadow"
                  >
                    <ArrowRight className="w-5 h-5 text-pink-600" />
                  </button>
                </div>
              </div>

              {/* Caption bawah */}
              <p className="mt-4 text-center text-sm text-gray-500 italic">
                “Fashion Night Out · Luminor Hotel · 2024”
              </p>
            </div>

            {/* Bio Section */}
            <div className="space-y-6 relative">
              <h2 className="text-5xl font-serif font-bold text-gray-900">
                Meet <span className="text-pink-600">Rere Amalia</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Rere Amalia adalah seorang influencer yang aktif di bidang{" "}
                <strong>beauty dan fashion</strong>, dengan pendekatan konten
                yang natural, aspiratif, dan engaging. Memiliki lebih dari{" "}
                <strong>45.000+ followers</strong> di Instagram dan{" "}
                <strong>63.000+ followers</strong> TikTok, Rere dikenal karena
                kemampuannya membangun koneksi emosional dengan audiens, serta
                menghasilkan konten visual yang konsisten dan estetik.
              </p>

              <div className="relative bg-white/60 p-4 rounded-xl border border-pink-100 shadow transition-all duration-300">
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  Brand Ambassador
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Saat ini aktif sebagai{" "}
                  <strong>Brand Ambassador untuk Rikas Aesthetic</strong>, dan
                  telah menjadi wajah dari berbagai kampanye kecantikan yang
                  mendorong awareness dan kepercayaan terhadap brand. Komitmen
                  terhadap kualitas dan orisinalitas membuat Rere dipercaya
                  sebagai representasi brand yang relevan dan autentik.
                </p>
              </div>
            </div>

            <div className="space-y-6 relative">
              <div className="relative bg-white/60 p-4 rounded-xl border border-pink-100 shadow transition-all duration-300">
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  Talent
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Berpengalaman sebagai <strong>Talent live streaming</strong>{" "}
                  untuk berbagai brand fashion dan beauty, serta aktif melakukan{" "}
                  <strong>Live game streaming</strong>. Rere mampu membawakan
                  siaran langsung dengan profesional namun tetap hangat,
                  sehingga audiens merasa terlibat dan nyaman berinteraksi
                  secara real-time.
                </p>
              </div>

              <div className="relative bg-white/60 p-4 rounded-xl border border-pink-100 shadow transition-all duration-300">
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  Content Creator
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Aktif sebagai content creator dengan fokus pada{" "}
                  <strong>konten kecantikan, fashion, dan lifestyle</strong>.
                  Rere juga memiliki pengalaman sebagai{" "}
                  <strong>
                    DJ di venue ternama seperti Aston Hotel dan Luminor Hotel
                  </strong>
                  , memperluas daya tarik kontennya di berbagai skena hiburan.
                  Karya-karyanya merepresentasikan gaya hidup modern yang tetap
                  membumi.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 text-pink-600 font-medium">
                <MapPin className="w-5 h-5" />
                <span>Based in Jember, Indonesia</span>
              </div>
            </div>

            <div className="relative hidden md:block">
              {/* Polaroid style */}
              <div className="bg-white p-4 rounded-3xl border border-pink-100 shadow-2xl relative">
                <img
                  src={images2[imageIndex2]}
                  alt={`Slide ${imageIndex2}`}
                  className="w-full h-[500px] object-cover rounded-2xl"
                />

                {/* Quote overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/70 px-4 py-2 rounded-full text-sm text-pink-700 font-semibold shadow-md">
                  {quotes[imageIndex2]}
                </div>

                {/* Navigasi */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    onClick={prevImage2}
                    className="bg-white/80 hover:bg-white rounded-full p-2 shadow"
                  >
                    <ArrowLeft className="w-5 h-5 text-pink-600" />
                  </button>
                  <button
                    onClick={nextImage2}
                    className="bg-white/80 hover:bg-white rounded-full p-2 shadow"
                  >
                    <ArrowRight className="w-5 h-5 text-pink-600" />
                  </button>
                </div>
              </div>

              {/* Caption bawah */}
              <p className="mt-4 text-center text-sm text-gray-500 italic">
                “Fashion Night Out · Luminor Hotel · 2024”
              </p>
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
                  <p className="text-3xl font-bold text-gray-900">45K+</p>
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
                <Music2 className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">TikTok</h3>
              <div className="grid grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <p className="text-3xl font-bold text-gray-900">63K+</p>
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
      <section className="py-24 bg-gradient-to-br from-white/60 to-purple-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3">
              Latest Social Content
            </h2>
            <p className="text-lg text-gray-700">
              Follow my journey across Instagram & TikTok ✨
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {socialPosts.map((post) => (
              <div
                key={post.id}
                className="relative group overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                onClick={() => handlePostClick(post.url)}
              >
                <img
                  src={post.image}
                  alt={`${post.type} post ${post.id}`}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Platform Icon Badge */}
                <div
                  className={`absolute top-4 right-4 p-2 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${
                    post.type === "instagram"
                      ? "bg-gradient-to-r from-pink-500 to-orange-500"
                      : "bg-gradient-to-r from-purple-500 to-pink-500"
                  }`}
                >
                  {post.type === "instagram" ? (
                    <Instagram className="h-4 w-4 text-white" />
                  ) : (
                    <Music2 className="h-4 w-4 text-white" />
                  )}
                </div>

                {/* TikTok Play Button Overlay */}
                {post.type === "tiktok" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/50 rounded-full p-4 group-hover:bg-black/70 transition-all duration-300">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center rounded-2xl">
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-white text-sm sm:text-base font-medium mb-4">
                    <div className="flex items-center gap-1">
                      <Heart className="h-5 w-5 text-red-400" />
                      <span>{post.likes}</span>
                    </div>

                    {post.type === "instagram" ? (
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-5 w-5 text-blue-400" />
                        <span>{post.comments}</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-1">
                          <Play className="h-4 w-4 text-green-400" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="h-4 w-4 text-yellow-400" />
                          <span>{post.shares}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePostClick(post.url);
                      }}
                      className={`text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200 transform hover:scale-105 ${
                        post.type === "instagram"
                          ? "bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
                          : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      }`}
                    >
                      {post.type === "instagram" ? (
                        <>
                          <Instagram className="h-4 w-4" />
                          View Post
                        </>
                      ) : (
                        <>
                          <Music2 className="h-4 w-4" />
                          Watch Video
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Social Media Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={() => handleSocialClick("instagram")}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Instagram className="h-6 w-6" />
                Follow on Instagram
                <ExternalLink className="h-5 w-5" />
              </button>

              <button
                onClick={() => handleSocialClick("tiktok")}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Music2 className="h-6 w-6" />
                Follow on TikTok
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>

            {/* Additional CTA */}
            <p className="text-gray-600 mt-6 text-sm">
              Join thousands of followers for daily inspiration and updates! 🌟
            </p>
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
              Pilih paket kolaborasi yang paling sesuai untuk brand Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {rateCard.custom.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-pink-100 rounded-2xl shadow-lg p-6 flex flex-col justify-between transition hover:shadow-pink-200"
              >
                <div>
                  <h3 className="text-xl font-bold text-pink-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(
                    item.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-700 hover:scale-105 transition-all duration-200"
                >
                  💬 Tanya Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Collaborations Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Brand Collaborations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Trusted by leading brands worldwide to create authentic, engaging
              content that resonates with audiences
            </p>
          </div>

          {/* Infinite Scrolling Brand Logos */}
          <div className="relative">
            {/* Main scrolling container */}
            <div className="overflow-hidden mask-gradient h-24 sm:h-32 lg:h-40">
              <div className="flex items-center h-full animate-scroll-left min-w-max">
                {/* First set of logos */}
                {brandLogos.map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 mx-3 sm:mx-6 lg:mx-8 group"
                  >
                    <a
                      href={logo.instagram} // GANTI dengan link Instagram dinamis atau statis
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:scale-105 hover:bg-white/90">
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>

                        {/* Logo container - responsive sizing */}
                        <div className="relative flex justify-center items-center h-8 w-16 sm:h-12 sm:w-24 lg:h-16 lg:w-32">
                          <img
                            src={logo.src}
                            alt={`Brand partner ${index + 1}`}
                            className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
                          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {brandLogos.map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 mx-3 sm:mx-6 lg:mx-8 group"
                  >
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:scale-105 hover:bg-white/90">
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>

                      {/* Logo container */}
                      <div className="relative flex justify-center items-center h-8 w-16 sm:h-12 sm:w-24 lg:h-16 lg:w-32">
                        <img
                          src={logo.src}
                          alt={`Brand partner ${index + 1}`}
                          className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - reverse direction */}
            <div className="overflow-hidden mask-gradient mt-4 sm:mt-6 lg:mt-8 h-24 sm:h-32 lg:h-40">
              <div className="flex animate-scroll-right items-center h-full min-w-max">
                {/* First set of logos (reverse) */}
                {[...brandLogos].reverse().map((logo, index) => (
                  <div
                    key={`reverse-first-${index}`}
                    className="flex-shrink-0 mx-3 sm:mx-6 lg:mx-8 group"
                  >
                    <a
                      href={logo.instagram} // GANTI dengan link Instagram dinamis atau statis
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:scale-105 hover:bg-white/90">
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>

                        {/* Logo container */}
                        <div className="relative flex justify-center items-center h-8 w-16 sm:h-12 sm:w-24 lg:h-16 lg:w-32">
                          <img
                            src={logo.src}
                            alt={`Brand partner reverse ${index + 1}`}
                            className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
                          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}

                {/* Duplicate set for seamless loop (reverse) */}
                {[...brandLogos].reverse().map((logo, index) => (
                  <div
                    key={`reverse-second-${index}`}
                    className="flex-shrink-0 mx-3 sm:mx-6 lg:mx-8 group"
                  >
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:scale-105 hover:bg-white/90">
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>

                      {/* Logo container */}
                      <div className="relative flex justify-center items-center h-8 w-16 sm:h-12 sm:w-24 lg:h-16 lg:w-32">
                        <img
                          src={logo.src}
                          alt={`Brand partner reverse ${index + 1}`}
                          className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer group text-sm sm:text-base"
            >
              <span>Ready to collaborate?</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .mask-gradient {
          mask: linear-gradient(
            90deg,
            transparent,
            white 10%,
            white 90%,
            transparent
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 10%,
            white 90%,
            transparent
          );
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }

        .animate-scroll-right:hover {
          animation-play-state: paused;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Mobile specific optimizations */
        @media (max-width: 640px) {
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 35s linear infinite;
          }
        }
      `}</style>

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
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-500 max-w-md mx-auto sm:max-w-full h-96">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mx-auto mb-5 sm:mb-6 shadow-md bg-white p-2">
                  <img
                    src={testimonials[currentTestimonial].logo}
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
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
      <section className="py-20 bg-white" id="contact">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-black"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none text-black"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
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
                    value="+6285748578429"
                    // color="from-green-500 to-green-600"
                    label="WhatsApp Business Rayya"
                  />
                  <ContactItem
                    icon={Phone}
                    // title="Email"
                    value="+6287778674692"
                    // color="from-blue-500 to-blue-600"
                    label="WhatsApp DJ  Rey"
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

      {/* Footer */}
      <CoffeeFooter />
    </div>
  );
}
