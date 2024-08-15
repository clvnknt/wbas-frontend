import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-transparent p-4 sm:p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <div>
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-2">Julie Hansen Partnership</h2>
            <p className="text-sm sm:text-base">
              An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.
            </p>
          </section>

          <section className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-xl font-bold mb-2">ADDRESS</h3>
              <p className="text-sm sm:text-base">4733 Chabot Drive #100</p>
              <p className="text-sm sm:text-base">Pleasanton, CA 94588</p>
              <p className="text-sm sm:text-base">Julie Hansen-Orvis | CA DRE# 00934447</p>
            </div>

            <div>
              <h3 className="text-base sm:text-xl font-bold mb-2">CONTACT INFORMATION</h3>
              <p className="text-sm sm:text-base">(925) 553-6707</p>
              <p className="text-sm sm:text-base">luxuryhomesinwc@icloud.com</p>
              <div className="mt-4 flex space-x-2 sm:space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full hover:bg-gray-800"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-white" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full hover:bg-gray-800"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="text-white" />
                </a>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-xl font-bold mb-2">Newsletter</h3>
            <p className="mb-4 text-sm sm:text-base">
              Subscribe to our Newsletter for latest news and updates. Stay tuned!
            </p>
            <form className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm sm:text-base font-medium">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email address" 
                className="p-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs sm:text-sm text-gray-400 mt-2 flex items-start">
                <input 
                  type="checkbox" 
                  id="privacy-consent" 
                  className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2 sm:mr-3"
                />
                <label htmlFor="privacy-consent" className="text-xs sm:text-sm">
                  By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
                </label>
              </p>
              <button
                type="submit"
                className="mt-4 bg-white text-black px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-24 sm:w-28"
              >
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 sm:mt-8 mb-4 sm:mb-6">
        <img src="./sections/companies/realtor.png" alt="Placeholder 2" className="h-[40px] sm:h-[60px] mx-2"/>
        <img src="./sections/companies/eho.png" alt="Placeholder 1" className="h-[40px] sm:h-[60px] mx-2"/>
        <img src="./sections/companies/sereno.png" alt="Placeholder 3" className="h-[10px] sm:h-[15px] mx-2"/>
      </div>

      <div className="text-center text-gray-600 text-xs sm:text-sm">
        <p>Website Designed & Developed by <u>Luxury Presence</u></p>
        <p>Copyright 2024 | <a href="/privacy-policy" className="hover:underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;
