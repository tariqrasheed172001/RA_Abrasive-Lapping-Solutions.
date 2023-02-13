import React, { useState } from 'react'
import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import about from "../../assets/images/about.jpg"

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,Mousewheel } from "swiper";
import { Clients } from '../../Data/Clients';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function About() {

  const data = Clients;  

  return (
    <div>
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                    <img src={about} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                    <h3>We are RA Abrasive Lapping solutions.</h3>
                    <ul>
                    <li><i className="bi bi-check2-all"></i>A company focusing on all your precision finishing needs.</li>
                    <li><i className="bi bi-check2-all"></i> Almost 15 years of on-hand experience in super finishing areas.</li>
                    <li><i className="bi bi-check2-all"></i> Areas like single side lapping, double side lapping, ID/OD lapping, Polishing, etc.</li>
                    </ul>
                    <p>
                    We provide different types of products and services like consumables, spares, machines, training, and maintenance for your lapping and Polishing applications.
                    </p>
                </div>
                </div>

            </div>
        </section>

        <section id="clients" className="clients">
            <div className="container" data-aos="zoom-in">
                <div className="section-title" >
                <h2>Clients</h2>
                <p>Check our Clients</p>
                </div>

                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    scrollbar={{ draggable: true }}
                    modules={[Pagination,Mousewheel]}
                    className="mySwiper"
                >
                    {
                        data.map((client)=>{
                            return (
                                <SwiperSlide onClick={() => window.open(client.link)} ><img src={client.image} className="img-fluid" alt=""  /></SwiperSlide>                   
                            )
                        })
                    }

                </Swiper>
            </div>
        </section>
    </div>
  )
}

export default About