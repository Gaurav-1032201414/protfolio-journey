import { FaDiscord, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'



const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} 
                    style={{color: "#fff", 
                    marginRight: "2rem"}} />
                    <div>
                        <p>123 Housing Society.</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} 
                        style={{color: "#fff", 
                        marginRight: "2rem"}} />
                        1800-255-255    
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} 
                        style={{color: "#fff", 
                        marginRight: "2rem"}} />
                        info@gmail.com    
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>
                    About the Company.
                </h4>
                <p>
                    This is me Gaurav Untawale. I am a Software Developer.
                </p>
                <div className="social">
                    <FaInstagram size={30} 
                    style={{color: "#fff", 
                    marginRight: "1rem"}} />
                    
                    <FaTwitter size={30} 
                    style={{color: "#fff", 
                    marginRight: "1rem"}} />
                    
                    <FaLinkedin size={30} 
                    style={{color: "#fff", 
                    marginRight: "1rem"}} />

                    <FaDiscord size={30} 
                    style={{color: "#fff", 
                    marginRight: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer