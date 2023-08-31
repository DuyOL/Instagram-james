import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBIUY1aU-C2e5tYOYkOYoUtBhlCvVuF_j4',
  authDomain: 'instagram-3d649.firebaseapp.com',
};

const myFirebaseApp = initializeApp(config);

export const auth = getAuth(myFirebaseApp);

export default myFirebaseApp;
