import React from 'react'
import './mainContent.css'
import landingPageImg from './landingPageImg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function MainContent () {
    AOS.init()
    
    const image01 = landingPageImg.find(({ id }) => id == "1")
    
    return (
        <div class="main">
            <div className="textLanding">
                <h1 data-aos="fade-left" data-aos-duration="1000">I'm Annika.</h1>
                <h2 data-aos="fade-left" data-aos-duration="1000">A web designer located at <i>58.411557, 15.620607</i></h2>
            </div>
            <img className="test111" data-aos="fade-right" data-aos-duration="2500" src={"/img/"+image01.src}/>
            <div className="img">
                <img className="manImg" data-aos="fade-right" data-aos-duration="2500" src={"/img/"+image01.src}/>
                <div  className="borderImg" data-aos="fade-up" data-aos-duration="2000"></div>
            </div>
        </div>
    )
}
export default MainContent
//<img className="manImg" src={"/img/"+image01.src}/>
//<span className="text-span-1">
//                    Hej
//                </span>
//                <span className="text-span-2">
//                    , I'm 
//                </span>
//                <span className="text-span-1">
//                    Annika
//                </span>
//                <span className="text-span-2">
//                    .
//                </span></h1>