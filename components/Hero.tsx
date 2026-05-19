"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/interior5.jpg"
          alt="Professional bridal makeup and beauty services in Meenchanda Calicut"
          fill
          priority
          className="object-cover object-[86%_center] md:object-center"
        />
      </div>

      {/* OVERLAY FOR TEXT READABILITY */}
      <div
        className="absolute inset-0
  bg-gradient-to-r
  from-[#f8f4ef]/88
  via-[#f8f4ef]/52
  to-transparent
  md:bg-gradient-to-r
  md:from-[#f8f4ef]/94
  md:via-[#f8f4ef]/76
  md:to-transparent"
      />

      {/* CONTENT */}
      <div className="relative z-10 min-h-[90vh] md:min-h-screen flex items-start md:items-center px-6 md:px-12 pt-48 md:pt-0">
        <div className="max-w-[280px] pt-6 md:max-w-2xl">

          {/* TOP BADGE */}
          <span className="inline-block px-4 py-2 bg-primary-container text-primary rounded-full text-[10px] font-bold tracking-[0.2em] mb-8 uppercase">
            Established Luxury
          </span>

          {/* SEO H1 */}
          <h1 className="text-4xl md:text-7xl font-headline leading-[1.05] mb-5">
            <span className="text-[#f7eee5] md:text-[#1e1712] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] md:drop-shadow-none">
              Best Beauty Parlour in{" "}
            </span>

            <span className="italic text-[#d4a547] md:text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
              Meenchanda, Calicut
            </span>

          </h1>

          {/* MAIN SUBTITLE */}
          <p className="text-lg md:text-2xl font-headline italic text-[#2f241d] md:text-on-surface-variant drop-shadow-sm mb-4">
            Bridal Makeup, Hair Styling & Skin Care Experts
          </p>

          {/* SECONDARY TEXT */}
          <p className="text-base md:text-xl text-[#2f241d] md:text-on-surface-variant mb-8">
            Student beauty offers, bridal packages, facials,
            threading, manicure & premium skincare services.
          </p>

          {/* OFFER */}
          <p className="text-secondary font-medium tracking-wide mb-12 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">
              auto_awesome
            </span>
            Student deals available starting this month
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">

            <Link
              href="/services"
              className="btn-gold px-8 py-3 md:px-10 md:py-4 rounded-full font-label text-xs font-bold tracking-widest uppercase shadow-lg shadow-primary/20 text-center mx-auto sm:mx-0 w-[260px] sm:w-auto"
            >
              Explore Services
            </Link>

            <Link
              href="/bridal"
              className="btn-outline bg-white/80 backdrop-blur-sm px-8 py-3 md:px-10 md:py-4 rounded-full font-label text-xs font-bold tracking-widest uppercase text-center mx-auto sm:mx-0 w-[260px] sm:w-auto"
            >
              Bridal Portfolio
            </Link>

          </div>

          {/* EXPERIENCE CARD */}
          <div className="hidden lg:flex items-center gap-5 mt-14 bg-white/85 backdrop-blur-md w-fit px-8 py-5 rounded-2xl shadow-xl border border-primary/10">
            <span className="text-5xl font-headline text-primary">
              10+
            </span>

            <span className="text-[10px] font-bold font-label leading-relaxed tracking-[0.2em] uppercase text-on-surface-variant">
              Years Of
              <br />
              Excellence
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;