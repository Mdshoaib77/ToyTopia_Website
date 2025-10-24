import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'
import Carousel from '../Components/Carousel'
import BestSellingToys from '../Components/BestSellingToys'
import Testimonials from '../Components/Testimonials'

const Root = () => {
  return (
    <div>
<Navbar/>
<Slider/>
<Carousel/>

<Outlet/>
<BestSellingToys/>
<Testimonials/>
<Footer/>
    </div>
  )
}

export default Root
