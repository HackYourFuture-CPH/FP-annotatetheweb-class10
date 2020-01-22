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
    const provider = new firebase.auth.FacebookAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const { user } = result;
    return user;
  } catch (error) {
    return error;
  }
}

// Sign In with google
export async function signInWithGoogle() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const { user } = result;
    return user;
  } catch (error) {
    return error;
  }
}

// Sign In with twitter
export async function signInWithTwitter() {
  try {
    const provider = new firebase.auth.TwitterAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const { user } = result;
    return user;
  } catch (error) {
    return error;
  }
}
