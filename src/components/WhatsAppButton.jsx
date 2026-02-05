import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20Vara%20Dekorasi,%20saya%20tertarik%20dengan%20produk%20Anda..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 animate-bounce"
    >
      <div className="flex items-center justify-center w-16 h-16">
        <i className="fab fa-whatsapp text-4xl"></i>
      </div>
    </a>
  );
};

export default WhatsAppButton;