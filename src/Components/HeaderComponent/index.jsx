import React, { useState } from 'react';
import "./Header.css";
import Logo from "../../Assets/Images/logo.png";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import { Link as ScrollLink } from 'react-scroll';
import { stack as Menu } from 'react-burger-menu';

function Model(props) {
  const { scene } = useGLTF("/macbook1.gltf");

  useFrame(() => {
    scene.rotation.y += 0.01;
  });

  return <primitive object={scene} scale={0.01} {...props} />;
}

export const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className="HeaderContainer" id="home">
      <div className="Navigation">
        <div className="Burger">
          <Menu right isOpen={isMenuOpen} onStateChange={handleStateChange}>
            <a className="bm-item" href="#home" onClick={closeMenu}>Home</a>
            <a className="bm-item" href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a className="bm-item" href="#about" onClick={closeMenu}>About me</a>
            <a className="bm-item" href="#contact" onClick={closeMenu}>Contact Me</a>
          </Menu>
        </div>
        <div className="Logo">
          <img src={Logo} alt="Logo" height={70} width={130} />
        </div>
        <div className="UlList">
          <Button
            startIcon={<HomeIcon />}
            variant="text"
            sx={{ color: '#394F8B', fontWeight: 'bold' }}
            className="desktop-nav"
          >
            <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
          </Button>

          <Button
            startIcon={<WorkIcon />}
            variant="text"
            sx={{ color: '#394F8B', fontWeight: 'bold' }}
            className="desktop-nav"
          >
            <ScrollLink to="portfolio" smooth={true} duration={500}>Portfolio</ScrollLink>
          </Button>

          <Button
            startIcon={<PersonIcon />}
            variant="text"
            sx={{ color: '#394F8B', fontWeight: 'bold' }}
            className="desktop-nav"
          >
            <ScrollLink to="about" smooth={true} duration={500}>About me</ScrollLink>
          </Button>
        </div>
        <div className="Contact desktop-nav">
          <Button variant="outlined">
            <ScrollLink to="contact" smooth={true} duration={500}>Contact Me</ScrollLink>
          </Button>
        </div>
      </div>
      <div className="Header2">
        <div className="Programmier">
          <div className="TextAboutMe">
            <p>Hey, I am Roma</p>
            <p>
              <span>I'm a Frontend Developer </span> who builds visually engaging and user-friendly websites, turning ideas into interactive experiences.
              I specialize in creating responsive and accessible web interfaces that ensure a great user experience on any device. Using modern frameworks like React develop dynamic and efficient applications.
            </p>
          </div>
          <div className='TouchButton'>
            <Button variant="contained">Get In Touch</Button>
          </div>
        </div>
        <div className="ModelContainer">
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <PresentationControls speed={1.8} global zoom={1} polar={[-0.04, Math.PI / 4]}>
              <Stage environment="city">
                <Model scale={0.01} />
              </Stage>
            </PresentationControls>
          </Canvas>
        </div>
      </div>
    </div>
  );
};
