import React, { Fragment, useState } from 'react';
import api from '../api';
import { Route, Link, NavLink, Switch, BrowserRouter } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../pages/Home';
import Secret from '../pages/Secret';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function NavbarComponent() {
  function handleLogoutClick(e) {
    api.logout();
  }

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar bg='light' variant='light'>
          <Nav className='mr-auto'>
            <NavLink to='/' exact>
              Home
            </NavLink>
            {!api.isLoggedIn() && <NavLink to='/signup'>Signup</NavLink>}
            {!api.isLoggedIn() && <NavLink to='/login'>Login</NavLink>}
            {api.isLoggedIn() && (
              <Link to='/' onClick={(e) => handleLogoutClick(e)}>
                Logout
              </Link>
            )}
            <NavLink to='/secret'>Secret</NavLink>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-primary'>Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/secret' component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default NavbarComponent;
