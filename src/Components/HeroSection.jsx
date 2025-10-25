import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import image from '../assets/hero1.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center mt-0"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 max-w-3xl w-full">
          {/* Hero Title with motion */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Toytopia - Your Ultimate Toy Destination
          </motion.h1>

          {/* Hero Description with motion */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Discover a world of fun and learning with our wide range of toys for all ages.
          </motion.p>

          {/* Shop Now Button with motion */}
          <motion.a
            href="#shop-now"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-gradient-to-l transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Shop Now
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
