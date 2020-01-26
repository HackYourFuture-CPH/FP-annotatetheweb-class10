import React from 'react';
import FacebookButton from './FacebookButton';
import EmailButton from './EmailButton';
import TwitterButton from './TwitterButton';
import LinkedButton from './LinkedInButton';
import './MediaButton.css';

const MediaButtons = ({ url, title })=>{
  return(
    <div>
    <div className= "title-media">Share via</div>
    <div className = "media-wrapper">
      <FacebookButton url={url} quote={title}/>
      <EmailButton url={url} quote={title}/>
      <TwitterButton url={url} quote={title}/>
      <LinkedButton url={url} quote={title}/>
    </div>
    </div>
  )
}
    
export default MediaButtons;