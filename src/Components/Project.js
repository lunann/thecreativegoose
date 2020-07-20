import React from 'react'
import projectsData from './projectsData'
import './fonts/projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Project({match}){
    AOS.init()
    
    const project = projectsData.find(({ id }) => id === match.params.projectId)
    const frontImage = project.images.find(({ id }) => id === "1")
    const Image02 = project.images.find(({ id }) => id === "2")
    const Image03 = project.images.find(({ id }) => id === "3")
    const Image04 = project.images.find(({ id }) => id === "4")
    const Image05 = project.images.find(({ id }) => id === "5")
    const Image06 = project.images.find(({ id }) => id === "6")
    
    return (
        <div className="project-page">
        <h1 data-aos="fade-right" data-aos-duration="2000">{project.title}</h1>
            <div className="project-page-landing">
                <div className="front-picture" data-aos="fade-right" data-aos-duration="2000">
                    <img src={frontImage.src} alt="front"/> 
                </div>
                <div className="project-info" data-aos="fade-left" data-aos-duration="1000">
                    <h3>{project.header}</h3>
                    <p>{project.description}</p>
                    <span id="scroll-text"><p>Scroll to know more &nbsp;&nbsp;&nbsp;></p></span>
                </div>
                <span>
                    <img src={Image02.src} className="img2" alt="image02"/> 
                </span>
                <span className="detail-info"><p>{project.detail}</p>
                    <span className="info03">
                        <h2>Colour palette</h2>
                        <img src={Image04.src} className="img3" alt="image03"/>
                    </span>
                </span>
                <span><img src={Image03.src} className="img2" alt="image04"/></span>
                <span><img src={Image05.src} className="img2" alt="image05"/></span>
                <span><img src={Image06.src} className="img2" id="last-picture" alt="image06"/></span>
            </div>
        </div>
    )    
}
export default Project

