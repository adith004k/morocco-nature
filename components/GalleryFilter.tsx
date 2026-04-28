"use client";

import React from 'react';

const filters = [
  { label: "All Collections", value: "all" },
  { label: "Bridal", value: "bridal" },
  { label: "Student Styles", value: "student" },
  { label: "Salon Interiors", value: "interior" }
];

interface GalleryFilterProps {
  activeFilter: string;
  setActiveFilter: (val: string) => void;
}

const GalleryFilter = ({ activeFilter, setActiveFilter }: GalleryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-20">
      {filters.map((filter) => (
        <button 
          key={filter.value}
          onClick={() => setActiveFilter(filter.value)}
          className={`px-8 py-3 rounded-full font-label text-[10px] font-bold uppercase tracking-widest transition-all shadow-md ${
            filter.value === activeFilter 
              ? 'bg-[#C9A24A] text-white border-primary' 
              : 'bg-white border border-stone-200 text-stone-600 hover:bg-[#C9A24A] hover:text-white hover:border-[#C9A24A]'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
