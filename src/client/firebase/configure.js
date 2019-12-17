import * as firebase from "firebase";
import "firebase/auth";
// require("dotenv").config({ path: __dirname + '/.env' });
require("dotenv").config({ path: "../../../.env" });
// require("dotenv").config({ path: "../../.env" });

console.log(process.env.FIREBASE_API_KEY)

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

let app = null;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}

export default app;
export const auth = firebase.auth();