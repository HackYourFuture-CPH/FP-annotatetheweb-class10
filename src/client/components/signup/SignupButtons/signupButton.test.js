import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignupButtons from './SignupButtons.component';

it('click on button- function onClick is called', () => {
  const title = 'Create Account';
  const onClick = jest.fn();
  const { getByText } = render(<SignupButtons click={onClick} title={title} />);
  fireEvent.click(getByText(title));
  expect(onClick).toHaveBeenCalledTimes(1);
});
