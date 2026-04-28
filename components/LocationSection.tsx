import React from 'react';

const LocationSection = () => {
  return (
    <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">Find Your Grace</h2>
          <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
            Located conveniently in Meenchanda, Calicut, at Galeela Tower on the Mini Bypass Road. Our clinic offers a quiet retreat from the city's pace.
          </p>
          <div className="space-y-6">
            <div className="bg-white border border-surface-container-high/40 p-6 rounded-lg flex items-center gap-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] transition-transform hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div>
                <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1">Call Us</p>
                <p className="font-bold text-lg text-on-surface">+91 9961667296</p>
              </div>
            </div>
            <a 
              href="https://wa.me/919961667296" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-white border border-surface-container-high/40 p-6 rounded-lg flex items-center gap-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              </div>
              <div>
                <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1">WhatsApp</p>
                <p className="font-bold text-lg text-on-surface">+91 9961667296</p>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:col-span-7 h-[550px] rounded-lg overflow-hidden shadow-inner bg-surface-container-high relative border border-surface-container-high">
          {/* Map Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-stone-100/50 backdrop-blur-sm z-10">
            <div className="text-center p-8 bg-white/90 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] border border-primary/10 max-w-sm">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">map</span>
              <p className="font-headline italic text-xl text-on-surface mb-2">Meenchanda, Calicut</p>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant">GALEELA TOWER, MINI BYPASS ROAD</p>
              <a 
                href="https://maps.google.com/?q=Galeela+Tower,+Meenchanda,+Calicut" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-block border border-primary text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                Open in Maps
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            alt="Map area Calicut" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU8VNAzCZ1pR_dKcNVPhE6f7-KpPAFtFLUf4tTdxihY_BlUK5R4Sm1TyPqsvQQckFcnmPSdrqciYzySWGsbCa3xoweBfFG-5oQYPUzJn4rgPjmNzpPSJDSl91fXqcpPz4mVL2eGINaSp_ORoW1Q1LHGs0OW4EeEdClaYZj3E8vlUQi92zV2nOKsJgleGE57j3-45yIwKOPY9tjnIR9aJs70YDnFXFnIHNaK1N2Vt3USf5YaP0WXilR_OdoI4YiVwvcv43s-oRF_b5P" 
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
