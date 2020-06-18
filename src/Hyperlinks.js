import React from 'react'
import { Link } from 'react-router-dom'
import pdf from './annikalundberg.pdf'
import './hyperlinks.css'

function Hyperlinks () {
    const linkStyle = {
        color: 'black',
        position:'absolute',
        zIndex: 1000,
        fontSize: 45,
        fontFamily: 'Londrina Outline',
        letterSpacing: 3,
        textDecoration: 'none',
        margin: 20,
    }
    
    return (
        <div class="hyperlinks">
            <Link className="hyperlinks-nav" id="up-left" style={linkStyle} to='/about'>
                about
            </Link>
            <Link className="hyperlinks-nav" id="up-right" style={linkStyle} to='/mywork'>my work</Link>
            <a className="hyperlinks-nav" id="down-left" style={linkStyle} href={pdf} target='_blank'>resume</a>
            <a className="hyperlinks-nav" id="down-right" style={linkStyle} href='mailto:info.thecreativegoose@gmail.com'>contact</a>
        </div>
    )
}
export default Hyperlinks