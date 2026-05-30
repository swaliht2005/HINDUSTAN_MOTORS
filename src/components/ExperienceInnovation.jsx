const ExperienceInnovation = () => {
  return (
    <section id="experience" className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] border border-white/10 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#00C853]/5 to-transparent pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-['IBM_Plex_Sans'] text-white mb-4">
              Experience the Innovation
            </h2>
            <p className="text-[#9CA3AF] text-lg">
              Get behind the wheel of India's most iconic brand, now powered by advanced electric technology. Feel the smooth acceleration and silent power of the new HM EV lineup.
            </p>
          </div>

          <div className="relative z-10 whitespace-nowrap">
            <button className="bg-[#00C853] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#00e65c] transition-colors text-lg shadow-glow">
              Book Test Drive &rarr;
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ExperienceInnovation;
