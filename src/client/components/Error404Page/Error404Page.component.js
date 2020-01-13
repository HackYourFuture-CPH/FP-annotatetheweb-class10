import React from 'react';
import './Error404Page.css';
import leftImage from '../../assets/images/left-background.jpg';
import rightImage from '../../assets/images/right-background.jpg';
import errorImage from '../../assets/images/404Panda.jpg';
import Header from '../Header/Header.Component';
import ErrorToHome from '../Error404/Error404.component';
import Footer from '../Footer/Footer.component';




// eslint-disable-next-line no-unused-vars
function Error404Page() {
    return (
      <div className="main-wrapper-login-page">
        <div className="header-wrapper">
          <Header title="Annotate the web" />
        </div>
        <div className="body-wrapper">
          <div className="image-wrapper">
            <img alt="errorLeftImage" src={leftImage} className="left-image" />
            <img alt="errorCenterImage" src={errorImage} className="center-image"/>
            <img alt="errorRightImage" src={rightImage} className="right-image"/>
          </div>
          <div>
          <ErrorToHome
          errorWrapper='error-wrapper'
          errorMessage="error-text1"
          errorMessage2="error-text2"
          text1="Look Like You're Lost?"
          text2="the page you are looking for not available "
          home="Go to Home"
          classLink="link-wrapper"
          classError="error-link"
          />
          </div>
          </div>
          
          <Footer/>

      </div>
    );
  }
  
  export default Error404Page;