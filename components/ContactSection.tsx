"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline text-on-surface mb-8">
                Visit Our Sanctuary
              </h2>
              <div className="w-20 h-1 bg-primary mb-10"></div>
            </div>

            <div className="space-y-10">

              {/* ADDRESS */}
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  location_on
                </span>
                <div>
                  <h4 className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2">
                    Our Address
                  </h4>
                  <p className="text-xl text-on-surface font-body leading-relaxed">
                    Galeela Tower, Mini Bypass Road,
                    <br />
                    Meenchanda, Calicut – 673018
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  schedule
                </span>
                <div>
                  <h4 className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2">
                    Working Hours
                  </h4>
                  <p className="text-xl text-on-surface font-body">
                    9:30 AM – 6:30 PM (Daily)
                  </p>
                </div>
              </div>

              {/* CONTACT */}
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  contact_support
                </span>
                <div>
                  <h4 className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2">
                    Get in Touch
                  </h4>
                  <p className="text-xl text-on-surface font-body mb-1 font-bold">
                    +91 9961667296
                  </p>
                  <p className="text-lg text-on-surface-variant font-body">
                    morocconaturecalicut@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">

              {/* CALL */}
              <a
                href="tel:+919961667296"
                className="flex items-center justify-center gap-3 bg-surface-variant text-on-surface px-8 py-4 rounded-xl font-label text-xs font-bold tracking-[0.2em] uppercase border border-primary/10 hover:bg-primary-container transition-colors"
              >
                <span className="material-symbols-outlined text-xl">phone</span>
                CALL NOW
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919961667296?text=Hi%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 btn-gold px-8 py-4 rounded-xl font-label text-xs font-bold tracking-[0.2em] uppercase shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
                WHATSAPP
              </a>

            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl -rotate-2 scale-105"></div>

            <div className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white">

              {/* ✅ REAL GOOGLE MAP */}
              <iframe
                src="https://www.google.com/maps?q=Galeela%20Tower%20Mini%20Bypass%20Road%20Meenchanda%20Calicut&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;