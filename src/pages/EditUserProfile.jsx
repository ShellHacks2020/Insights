import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/editUser.scss';

function EditUserProfile(props) {
  function updateUserInfo() {
    const NewUser = {
      displayName: name,
      email: email,
      location: location,
      photoURL: props.user.photoURL,
    };
    console.log(props.user);
    props.setUser(NewUser);
    console.log(props.user);
    // window.location.href = '/profile';
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  return (
    <div>
      <div className="edit-profile">
        <img
          alt="profile"
          className="edit-profile-pic"
          src={props.user.photoURL}
        />
        <div className="edit-profile-info-ctn">
          {' '}
          <div className="edit-profile-name">
            Welcome, {props.user.displayName}!
          </div>
        </div>
        <div>Tell us more about you...</div>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add Your Name"
              value={name}
              onChange={handleName}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Add Your Email"
              value={email}
              onChange={handleEmail}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add Your Location"
              value={location}
              onChange={handleLocation}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Website</Form.Label>
            <Form.Control type="email" placeholder="Add Your Website" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Twitter</Form.Label>
            <Form.Control type="email" placeholder="Add Your Twitter Account" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Facebook</Form.Label>
            <Form.Control
              type="email"
              placeholder="Add Your Facebook Account"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>YouTube</Form.Label>
            <Form.Control type="email" placeholder="Add Your YouTube Account" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>TikTok</Form.Label>
            <Form.Control type="email" placeholder="Add Your TikTok Account" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={updateUserInfo}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditUserProfile;
