import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline mb-4">Choose Your Beauty Path</h2>
          <p className="text-primary font-label tracking-[0.2em] uppercase text-xs font-bold">Tailored experiences for every milestone</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Student Card */}
          <div className="group relative bg-white rounded-2xl overflow-hidden p-10 border border-primary/10 card-shadow transition-all duration-500 hover:-translate-y-2">
            <div className="flex justify-between items-start mb-12">
              <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <span className="px-4 py-1.5 bg-primary text-white rounded-full text-[10px] font-bold font-label tracking-[0.15em] uppercase">20% OFF FOR STUDENTS</span>
            </div>
            <h3 className="text-3xl font-headline mb-4 group-hover:text-primary transition-colors">The Student Glow</h3>
            <p className="text-on-surface-variant mb-10 max-w-md font-body leading-relaxed">Budget-friendly premium care. Perfect for daily routines, college events, or just a weekend refresh.</p>
            <div className="relative rounded-xl overflow-hidden h-72 mb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Skincare application" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close up of serum being applied to youthful skin in a bright minimalist aesthetic with soft bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAocf5jpLpHJw7HtAjhNQ7RGivfJL4BSoHCIdPCP4zvN2hRDNuMmMjXtkg9ZKae2iyapqwD1TG6agMCsaMJqQrshLimp3MOtjpOwCqvB7Ys5nOqTWe0yd0NMGKVZkXElzQChbKVbsiEd9g39i8x-CE4wHT2BJipYuouHt756OPZP8sxffiBUaMzsl4AThrGMlvoGCe-1GgZhyQZLjkAruZMBP1kurN56xrRoJNQtSuB9sqZf6FQ-qEVBTRRuEAwl9cqw4hUKPTRcHLW"/>
            </div>
            <Link className="inline-flex items-center gap-2 font-label text-xs font-bold tracking-widest text-primary uppercase group/link relative z-20 cursor-pointer" href="/services/student">
              EXPLORE OFFERS <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          {/* Bridal Card */}
          <div className="group relative bg-surface-variant rounded-2xl overflow-hidden p-10 border border-primary/5 card-shadow transition-all duration-500 hover:-translate-y-2">
            <div className="flex justify-between items-start mb-12">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">favorite</span>
              </div>
              <span className="px-4 py-1.5 bg-on-surface text-white rounded-full text-[10px] font-bold font-label tracking-[0.15em] uppercase">PREMIUM SERVICE</span>
            </div>
            <h3 className="text-3xl font-headline mb-4 group-hover:text-primary transition-colors">The Bridal Sanctuary</h3>
            <p className="text-on-surface-variant mb-10 max-w-md font-body leading-relaxed">Comprehensive bridal packages including makeup, hair, and pre-wedding skincare for your special day.</p>
            <div className="relative rounded-xl overflow-hidden h-72 mb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Bridal makeup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Exquisite bridal makeup details with delicate jewelry and traditional elements in a warm romantic high-key lighting style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRGBxd3-6MHYR7IcoOcB6rOl0NxFTf1C85dfh4uPoRZ9YeO6O7FdTxj9bj9cBtmcVxQTlH4iTU8qqwauhSBCeFGs1l83y0YZseFa0Sn9W8yIJnqCWJQp6HDh1wkmhgHpY1Da-gJBoA934W5S3DOlTm96vdl2M0bsu2YqwKurd6UWZKxR06lTa8rHZLKGDBHzBL3Ggx0Li7PtQyIZrXA9j8pV3--FMpP_5pPT_TpPF9sgMW9ocmN-3FEysKyLlFDLj2RYP2L8Vm16mH"/>
            </div>
            <Link className="inline-flex items-center gap-2 font-label text-xs font-bold tracking-widest text-on-surface uppercase group/link relative z-20 cursor-pointer" href="/bridal">
              CONSULT OUR EXPERTS <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
