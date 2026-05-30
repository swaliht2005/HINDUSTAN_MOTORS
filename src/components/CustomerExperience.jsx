import React from 'react';
import { Leaf, Wind, Zap } from 'lucide-react';

const CustomerExperience = () => {
  const cards = [
    {
      title: "Green Mobility",
      description: "Electric powertrains that reduce dependence on fossil fuels and support cleaner cities.",
      icon: <Leaf className="w-5 h-5 text-emerald-300" />
    },
    {
      title: "Reduced Emissions",
      description: "Zero tailpipe emissions help lower air pollution and contribute to a healthier environment.",
      icon: <Wind className="w-5 h-5 text-slate-300" />
    },
    {
      title: "Future-Ready India",
      description: "Smart, efficient, and scalable EV solutions aligned with India’s long-term mobility vision.",
      icon: <Zap className="w-5 h-5 text-emerald-300" />
    }
  ];

  return (
    <section className="py-20 bg-[#121212] font-['IBM_Plex_Sans'] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="mb-4">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white block mb-6">
            Customer Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-normal text-white">
            Driving a <span className="text-[#00C853]">Greener</span> Tomorrow
          </h2>
        </div>

        {/* Description and Report Link Block */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Hindustan Motors is committed to building a sustainable mobility ecosystem for India. 
            Our electric vehicles are designed to reduce environmental impact while delivering 
            reliable performance for modern roads.
          </p>
          <a 
            href="#report" 
            className="text-[#00C853] hover:text-emerald-400 font-medium text-sm transition-colors md:mb-2 whitespace-nowrap flex items-center gap-1"
          >
            Read the 2024 Report &rarr;
          </a>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#1c1c1c] p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-colors flex flex-col justify-between min-h-[260px]"
            >
              <div>
                {/* Circular Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-slate-800/60 flex items-center justify-center mb-6 shadow-inner">
                  {card.icon}
                </div>
                
                <h3 className="text-base font-bold text-white mb-3">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerExperience;