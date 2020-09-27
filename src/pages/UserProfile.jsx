import React, { useState, useEffect } from 'react';
import Bar from '../components/Bar';
import Portrait from '../assets/profilepic.jpg';
import '../styles/userProfile.scss';
import * as firebase from 'firebase';

function UserProfile() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setData(user);
    } else {
      return false;
    }
  });

  const [data, setData] = useState({});

  console.log(data);
  return (
    <div className="user-profile">
      <Bar></Bar>
      <div className="profile">
        <img src={data.photoURL} alt="profile"></img>
        <div className="profile-container">
          <div className="info-container">
            <h1>{data.displayName}</h1>
          </div>
          <div className="info-container">
            <h1>John</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
