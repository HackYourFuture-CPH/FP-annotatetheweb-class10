import React from 'react';
import { storiesOf } from '@storybook/react';
import ShareLink from './ShareLink.component';

storiesOf('ShareLink', module).add('Share Link', () => (
  <ShareLink copyURL="https://api.annotatetheweb.com/swagger/ui/index#!/Screenshot/Screenshot_CheckStatusOnScreenshot" />
));

export default ShareLink;
