import React, { useState, useRef } from 'react';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { Download, Sparkles, Copy, Check, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { SectionHeader } from '../common/SectionHeader';

interface QRCodeSectionProps {
  onOpenMenuQuickView?: () => void;
}

export const QRCodeSection: React.FC<QRCodeSectionProps> = ({ onOpenMenuQuickView }) => {
  const [copied, setCopied] = useState(false);
  const qrCanvasRef = useRef<HTMLDivElement>(null);
  
  // Resolve base URL and append ?view=menu parameter for direct digital menu QR scans
  const baseOrigin = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : siteConfig.productionUrl;

  const targetUrl = `${baseOrigin}/?view=menu`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadQR = () => {
    const canvas = qrCanvasRef.current?.querySelector('canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'punam-kairi-digital-menu-qr.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section id="qrcode" className="py-20 sm:py-28 bg-[#0d0d12] relative border-y border-[#1f1e26]">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Instant Digital Pass"
          title="SCAN. BOOK. GLOW."
          subtitle="Scan the official QR code on visiting cards, standees & banners to open the instant digital services menu."
        />

        <div className="max-w-3xl mx-auto bg-[#131319] border border-[#d4af37]/35 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Corner Gold Ornaments */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: High-Contrast QR Code Card */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="p-4 bg-white rounded-2xl shadow-2xl border-4 border-[#d4af37] flex flex-col items-center relative group">
                
                {/* Visible Vector QR Code */}
                <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] flex items-center justify-center">
                  <QRCodeSVG
                    value={targetUrl}
                    size={200}
                    level="H"
                    includeMargin={false}
                    imageSettings={{
                      src: siteConfig.branding.logoImage,
                      x: undefined,
                      y: undefined,
                      height: 42,
                      width: 42,
                      excavate: true,
                    }}
                  />
                </div>

                {/* Hidden Canvas for High-Resolution PNG Export */}
                <div ref={qrCanvasRef} className="hidden">
                  <QRCodeCanvas
                    value={targetUrl}
                    size={600}
                    level="H"
                    includeMargin={true}
                    imageSettings={{
                      src: siteConfig.branding.logoImage,
                      x: undefined,
                      y: undefined,
                      height: 120,
                      width: 120,
                      excavate: true,
                    }}
                  />
                </div>

                <div className="mt-2 text-center">
                  <span className="text-[10px] font-display font-bold tracking-widest text-[#0a0a0c] uppercase block">
                    PUNAM KAIRI
                  </span>
                  <span className="text-[8px] tracking-[0.2em] text-[#8e8c85] font-medium uppercase">
                    DIGITAL MENU PASS
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Information & Print / Share CTAs */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c24] border border-[#d4af37]/30 text-[#f3e5ab] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>One-Tap Service Discovery</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#f7e7ce]">
                One Code. Instant Booking.
              </h3>

              <p className="text-xs sm:text-sm text-[#cfccc4] font-light leading-relaxed">
                When customers scan this code from banners, hoardings, standees, or visiting cards, they immediately see the clean digital services menu with categorized prices, duration, and direct WhatsApp booking.
              </p>

              <div className="p-3 rounded-xl bg-[#0e0e13] border border-[#26242c] text-[11px] text-[#a09d96] font-mono break-all text-left">
                <span className="text-[#d4af37]">Scan Landing URL: </span>
                {targetUrl}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <button
                  onClick={handleDownloadQR}
                  className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-transform"
                >
                  <Download className="w-3.5 h-3.5 text-[#0a0a0c]" />
                  <span>Download Print QR</span>
                </button>

                {onOpenMenuQuickView && (
                  <button
                    onClick={onOpenMenuQuickView}
                    className="btn-outline-gold px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Preview Menu View</span>
                  </button>
                )}

                <button
                  onClick={handleCopyLink}
                  className="px-3.5 py-2.5 rounded-xl bg-[#181822] hover:bg-[#20202e] border border-white/10 text-xs text-[#cfccc4] flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#d4af37]" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
