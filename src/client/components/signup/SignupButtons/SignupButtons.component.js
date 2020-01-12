import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-brands-svg-icons';
import './signupButtons.css';



const SignupButtons = ({
  title,
  text,
  logo,
  align,
  signupBtnTxt,
  signupButton,
  click,
}) => {

  const icon = logo && (<FontAwesomeIcon icon={logo} className={(text, align)} />);

  return (
    <button type="button" onClick={click} className={signupButton}>
      {icon}
      <h3 className={signupBtnTxt} icon={logo}>
        {title}
      </h3>
    </button>
  );
};
export default SignupButtons;
