import React from 'react'
import './myWork.css'
import './about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import informationData from './informationData'

function About (){
    AOS.init()
    
    const information = informationData.find(({ id }) => id =="Annika")
    
    const textStyle = {
        paddingTop: 100,
        textAlign: 'center',
        color: 'black'
    }
    return (
        <div style={textStyle} className="landing-page-my-work">
            <h1 data-aos="fade-down" data-aos-duration="600">ABOUT</h1>
            <div className="information-container">    
                <div className="text-description-short">
                    <div className="typewriter-text">
                        <h2>{information.typewriterText}</h2>
                    </div>
                    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="3000">{information.infoText}</p>
                </div>
                <div className="img" data-aos="fade-left" data-aos-duration="1500">
                    <img src="/img/apelsin.jpg"/>
                </div>
                <div className="infoLove">
                    <p data-aos="fade-left" data-aos-duration="100">{information.infoLove}</p>
                </div>
            </div>
        </div>  
    )    
}

export default About