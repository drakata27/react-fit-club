import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"


const Hero = () => {
  return (
    <div className="hero">
        {/* Left side */}
        <div className="left-h">
            <Header />
            {/* The best ad div */}
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the citeh</span>
            </div>

            {/* Hero heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>

                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>
                        In here we will help you shape and build
                        your ideal body and live up your life to the fullest
                    </span>
                </div>

            </div>
            {/* Figures */}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>

                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>

                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/* Hero buttons */}
            <div className="hero-buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>

        {/* Right side */}
        <div className="right-h">
            <button className='btn'>Join Now</button>

            <div className="heart-rate">
                <img src={Heart} alt="Heart" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            {/* Hero images */}
            <img src={hero_image} alt="hero" className='hero-image'/>
            <img src={hero_image_back} alt="hero back" className='hero-image-back'/>
            
            {/* Calories */}
            <div className="calories">
                <img src={Calories} alt="calories" className='calories'/>
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero