import React from 'react';
import * as firebase from 'firebase/app';

const AuthContext = React.createContext();

export class Provider extends React.Component {
  state = {
    isAuthenticated: false,
    user_id: '1',
    screenshot_key: 'initial context value',
  };

  setScreenshotKey = (key) => {
    this.setState({ screenshot_key: key });
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
          user_id: this.state.user_id,
          screenshot_key: this.state.screenshot_key,
          setScreenshotKey: this.setScreenshotKey,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const { Consumer } = AuthContext;
