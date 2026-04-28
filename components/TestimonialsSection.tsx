import React from 'react';

const testimonials = [
  {
    quote: "The bridal makeup was flawless and lasted all day! Highly recommended.",
    author: "Anjali M."
  },
  {
    quote: "Perfect hair spa experience. The staff is so professional.",
    author: "Safa K."
  },
  {
    quote: "Best cleanup service in Meenchanda. Very hygienic and budget-friendly.",
    author: "Riya S."
  }
];

const TestimonialsSection = () => {
  const starsArray = Array.from({ length: 5 });

  return (
    <section className="mt-40 mb-16">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-4">What Our Clients Say</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testi, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4 text-[#FFD700]">
              {starsArray.map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-body text-stone-600 italic mb-6 leading-relaxed">
              "{testi.quote}"
            </p>
            <div className="mt-auto">
              <span className="font-label text-[10px] uppercase tracking-widest font-bold text-stone-800">{testi.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
