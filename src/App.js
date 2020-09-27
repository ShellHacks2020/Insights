import React, { useState, useEffect } from 'react';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


firebase.initializeApp({
  apiKey: "AIzaSyArRZo3OJBFnNs0hkBHW2M54YJFtt3GKEM",
  authDomain: "https://insights-tracker-app.firebaseapp.com/__/auth/handler"
})

function App(props) {
  const [isSignedIn, setSignedIn] = useState(false)

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setSignedIn(!!user)
      console.log("user", user)
    })
  });

  return (
    <div className="App">
      {isSignedIn ? (
        <span>
          <div>Signed In!</div>
          <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          <img
            alt="profile"
            src={firebase.auth().currentUser.photoURL}
          />
        </span>
      ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
    </div>
  );
}

export default App;
