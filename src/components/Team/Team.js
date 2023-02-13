import React from 'react'
import './team.css'
import TeamCard from './TeamCard/TeamCard'

import t1 from '../../assets/team/team-1.jpg'
import t2 from '../../assets/team/team-2.jpg'
import t3 from '../../assets/team/team-3.jpg'
import t4 from '../../assets/team/team-4.jpg'

function Team() {
  return (
    <div>
        <section id="team" className="team">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Team</h2>
                    <p>Check our Team</p>
                </div>

                <div className="row">

                    <TeamCard img={t1} name={"Gangatharan Rajesh."} Position={"Founder,Team leader"} linkedin="https://www.linkedin.com/in/ra-abrasive-lapping-solutions-4862b8263/" facebook="https://www.facebook.com/gangatharan.rajesh" instagram="https://www.instagram.com/gangatharan5870" id='1' />
                    <TeamCard img={t2} name={"Kodhandan."} Position={"Team Member"} id='2' />
                    <TeamCard img={t3} name={"Laksman."} Position={"Team Member"} id='3' />
                    <TeamCard img={t4} name={"Subramanian."} Position={"Team Member"} id='4' />

                </div>

            </div>
        </section>
    </div>
  )
}

export default Team