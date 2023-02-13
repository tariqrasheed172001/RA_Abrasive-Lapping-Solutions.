import { Spin as Hamburger } from "hamburger-react";
import React, { useEffect, useState } from "react";
import "./navBar.css";
import Mobile from "./Mobile/Mobile";
import Web from "./Web/Web";
import logo from '../../assets/logos/logo.png'
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <header id="header" className="fixed-top full">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a onClick={() => navigate("/") } href="#hero">
            <img src={logo}></img>
          </a>
        </h1>

        <div className="menu">
          <div className="web-menu">
            <Web />
          </div>
          <div className="mobile-menu">
            <div onClick={() => setOpen(!isOpen)}>
              <div className="menu-icon">
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  size={32}
                  direction="right"
                  color="white"
                />
              </div>
            </div>

            {isOpen && <Mobile isOpen={isOpen} setOpen={setOpen} />}
          </div>
        </div>

        <div className="fadeBottom"></div>
      </div>
    </header>
  );
}

export default NavBar;
