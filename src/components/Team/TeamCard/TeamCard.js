import React from 'react'
import './teamCard.css'

function TeamCard({img,id,facebook,twitter,instagram,linkedin,name,Position}) {
  return (
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={`${id}00`}>
              <div className="member-img">
                <img src={img} className="img-fluid" alt="" />
                <div className="social" >
                  {twitter && <a href={twitter}><i className="bi bi-twitter"></i></a>}
                  {facebook && <a href={facebook}><i className="bi bi-facebook"></i></a>}
                  {instagram && <a href={instagram}><i className="bi bi-instagram"></i></a>}
                  {linkedin && <a href={linkedin}><i className="bi bi-linkedin"></i></a>}
                </div>
              </div>
              <div className="member-info">
                <h4>{name}</h4>
                <span>{Position}</span>
              </div>
            </div>
    </div>
  )
}

export default TeamCard