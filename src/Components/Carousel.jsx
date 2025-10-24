// // // import React from 'react';
// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import "swiper/swiper-bundle.css"; // Import Swiper styles

// // // // Import your images
// // // import firsttoy from '../assets/toy1.avif';
// // // import secondtoy from '../assets/toy2.avif';
// // // import thirdtoy from '../assets/toy3.avif';

// // // const Carousel = () => {
// // //   return (
// // //     <div className="relative">
// // //       <Swiper
// // //         spaceBetween={0}
// // //         slidesPerView={1}
// // //         loop={true}
// // //         autoplay={{
// // //           delay: 2500,
// // //           disableOnInteraction: false,
// // //         }}
// // //         navigation={{
// // //           nextEl: '.swiper-button-next',
// // //           prevEl: '.swiper-button-prev',
// // //         }}
// // //       >
// // //         {/* First slide */}
// // //         <SwiperSlide>
// // //           <div className="relative">
// // //             <img
// // //               src={firsttoy}
// // //               alt="First Toy"
// // //               className="w-full h-[80vh] object-cover"
// // //             />
// // //             <div className="absolute inset-0 bg-red bg-opacity-50 flex justify-center items-center text-center text-white">
// // //               <div>
// // //                 <h1 className="text-4xl font-bold mb-4 animate__animated animate__slideInDown">
// // //                   Let's Change The World With Humanity
// // //                 </h1>
// // //                 <p className="text-lg mb-4">
// // //                   HandsTogether unites us all in kindness, creating a community where each helping hand makes a difference.
// // //                 </p>
// // //                 <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700">
// // //                   Learn More
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </SwiperSlide>

// // //         {/* Second slide */}
// // //         <SwiperSlide>
// // //           <div className="relative">
// // //             <img
// // //               src={secondtoy}
// // //               alt="Second Toy"
// // //               className="w-full h-[80vh] object-cover"
// // //             />
// // //             <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center text-white">
// // //               <div>
// // //                 <h1 className="text-4xl font-bold mb-4 animate__animated animate__slideInDown">
// // //                   Let's Save More Lives With Our Helping Hand
// // //                 </h1>
// // //                 <p className="text-lg mb-4">
// // //                   HandsTogether unites us all in kindness, creating a community where each helping hand makes a difference.
// // //                 </p>
// // //                 <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700">
// // //                   Learn More
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </SwiperSlide>

// // //         {/* Third slide */}
// // //         <SwiperSlide>
// // //           <div className="relative">
// // //             <img
// // //               src={thirdtoy}
// // //               alt="Third Toy"
// // //               className="w-full h-[80vh] object-cover"
// // //             />
// // //             <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center text-white">
// // //               <div>
// // //                 <h1 className="text-4xl font-bold mb-4 animate__animated animate__slideInDown">
// // //                   Join Us In Making A Change
// // //                 </h1>
// // //                 <p className="text-lg mb-4">
// // //                   HandsTogether unites us all in kindness, creating a community where each helping hand makes a difference.
// // //                 </p>
// // //                 <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700">
// // //                   Learn More
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </SwiperSlide>
// // //       </Swiper>

// // //       {/* Navigation Arrows */}
// // //       <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-blue-700 cursor-pointer">
// // //         &lt;
// // //       </div>
// // //       <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-blue-700 cursor-pointer">
// // //         &gt;
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Carousel;


// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/swiper-bundle.css"; // Import Swiper styles

// // // Import your images
// // import firsttoy from '../assets/toy1.avif';
// // import secondtoy from '../assets/toy2.avif';
// // import thirdtoy from '../assets/toy3.avif';

