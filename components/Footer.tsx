import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-stone-200/60 border-t border-stone-300/50 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-headline italic font-bold text-on-surface mb-8">Morocco Nature Beauty Clinic</h3>
            <p className="text-on-surface-variant font-body leading-relaxed mb-8">
              Elevating beauty standards in Calicut through specialized care and premium experiences since 2018.
            </p>
          </div>
          <div>
            <h4 className="font-label text-[10px] tracking-[0.3em] uppercase text-primary mb-8 font-bold">Location</h4>
            <p className="text-on-surface-variant font-body leading-relaxed">
              Galeela Tower, Mini Bypass Road,<br />
              Meenchanda, Calicut – 673018
            </p>
          </div>
          <div>
            <h4 className="font-label text-[10px] tracking-[0.3em] uppercase text-primary mb-8 font-bold">Contact</h4>
            <div className="space-y-4">
              <p className="text-on-surface-variant font-body flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">call</span>
                +91 9961667296
              </p>
              <p className="text-on-surface-variant font-body flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                morocconaturecalicut@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-label text-[10px] tracking-[0.3em] uppercase text-primary mb-8 font-bold">Hours</h4>
            <p className="text-on-surface-variant font-body">
              9:30 AM – 6:30 PM (Daily)
            </p>
          </div>
        </div>
        <div className="pt-10 border-t border-stone-200/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-on-surface-variant text-[11px] font-label font-medium uppercase tracking-widest">
            © 2024 Morocco Nature Beauty Clinic. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <Link className="text-on-surface-variant text-[10px] font-bold font-label tracking-[0.2em] uppercase hover:text-primary transition-colors cursor-pointer" href="/">STUDENT DISCOUNT POLICY</Link>
            <Link className="text-on-surface-variant text-[10px] font-bold font-label tracking-[0.2em] uppercase hover:text-primary transition-colors cursor-pointer" href="/">PRIVACY POLICY</Link>
            <Link className="text-on-surface-variant text-[10px] font-bold font-label tracking-[0.2em] uppercase hover:text-primary transition-colors cursor-pointer" href="/">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
