import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Content from "./Content.component";
import { themeContent } from "../theme";

test("if content has a correct title and text", () => {
  const title = Math.random()
    .toString(36)
    .substring(7);
  const text = Math.random()
    .toString(36)
    .substring(20);

  const { getByText } = render(
    <Content title={title} text={text} theme={themeContent} />
  );
  expect(getByText(title, text)).toHaveTextContent(title, text);
});
