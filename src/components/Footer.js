import React from 'react';
import './footer.css'; // Import the updated CSS

function Footer() {
  return (
    <footer className="footer">
      <section className="mb-6">
        <h2>Contact Us</h2>
        <p>Julie Hansen Partnership</p>
        <p>An elite group of the East Bay’s most talented and visionary real estate professionals...</p>
      </section>

      <section className="mb-6">
        <h3>ADDRESS</h3>
        <p>4733 Chabot Drive #100</p>
        <p>Pleasanton, CA 94588</p>
        <p>Julie Hansen-Orvis | CA DRE# 00934447</p>
      </section>

      <section className="mb-6">
        <h3>CONTACT INFORMATION</h3>
        <p>(925) 553-6707</p>
        <p>luxuryhomesinwc@icloud.com</p>
      </section>

      <section>
        <h3>Newsletter</h3>
        <p>Subscribe to our Newsletter for latest news and updates. Stay tuned!</p>
        <form>
          <label htmlFor="email" className="newsletter-label">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" />
          <p className="text-sm">By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our Privacy Policy...</p>
        </form>
      </section>
    </footer>
  );
}

export default Footer;
