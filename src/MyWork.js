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

    const textStyle = {
        paddingTop: 100,
        textAlign: 'center',
        color:'black',
    }
    const projectStyle = {
        display:'inline-block',
        width: 300,
        height: 300,
        margin: 20,
        textDecoration: 'none',
        color: 'black',
        marginTop: '30px',
    }
    const headerStyle = {
        fontSize: '70px',
        fontFamily: 'Forum',
        color: '#d99830',
    }
    const projectNameStyle = {
        fontFamily: 'Source Sans Pro',
        fontSize: '17px',
        marginTop: '10px',
    }
    return (
        <div style={textStyle} className="landing-page-my-work">
            <h2 style={headerStyle} data-aos="fade-down" data-aos-duration="1000">Click on the project to know more</h2>
            {projectsData.map(({ title, id, src }) => (
                <Link to={"/mywork/"+id}  style={projectStyle} className="project-link" data-aos="fade-up" data-aos-duration="500"><img src={"/img/"+src} className="projectImg"/><p style={projectNameStyle}>{title}</p></Link>
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