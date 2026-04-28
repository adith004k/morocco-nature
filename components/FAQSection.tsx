"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "What is your cancellation policy?",
    answer: "We kindly ask for at least 24 hours' notice for any cancellations or rescheduling to avoid a cancellation fee. This allows us to offer the appointment time to another guest."
  },
  {
    question: "Do you offer bridal packages?",
    answer: "Yes! We have bespoke bridal collections that include trials, skincare preparation, and on-site services. Please book a consultation for more details."
  },
  {
    question: "How early should I arrive?",
    answer: "We recommend arriving 10-15 minutes prior to your scheduled time to settle in and complete any necessary consultation forms over a cup of herbal tea."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-surface-container-low py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl text-center mb-16">Frequently Asked</h2>
        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg bg-white border border-surface-container-high/30 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] transition-all cursor-pointer group"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>
                  {faq.question}
                </h4>
                <span className={`material-symbols-outlined text-primary transition-transform duration-300 bg-primary/10 rounded-full p-1 ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-on-surface-variant leading-relaxed border-t border-surface-container-high pt-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
