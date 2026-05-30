import React from 'react';

const FeaturedModels = () => {
  const models = [
    { id: 1, name: "HM Contessa Neo", price: "₹12.5 - ₹14.5 Lakhs", image: "/Gemini_Generated_Image_ii8rj1ii8rj1ii8r 1.png" },
    { id: 2, name: "HM Contessa Neo", price: "₹16 - ₹18 Lakhs", image: "/Gemini_Generated_Image_ii8rj1ii8rj1ii8r 2.png" },
    { id: 3, name: "HM Premier EV", price: "₹10 - ₹12 Lakhs", image: "/Gemini_Generated_Image_ii8rj1ii8rj1ii8r 3.png" },
    { id: 4, name: "HM Premier EV", price: "₹16 - ₹18 Lakhs", image: "/Gemini_Generated_Image_ii8rj1ii8rj1ii8r 4.png" },
    { id: 5, name: "HM Ambassador EV", price: "₹18 - ₹20 Lakhs", image: "/Gemini_Generated_Image_ii8rj1ii8rj1ii8r 5.png" },
    { id: 6, name: "HM Heritage X", price: "₹10 - ₹12 Lakhs", image: "/Frame 414.png" },
  ];

  return (
    <section id="models" className="py-20 bg-[#00000] font-['IBM_Plex_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            Featured Models
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Featured Models showcase HM's iconic vehicles reimagined with electric power, blending timeless design, modern technology, and future-ready performance.
          </p>
        </div>

        {/* Models Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <div 
              key={model.id} 
              className="bg-[#1c1c1c] rounded-2xl overflow-hidden border border-white/5 flex flex-col transition-all duration-300 hover:border-emerald-500/20 shadow-xl"
            >
              {/* Product Thumbnail Showcase */}
              <div className="aspect-[4/3.8] bg-neutral-900 overflow-hidden relative">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Context Details Panel */}
              <div className="p-6 bg-[#222222] text-center flex flex-col items-center">
                <h3 className="text-lg font-bold text-white mb-2">{model.name}</h3>
                
                <p className="text-sm font-medium text-gray-400 mb-4">
                  Price: <span className="text-[#00C853] font-semibold">{model.price}</span>
                </p>
                
                <button className="w-4/5 bg-[#00C853] text-white font-bold py-2.5 rounded-full hover:bg-[#00a344] transition-colors text-sm tracking-wide">
                  Book Your EV
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedModels;