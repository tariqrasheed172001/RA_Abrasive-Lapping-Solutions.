import React from 'react'
import './footer.css'
import logo from '../../assets/logos/logo.png'
import { useNavigate } from 'react-router'

function Footer() {

  const navigate = useNavigate();

  return (
    <div>
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <h3 onClick={()=> navigate("/")} data-aos="zoom-in" data-aos-delay="100" className='logo-image'><a href="#hero" ><img src={logo}></img></a></h3>
                            <p data-aos="fade-right" data-aos-delay="200">
                                No. 242 vanagaram main road <br></br>
                                Athipet(ambattur industrial),Chennai-600050 <br></br>
                                <br></br>
                                <strong>Phone:</strong> +91 81224 43588<br></br>
                                <strong>Email:</strong> raabrasive7@gmail.com<br></br>
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" data-aos="fade-left" data-aos-delay="100" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="https://www.facebook.com/gangatharan.rajesh" data-aos="fade-down" data-aos-delay="200" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/gangatharan5870" data-aos="fade-up" data-aos-delay="300" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/ra-abrasive-lapping-solutions-4862b8263/" data-aos="fade-right" data-aos-delay="400" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4 data-aos="zoom-in" data-aos-delay="100">Useful Links</h4>
                        <ul>
                        <li data-aos="fade-right" data-aos-delay="100" ><i className="bi bi-chevron-right"></i> <a href="#hero">Home</a></li>
                        <li data-aos="fade-right" data-aos-delay="200" ><i className="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
                        <li data-aos="fade-right" data-aos-delay="300" ><i className="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
                        <li data-aos="fade-right" data-aos-delay="400" ><i className="bi bi-chevron-right"></i> <a href="#services">Terms of service</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-links">
                        <h4 data-aos="zoom-out" data-aos-delay="100" >Our Services</h4>
                        <ul>
                        <li data-aos="fade-right" data-aos-delay="100" ><i className="bi bi-chevron-right"></i> <a href="#services">Lapping plates</a></li>
                        <li data-aos="fade-right" data-aos-delay="300" ><i className="bi bi-chevron-right"></i> <a href="#services">Work Holding carriers</a></li>
                        <li data-aos="fade-right" data-aos-delay="400" ><i className="bi bi-chevron-right"></i> <a href="#services">Machines</a></li>
                        <li data-aos="fade-right" data-aos-delay="500" ><i className="bi bi-chevron-right"></i> <a href="#services">Lapping vehicles</a></li>
                        </ul>
                    </div>

                    </div>
                </div>
            </div>

            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <div className="copyright">
                    &copy; Copyright <strong><span>RA</span></strong>. All Rights Reserved
                </div>
                <div className="credits" >
                    Designed by <a onClick={() => window.open("https://portfolio-d7646.web.app/")}>@Tariq-Rasheed</a>
                </div>
            </div>
            <br></br>
        </footer>
    </div>
  )
}

export default Footer