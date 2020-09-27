import React, { Fragment } from 'react';
import api from '../api';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavItem,
} from 'react-bootstrap';
import Home from '../pages/Home';
import UserProfile from '../pages/UserProfile';
import EditUserProfile from '../pages/EditUserProfile';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import '../styles/navbar.scss';
import * as firebase from 'firebase';

function NavbarComponent(props) {
  const isSignedIn = props.isSignedIn;
  const setSignedIn = props.setSignedIn;

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar>
          <Navbar.Brand as={Link} to='/'>
            Insightout
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className='mr-auto'></Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Try "Rihanna"'
                className='mr-sm-2'
              />
              {!props.isSignedIn ? (
                <NavItem eventkey={1} href='/'>
                  <Nav.Link as={Link} to='/'>
                    Login
                  </Nav.Link>
                </NavItem>
              ) : (
                <NavItem
                  eventkey={1}
                  href='/'
                  onClick={() => firebase.auth().signOut()}
                >
                  <Nav.Link as={Link} to='/'>
                    Sign Out
                  </Nav.Link>
                </NavItem>
              )}
              <Button variant='outline-success'>Get Started</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route
            path='/'
            render={(props) => (
              <Home isSignedIn={isSignedIn} setSignedIn={setSignedIn}></Home>
            )}
          />
          <Route path='/home' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route exact path='/user-profile' component={UserProfile} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default NavbarComponent;
