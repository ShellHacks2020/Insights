import React, { useEffect } from 'react';
import * as firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';
import '../styles/signin.scss';

function SignIn(props) {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      props.setSignedIn(!!user);
      console.log('user', user);
    });
  });

  return (
    <div className="signin">
      <div className="signin-container">
        <h1>Start your insight report</h1>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
}

export default SignIn;
