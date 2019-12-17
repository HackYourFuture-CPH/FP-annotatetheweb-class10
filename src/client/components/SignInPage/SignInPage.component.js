import React,{Component} from 'react';
import './SignInPage.css';
import Header from '../Header/Header.Component';
import FormLoginRegister from '../FormloginRegister/FormLoginRegister.component';
import imageLogin from '../../assets/images/imageLogin.jpg';
import Image from '../SignInImage/SignInImage.component';
import FormButton from '../FormButton/FormButton.component';
import FormField from '../FormField/FormField.component';
import FormSignIn from '../FormSignIn/FormSignIn.component';


class SignInPage extends Component{
    
    render(){
        return(
            <div className='main-wrapper'>
                 <div className='header-wrapper'>
                     <Header title="Annotate the web"/>
                     <FormLoginRegister formLoginRegister='form-login-register' text='Do not have account yet?' register='Register' classRegister='register-class' linewrapper='line-wrapper'/>
                 </div>
                 <div className='body-wrapper'>
                     <Image classImage='image' loginImage={imageLogin}/>
                     <FormSignIn />
                 </div>
         </div>
           )
    }
}

export default SignInPage ;