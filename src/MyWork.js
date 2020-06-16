import React from 'react'
import Project from './Project'

import projectsData from './projectsData'

function MyWork () {

    const myProjects = projectsData.map(item => <Project key={item.id} project={item}/>)
    
    const textStyle = {
        textAlign: 'center',
        color:'black'
    }
    return (
        <div>
            <h1 style={textStyle}>My Work</h1>
            <div class="projects" style={textStyle}>
                {myProjects} 
            </div>
        </div>
    ) 
}

export default MyWork