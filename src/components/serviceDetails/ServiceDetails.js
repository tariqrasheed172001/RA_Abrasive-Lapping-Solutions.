import React, { useEffect, useState } from "react";
import "./serviceDetails.css";
import comingSoon from '../../assets/images/comingSoon.jpeg'
import Carousel from "react-bootstrap/Carousel";

import { useLocation, useNavigate } from "react-router";

function ServiceDetails() {
  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);

  const pictures = state.data.images;
  const title = state.service.title;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <main id="main" className="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 data-aos="fade-right" data-aos-delay="100">
              Service Details
            </h2>
            <ol>
              <li>
                <a
                  onClick={() => navigate("/")}
                  style={{ color: "black" }}
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Home
                </a>
              </li>
              <li
                style={{ color: "#ffc451", fontWeight: "500" }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Service Details
              </li>
              <li
                style={{ color: "#ffc451", fontWeight: "500" }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
               {title}
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg" data-aos="zoom-out" data-aos-delay="200">
              {/* <Carousel useKeyboardArrows={true} autoFocus={true}  className="main" swipeable={true} showThumbs={false} autoPlay={true} dynamicHeight={false} interval={3000} stopOnHover={true} style={{cursor: "pointer"}} >
                
                        
                    
                </Carousel> */}
              {pictures ? (
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  {pictures.map((picture) => {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={picture.image}
                          alt="First slide"
                          className="container-fluid"
                        />
                        <Carousel.Caption>
                          <p style={{ color: "#ffc451" }}>{picture.name}</p>
                          {/* <p>{picture.description}</p> */}
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              
              ) : (
                <div>
                  <img src={comingSoon} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetails;
