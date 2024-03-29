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
            <div className="hyperlinks-top">
                <Link className="hyperlinks-nav" id="up-left" to='/'>home</Link>
                <Link className="hyperlinks-nav" id="up-right" to='/about'>about</Link>
            </div>
            <div className="hyperlinks-bottom">
                <a className="hyperlinks-nav" id="down-left" href='mailto:info@thecreativegoose.com'>contact</a>
                <Link className="hyperlinks-nav" id="down-right" to='/mywork'>work</Link>
            </div>
        <span id="external-links">    
        <a className="text-2" id="2" href={linkedIn.link} target='_blank' rel="noopener noreferrer"><img src={linkedIn.src} alt="linkedInLogo"/></a>
            <a className="text-3" id="3" href={instagram.link} target='_blank' rel="noopener noreferrer"><img src={instagram.src} alt="instagramLogo"/></a>
        <span id="small-device-home"></span>
        </span>
        </div>
    )
}
export default Hyperlinks