import React from 'react';
import './UrlInput.css';

const UrlInput = ({ placeholder, onEnter }) => {
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
    />
  );
};

export default UrlInput;
