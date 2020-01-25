import React, { Component } from 'react';
import './ErrorPage.css';
import Header from '../Header/Header.Component';
import errorImage from '../../assets/images/ErrorImage.jpg';
import HomePageError from '../ErrorComponent/Error.component';
import HomePage from '../Home/HomePage';

const ErrorPage = () =>{
  return (
    <div>
      <div className="header-wrapper">
        <Header title="Code:art" />
      </div>
      <div className="error-text-wrapper">
        <HomePageError />
      </div>
      <div className="wrapper-image">
        <img
          src={errorImage}
          alt="desk light and teapot"
          className="error-image-wrapper"
        />
        <h1 className="error-404-wrapper">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
      </div>
      <div className="paragraph-wrapper">
        <p className="notFoundDesc">
          It looks like nothing was found at this location
          <br />
          Maybe try{' '}
          <a href={HomePage} className="classLink">
            <emp>Home Page</emp>
          </a> {' '}
          to go to the main page
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;