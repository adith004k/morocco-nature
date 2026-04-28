import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function StudentOffersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#faf9f6] text-[#1a1c1a] font-body selection:bg-primary/20">
        {/* Hero Section */}
        <section className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative z-10">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-[#7b5455] mb-6 block font-extrabold">Exclusive Collegiate Curations</span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-medium">Student Special Beauty Deals – <span className="italic text-primary font-normal">Get 20% OFF</span></h1>
              <p className="text-[#504444] text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
                Elevate your collegiate lifestyle with a touch of organic luxury. Valid with student ID. A sophisticated retreat between your lectures and social calendars.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-gradient-to-br from-[#C9A24A] to-[#E5C173] text-[#ffffff] px-10 py-4 rounded-full font-label text-xs uppercase tracking-[0.2em] font-bold shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all">
                  Unlock 20% Privilege
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)] ring-1 ring-[#E3E2E0]/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Luxury high-end skincare treatment at Morocco Nature Beauty Clinic" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgLhJjdheEv4XyUeuDJiIYZL6WqcEPnQ8hyx3uBkTO35OV51zNVHxTD_yEqMtbGNoXQh_fpfKFm3z8srdLIMbX_gPZucqyhq0YG4eydmsUsUPokxmgVEbk4Ci50xWpWNZfIGr6gPjSXMSnu4WQO-dS7_8YGHMexqmk7ai5ux-rodFcpcvV_VCEpWWAoLAFLx8lgNmnvsyuXR-PjNcLaQ94kSu_q9l2A7ffCUkt4Rf4Egh2QvEpA9OGuotSuB7Tt3Z9SOZjWBDya_aT" />
                {/* Premium Elegant Badge */}
                <div className="absolute top-8 right-8 bg-gradient-to-br from-[#C9A24A] to-[#E5C173] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center text-[#ffffff] shadow-[0_20px_50px_rgba(201,162,74,0.3)] ring-1 ring-white/40 backdrop-blur-sm">
                  <div className="flex flex-col items-center border border-white/30 rounded-full w-[92%] h-[92%] justify-center">
                    <span className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">20%</span>
                    <span className="font-label text-[10px] uppercase tracking-[0.3em] font-extrabold mt-1">OFF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-[#f4f3f1]/50 py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-10 flex justify-center">
              <a className="flex items-center gap-3 text-primary font-headline text-lg md:text-xl italic hover:opacity-80 transition-opacity group" href="/services">
                <span className="material-symbols-outlined text-2xl md:text-3xl transition-transform group-hover:-translate-x-1">arrow_back</span>
                <span>Back to All Services</span>
              </a>
            </div>
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl mb-6">Student-Exclusive Menu</h2>
              <div className="h-0.5 w-16 bg-primary mx-auto"></div>
            </div>

            {/* Skin Category */}
            <div className="mb-16">
              <h3 className="font-headline text-2xl mb-8 flex items-center gap-3"><span className="material-symbols-outlined text-primary">spa</span> Skin Care</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 relative group">
                  <span className="absolute top-4 right-4 bg-[#7b5455] text-[#ffffff] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">20% OFF</span>
                  <h4 className="font-headline text-xl mb-4">Organic Facial</h4>
                  <div className="space-y-1 mb-8">
                    <span className="text-[#504444]/60 line-through text-xs">₹1000</span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold">₹800</span>
                    </div>
                    <span className="font-label text-[10px] uppercase text-primary font-bold tracking-widest">Student Price</span>
                  </div>
                  {/* <button className="w-full py-3 rounded-full border border-[#D4C2C2] font-label text-[10px] uppercase tracking-widest font-bold text-[#504444] hover:bg-primary hover:text-white hover:border-primary transition-all">Select Treatment</button> */}
                </div>

                <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 relative group">
                  <span className="absolute top-4 right-4 bg-[#7b5455] text-[#ffffff] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">20% OFF</span>
                  <h4 className="font-headline text-xl mb-4">Hydra Facial</h4>
                  <div className="space-y-1 mb-8">
                    <span className="text-[#504444]/60 line-through text-xs">₹3500</span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold">₹2800</span>
                    </div>
                    <span className="font-label text-[10px] uppercase text-primary font-bold tracking-widest">Student Price</span>
                  </div>
                  {/* <button className="w-full py-3 rounded-full border border-[#D4C2C2] font-label text-[10px] uppercase tracking-widest font-bold text-[#504444] hover:bg-primary hover:text-white hover:border-primary transition-all">Select Treatment</button> */}
                </div>
              </div>
            </div>

            {/* Hair Category */}
            <div className="mb-16">
              <h3 className="font-headline text-2xl mb-8 flex items-center gap-3"><span className="material-symbols-outlined text-primary">content_cut</span> Hair Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 relative group">
                  <span className="absolute top-4 right-4 bg-[#7b5455] text-[#ffffff] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">20% OFF</span>
                  <h4 className="font-headline text-xl mb-4">Hair Cut</h4>
                  <div className="space-y-1 mb-8">
                    <span className="text-[#504444]/60 line-through text-xs">₹500</span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold">₹400</span>
                    </div>
                    <span className="font-label text-[10px] uppercase text-primary font-bold tracking-widest">Student Price</span>
                  </div>
                  {/* <button className="w-full py-3 rounded-full border border-[#D4C2C2] font-label text-[10px] uppercase tracking-widest font-bold text-[#504444] hover:bg-primary hover:text-white hover:border-primary transition-all">Select Treatment</button> */}
                </div>

                <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 relative group">
                  <span className="absolute top-4 right-4 bg-[#7b5455] text-[#ffffff] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">20% OFF</span>
                  <h4 className="font-headline text-xl mb-4">Hair Spa</h4>
                  <div className="space-y-1 mb-8">
                    <span className="text-[#504444]/60 line-through text-xs">₹850</span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold">₹680</span>
                    </div>
                    <span className="font-label text-[10px] uppercase text-primary font-bold tracking-widest">Student Price</span>
                  </div>
                  {/* <button className="w-full py-3 rounded-full border border-[#D4C2C2] font-label text-[10px] uppercase tracking-widest font-bold text-[#504444] hover:bg-primary hover:text-white hover:border-primary transition-all">Select Treatment</button> */}
                </div>

                <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 relative group">
                  <span className="absolute top-4 right-4 bg-[#7b5455] text-[#ffffff] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">20% OFF</span>
                  <h4 className="font-headline text-xl mb-4">Hair Coloring</h4>
                  <div className="space-y-1 mb-8">
                    <span className="text-[#504444]/60 line-through text-xs">₹1500</span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold">₹1200</span>
                    </div>
                    <span className="font-label text-[10px] uppercase text-primary font-bold tracking-widest">Student Price</span>
                  </div>
                  {/* <button className="w-full py-3 rounded-full border border-[#D4C2C2] font-label text-[10px] uppercase tracking-widest font-bold text-[#504444] hover:bg-primary hover:text-white hover:border-primary transition-all">Select Treatment</button> */}
                </div>
              </div>
            </div>

            {/* Quick Services Category */}
            <div>
              <h3 className="font-headline text-2xl mb-8 flex items-center gap-3"><span className="material-symbols-outlined text-primary">bolt</span> Quick Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 relative group">
                  <span className="absolute top-4 right-4 bg-[#7b5455] text-[#ffffff] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">20% OFF</span>
                  <h4 className="font-headline text-xl mb-4">Threading</h4>
                  <div className="space-y-1 mb-8">
                    <span className="text-[#504444]/60 line-through text-xs">₹60</span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold">₹48</span>
                    </div>
                    <span className="font-label text-[10px] uppercase text-primary font-bold tracking-widest">Student Price</span>
                  </div>
                  {/* <button className="w-full py-3 rounded-full border border-[#D4C2C2] font-label text-[10px] uppercase tracking-widest font-bold text-[#504444] hover:bg-primary hover:text-white hover:border-primary transition-all">Select Treatment</button> */}
                </div>

                <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 relative group">
                  <span className="absolute top-4 right-4 bg-[#7b5455] text-[#ffffff] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">20% OFF</span>
                  <h4 className="font-headline text-xl mb-4">Waxing</h4>
                  <div className="space-y-1 mb-8">
                    <span className="text-[#504444]/60 line-through text-xs">₹600</span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold">₹480</span>
                    </div>
                    <span className="font-label text-[10px] uppercase text-primary font-bold tracking-widest">Student Price</span>
                  </div>
                  {/* <button className="w-full py-3 rounded-full border border-[#D4C2C2] font-label text-[10px] uppercase tracking-widest font-bold text-[#504444] hover:bg-primary hover:text-white hover:border-primary transition-all">Select Treatment</button> */}
                </div>

                <div className="bg-[#ffffff] p-8 rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 relative group">
                  <span className="absolute top-4 right-4 bg-[#7b5455] text-[#ffffff] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">20% OFF</span>
                  <h4 className="font-headline text-xl mb-4">Mani-Pedi</h4>
                  <div className="space-y-1 mb-8">
                    <span className="text-[#504444]/60 line-through text-xs">₹1200</span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold">₹960</span>
                    </div>
                    <span className="font-label text-[10px] uppercase text-primary font-bold tracking-widest">Student Price</span>
                  </div>
                  {/* <button className="w-full py-3 rounded-full border border-[#D4C2C2] font-label text-[10px] uppercase tracking-widest font-bold text-[#504444] hover:bg-primary hover:text-white hover:border-primary transition-all">Select Treatment</button> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asymmetric 'Between Classes' Section */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#faf9f6]">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Quick salon treatment" className="rounded-lg w-full h-64 object-cover mt-12 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4eKGUZQuDBxio-7BGJIw8727dipROQZ4bbz_DyugmrDnvVLgmUJlsBCPB3AiacLjG6E4AOU4M2ihc3mfCOgUVDq_cq3lVBroaAWvbHq8u6-BkBjRF4RyPTZFXuArBu8WFUrHhNPGHU8Y88aS1cJ9Sznt91mw0oUUH1kt9ykTM8VREhT3xl6IB2P3NHTb9NDuzvW-yh8E1Qr6UB4xBdGkcBx3JL81pFcHHdkJKw9IbrliBeVE5uRVGiC5rscR8f4mfgxvGVFk8XTZ_" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Luxury salon interior" className="rounded-lg w-full h-80 object-cover shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.02)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYRtAaVM2lsPM9Hji-K66SaCGwY2w8cwoy7vVEVO43fsax5IfzlB7LiL94KIjPZrt4i7r3HwrMnhHC2hdkjuFrtnuPlj-E1QCR9Q2inItslrQ9L15T6H-c4hokdSk-SXZRkqKbJ3Fgis20bEYH113ZrXFJKUFSl9RYKF5x_Os8TBKbpIKDGCuf5MLDLPZCaXEkFBHkLha9RJpBfTaELZ_M4YggMA7n8uiHNicfNXcCIOsO5Rt4UtHxjqG7hOvZ4u8ahIsiyBHM42VG" />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <span className="font-label text-sm tracking-[0.2em] text-[#7b5455] uppercase font-bold">Efficiency Meets Luxury</span>
              <h2 className="font-headline text-5xl leading-tight">Fast treatments between classes</h2>
              <p className="text-[#504444] text-lg leading-relaxed font-light">
                We understand your schedule is tight. Our &quot;Student Express&quot; sessions are designed to provide maximum rejuvenation in minimum time. Get your brows threaded, nails done, or a quick glow-up facial and be back in the lecture hall in under 45 minutes.
              </p>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <span className="font-medium text-[#1a1c1a]">Express 15-min Brow Shaping</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                  <span className="font-medium text-[#1a1c1a]">30-min Refreshing Skin Detox</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">wifi</span>
                  <span className="font-medium text-[#1a1c1a]">High-speed Guest WiFi available</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#f4f3f1] text-center">
          <div className="max-w-2xl mx-auto space-y-10">
            <h2 className="font-headline text-4xl md:text-5xl italic text-on-surface">Ready for your glow?</h2>
            <p className="text-[#504444] leading-relaxed">Don&apos;t forget to bring your valid Student ID to your appointment to redeem your 20% discount.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
              <button className="bg-gradient-to-br from-[#C9A24A] to-[#E5C173] text-[#ffffff] px-12 py-5 rounded-full font-label text-xs uppercase tracking-[0.2em] font-bold shadow-xl hover:shadow-primary/30 transition-all">
                Get 20% Off Now
              </button>
              <a className="flex items-center gap-2 font-label text-xs uppercase tracking-[0.2em] font-bold hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1" href="https://wa.me/919961667296">
                <span className="material-symbols-outlined text-lg">chat</span>
                Book via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
