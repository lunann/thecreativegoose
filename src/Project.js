import React from 'react'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import projectsData from './projectsData'
import './projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Project({match}){
    AOS.init()
    
    const project = projectsData.find(({ id }) => id == match.params.projectId)
    const frontImage = project.images.find(({ id }) => id == "1")
    const Image02 = project.images.find(({ id }) => id == "2")
    return (
        <div className="project-page">
        <h1 data-aos="fade-right" data-aos-duration="2000">{project.title}</h1>
            <div className="project-page-landing">
                <div className="front-picture" data-aos="fade-right" data-aos-duration="2000">
                    <img src={"/img/"+frontImage.src}/> 
                </div>
                <div className="project-info" data-aos="fade-left" data-aos-duration="1000">
                    <div>
                    <p>{project.description}</p>
                    </div>
                </div>
                <div>
                    <img src={"/img/"+Image02.src} className="img2"/> 
                </div>
                <div>
                    <img src={"/img/"+Image02.src} className="img2"/> 
                </div>
            </div>
        </div>
    )    
}
export default Project

//{project.images.map((sub) => (
//                    <img src={"/img/"+sub.src}/> 
//                ))}

