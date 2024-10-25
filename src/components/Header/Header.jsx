import React from 'react'
import "./Header.scss"
import { IoIosSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import img from "../../assets/Logo.svg"

const NAVBAR__ITEMS = ["Home", "Brands", "Recent Products", "Contact", "About"]

const Header = () => {
    const navbarItems = NAVBAR__ITEMS.map((link, index) => (
        <li key={index} className="navbar__item">
                <a href="#" className="navbar__link">
                    <span>{link}</span>
                </a>
        </li>
    ))
  return (
    <header className='header'>
        <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <img src={img} alt="" />
                </div>
                <ul className="navbar__collection">
                    {navbarItems}
                </ul>
                <div className="navbar__icons">
                    <IoIosSearch />
                    <FaUserAlt/>
                    <PiShoppingCartSimpleFill/>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header