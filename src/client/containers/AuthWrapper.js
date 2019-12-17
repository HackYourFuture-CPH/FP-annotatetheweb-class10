import React from "react";
import * as firebase from "firebase/app";

export default class AuthWrapper extends React.Component {
    state = {
        isAuthenticated: false
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            { user && console.log('User', user.email) }
            if (user) {
                console.log('signed in');
                this.setState({ isLoading: false, isAuthenticated: true })
            } else {
                console.log('not signed in');
                this.setState({ isLoading: false, isAuthenticated: false })
            }
        });
    };

    render() {
        if (!this.state.isAuthenticated) {
            // return ;
        }
        return (
            <div >
                {this.props.children({ isAuthenticated: this.state.isAuthenticated })}
            </div>
        )
    }
}