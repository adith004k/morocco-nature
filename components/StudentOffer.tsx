"use client";

import React from "react";

const StudentOffer = () => {
  return (
    <section className="bg-surface-variant py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-[12px] border-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Student skincare model"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC00oPe-zfkT4gNAyikVRMC2wm62a5mwYxiaQZULWFIDD15lV856CQFx1VZbO4VGvpahTDE-8I2UTH7NJzkofTvJQ1LePzTKeXmPEsAEiullzR1pKqyA_U6WAJdZ_7bwOL2CbE2BT2i6YZbB2CQIb6PHaaUsXJ3G5twQOJuhmCRry_L9nWXhdL_zrzbhzvnGQb8dnALMeVhzUKIzDv0k3b8phGFsC70CsRNTpEGuqG3cbsYbBYO92IUj_Ks6Oq9A5OicLNPnp1W7PjU"
              />
            </div>

            {/* OFFER BADGE */}
            <div className="absolute -top-8 -right-8 bg-primary text-white w-28 h-28 rounded-full flex flex-col items-center justify-center font-bold shadow-xl border-4 border-white">
              <span className="text-sm font-label uppercase tracking-tighter">
                Flat
              </span>
              <span className="text-3xl font-headline">20%</span>
              <span className="text-[10px] uppercase font-label">
                OFF
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-5xl font-headline text-on-surface mb-8">
              Student Beauty Offers
            </h2>

            <div className="w-20 h-1 bg-primary mb-10"></div>

            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed font-body">
              Exclusive discounts for students. Show your valid ID and enjoy our premium services at reduced prices. We believe luxury self-care should be accessible to everyone starting their journey.
            </p>

            {/* SERVICES LIST */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                "Facial & Cleanups",
                "Hair Styling",
                "Manicures",
                "Eyebrow Threading",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-xl">
                    verified
                  </span>
                  <span className="font-medium text-on-surface">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* ✅ FIXED WHATSAPP BUTTON */}
            <a
              href="https://wa.me/919961667296?text=Hi%20I%20want%20to%20book%20a%20student%20offer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-label text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-all shadow-md"
            >
              <span className="material-symbols-outlined">chat</span>
              BOOK VIA WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentOffer;