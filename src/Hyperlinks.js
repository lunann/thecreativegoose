import React from 'react'
import { Link } from 'react-router-dom'
import pdf from './annikalundberg.pdf'
import './hyperlinks.css'
import landingPageImg from './landingPageImg'

function Hyperlinks () {
    const spotify = landingPageImg.find(({ id }) => id == "2")
    const instagram = landingPageImg.find(({ id }) => id == "3")
    const linkedIn = landingPageImg.find(({ id }) => id == "4")
    
    const linkStyle = {
        color: '#3a3a3a',
        position:'fixed',
        zIndex: 1000,
        fontSize: 45,
        fontFamily: 'Londrina Outline',
        letterSpacing: 3,
        textDecoration: 'none',
        margin: 20,
        transition: '1s',        
    }
    return (
        <div className="hyperlinks">
            <Link className="hyperlinks-nav" id="up-left" style={linkStyle} to='/about'>
                about</Link>
            <Link className="hyperlinks-nav" id="up-right" style={linkStyle} to='/mywork'>my work</Link>
            <a className="hyperlinks-nav" id="down-left" style={linkStyle} href={pdf} target='_blank'>resume</a>
            <a className="hyperlinks-nav" id="down-right" style={linkStyle} href='mailto:info.thecreativegoose@gmail.com'>contact</a>
            
            <div className="external-links">
                <Link to="/" className="text-1"><p>the creative goose</p></Link>
                <a className="text-2" id="2" href={spotify.link} style={linkStyle} target='_blank'><img src={spotify.src}/></a>
                <a className="text-3" id="3" style={linkStyle} href={instagram.link} target='_blank'><img src={instagram.src}/></a>
                <a className="text-4" id="4" style={linkStyle} href={linkedIn.link} target='_blank'><img src={linkedIn.src}/></a>
            </div>
        </div>
    )
}
export default Hyperlinks