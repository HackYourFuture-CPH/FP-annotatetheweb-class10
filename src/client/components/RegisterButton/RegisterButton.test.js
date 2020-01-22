import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegisterButton from './RegisterButton.component';

// Component has been changed, test needs to be set up for it. To do!
// test('if button has correct text', () => {
//   const title = 'Button text';
//   const onClick = jest.fn();
//   const { getByText } = render(
//     <RegisterButton onClick={onClick} />,
//   );

//   fireEvent.click(getByText(title));
//   expect(onClick).toHaveBeenCalledTimes(1);
// });
