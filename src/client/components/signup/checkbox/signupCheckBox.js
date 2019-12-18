import React from "react";
import "./signupCheckBox.css";
const CheckBox = ({
  onChange,
  checkboxClass,
  linkClass,
  textNoLink,
  textTermsOfServices,
  textNotificationsSettings
}) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={event => {
          onChange(event.target.checked);
        }}
      />
      <div className={checkboxClass}>{textNoLink}</div>
      <a href="#" className={linkClass}>
        {textTermsOfServices}
      </a>
      <div className={checkboxClass}>{textNoLink}</div>
      <a href="#" className={linkClass}>
        {textNotificationsSettings}
      </a>
    </label>
  );
};
export default CheckBox;
