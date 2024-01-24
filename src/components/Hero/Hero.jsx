import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition = {typeof: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true : false

  return (
    <div className="hero" id='home'>
        <div className="blur hero-blur"></div>

        {/* Left side */}
        <div className="left-h">
            <Header />
            {/* The best ad div */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile ? "160px" : "238px"}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>

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
                    <span>
                        <NumberCounter end={140} start={0} delay='1.6' preFix="+" /> 
                    </span>
                    <span>expert coaches</span>
                </div>

                <div>
                    <span>
                        <NumberCounter end={978} start={0} delay='1.6' preFix="+" /> 
                    </span>
                    <span>members joined</span>
                </div>

                <div>
                    <span>
                        <NumberCounter end={50} start={0} delay='1.6' preFix="+" /> 
                    </span>
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

            <motion.div 
            className="heart-rate"
            transition={transition}
            whileInView={{ right: '4rem' }}
            initial={{ right: "-1rem" }}
            >
                <img src={Heart} alt="Heart" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            {/* Hero images */}
            <img src={hero_image} alt="hero" className='hero-image'/>
            <motion.img
            initial={{ right: "11rem" }}
            transition={transition}
            whileInView={{ right: '20rem' }}
            src={hero_image_back} alt="hero back" className='hero-image-back'/>
            
            {/* Calories */}
            <motion.div 
            className="calories"
            transition={transition}
            whileInView={{ right: '28rem' }}
            initial={{ right: "37rem" }}
            >
                <img src={Calories} alt="calories" className='calories'/>
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  );
}

export default Hero