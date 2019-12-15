import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignupButotns from "./SignupButtons";
import SignupButtons from "./SignupButtons";
it("click on button- function onClick is called", () => {
  let title = [
    {title : "create Account"},
    {title: "signup with Google"}
  ];
  const handleClick = jest.fn();
    const { getByText } = render(<SignupButtons onClick={handleClick} title= {title} />);
    fireEvent.click(getByText(title));
    expect(handleClick).toHaveTextContent("1");
});
