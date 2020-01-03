import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToggleButton from './ToggleButton.component';

test('click on the ToggleButton must pass in a value (true or false) in a function as an argument ', () => {
  const handleChange = jest.fn();
  const { container } = render(<ToggleButton onChange={handleChange} />);
  const checkbox = container.firstChild.firstChild;
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(false);
  expect(handleChange).toHaveBeenCalledTimes(2);
});
