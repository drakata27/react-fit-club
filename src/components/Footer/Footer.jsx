import React from 'react'
import './Footer.css'
import GitHub from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="socials">
                <img src={GitHub} alt="github" />
                <img src={Instagram} alt="instagram" />
                <img src={Linkedin} alt="linkedin" />
            </div>
            
            <div className="logo-f">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default Footer