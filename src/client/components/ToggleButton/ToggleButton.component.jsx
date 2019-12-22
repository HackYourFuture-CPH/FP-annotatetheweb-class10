import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ onChange, activeText, inactiveText }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        defaultChecked={activeText}
        onChange={(event) => {
          onChange(event.target.checked);
        }}
      />
      <span className="slider">{activeText}</span>
      <span className="slider">{inactiveText}</span>
    </label>
  );
};

export default ToggleButton;
