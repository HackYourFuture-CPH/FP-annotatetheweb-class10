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
      />
    </label>
  );
};

export default FormField;
