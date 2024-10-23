import React from 'react';
import sitamarhiImage from '../assets/masala_banner.jpg'; 
import shopImage from '../assets/masala_banner.jpg'; 

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      {/* Section for Sita's Birthplace */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div className="lg:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Maa Sita's Birthplace: Sitamarhi</h2>
          <p className="text-lg mb-4">
            Sitamarhi is a town in Bihar, India, known as the birthplace of Maa Sita, the wife of Lord Rama. It is a place of great cultural and religious significance for many people. The town is surrounded by beautiful landscapes and is steeped in mythology and history.
          </p>
          <p className="text-lg">
            Sitamarhi offers a unique blend of natural beauty and spiritual significance, making it a popular destination for pilgrims and tourists alike.
          </p>
        </div>
        <div className="lg:w-1/2 p-4">
          <img
            src={sitamarhiImage}
            alt="Sitamarhi"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section for Shop Quality */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div className="lg:w-1/2 p-4">
          <img
            src={shopImage}
            alt="Shop"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Our Shop</h2>
          <p className="text-lg mb-4">
            Our shop is dedicated to bringing you the finest quality products that represent the essence of Sitamarhi. We ensure that all our offerings are sourced responsibly and maintain the highest standards of quality.
          </p>
          <p className="text-lg">
            From traditional spices to handcrafted items, each product reflects the rich heritage of our birthplace.
          </p>
        </div>
      </div>

      {/* Journey Roadmap */}
      <h2 className="text-2xl font-semibold text-center mb-4">Our Journey</h2>
      <div className="relative mb-12">
        <div className="flex flex-col lg:flex-row items-center mb-8">
          <div className="text-center mb-4 lg:mb-0 lg:w-1/4">
            <div className="h-20 w-20 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-2">1996</div>
            <p className="text-lg">Founded</p>
          </div>
          <div className="h-1 w-full bg-gray-300 lg:hidden" /> {/* Hide the divider on small screens */}
          <div className="text-center mb-4 lg:mb-0 lg:w-1/4">
            <div className="h-20 w-20 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-2">1996</div>
            <p className="text-lg">First Product Launch</p>
          </div>
          <div className="h-1 w-full bg-gray-300 lg:hidden" />
          <div className="text-center mb-4 lg:mb-0 lg:w-1/4">
            <div className="h-20 w-20 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-2">1997</div>
            <p className="text-lg">Expansion of Offline Store Network</p>
          </div>
          <div className="h-1 w-full bg-gray-300 lg:hidden" />
          <div className="text-center mb-4 lg:mb-0 lg:w-1/4">
            <div className="h-20 w-20 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-2">2000</div>
            <p className="text-lg">Partnership with Farmers for Quality Raw Materials</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
