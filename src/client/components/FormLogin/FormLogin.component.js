import React,{Component} from 'react';
import './FormLogin.css';
import Header from '../Header/Header.Component';
import Image from '../SignInImage/SignInImage.component';
import FormButton from '../FormButton/FormButton.component';
import FormField from '../FormField/FormField.component';


class FormLogin extends Component{
    
    render(){
        return(
            <div className='wrapper'>
                 <Header />
                 <Image/>
                 <FormField/>
            </div>
           
            

        )
    }
}

export default FormLogin;