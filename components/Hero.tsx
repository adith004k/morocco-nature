"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center px-6 md:px-12 py-24 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10 order-2 md:order-1">
          <span className="inline-block px-4 py-1.5 bg-primary-container text-primary rounded-full text-[10px] font-bold tracking-[0.2em] mb-8 uppercase">
            ESTABLISHED LUXURY
          </span>

          <h1 className="text-5xl md:text-7xl font-headline leading-[1.1] text-on-surface mb-8">
            Best Beauty Parlour in{" "}
            <span className="italic text-primary">
              Meenchanda, Calicut
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-headline italic text-on-surface-variant mb-6">
            Student Deals & Bridal Experts
          </p>

          <p className="text-secondary font-medium tracking-wide mb-12 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">
              auto_awesome
            </span>
            Student deals available starting this month
          </p>

          {/* ✅ FIXED BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5">

            <Link
              href="/services"
              className="btn-gold px-10 py-4 rounded-full font-label text-xs font-bold tracking-widest uppercase shadow-lg shadow-primary/20 text-center"
            >
              EXPLORE SERVICES
            </Link>

            <Link
              href="/bridal"
              className="btn-outline px-10 py-4 rounded-full font-label text-xs font-bold tracking-widest uppercase text-center"
            >
              VIEW BRIDAL PORTFOLIO
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-1 md:order-2">
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-primary-container rounded-full blur-3xl opacity-60"></div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Luxury salon interior"
              className="w-full h-full object-cover"
              src="/gallery/interior5.jpg"
            />
          </div>

          <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-2xl shadow-xl border border-primary/10 hidden lg:block">
            <div className="flex items-center gap-5">
              <span className="text-5xl font-headline text-primary">
                10+
              </span>
              <span className="text-[10px] font-bold font-label leading-relaxed tracking-[0.2em] uppercase text-on-surface-variant">
                YEARS OF
                <br />
                EXCELLENCE
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;