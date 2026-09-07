import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { BrandReveal } from './components/common/BrandReveal';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { StatsSection } from './components/sections/StatsSection';
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
import { ArtistProfileView } from './components/views/ArtistProfileView';
import { FestiveTopBanner } from './components/offers/FestiveTopBanner';
import { FestiveFloatingBadge } from './components/offers/FestiveFloatingBadge';
import { FestiveOffersModal } from './components/offers/FestiveOffersModal';
import { LiveActivityTimeline } from './components/common/LiveActivityTimeline';
import type { ServiceCategory, ServiceItem } from './data/services';

function AppContent() {
  const navigate = useNavigate();
  const [showReveal, setShowReveal] = useState(true);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [offersModalOpen, setOffersModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | string | null>(null);
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'ALL'>('BRIDAL');

  const handleOpenBooking = (service?: ServiceItem | string) => {
    setSelectedService(service || null);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedService(null);
  };

  const handleNavigateToCategory = (category: ServiceCategory | 'ALL') => {
    setActiveCategory(category);
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-[#f5f2ea] w-full max-w-full overflow-x-clip">
      
      {/* Brand Luxury Reveal Screen */}
      {showReveal && <BrandReveal onFinish={() => setShowReveal(false)} />}

      {/* Durga Puja Top Announcement Banner */}
      <FestiveTopBanner onOpenOffersModal={() => setOffersModalOpen(true)} />

      {/* Route-Based Page Views */}
      <Routes>
        {/* 1. Dedicated Artist Profile Page (Route: /profile) */}
        <Route
          path="/profile"
          element={
            <ArtistProfileView
              onBackToHome={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenBooking={() => handleOpenBooking()}
            />
          }
        />

        {/* Profile Aliases */}
        <Route path="/artist" element={<Navigate to="/profile" replace />} />
        <Route path="/about" element={<Navigate to="/profile" replace />} />
        <Route path="/punam" element={<Navigate to="/profile" replace />} />

        {/* 2. Focused Digital Menu View (Route: /menu) */}
        <Route
          path="/menu"
          element={
            <DigitalMenuQuickView
              onSelectServiceToBook={(service) => handleOpenBooking(service)}
              onSwitchToFullSite={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenOffersModal={() => setOffersModalOpen(true)}
            />
          }
        />
        <Route path="/services" element={<Navigate to="/menu" replace />} />
        <Route path="/services-menu" element={<Navigate to="/menu" replace />} />

        {/* 3. Main Full Landing Page (Route: /) */}
        <Route
          path="/"
          element={
            <>
              {/* Sticky Header Navigation */}
              <Navbar
                onOpenBooking={() => handleOpenBooking()}
                onOpenMenuQuickView={() => {
                  navigate('/menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenProfile={() => {
                  navigate('/profile');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />

              {/* Main Content Sections */}
              <main className="w-full max-w-full overflow-x-clip pb-16 sm:pb-0">
                {/* 1. Cinematic Auto-Sliding Hero Section */}
                <Hero
                  onOpenBooking={() => handleOpenBooking()}
                  onOpenMenuQuickView={() => {
                    navigate('/menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onOpenOffersModal={() => setOffersModalOpen(true)}
                  onNavigateToCategory={handleNavigateToCategory}
                />

                {/* Live Real-Time Customer Booking Activity Timeline Feed (Only Real Submissions: Name + Address + Time) */}
                <LiveActivityTimeline />

                {/* 2. Key Pillars & Verified Metrics */}
                <StatsSection />

                {/* 3. Digital Artistry Services Menu (Redesigned Creamy Style) */}
                <ServicesMenu
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  onBookService={(service) => handleOpenBooking(service)}
                />

                {/* 4. Transformation Portfolio Gallery */}
                <PortfolioSection onOpenBooking={(lookTitle) => handleOpenBooking(lookTitle)} />

                {/* 5. Signature Skills & Mastery Repertoire */}
                <SkillsSection />

                {/* 6. Why Choose Punam Kairi */}
                <WhyChooseSection />

                {/* 7. QR Code Pass & Print Engine */}
                <QRCodeSection onOpenMenuQuickView={() => {
                  navigate('/menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} />

                {/* 8. FAQs */}
                <FAQSection />

                {/* 9. Contact, Directions & Social Media */}
                <ContactSection />
              </main>

              {/* Footer */}
              <Footer />

              {/* Desktop Floating WhatsApp Button */}
              <FloatingWhatsApp />

              {/* Mobile Persistent Bottom Action Dock */}
              <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />
            </>
          }
        />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

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
        onClaimOffer={(offerTitle) => {
          setOffersModalOpen(false);
          handleOpenBooking(offerTitle);
        }}
      />

    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
