import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import './Main.css';
import HTML_Logo from "../../Assets/Images/html.png";
import CSS_Logo from "../../Assets/Images/css.png";
import JavaScript_Logo from "../../Assets/Images/javascript.png";
import React_Logo from "../../Assets/Images/react.png";
import TypeScript from "../../Assets/Images/typescript.png";



    const slides = [
        { key: 1, content: <div className="slide-content">
            <img src={HTML_Logo} alt="HTML" />
            <p>I use HTML to build well-structured, semantic web pages, ensuring accessibility and cross-browser compatibility.</p>
        </div> },
        { key: 2, content: <div className="slide-content">
            <img src={CSS_Logo} alt="CSS"  />
            <p>I use CSS to design visually appealing and responsive web layouts, 
                leveraging modern techniques like Flexbox, Grid, and custom properties to ensure a seamless user experience across devices.</p>
        </div> },
        { key: 3, content: <div className="slide-content">
            <img src={JavaScript_Logo} alt="JavaScript" />
            <p>I use JavaScript to create interactive and dynamic web applications, employing modern ES6+ features and libraries to enhance functionality and improve user experience.</p>
        </div> },
        { key: 4, content: <div className="slide-content">
            <img src={React_Logo} alt="React"/>
            <p>I develop and maintain dynamic web applications using React. My skills include building component-based UIs, 
                managing state with Redux, and optimizing performance with modern tools.</p>
        </div> },
        { key: 5, content: <div className="slide-content">
            <img src={TypeScript} alt="TypeScript" width={200} height={200}/>
            <p>I work with TypeScript to build robust and type-safe applications. My experience 
                includes defining and enforcing types, improving code reliability, and integrating TypeScript with modern frameworks and tools.</p>
        </div> },
    ];
    


export const MainComponent = () => {

    const [goToSlide] = useState(0);
    const [offsetRadius] = useState(2);
    const [showNavigation] = useState(true);
    const [animationConfig] = useState(config.gentle);

    return (
        <div className="Main">
             <div className='Skills'><h3>My Skills</h3></div>
            <div className='Carousel'> 
               
                <Carousel
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showNavigation}
                animationConfig={animationConfig}
            /></div>
           
        </div>
    );
};
