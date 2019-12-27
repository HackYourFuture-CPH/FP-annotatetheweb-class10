import React from 'react';

const DotButton = (props) => {
  return (
    <div className="btn-right">
      <button
        type="button"
        className="btn-right"
        onClick={props.onClickHandle}
        onBlur={props.onClickHandle}
      >
        {props.title}
      </button>
    </div>
  );
};

export default DotButton;
