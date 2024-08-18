import React from "react";
import "./Footer.css";
import Logo from "../../Assets/Images/logo2.png";
import LocationImg from "../../Assets/Images/location.png";
import NumberImg from "../../Assets/Images/contact.png";
import EmailImg from "../../Assets/Images/email.png";
import GermanyImg from "../../Assets/Images/germany.webp";
import GeorgiaImg from "../../Assets/Images/georgia.jpg";
import RussiaImg from "../../Assets/Images/russia.webp";
import EnglandImg from "../../Assets/Images/england.png";

export const FooterComponent = () => {
    return (
        <div className="Footer">
            <div className="FooterContainer">
                <div className="LogoFooter">
                    <img src={Logo} alt="Logo" height={150} />
                </div>
                <div className="AboutMeInfo">
                    <ul>
                        <li>
                            <div className="InfoItem">
                                <img src={LocationImg} alt="Location" height={30} />
                                <p>Bergstraße 60/2, 69469 Weinheim</p>
                            </div>
                        </li>
                        <li>
                            <div className="InfoItem">
                                <img src={NumberImg} alt="number" height={30} />
                                <p>+49 15217130294</p>
                            </div>
                        </li>
                        <li>
                            <div className="InfoItem">
                                <img src={EmailImg} alt="email" height={30} />
                                <p>makhsoianiroma@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="LanguageContainer">
                    <p>If you speak Georgian, German, English, or Russian, you can contact me.</p>
                    <div className="Countries">
                        <img src={GeorgiaImg} alt="georgia" height={30} />
                        <img src={GermanyImg} alt="germany" height={30} />
                        <img src={EnglandImg} alt="england" height={30} />
                        <img src={RussiaImg} alt="russia" height={30} />
                    </div>
                </div>
            </div>
            <div className="CopyRight">
                ©2024 All rights reserved
            </div>
        </div>
    );
};
