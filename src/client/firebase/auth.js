import { auth } from './configure'; 
import firebase from 'firebase/app';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export async function doSignInWithEmailAndPassword(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    return error;
  }
}

// SignOut
export const doSignOut = () => auth.signOut();

export async function signOut() {
  try {
    // eslint-disable-next-line no-console
    console.log('signOut successfull');
    await auth.signOut();
  } catch ({ error }) {
    // eslint-disable-next-line no-console
    console.log(`Sign Out Error: ${error}`);
  }
}

// Password reset
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = async (password) => {
  if (auth.currentUser) {
    await auth.currentUser.updatePassword(password);
  }
};

// Sign In with facebook
export async function signInWithFacebook() {
  try {
    // eslint-disable-next-line no-console
    console.log('facebook');
  } catch ({ message }) {
    // eslint-disable-next-line no-console
    console.log(`Facebook Login Error: ${message}`);
  }
}

export async function signInWithGoogle() {
  try {    
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    var token = result.credential.accessToken;
    var user = result.user;
    return user;
  } catch(error) {    
    //var errorCode = error.code;
    //var errorMessage = error.message;
    //var email = error.email;
    //var credential = error.credential;
    throw error;
  }
}