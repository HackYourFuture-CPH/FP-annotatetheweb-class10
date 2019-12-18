import React from 'react';
import {storiesOf} from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import { fab,
         faFacebookSquare, 
         faTwitter } from '@fortawesome/free-brands-svg-icons';
import FormButton from './FormButton.component';

storiesOf('FormButton',module)
.add('login button' ,() =>  <FormButton title='Log In' buttons='submit-btn' click={() =>console.log('submitted')} logo={null}/>)
.add('signup button' ,() => <FormButton title='Create Account' buttons='submit-btn' click={()=>console.log('submitted')} />)
.add('google log in button',() =>  <FormButton title='Log In With Google' buttons='google-btn' logo={faGoogle} align='logo-align' click={()=>console.log('clicked')}/>)
.add('google sign up button',() =>  <FormButton title='Sign up with Google' buttons='google-btn' logo={faGoogle} align='logo-align' click={()=>console.log('clicked')}/>)
.add('twitter button',()=>  <FormButton title='' buttons='twitter-btn' logo={faTwitter} click={()=>console.log('clicked')}/>)
.add('facebook button',()=> <FormButton title='' buttons='facebook-btn' logo={faFacebookSquare} click={()=>console.log('clicked')}/>)

    

