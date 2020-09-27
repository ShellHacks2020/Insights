import React, { Fragment } from 'react';
import '../styles/home.scss';
import * as firebase from 'firebase';
import SignIn from '../components/SignIn';

function Home(props) {
  console.log(props);
  return (
    <Fragment>
      <div className="home">
        <div className="header">
          <div className="header-container">
            <div className="home-header">#Insightout</div>
            <div className="subheader">
              Find you favorite influencer. Grab data and go.
            </div>
            <div className="get-started-btn-ctn">
              <button className="get-started-btn">
                <div className="btn-message">Get Started</div>
              </button>
            </div>
          </div>
        </div>
        {props.isSignedIn ? (
          <div>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img alt="profile" src={firebase.auth().currentUser.photoURL} />
          </div>
        ) : (
          <div className="section-container">
            <SignIn
              setSignedIn={props.setSignedIn}
              isSignedIn={props.isSignedIn}
            ></SignIn>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Home;
