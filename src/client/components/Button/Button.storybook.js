import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button.component';

storiesOf('Button', module).add('with text', () => <Button title="title" />);
export default Button;
