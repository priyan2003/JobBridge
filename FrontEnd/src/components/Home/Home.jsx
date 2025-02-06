import React from 'react'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

function Home() {
  return (
    <>
     <HeroSection/>
     <CategoryCarousel/>
     <LatestJobs/>
     <Footer/>
    </>
  )
}

export default Home