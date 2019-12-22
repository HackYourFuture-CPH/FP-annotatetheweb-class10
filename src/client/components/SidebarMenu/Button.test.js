import React from 'react';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';
import Button from './Button.component';
import '@testing-library/jest-dom/extend-expect';

test('if first child (button) of component have right classNames', () => {
  const { container } = render(
    <Button icon={faCog} buttonClasses="sidebar-menu-button-resp" />,
  );
  expect(container.firstChild).toHaveClass('sidebar-menu-button-resp');
});

test('if second child (FontAwesome) of component has the right classNames', () => {
  const { container } = render(
    <Button icon={faSearch} fontClasses="sidebar-menu-invert-color" />,
  );
  expect(container.firstChild.firstChild).toHaveClass(
    'sidebar-menu-invert-color',
  );
});
