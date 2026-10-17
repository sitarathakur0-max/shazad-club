import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GYM_INFO, getWhatsAppUrl } from '../data/gymInfo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Training', path: '/training' },
    { label: 'Fitness Guidance', path: '/fitness-guidance' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const isCurrent = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-[#101114]/95 backdrop-blur-md border-b border-[#303238] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B24] rounded px-1"
        >
          <div className="w-8 h-8 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24] group-hover:border-[#FF6B24] transition-colors">
            {/* Minimal geometric barbell / fitness insignia */}
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 9h2v6H5zM17 9h2v6h-2zM3 10h1v4H3zM20 10h1v4h-1zM8 11h8v2H8z" />
            </svg>
          </div>
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#F5F5F2] uppercase whitespace-nowrap shrink-0 group-hover:text-white transition-colors">
            Shahzad Fitness Gym
          </span>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium"
        >
          {navLinks.map((link) => {
            const active = isCurrent(link.path);
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  active
                    ? 'text-[#FF6B24] border-[#FF6B24] font-semibold'
                    : 'text-[#B9BCC3] border-transparent hover:text-[#F5F5F2]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppUrl('Hello Shahzad Fitness Gym, I want to enquire about membership and training in Sargodha.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] active:bg-[#CC470E] rounded transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B24]"
          >
            <span>Enquire on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="md:hidden p-2 rounded text-[#B9BCC3] hover:text-[#F5F5F2] hover:bg-[#1B1D21] border border-[#303238] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B24]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1B1D21] border-b border-[#303238] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => {
            const active = isCurrent(link.path);
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`block w-full text-left px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  active
                    ? 'bg-[#101114] text-[#FF6B24] font-semibold border-l-2 border-[#FF6B24]'
                    : 'text-[#B9BCC3] hover:bg-[#101114] hover:text-[#F5F5F2]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2">
            <a
              href={getWhatsAppUrl('Hello Shahzad Fitness Gym, I want to enquire about membership and training in Sargodha.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors text-center"
            >
              <span>Enquire on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
