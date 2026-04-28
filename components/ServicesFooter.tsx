import React from 'react';

const ServicesFooter = () => {
  return (
    <footer className="py-24 px-6 bg-surface-container border-t-2 border-primary/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <p className="font-headline text-2xl font-semibold text-primary mb-6">Morocco Nature</p>
          <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-8">
            Expert beauty care &amp; bridal transformations crafted with passion in the heart of Calicut.
          </p>
          <div className="flex space-x-6 text-primary">
            <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">share</span>
            <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">call</span>
            <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">mail</span>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-on-surface uppercase tracking-[0.2em] mb-6 font-extrabold">Atelier Location</p>
          <p className="text-on-surface-variant text-xs font-light leading-relaxed uppercase tracking-wider">
            GALEELA TOWER, MINI BYPASS ROAD,<br/>MEENCHANDA, CALICUT – 673018
          </p>
        </div>
        <div>
          <p className="text-[10px] text-on-surface uppercase tracking-[0.2em] mb-6 font-extrabold">Get in Touch</p>
          <p className="text-on-surface-variant text-xs font-light mb-2">+91 9961667296</p>
          <p className="text-on-surface-variant text-xs font-light">morocconaturecalicut@gmail.com</p>
        </div>
        <div>
          <p className="text-[10px] text-on-surface uppercase tracking-[0.2em] mb-6 font-extrabold">Visiting Hours</p>
          <p className="text-on-surface-variant text-xs font-light">
            Monday – Sunday<br/>9:30 AM – 6:30 PM
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-outline-variant/10 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant/40">
        © 2024 Morocco Nature Beauty Clinic.
      </div>
    </footer>
  );
};

export default ServicesFooter;
