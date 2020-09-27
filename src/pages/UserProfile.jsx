import React, { useState } from 'react';
import Bar from '../components/Bar';
import Portrait from '../assets/profilepic.jpg';
import '../styles/editUser.scss';
import * as firebase from 'firebase';
import EditUserProfile from './EditUserProfile';

function UserProfile(props) {
  function signOut() {
    firebase.auth().signOut();
    window.location.href = '/';
  }
  const [editProfile, setEditProfile] = useState(false);
  return (
    <div>
      <Bar></Bar>
      <div className="user-profile">
        <div>
          {editProfile ? (
            <EditUserProfile
              editProfile={editProfile}
              user={props.user}
              setUser={props.setUser}
            />
          ) : (
            <div style={{ paddingTop: '100px' }}>
              <h1>Welcome!</h1>
              <img
                alt="profile"
                className="profile-pic"
                src={props.user.photoURL}
              />
              <div className="profile-info-ctn">
                {' '}
                <div className="profile-name">{props.user.displayName}</div>
                <div className="profile-info">Aritist, Singer, Producer</div>
                <div className="profile-info">San Francisco, CA</div>
                <div className="profile-info">{props.user.email}</div>
              </div>
              <div className="button-ctn">
                {' '}
                <button
                  className="edit-profile-btn"
                  onClick={() => setEditProfile(!editProfile)}
                >
                  Edit Profile
                </button>
                <button className="signout-btn" onClick={signOut}>
                  Sign out!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
