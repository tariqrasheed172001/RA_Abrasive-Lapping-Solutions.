import React from 'react'
import './contact.css'
import Iframe from 'react-iframe'
import ContactFrom from './ContactForm/ContactFrom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div>
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
                </div>

                <div data-aos="flip-right" data-aos-delay="300">
                {/* <iframe style="border:0; width: 100%; height: 270px;" src="" frameborder="0" allowfullscreen></iframe> */}
                <Iframe 
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4751.433489001181!2d80.1606241241584!3d13.08926854752132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x60a32348c39bae32!2zMTPCsDA1JzE5LjYiTiA4MMKwMDknMzguMyJF!5e1!3m2!1sen!2sin!4v1673973805664!5m2!1sen!2sin"

                        width="100%"
                        id=""
                        height="100%"
                        frameBorder="0"
                        allowfullscreen
                        styles={{height: "270px",border:"0"}}/>
                </div>

                <div className="row mt-5">

                <div className="col-lg-4" data-aos="fade-up-right" data-aos-delay="400">
                    <div className="info">
                    <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>No. 242 vanagaram main road,Athipet(ambattur industrial),Chennai-600050</p>
                    </div>

                    <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>raabrasive7@gmail.com</p>
                    </div>

                    <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Call:</h4>
                        <p>+91 81224 43588</p>
                    </div>

                    </div>

                </div>

                <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-up-left" data-aos-delay="500">
                    <ContactFrom />
                </div>

                
                
                </div>

                

            </div>
     </section>
     
    </div>
  )
}

export default Contact