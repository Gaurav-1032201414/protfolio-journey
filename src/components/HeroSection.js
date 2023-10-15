import "./HeroSectionStyles.css"
import React from "react"

import IntroImg from "../assests/intro-image.jpg"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className="hero">
        <div className="mask">
             <img className="intro-img" 
             src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hi, I am a Freelancer.</p>
            <h1>Software Developer.</h1>
            <div>
                <Link to="/project" className="btn">
                    Projects
                </Link>
                <Link to="/contact" className="btn btn-light">
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
