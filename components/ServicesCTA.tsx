import React from 'react';
import Link from 'next/link';

const ServicesCTA = () => {
  return (
    <section className="bg-surface-container-low py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-10 leading-tight">Elevate your essence.</h2>
        <p className="text-on-surface-variant font-light text-lg mb-16 max-w-xl mx-auto">
          Book your personalized consultation at our Meenchanda clinic and discover beauty redefined.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* <a className="bg-primary text-[#ffffff] px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer relative z-10" href="https://wa.me/919961667296" target="_blank" rel="noopener noreferrer">
            WhatsApp Booking
          </a> */}
          <Link className="bg-primary text-[#ffffff] px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer relative z-10" href="/gallery">
            View Portfolios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
