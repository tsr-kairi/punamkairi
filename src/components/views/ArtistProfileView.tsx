import React from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  Share2,
  Award,
  Sparkles,
  Heart,
  Star,
  ExternalLink,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { portfolioData } from '../../data/portfolio';
import { InstagramIcon, FacebookIcon } from '../common/SocialIcons';
import { getPhoneCallUrl, getGeneralWhatsAppUrl } from '../../utils/whatsapp';

interface ArtistProfileViewProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
}

export const ArtistProfileView: React.FC<ArtistProfileViewProps> = ({
  onBackToHome,
  onOpenBooking
}) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${siteConfig.artistName} - Professional Makeup Artist Profile`,
        text: `Check out the official makeup artistry portfolio & profile of ${siteConfig.artistName} in Sribhumi, Assam`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Profile link copied to clipboard!');
    }
  };

  const achievements = [
    { number: '4+ Years', label: 'Professional Experience' },
    { number: '350+', label: 'Brides & Clients Styled' },
    { number: '100%', label: '5-Star Client Rating' },
    { number: 'Assam', label: 'Verified Makeup Studio' },
  ];

  const qualifications = [
    {
      title: 'Certified Professional Makeup Artist & Aesthetician',
      institution: 'Mastery in Bridal, HD & Airbrush Artistry',
      desc: 'Extensive formal training in skin tone color calibration, facial contouring, and long-wear bridal techniques.'
    },
    {
      title: 'Skin Aesthetics & Specialized Facial Care',
      institution: 'Advanced Dermal Therapy & Glow Architecture',
      desc: 'Expertise in customized 24K Gold, Hydra-Dew, Diamond De-Tan, and organic herbal facial rejuvenation.'
    },
    {
      title: 'Master Hair Sculpting & Couture Saree Draping',
      institution: 'Traditional & Contemporary Styling',
      desc: 'Flawless execution of Bengali, Assamese, North-Indian bridal saree pleating and secure jewelry anchoring.'
    }
  ];

  const specialties = [
    'Royal Indian Bridal Artistry',
    'Pre-Wedding & Engagement Styling',
    'Ultra-HD & Airbrush Finish',
    '16-Hour Sweat & Tear Resistant Base',
    'Party & Festive Pandal Makeovers',
    '24K Gold & Hydra-Dew Facials',
    'Precision Eyebrow & Facial Grooming',
    'Hospital-Grade Clean Sanitization'
  ];

  const featuredWorks = portfolioData.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f5f2ea] selection:bg-[#d4af37]/30 pb-24">
      
      {/* Top Floating App Bar */}
      <header className="sticky top-0 z-40 bg-[#0a0a0c]/90 backdrop-blur-xl border-b border-[#d4af37]/20 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161620] hover:bg-[#20202d] text-[#f7e7ce] text-xs font-semibold uppercase tracking-wider border border-[#d4af37]/30 transition-all cursor-pointer active:scale-95 shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-[#d4af37]" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-[#161620] hover:bg-[#20202d] text-[#d4af37] border border-[#d4af37]/30 transition-all cursor-pointer"
              title="Share Profile"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenBooking}
              className="btn-gold px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Profile Container */}
      <main className="max-w-4xl mx-auto px-3 sm:px-6 pt-2">
        
        {/* Profile Card Container (Social Media Profile Style) */}
        <div className="rounded-3xl bg-[#111117] border border-[#d4af37]/35 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden">
          
          {/* 1. Cover Banner */}
          <div className="relative h-44 sm:h-64 md:h-72 w-full overflow-hidden bg-[#181822]">
            <img
              src="/assets/images/banners/banner-durga-puja-opening.jpg"
              alt="Punam Kairi Studio Banner"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111117] via-black/40 to-transparent" />
            
            {/* Ambient Badge on Cover */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/50 text-[10px] sm:text-xs font-semibold text-[#f7e7ce] uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              <span>Official Studio Profile</span>
            </div>
          </div>

          {/* 2. Profile Avatar & Header Info */}
          <div className="relative px-4 sm:px-8 pb-6 sm:pb-8">
            
            {/* Overlapping Avatar Row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 -mt-16 sm:-mt-20 mb-5 text-center sm:text-left">
              <div className="relative group">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#aa8024] shadow-2xl flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#121217] border-2 border-black">
                    <img
                      src={siteConfig.branding.artistPortraitSquare}
                      alt={siteConfig.artistName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Verified Artist Checkmark Badge */}
                <div
                  className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-lg border-2 border-[#111117]"
                  title="Verified Professional Artist"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={onOpenBooking}
                  className="btn-gold px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-lg cursor-pointer flex-1 sm:flex-none justify-center"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#0a0a0c]" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-md transition-colors flex-1 sm:flex-none justify-center"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={getPhoneCallUrl()}
                  className="p-2.5 rounded-full bg-[#1e1e28] hover:bg-[#2b2b3a] border border-[#d4af37]/30 text-[#f7e7ce] transition-colors"
                  title="Call Studio"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                </a>
              </div>
            </div>

            {/* Artist Titles & Location */}
            <div className="text-center sm:text-left space-y-1.5 border-b border-[#22212a] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 justify-center sm:justify-start">
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#f7e7ce] tracking-wide">
                  {siteConfig.artistName}
                </h1>
                <span className="inline-flex items-center justify-center gap-1 px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f3e5ab] text-[11px] font-semibold tracking-wider uppercase w-fit mx-auto sm:mx-0">
                  <ShieldCheck className="w-3 h-3 text-[#d4af37]" />
                  Verified Lead Artist
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#d4af37] font-semibold tracking-wider uppercase">
                {siteConfig.artistTitle}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs text-[#a09d96] pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Sribhumi, Assam</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Open for Bookings (Prior Slot Required)</span>
                </span>
                <span className="flex items-center gap-1 text-[#e6ca65]">
                  <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                  <span>5.0 (350+ Reviews)</span>
                </span>
              </div>
            </div>

            {/* 3. Social Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 my-6">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-2xl bg-[#161620] border border-[#262432] text-center"
                >
                  <div className="text-lg sm:text-2xl font-display font-bold text-gold-gradient">
                    {item.number}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#a09d96] font-medium tracking-wide uppercase mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Bio & Philosophy */}
            <div className="space-y-4 pt-2 border-t border-[#22212a]">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#d4af37] uppercase">
                <Heart className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>About Punam Kairi & Her Artistry</span>
              </div>

              <div className="text-xs sm:text-sm text-[#cfccc4] font-light leading-relaxed space-y-3">
                <p>
                  Namaste! I am <strong className="text-[#f7e7ce] font-medium">Mrs. Punam Kairi</strong>, founder and lead artist at <strong className="text-[#f7e7ce] font-medium">PUNAM KAIRI MAKEUP ARTISTRY</strong> based in Sribhumi, Assam.
                </p>
                <p>
                  My makeup philosophy is simple yet uncompromising: <em className="text-[#f3e5ab] font-serif-luxury">"Makeup should never mask your natural identity; it should elevate your innate grace with radiant confidence."</em>
                </p>
                <p>
                  Over the past 4+ years, I have had the privilege of transforming hundreds of brides, bridesmaids, and event guests. Every look is customized to your skin type, undertone, outfit color palette, and wedding lighting conditions to ensure absolute perfection in person and across high-definition photography.
                </p>
              </div>
            </div>

            {/* 5. Qualifications & Professional Standards */}
            <div className="space-y-3.5 pt-6 border-t border-[#22212a] mt-6">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#d4af37] uppercase">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Qualifications & Expertise</span>
              </div>

              <div className="space-y-3">
                {qualifications.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#14141d] border border-[#262432] hover:border-[#d4af37]/40 transition-colors"
                  >
                    <h4 className="text-xs sm:text-sm font-semibold text-[#f7e7ce] tracking-wide">
                      {q.title}
                    </h4>
                    <span className="text-[11px] text-[#d4af37] font-medium block mt-0.5">
                      {q.institution}
                    </span>
                    <p className="text-xs text-[#a09d96] mt-1.5 leading-relaxed">
                      {q.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Signature Specialties Badges */}
            <div className="space-y-3 pt-6 border-t border-[#22212a] mt-6">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#d4af37] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Signature Artistry Disciplines</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {specialties.map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-[#181824] border border-[#2b2938] text-[11px] sm:text-xs text-[#e0ddd5] font-medium flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. Studio Location & Contact Card */}
            <div className="pt-6 border-t border-[#22212a] mt-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#181824] to-[#121218] border border-[#d4af37]/35 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#d4af37] uppercase">
                    <MapPin className="w-4 h-4 text-[#d4af37]" />
                    <span>Studio Location & Booking Desk</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Sribhumi, Assam
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-[#f7e7ce] font-medium leading-relaxed">
                  {siteConfig.address.full}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>

                  <a
                    href={getPhoneCallUrl()}
                    className="px-4 py-2 rounded-xl bg-[#222230] hover:bg-[#2b2b3d] text-[#f7e7ce] text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 border border-white/10"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{siteConfig.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 8. Featured Signature Transformations Gallery Preview */}
            <div className="space-y-3 pt-6 border-t border-[#22212a] mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#d4af37] uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Recent Transformations</span>
                </div>
                <button
                  onClick={onBackToHome}
                  className="text-xs text-[#d4af37] hover:text-[#f3e5ab] font-medium cursor-pointer"
                >
                  View Full Portfolio →
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {featuredWorks.map((item) => (
                  <div
                    key={item.id}
                    className="relative aspect-square rounded-xl overflow-hidden bg-[#161620] border border-[#2a2836] group cursor-pointer"
                    onClick={onBackToHome}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                      <span className="text-[11px] font-bold text-[#f7e7ce] line-clamp-1">
                        {item.title}
                      </span>
                      <span className="text-[9px] text-[#d4af37] uppercase tracking-wider">
                        {item.categoryLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 9. Social Links & Bottom Actions */}
            <div className="pt-8 text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://www.instagram.com/punamkoiri2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#181824] hover:bg-[#252538] text-[#f7e7ce] border border-[#d4af37]/30 transition-all hover:scale-105"
                  title="Follow on Instagram"
                >
                  <InstagramIcon className="w-5 h-5 text-[#d4af37]" />
                </a>
                <a
                  href="https://www.facebook.com/punamkairiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#181824] hover:bg-[#252538] text-[#f7e7ce] border border-[#d4af37]/30 transition-all hover:scale-105"
                  title="Follow on Facebook"
                >
                  <FacebookIcon className="w-5 h-5 text-[#d4af37]" />
                </a>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-400 border border-emerald-500/40 transition-all hover:scale-105"
                  title="WhatsApp Direct"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto btn-gold px-10 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl cursor-pointer"
                >
                  BOOK YOUR MAKEUP SESSION WITH PUNAM
                </button>
              </div>

              <div className="text-[10px] text-[#7a7872] pt-2">
                PUNAM KAIRI MAKEUP ARTISTRY • SRIBHUMI, ASSAM • ALL RIGHTS RESERVED
              </div>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
};
