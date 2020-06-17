import React from 'react'

function Project(props){
    const projectStyle = {
        width: 370,
        backgroundColor: 'pink',
        float: 'left',
        display: 'inline',
        height: 370,
        margin: 40,
        
    }
    return (
        <div class="project-info" style={projectStyle}>
            <h3>title: {props.project.title}</h3>
        </div>
    )
}
export default Project