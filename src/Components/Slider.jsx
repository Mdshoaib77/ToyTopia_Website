import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper CSS
import firsttoy from '../assets/f1.avif';
import secondtoy2 from '../assets/f2.avif';
import thirdtoy3 from '../assets/features3.avif';

// Data for the toys
const toys = [
  {
    id: 1,
    name: "Lego Classic Bricks",
    image: firsttoy,
    description: "A timeless set of colorful Lego bricks that encourages creativity and problem-solving.",
  },
  {
    id: 2,
    name: "Barbie Dream House",
    image: secondtoy2,
    description: "A beautiful Barbie Dream House for hours of fun and imagination.",
  },
  {
    id: 3,
    name: "Hot Wheels Car Set",
    image: thirdtoy3,
    description: "A set of colorful and speedy Hot Wheels cars for your collection.",
  },
];

const Slider = () => {
  return (
    <div className="my-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Toys</h2>

      {/* Swiper Component */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true} // Add navigation buttons
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {toys.map((toy) => (
          <SwiperSlide key={toy.id}>
            <div className="relative group rounded-lg overflow-hidden shadow-xl">
              <img
                src={toy.image}
                alt={toy.name}
                className="w-full h-60 object-cover transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 className="text-xl font-semibold">{toy.name}</h3>
                  <p className="mt-2">{toy.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
