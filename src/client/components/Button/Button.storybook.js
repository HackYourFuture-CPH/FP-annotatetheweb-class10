import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button.Component";

storiesOf("Button", module)
  .add("with text", () => <Button title={props.title} ></Button>);
  export default Button;