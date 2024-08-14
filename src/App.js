import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MarketingTabs from './services-components/marketing-tabs'

function App() {
  return (

    <div className="bg-gray-100 min-h-screen p-8 pt-20">
      <Navbar />

      {/* Services Header Section */}
      <section className="relative mb-6">
        <img
          src="/sections/services/services-1.jpg"
          alt="Services Header"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-10 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800">
              Book an Appointment
            </button>
            <input
              type="text"
              placeholder="Search by area..."
              className="p-2 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Comprehensive Marketing Plan Section */}
      <div className="flex justify-center gap-6 mb-6">
        <div className="flex-none w-[400px] h-[300px] p-4">
          <img
            src="/sections/comprehensive-marketing/2l.png"
            alt="Talking"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <section className="bg-transparent rounded-lg p-4 flex-1 min-w-[300px]">
          <h2 className="text-xl font-bold mb-4">Comprehensive Marketing Plan</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { src: 'Responsive.png', title: 'Responsive', desc: 'I am always available via phone, text, or email.' },
              { src: 'Syndication.png', title: 'Syndication', desc: 'I market your property locally, nationally, and internationally.' },
              { src: 'VirtualTour.png', title: 'Virtual Tour', desc: 'Let\'s make your home stand out with a high-quality virtual tour.' },
              { src: 'Photography.png', title: 'Photography', desc: 'Beautiful, high-end photography is a central part of our marketing plan for your property.' }
            ].map((item, index) => (
              <div key={index} className="w-full sm:w-[calc(50%-0.5rem)] p-4 bg-gray-50 rounded-lg shadow-sm flex items-start">
                <img src={`/sections/comprehensive-marketing/${item.src}`} alt={item.title} className="w-16 h-16 object-cover rounded-lg mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <hr className="border-t-2 border-gray-300 my-8" />


{/* My Staging Expertise Section */}
<div className="flex justify-center gap-6 mb-6">
  <section className="bg-transparent rounded-lg p-4 flex-1 min-w-[300px]">
    <h2 className="text-xl font-bold mb-4">My Staging Expertise</h2>
    <div className="flex flex-wrap gap-4">
      {[
        { src: 'organized.png', title: 'Unclutter and Organize', desc: 'Create a clean and spacious environment.' },
        { src: 'arranged.png', title: 'Neatly Arrange', desc: 'Organize furniture and decor for optimal appeal.' },
        { src: 'pets.png', title: 'Keep Pets Outdoors', desc: 'Minimize pet presence for a neutral showing.' },
        { src: 'music.jpg', title: 'Play Soft Music', desc: 'Set a welcoming atmosphere with ambient sounds.' }
      ].map((item, index) => (
        <div key={index} className="w-full sm:w-[calc(50%-0.5rem)] p-4 bg-gray-50 rounded-lg shadow-sm">
          <img 
            src={`/sections/my-staging-experience/${item.src}`} 
            alt={item.title} 
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
  <div className="flex-none w-[400px] h-[500px] p-4">
    <img
      src="/sections/my-staging-experience/dgil.png"
      alt="Staging"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>


      <hr className="border-t-2 border-gray-300 my-8" />

      {/* The Selling and Buying Processes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[
          {
            img: 'sell2.jpg',
            title: 'The Selling Process',
            steps: [
              'Initial Consultation & Planning',
              'Devise & Execute Marketing Plan',
              'Review Offers & Reach Agreement with Buyer',
              'Complete Transaction Process',
              'After - Sale Service'
            ]
          },
          {
            img: 'buy.png',
            title: 'The Buying Process',
            steps: [
              'Initial Consultation & Planning',
              'Search for a Home & Get Pre-Approved',
              'Submit an Offer',
              'Complete Settlement Process'
            ]
          }
        ].map((process, index) => (
          <section key={index} className="bg-transparent rounded-lg p-6">
            <div className="mb-4">
              <img src={`/sections/processes/${process.img}`} alt={process.title} className="w-full h-[180px] object-cover rounded-lg" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{process.title}</h2>
            <div className="flex flex-wrap gap-6">
              {process.steps.map((step, idx) => (
                <div key={idx} className="flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{`Step ${idx + 1}`}</h3>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <hr className="border-t-2 border-gray-300 my-8" />


      <section className="bg-white p-6 mb-6 rounded-lg">
  <Carousel 
    showThumbs={false} 
    infiniteLoop={true} 
    useKeyboardArrows={true} 
    autoPlay={true} 
    showStatus={false}
    className="w-full max-w-screen-xl mx-auto"
  >
    {[
      {
        img: 'aone.png',
        title: 'Over 33 Years of Real Estate Success',
        content: 'We provide every one of our clients with a level of service they won\'t find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners, experience is 100% nonnegotiable. And it\'s an experience like no other.',
      },
      {
        img: 'atwo.png',
        title: 'We Want To Create An Unforgettable Experience For You...',
        content: 'We combine data gained from your home\'s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home\'s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. Successfully marketing a home in today\'s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.',
      },
      {
        img: 'athree.png',
        title: 'The Hansen Partners Communications Tablet',
        content: `We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the click of your tablet.<br /><br />Benefits:`,
        list: [
          'Review all documents and sign in the comfort of your home or anywhere.',
          'Stay up to date on all marketing activities, review materials, photos, etc. in real time.',
          'Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.',
          'You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our BombBomb video messaging system.'
        ],
        additionalContent: `We believe that transparency and guiding you and your family through the process is key to having the best experience. During these uncertain times, it is a good feeling to know you have someone with a proven track record you can count on. We will be here to handle your needs during the Real Estate process. We think of it before a need even arises. Because, that is just what we do. Who you work with does matter!`,
      }
    ].map((item, index) => (
      <div key={index} className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2">
          <img 
            src={`/sections/accomplishments/${item.img}`}
            alt={item.title}
            className="w-full h-70 object-cover rounded-lg"
          />
        </div>
        <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/2">
          <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="mb-4 text-left" dangerouslySetInnerHTML={{ __html: item.content }} />
              {item.list && (
                <ul className="list-disc list-inside text-left mt-4">
                  {item.list.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
            {item.additionalContent && (
              <p className="mt-4 text-left">{item.additionalContent}</p>
            )}
          </div>
        </div>
      </div>
    ))}
  </Carousel>
</section>

<hr className="border-t-2 border-gray-300 my-8" />


{/* We Market Your Home to The World Section */}
<section className="bg-transparent p-6 mb-6 rounded-lg">
  <h2 className="text-2xl font-bold mb-4">We Market Your Home to The World</h2>
  <h3 className="text-xl font-semibold mb-2">Our Online Marketing Strategy</h3>
  <p className="mb-6">
    The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.
  </p>

  <div className="space-y-6">
    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
      <div className="flex-1 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Local Exposure</h3>
        <p>
          Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.
        </p>
      </div>
      <div className="flex-none w-full md:w-1/3 h-[300px] bg-gray-200 rounded-lg">
        <img
          src="/sections/partners/Nextdoor.png"
          alt="Local Exposure"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
      <div className="flex-none w-full md:w-1/3 h-[300px] bg-gray-200 rounded-lg">
        <img
          src="/sections/partners/RTZ.png"
          alt="National Exposure"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">National Exposure</h3>
        <p>
          We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We will receive every inquiry about your property directly.
        </p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
      <div className="flex-1 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">International Exposure</h3>
        <p>
          To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK.
        </p>
      </div>
      <div className="flex-none w-full md:w-1/3 h-[300px] bg-gray-200 rounded-lg">
        <img
          src="/sections/partners/RealEstatePortals.png"
          alt="International Exposure"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

<hr className="border-t-2 border-gray-300 my-8" />

<section className="bg-transparent p-6 mb-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Global Marketing Reach</h2>
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[300px] bg-gray-50 p-4 rounded-lg flex items-start">
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-semibold mb-2">Leading Real Estate Companies of The World® & Luxury Portfolio International</h3>
            <p>
              JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. With more than 500 member firms around the world, our luxury listings are exposed to a vast global audience and reach potential buyers and investors in over 50 countries.
            </p>
          </div>
          <img src="/sections/partners/luxury.png" alt="Leading Real Estate Companies" className="w-[350px] h-auto object-contain rounded-lg"/>
        </div>

        <div className="flex-1 min-w-[400px] bg-gray-50 p-4 rounded-lg flex items-start">
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-semibold mb-2">Who's Who in Luxury Real Estate</h3>
            <p>
              Who’s Who in Luxury Real Estate is a global collection of luxury real estate brokers. Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:
            </p>
            <img src="/sections/partners/RealEstatePortals-L.png" alt="Placeholder Image" className="w-full h-[auto] object-cover mt-4 rounded-lg"/>
            <p>
              We also have several well-positioned affiliate offices in China, providing our clients with access to buyers in Hong Kong, Shanghai, and Beijing.
            </p>
          </div>
          <img src="/sections/partners/global.png" alt="Who's Who in Luxury Real Estate" className="w-[350px] h-auto object-contain rounded-lg"/>
        </div>
      </div>
      <section className="bg-transparent p-6 mb-6 rounded-lg">
      <div className="flex items-start gap-6">
        {/* Image Placeholder */}
        <div className="flex-shrink-0">
          <img
            src="/sections/partners/PhoneLandscape.png"
            alt="Image Placeholder"
            className="w-[300px] h-auto object-cover rounded-lg"
          />
        </div>

        {/* Marketing Tabs */}
        <div className="flex-1">
          <MarketingTabs />
        </div>
      </div>
    </section>
    </section>
    
    <section className="relative text-white bg-black  rounded-lg p-8 mb-6">
      <img
        src="/sections/work-with-us/wwu-bg.jpg"
        alt="Work With Us Background"
        className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-60"
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
        <hr className="border-t-2 border-white my-4 mx-auto w-24" />
        <p className="text-lg mb-6">
          With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams are a reality. Let us guide you through your home buying journey, contact us today!
        </p>
        <a
          href="/contact"
          className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Contact Us
        </a>
      </div>
    </section>
    
      <Footer />
    </div>
  );
}

export default App;
