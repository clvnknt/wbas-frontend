import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define tab data and content
const tabs = [
  {
    id: 1,
    title: "Responsive",
    content: "Our marketing strategies are designed to be responsive and adaptable to different platforms, ensuring maximum reach and engagement.",
    image: "./sections/comprehensive-marketing/Responsive.png",
  },
  {
    id: 2,
    title: "Syndication",
    content: "We syndicate your property listings across multiple channels to increase visibility and attract potential buyers.",
    image: "./sections/comprehensive-marketing/Syndication.png",
  },
  {
    id: 3,
    title: "Virtual Tour",
    content: "Create immersive virtual tours to give potential buyers a detailed view of your property from the comfort of their own home.",
    image: "./sections/comprehensive-marketing/VirtualTour.png",
  },
  {
    id: 4,
    title: "Drone Photography",
    content: "High-quality photography to showcase your property in the best light and attract more interest.",
    image: "./sections/comprehensive-marketing/DronePhotography.png",
  },
];

const MarketingTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
      {/* Tab Buttons */}
      <div className="flex flex-wrap border-b border-gray-300 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 text-center py-2 px-3 sm:px-4 border-b-2 transition-all duration-300 ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-500 font-bold'
                : 'border-transparent text-gray-500 hover:text-blue-500'
            } text-sm sm:text-base`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row items-center"
        >
          {tabs.map(
            (tab) =>
              tab.id === activeTab && (
                <div key={tab.id} className="flex flex-col md:flex-row items-center">
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="w-24 h-24 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                  />
                  <div className="md:w-4/5 text-center md:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{tab.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700">{tab.content}</p>
                  </div>
                </div>
              )
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MarketingTabs;
