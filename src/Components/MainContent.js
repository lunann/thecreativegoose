import React from 'react';
import './fonts/mainContent.css';
import landingPageImg from './landingPageImg.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MainContent () {
    AOS.init()
    
    const image01 = landingPageImg.find(({ id }) => id === "1")
    
    return (
        <div class="homePage">            
            <div>  
                <h1 data-aos="fade-left" data-aos-duration="1000">I'm Annika.</h1>
                <h2 data-aos="fade-left" data-aos-duration="1000">A vegan web developer located at <i>58.411557, 15.620607</i></h2>
            </div>
            <img className="Image01" data-aos="fade-right" data-aos-duration="2500" src={image01.src} alt="annikaCake"/>
            
        </div>
    )
}
export default MainContent