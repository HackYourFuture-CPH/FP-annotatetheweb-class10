import firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyAROMf-XVOoPXN_idZbYigkdn0eABbQbjA',
  authDomain: 'fp-annotatetheweb-class10.firebaseapp.com',
  databaseURL: 'https://fp-annotatetheweb-class10.firebaseio.com',
  projectId: 'fp-annotatetheweb-class10',
  storageBucket: 'fp-annotatetheweb-class10.appspot.com',
  messagingSenderId: '845246565627',
  appId: '1:845246565627:web:714afab19ea6670695745e',
  measurementId: 'G-R64ZFS2G88',
};
// eslint-disable-next-line
let app = null;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export default app;