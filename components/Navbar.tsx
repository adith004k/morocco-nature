"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) => {
    const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
    return isActive
      ? "text-primary font-semibold border-b-2 border-primary font-headline text-base md:text-lg tracking-wide"
      : "text-on-surface-variant hover:text-primary font-headline text-base md:text-lg tracking-wide transition-colors";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-surface/80 backdrop-blur-md border-b border-primary/10">

      <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 py-6 md:py-7 max-w-screen-xl mx-auto">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-headline italic font-bold text-on-surface"
        >
          Morocco Nature
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-12 lg:gap-16">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/bridal" className={linkClass("/bridal")}>Bridal</Link>
          <Link href="/gallery" className={linkClass("/gallery")}>Gallery</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* BOOK NOW BUTTON */}
          <Link
            href="/contact#booking"
            className="hidden sm:inline-flex btn-gold px-10 py-3 rounded-full font-label text-sm font-bold tracking-widest uppercase shadow-md"
          >
            BOOK NOW
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <span className="material-symbols-outlined text-3xl">
              {open ? "close" : "menu"}
            </span>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-primary/10 shadow-lg">
          <div className="flex flex-col items-center gap-6 py-8 text-base font-medium">

            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/bridal" onClick={() => setOpen(false)}>Bridal</Link>
            <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            {/* MOBILE BOOK BUTTON */}
            <Link
              href="/contact#booking"
              onClick={() => setOpen(false)}
              className="btn-gold px-8 py-3 rounded-full text-sm font-bold uppercase"
            >
              Book Now
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;