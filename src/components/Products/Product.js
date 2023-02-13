import React, { useEffect } from 'react'
import PortCard from './prodCard/PortCard'
import './product.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Products } from '../../Data/Products'
import { useNavigate } from 'react-router'


function Product() {
  const data = Products;
  const navigate = useNavigate()
  
  return (
    <div>
        <section id="product" className="product">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
            <h2>Products</h2>
            <p>Check our Products</p>
            </div>

            <div className="row product-container" data-aos="fade-up" data-aos-delay="200">
              {
                  data.map((product)=>{
                    return (
                      <PortCard images={product.images} img={product.image} app={product.title} className="App" info={product.information} descrip={product.description} />
                    )
                  })
              }
            </div>

            

        </div>
        </section>
    </div>
  )
}

export default Product