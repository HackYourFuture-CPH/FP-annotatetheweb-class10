import React from 'react';
import './FormLoginRegister.css';

const FormLoginRegister = ({
  formLoginRegister,
  text,
  register,
  classRegister,
  linewrapper,
}) => {
  return (
    <div className={linewrapper}>
      <div className={formLoginRegister}>
        {text}{' '}
        <a href="#sone" className={classRegister}>
          {register}{' '}
        </a>
      </div>
    </div>
  );
};
export default FormLoginRegister;
