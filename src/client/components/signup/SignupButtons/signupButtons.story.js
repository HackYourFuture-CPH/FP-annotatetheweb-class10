import React from 'react';
import { storiesOf } from '@storybook/react';
import SignupButtons from './SignupButtons.component';
import {
  faGoogle,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

storiesOf('Form components', module)
  .add('signup Google Button', () => (
    <SignupButtons
      title="Signup with Google"
      click={() => console.log('signed up with google!')}
      signupButton="signup-google-btn"
      logo={faGoogle}
      text="signup-google-txt"
      align="google-logo-align"
    />
  ))
  .add('signup Create Account', () => (
    <SignupButtons
      title="Create Account"
      click={() => console.log('account created!')}
      signupButton="create-account-btn"
      signupBtnTxt="signup-create-account-txt"
    />
  ))
  .add('signup Twitter Button', () => (
    <SignupButtons
      logo={faTwitter}
      click={() => console.log('signed up with twitter!')}
      signupButton="twitter-btn"
    />
  ))
  .add('signup Facebook Button', () => (
    <SignupButtons
      logo={faFacebook}
      click={() => console.log('signed up with facebook!')}
      signupButton="facebook-btn"
    />
  ));
