import React from 'react';

function Footer() {
  return (
    <footer className="bg-transparent p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Julie Hansen Partnership</h2>
            <p className="">
              An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.
            </p>
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
        </div>

        <div>
          <section className="mb-6">
            <h3 className="text-xl font-bold mb-2">Newsletter</h3>
            <p className="mb-4">Subscribe to our Newsletter for latest news and updates. Stay tuned!</p>
            <form className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email address" 
                className="p-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-400 mt-2">
                By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
              </p>
            </form>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
