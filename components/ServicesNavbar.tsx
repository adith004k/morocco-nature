import React from 'react';

const ServicesNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-low/90 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <a className="font-headline text-2xl font-semibold tracking-tight text-on-surface" href="/">Morocco Nature</a>
        <div className="hidden md:flex space-x-8 font-body text-xs uppercase tracking-[0.2em]">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="/">Home</a>
          <a className="text-primary font-bold border-b-2 border-primary pb-1" href="/services">Services</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Bridal</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Gallery</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
        </div>
        <button className="bg-primary text-[#ffffff] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default ServicesNavbar;
