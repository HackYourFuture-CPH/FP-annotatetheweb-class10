import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileSummary from './ProfileSummary.component';

test('if span has correct text', () => {
  const profileName = 'span text';
  const profileImage = { img: 'image/path', alt: 'alt tag content' };
  const { getByText } = render(
    <ProfileSummary profileName={profileName} profileImage={profileImage} />,
  );
  expect(getByText(profileName)).toHaveTextContent(profileName);
});
