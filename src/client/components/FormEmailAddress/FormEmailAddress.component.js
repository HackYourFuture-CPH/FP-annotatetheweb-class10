import React,{Component} from 'react';
import './FormEmailAddress.css'

const FormEmailAddress = (()=>{
    
return(
    <label className='email'>
        <div className='email-address'>Email Address</div>
        <input 
        type='email' 
        placeholder='enter email address' 
        //onChange={this.handleChange}
        className='emailAddres-box'/>
        </label>
)
})

export default FormEmailAddress ;