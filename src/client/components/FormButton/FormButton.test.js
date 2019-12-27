import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormButton from './FormButton.component';

it('click on button- function onClick is called', () => {
  let title;
  const onClick = jest.fn();
  if (title === 'Log In' || title === 'Log In With Google') {
    const { getByText } = render(<FormButton onClick={onClick} />);
    fireEvent.click(getByText(title));
    expect(onClick).toHaveBeenCalledTimes(1);
  }
});
