import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckBox from './signupCheckBox.component';

test('click on the CheckBox must pass in a value (true or false) in a function as an argument ', () => {
  const handleChange = jest.fn();
  const { container } = render(<CheckBox onChange={handleChange} />);
  const checkbox = container.firstChild.firstChild;
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(false);
  expect(handleChange).toHaveBeenCalledTimes(2);
});
