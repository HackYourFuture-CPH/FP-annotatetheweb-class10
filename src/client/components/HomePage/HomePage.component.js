import React from 'react';
import Header from '../Header/Header.Component';
import NavBar from '../NavBar/NavBar.component';
import imageHomePage from '../../assets/images/imageHomePage.jpg';
import UrlInput from '../UrlInput/UrlInput.component';
import './HomePage.css';


function HomePage() {
  return (
    <div className="main-wrapper-home-page">
      <div className="homeheader-wrapper">
        <Header title="Annotate the web" />
        <NavBar
         navElements={[
         { title: 'Annotate', id: 1 },
         { title: 'About', id: 2 },
         { title: 'Login', id: 3 },
         ]}
        href="#"
        />
      </div>
      <div className='image-wrapper'>
       <img alt="login" src={imageHomePage} className="home-page-image" />  
    </div>
    
    <div className='urlToggleBtn-wrapper'>
        <UrlInput
         placeholder="Insert URL to annotate..."
         onEnter={() => {
        /* Do something */
      }}/>
      </div>
      </div>

    
    
         
     
    
  );
}

export default HomePage;
