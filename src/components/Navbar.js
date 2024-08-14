import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setPrevScrollY(currentScrollY);
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
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <img 
            src="/sections/logos/jhs.png" 
            alt="JH | Sereno"
            className="w-auto h-8" 
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4 absolute md:relative top-full left-0 w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} p-4 md:p-0`}
          style={{ backgroundColor: '#1a1a1a' }}
        >
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
    </nav>
  );
}

export default Navbar;
