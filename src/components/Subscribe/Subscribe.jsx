import React from 'react'
import "./Subscribe.scss"
import img from "../../assets/subscribe.png"

const Subscribe = () => {
  return (
    <section className="subscribe">
        <div className="container">
            <div className="subscribe__wrapper">
                <div className="subscribe__text">
                    <p className="subscribe__title">Subscribe To Newsletter</p>
                    <p className="subscribe__desc">Get free guide about smart watches daily.</p>
                    <div className="subscribe__inp">
                        <input type="email" placeholder='Enter Email Address'/>
                        <button className='btn'>Subscribe</button>
                    </div>
                </div>
                <div className="subscribe__img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe