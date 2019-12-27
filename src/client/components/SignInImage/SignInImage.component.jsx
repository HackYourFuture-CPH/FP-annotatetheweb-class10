import React from 'react';
import './SignInImage.css';



const Image = ({classImage, loginImage}) => {
  return (
   <div>
      <img className={classImage} src={loginImage}/>   
  </div>
  )
};

export default Image;