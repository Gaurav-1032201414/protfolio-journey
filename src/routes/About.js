import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection2 from '../components/HeroSection2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSection2 heading="About Me." text="Hi! I am Software Developer"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About