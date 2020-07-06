import React from 'react'

function Project(props){
    const projectStyle = {
        display:'inline',
        float:'left',
        width: 200,
        backgroundColor: 'pink',
        height: 200,
        margin: 20,
        textAlign: 'center',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
    }
    return (
        <div style={projectStyle}>
            <h3>title: {props.project.title}</h3>
            <a href={props.project.id}>{props.project.id}</a>
        </div>
    )
}
export default Project