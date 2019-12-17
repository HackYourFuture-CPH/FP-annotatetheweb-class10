import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignupTextFields from "./signupTextFields";

it("signup form fields should change value when handle Change is called", () => {
  const handleChange = jest.fn();
  let props = {
    // [ {title:"Password"},{title:"Full Name"},{title:"Email Address"},{title:"Username"}],
    inputType: [
      { inputType: "email" },
      { inputType: "password" },
      { inputType: "text" }
    ],
    handleChange
  };

  {
    const { getByText } = render(
      <SignupTextFields onChange={handleChange} inputType={inputType} />
    );
    fireEvent.click(getByText(inputType));
    expect(handleChange).toHaveTextContent(inputType);
  }
});
