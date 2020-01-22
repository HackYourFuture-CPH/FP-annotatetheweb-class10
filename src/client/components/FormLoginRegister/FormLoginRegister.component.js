import React from 'react';
import './FormLoginRegister.css';

const FormLoginRegister = ({
  formLoginRegister,
  text,
  register,
  classRegister,
  linewrapper,
  href
}) => {
  return (
    <div className={linewrapper}>
      <div className={formLoginRegister}>
        {text}
        <a href={href} className={classRegister}>
          {register}
        </a>
      </div>
    </div>
  );
};
export default FormLoginRegister;