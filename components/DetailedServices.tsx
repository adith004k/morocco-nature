"use client";

import React from "react";
import Link from "next/link";

const DetailedServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-24">

      {/* TAB NAVIGATION */}
      <div className="sticky top-[70px] md:top-[100px] z-30 bg-surface/95 backdrop-blur-md py-3 md:py-4 mb-16 md:mb-20 border-b border-outline-variant/30">

        <div className="flex gap-3 md:gap-6 overflow-x-auto no-scrollbar md:justify-center px-2">

          {[
            { href: "#face", label: "Face" },
            { href: "#hair", label: "Hair" },
            { href: "#hand-leg", label: "Hand & Leg" },
            { href: "#makeup", label: "Makeup" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 md:px-6 py-2 md:py-2.5 
              text-[11px] md:text-xs 
              whitespace-nowrap
              rounded-full 
              border border-outline-variant 
              text-on-surface-variant
              font-medium tracking-wide
              transition-all duration-300

              hover:border-primary 
              hover:text-primary 
              hover:bg-primary/5"
            >
              {item.label}
            </Link>
          ))}

        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-24 md:space-y-32">
        {/* Face Section */}
        <div className="scroll-mt-[90px] md:scroll-mt-[110px]" id="face">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-light mb-4">Face Services</h2>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>
            {/* <p className="text-on-surface-variant text-sm font-light max-w-sm leading-relaxed">
              Rejuvenate your natural glow with our signature facial rituals and botanical infusions.
            </p> */}
          </div>

          {/* Hydra Facial Highlight */}
          <div className="bg-white p-8 rounded-lg border border-outline-variant/30 services-card-shadow flex flex-col md:flex-row gap-10 items-center mb-12">
            <div className="w-full md:w-80 h-80 overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Hydra facial" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpzmGXPu11CGlKNA1WVSIwDuxGDnKUqkcafC1fH2nsXZZ9vHH7tHX5v8GtEaNUTNUYGkWnJTcdU8SQFYBhIRcJkPJVpi6V2gowcBplAwUNiYUAhdTEA5IufWmaBi8jVuKzp0Ee6HhccehEuaEdFV9Dou4ZfjpMnVbiDh82azZ2sCBfUlMaFLuWFXesjcR_kZY1_zNO2QCO_68xlJOeYJSzyNli-hIEF5QPQq0GReNUClehXArmun54uDazNllZaUUpgcPFVwyQEInS" />
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-primary text-[18px] font-bold tracking-[0.3em] uppercase">Signature Treatment</span>
              <h3 className="text-3xl font-light">Hydra Facial Elite</h3>
              <p className="text-on-surface-variant font-light text-sm leading-relaxed max-w-lg">
                Our premier multi-step treatment that combines cleansing, exfoliation, and intense hydration for an immediate radiant finish.
              </p>
              <div className="text-2xl font-semibold text-primary">₹3,500<span className="text-xs font-normal text-on-surface-variant ml-1">starting</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
            <div className="divide-y divide-outline-variant/20">
              <div className="flex justify-between py-5 group"><span className="font-medium group-hover:text-primary transition-colors">Threading</span><span className="font-semibold">₹60</span></div>
              <div className="flex justify-between py-5 group"><span className="font-medium group-hover:text-primary transition-colors">Bleach</span><span className="font-semibold">₹350</span></div>
              <div className="flex justify-between py-5 group"><span className="font-medium group-hover:text-primary transition-colors">Cleanup</span><span className="font-semibold">₹450</span></div>
            </div>
            <div className="divide-y divide-outline-variant/20">
              <div className="flex justify-between py-5 group"><span className="font-medium group-hover:text-primary transition-colors">Papaya Facial</span><span className="font-semibold">₹850</span></div>
              <div className="flex justify-between py-5 group"><span className="font-medium group-hover:text-primary transition-colors">Gold / Pearl Facial</span><span className="font-semibold">₹1800</span></div>
              <div className="flex justify-between py-5 group"><span className="font-medium group-hover:text-primary transition-colors">D-Tan Facial</span><span className="font-semibold">₹1500</span></div>
            </div>
          </div>
        </div>

        {/* Hair Section */}
        <div className="scroll-mt-[90px] md:scroll-mt-[110px]" id="hair">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-light mb-4">Hair Services</h2>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-10 rounded-lg border border-outline-variant/20">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary">spa</span>
                <h3 className="text-xl font-medium tracking-wide">Rituals &amp; Care</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-outline-variant/10 pb-4"><span className="text-on-surface-variant text-sm">Henna Therapy</span><span className="font-bold">₹650</span></div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-4"><span className="text-on-surface-variant text-sm">Hot Oil Infusion</span><span className="font-bold">₹650</span></div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-4"><span className="text-on-surface-variant text-sm">Advanced Hair Spa</span><span className="font-bold">₹1000+</span></div>
                <div className="flex justify-between pb-2"><span className="text-on-surface-variant text-sm">Premium Gold Spa</span><span className="font-bold">₹1500+</span></div>
              </div>
            </div>
            <div className="bg-surface-container p-10 rounded-lg border border-outline-variant/20">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary">auto_fix_high</span>
                <h3 className="text-xl font-medium tracking-wide">Transformations</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-outline-variant/10 pb-4"><span className="text-on-surface-variant text-sm">Keratin Smoothening</span><span className="font-bold">₹6000</span></div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-4"><span className="text-on-surface-variant text-sm">Japanese Straightening</span><span className="font-bold">₹7000</span></div>
                <div className="flex justify-between pb-2"><span className="text-on-surface-variant text-sm">Permanent Blow Dry</span><span className="font-bold">₹6000</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hand & Leg Section */}
        <div className="scroll-mt-[90px] md:scroll-mt-[110px]" id="hand-leg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-lg overflow-hidden h-[500px] shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Manicure" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUhBtCQwzKolJNv2ojnXdX4DUbdacVIBiRtZT6hlVulXOs97wf2ngB-P4g5XXFsYS6FCUuWmGwjSw7QdPHR0HI1PRM9cllsbaWY8g46jgiO2iZdSUPn5bolHBEf56RKaFY1-NB-F7t9u-50iQZSZFJ7Fpq8Pn_0c_d4t3772bnRtDIgk2rAUVGRjSXZVYZdl2BvYec20xPZVofJr06p0LPG8JthkmC9N7yysu5Al5OWdR7i_vNjnAl7oSuuAJe9rKGCOqJsa36A8J3" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-4xl font-light mb-2 text-[#ffffff]">Hand &amp; Leg</h2>
                <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-80 text-[#ffffff]">Refinement at your fingertips</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white p-5 rounded-lg services-card-shadow border border-outline-variant/10">
                  <div><p className="font-semibold text-sm">Classic Pedicure</p><p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Grooming &amp; Hydration</p></div>
                  <span className="text-primary font-bold">₹750</span>
                </div>
                <div className="flex justify-between items-center bg-white p-5 rounded-lg services-card-shadow border border-outline-variant/10">
                  <div><p className="font-semibold text-sm">Spa Manicure</p><p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Deep Nourishment</p></div>
                  <span className="text-primary font-bold">₹750</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/20">
                  <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-4">Waxing</p>
                  <div className="text-xs space-y-3">
                    <div className="flex justify-between"><span>Full Hand</span><span>₹950</span></div>
                    <div className="flex justify-between"><span>Full Leg</span><span>₹950</span></div>
                  </div>
                </div>
                <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/20">
                  <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-4">Specialty</p>
                  <div className="text-xs space-y-3">
                    <div className="flex justify-between"><span>Roll-on Hand</span><span>₹1500</span></div>
                    <div className="flex justify-between"><span>Heel Bleach</span><span>₹950</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Makeup Section */}
        <div className="scroll-mt-[90px] md:scroll-mt-[110px]" id="makeup">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Bridal &amp; Event Artistry</h2>
            <p className="text-on-surface-variant text-sm font-light max-w-2xl mx-auto leading-relaxed">
              Where heritage meets high-definition. Our master artists create bespoke looks that accentuate your inherent grace.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Featured Makeup */}
            <div className="md:col-span-2 md:row-span-2 bg-[#1A1A1A] rounded-lg p-12 text-[#ffffff] flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block border border-primary/50 text-primary px-3 py-1 rounded-sm text-[8px] font-bold uppercase tracking-[0.4em] mb-10">Premium Airbrush</span>
                <h3 className="text-4xl font-light mb-6 text-[#ffffff]">Master Bridal Look</h3>
                <p className="text-stone-400 font-light text-sm leading-relaxed mb-10 max-w-xs">Flawless HD finish designed for long-wear performance and cinematic clarity on your most special day.</p>
                <span className="text-4xl font-bold text-primary">₹25,000</span>
              </div>
              <div className="mt-12 relative z-10">
                <a
                  href="https://wa.me/919961667296?text=Hi%20I%20want%20to%20book%20Bridal%20Makeup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-3 rounded-sm font-bold uppercase text-[9px] tracking-[0.2em] hover:brightness-110 transition-all inline-block text-center"
                >
                  Book Artist
                </a>              </div>
              <span className="material-symbols-outlined absolute -right-16 -bottom-16 text-[300px] text-[#ffffff]/5 pointer-events-none">auto_awesome</span>
            </div>

            {/* Options */}
            <div className="md:col-span-2 bg-white rounded-lg p-8 services-card-shadow border border-outline-variant/20 flex justify-between items-center">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Engagement HD</h3>
                <p className="text-on-surface-variant text-xs font-light">Sophisticated camera-ready finish</p>
                <div className="text-2xl font-bold text-primary pt-2">₹10,000</div>
              </div>
              <div className="w-32 h-32 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Makeup finish" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj1WzXfdfZxCPx6jQ84KY33-AcxNjzYrYi_gdhJAwa1crYMtm1Ycad9QTJ3RqEVDgq-ke004nmhU44auie4lk-LJhDjfxn_uVamELUQakH93-ku4EV9CJA5b5PDCN9wff4Bm72VIy_ObsHeTSbC8LaPoG0ctXxrVjd2kv5zMcwldeDsKO2rJ2U1iZCnzIs3-dVZIIZp2Q8SiG6BCCF0-c6McsDV4fhDKtBSa26DsZlMqOoKFDovaFp1o0pQpEklA6lHyQY6hIm8j9J" />
              </div>
            </div>

            <div className="bg-surface-container-low rounded-lg p-8 border border-outline-variant/20">
              <h4 className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] mb-6">Occasion Art</h4>
              <ul className="space-y-4 text-xs">
                <li className="flex justify-between border-b border-outline-variant/10 pb-2"><span>Wedding HD</span><span className="font-bold">₹12,000</span></li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-2"><span>Reception</span><span className="font-bold">₹8,000</span></li>
                <li className="flex justify-between pb-2"><span>Guest Glam</span><span className="font-bold">₹3,500</span></li>
              </ul>
            </div>

            <div className="bg-surface-container-low rounded-lg p-8 border border-outline-variant/20">
              <h4 className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] mb-6">Quick Styling</h4>
              <ul className="space-y-4 text-xs">
                <li className="flex justify-between border-b border-outline-variant/10 pb-2"><span>Hair Design</span><span className="font-bold">₹1,000</span></li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-2"><span>Saree Draping</span><span className="font-bold">₹500</span></li>
                <li className="flex justify-between pb-2"><span>Face Makeup</span><span className="font-bold">₹1,500</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
