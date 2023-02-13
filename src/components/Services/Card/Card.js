import React from 'react'
import { useNavigate } from 'react-router'
import './card.css'


function Card({title,detail,iconn,id,images}) {
  const navigate = useNavigate();
  return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={`${id}00`}>
              <div onClick={()=>navigate('/serviceDetail',{state:{
                data:{images},
                service:{title}
              }})} className="icon-box">
                <div className="icon"><i className={iconn}></i></div>
                <h4><a href='#main'>{title}</a></h4>
                <p>{detail}</p>
              </div>
          </div>
  )
}

export default Card