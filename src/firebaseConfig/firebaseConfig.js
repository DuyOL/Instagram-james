import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCGxmbQOUfnGdwhWltxfOI7dGf_CRC9zg0',
  authDomain: 'intagram-james.firebaseapp.com',
  projectId: 'intagram-james',
  storageBucket: '',
  messagingSenderId: '200609460634',
  appId: 'intagram-james'
};

// Khởi tạo Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth(); 
