import React from 'react'
import { useNavigate } from 'react-router'
import './prodCard.css'
function ProdCard({img,app,appNo,info,descrip,images}) {
  const navigate = useNavigate();
  return (
    <div className="fit-content col-lg-4 col-md-6 product-item filter-app" data-aos="zoom-in" data-aos-delay="200">
        <div className="product-wrap">
            <img src={img} className="img-fluid" alt=""  />
            <div className="product-info">
                <h4>{appNo}</h4>
                <p>{app}</p>
                <div className="product-links">
                
                <a onClick={() => navigate("/productDetail",{state:{
                  information:{info},
                  description:{descrip},
                  photos:{images}
                }})}  title="More Details"  > <span style={{fontSize:"20px",marginBottom:"20px"}} >Details</span> <i style={{marginTop:"10px"}} className="bi bi-link"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProdCard