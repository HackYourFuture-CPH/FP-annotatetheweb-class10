import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignupTitle from './signupTitle';

test('test the title', () => {
  const className = jest.fn();
  const { getByText } = render(<SignupTitle className={className} />);
  expect(getByText('Sign up to Annotate the web')).toHaveTextContent(
    'Sign up to Annotate the web',
  );
});
