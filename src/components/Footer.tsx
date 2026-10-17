import React from 'react';
import { Phone, MessageSquare, Mail, Facebook, MapPin, ArrowUpRight } from 'lucide-react';
import { GYM_INFO, getWhatsAppUrl } from '../data/gymInfo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Training', path: '/training' },
    { label: 'Fitness Guidance', path: '/fitness-guidance' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#1B1D21] border-t border-[#303238] text-[#B9BCC3]">
      {/* Subtle orange accent hairline indicator */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF6B24] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#101114] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 9h2v6H5zM17 9h2v6h-2zM3 10h1v4H3zM20 10h1v4h-1zM8 11h8v2H8z" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-xl text-[#F5F5F2] uppercase tracking-tight">
                {GYM_INFO.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#B9BCC3] max-w-sm">
              Dedicated fitness and strength training destination located at Factory Area Chowk,
              Sargodha. Supporting your journey with disciplined workouts, responsible guidance, and
              practical training habits.
            </p>
            <div className="pt-2">
              <a
                href={GYM_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F5F2] hover:text-[#FF6B24] transition-colors py-1 px-3 bg-[#101114] border border-[#303238] rounded"
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
                <span>Visit Official Facebook Page</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#F5F5F2]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="hover:text-[#FF6B24] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#F5F5F2]">
              Contact Details
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B24] shrink-0 mt-0.5" />
                <span>{GYM_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6B24] shrink-0" />
                <a
                  href={`tel:${GYM_INFO.phoneClean}`}
                  className="hover:text-[#FF6B24] transition-colors"
                >
                  {GYM_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6B24] transition-colors"
                >
                  WhatsApp: {GYM_INFO.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6B24] shrink-0" />
                <a
                  href={`mailto:${GYM_INFO.email}`}
                  className="hover:text-[#FF6B24] transition-colors break-all"
                >
                  {GYM_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#303238] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#80838C]">
          <p>
            © {currentYear} {GYM_INFO.name}. All rights reserved. Factory Area Chowk, Sargodha,
            Pakistan.
          </p>
          <p className="text-right">
            Strength · Discipline · Fitness Progress
          </p>
        </div>
      </div>
    </footer>
  );
};
