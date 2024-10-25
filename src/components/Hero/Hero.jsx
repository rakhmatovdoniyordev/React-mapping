import "./Hero.scss"
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import img from "../../assets/hero.png"

const Hero = () => {
  return (
    <section className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__text">
                    <h1 className="hero__title">Discover Most Suitable Watches</h1>
                    <p className="hero__desc">
                        Find the best, reliable, and cheap smart watches here. We focus
                        on product quality. Here you can find smart watches of almost
                        all brands. So why you are waiting? Just order now!
                    </p>
                    <div className="hero__search">
                        <IoIosSearch/>
                        <input type="text" placeholder="Find the best brands"/>
                        <button className="btn">Search</button>
                    </div>
                </div>
                <div className="hero__img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero