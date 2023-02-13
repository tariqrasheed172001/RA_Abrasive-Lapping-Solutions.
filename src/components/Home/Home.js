import React from 'react'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logos/logo.png'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    // once: true,
    mirror: false
  });
});

function Home() {
  return (
    <div>
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" >

            <div className="row justify-content-center" >
                <div className="home-logo" >
                  <img style={{maringBottom:"2rem"}} data-aos="zoom-in" data-aos-delay="600" src={logo}  ></img>
                </div>
                <div className="col-xl-6 col-lg-8" >
                <h1 data-aos="fade-up" data-aos-delay="500" >RA Abrasive Lapping Solutions<span>.</span></h1>
                <h2 data-aos="fade-up" data-aos-delay="500" >We have a strong team to solve all your finishing needs.</h2>
                </div>
                
            </div>

            </div>
        </section>
    </div>
  )
}

export default Home