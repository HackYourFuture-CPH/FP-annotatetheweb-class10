import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List.component';

storiesOf('List', module).add('with text', () => <List title="List" />);
export default List;
