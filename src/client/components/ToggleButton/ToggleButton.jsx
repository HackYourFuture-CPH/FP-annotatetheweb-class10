import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ }) => {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider">Mobile</span>
            <span className="slider">Desktop</span>
        </label>
    );
}

export default ToggleButton;