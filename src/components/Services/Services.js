import React from 'react'
import Card from './Card/Card'
import './services.css'
import { services } from '../../Data/Services'

function Services() {
    const data = services;
  return (
    <div className='service'>
        <section id="services" className="services">
            <div className="container" data-aos="fade-right">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>Check our Services</p>
                </div>
                <div className="row">
                    {
                        data.map((service) => {
                            return (
                                <Card title={service.title} images={service.images} detail={service.detail} iconn={service.iconn} id={service.id} />
                            )
                        })
                    }
                </div>
               
            </div>
        </section>
    </div>
  )
}

export default Services