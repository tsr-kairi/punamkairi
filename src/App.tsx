import { useState, useEffect } from 'react';
import { BrandReveal } from './components/common/BrandReveal';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { StatsSection } from './components/sections/StatsSection';
import { AboutArtist } from './components/sections/AboutArtist';
import { ServicesMenu } from './components/sections/ServicesMenu';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { WhyChooseSection } from './components/sections/WhyChooseSection';
import { QRCodeSection } from './components/sections/QRCodeSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { BookingModal } from './components/booking/BookingModal';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { DigitalMenuQuickView } from './components/views/DigitalMenuQuickView';
import { FestiveTopBanner } from './components/offers/FestiveTopBanner';
import { FestiveFloatingBadge } from './components/offers/FestiveFloatingBadge';
import { FestiveOffersModal } from './components/offers/FestiveOffersModal';
import type { ServiceItem } from './data/services';

export function App() {
  const [showReveal, setShowReveal] = useState(true);
  const [currentView, setCurrentView] = useState<'full' | 'menu'>('full');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [offersModalOpen, setOffersModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | string | null>(null);

  // Detect URL parameter (e.g. ?view=menu or ?view=services or ?offer=durga-puja) on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get('view');
      if (viewParam === 'menu' || viewParam === 'services') {
        setCurrentView('menu');
      }
      if (params.get('offer') === 'durga-puja') {
        setOffersModalOpen(true);
      }
    }
  }, []);

  const handleOpenBooking = (service?: ServiceItem | string) => {
    setSelectedService(service || null);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedService(null);
  };

  const handleSwitchToMenu = () => {
    setCurrentView('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchToFullSite = () => {
    setCurrentView('full');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-[#f5f2ea] w-full max-w-full overflow-x-clip">
      
      {/* Brand Luxury Reveal Screen */}
      {showReveal && <BrandReveal onFinish={() => setShowReveal(false)} />}

      {/* Durga Puja Top Announcement Banner */}
      <FestiveTopBanner onOpenOffersModal={() => setOffersModalOpen(true)} />

      {/* Conditional Rendering: Focused Digital Menu View vs Full Website */}
      {currentView === 'menu' ? (
        <DigitalMenuQuickView
          onSelectServiceToBook={(service) => handleOpenBooking(service)}
          onSwitchToFullSite={handleSwitchToFullSite}
          onOpenOffersModal={() => setOffersModalOpen(true)}
        />
      ) : (
        <>
          {/* Sticky Header Navigation */}
          <Navbar
            onOpenBooking={() => handleOpenBooking()}
            onOpenMenuQuickView={handleSwitchToMenu}
          />

          {/* Main Content Sections */}
          <main className="w-full max-w-full overflow-x-clip pb-16 sm:pb-0">
            {/* 1. Cinematic Auto-Sliding Hero Section */}
            <Hero
              onOpenBooking={() => handleOpenBooking()}
              onOpenMenuQuickView={handleSwitchToMenu}
              onOpenOffersModal={() => setOffersModalOpen(true)}
            />

            {/* 2. Key Pillars & Verified Metrics */}
            <StatsSection />

            {/* 3. Meet the Artist: Mrs. Punam Kairi */}
            <AboutArtist onOpenBooking={() => handleOpenBooking()} />

            {/* 4. Digital Artistry Services Menu */}
            <ServicesMenu onBookService={(service) => handleOpenBooking(service)} />

            {/* 5. Transformation Portfolio Gallery */}
            <PortfolioSection onOpenBooking={(lookTitle) => handleOpenBooking(lookTitle)} />

            {/* 6. Signature Skills & Mastery Repertoire */}
            <SkillsSection />

            {/* 7. Why Choose Punam Kairi */}
            <WhyChooseSection />

            {/* 8. QR Code Pass & Print Engine */}
            <QRCodeSection onOpenMenuQuickView={handleSwitchToMenu} />

            {/* 9. FAQs */}
            <FAQSection />

            {/* 10. Contact, Directions & Social Media */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Desktop Floating WhatsApp Button */}
          <FloatingWhatsApp />

          {/* Mobile Persistent Bottom Action Dock */}
          <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />
        </>
      )}

      {/* Persistent Floating Festive Offer Badge */}
      <FestiveFloatingBadge onOpenOffersModal={() => setOffersModalOpen(true)} />

      {/* Unified Booking Modal Flow */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preSelectedService={selectedService}
      />

      {/* Durga Puja Festive Offers Modal */}
      <FestiveOffersModal
        isOpen={offersModalOpen}
        onClose={() => setOffersModalOpen(false)}
      />

    </div>
  );
}

export default App;
