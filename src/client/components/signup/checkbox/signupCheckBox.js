import React from "react";
import "./signupCheckBox.css";
const CheckBox = ({
  onChange,
  checkboxClass,
  linkClass,
  text1,
  text2,
  text3,
  text4
}) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={event => {
          onChange(event.target.checked);
        }}
      />
      <div className={checkboxClass}>{text1}</div>
      <a href="#" className={linkClass}>
        {text2}
      </a>
      <div className={checkboxClass}>{text3}</div>
      <a href="#" className={linkClass}>
        {text4}
      </a>
    </label>
  );
};
export default CheckBox;
