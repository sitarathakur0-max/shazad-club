import React from 'react';
import { GYM_INFO } from '../data/gymInfo';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Shahzad Fitness Gym, I would like to enquire about membership and training in Sargodha.'
  )}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed left-5 bottom-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shahzad Fitness Gym on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FF6B24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101114]"
      >
        {/* Accessible SVG WhatsApp icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.201.301-.777.979-.953 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.677-1.631-.928-2.234-.244-.588-.492-.508-.677-.517l-.577-.01c-.201 0-.527.075-.802.376-.276.301-1.053 1.029-1.053 2.509 0 1.48 1.079 2.909 1.229 3.11.15.201 2.124 3.243 5.146 4.55.719.311 1.28.497 1.718.636.722.23 1.379.197 1.898.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.83.498 3.55 1.365 5.03L2 22l5.16-1.35a9.887 9.887 0 004.88 1.27h.005c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.036-5.16-2.92-7.04A9.897 9.897 0 0012.04 2zm0 18.23h-.004a8.236 8.236 0 01-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.214 8.214 0 01-1.26-4.41c0-4.55 3.7-8.25 8.25-8.25 2.2 0 4.28.86 5.84 2.42a8.215 8.215 0 012.41 5.83c0 4.56-3.7 8.26-8.25 8.26z" />
        </svg>

        {/* Hover label tooltip */}
        <span className="hidden md:block absolute left-full ml-3 px-3 py-1.5 bg-[#1B1D21] text-[#F5F5F2] text-xs font-semibold rounded border border-[#303238] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 shadow-lg">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
