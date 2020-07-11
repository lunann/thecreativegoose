import React from 'react'
import Project from './Project'
import projectsData from './projectsData'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import './myWork.css'
import {BrowserRouter as Router, Switch, Route, Redirect, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyWork () {
    AOS.init()
    const Arrow = ({ text, className }) => {
        return (
            <div className={className}>{text}</div>
        );
    };
    
    //const myProjects = projectsData.map(item => <Project key={item.id} project={item}/>)                             

    const textStyle = {
        paddingTop: 100,
        textAlign: 'center',
        color:'black',
    }
    const projectStyle = {
        display:'inline-block',
        width: 370,
        height: 300,
        margin: 20,
        transition: '1s',
        textDecoration: 'none',
        color: 'black',
        backgroundColor: 'pink',
        position: 'relative',
    }
    return (
        <div style={textStyle} className="landing-page-my-work">
            <h1 data-aos="fade-down" data-aos-duration="600">My Work</h1>
            <h2 data-aos="fade-down" data-aos-duration="600">Blablablablablablablablablabl</h2>
            {projectsData.map(({ title, id, src }) => (
                <Link to={"/mywork/"+id}  style={projectStyle} className="project-link" data-aos="fade-up" data-aos-duration="200"><img src={"/img/"+src} className="projectImg"/>{title}</Link>
            ))}
            
        </div>
    ) 
}

export default MyWork
//<h1>My Work</h1>
//            <h2>Blablablablablablablablablabl</h2>
//            <ul>
//                {projectsData.map(({ title, id }) => (
//                <li key={id}>
//                    <Link to={id}>{id}</Link>
//                </li>
//                ))}
//            </ul>
//            <Route path="/test" component={Project}/>
//             <div id="projects">
//                {myProjects}
//            </div>