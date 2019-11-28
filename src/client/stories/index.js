import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import {BlogCard} from "../components/Container/CommentBox/blogCard.stories";
import {Input} from "../components/Input/Input.story";
import {DotButton} from "../components/DotButton/DotButton.story";
import {Anchor} from "../components/Container/DropDown/DropDown.story";
import {List} from "../components/List/List.story";
import { from } from "array-flatten";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello!</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
  
  

