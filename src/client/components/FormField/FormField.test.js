import React from 'react';
import{ render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormField  from "./FormField.component";


it("email field and password field should take correct values" , () => {
       let inputtype;
       const handleChange=jest.fn();
             if(inputtype === 'email' || inputtype=== 'password')
                {
                      const {  getByText } = render(<FormButtons onChange={handleChange} />);
                      fireEvent.click(getByText(inputtype));
                      expect(handleChange).toHaveTextContent("1");
                }
    }
  );



 