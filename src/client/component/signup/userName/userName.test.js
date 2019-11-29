import React from 'react';
import {StoriesOf, storiesOf} from '@storybook/react';
import UserName from './userName';

storiesOf ('component', module).add('Username',()=><UserName/>);