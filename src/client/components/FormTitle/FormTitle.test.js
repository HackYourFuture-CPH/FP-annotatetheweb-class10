import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormTitle from './FormTitle.component';

test('it will test the title', () => {
  const clasName = jest.fn();
  const { getByText } = render(<FormTitle className={clasName} />);
  expect(getByText('Login to Annotate the web')).toHaveTextContent(
    'Login to Annotate the web',
  );
});
