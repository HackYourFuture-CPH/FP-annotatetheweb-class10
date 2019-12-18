import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegisterButton from './RegisterButton.component';

test('if button has correct text', () => {
  const title = 'Button text';
  const onClick = jest.fn();
  const { getByText } = render(
    <RegisterButton title={title} onClick={onClick} />,
  );

  fireEvent.click(getByText(title));
  expect(onClick).toHaveBeenCalledTimes(1);
});
