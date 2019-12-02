import React from "react";
import { storiesOf } from "@storybook/react";
import SignupEmailAddress from "../components/signup/signupTextFields/signupEmailAddressTxtField";
import SignupTitle from "../components/signup/title/signupTitle";
import '@fortawesome/free-brands-svg-icons';
import { faGoogle, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import SignupButtons from "../components/signup/SignupButtons/SignupButtons";
import SignupFormLine from '../components/signup/signupFormLine/signupFormLine';
import CheckBox from "../components/signup/checkbox/signupCheckBox";
import Name from "../components/signup/signupTextFields/signupUserName";
import SignupPassword from "../components/signup/signupTextFields/signupPassword";


storiesOf ("components",module)
.add ("signup EmailAddress Textfield",()=> <SignupEmailAddress/>)
.add ("Signup Password",()=><SignupPassword/>)
.add ("signup FullName Textfield",()=> <Name title="Username"/>)
.add ("signup UserName TextField",()=> <Name title ="Full Name"/>)
.add ("signup Title",()=> <SignupTitle/>)
.add("signup Google Button",()=><SignupButtons  title="Signup with Google"  signupBtn="onClickHandler" logo={faGoogle} text="signupGoogleTxt"/>)
.add ("signup Create Account",()=><SignupButtons  title="Create Account" signupBtn="CreateAccountBtn"  signupBtnText="signupCreateAccountTxt"/>)
.add ("signup Twitter Button",()=><SignupButtons logo={faTwitter} signupBtn="twitterBtn"/>)
.add ("signup Facebook Button",()=><SignupButtons  logo={faFacebook} signupBtn="facebookBtn"/>)
.add("Signup Form Checked",()=><CheckBox/>)
.add("signup Form Line (Or)",()=><SignupFormLine/>)
  

