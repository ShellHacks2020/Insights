import React, { useState, useEffect } from 'react';
import api from '../api';

function Profile() {
  const [message, setMessage] = useState(null);


  return (
    <div className="Profile">
      <h2>Profile</h2>
      <div className="result">asdasd</div>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  );
}

export default Profile;
