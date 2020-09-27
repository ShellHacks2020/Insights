import React, { useState, useEffect } from 'react';

function Profile() {
  const [message, setMessage] = useState(null);

  return (
    <div className='Profile'>
      <h2>Profile</h2>
      {message && <div className='info info-danger'>{message}</div>}
    </div>
  );
}

export default Profile;
