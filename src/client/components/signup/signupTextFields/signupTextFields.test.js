import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignupTextFields from "./signupTextFields";

it("signup form fields should take correct values", () => {
  let title;
  const handleChange = jest.fn();
  if (
    title === "Email Address" ||
    title === "Password" ||
    title === "Full Name" ||
    title === "Username"
  ) {
    const { getByText } = render(<SignupTextFields onChange={handleChange} />);
    fireEvent.click(getByText(title));
    expect(handleChange).toHaveTextContent("1");
  }
});
