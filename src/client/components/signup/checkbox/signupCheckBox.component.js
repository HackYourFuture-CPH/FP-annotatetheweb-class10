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
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          onChange={event => {
            onChange(event.target.checked);
          }}
        />
        <div className={checkboxClass}>{textNoLinkFirst}</div>
        <a href="#" className={linkClass}>
          {textTermsOfServices}
        </a>
        <div className={checkboxClass}>{textNoLinkLast}</div>
        <a href="#" className={linkClass}>
          {textNotificationsSettings}
        </a>
      </label>
    </div>
  );
};
export default CheckBox;
