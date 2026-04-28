import React from 'react';

const ServicesHero = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="order-2 md:order-1">
        <span className="inline-block border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-8">
          Bespoke Beauty Care
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8">
          Our Services <br /> & Pricing
        </h1>

        <p className="text-lg md:text-xl text-on-surface-variant font-light max-w-xl leading-relaxed">
          Transparent luxury for premium skincare and bridal artistry in Meenchanda. Experience the fusion of heritage and modern elegance.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="order-1 md:order-2">
        <div className="relative">
          <div className="absolute -inset-4 bg-surface-container rounded-xl -rotate-1 -z-10"></div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Luxury spa products"
            className="w-full aspect-[4/5] object-cover rounded-xl shadow-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHduNNU587FMptBg_lBbFG1LhPLvfIojfevytKgsMDZgvF_wAQIaE__8dY_tOwjwegRp7ARkEzXr9-egmDHwWiJuoB6LyyhyJv0rVoFadsd6uShEfhEDDC2JdvmJi_QnfvNJ0BLJ9ekYVTWkB45S1EtSsjjUKiPxFtAz9T5xKFBkCFxVwZxbgxp8wbXkU0f1E14KfYmqp6KRHHik0BGKlF1A6FX5Ynht9qn2taX29G-ouSsFRMi3bHQmzN3uwq80jld0e-jwV8x29P"
          />
        </div>
      </div>

    </section>
  );
};

export default ServicesHero;