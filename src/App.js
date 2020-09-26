import React from 'react';
import Navbar from './components/NavbarComponent';

function App(props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
        <h1 className='App-title'>MERN Boilerplate</h1>
      </header>
    </div>
  );
}

export default App;
