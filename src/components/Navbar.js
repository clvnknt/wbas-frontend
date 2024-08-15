import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaArrowRight } from 'react-icons/fa';

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExtraNavbar, setShowExtraNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setPrevScrollY(currentScrollY);

      // Show extra navbar when scrolling past the bottom of the Services sections
      const servicesSection = document.querySelector('#services-header-section');
      if (servicesSection) {
        const sectionBottom = servicesSection.getBoundingClientRect().bottom + window.scrollY;
        if (currentScrollY > sectionBottom) {
          setShowExtraNavbar(true);
        } else {
          setShowExtraNavbar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{ backgroundColor: '#1a1a1a' }}
      className={`text-white shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        <div className="text-lg font-bold">
          <img 
            src="./sections/logos/jhs.png" 
            alt="JH | Sereno"
            className="w-auto h-8" 
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none relative z-60"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4 absolute md:relative top-full left-0 w-full md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          } p-4 md:p-0 bg-[#1a1a1a] z-50`}
        >
          {isMenuOpen && (
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl z-60"
            >
              <FaTimes />
            </button>
          )}
          <a href="/" className="block md:inline hover:bg-gray-700 px-3 py-2 rounded">Meet the team</a>
          <a href="/search" className="block md:inline hover:bg-gray-700 px-3 py-2 rounded">Search for homes</a>
          <a href="/communities" className="block md:inline hover:bg-gray-700 px-3 py-2 rounded">Our communities</a>
          <a href="/valuation" className="block md:inline hover:bg-gray-700 px-3 py-2 rounded">Home valuation</a>
          <a href="/services" className="block md:inline hover:bg-gray-700 px-3 py-2 rounded">Services</a>
          <a href="/homes" className="block md:inline hover:bg-gray-700 px-3 py-2 rounded">Homes across America</a>
          <a href="/testimonials" className="block md:inline hover:bg-gray-700 px-3 py-2 rounded">Testimonials</a>
          <a href="/contact" className="block md:inline hover:bg-gray-700 px-3 py-2 rounded">Contact us</a>
        </div>
      </div>

      {/* Extra Navbar Row */}
      {showExtraNavbar && (
        <div className="fixed top-[64px] left-0 w-full z-40 bg-[#585454]">
          <div className="container mx-auto flex items-center justify-between px-2 md:px-4 py-2 space-x-2">
            <div className="flex items-center space-x-2 rounded-lg bg-[#585454] w-full max-w-xs">
              <FaSearch className="text-white text-sm md:text-base" />
              <input
                type="text"
                placeholder="Search for area..."
                className="bg-transparent text-white placeholder-white px-2 py-1 outline-none w-full text-sm md:text-base"
              />
            </div>
            <button className="bg-transparent border border-transparent text-white px-2 py-1 rounded-lg hover:bg-white hover:text-black flex items-center text-sm md:text-base">
              Book an Appointment
              <FaArrowRight className="ml-1" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
