import React from "react";
import './SignInImage.css';



const Image = ({classImage, loginImage}) => {
  return (
   <div>
      <img className={classImage} src={loginImage} alt="login-image"/>  
  </div>
  )
};



export default Image;