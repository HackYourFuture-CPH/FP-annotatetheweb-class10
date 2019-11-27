import React from 'react';
import './UrlInput.css';

const UrlInput = ({ placeholder }) => {
    return (
        <input type="url" placeholder={placeholder} className="url-input"
            onKeyPress={event => {
                if (event.key === 'Enter') {
                    console.log("Confirm");
                }
            }} />
    );
}

export default UrlInput;
