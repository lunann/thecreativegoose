import React from 'react'
import projectsData from './projectsData'
import './fonts/myWork.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyWork () {
    AOS.init()                
    
    return (
        <div className="myWorkPage">
            <h2 data-aos="fade-down" data-aos-duration="1000">Click on project to know more</h2>
            {projectsData.map(({ title, id, src }) => (
                <Link to={"/mywork/"+id} className="project-link" data-aos="fade-up" data-aos-duration="500"><img src={src} className="projectImg" alt="projectImg"/><p>{title}</p></Link>
            ))}
        </div>
    ) 
}

export default MyWork