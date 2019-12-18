import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignupButotns from "./SignupButtons";
import SignupButtons from "./SignupButtons";
it("click on button- function onClick is called", () => {
  let title = "Create Account";
  const onClick = jest.fn();
    const { getByText } = render(<SignupButtons click={onClick} title= {title} />);
    fireEvent.click(getByText(title));
    expect(onClick).toHaveBeenCalledTimes(1);
});
