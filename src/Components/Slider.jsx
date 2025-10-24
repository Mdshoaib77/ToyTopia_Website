// // import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react'; 
// // import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// // // Toy images and details (example)
// // const toys = [
// //   {
// //     id: 1,
// //     name: "Lego Classic Bricks",
// //     image: "https://images.unsplash.com/photo-1599651382282-d84db8b62f1e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-1.2.1&q=80&w=400",
// //     price: "$49.99",
// //   },
// //   {
// //     id: 2,
// //     name: "Barbie Dream House",
// //     image: "https://images.unsplash.com/photo-1566763835-7c6cc1b50e89?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-1.2.1&q=80&w=400",
// //     price: "$199.99",
// //   },
// //   {
// //     id: 3,
// //     name: "Hot Wheels Car Set",
// //     image: "https://images.unsplash.com/photo-1607630432951-9f3812d00a68?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-1.2.1&q=80&w=400",
// //     price: "$39.99",
// //   },
// // ];

// // const Slider = () => {
// //   return (
// //     <div className="w-full py-16">
// //       <h2 className="text-3xl font-semibold text-center mb-8">Featured Toys</h2>

// //       {/* Swiper Component */}
// //       <Swiper
// //         spaceBetween={50}
// //         slidesPerView={1}
// //         loop={true}
// //         breakpoints={{
// //           640: {
// //             slidesPerView: 2,
// //           },
// //           1024: {
// //             slidesPerView: 3,
// //           },
// //         }}
// //       >
// //         {toys.map((toy) => (
// //           <SwiperSlide key={toy.id}>
// //             <div className="relative">
// //               <img
// //                 src={toy.image}
// //                 alt={toy.name}
// //                 className="w-full h-56 object-cover rounded-lg shadow-lg"
// //               />
// //               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-b-lg">
// //                 <h3 className="text-white text-xl">{toy.name}</h3>
// //                 <p className="text-white text-lg">{toy.price}</p>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default Slider;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css"; // Corrected path for swiper CSS

// // Toy data for slider
// const toys = [
//   {
//     id: 1,
//     name: "Lego Classic Bricks",
//     image:
//       "https://plus.unsplash.com/premium_photo-1738894549224-b65576df41ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//     description:
//       "A timeless set of colorful Lego bricks that encourages creativity and problem-solving.",
//   },
//   {
//     id: 2,
//     name: "Barbie Dream House",
//     image:
//       "https://plus.unsplash.com/premium_photo-1744123187902-36cf9ded228f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
//     description: "A beautiful Barbie Dream House for hours of fun and imagination.",
//   },
//   {
//     id: 3,
//     name: "Hot Wheels Car Set",
//     image:
//       "https://images.unsplash.com/photo-1757660201653-7534f63c79d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//     description:
//       "A set of colorful and speedy Hot Wheels cars for your collection.",
//   },
// ];

// const Slider = () => {
//   return (
//     <div className="slider-container my-8 px-4 md:px-16">
//       <h2 className="text-3xl font-bold text-center mb-6">Featured Toys</h2>
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//         }}
//       >
//         {toys.map((toy) => (
//           <SwiperSlide key={toy.id}>
//             <div className="relative rounded-lg overflow-hidden shadow-lg">
//               <img
//                 src={toy.image}
//                 alt={toy.name}
//                 className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-center p-4">
//                 <div>
//                   <h3 className="text-xl font-semibold">{toy.name}</h3>
//                   <p className="text-sm mt-2">{toy.description}</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css"; 
// import firsttoy from '../assets/toy1.avif';
// import secondtoy2 from '../assets/toy2.avif';
// import thirdtoy3 from '../assets/toy3.avif';

// // Sample data for toys
// const toys = [
//   {
//     id: 1,
//     name: "Lego Classic Bricks",
//     image:
//       "https://images.unsplash.com/photo-1571968761604-0b5b7bfae039?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxld28lMjBmb3h8ZW58MHx8fHwxNjE3NzEwMzcw&ixlib=rb-1.2.1&q=80&w=1080",
//     description:
//       "A timeless set of colorful Lego bricks that encourages creativity and problem-solving.",
//   },
//   {
//     id: 2,
//     name: "Barbie Dream House",
//     image:
//       "https://images.unsplash.com/photo-1573937595065-1f4e9c3852fb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDMyfHxiYXJiaWUlMjBkcmVhbXxlbnwwfHx8fHwxNjE3NzI4NTQz&ixlib=rb-1.2.1&q=80&w=1080",
//     description: "A beautiful Barbie Dream House for hours of fun and imagination.",
//   },
//   {
//     id: 3,
//     name: "Hot Wheels Car Set",
//     image:
//       "https://images.unsplash.com/photo-1512958759294-83d1788e75fd?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGhvdCB3aGVlbHN8ZW58MHx8fHwxNjE3NzI5NzE2&ixlib=rb-1.2.1&q=80&w=1080",
//     description:
//       "A set of colorful and speedy Hot Wheels cars for your collection.",
//   },
// ];

// const Slider = () => {
//   return (
//     <div className="my-8">
//       <h2 className="text-3xl font-bold text-center mb-6">Featured Toys</h2>

//       {/* Swiper Component */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//         }}
//       >
//         {toys.map((toy) => (
//           <SwiperSlide key={toy.id}>
//             <div className="relative group rounded-lg overflow-hidden shadow-xl">
//               <img
//                 src={toy.image}
//                 alt={toy.name}
//                 className="w-full h-60 object-cover transition-transform transform group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div>
//                   <h3 className="text-xl font-semibold">{toy.name}</h3>
//                   <p className="mt-2">{toy.description}</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper CSS
import firsttoy from '../assets/toy1.avif';
import secondtoy2 from '../assets/toy2.avif';
import thirdtoy3 from '../assets/toy3.avif';

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
