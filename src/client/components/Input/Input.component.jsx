import React from 'react';
import MessageParagraph from '../MessageParagraph/MessageParagraph.component';
const Input = (props) => {
  return (
    <div className="input-box">
      <label htmlFor={props.name} className="blog-card-label">
        {props.title}
      </label>
      <MessageParagraph
        className="blog-card-control"
        message={props.message}
      />
    </div>
  );
};

export default Input;
