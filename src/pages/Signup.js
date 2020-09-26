import React, { Fragment, useState } from 'react';
import api from '../api';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    let data = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    };
    api
      .signup(data)
      .then((result) => {
        console.log('SUCCESS!');
        this.props.history.push('/'); // Redirect to the home page
      })
      .catch((err) => this.setState({ message: err.toString() }));
  };
  return (
    <div className='Signup'>
      <h2>Signup</h2>
      <form>
        Username:{' '}
        <input
          type='text'
          value={username}
          name='username'
          onChange={this.handleInputChange}
        />{' '}
        <br />
        Name:{' '}
        <input
          type='text'
          value={name}
          name='name'
          onChange={this.handleInputChange}
        />{' '}
        <br />
        Password:{' '}
        <input
          type='password'
          value={password}
          name='password'
          onChange={this.handleInputChange}
        />{' '}
        <br />
        <button onClick={(e) => this.handleClick(e)}>Signup</button>
      </form>
      {message && <div className='info info-danger'>{message}</div>}
    </div>
  );
}

export default Signup;
