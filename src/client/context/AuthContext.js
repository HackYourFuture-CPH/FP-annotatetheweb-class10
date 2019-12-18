import React from "react";
import * as firebase from "firebase/app";

const AuthContext = React.createContext();

export class Provider extends React.Component {
  state = {
    isAuthenticated: false
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      {
        user && console.log("User", user.email);
      }
      if (user) {
        console.log("signed in");
        this.setState({ isLoading: false, isAuthenticated: true });
      } else {
        console.log("not signed in");
        this.setState({ isLoading: false, isAuthenticated: false });
      }
    });
  }
  
  render() {
    return (
      <AuthContext.Provider
        value={{ isAuthenticated: this.state.isAuthenticated }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const Consumer = AuthContext.Consumer;