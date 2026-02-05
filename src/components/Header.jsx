import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/products' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontak', path: '/contact' }
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-secondary">Vara Dekorasi</h1>
                <p className="text-xs text-gray-600">Toko Perlengkapan Rumah</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-secondary hover:text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4">
                <Link 
                  to="/cart" 
                  className="relative text-secondary hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
                
                <a 
                  href="tel:+6281234567890" 
                  className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Hubungi Kami</span>
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-secondary focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-medium py-2 ${
                      location.pathname === item.path
                        ? 'text-primary'
                        : 'text-secondary hover:text-primary'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Link 
                    to="/cart" 
                    className="flex items-center space-x-2 text-secondary hover:text-primary"
                    onClick={closeMenu}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Keranjang (0)</span>
                  </Link>
                  
                  <a 
                    href="tel:+6281234567890" 
                    className="bg-primary text-white px-4 py-3 rounded-full block text-center hover:bg-secondary transition-colors"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
};

export default Header;