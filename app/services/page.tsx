import React from 'react';
import ServicesNavbar from '@/components/ServicesNavbar';
import Navbar from '@/components/Navbar';
import ServicesHero from '@/components/ServicesHero';
import ServicePathSelection from '@/components/ServicePathSelection';
import DetailedServices from '@/components/DetailedServices';
import ServicesCTA from '@/components/ServicesCTA';
import ServicesFooter from '@/components/ServicesFooter';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 text-[17px] md:text-[18px]">
        <ServicesHero />
        <ServicePathSelection />
        <DetailedServices />
        <ServicesCTA />
      </main>
      <ServicesFooter />

      {/* WhatsApp Floating Button */}
      <a
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform active:scale-95"
        href="https://wa.me/919961667296?text=Hi,%20I%20want%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="material-symbols-outlined !text-[32px]"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
        >
          chat
        </span>
      </a>
    </>
  );
}
