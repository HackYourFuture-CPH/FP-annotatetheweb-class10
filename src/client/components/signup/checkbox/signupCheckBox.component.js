import React from 'react';
import './signupCheckBox.css';

const CheckBox = ({
  onChange,
  checkboxClass,
  linkClass,
  textNoLinkFirst,
  textNoLinkLast,
  textTermsOfServices,
  textNotificationsSettings,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={(event) => {
          onChange(event.target.checked);
        }}
      />
      <div className={checkboxClass}>{textNoLinkFirst}</div>
      <a href="#some" className={linkClass}>
        {textTermsOfServices}
      </a>
      <div className={checkboxClass}>{textNoLinkLast}</div>
      <a href="#some" className={linkClass}>
        {textNotificationsSettings}
      </a>
    </label>
  );
};
export default CheckBox;
