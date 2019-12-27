import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignupFormLine from './signupFormLine.component';

test('it will get the css of file', () => {
  const className = jest.fn();
  const { getByText } = render(<SignupFormLine className={className} />);
  expect(getByText('Or')).toHaveTextContent('Or');
});
