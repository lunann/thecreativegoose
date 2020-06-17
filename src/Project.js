import React from 'react'

function Project(props){
    const projectStyle = {
        width: 270,
        backgroundColor: 'pink',
        height: 270,
        margin: 40,  
    }
    return (
        <div style={projectStyle}>
            <h3>title: {props.project.title}</h3>
        </div>
    )
}
export default Project