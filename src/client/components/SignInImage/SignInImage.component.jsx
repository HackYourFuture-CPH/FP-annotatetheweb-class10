import React from "react";
import './SignInImage.css';

const image = require('./loginImage.jpg'); 
console.log(image);


const Image = ({classImage, image}) => {
  return (
   <div>
      <img className={classImage} src={image}/>
  </div>
  );
};

export default Image;