import React from 'react'
import { Link } from 'react-router-dom'
import pdf from './annikalundberg.pdf'

function Hyperlinks () {
    const linkStyle = {
        color: 'white'
    }
    
    return (
        <div class="hyperlinks">
            <Link id="up-left" style={linkStyle} to='/about'>
                about
            </Link>
            <Link id="up-right" style={linkStyle} to='/mywork'>my work</Link>
            <a id="down-left" style={linkStyle} href={pdf} target='_blank'>resume</a>
            <a id="down-right" style={linkStyle} href='mailto:info.thecreativegoose@gmail.com'>contact</a>
        </div>
    )
}
export default Hyperlinks