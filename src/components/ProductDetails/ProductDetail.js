import React, { useEffect } from "react";
import "./productDetails.css";


import { useLocation, useNavigate } from "react-router";


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductDetail() {

  const navigate = useNavigate();
  const {state} = useLocation();

  useEffect(()=>{
    console.log(state)
  },[])

  const pictures = state.photos.images;
  return (
    <main id="main" className="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 data-aos="fade-right" data-aos-delay="100">Product Details</h2>
            <ol>
              <li>
                <a onClick={() => navigate("/")} style={{color:"black"}} data-aos="fade-right" data-aos-delay="200">Home</a>
              </li>
              <li style={{color:"#ffc451",fontWeight:"500"}} data-aos="fade-left" data-aos-delay="100">Product Details</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8" data-aos="zoom-out" data-aos-delay="200">                                 



                <Carousel useKeyboardArrows={true} autoFocus={true}  className="main" swipeable={true} showThumbs={false} autoPlay={true} dynamicHeight={true} interval={3000} stopOnHover={true} style={{cursor: "pointer"}} >
                
                    {pictures.map((picture)=>{
                      return (
                        <div>
                          <img src={picture.image} />
                        </div>
                      )
                    })}

                </Carousel>

              </div>
            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3 data-aos="fade-up" data-aos-delay="100" >Product information  <i class="bi bi-card-list"></i></h3>
                <ul>
                  <li data-aos="fade-up" data-aos-delay="200">
                    <strong>Category</strong>: {state?.information?.info?.Category}
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <strong>size</strong>: {state?.information?.info?.size}
                  </li>
                  <li data-aos="fade-up" data-aos-delay="400">
                    <strong>serrations</strong>: 	{state?.information?.info?.serration}
                  </li>
                  <li data-aos="fade-up" data-aos-delay="500">
                    <strong>Material</strong>: 	{state?.information?.info?.material}
                  </li>
                </ul>
              </div>
              <div className="portfolio-description" data-aos="fade-up" data-aos-delay="600">
                <h2>Product description</h2>
                <p>
                {/* Iron Lapping PlatesThe most commonly used plate. For general purpose stock removal and lapping operations.Copper Lapping Plates are Used to lap softer materials where fine lapping and polishing are the primary requirements.Copper SP2 Lapping PlatesCan be used for lapping or polishing hard and medium hardness materials.PR3 Lapping PlatesUsed to generate highly reflective surface finish. Ideal for pre-pad polishing for minimum roll off.XL Lapping PlatesReplacement for Lead/Tin plate, used for mirror polishing.XP Lapping PlatesGives improved flat polished surfaces on many materials. Flat mirror-like surfaces can be produced on many hard materials. */}
                {state.description.descrip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
