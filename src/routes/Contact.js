import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection2 from '../components/HeroSection2'
import Forms from '../components/Forms'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSection2 heading="Contact Me" text="I really love to have a chat." />
      <Forms />
      <Footer />
    </div>
  )
}

export default Contact