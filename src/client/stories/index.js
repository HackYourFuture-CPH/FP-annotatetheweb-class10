import React from "react";
import { storiesOf } from "@storybook/react";
import SignupEmailAddress from "../component/signup/signupTextFields/signup_emailAddress_txtfield";
import SignupTitle from "../component/signup/title/signup_title";
import '@fortawesome/free-brands-svg-icons';
import { faGoogle, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import SignupButtons from "../component/signup/SignupButtons/Signup_buttons";
import SignupFormLine from '../component/signup/signupFormLine/signup_form_line';
import CheckBox from "../component/signup/checkbox/signup_checkbox";
import Name from "../component/signup/signupTextFields/signup_user_name";
import SignupPassword from "../component/signup/signupTextFields/signup_password";


storiesOf ("components",module)
.add ("signup EmailAddress Textfield",()=> <SignupEmailAddress/>)
.add ("Signup Password",()=><SignupPassword/>)
.add ("signup FullName Textfield",()=> <Name title="Username"/>)
.add ("signup UserName TextField",()=> <Name title ="Full Name"/>)
.add ("signup Title",()=> <SignupTitle/>)
.add("signup Google Button",()=><SignupButtons  title="Signup with Google"  signupBtn="googleBtn" logo={faGoogle} text="signupGoogleTxt"/>)
.add ("signup Create Account",()=><SignupButtons  title="Create Account" signupBtn="CreateAccountBtn"  signupBtnText="signupCreateAccountTxt"/>)
.add ("signup Twitter Button",()=><SignupButtons logo={faTwitter} signupBtn="twitterBtn"/>)
.add ("signup Facebook Button",()=><SignupButtons  logo={faFacebook} signupBtn="facebookBtn"/>)
.add("Signup Form Checked",()=><CheckBox/>)
.add("signup Form Line (Or)",()=><SignupFormLine/>)
  

