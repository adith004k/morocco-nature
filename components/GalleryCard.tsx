"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryCardProps {
  item: {
    id: number;
    src: string;
    category: string;
    title: string;
    quote: string;
  };
}

const GalleryCard = ({ item }: GalleryCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="break-inside-avoid relative overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-500 border border-stone-100 group mb-8 inline-block w-full"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full h-full relative"
      >
        <Image
          src={item.src}
          alt={item.title}
          width={800}
          height={1000}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white z-10 pointer-events-none">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] mb-2 text-[#C9A24A]">
            {item.category}
          </span>
          <h3 className="font-headline text-2xl mb-4">{item.title}</h3>
          <p className="font-body text-sm italic opacity-90 border-l-2 border-[#C9A24A] pl-4">
            &quot;{item.quote}&quot;
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryCard;
