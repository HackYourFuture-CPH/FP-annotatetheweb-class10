import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileSummary from "../ProfileSummary/ProfileSummary.component";

test("if span has correct text", () => {
  const title = "span text";
  const { getByText, FindByText } = render(<ProfileSummary title={title} />);
  expect(getByText(title)).toHaveTextContent(title);
});
