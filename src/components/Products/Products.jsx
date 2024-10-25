import React from 'react'
import "./Products.scss"
import { IoStar } from "react-icons/io5";
import img1 from "../../assets/products-1.png"
import img2 from "../../assets/products-2.png"
import img3 from "../../assets/products-3.png"
import img4 from "../../assets/products-4.png"
import img5 from "../../assets/products-5.png"
import img6 from "../../assets/products-6.png"

const PRODUCTS__ITEMS = [
    {
        id: 1,
        title: "Apple Smart I",
        delprice: 300.00,
        price: 255.00,
        image: img1
    },
    {
        id: 2,
        title: "Apple Smart II",
        delprice: 300.00,
        price: 255.00,
        image: img2
    },
    {
        id: 3,
        title: "Apple Smart III",
        delprice: 300.00,
        price: 255.00,
        image: img3
    },
    {
        id: 4,
        title: "Apple Smart IV",
        delprice: 450.00,
        price: 399.00,
        image: img4
    },
    {
        id: 5,
        title: "Samsung Watch Pro",
        delprice: 300.00,
        price: 255.00,
        image: img5
    },
    {
        id: 6,
        title: "Fitbit Max 1",
        price: 155.00,
        image: img6
    }
]

const Products = () => {
    const productContent = PRODUCTS__ITEMS.map(element => (
        <div key={element.id} className="products__card">
                    <div className="products__img">
                        <img src={element.image} alt="" />
                    </div>
                    <div className="products__text">
                        <p className="products__brand">{element.title}</p>
                        <div className="stars">
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                        </div>
                        <p className="products__price"><del>{element.delprice}</del> ${element.price}</p>
                    </div>
        </div>
    ))
  return (
    <section className='products'>
        <div className="container">
            <p className="subtitle">Find your favourite smart watch.</p>
            <p className="title">Our Latest Products</p>
            <div className="products__wrapper">
                {productContent}
            </div>
            <div className="product__btn">
                <button className="btn">View More</button>
            </div>
        </div>
    </section>
  )
}

export default Products