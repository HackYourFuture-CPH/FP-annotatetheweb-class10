import React from "react";
import "./LoginPage.css";
import Header from '../Header/Header.Component';
import Image from '../LoginPageImage/LoginPageImage.component';


const LoginPage = ( {classHeader, classImage} )  =>{

  
  return (
    <div>
    <div className={classHeader}>
      <Header/>
     </div>
     <div className={classImage}>
     <Image />
   </div>  
   </div>
  
  )

}

export default LoginPage;