import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-6">
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">Julie Hansen Partnership</p>
        <p className="mb-4">An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-bold mb-2">ADDRESS</h3>
        <p>4733 Chabot Drive #100</p>
        <p>Pleasanton, CA 94588</p>
        <p>Julie Hansen-Orvis | CA DRE# 00934447</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-bold mb-2">CONTACT INFORMATION</h3>
        <p>(925) 553-6707</p>
        <p>luxuryhomesinwc@icloud.com</p>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-2">Newsletter</h3>
        <p>Subscribe to our Newsletter for latest news and updates. Stay tuned!</p>
        <form>
          <label htmlFor="email" className="block mb-2">Email Address</label>
          <input type="email" id="email" name="email" className="p-2 w-full mb-4" />
          <p className="text-sm mb-4">By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.</p>
        </form>
      </section>
    </footer>
  );
}

export default Footer;
