import React from 'react';
import * as firebase from 'firebase/app';

const AuthContext = React.createContext();

export class Provider extends React.Component {
  state = {
    isAuthenticated: false,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // eslint-disable-next-line no-console
        console.log('signed in');
        this.setState({ isAuthenticated: true });
      } else {
        // eslint-disable-next-line no-console
        console.log('not signed in');
        this.setState({ isAuthenticated: false });
      }
    });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated: this.state.isAuthenticated,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const { Consumer } = AuthContext;
