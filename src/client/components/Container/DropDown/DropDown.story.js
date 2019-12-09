import React from "react";
import { storiesOf } from "@storybook/react";
import DropDown from "./DropDown.Component";

storiesOf("DropDown", module)
  .add("with text", () => <DropDown titleArray ={[{id:1,title:'...'},{id:2,title:'pin'},{id:3,title:'mark as done'},{id:4, title:'send to Trolle'}]}></DropDown>);

  export default DropDown;