import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckBox from './signupCheckBox.component';

storiesOf('Form components', module).add('check box', () => (
  <CheckBox
    onChange={(value) => console.log(value)}
    checkboxClass="check-box"
    linkClass="link-class"
    textNoLinkFirst="Creating an account means youre okey with our "
    textTermsOfServices="Terms of Service, Privacy Policy "
    textNoLinkLast="and our default "
    textNotificationsSettings="Notifications settings"
  />
));
