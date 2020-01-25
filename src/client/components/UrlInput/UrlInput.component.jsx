import React from 'react';
import './UrlInput.css';

const UrlInput = ({ placeholder, onEnter, onChange }) => {
  return (
    <input
      type="url"
      placeholder={placeholder}
      className="url-input"
      onKeyPress={(event) => {
        if (event.key === 'Enter' && typeof onEnter === 'function') {
          onEnter(event.target.value);
        }
      }}
      onChange={(value) => onChange(value)}
    />
  );
};

export default UrlInput;
