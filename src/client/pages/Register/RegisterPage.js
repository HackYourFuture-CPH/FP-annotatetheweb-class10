import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FormSignUp from '../../components/FormSignUp/FormSignUp.component';
import Header from '../../components/Header/Header.Component';
import FormLoginRegister from '../../components/FormLoginRegister/FormLoginRegister.component';
import './Register.css';
import {
  doCreateUserWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
} from '../../firebase/auth';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userName: '',
      email: '',
      password: '',
    };
  }

  fillUsersTable = async (name, userName, uid) => {
    const response = await fetch('/api/users/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        user_name: userName,
        uid,
        fk_role_id: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const user_id = data.id;
        localStorage.setItem('user_id', JSON.stringify(user_id));
      });
  };

  onRegisterClick = async (event, errorMessage) => {
    if (!errorMessage) {
      let uid;
      event.preventDefault();
      if (
        this.state.email !== '' &&
        this.state.name !== '' &&
        this.state.password !== '' &&
        this.state.userName !== ''
      ) {
        await doCreateUserWithEmailAndPassword(
          this.state.email,
          this.state.password,
        )
          .then((data) => {
            alert('New user is created');
            uid = data.user.uid;
            const { name, userName } = this.state;
            this.fillUsersTable(name, userName, uid);
            this.props.history.push('/');
            this.setState({ email: '', password: '', name: '', userName: '' });
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            alert(error.message);
          });
      } else {
        alert('You need to fill all fields.');
      }
    } else {
      // eslint-disable-next-line no-console
      alert(errorMessage);
    }
  };

  // onRegisterClick = async (event, errorMessage) => {
  //   if (!errorMessage) {
  //     let uid;
  //     event.preventDefault();
  //     await doCreateUserWithEmailAndPassword(
  //       this.state.email,
  //       this.state.password,
  //     )
  //       .then((data) => {
  //         alert('new user is created');
  //         uid = data.user.uid;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     const { name, userName } = this.state;
  //     this.fillUsersTable(name, userName, uid);
  //     this.setState({ email: '', password: '', name: '', userName: '' });
  //     this.props.history.push('/');
  //   } else {
  //     console.log(errorMessage);
  //   }
  // };

  signInWithGoogle = () => {
    signInWithGoogle()
      .then((user) => {
        // eslint-disable-next-line no-console
        console.log('User logged in, using google');
        this.fillUsersTable(user.displayName, user.displayName, user.uid);
        this.props.history.push('/');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        alert(error);
      });
  };

  signInWithFacebook = () => {
    signInWithFacebook()
      .then((user) => {
        if (!user.message) {
          // eslint-disable-next-line no-console
          console.log('User logged in, using facebook');
          this.fillUsersTable(user.displayName, user.displayName, user.uid);
          this.props.history.push('/');
        } else {
          // eslint-disable-next-line no-console
          console.log(user.message);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        alert(error);
      });
  };

  signInWithTwitter = () => {
    signInWithTwitter()
      .then((user) => {
        // eslint-disable-next-line no-console
        console.log('User logged in, using twitter');
        this.fillUsersTable(user.displayName, user.displayName, user.uid);
        this.props.history.push('/');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        alert(error);
      });
  };

  onInputChange = ({ name, userName, email, password }) => {
    this.setState({ name, userName, email, password });
  };

  render() {
    return (
      <div className="register-wrapper">
        <div className="register-page">
          <div className="register-head">
            <Header title="Annotate the web" />
          </div>
          <div className="register-content">
            <FormSignUp
              onClick={this.onRegisterClick}
              changeHandler={this.onInputChange}
              signInWithGoogle={this.signInWithGoogle}
              signInWithFacebook={this.signInWithFacebook}
              signInWithTwitter={this.signInWithTwitter}
            />
            <FormLoginRegister
              text="Already a member? "
              register="Sign in"
              href="/login"
              linewrapper="register-link-to-login-page"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(RegisterPage);
