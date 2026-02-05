import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h3 className="text-xl font-bold">Vara Dekorasi</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Toko perlengkapan rumah terlengkap di Jakarta Barat dengan produk berkualitas dan harga terjangkau.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="/products" className="hover:text-primary transition-colors">Produk</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Kontak</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak Kami</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>Jl. Bambu Larangan No.27, Pegadungan, Kalideres, Jakarta Barat 11830</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>info@varadecor.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Senin - Minggu: 08.00 - 20.00</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Berlangganan untuk mendapatkan update produk terbaru dan promo eksklusif
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-700"
              />
              <button className="bg-primary text-white px-4 rounded-r-lg hover:bg-opacity-90 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Kami tidak akan pernah membagikan email Anda kepada pihak ketiga
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vara Dekorasi. All Rights Reserved.</p>
          <p className="mt-2">
            Developed with ❤️ by <a href="#" className="text-primary hover:underline">Your Name</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;