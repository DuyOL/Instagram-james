import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import myFirebaseApp, { auth } from './myFirebaseApp';
import { signOut } from 'firebase/auth';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    myFirebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,
    myFirebaseApp.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function FirebaseConfig() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      if (user) {
        user.getIdToken().then(token => {
          console.log('Token:', token);
        });
      }
    });
    return () => unregisterAuthObserver();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsSignedIn(false);
        console.log('Đăng xuất thành công');
      })
      .catch(error => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <div>
      <h1>My App</h1>
      {!isSignedIn ? (
        <>
          <p>Vui lòng đăng nhập:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </>
      ) : (
        <>
          <p>Xin chào {auth.currentUser.displayName}! Bạn đã đăng nhập thành công!</p>
          <button onClick={handleSignOut}>Đăng xuất</button>
        </>
      )}
    </div>
  );
}

export default FirebaseConfig;
