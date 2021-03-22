import img36 from '../asset/img/36.jpg';
import imgLivaLogo from '../asset/img/livaLogo.jpg';
import letterH from '../asset/img/H.jpg';
import letterD from '../asset/img/D.jpg';
import letterQ from '../asset/img/Q.jpg';
import letter9 from '../asset/img/9.jpg';
import palette36 from '../asset/img/36palette.jpg';

import imgLiva from '../asset/img/livafront.jpg';
import detail01 from '../asset/img/detail01.jpg';
import detail02 from '../asset/img/detail02.jpg';
import detail03 from '../asset/img/detail03.jpg';
import paletteLiva from '../asset/img/livaPalette.jpg';

import citypop from '../asset/img/citypop.jpg';
import citypopFront from '../asset/img/citypopFront.jpg';
import searchByCountry from '../asset/img/searchByCountry.jpg';
import cityPopPalette from '../asset/img/cityPopPalette.jpg';
import searchCountry from '../asset/img/searchCountry.jpg';
import topthree from '../asset/img/topthree.jpg';
import population from '../asset/img/population.jpg';

import plant from '../asset/img/front_plant.jpg';
import plant_front from '../asset/img/plant_1.jpg';
import plant_2 from '../asset/img/plant_2.jpg';
import plant_3 from '../asset/img/plant_palette.jpg';
import plant_4 from '../asset/img/plant_4.jpg';
import plant_5 from '../asset/img/plant_5.JPG';
import plant_6 from '../asset/img/plant_6.jpg';



const projectsData = [
    {
        id: "citypop",
        title: "CityPop",
        src: citypop,
        header: "Website / API ",
        website: "",
        description: "As a work test I got asked by my company to do a website that displayed the population in different cities. The information had to be showned dynamic when the user search for either a city or a country. I had to implement and control text input and fetch data from an API. The design was made by me from a given wireframe.",
        detail: "Even though the focus was on how well you managed to write the code I couldn't help myself then to also focus a lot on the design. Because the result was mostly focused on text and no images I wanted to keep the design simple but still with a pop of colour.",
        images: [
           {
               id: "1",
               src: citypopFront,
               title: "liva",
           },
           {
               id: "2",
               src: searchByCountry,
               title: "livaLogo",
           },
           {
               id: "3",
               src: searchCountry,
               title: "dLetter",
           },
           {
               id: "4",
               src: cityPopPalette,
               title: "cityPopPalette",
           },
           {
               id: "5",
               src: topthree,
               title: "Qletter",
           },
           {
               id: "6",
               src: population,
               title: "9letter",
           }  
        ]
    },
    {
        id: "36-days-of-type",
        title: "36 days of type",
        src: img36,
        header: "Graphic design",
        website: "",
        description: "36 days of type is a project to encourage designers to design letters and numbers from the latin alphabet. For 36 days you come up with a innovate design for a letter or number for that specific day and then showcase it on Instagram. I decided to participate as I wanted to develop as a designer and thought this was a fun way to do it. While doing the project I got a routine which helped me think more creative and innovative and I ended up doing all the 26 letters and 10 numbers.",
        detail: "I wanted to have a cohesive collection and therefore decided to use the same colours and style for each design. The design works a lot with overlayering and different forms. This resulted in these designs that are some of my favourites.",
        images: [
           {
               id: "1",
               src: img36,
               title: "36 days of type",
           },
           {
               id: "2",
               src: letterH,
               title: "hLetter",
           },
           {
               id: "3",
               src: letterD,
               title: "dLetter",
           },
           {
               id: "4",
               src: palette36,
               title: "36palette",
           },
           {
               id: "5",
               src: letterQ,
               title: "Qletter",
           },
           {
               id: "6",
               src: letter9,
               title: "9letter",
           }
            
        ]
    },
    {
        id: "plant-shop",
        title: "The online plant garden",
        src: plant,
        header: "UX-design / JQuery / HTML / CSS",
        website: "https://plantgarden.netlify.app",
        description: "In a web development course me and antoher student created an " + 
        "online shop. The requirements where that we needed to have products, a shopping cart " +  
        "where we could add our products, be able to change the quantity of every product in the " + 
        "shopping cart, have an item page and a slideshow. The result became an online shop for plants. " + 
        "We wanted to keep the design simple because we where learing a new langugage (JQuery) " + 
        "and wanted to focus on the implementation of functionality.",
        detail: "To make the plant stand out and be in focus we decided to cut out the flowers and add a " + 
        "colourful background behind them. This created a nice pop of colour while still having the plant in " + 
        "focus.",
        images: [
           {
               id: "1",
               src: plant_front,
               title: "plant-front",
           },
           {
               id: "2",
               src: plant_2,
               title: "plant-2",
           },
           {
               id: "3",
               src: plant_4,
               title: "plant-4",
           },
           {
               id: "4",
               src: plant_3,
               title: "plant-3",
           },
           {
               id: "5",
               src: plant_5,
               title: "plant-5",
           },
           {
               id: "6",
               src: plant_6,
               title: "plant-6",
           }
            
        ]
    },
    {
        id: "linköping-vegan-association",
        title: "Linköping Vegan Association",
        src: imgLivaLogo,
        header: "Website / UX / UI",
        website: "www.livaliu.se",
        description: "In the middle of June 2018 I was in charge of a marketing for a vegan association" + 
        " at Linköping University. The association had only been around for a few years and was in the process" + 
        " of a new website to reach out to more people. My goal was to make an easy design with all the basic " + 
        " functionality. This resulted in a five page website with the information needed to read more about the" + 
        " association and how to get involved.",
        detail: "I started with doing a skiss with the most necessary information. From that I then" + 
        " created a mock-up for what pages I needed and how the navigation should work.",
        images: [
           {
               id: "1",
               src: imgLiva,
               title: "liva",
           },
           {
               id: "2",
               src: imgLivaLogo,
               title: "livaLogo",
           },
           {
               id: "3",
               src: detail01,
               title: "dLetter",
           },
           {
               id: "4",
               src: paletteLiva,
               title: "livaPalette",
           },
           {
               id: "5",
               src: detail02,
               title: "Qletter",
           },
           {
               id: "6",
               src: detail03,
               title: "9letter",
           }  
        ]
    },
]
export default projectsData