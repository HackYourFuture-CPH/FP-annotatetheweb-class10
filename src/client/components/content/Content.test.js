import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Content from './Content.component';
import { themeContent } from '../theme';

test('if content has a correct title and text', () => {
  const title = 'title example';
  const text =
    'some text here for testing component: jdkjdsjiaofjgoidfgiojdsoifgjsdkjfgsoigjoirjgiorjogijriojiogjdfgjodijgiorjgoirjgoiejogjeoirjgoiejgi';
  const { getByText } = render(
    <Content title={title} text={text} theme={themeContent} />,
  );
  expect(getByText(title, text)).toHaveTextContent(title, text);
});

test('if content has a number title and text', () => {
  const title = 312;
  const text = 756;
  const { getByTestId } = render(
    <Content title={title} text={text} theme={themeContent} />,
  );
  expect(getByTestId('title').innerHTML).toBe(title.toString());
  expect(getByTestId('text').innerHTML).toBe(text.toString());
});

test('if content has a empty title and text', () => {
  const { getByTestId } = render(<Content theme={themeContent} />);
  expect(getByTestId('title').innerHTML).toBe('');
  expect(getByTestId('text').innerHTML).toBe('');
});
