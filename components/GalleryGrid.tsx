"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryCard from './GalleryCard';

import { galleryItems } from "@/data/gallery";

interface GalleryGridProps {
  activeFilter: string;
}

const GalleryGrid = ({ activeFilter }: GalleryGridProps) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'all' || item.category === activeFilter
  );

  const visibleItems = filteredItems.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <>
      <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {visibleCount < filteredItems.length && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <button 
            onClick={loadMore}
            className="bg-white border-2 border-[#C9A24A] text-[#C9A24A] px-12 py-4 rounded-full font-label text-[10px] font-bold uppercase tracking-widest hover:bg-[#C9A24A] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            Discover More Work
          </button>
        </motion.div>
      )}
    </>
  );
};

export default GalleryGrid;
