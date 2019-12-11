import React from "react";
import { storiesOf } from "@storybook/react";
import DropDown from "./DropDown.component";

storiesOf("DropDown", module)
  .add("with text", () => <DropDown titleArray ={['...','pin','mark as done','send to Trolle' ]}></DropDown>);

  export default DropDown;