import React from 'react';
import './signupTextFields.css';

const SignupTextFields = ({
  text,
  box,
  title,
  inputType,
  textHolder,
  inputClass,
  changeHandler,
}) => {
  return (
    <label className={text}>
      <div className={box}>{title}</div>
      <input
        type={inputType}
        placeholder={textHolder}
        onChange={changeHandler}
        className={inputClass}
      />
    </label>
  );
};
export default SignupTextFields;
