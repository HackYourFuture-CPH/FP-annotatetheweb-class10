import React from 'react';
import '../signup.css';



const SignupEmailAddress = ()=>{
    return(
        <label>
            <div className="signup-email"> Email Address</div>
            <input type="email"  className="signup-email-box"></input>
        </label>
    )
}
export default SignupEmailAddress;