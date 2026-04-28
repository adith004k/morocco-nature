"use client";

import React, { useState } from 'react';
import GalleryFilter from './GalleryFilter';
import GalleryGrid from './GalleryGrid';

const GalleryInteractive = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      <GalleryFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <GalleryGrid activeFilter={activeFilter} />
    </>
  );
};

export default GalleryInteractive;
