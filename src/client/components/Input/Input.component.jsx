import React from 'react';

const Input = (props) => {
  return (
    <div className="input-box">
      <label htmlFor={props.name} className="blog-card-label">
        {props.title}
      </label>
      <input
        className="blog-card-control"
        type={props.inputType}
        onKeyDown={props.handleInputChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
