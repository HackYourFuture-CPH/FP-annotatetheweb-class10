import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fagoogle } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons';
import '../signup.css';

const SignupButtons =({title,signupBtn,text,logo,signupBtnTxt})=>{
    function googlebtn(){
        console.log("you pressed me!");
        // shoul add the onclick function here 
    }

    return (
                <button onclick= {googlebtn} className={signupBtn}>
                <FontAwesomeIcon icon={logo} className={text}/>
                <h3 className ={signupBtnTxt} icon={logo}>
                {title}
                </h3>
                </button>
                
    )
}
export default SignupButtons;