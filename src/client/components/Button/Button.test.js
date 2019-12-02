import React from 'react';
import{ render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormButtons from "./Button.component";


it("click on button- function onClick is called" , () => {
       let title;
       const handleClick=jest.fn();
             if(title === 'Log In' || title === 'Log In With Google')
                {
                      const {  getByText } = render(<FormButtons onClick={handleClick} />);
                      fireEvent.click(getByText(title));
                      expect(handleClick).toHaveTextContent("1");
                }
    }
  );



 