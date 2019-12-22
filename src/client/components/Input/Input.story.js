import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input.component";
import { from } from "array-flatten";

storiesOf("Input", module)
  .add("with text", () => <Input title="make blog as cards"
    placeholder="add comment..." type="input"
  ></Input>);

  export default Input;