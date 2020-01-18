import React from 'react';
import * as firebase from 'firebase/app';

const AuthContext = React.createContext();

// const UserContext = React.createContext(); 

export class Provider extends React.Component {
  state = {
    isAuthenticated: false,
    user_id: '4',
    project_id:'1'
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
        value={{ isAuthenticated: this.state.isAuthenticated, user_id: this.state.user_id, project_id: this.state.project_id }}
      >
        {/* <UserContext.Provider value= {{ user_name: this.state.user_name }} > */}
        {this.props.children}
        {/* </UserContext.Provider> */}
      </AuthContext.Provider>
    );
  }
}

export const { Consumer } = AuthContext;
