
import React from 'react';
import { HeaderComponent } from './Components/HeaderComponent';
import { FooterComponent } from './Components/FooterComponent';
import './App.css';
import { MainComponent } from './Components/MainComponent';
import { MainSection } from './Components/MainSection';
import { MainSectionTwo } from './Components/MainSectionTwo';
import { MainSectionThree } from './Components/MainSectionThree';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent/>
      <MainSection/>
      <MainSectionTwo/>
      <MainSectionThree/>
      <FooterComponent />
    </div>
  );
}

export default App;
