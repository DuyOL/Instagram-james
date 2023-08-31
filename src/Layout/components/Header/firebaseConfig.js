import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import myFirebaseApp, { auth } from './myFirebaseApp';
import { signOut } from 'firebase/auth';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    myFirebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,
    myFirebaseApp.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => true, // Change this line
  },
};

function FirebaseConfig() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsSignedIn(false);
      })
      .catch(error => {
        console.error('Sign out error:', error);
      });
  };

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Vui lòng đăng nhập:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    );
  }

  return (
    <div>
      <h1>My App</h1>
      <p>Xin chào {auth.currentUser.displayName}! Bạn đã đăng nhập thành công!</p>
      <button onClick={handleSignOut}>Đăng xuất</button>
    </div>
  );
}

export default FirebaseConfig;
