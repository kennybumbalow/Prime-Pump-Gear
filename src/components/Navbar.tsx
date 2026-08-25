import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  Wrench,
  Cog
} from 'lucide-react';
import { NavPage } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage, sectionId?: string) => void;
  onOpenQuoteModal: (prefillEquipment?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: NavPage }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'ABOUT', page: 'about' },
    { label: 'SERVICES', page: 'services' },
    { label: 'INDUSTRIES', page: 'industries' },
    { label: 'EQUIPMENT', page: 'equipment' },
    { label: 'PROJECTS', page: 'projects' },
    { label: 'CONTACT', page: 'contact' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Industrial Emergency & Info Bar */}
      <div className="bg-slate-950 text-slate-300 border-b border-slate-800 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Missouri City, Texas Facility</span>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="flex items-center gap-1.5 text-red-400 font-bold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>PRECISION ROTATING EQUIPMENT REBUILD SHOP</span>
            </div>
            <span className="hidden lg:inline text-slate-700">|</span>
            <div className="hidden lg:flex items-center gap-1.5 text-red-400 font-semibold">
              <Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>24/7 Emergency Breakdown Response</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} 
              className="flex items-center gap-1.5 text-white hover:text-red-400 font-bold transition-colors"
              id="top-bar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="text-slate-300 hover:text-white transition-colors hidden sm:inline font-medium"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`bg-slate-900/98 backdrop-blur-md border-b border-slate-800 transition-shadow ${
        isScrolled ? 'shadow-xl shadow-black/40 border-slate-700' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
          {/* Logo / Brand Mark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none focus:ring-2 focus:ring-red-500 rounded p-1"
            id="brand-logo-button"
          >
            {/* High-Impact Industrial Logo Emblem */}
            <div className="w-12 h-12 bg-linear-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center text-white shadow-lg shadow-red-900/30 border border-red-500/30 shrink-0 group-hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <Cog className="w-7 h-7 animate-[spin_12s_linear_infinite]" />
                <Wrench className="w-4 h-4 absolute text-slate-950 font-bold" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-heading">
                  PRIME
                </span>
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-red-500 font-heading">
                  PUMP &amp; GEAR
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                SERVICES • MISSOURI CITY, TX
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  id={`nav-link-${item.page}`}
                  className={`px-3 py-2 text-xs lg:text-sm font-bold tracking-wider transition-colors rounded-md relative ${
                    isActive 
                      ? 'text-red-500 bg-slate-800/80 font-extrabold' 
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-red-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              id="nav-request-quote-btn"
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-5 py-3 rounded-md shadow-lg shadow-red-700/20 hover:shadow-red-700/40 transition-all flex items-center gap-2 border border-red-500"
            >
              <span>REQUEST A QUOTE</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase px-3 py-2 rounded sm:hidden"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-150">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-4 py-3 rounded-md text-sm font-bold tracking-wider flex items-center justify-between ${
                    isActive 
                      ? 'bg-red-600/15 text-red-500 border-l-4 border-red-600 font-extrabold' 
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-md text-center tracking-wider uppercase shadow-lg shadow-red-700/30 flex items-center justify-center gap-2"
              >
                <span>REQUEST A QUOTE</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-md text-center flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call Us: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
