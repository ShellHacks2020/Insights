import React, { useState } from 'react';
import api from '../api';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    api
      .login(username, password)
      .then(result => {
        console.log('SUCCESS!');
        props.history.push('/'); // Redirect to the home page
      })
      .catch(err => setMessage(err.toString()));
  }

  
  return (
    <div className="Login">
      <h2>Login</h2>
      <form>
        Username:{' '}
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleUsername}
        />{' '}
        <br />
        Password:{' '}
        <input
          type="password"
          value={password}
          name="password"
          onChange={handlePassword}
        />{' '}
        <br />
        <button onClick={e => handleClick(e)}>Login</button>
      </form>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  );
}

export default Login;
