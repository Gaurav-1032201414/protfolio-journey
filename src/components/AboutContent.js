import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

import stackimg1 from "../assests/stack-img1.jpg"
import stackimg2 from "../assests/stack-img2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Sftware Developer. I develop 
                chatbots, machine learning modules 
                and responsive websites in reactjs. </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={stackimg1} className="img"
                    alt="stackimg1" />
                </div>

                <div className="img-stack bottom">
                    <img src={stackimg2} className="img"
                    alt="stackimg2" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent