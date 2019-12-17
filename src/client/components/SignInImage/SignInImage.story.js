import React from "react";
import { storiesOf } from "@storybook/react";
import Image from "./SignInImage.component";


storiesOf("Image", module).add("Image", () => {
  return <Image classImage='image' image='loginImage.jpg'/>;
});