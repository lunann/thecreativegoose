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
                    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="3000">{aboutInformation.infoText1}
                        <br /><br />{aboutInformation.infoText2}
                    </p>
                </Col>
                <Col xs="6" className="row-1" id="image01" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="3000">
                    <img src={aboutInformation.src} alt="annikaImg"/>
                </Col>
                <Col xs="6" className="row-2" id="image02" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                    <img src={aboutInformation.srcImg} alt="graphicImg"/>
                </Col>
                <Col xs="6" className="row-2">
                    <h3  data-aos="fade-left" data-aos-duration="1500">{aboutInformation.header}</h3>
                    <p data-aos="fade-left" data-aos-duration="2000">
                        {aboutInformation.infoLove}
                        <br></br>
                        <br></br>
                        {aboutInformation.infoLove2}
                    </p>
                </Col>
                </Row>
        </Container>
        <Container id="table-info">
            <h3 data-aos="fade-up" data-aos-duration="500">{aboutInformation.question}</h3>
            <Row data-aos="fade-up" data-aos-duration="1000">
                <Col xs="6" sm="4" className="row-3">
                    <h4>Interview</h4>
                    <p>I will ask you question to get to know your buisness to understand what you do.</p>
                </Col>
                <Col xs="6" sm="4" className="row-3">
                    <h4>Website Design</h4>
                    <p>I create your website with continuous dialogue the whole time.</p>
                </Col>
                <Col sm="4" className="row-3" id="border-right">
                    <h4>Launch</h4>
                    <p>I will teach you how to make updates and changes and at last - we go live!</p>
                </Col>
            </Row>
            <h5 data-aos="fade-up" data-aos-duration="1000">I am avalible for freelance work. Get in touch by
            dropping an <a href='mailto:info@thecreativegoose.com'>email</a>.</h5>
        </Container>
        </div>       
    )    
}

export default About