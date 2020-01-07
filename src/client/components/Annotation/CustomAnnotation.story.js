import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomAnnotation from './CustomAnnotation.component';

import background from '../../assets/images/background.jpg';

const backgroundImage = {
  src: background,
  alt: 'sample screenshot',
}

storiesOf('Annotation', module).add('Annotation', () => (
  <div>
    <CustomAnnotation
     screenshot={backgroundImage}
    />
  </div>
));
