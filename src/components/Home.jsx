import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colg from '../assets/spices.jpg';
import colg2 from '../assets/masala_banner.jpg';
import colg3 from '../assets/col1.jpg';
import colg4 from '../assets/col2.jpg';
import HomeCTA from './HomeCTA';

const Home = () => {
  const images = [colg, colg2, colg3, colg4];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const imageTexts = [
    { src: colg, text: 'Freshly Ground Spices', description: 'Our spices are freshly ground to preserve their aroma and flavor.' },
    { src: colg2, text: 'Unique Spice Blends', description: 'Explore unique spice blends that will add depth and flavor to your dishes.' },
    { src: colg3, text: 'Premium Quality Spices', description: 'Discover a wide range of authentic Indian spices to elevate your cooking.' },
    { src: colg4, text: 'Traditional and Modern Blends', description: 'A delightful blend of traditional and modern spices.' },
  ];

  const changeImage = (image, index) => {
    setCurrentImage(image);
    setSelectedIndex(index);
  };

  // Carousel responsive settings
  const responsive = {
    superLarge: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 }, 
      items: 1,
    },
  };
  
  return (
    <div>
      <div className="flex items-center justify-center bg-cover bg-center">
        <div className="flex flex-col p-8 md:p-20 bg-white bg-opacity-60 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Welcome to Dil Bahar Masala</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Spice up your dishes with our premium masala blends</h2>
          <p className="text-base md:text-lg text-center mb-6">
            Explore a world of flavors with our handcrafted masala blends made from the finest ingredients sourced from around the globe.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative overflow-hidden w-full mt-10 gap-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px mx-2"
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          arrows={false}
        >
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-3xl">
              <img
                src={image}
                alt={`Masala ${index + 1}`}
                className="rounded-lg w-full h-48 md:h-60 object-cover hover:scale-110 transform transition-transform duration-300 ease-in-out"
                onClick={() => changeImage(image, index)}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Features Section */}
      <div className="max-w-full mx-auto mt-10">
        <div className="bg-gray-100 p-6 md:p-12 rounded-lg">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left Image Container */}
            <div className="relative w-full md:w-1/2 h-48 md:h-1/2 flex justify-center items-center mb-10 md:mb-0">
              <div className="absolute inset-0 bg-white shadow-lg transform translate-x-4 translate-y-4 rounded-lg z-0"></div>
              <img
                alt="Current Spice Selection"
                src={currentImage}
                className="object-cover rounded-lg h-full w-full relative z-10"
              />
            </div>

            {/* Right Tabs Menu */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4">
              {imageTexts.map((item, index) => (
                <div key={index} className="flex mb-4 cursor-pointer relative">
                  {selectedIndex === index && (
                    <div className="absolute left-0 w-1 h-8 bg-blue-500" />
                  )}
                  <div
                    className={`flex-grow ml-3 ${selectedIndex === index ? 'text-blue-500' : ''}`}
                    onClick={() => changeImage(item.src, index)}
                  >
                    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h2 className="text-lg md:text-xl font-bold">{item.text}</h2>
                      <span className="text-sm md:text-base">{item.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Component */}
      <div className="flex flex-col items-center justify-center w-full h-full p-8">
        <div className="relative w-full max-w-full flex items-center justify-between p-4 md:p-8 group">
          {/* Card shadow effect */}
          <div className="absolute inset-0 transform rotate-[-1deg] bg-blue-200 w-full h-full rounded-lg z-0 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1"></div>
          <div className="absolute inset-0 transform rotate-[1deg] bg-gray-100 w-full h-full rounded-lg z-0 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2"></div>

          {/* Main card container */}
          <div className="relative flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center w-full bg-blue-200 p-4 md:p-8 rounded-lg transform transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:translate-y-3 hover:bg-gray-800 hover:text-white">
            <div className='flex flex-col space-y-2'>
              <h1 className="text-2xl md:text-3xl font-bold">
                Spice up your cooking with Masala Comp
              </h1>
              <p className="text-base md:text-lg">
                Discover a world of flavors with our premium spice blends.
              </p>
            </div>
            <button className="bg-blue-500 text-white p-2 md:p-4 py-2 rounded-lg hover:bg-pink-600 transition duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* New Component */}
      <HomeCTA />
    </div>
  );
};

export default Home;
