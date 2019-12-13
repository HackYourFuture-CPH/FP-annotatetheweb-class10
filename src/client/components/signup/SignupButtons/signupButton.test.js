import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignupButotns from "./SignupButtons";
import SignupButtons from "./SignupButtons";

it("click on button- function onClick is called", () => {
  let title;
  const handleClick = jest.fn();
  if (title === "Create Account" || title === "signup with Google") {
    const { getByText } = render(<SignupButtons onClick={handleClick} />);
    fireEvent.click(getByText(title));
    expect(handleClick).toHaveTextContent("1");
  }
});