// // const Carousel = () => {
// //   return (
// //     <div className="relative">
// //       <Swiper
// //         spaceBetween={30}
// //         slidesPerView={1}
// //         loop={true}
// //         autoplay={{
// //           delay: 2500,
// //           disableOnInteraction: false,
// //         }}
// //         navigation={{
// //           nextEl: ".swiper-button-next", // Next button
// //           prevEl: ".swiper-button-prev", // Prev button
// //         }}
// //         breakpoints={{
// //           640: {
// //             slidesPerView: 1,
// //           },
// //           768: {
// //             slidesPerView: 2,
// //           },
// //           1024: {
// //             slidesPerView: 3,
// //           },
// //         }}
// //       >
// //         {/* First slide */}
// //         <SwiperSlide>
// //           <div className="relative">
// //             <img
// //               src={firsttoy}
// //               alt="First Toy"
// //               className="w-full h-[80vh] object-cover"
// //             />
// //             <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center text-white">
// //               <div>
// //                 <h1 className="text-4xl font-bold mb-4 animate__animated animate__slideInDown">
// //                   Let's Change The World With Humanity
// //                 </h1>
// //                 <p className="text-lg mb-4">
// //                   HandsTogether unites us all in kindness, creating a community where each helping hand makes a difference.
// //                 </p>
// //                 <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700">
// //                   Learn More
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </SwiperSlide>

// //         {/* Second slide */}
// //         <SwiperSlide>
// //           <div className="relative">
// //             <img
// //               src={secondtoy}
// //               alt="Second Toy"
// //               className="w-full h-[80vh] object-cover"
// //             />
// //             <div className="absolute inset-0 bg-blue bg-opacity-50 flex justify-center items-center text-center text-white">
// //               <div>
// //                 <h1 className="text-4xl font-bold mb-4 animate__animated animate__slideInDown">
// //                   Let's Save More Lives With Our Helping Hand
// //                 </h1>
// //                 <p className="text-lg mb-4">
// //                   HandsTogether unites us all in kindness, creating a community where each helping hand makes a difference.
// //                 </p>
// //                 <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700">
// //                   Learn More
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </SwiperSlide>

// //         {/* Third slide */}
// //         <SwiperSlide>
// //           <div className="relative">
// //             <img
// //               src={thirdtoy}
// //               alt="Third Toy"
// //               className="w-full h-[80vh] object-cover"
// //             />
// //             <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center text-white">
// //               <div>
// //                 <h1 className="text-4xl font-bold mb-4 animate__animated animate__slideInDown">
// //                   Join Us In Making A Change
// //                 </h1>
// //                 <p className="text-lg mb-4">
// //                   HandsTogether unites us all in kindness, creating a community where each helping hand makes a difference.
// //                 </p>
// //                 <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700">
// //                   Learn More
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </SwiperSlide>
// //       </Swiper>

// //       {/* Custom Navigation Arrows */}
// //       <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-blue-700 cursor-pointer z-10">
// //         &lt;
// //       </div>
// //       <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-blue-700 cursor-pointer z-10">
// //         &gt;
// //       </div>
// //     </div>
// //   );
// // };

// // export default Carousel;


// import React, { useState } from "react";

// // Import images
// import firsttoy from '../assets/toy1.avif';
// import secondtoy from '../assets/toy2.avif';
// import thirdtoy from '../assets/toy3.avif';

// const Carousel = () => {
//   // Set the initial index to 0 (first image)
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Array of images
//   const images = [firsttoy, secondtoy, thirdtoy];

//   // Function to go to the previous image
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Function to go to the next image
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative my-8">
//       {/* Image Container */}
//       <div className="w-full h-[80vh] relative">
//         <img
//           src={images[currentIndex]}
//           alt="Toy"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer z-10" onClick={prevSlide}>
//         &lt;
//       </div>
//       <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer z-10" onClick={nextSlide}>
//         &gt;
//       </div>
//     </div>
//   );
// };

// export default Carousel;


// import React, { useState } from "react";

// // Import images
// import firsttoy from '../assets/toy1.avif';
// import secondtoy from '../assets/toy2.avif';
// import thirdtoy from '../assets/toy3.avif';

// const Carousel = () => {
//   // Set the initial index to 0 (first image)
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Array of images
//   const images = [firsttoy, secondtoy, thirdtoy];

//   // Function to go to the previous image
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Function to go to the next image
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative my-8">
//       {/* Image Container */}
//       <div className="w-full h-[80vh] relative">
//         <img
//           src={images[currentIndex]}
//           alt="Toy"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer z-10" onClick={prevSlide}>
//         &lt;
//       </div>
//       <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer z-10" onClick={nextSlide}>
//         &gt;
//       </div>
//     </div>
//   );
// };

// export default Carousel;


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
