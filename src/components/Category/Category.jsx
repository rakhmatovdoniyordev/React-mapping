import React from 'react'
import "./Category.scss"
import img1 from "../../assets/category-1.png"
import img2 from "../../assets/category-2.png"
import img3 from "../../assets/category-3.png"

const categoryItems = [
    {
        id: 1,
        title: "Apple",
        desc: "Apple is one of the most famous smart watches providing company.",
        image: img1
    },
    {
        id: 2,
        title: "Xiaomi",
        desc: "Xiaomi smart watches are produced by MI company.",
        image: img2
    },
    {
        id: 3,
        title: "FitBit",
        desc: "FitBit smart watches are best for there health and fitness features.",
        image: img3
    }
]

const Category = () => {
    const categoryContent = categoryItems?.map(element => (
        <div key={element.id} className="category__card">
              <img src={element.image} alt="" />
              <div className="category__text">
                <h3 className="category__title">{element.title}</h3>
                <p className="category__desc">
                  {element.desc}
                </p>
              </div>
        </div>
    ))
  return (
    <section className='category'>
        <div className="container">
            <div className="category__wrapper">
                {categoryContent}
            </div>
        </div>
    </section>
  )
}

export default Category