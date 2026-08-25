import React, { useState, useEffect } from 'react';
import { NavPage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { QuoteModal } from './components/QuoteModal';
import { DowntimeCalculatorModal } from './components/DowntimeCalculatorModal';
import { COMPANY_INFO } from './data/companyData';
import { Phone, Calculator, ChevronUp, Clock, Wrench } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [modalPrefillEquipment, setModalPrefillEquipment] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Sync with window hash on load and hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: NavPage[] = ['home', 'about', 'services', 'industries', 'equipment', 'projects', 'quote', 'contact'];
      if (validPages.includes(hash as NavPage)) {
        setCurrentPage(hash as NavPage);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update Page Title and Meta for SEO on page change
  useEffect(() => {
    const titles: Record<NavPage, string> = {
      home: 'Prime Pump & Gear Services | Industrial Rotating Equipment Repair | Houston, TX',
      about: 'About Us | Prime Pump & Gear Services | Houston Machine & Rebuild Facility',
      services: 'Industrial Pump, Gearbox, CNC Machining & Balancing Services | Prime PGS',
      industries: 'Industries Served | Petrochemical, Manufacturing, Aggregate | Prime PGS',
      equipment: 'Rotating Equipment Directory | Pumps, Gearboxes, Blowers, Shafts | Prime PGS',
      projects: 'Projects Gallery & Case Studies | Rebuilt Rotating Machinery | Prime PGS',
      quote: 'Request an Equipment Repair Quote | Rapid Houston Response | Prime PGS',
      contact: 'Contact Us & Facility Location | Houston 24/7 Breakdown Dispatch | Prime PGS'
    };

    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const handleNavigate = (page: NavPage, sectionId?: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (prefillEquipment?: string) => {
    setModalPrefillEquipment(prefillEquipment || '');
    setIsQuoteModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-red-600 selection:text-white">
      {/* Sticky Industrial Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={() => handleOpenQuoteModal()} 
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'industries' && (
          <IndustriesPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'equipment' && (
          <EquipmentPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'quote' && (
          <QuotePage prefillEquipment={modalPrefillEquipment} />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Heavy-Duty Industrial Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenQuoteModal={handleOpenQuoteModal} 
      />

      {/* Floating Action Buttons: Calculator & Quick Quote / Phone */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Floating Downtime Cost Calculator Trigger */}
        <button
          onClick={() => setIsCalculatorOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-full shadow-2xl border border-slate-700 hover:border-red-500 transition-all flex items-center gap-2 group"
          title="Calculate Downtime Cost vs. Rebuild Savings"
          id="floating-calculator-btn"
        >
          <Calculator className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold whitespace-nowrap text-slate-200">
            Downtime Savings Calculator
          </span>
        </button>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-slate-800 hover:bg-red-600 text-white p-3 rounded-full shadow-xl border border-slate-700 transition-all"
            aria-label="Scroll to top"
            id="scroll-to-top-btn"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefillEquipment={modalPrefillEquipment}
      />

      {/* Downtime Calculator Modal */}
      <DowntimeCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onOpenQuoteModal={() => {
          setIsCalculatorOpen(false);
          setIsQuoteModalOpen(true);
        }}
      />
    </div>
  );
}
