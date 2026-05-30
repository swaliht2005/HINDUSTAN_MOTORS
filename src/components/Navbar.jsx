import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoPath = "/HM Logo 1.png";

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Models', href: '#models' },
    { name: 'Story', href: '#story' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact US', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#000000] font-['IBM_Plex_Sans'] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Shell */}
        <div className="flex md:grid md:grid-cols-3 justify-between items-center h-24">
          
          {/* COLUMN 1: Logo Brand Frame */}
          <div className="flex items-center justify-start">
            <a href="#home" className="block">
              <img 
                src={logoPath} 
                alt="Hindustan Motors Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => { e.target.style.opacity = '0.5'; }}
              />
            </a>
          </div>

          {/* COLUMN 2: Central Floating Capsule Menu (Desktop Only) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full flex items-center space-x-6 lg:space-x-8 shadow-inner">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs lg:text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 3: Right Profile Actions Context */}
          <div className="hidden md:flex items-center justify-end">
            <button 
              className="w-10 h-10 bg-[#161616] border border-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-white/20 transition-all"
              aria-label="User Profile"
            >
              <User className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Mobile Menu Actions Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400"
              aria-label="User Profile Mobile"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#000000] border-b border-white/10 absolute top-24 left-0 w-full transition-all duration-300 ease-in-out">
          <div className="px-4 pt-3 pb-6 space-y-2 shadow-2xl">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;