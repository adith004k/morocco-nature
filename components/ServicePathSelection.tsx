import React from 'react';
import Link from 'next/link';

const ServicePathSelection = () => {
  return (
    <section className="bg-surface-container-low py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-on-surface mb-6">Choose Your Service Path</h2>
          <div className="h-0.5 w-16 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student Card */}
          <Link href="/services/student" className="group relative bg-white rounded-lg overflow-hidden services-card-shadow transition-transform hover:-translate-y-1 flex flex-col md:flex-row border border-outline-variant/30 cursor-pointer">
            <div className="absolute top-4 right-4 z-20 bg-primary text-white px-3 py-1 rounded-sm text-[9px] font-bold tracking-widest uppercase">
              Student Exclusive
            </div>
            <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                alt="Student Services" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2cGNqGQqG8t1USKwVCLjSHjGXuKSacD9zS8xN71FyN8dQClpBtoLOPPbIFWnN5JKgOjk1XWD4mFEN1Us3LWL_E7YQZ11g3xH0-FW7WyIsiWM4ZG-9vNFhJn-z3m5zLhKVN-tqYChdJkkQFzjSOM9ecLO_Wzk0Mr40x15jDWI8dQHVYRrxE0hl-MncWjVH_jW180Z7QyPg1puJod60GlfsPzSiGQ_NFlKVeTGg2qxJCl7DfriiDqAs3t6tj7ELqwA8GhHK5B_JAv2B"
              />
            </div>
            <div className="md:w-3/5 p-10 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-semibold">Student Beauty Offers</h3>
              <p className="text-on-surface-variant text-sm font-light italic leading-relaxed">
                Tailored treatments designed for the modern student lifestyle.
              </p>
              <div className="pt-2">
                <span className="text-primary text-[10px] font-bold tracking-widest uppercase border-b border-primary/30 pb-1 group-hover:border-primary transition-all">
                  View Student Offers
                </span>
              </div>
            </div>
          </Link>

          {/* Bridal Card */}
          <Link href="/bridal" className="group relative bg-white rounded-lg overflow-hidden services-card-shadow transition-transform hover:-translate-y-1 flex flex-col md:flex-row border border-outline-variant/30 cursor-pointer">
            <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                alt="Bridal Services" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCf8GpwON-1A1hMrDh3OTAZhzzIL9eHdjZTQnazFC-LrM_eChTw0TxbeCm7XiLK2-LrEndJXdYk5d6qCDLtmwSijx4cB49X7W_a-xchmIeKNxsrVG1VN1HbPEjXS0MhT5jOiuYNSQPRq3NdJHOQMLgbTVXfu6OXVLJlMlGqnTWA8I2FQSYAb9wB5_GQsBH-KzM7c8vu8I0RkjLFUdJU1vIPdYLaMNac5ZDcrUx4MGI4qGuj0JQ8n9yMiEhnjaFECDr0VAr0pEMA6qT"
              />
            </div>
            <div className="md:w-3/5 p-10 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-semibold">Bridal Makeup Packages</h3>
              <p className="text-on-surface-variant text-sm font-light italic leading-relaxed">
                Timeless elegance for your most significant moments.
              </p>
              <div className="pt-2">
                <span className="text-primary text-[10px] font-bold tracking-widest uppercase border-b border-primary/30 pb-1 group-hover:border-primary transition-all">
                  Explore Bridal Packages
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePathSelection;
