import React,{Component} from 'react';
import './FormPassword.css';

const FormPassword = (()=>{
    
return(
    <label>
        <div className='email-address'>Password</div>
        <input 
        type='password' 
        placeholder='enter password' 
        //onChange={this.handleChange}
        className='password-box'/>
        </label>
)
})

export default FormPassword;