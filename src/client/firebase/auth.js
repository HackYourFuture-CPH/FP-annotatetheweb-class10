import { auth } from './configure';

//Sign Up
export const doCreateUserWithEmailAndPassword = (
    email,
    password
) => auth.createUserWithEmailAndPassword(email, password);

//Sign In
export async function doSignInWithEmailAndPassword(
    email,
    password
) {
    try{
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        return error;
    }
}

//SignOut
export const doSignOut = () => auth.signOut();

export async function signOut() {
    try{
        console.log('signOut successfull');
        await auth.signOut();
    } catch ({ error }) {
        console.log(`Sign Out Error: ${error}`)
    }
}

//Password reset
export const doPasswordReset = (email) =>
auth.sendPasswordResetEmail(email);

//Password Change
export const doPasswordUpdate = async (password) => {
    if (auth.currentUser) {
        await auth.currentUser.updatePassword(password);
    }
}

//Sign In with facebook
export async function signInWithFacebook() {
    try {
        console.log('facebook');
    } catch ({ message }) {
        console.log(`Facebook Login Error: ${message}`);
    }
}
