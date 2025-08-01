"use client";
import React, { useState } from "react";
import { Mail, Instagram, Send, MapPin, Music2 } from "lucide-react";

export default function CoffeeFooter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (message.trim()) {
      const subject = encodeURIComponent("Saran & Kritik dari Pengguna");
      const body = encodeURIComponent(`Email: ${email}\n\nPesan:\n${message}`);
      const mailtoLink = `mailto:otatixx@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      setIsSubmitted(true);
      setEmail("");
      setMessage("");

      // Reset notifikasi setelah 3 detik
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-white">
      {/* Top border */}
      <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Kolom Tentang */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dvuza2lpc/image/upload/v1751993789/fashbrew/dreamina-2025-07-08-8782-buatkan_logo_brand_dengan_ketentuan_mini..._q2oyje.png"
                alt="Fashbrew Logo"
                className="h-14 w-14 object-contain"
              />
              <h3 className="text-xl font-bold text-gray-800">ashbreew</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Di sini aku ngumpulin tempat-tempat ngopi favorit yang pernah aku
              coba. Buat kamu yang suka eksplor kopi, semoga bisa jadi inspirasi
              tempat ngopi selanjutnya!
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Jember, Jawa Timur</span>
            </div>
          </div>

          {/* Kolom Navigasi */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-orange-500 pb-2 inline-block">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "/" },
                { name: "Tentang", href: "/portofolio" },
                // { name: "Artikel", href: "/articles" },
                // { name: "Hubungi Kami", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Sosial Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-orange-500 pb-2 inline-block">
              Ikuti Saya
            </h3>
            <p className="text-gray-600 text-sm">Dapatkan update terbaru.</p>
            <div className="flex space-x-4">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/_rereamalia_",
                  label: "Instagram",
                  color: "hover:bg-pink-500",
                },
                {
                  icon: Music2,
                  href: "https://www.tiktok.com/@rere_feliysia",
                  label: "TikTok",
                  color: "hover:bg-black",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 hover:text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Kirim Saran & Kritik */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-orange-500 pb-2 inline-block">
              Kirim Saran & Kritik
            </h3>
            <p className="text-gray-600 text-sm">
              Punya masukan atau ide soal website ini? Tulis aja di bawah, aku
              bakal baca semua masukannya dengan senang hati!
            </p>

            <div className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email kamu (opsional)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all duration-200 text-black"
                />
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis saran atau kritikmu di sini..."
                className="w-full h-28 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all duration-200 resize-none text-black"
              />

              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
              >
                {isSubmitted ? (
                  <span>✓ Terkirim!</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </button>
            </div>

            {isSubmitted && (
              <div className="text-green-600 text-sm bg-green-50 p-2 rounded-lg">
                Makasih ya! Masukan kamu sangat berarti buatku ☕✨
              </div>
            )}
          </div>
        </div>

        {/* Footer Bawah */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm flex items-center justify-center md:justify-start space-x-1">
                <span>© 2025 Fashbrew. Dibuat</span>
                {/* <span className="text-orange-500 animate-pulse">☕</span> */}
                <span>oleh</span>
                <a
                  href="https://www.instagram.com/aisolusimuda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-orange-600 hover:underline"
                >
                  Otakutixx
                </a>
              </p>
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                // href="/privacy"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
              >
                Kebijakan Privasi
              </a>
              <a
                // href="/terms"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
              >
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"></div>
    </footer>
  );
}
