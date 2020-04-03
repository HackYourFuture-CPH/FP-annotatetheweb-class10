import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button.component';

test('if button has correct text', () => {
  const title = '...';
  const { getByText } = render(<Button title={title} />);

  expect(getByText(title)).toHaveTextContent(title);
});

test('button is clicked and onClick prop is called', () => {
  const title = '...';
  const onClick = jest.fn();
  const { getByText } = render(
    <Button title={title} onClick={onClick} />,
  );

  fireEvent.click(getByText(title));
  expect(onClick).toHaveBeenCalledTimes(1);
});
