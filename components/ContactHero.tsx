import React from 'react';

const ContactHero = () => {
  return (
    <section className="py-24 pt-32 px-6 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1">
        <span className="font-label text-xs uppercase tracking-[0.25em] text-primary mb-6 block font-bold">Reservation</span>
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-[1.1] mb-8">
          Your Moment of <br/>
          <span className="italic text-primary/80">Pure Grace</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-md leading-relaxed mb-12">
          Experience bespoke beauty treatments in the heart of Calicut. Reserve your sanctuary today for an unparalleled glow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex items-start gap-5">
            <div className="bg-primary/10 p-3 rounded-lg">
              <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-2 text-on-surface">Our Atelier</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Galeela Tower, Mini Bypass Road, Meenchanda, Calicut</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="bg-primary/10 p-3 rounded-lg">
              <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-2 text-on-surface">Hours</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Mon - Sat: 10AM - 8PM<br/>Sun: 11AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 relative">
        <div className="rounded-lg overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] rotate-1 hover:rotate-0 transition-transform duration-1000">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            alt="Luxurious minimalist spa interior" 
            className="w-full h-[580px] object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSppK0-yx_fN7BZmotY8wHu0jyh1JGmAWX-E7SNU5U0g6eWH6IJ7lqpCBD0_G58OK7m8aAG6j4ApL11V_lYqyTgNVZJs9dte4UoddspWUUTFwSPgZPDTVo33RkS_PYLsdvbP8RxQgSmAiqOlBW5LEbhdXl2sTslb4Hwb2x-smSNu3l8CtEuGvev-t0UidayDlGvEYRuxZApzJdQ7A0HALfxxjrlQbXlYUlh5jklcPzXJXwMQN5P0IcpfY_B4oZtwSV4lzPPvSP8mFk" 
          />
        </div>
        <div className="absolute -bottom-8 -left-8 bg-white p-10 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] hidden md:block max-w-[280px] border border-surface-container-high/30">
          <p className="font-headline text-2xl text-primary italic mb-3 leading-tight">"Glow is the essence of Grace."</p>
          <div className="w-8 h-0.5 bg-primary/30 mb-3"></div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Signature Philosophy</p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
