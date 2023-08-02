import React from 'react'

import heroImg from '../../assets/images/phone.png';
import earth from '../../assets/images/earth.png';
//style
import '../Home/home.scss';
const Hero = () => {
  return (
    <section className='hero'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__wrapper--left">
                    <h1> From clothing and electronics to groceries and healthcare.</h1>
                    <p>Perhaps the most significant advantage of online shopping is its unparalleled convenience. Gone are the days of navigating crowded malls and standing in long checkout lines..</p>
                </div>
                <div className="hero__wrapper--right">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
        <img className='earth' src={earth} alt="" />
    </section>
  )
}

export default Hero