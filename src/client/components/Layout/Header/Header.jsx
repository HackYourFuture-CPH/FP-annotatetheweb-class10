import React from 'react'
import { Link } from '@reach/router'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">Annotate the web</div>
            <div className='navigation'>
                <div className="RegisterBtn">
                    <div className="RegisterText">Register</div>
                </div>
                <div className='btn-list'>
                    <p className='btn'>Annotate</p>
                    <p className='btn'>About</p>
                    <p className='btn'>Login</p>
                </div>
            </div>
        </div>
    )
}

export default Header
