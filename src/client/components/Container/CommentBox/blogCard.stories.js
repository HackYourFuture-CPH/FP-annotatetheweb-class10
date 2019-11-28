import React from "react";
import { storiesOf } from "@storybook/react";
import BlogCard from "./blogCard";

storiesOf("BlogCard", module)
  .add("with text", () => <BlogCard name="blogCardLabel" title="make blog as cards"
    placeholder="add comment..." type="input"
  ></BlogCard>);

  export default BlogCard;