import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};

const myFirebaseApp = initializeApp(config);

export const auth = getAuth(myFirebaseApp);

export default myFirebaseApp;
