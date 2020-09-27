import React, { useState } from 'react';
import api from '../api';

function Signup(props) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    let data = {
      username,
      name,
      password,
    };
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!');
        props.history.push('/'); // Redirect to the home page
      })
      .catch(err => setMessage(err.toString()));
  }
  

  return (
    <div className="Signup">
      <h2>Signup</h2>
      <form>
        Username:{' '}
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleUsername}
        />{' '}
        <br />
        Name:{' '}
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleName}
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
        <button onClick={e => handleClick(e)}>Signup</button>
      </form>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  );
}

export default Signup;
