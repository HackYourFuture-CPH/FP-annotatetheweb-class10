import React, { Component } from 'react';
import { Consumer } from '../../context/AuthContext';
import FormSignUp from '../../components/FormSignUp/FormSignUp.component';
import imageRegister from '../../assets/images/left-background.jpg';

import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onRegisterClick = (event) => {
    event.preventDefault();
    doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.setState({ email: '', password: '' }))
      .then(alert('New user is created'))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Consumer>
        {({ isAuthenticated }) => {
          return (
            <div>
              <div>
                <img
                  alt="register-image"
                  src={imageRegister}
                />
              </div>
              <FormSignUp
                onClick={this.onRegisterClick}
                onChange={this.onInputChange}
              ></FormSignUp>
              <p>Am I signed In: {isAuthenticated ? 'yes' : 'no'}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default RegisterPage;
