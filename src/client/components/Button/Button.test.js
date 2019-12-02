import React from 'react';
import{ render, cleanup, fireEvent} from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import FormButtons from "./Button.component";
afterEach(cleanup);







  
test("if button has correct text", () => { 
    const title='Log In';
    const handleClick = jest.fn();
    const { getByText , findByText} = render(
      <FormButtons title={title} onClick={handleClick}/>
    )
   
    expect(getByText(title)).toHaveTextContent(title);
    expect(handleClick).toHaveBeenCalled();
  });

//   test('calls correct function on click', () => {
//     const handleClick = jest.fn();
//     const title='login';
//     const { getByText } = render(
//       <FormButtons onClick={handleClick} />
//     );
//     fireEvent.click(getByText(title));
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });