import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection2 from '../components/HeroSection2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroSection2 heading="Projects." text="Some of My most recent works."/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project