import React from 'react';
import {storiesOf} from '@storybook/react';
import SignInPage  from './SignInPage.component';

storiesOf('SignInPage ',module)
.add('login' ,() => <SignInPage  />)