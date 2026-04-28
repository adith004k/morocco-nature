import React from 'react';

const CTASection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-primary-container/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <span className="text-[14rem] font-headline select-none">Grace</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline text-on-surface relative z-10 leading-tight">Ready for your glow-up?</h2>
        </div>
        <p className="text-xl text-on-surface-variant mb-12 font-body max-w-2xl mx-auto leading-relaxed">
          Book your appointment in less than 30 seconds. Experience the finest beauty services in Meenchanda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto btn-gold px-12 py-5 rounded-full font-label text-xs font-bold tracking-[0.2em] uppercase shadow-xl shadow-primary/20">
            BOOK NOW
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-12 py-5 rounded-full font-label text-xs font-bold tracking-[0.2em] uppercase hover:scale-105 transition-transform shadow-lg">
            <span className="material-symbols-outlined">chat</span>
            WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
