import React from "react";
import "./web.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useNavigate } from "react-router";

function Web() {

  const navigate = useNavigate();
  return (
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li onClick={()=>navigate("/")} >
          <a className=" nav-link scrollto active" href="#hero">
            Home
          </a>
        </li>
        <li onClick={()=>navigate("/")} >
          <a className="  nav-link scrollto" href="#about">
            About
          </a>
        </li>
        <li onClick={()=>navigate("/")} >
          <a className=" nav-link scrollto" href="#services">
            Services
          </a>
        </li>
        <li onClick={()=>navigate("/")} >
          <a className=" nav-link scrollto " href="#product">
            Products
          </a>
        </li>
        <li onClick={()=>navigate("/")} >
          <a className=" nav-link scrollto" href="#team">
            Team
          </a>
        </li>
        <li onClick={()=>navigate("/")} >
          <a className=" nav-link scrollto" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Web;
