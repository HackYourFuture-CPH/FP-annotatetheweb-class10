import React from 'react';
import { storiesOf } from '@storybook/react';

import MediaButtons from './MediaButtons.component';

storiesOf('MediaButtons', module)
  .add('MediaButtons', () => (
    <div>
      <MediaButtons url="http://localhost:3007/?path=/story/mediabuttons--mediabuttons" title="annotation"/>
    </div>
  ));
export default MediaButtons;  