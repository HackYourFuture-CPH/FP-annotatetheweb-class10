import React, { Component } from "react";
import { Consumer } from "../../../context/AuthContext";
import "../../../firebase";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignOut
} from "../../../firebase/auth";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onRegisterClick = event => {
    event.preventDefault();
    doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.setState({ email: "", password: "" }))
      .then(alert("New user is created"))
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  onLoginClick = () => {
    event.preventDefault();
    doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.setState({ email: "", password: "" }))
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Consumer>
        {({ isAuthenticated }) => {
          return (
            <div>
              <section>Final project!</section>
              <br />
              <br />
              <p>Am I signed In: {isAuthenticated ? "yes" : "no"}</p>

              <br />
              <br />
              <p>Register form</p>
              <form onSubmit={this.onRegisterClick}>
                <label>Email</label>
                <input
                  onChange={this.onInputChange}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <label>password</label>
                <input
                  onChange={this.onInputChange}
                  type="password"
                  id="password"
                  name="password"
                  required
                  autoComplete="new-password"
                />
                <button type="submit">Register</button>
              </form>
              <br />
              <p>Login form</p>
              <form onSubmit={this.onLoginClick}>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={this.onInputChange}
                  required
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.onInputChange}
                  required
                />
                <button type="submit">Log in</button>
              </form>
              <br />
              <button onClick={doSignOut}>SignOut</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Home;
