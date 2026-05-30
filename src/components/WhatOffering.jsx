import React from 'react';

const WhatOffering = () => {
  return (
    <section id="technology" className="py-20 bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-['IBM_Plex_Sans']">
            What is HM Offering?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            HM offers reimagined classic designs transformed into modern electric cars with improved comfort, performance, and safety.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          
          {/* Left Card: New HM EV Cars (Spans 2 rows vertically) */}
          <div className="md:row-span-2 relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111111] group">
            <img 
              src="/Frame%205.png" 
              alt="New HM EV Cars"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold">New HM EV Cars</h3>
            </div>
          </div>

          {/* Middle Top Card: Classic Car Showcase */}
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111111] group">
            <img 
              src="/Frame%206.png" 
              alt="Classic HM Design"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right Card: Modern performance & safety (Spans 2 rows vertically) */}
          <div className="md:row-span-2 relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111111] group">
            <img 
              src="/Frame%208.png" 
              alt="Modern performance & safety"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold">Modern performance & safety</h3>
            </div>
          </div>

          {/* Middle Bottom Card: Interior Dashboard Technology */}
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111111] group">
            <img 
              src="/Frame%207.png" 
              alt="Advanced Dashboard Technology"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatOffering;