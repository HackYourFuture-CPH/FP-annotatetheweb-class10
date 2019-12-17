import React from 'react';
import { storiesOf } from '@storybook/react';
import { themeContent } from '../theme';
import Content from './Content.component';

import hyf from '../../assets/images/hyf.png';
import codeart from '../../assets/images/codeart.png';

const hyfLogo = {
  src: hyf,
  alt: 'hyf logo',
};

const codeartLogo = {
  src: codeart,
  alt: 'code:art logo',
};

storiesOf('Content', module).add('Content', () => (
  <div>
    <Content
      title="About project"
      text="This tool will help you to annotate any webpage that you want, collaborate with others and share your comments."
      hyfLogo={hyfLogo}
      codeartLogo={codeartLogo}
      theme={themeContent}
    />
  </div>
));
