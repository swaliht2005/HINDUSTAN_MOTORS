const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-[#000000] pt-20 bg-cover bg-center bg-no-repeat relative" 
      style={{ backgroundImage: "url('/hmbanner.png')" }}
    >
     
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['IBM_Plex_Sans_KR'] text-white leading-tight">
              Built for Everyday <br />
              <span className="text-[#00C853]">Electric Comfort</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white max-w-xl mx-auto lg:mx-0">
              Reliable, quiet, and easy to live with designed for simple, dependable electric driving.
            </p>
            <div className="pt-4">
              <a href="#models" className="inline-block bg-[#00C853] text-white font-bold px-8 py-4 rounded-full hover:bg-[#00e65c] transition-colors">
                Explore EVs ⚡
              </a>
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default Hero;