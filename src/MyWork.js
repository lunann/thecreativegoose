import React from 'react'
import Project from './Project'

import projectsData from './projectsData'

import ScrollMenu from 'react-horizontal-scrolling-menu'

//import ItemsCarousel from 'react-items-carousel'

function MyWork () {
    const Arrow = ({ text, className }) => {
        return (
            <div className={className}>{text}</div>
        );
    };
    
    const myProjects = projectsData.map(item => <Project key={item.id} project={item}/>)
    
    const textStyle = {
        textAlign: 'center',
        color:'black',
    }
    return (
        <div style={textStyle}>
            <h1>My Work</h1>
            <div class="scrolling-container">
                <ScrollMenu
                    data={myProjects}
                />
                                        
            </div>
        </div>
    ) 
}

export default MyWork