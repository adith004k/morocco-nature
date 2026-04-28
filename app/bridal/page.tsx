import React from "react";
// import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const createWhatsAppLink = (pkg: string, price: string) => {
  const message = `Hi, I want to book the ${pkg} package (${price}).

Name:
Preferred Date:
Preferred Time:`;

  return `https://wa.me/919961667296?text=${encodeURIComponent(message)}`;
};

const packages = [
  {
    name: "Silver",
    price: "₹8,000",
    tag: "Essential Care",
    features: [
      "Pearl Facial",
      "Pedicure",
      "Eyebrow Threading",
      "Hot Oil Treatment",
      "Hair Wash",
      "Half Body Wax",
      "2-Sitting Hair Coloring",
    ],
  },
  {
    name: "Gold",
    price: "₹6,000",
    tag: "Popular",
    highlight: true,
    features: [
      "Gold Facial",
      "Pedicure",
      "Hair Spa",
      "Half Body Wax",
      "3-Sitting Hair Coloring",
    ],
  },
  {
    name: "Diamond",
    price: "₹10,000",
    tag: "Luxury",
    features: [
      "Hydra Facial",
      "Pedicure & Manicure",
      "Hair Spa",
      "Full Body Wax",
      "5-Sitting Hair Coloring",
      "Hair Setting",
    ],
  },
];

export default function BridalPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-[#faf9f6]">

        {/* HERO */}
        <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold">
              Premium Bridal Services
            </span>

            <h1 className="text-5xl md:text-6xl font-headline mt-6 mb-6">
              Your Dream Bridal Look Starts Here
            </h1>

            <p className="text-gray-600 mb-8">
              Experience luxury beauty services crafted for your special day.
            </p>

            <a
              href={createWhatsAppLink("Bridal Consultation", "Custom")}
              target="_blank"
              className="bg-gradient-to-r from-[#C9A24A] to-[#E2C07D] text-white px-8 py-4 rounded-full font-bold"
            >
              Book Consultation
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/gallery/bridal1.jpg"
              alt="Bridal"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* PACKAGES */}
        <section className="py-24 px-8 bg-[#f4f3f1]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-headline mb-4">
              Pre-Bridal Packages
            </h2>
            <p className="text-gray-600">
              Choose your perfect beauty package
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`p-10 rounded-2xl bg-white border flex flex-col ${pkg.highlight ? "shadow-2xl scale-105" : "shadow-sm"
                  }`}
              >
                <h3 className="text-2xl font-headline mb-2">
                  {pkg.name}
                </h3>

                <p className="text-primary font-bold mb-6">
                  {pkg.tag}
                </p>

                <ul className="space-y-3 text-gray-600 mb-8 flex-grow">
                  {pkg.features.map((item, i) => (
                    <li key={i}>✔ {item}</li>
                  ))}
                </ul>

                <div className="text-3xl font-bold text-primary mb-6">
                  {pkg.price}
                </div>

                <a
                  href={createWhatsAppLink(pkg.name, pkg.price)}
                  target="_blank"
                  className={`py-3 rounded-full text-center font-bold ${pkg.highlight
                    ? "bg-primary text-white"
                    : "border border-primary text-primary"
                    }`}
                >
                  Book {pkg.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY_BRIDAL */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-headline mb-12 text-center">
            Our Work
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* BEFORE / AFTER */}
            {/* <div className="aspect-[3/4]">
              <BeforeAfterSlider
                before="/gallery/student2.jpg"
                after="/gallery/student1.jpg"
              />
            </div> */}

            {/* IMAGE 1 */}
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="/gallery/bridal-detail.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="/gallery/bridal4.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="/gallery/bridal3.jpg"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-20 bg-[#e3e2e0] text-center">
          <h2 className="text-3xl font-headline mb-6">
            Trusted by Brides
          </h2>
          <p className="max-w-xl mx-auto text-gray-600">
            “Amazing service, flawless makeup, and very professional team.”
          </p>
        </section>

      </main>

      <Footer />

      {/* FLOATING WHATSAPP */}
      <a
        href={createWhatsAppLink("General Inquiry", "")}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      >
        💬
      </a>
    </>
  );
}