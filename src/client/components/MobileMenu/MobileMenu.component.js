import React from 'react';
import Header from '../Header/Header.Component';
import imageHYF from '../../assets/images/hyf-logo2.png';
import imageCodeArt from '../../assets/images/codeart-logo2.png';
import './MobileMenu.css';

const MobileMenu = ({ onClick }) => {
  return (

    <div className='mobilemenu-menuwrap'>
      <input type='checkbox' className='mobilemenu-toggler' />
      <div className='mobilemenu-hamburgur'>
        <span/>
      </div>
      <div className='mobilemenu-menu'>
        <div>
          <div>
            <Header title='Annotate the web' />
            <ul>
              <li>
                <a href='/'>Annotate</a>
              </li>
              <li>
                <a href='http://codeart.dk/about/' target='_blank' rel="noopener noreferrer">About</a>
              </li>
              <li>
                <a href='/login'>Login</a>
              </li>
            </ul>
            <button type='button' className='mobilemenu-button' onClick={onClick}>
              Register
            </button>
            <div className='logos'>
              <img alt='HYF' src={imageHYF} />
              <img alt='CodeArt' src={imageCodeArt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
