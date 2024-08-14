import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollY, setPrevScrollY] = useState(0);

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

  return (
    <nav
      className={`bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <h1>JH | Sereno</h1>
        </div>
        <div className="space-x-4">
          <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded">Meet the team</a>
          <a href="/search" className="hover:bg-gray-700 px-3 py-2 rounded">Search for homes</a>
          <a href="/communities" className="hover:bg-gray-700 px-3 py-2 rounded">Our communities</a>
          <a href="/valuation" className="hover:bg-gray-700 px-3 py-2 rounded">Home valuation</a>
          <a href="/services" className="hover:bg-gray-700 px-3 py-2 rounded">Services</a>
          <a href="/homes" className="hover:bg-gray-700 px-3 py-2 rounded">Homes across America</a>
          <a href="/testimonials" className="hover:bg-gray-700 px-3 py-2 rounded">Testimonials</a>
          <a href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">Contact us</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
