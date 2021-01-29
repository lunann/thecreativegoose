import React from 'react'
import './fonts/about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import informationData from './informationData.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'

function About (){
    AOS.init({
        disable: function(){
            var maxWidth = 1200;
            return window.innerWidth < maxWidth;
        }
    });
    
    const aboutInformation = informationData.find(({ id }) => id === "Annika")

    return (
        <div className="aboutPage">
        <Container>
            <h2>{aboutInformation.typewriterText}</h2>
            <Row>
                <Col xs="6" className="row-1"> 
                    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="3000">{aboutInformation.infoText}</p> 
                </Col>
                <Col xs="6" className="row-1" id="image01" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="3000">
                    <img src={aboutInformation.src} alt="annikaImg"/>
                </Col>
                <Col xs="6" className="row-2" id="image02" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                    <img src={aboutInformation.srcImg} alt="graphicImg"/>
                </Col>
                <Col xs="6" className="row-2">
                    <h3  data-aos="fade-left" data-aos-duration="1500">{aboutInformation.header}</h3>
                    <p data-aos="fade-left" data-aos-duration="2000">{aboutInformation.infoLove}</p>
                </Col>
                </Row>
        </Container>
        <Container id="table-info">
            <h3 data-aos="fade-up" data-aos-duration="500">{aboutInformation.question}</h3>
            <Row data-aos="fade-up" data-aos-duration="1000">
                <Col xs="6" sm="4" className="row-3">
                    <h4>Ideas to reality</h4>
                    <p>Together with you I’ll turn your ideas in your head into visual designs so you can bring your buisness forward.</p>
                </Col>
                <Col xs="6" sm="4" className="row-3">
                    <h4>UX / UI</h4>
                    <p>Good user experience isn’t noticed, only when it’s not working. Let's stick with the working part.</p>
                </Col>
                <Col sm="4" className="row-3" id="border-right">
                    <h4>Healty relation</h4>
                    <p>I'm here to make your life easier and will through out the project solve your problems and help you in any way I can.</p>
                </Col>
            </Row>
            <h5 data-aos="fade-up" data-aos-duration="1000">Like what you read? Hit me up!</h5>
        </Container>
        </div>
                
              
    )    
}

export default About