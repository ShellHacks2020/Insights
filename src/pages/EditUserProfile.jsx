import React from 'react';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import '../styles/userprofile.scss';

function EditUserProfile(props) {
  return (
    <div className='edit-profile'>
      <img
        alt='profile'
        className='edit-profile-pic'
        src={firebase.auth().currentUser.photoURL}
      />
      <div className='edit-profile-info-ctn'>
        {' '}
        <div className='edit-profile-name'>
          Welcome, {firebase.auth().currentUser.displayName}!
        </div>
      </div>
      <div>Tell us more about you...</div>
      <Form>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Add Your Name' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Add Your Email' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Location</Form.Label>
          <Form.Control type='email' placeholder='Add Your Location' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Birthday</Form.Label>
          <Form.Control type='email' placeholder='MM/DD/YYYY' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Website</Form.Label>
          <Form.Control type='email' placeholder='Add Your Website' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Twitter</Form.Label>
          <Form.Control type='email' placeholder='Add Your Twitter Account' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Facebook</Form.Label>
          <Form.Control type='email' placeholder='Add Your Facebook Account' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>YouTube</Form.Label>
          <Form.Control type='email' placeholder='Add Your YouTube Account' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>TikTok</Form.Label>
          <Form.Control type='email' placeholder='Add Your TikTok Account' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditUserProfile;
