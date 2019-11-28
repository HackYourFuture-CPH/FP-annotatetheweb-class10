import React from 'react';
import {storiesOf} from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookSquare, faTwitter,  } from '@fortawesome/free-brands-svg-icons';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

//import { faCoffee } from '@fortawesome/free-solid-svg-icons';


import FormButtons from './Button.component';

storiesOf('FormButtons',module)
.add('login button' ,() => <FormButtons title='Log In' buttons='submit-btn' logo={null}/>)
.add('google button',() => <FormButtons title='Log In With Google' buttons='google-btn' logo={faGoogle} align='logo-align'/>)
.add('twitter button',()=> <FormButtons title='' buttons='twitter-btn' logo={faTwitter}/>)
.add('facebook button',()=> <FormButtons title='' buttons='facebook-btn' logo={faFacebookSquare} />)

    

