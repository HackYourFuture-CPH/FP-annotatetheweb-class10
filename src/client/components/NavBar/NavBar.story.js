import React from "react";
import { storiesOf } from "@storybook/react";
import NavBar from "../NavBar/NavBar.component";

storiesOf("NavBar", module).add("with title ", () => (
  <NavBar
    title="Register"
    navElements={[
      { title: "Annotate", id: 1 },
      { title: "About", id: 2 },
      { title: "Login", id: 3 }
    ]}
  />
));
