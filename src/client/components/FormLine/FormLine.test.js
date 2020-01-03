import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormLine from './FormLine.component';

test('it will get the css of file', () => {
  const clasName = jest.fn();
  const { getByText } = render(<FormLine className={clasName} />);
  expect(getByText('Or')).toHaveTextContent('Or');
});
