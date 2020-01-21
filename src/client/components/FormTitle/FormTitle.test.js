import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormTitle from './FormTitle.component';

test('it will test the title', () => {
  const text = 'Login to Annotate the web';
  const { getByText } = render(<FormTitle text={text} />);
  expect(getByText(text)).toHaveTextContent(
    'Login to Annotate the web',
  );
});
