import React from 'react'
import projectsData from './projectsData'
import './fonts/projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Project({match}){
    AOS.init()
    
    const project = projectsData.find(({ id }) => id === match.params.projectId)
    const before = project.id - 1;
    const Image01 = project.images.find(({ id }) => id === "2")
    const Image02 = project.images.find(({ id }) => id === "3")
    const Image03 = project.images.find(({ id }) => id === "4")
    const Image04 = project.images.find(({ id }) => id === "5")
    const Image05 = project.images.find(({ id }) => id === "6")
    
    const website = project.website;

    return (
        <div className="project-page">
        <h1>{project.title}</h1>
            <div className="project-page-landing">                
                <div className="project-info">
                <h3>{project.header}</h3>
                    {website ? (
                        <a href={project.website} target="_blank" rel="noopener noreferrer">Visit live website</a>
                    ) : (
                        <a></a>
                    )
                    }
                    <p>{project.description1}<br></br></p>
                    <p>{project.description2}</p>
                </div>
                <div className="front-picture">
                    <img src={Image01.src} alt="front"/> 
                </div>
                <div className="info-quote">
                    <h2>{project.quote}</h2>
                </div>
                <span>
                    <img src={Image02.src} className="img2" alt="image02"/> 
                </span>
                <div className="info-detail">
                    <h3>{project.detailHeader}</h3>
                    <p>{project.detail1}<br></br></p>
                    <p>{project.detail2}</p>
                </div>
                {Image03.src ? (
                        <span><img src={Image03.src} className="img2" alt="image03"/></span>
                    ) : (
                        <span></span>
                    )
                }
                {Image04.src ? (
                        <span><img src={Image04.src} className="img2" alt="image04"/></span>
                    ) : (
                        <span></span>
                    )
                }
                {Image05.src ? (
                        <span><img src={Image05.src} className="img2" alt="image05"/></span>
                    ) : (
                        <span></span>
                    )
                }                 
            </div>
        </div>
    )    
}
export default Project

