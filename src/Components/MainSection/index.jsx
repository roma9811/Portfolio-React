import React from "react";
import "./Section.css";
import About_me from "../../Assets/Images/aboutme.png";
export const MainSection = () =>{
    return(
        <div className="MainSection">
            <div className="AboutContainer">
                 <div className="AboutPhoto">
                <img src={About_me} alt="" height={400} />
            </div>
            
            <div className="AboutText" id="about">
                <h2 >About me</h2>
                <p> <span>I live</span> in Germany where I am studying medicine. In addition to my studies, 
                I am passionate about programming and actively developing my skills in this field.
    	        My interest in both medicine and technology allows me to combine knowledge from these areas, which I believe can lead to innovative solutions in healthcare. 
                I have experience with various programming languages such as React, JavaScript.
                Working on programming projects helps me develop logical thinking and analytical skills, which are undoubtedly valuable in the medical field.
                I strive to constantly learn and expand my knowledge by attending courses, and participating in various seminars and hackathons.</p>
            </div>
            </div>
           
        </div>
    )
}