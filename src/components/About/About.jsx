import React from 'react'
import "./About.scss"
import { IoStar } from "react-icons/io5";
import img from "../../assets/about-1.png"
import img2 from "../../assets/about-2.png"

const About = () => {
  return (
    <section className='about'>
        <div className="container">
            <p class="subtitle">Here are our some of the best clients.</p>
             <p class="title">What People Say About Us</p>
             <div className="about__wrapper">
                <div className="about__card">
                    <img src={img} alt="" />
                    <div className="about__text">
                        <p className="about__name">Hamza Faizi</p>
                        <p className="about__desc">Don’t waste time, just order! This is the best website to
                        puschase smart watches.
                        </p>
                        <div className="stars">
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                        </div>
                    </div>
                </div>
                <div className="about__card">
                    <img src={img2} alt="" />
                    <div className="about__text">
                        <p className="about__name">Hafiz Huzaifa</p>
                        <p className="about__desc">I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.
                        </p>
                        <div className="stars">
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </section>
  )
}

export default About