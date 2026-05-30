import React from 'react';
import { BatteryCharging, Gauge, Compass, ShieldCheck } from 'lucide-react';

const ReimaginedFuture = () => {
  const features = [
    {
      title: "High-Range EV",
      description: "Advanced electric architecture delivering up to 300 km range with fast-charging support for everyday convenience.",
      footer: "EV battery",
      icon: <BatteryCharging className="w-10 h-10 text-[#00C853]" />
    },
    {
      title: "Smart Dashboard",
      description: "AI-powered interface with real-time navigation, vehicle insights, and seamless connectivity at a glance.",
      footer: "Power steering",
      icon: <Gauge className="w-10 h-10 text-[#00C853]" />
    },
    {
      title: "Power Steering",
      description: "Electronically assisted steering tuned for smooth handling, effortless control, and safer city driving.",
      footer: "HM Premier EV",
      icon: <Compass className="w-10 h-10 text-[#00C853]" />
    },
    {
      title: "Safety Upgrades",
      description: "Enhanced safety systems including collision alerts, intelligent braking, and reinforced body structure.",
      footer: "Safety upgrades",
      icon: <ShieldCheck className="w-10 h-10 text-[#00C853]" />
    }
  ];

  return (
    <section className="py-20 bg-[#000000] text-white font-['IBM_Plex_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm tracking-wide mb-2">Technology & Innovation</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reimagined for the Future
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base mb-8">
            Where classic HM design meets cutting-edge engineering. Discover the technology powering a new generation of iconic vehicles built for modern India.
          </p>
          <button className="bg-[#00C853] text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-[#00a344] transition-colors">
            Expoire Tec Specs
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#222222] border border-emerald-500/20 p-8 rounded-2xl flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <div className="mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>
              <div className="text-sm font-semibold text-gray-300 mt-auto">
                {feature.footer}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#222222] border border-emerald-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience the Innovation</h3>
            <p className="text-gray-400 text-base md:text-lg">
              Step into the driver's seat and feel the evolution of Hindustan Motors with next-generation electric engineering.
            </p>
          </div>
          <button className="bg-[#00C853] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#00a344] transition-colors whitespace-nowrap flex items-center gap-2">
            Book Test Drive &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};

export default ReimaginedFuture;