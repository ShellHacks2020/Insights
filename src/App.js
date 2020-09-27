import React, { useState} from 'react';
import Navbar from "./components/Navbar"
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyArRZo3OJBFnNs0hkBHW2M54YJFtt3GKEM",
  authDomain: "insights-tracker-app.firebaseapp.com"
})

function App(props) {
  const [isSignedIn, setSignedIn] = useState(false)

  return (
    <div className="App">
      <Navbar isSignedIn={isSignedIn} setSignedIn={setSignedIn}></Navbar>
    </div>
  );
}

export default App;
