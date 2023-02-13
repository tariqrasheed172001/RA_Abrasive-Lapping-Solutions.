import React from "react";
import { useNavigate } from "react-router";
import "./mobile.css";



function Mobile({ isOpen, setOpen }) {
  const navigate = useNavigate();
  return (
    <div className="mobile" onClick={() => setOpen(!isOpen)}>
      <div className="mobile-options">
        <div className="mobile-option" onClick={()=>navigate("/")} >
          <a href="#home">
            {/* <AssuredWorkloadIcon className="option-icon" fontSize="large" /> */}
            Home
          </a>
        </div>
        <div className="mobile-option" onClick={()=>navigate("/")} >
          <a href="#about">
            {/* <EmojiEventsIcon className="option-icon" fontSize="large" /> */}
            About
          </a>
        </div>
        <div className="mobile-option" onClick={()=>navigate("/")} >
          <a href="#services">
            {/* <LaptopMacIcon className="option-icon" fontSize="large" /> */}
            Services
          </a>
        </div>
        <div className="mobile-option" onClick={()=>navigate("/")} >
          <a href="#product">
            {/* <BusinessCenterIcon className="option-icon" fontSize="large" /> */}
            Product
          </a>
        </div>
        <div className="mobile-option" onClick={()=>navigate("/")} >
          <a href="#team">
            Team
          </a>
        </div>
        <div className="mobile-option" onClick={()=>navigate("/")} >
          <a href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
