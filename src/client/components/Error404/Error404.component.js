import React from 'react';
import './Error404.css';

const ErrorToHome = ({
  errorWrapper,
  errorMessage,
  errorMessage2,
  text1,
  text2,
  home,
  classLink,
  classError,
}) => {
  return (
    <div className={errorWrapper}>
      <div className={errorMessage}>
          {text1}{' '}
      </div>
      <div className={errorMessage2}>
          {text2}
      </div>
      <div className={classLink}> 
           <a href="#some" className={classError}>
            {home}
           </a>
     </div>
    </div>
  );
};
export default ErrorToHome;