import React from 'react';
import Header from '../Header/Header.Component';
import NavBar from '../NavBar/NavBar.component';
import imageHomePage from '../../assets/images/imageHomePage.jpg';
import UrlInput from '../UrlInput/UrlInput.component';
import ToggleButton from '../ToggleButton/ToggleButton.component';
import Content from '../content/Content.component';
import Footer from '../Footer/Footer.component';
import hyf from '../../assets/images/hyf.png';
import codeart from '../../assets/images/codeart.png';
import { themeContent } from '../theme';
import './HomePage.css';
// test


function HomePage() {
  const hyfLogo = {
    src: hyf,
    alt: 'hyf logo',
  };
  
  const codeartLogo = {
    src: codeart,
    alt: 'code:art logo',
  };
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
      <div className='home-page-image'>
         <img alt="login" src={imageHomePage} className="home-page-image" />   
         <div className='urlToggleBtn-wrapper'>
          <div className='url-Input'>
           <UrlInput
           placeholder="Insert URL to annotate..."
           onEnter={() => {
        /* Do something */
           }}
          /> 
          </div>
         <div className='toggle-btn'>
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
      <div className='content-wrapper'>
         <Content
         title="About project"
         text="This tool will help you to annotate any webpage that you want, collaborate with others and share your comments."
         hyfLogo={hyfLogo}
         codeartLogo={codeartLogo}
         theme={themeContent}
         />
      </div> 
      <div className='footer-wrapper'>
      <Footer />
      </div>
  </div>
   );
}
export default HomePage;