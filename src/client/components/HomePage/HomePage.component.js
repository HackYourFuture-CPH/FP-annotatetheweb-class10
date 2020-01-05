import React from 'react';
import Header from '../Header/Header.Component';
import NavBar from '../NavBar/NavBar.component';
//import HomePageImage from '../HomePageImage/HomePageImage.component';
import imageHomePage from '../../assets/images/imageHomePage.jpg';
import UrlInput from '../UrlInput/UrlInput.component';
import ToggleButton from '../ToggleButton/ToggleButton.component';
import Content from '../content/Content.component';
import Footer from '../Footer/Footer.component';
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
        <div>
         <img alt="login" src={imageHomePage} className="home-page-image" />   
         <div className='urlToggleBtn-wrapper'>
         <UrlInput
         placeholder="Insert URL to annotate..."
         onEnter={() => {
        /* Do something */
      }}
    /> 
      <ToggleButton
      // eslint-disable-next-line no-console
      onChange={(val) => console.log(val)}
      activeText="Desktop"
      inactiveText="Mobile"
     /> 
         </div>
      </div>
      </div>
    </div>
 
      

    
    
         
     
    
  );
}

export default HomePage;