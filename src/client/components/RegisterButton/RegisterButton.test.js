import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegisterButton from './RegisterButton.component';

test('if button was clicked', () => {
  const handleClick = jest.fn();
  const { container } = render(<RegisterButton onClick={handleClick} />);

  const button = container.firstChild.firstChild;
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
