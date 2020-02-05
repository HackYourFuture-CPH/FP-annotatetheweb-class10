import React from 'react';

const Input = (props) => {
  return (
    <div className="input-box">
      <label htmlFor={props.title} className="blog-card-label">
        {props.title}
      </label>
      <label htmlFor={props.description} className="blog-card-description">
        {props.description}
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
