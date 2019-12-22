import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar.component';

test('if Nav Bar has correct text', () => {
  const navElements = [
    { title: 'Annotate', id: 1 },
    { title: 'About', id: 2 },
    { title: 'Login', id: 3 },
  ];
  const href = '#';
  const { container } = render(
    <NavBar navElements={navElements} href={href} />,
  );
  expect(container.getElementsByTagName('a')[0].innerHTML).toBe('Annotate');
  expect(container.getElementsByTagName('a')[1].innerHTML).toBe('About');
  expect(container.getElementsByTagName('a')[2].innerHTML).toBe('Login');
});
