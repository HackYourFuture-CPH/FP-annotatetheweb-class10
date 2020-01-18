import React from 'react';
import './UrlInput.css';

const UrlInput = ({ placeholder, onEnter, isAuthenticated }) => {
  return (
    <input
      type="url"
      placeholder={placeholder}
      className="url-input"
      onKeyPress={(event) => {
        if (event.key === 'Enter' && typeof onEnter === 'function') {
          onEnter(event.target.value, isAuthenticated);
        }
      }}
    />
  );
};

export default UrlInput;
