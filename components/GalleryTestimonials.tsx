"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const testimonials = [
  {
    name: "Amritha Balasubramanian",
    review: "Fantastic saree draping and makeup. Everything was on time and I received many compliments.",
    rating: 5,
  },
  {
    name: "Devika S Nair",
    review: "Loved the hair smoothening service. Staff were friendly and very professional.",
    rating: 5,
  },
  {
    name: "ASWATHI UK",
    review: "Wonderful experience with courteous and professional staff. One of the best in Calicut.",
    rating: 5,
  },
  {
    name: "Archana Bhat",
    review: "100% satisfied. Staff were friendly and bridal makeup was perfectly done.",
    rating: 5,
  },
  {
    name: "Keerthana Tharal",
    review: "Amazing bridal makeover experience. They made my special day even better.",
    rating: 5,
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const GalleryTestimonials = () => {
  return (
    <section className="py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6">What Our Clients Say</h2>
        <div className="w-20 h-[2px] bg-[#C9A24A] mx-auto opacity-70"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.slice(0, 6).map((testi, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 p-6 rounded-2xl shadow-md border border-stone-100 flex flex-col h-full items-center text-center backdrop-blur-sm"
          >
            <div className="flex gap-1 mb-4 text-[#C9A24A]">
              {Array.from({ length: testi.rating }).map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
            
            <p className="font-body text-stone-500 italic mb-6 leading-relaxed flex-grow">
              "{testi.review}"
            </p>
            
            <div className="mt-auto">
              <span className="font-label text-[10px] uppercase tracking-widest font-bold text-stone-800">
                {testi.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GalleryTestimonials;
