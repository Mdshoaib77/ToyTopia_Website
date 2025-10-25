// // // // import React from 'react'
// // // // import { Outlet } from 'react-router'
// // // // import Navbar from '../Components/Navbar'
// // // // import Footer from '../Components/Footer'
// // // // import Slider from '../Components/Slider'
// // // // import Carousel from '../Components/Carousel'
// // // // import BestSellingToys from '../Components/BestSellingToys'
// // // // import Testimonials from '../Components/Testimonials'

// // // // const Root = () => {
// // // //   return (
// // // //     <div>
// // // // <Navbar/>
// // // // <Slider/>
// // // // <Carousel/>
// // // // <Outlet/>
// // // // <BestSellingToys/>
// // // // <Testimonials/>
// // // // <Footer/>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Root


// // // import React from 'react';
// // // import { Outlet, useLocation } from 'react-router';
// // // import Navbar from '../Components/Navbar';
// // // import Footer from '../Components/Footer';
// // // import Slider from '../Components/Slider';
// // // import Carousel from '../Components/Carousel';
// // // import BestSellingToys from '../Components/BestSellingToys';
// // // import Testimonials from '../Components/Testimonials';

// // // const Root = () => {
// // //   const location = useLocation(); // Get the current route

// // //   // Define the routes where the Slider and Carousel should not be shown
// // //   const hideLayoutComponents = ['/login', '/register', '/profile'];

// // //   return (
// // //     <div>
// // //       {/* Always show Navbar */}
// // //       <Navbar />

// // //       {/* Conditionally show Slider and Carousel */}
// // //       {!hideLayoutComponents.includes(location.pathname) && (
// // //         <>
// // //           <Slider />
// // //           <Carousel />
// // //         </>
// // //       )}

// // //       {/* Render the page content (Outlet) */}
// // //       <Outlet />

// // //       {/* Always show BestSellingToys and Testimonials */}
// // //       {!hideLayoutComponents.includes(location.pathname) && (
// // //         <>
// // //           <BestSellingToys />
// // //           <Testimonials />
// // //         </>
// // //       )}

// // //       {/* Always show Footer */}
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default Root;


// // import React from 'react';
// // import { Outlet, useLocation } from 'react-router';
// // import Navbar from '../Components/Navbar';
// // import Footer from '../Components/Footer';
// // import Slider from '../Components/Slider';
// // import Carousel from '../Components/Carousel';
// // import BestSellingToys from '../Components/BestSellingToys';
// // import Testimonials from '../Components/Testimonials';
// // import HeroSection from '../Components/HeroSection';

// // const Root = () => {
// //   const location = useLocation(); // Get the current route

// //   // Define the routes where Slider, Carousel, BestSellingToys, and Testimonials should not be shown
// //   // Checking if path contains '/toy/' (for toy details pages)
// //   const hideLayoutComponents = ['/login', '/register', '/profile'];
// //   const isToyDetailsPage = location.pathname.includes('/toy/');

// //   return (
// //     <div>
// //       {/* Always show Navbar */}
// //       <Navbar />
// //       <HeroSection/>

// //       {/* Conditionally show Slider and Carousel */}
// //       {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
// //         <>
// //           <Slider />
// //           <Carousel />
// //         </>
// //       )}

// //       {/* Render the page content (Outlet) */}
// //       <Outlet />

// //       {/* Always show BestSellingToys and Testimonials, except on certain routes */}
// //       {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
// //         <>
// //           <BestSellingToys />
// //           <Testimonials />
// //         </>
// //       )}

// //       {/* Always show Footer */}
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Root;


// import React from 'react';
// import { Outlet, useLocation } from 'react-router';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Slider from '../Components/Slider';
// import Carousel from '../Components/Carousel';
// import BestSellingToys from '../Components/BestSellingToys';
// import Testimonials from '../Components/Testimonials';
// import HeroSection from '../Components/HeroSection';

// const Root = () => {
//   const location = useLocation(); // Get the current route

//   // Define the routes where Slider, Carousel, BestSellingToys, and Testimonials should not be shown
//   // Checking if path contains '/toy/' (for toy details pages)
//   const hideLayoutComponents = ['/login', '/register', '/profile'];
//   const isToyDetailsPage = location.pathname.includes('/toy/');

//   return (
//     <div>
//       {/* Always show Navbar */}
//       <Navbar />
      
//       {/* Show HeroSection only on the home page */}
//       {location.pathname === '/' && <HeroSection />}

//       {/* Conditionally show Slider and Carousel */}
//       {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
//         <>
//           <Slider />
//           <Carousel />
//         </>
//       )}

//       {/* Render the page content (Outlet) */}
//       <Outlet />

//       {/* Always show BestSellingToys and Testimonials, except on certain routes */}
//       {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
//         <>
//           <BestSellingToys />
//           <Testimonials />
//         </>
//       )}

//       {/* Always show Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Root;


import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Carousel from '../Components/Carousel';
import BestSellingToys from '../Components/BestSellingToys';
import Testimonials from '../Components/Testimonials';
import HeroSection from '../Components/HeroSection';

const Root = () => {
  const location = useLocation(); // Get the current route

  // Define the routes where Slider, Carousel, BestSellingToys, and Testimonials should not be shown
  const hideLayoutComponents = ['/login', '/register', '/profile', '/forgot-password'];
  const isToyDetailsPage = location.pathname.includes('/toy/');

  return (
    <div>
      {/* Always show Navbar */}
      <Navbar />
      
      {/* Show HeroSection only on the home page */}
      {location.pathname === '/' && <HeroSection />}

      {/* Conditionally show Slider and Carousel */}
      {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
        <>
          <Slider />
          <Carousel />
        </>
      )}

      {/* Render the page content (Outlet) */}
      <Outlet />

      {/* Always show BestSellingToys and Testimonials, except on certain routes */}
      {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
        <>
          <BestSellingToys />
          <Testimonials />
        </>
      )}

      {/* Always show Footer */}
      <Footer />
    </div>
  );
};

export default Root;
