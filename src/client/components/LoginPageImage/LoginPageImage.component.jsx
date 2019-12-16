import React from "react";
import './LoginPageImage.css';

const image = require('./loginImage.jpg'); 
console.log(image);


const Image = ({classImage}) => {
  return (
   <div>
      <img className={classImage} src={image}/>
  </div>
  );
};

export default Image;