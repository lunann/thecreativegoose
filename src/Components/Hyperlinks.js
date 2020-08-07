import React from 'react'
import { Link } from 'react-router-dom'
import pdf from './annikalundberg.pdf'
import './fonts/hyperlinks.css'
import landingPageImg from './landingPageImg'

function Hyperlinks () {
    const spotify = landingPageImg.find(({ id }) => id === "2")
    const instagram = landingPageImg.find(({ id }) => id === "3")
    const linkedIn = landingPageImg.find(({ id }) => id === "4")
    
    return (
        <div className="hyperlinks">
            <Link className="hyperlinks-nav" id="up-left" to='/about'>
                about</Link>
            <Link className="hyperlinks-nav" id="up-right" to='/mywork'>my work</Link>
            <a className="hyperlinks-nav" id="down-left" href={pdf} target='_blank' rel="noopener noreferrer">resume</a>
            <a className="hyperlinks-nav" id="down-right" href='mailto:info@thecreativegoose.com'>contact</a>
        <span id="external-links">    
            <Link to="/" className="text-1"><p>the creative goose</p></Link>
            <a className="text-2" id="2" href={spotify.link} target='_blank' rel="noopener noreferrer"><img src={spotify.src} alt="spotifyLogo"/></a>
            <a className="text-3" id="3" href={instagram.link} target='_blank' rel="noopener noreferrer"><img src={instagram.src} alt="instagramLogo"/></a>
            <a className="text-4" id="4" href={linkedIn.link} target='_blank' rel="noopener noreferrer"><img src={linkedIn.src} alt="linkedInLogo"/></a>
        <span id="small-device-home">
            <Link to="/" className="text-5"><p>home</p></Link>
        </span>
        </span>
        </div>
    )
}
export default Hyperlinks