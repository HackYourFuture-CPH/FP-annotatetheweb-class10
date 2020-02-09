import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-named-as-default
import ShareLinkDialog from './ShareLinkDialog.component';

storiesOf('ShareLinkDialog', module).add('Share Link', () => (
  <ShareLinkDialog
    copyURL="https://api.annotatetheweb.com/swagger/ui/index#!/Screenshot/Screenshot_CheckStatusOnScreenshot"
    title="Annotation share Via "
  />
));

export default ShareLinkDialog;
