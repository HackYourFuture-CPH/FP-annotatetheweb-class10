import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import { ToggleButton } from "../components/ToggleButton/ToggleButton.story";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello!</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
