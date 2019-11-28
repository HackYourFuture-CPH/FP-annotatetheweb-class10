import React from "react";
import { storiesOf } from "@storybook/react";
import DotButton from "./DotButton.Component";

storiesOf("DotButton", module)
  .add("with text", () => <DotButton title="..."></DotButton>);

  export default DotButton;