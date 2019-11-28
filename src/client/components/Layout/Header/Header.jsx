import React from 'react'
import { Link } from '@reach/router'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">Annotate the web</div>
            <div className='navigation'>
                <div className="RegisterBtn">
                    <div className="Rectangle11"></div>
                    <div className="RegisterText">Register</div>
                </div>
                 <div className='Navigate'> 
                    <div className='Anot'>Annotate</div>
                    <div className='line4'></div>
                    <div className='Abt'>About</div>
                    <div className='lgn'>Login</div>
                 </div>  
            </div>
        </div>
    )
}

export default Header
