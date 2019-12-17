import React from 'react';
import './FormLoginRegister.css';

const FormLoginRegister = ({formLoginRegister, text, register, classRegister}) => { 

    return(

          <div className={formLoginRegister}>
              {text}
              <a href='' className={classRegister}>{register}
              </a>
         </div>
    )
    };
export default FormLoginRegister;