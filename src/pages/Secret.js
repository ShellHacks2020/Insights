import React, { useState, useEffect } from 'react';
import api from '../api';

function Secret() {
  const [secret, setSecret] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    api
      .getSecret()
      .then(data => setSecret(data.secret))
      .catch(err => setMessage(err.toString()));
  });

  return (
    <div className="Secret">
      <h2>Secret</h2>
      <div className="result">{secret}</div>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  );
}

export default Secret;
