import React from 'react';
import {storiesOf} from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import { fab,
         faFacebookSquare, 
         faTwitter } from '@fortawesome/free-brands-svg-icons';
import FormButtons from './Button.component';

storiesOf('FormButtons',module)
.add('login button' ,() => <FormButtons title='Log In' buttons='submit-btn' click={() =>console.log('submitted')} logo={null}/>)
.add('google button',() => <FormButtons title='Log In With Google' buttons='google-btn' logo={faGoogle} align='logo-align' click={()=>console.log('clicked')}/>)
.add('twitter button',()=> <FormButtons title='' buttons='twitter-btn' logo={faTwitter} click={()=>console.log('clicked')}/>)
.add('facebook button',()=> <FormButtons title='' buttons='facebook-btn' logo={faFacebookSquare} click={()=>console.log('clicked')}/>)

    

