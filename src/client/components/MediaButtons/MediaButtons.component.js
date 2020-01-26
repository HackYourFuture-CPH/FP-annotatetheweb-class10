import React from 'react';
import FacebookButton from './FacebookButton';
import EmailButton from './EmailButton'

const MediaButtons = ({ url, title })=>{
  return(
    <div>
      <FacebookButton url={url} quote={title}/>
      <EmailButton url={url} quote={title}/>
    </div>
  )
}
    
export default MediaButtons;