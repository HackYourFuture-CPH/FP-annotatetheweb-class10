import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileSummary from './ProfileSummary.component';

import samplePhoto from '../../assets/images/profile.png';

const profile = {
  src: samplePhoto,
  alt: 'profile image',
};

storiesOf('ProfileSummary', module).add('ProfileSummary', () => (
  <ProfileSummary profileName="Kseiina Zar" profileImage={profile} />
));
