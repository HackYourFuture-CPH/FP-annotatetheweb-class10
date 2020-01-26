import React from 'react';
import FacebookButton from './FacebookButton';
import EmailButton from './EmailButton';
import TwitterButton from './TwitterButton';
import LinkedButton from './LinkedInButton';

const MediaButtons = ({ url, title })=>{
  return(
    <div>
      <FacebookButton url={url} quote={title}/>
      <EmailButton url={url} quote={title}/>
      <TwitterButton url={url} quote={title}/>
      <LinkedButton url={url} quote={title}/>
    </div>
  )
}
    
export default MediaButtons;