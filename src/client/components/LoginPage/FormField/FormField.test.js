import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormField from './FormField.component';

it('email field and password field should take correct values', () => {
  let inputType;
  const handleChange = jest.fn();
  if (inputType === 'email' || inputType === 'password') {
    const { getByText } = render(<FormField onChange={handleChange} />);
    fireEvent.click(getByText(inputType));
    expect(handleChange).toHaveTextContent('0');
  }
});
