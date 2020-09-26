import React, { useState } from 'react';
import { Route, Link, NavLink, Switch, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Secret from './components/Secret'
import Login from './components/Login'
import Signup from './components/Signup'
import api from './api'

function App(props) {
  const [countries] = useState([])

  function handleLogoutClick(e) {
    api.logout()
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1 className="App-title">MERN Boilerplate</h1>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/countries">Countries</NavLink>
          <NavLink to="/add-country">Add country</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => handleLogoutClick(e)}>
              Logout
        </Link>
          )}
          <NavLink to="/secret">Secret</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
