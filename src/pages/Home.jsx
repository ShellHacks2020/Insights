import React, { Fragment, useState } from 'react';
import '../styles/home.scss';
import * as firebase from 'firebase';
import SignIn from '../components/SignIn';
import EditUserProfile from '../pages/EditUserProfile';
import Searchbar from '../components/Searchbar';
import UserProfile from './UserProfile';

function Home(props) {
  console.log(props);
  const [editProfile, setEditProfile] = useState(false);

  return (
    <Fragment>
      {props.isSignedIn ? (
        <UserProfile />
      ) : (
        <div className='home'>
          <div className='header'>
            <div className='header-container'>
              <div className='home-header'>#Insightout</div>
              <div className='subheader'>
                Find you favorite influencer. Grab data and go.
              </div>
              <div className='get-started-btn-ctn'>
                <button className='get-started-btn'>
                  <div className='btn-message'>Get Started</div>
                </button>
              </div>
            </div>
          </div>
          <div className='section-container'>
            <SignIn
              setSignedIn={props.setSignedIn}
              isSignedIn={props.isSignedIn}
            ></SignIn>
          </div>
        </div>
      )}
      {/* </div> */}
    </Fragment>
  );
}

export default Home;
