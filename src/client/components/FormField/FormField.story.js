import React from 'react';
import {storiesOf} from '@storybook/react';
import FormField from './FormField.component';



storiesOf('FormField',module)
.add('email address field' ,() => <FormField  
                                   title='Email Address' 
                                   text='emaill' 
                                   box='boxclass' 
                                   inputtype='email' 
                                   textholder='enter email here' 
                                   inputclass='email-addres-box' 
                                   changehandler={e=>{e.target.value}}
                                   />)

 .add('password field',() =>     <FormField   
                                  title='Password' 
                                  text='emaill' 
                                  box='boxclass' 
                                  inputtype='password' 
                                  textholder='enter password' 
                                  inputclass='password-box' 
                                  changehandler={e=>{e.target.value}}
                                  />)



    

