import React, { useState } from "react";

// Import images
import firsttoy from '../assets/toy1.avif';
import secondtoy from '../assets/toy2.avif';
import thirdtoy from '../assets/toy3.avif';

const Carousel = () => {
  // Set the initial index to 0 (first image)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images
  const images = [firsttoy, secondtoy, thirdtoy];

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative my-8">
      {/* Image Container */}
      <div className="w-full h-[80vh] relative overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Toy"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 bg-red bg-opacity-50 flex justify-center items-center text-center text-white">
          <div>
            <h1 className="text-4xl font-bold mb-4 animate__animated animate__slideInDown">
              Best Toys Collection
            </h1>
            <p className="text-lg mb-4">
              Explore the world of toys with our best collection at Toy Shop.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer z-10" onClick={prevSlide}>
        &lt;
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer z-10" onClick={nextSlide}>
        &gt;
      </div>
    </div>
  );
};

export default Carousel;
