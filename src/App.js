import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
     <div className="bg-gray-100 min-h-screen p-8 pt-20"> {/* Added pt-20 for top padding */}
      <Navbar />

 {/* Services Header Section */}
 <section className="relative mb-6">
        <img
          src="/sections/services/services-1.jpg" // Replace with the path to your image
          alt="Services Header"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-30">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">Book an Appointment</button>
            <input
              type="text"
              placeholder="Search by area..."
              className="p-2 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Comprehensive Marketing Plan Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Comprehensive Marketing Plan</h2>
        <div className="flex flex-wrap gap-6 justify-start">
          <div className="flex-none w-[300px] p-4 bg-gray-50 rounded-lg shadow-sm flex items-start">
            <img src="/sections/comprehensive-marketing/Responsive.png" alt="Responsive" className="w-24 h-24 object-cover rounded-lg mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Responsive</h3>
              <p>I am always available via phone, text, or email.</p>
            </div>
          </div>
          <div className="flex-none w-[300px] p-4 bg-gray-50 rounded-lg shadow-sm flex items-start">
            <img src="/sections/comprehensive-marketing/Syndication.png" alt="Syndication" className="w-24 h-24 object-cover rounded-lg mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Syndication</h3>
              <p>I market your property locally, nationally, and internationally.</p>
            </div>
          </div>
          <div className="flex-none w-[300px] p-4 bg-gray-50 rounded-lg shadow-sm flex items-start">
            <img src="/sections/comprehensive-marketing/VirtualTour.png" alt="Virtual Tour" className="w-24 h-24 object-cover rounded-lg mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Virtual Tour</h3>
              <p>Let's make your home stand out with a high-quality virtual tour.</p>
            </div>
          </div>
          <div className="flex-none w-[300px] p-4 bg-gray-50 rounded-lg shadow-sm flex items-start">
            <img src="/sections/comprehensive-marketing/Photography.png" alt="Photography" className="w-24 h-24 object-cover rounded-lg mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p>Beautiful, high-end photography is a central part of our marketing plan for your property.</p>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">My Staging Expertise</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Unclutter and Organize</h3>
            <p>Unclutter and organize your home</p>
          </div>
          <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Neatly Arrange</h3>
            <p>Neatly arrange drawers and cabinets</p>
          </div>
          <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Keep Pets Outdoors</h3>
            <p>Keep pets outdoors or off the premises</p>
          </div>
          <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Play Soft Music</h3>
            <p>Play soft music</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">The Selling Process</h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 1</h3>
              <p>Initial Consultation & Planning</p>
            </div>
            <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 2</h3>
              <p>Devise & Execute Marketing Plan</p>
            </div>
            <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 3</h3>
              <p>Review Offers & Reach Agreement with Buyer</p>
            </div>
            <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 4</h3>
              <p>Complete Transaction Process</p>
            </div>
            <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 5</h3>
              <p>After - Sale Service</p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">The Buying Process</h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 1</h3>
              <p>Initial Consultation & Planning</p>
            </div>
            <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 2</h3>
              <p>Search for a Home & Get Pre-Approved</p>
            </div>
            <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 3</h3>
              <p>Submit an Offer</p>
            </div>
            <div className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Step 4</h3>
              <p>Complete Settlement Process</p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Over 33 Years of Real Estate Success</h2>
        <p>
          We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners, experience is 100% nonnegotiable. And it’s an experience like no other.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">We Want To Create An Unforgettable Experience For You...</h2>
        <p>
          We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">The Hansen Partners Communications Tablet</h2>
        <p>
          We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the click of your tablet.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Review all documents and sign in the comfort of your home or anywhere.</li>
          <li>Stay up to date on all marketing activities, review materials, photos, etc. in real time.</li>
          <li>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li>
          <li>You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our BombBomb video messaging system.</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">See For Yourself</h2>
        <p>
          The proof is in the results, and we invite you to see for yourself the record we’ve built and the awards we’ve won over the years. The market speaks for itself, and we’ve helped our clients become successful time and time again.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default App;
