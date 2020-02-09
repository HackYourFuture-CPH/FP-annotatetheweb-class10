import React from 'react';
import { storiesOf } from '@storybook/react';

import MediaButtons from './MediaButtons.component';

storiesOf('MediaButtons', module)
  .add('MediaButtons', () => (
    <MediaButtons url="http://localhost:3007/?path=/story/mediabuttons--mediabuttons" title="annotation"/>
  ));
export default MediaButtons;  