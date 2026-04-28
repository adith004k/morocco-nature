import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StudentOffer from '@/components/StudentOffer';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <StudentOffer />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        href="https://wa.me/919961667296?text=Hi,%20I%20want%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
      </a>
    </>
  );
}
