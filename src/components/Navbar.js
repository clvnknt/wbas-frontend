import React from 'react';
import './navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>JH | Sereno</h1>
        </div>
        <div className="navbar-links">
          <a href="/" className="nav-link">Meet the team</a>
          <a href="/search" className="nav-link">Search for homes</a>
          <a href="/communities" className="nav-link">Our communities</a>
          <a href="/valuation" className="nav-link">Home valuation</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/homes" className="nav-link">Homes across America</a>
          <a href="/testimonials" className="nav-link">Testimonials</a>
          <a href="/contact" className="nav-link">Contact us</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
