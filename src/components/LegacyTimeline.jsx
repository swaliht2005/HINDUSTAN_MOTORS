const LegacyTimeline = () => {
  const timeline = [
    { year: "1942", title: "The Beginning", description: "Hindustan Motors is established, marking the dawn of India's automotive journey.", image: "/1942.png" },
    { year: "1958", title: "Birth of a Legend", description: "The iconic Ambassador is launched, becoming the defining car of the nation.", image: "/1958.png" },
    { year: "1980s", title: "The Contessa Era", description: "Introduction of the Contessa, India's first indigenous luxury car.", image: "/1980.png" },
    { year: "Present", title: "Electric Revolution", description: "Reimagining our heritage for a sustainable future with the new EV lineup.", image: "/1958 21.png" }
  ];

  return (
    <section id="story" className="py-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#00C853] font-semibold tracking-wider uppercase text-sm">The HM Legacy</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['IBM_Plex_Sans'] text-white mt-4">
            Driving India Since 1942
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10"></div>

          <div className="space-y-10 md:space-y-16">
            {timeline.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className="w-full md:w-1/2 p-5 md:px-8">
                  <div className={`text-center ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-5xl font-bold font-['IBM_Plex_Sans'] text-white/20 mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                    <p className="text-[#9CA3AF] text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Marker */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#00C853] border-4 border-[#050505] shadow-[0_0_15px_rgba(0,200,83,0.5)]"></div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 p-5 md:px-8 mt-6 md:mt-0">
                  <div className="rounded-lg overflow-hidden border border-white/10 relative group">
                    <img src={item.image} alt={item.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[#00C853]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyTimeline;
