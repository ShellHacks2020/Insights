import React, { Fragment, useState } from 'react';
import SignIn from '../components/SignIn';
import EditUserProfile from '../pages/EditUserProfile';
import * as firebase from 'firebase';
import '../styles/userprofile.scss';

function UserProfile(props) {
  const [editProfile, setEditProfile] = useState(false);
  return (
    <div className='user-profile'>
      <div>
        {editProfile ? (
          <EditUserProfile editProfile={editProfile} />
        ) : (
          <div style={{ paddingTop: '100px' }}>
            <h1>Welcome!</h1>
            <img
              alt='profile'
              className='profile-pic'
              src={firebase.auth().currentUser.photoURL}
            />
            <div className='profile-info-ctn'>
              {' '}
              <div className='profile-name'>
                {firebase.auth().currentUser.displayName}
              </div>
              <div className='profile-info'>Aritist, Singer, Producer</div>
              <div className='profile-info'>San Francisco, CA</div>
              <div className='profile-info'>
                {firebase.auth().currentUser.email}
              </div>
            </div>
            <div className='button-ctn'>
              {' '}
              <button
                className='edit-profile-btn'
                onClick={() => setEditProfile(!editProfile)}
              >
                Edit Profile
              </button>
              <button
                className='signout-btn'
                onClick={() => firebase.auth().signOut()}
              >
                Sign out!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
