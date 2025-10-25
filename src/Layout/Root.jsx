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
  const location = useLocation();

  const hideLayoutComponents = ['/login', '/register', '/profile', '/forgot-password'];
  const isToyDetailsPage = location.pathname.includes('/toy/');

  return (
    <div>
      <Navbar />
      {location.pathname === '/' && <HeroSection />}
      {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
        <>
          <Slider />
          <Carousel />
        </>
      )}

      <Outlet />

      {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
        <>
          <BestSellingToys />
          <Testimonials />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Root;
