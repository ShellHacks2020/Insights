import React, { Fragment, useState } from 'react';
import api from '../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  // this.handleInputChange = this.handleInputChange.bind(this);

  const handleInputChange = (e) => {
    console.log("input change");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    api
      .login(username, password)
      .then((result) => {
        console.log('SUCCESS!');
        this.props.history.push('/'); // Redirect to the home page
      })
      .catch((err) => this.setState({ message: err.toString() }));
  };

  return (
    <Fragment>
      <div className='Login'>
        <h2>Login</h2>
        <form>
          Username:{' '}
          <input
            type='text'
            value={username}
            name='username'
            onChange={() => this.handleInputChange}
          />{' '}
          <br />
          Password:{' '}
          <input
            type='password'
            value={password}
            name='password'
            onChange={() => this.handleInputChange}
          />{' '}
          <br />
          <button onClick={(e) => this.handleClick(e)}>Login</button>
        </form>
        {message && <div className='info info-danger'>{message}</div>}
      </div>
    </Fragment>
  );
}

export default Login;
