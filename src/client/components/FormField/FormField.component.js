import React from 'react';
import './FormField.css';

const FormField = ({
  text,
  box,
  title,
  inputType,
  textHolder,
  inputClass = { inputClass },
  changeHandler,
  name,
  onKeyDown
}) => {
  return (
    <label className={text}>
      <div className={box}>{title}</div>
      <input
        name={name}
        type={inputType}
        placeholder={textHolder}
        onChange={changeHandler}
        className={inputClass}
        onKeyDown={onKeyDown}

      />
    </label>
  );
};

export default FormField;
