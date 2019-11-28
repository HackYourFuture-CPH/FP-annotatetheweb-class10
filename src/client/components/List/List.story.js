import React from "react";
import { storiesOf } from "@storybook/react";
import List from "./List.Component";

storiesOf("List", module)
  .add("with text", () => <List title={"List"} ></List>);
  export default List;