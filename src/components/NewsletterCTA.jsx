import React from 'react';

const NewsletterCTA = () => {
  return (
    <section className="py-16 bg-[#121212] font-['IBM_Plex_Sans'] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Capsule Banner Card */}
        <div className="bg-gradient-to-r from-[#173822] via-[#1b3f27] to-[#1c3e27] text-white rounded-[2.5rem] py-16 px-6 md:px-12 text-center shadow-2xl">
          
          {/* Main Title Stack */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-6">
            Join The Electric Revelution
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-10">
            Be the first to receive updates on our upcoming electric vehicle launches, sustainability 
            initiatives, and innovations shaping the future of mobility in India.
          </p>

          {/* Form Action Element */}
          <form 
            className="bg-[#2a3c32]/70 border border-white/10 rounded-full p-2 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full sm:flex-grow bg-white text-gray-800 placeholder-gray-500 font-medium px-6 py-3.5 rounded-full outline-none focus:ring-0 text-sm sm:text-base"
              required
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto sm:ml-3 bg-[#00C853] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#00a344] transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Get Updates
            </button>
          </form>

          {/* Footer Subtext */}
          <p className="text-gray-400 text-xs mt-6 tracking-wide">
            By Subscribing, you agree to our privacy policy.
          </p>
          
        </div>

      </div>
    </section>
  );
};

export default NewsletterCTA;