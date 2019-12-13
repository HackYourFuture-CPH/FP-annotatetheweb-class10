import React from "react";
import { storiesOf } from "@storybook/react";
import CheckBox from "./signupCheckBox";

storiesOf("Form components", module).add("check box", () => (
  <CheckBox
    onChange={value => console.log(value)}
    checkboxClass="check-box"
    linkClass="link-class"
    text1="Creating an account means youre okey with our "
    text2="Terms of Service, Privacy Policy "
    text3="and our default "
    text4="Notifications settings"
  />
));
