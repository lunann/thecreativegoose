import React from 'react'
import './about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import informationData from './informationData'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'

function About (){
    AOS.init()
    
    const information = informationData.find(({ id }) => id =="Annika")
    
    const containerStyle = {
        marginTop: '150px',
    }
    const infoTextStyle = {
        fontSize: 17,
        fontFamily: 'Source Sans Pro',
        fontWeight: 200,
        marginLeft: '60px',
        textAlign: 'justify',
        marginTop: '30px',
    }
    const typewriterStyle = {
        fontSize: '70px',
    }
    return (
        <div>
        <Container className="aboutPage" style={containerStyle}>
            <h2 style={typewriterStyle}>{information.typewriterText}</h2>
            <Row>
                <Col xs="6"> 
                    <p style={infoTextStyle} data-aos="fade-right" data-aos-duration="1500" data-aos-delay="3000">{information.infoText}</p> 
                </Col>
                <Col xs="6" className="img" id="image01" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="3000">
                    <img src={"/img/"+information.src}/>
                </Col>
                <Col xs="6" className="row-2" id="image02" data-aos="fade-right" data-aos-duration="1500">
                    <img src="/img/graphic.png"/>
                </Col>
                <Col xs="6" className="row-2" id="infoLove" data-aos="fade-left">
                    <h3>{information.header}</h3>
                    <p style={infoTextStyle} data-aos="fade-left" data-aos-duration="2000">{information.infoLove}</p>
                </Col>
                </Row>
        </Container>
        <Container className="test-col">
            <h3 data-aos="fade-up" data-aos-duration="1000">{information.question}</h3>
            <Row className="row-test" data-aos="fade-up" data-aos-duration="1000">
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