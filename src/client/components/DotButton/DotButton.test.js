import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DotButton from './DotButton.component';

test('if button has correct text', () => {
  const title = '...';
  const { getByText } = render(<DotButton title={title} />);

  expect(getByText(title)).toHaveTextContent(title);
});

test('button is clicked and onClick prop is called', () => {
  const title = '...';
  const onClick = jest.fn();
  const { getByText } = render(
    <DotButton title={title} onClickHandle={onClick} />,
  );

  fireEvent.click(getByText(title));
  expect(onClick).toHaveBeenCalledTimes(1);
});
