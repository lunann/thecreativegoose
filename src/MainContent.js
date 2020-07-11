import React from 'react'
import './mainContent.css'
import landingPageImg from './landingPageImg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MainContent () {
    AOS.init()
    
    const image01 = landingPageImg.find(({ id }) => id == "1")
    
    return (
        <div class="main">
            <div className="textLanding">
                <h1>Hej, I'm Annika.</h1>
                <h2>the creative goose</h2>
            </div>
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