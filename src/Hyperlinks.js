import React from 'react'
import { Link } from 'react-router-dom'

function Hyperlinks () {
    const linkStyle = {
        color: 'white'
    }
    
    return (
        <div class="hyperlinks">
            <Link id="up-left" style={linkStyle}to='/about'>
                about
            </Link>
            <Link id="up-right" style={linkStyle} to='/mywork'>my work</Link>
            <div id="down-left" style={linkStyle}>resume</div>
            <div id="down-right" style={linkStyle}>contact</div>
        </div>
    )
}
export default Hyperlinks