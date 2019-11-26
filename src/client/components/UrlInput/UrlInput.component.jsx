import React from 'react';
import './UrlInput.css';

const UrlInput = ({ placeholder, styles }) => {
    return (
        <input type="url" placeholder={placeholder} className={styles}
            onKeyPress={event => {
                if (event.key === 'Enter') {
                    console.log("Confirm");
                }
            }} />
    );
}

export default UrlInput;
