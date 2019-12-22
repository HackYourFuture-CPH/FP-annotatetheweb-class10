import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UrlInput from './UrlInput.component';

test('click on enter - function onEnter is called, value from input is passed in a function as an argument', () => {
  const url = 'google.com';
  const handleEnter = jest.fn();
  const { container } = render(<UrlInput onEnter={handleEnter} />);
  const input = container.firstChild;
  fireEvent.keyPress(input, {
    key: 'Enter',
    code: 13,
    charCode: 13,
    target: { value: url },
  });
  expect(handleEnter).toHaveBeenCalledTimes(1);
  expect(handleEnter).toHaveBeenCalledWith(url);
});
