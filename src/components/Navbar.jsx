import React from 'react';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <h1>Insight Tools</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Look for your favorite influencer"
        ></input>
      </div>
      <div className="signin">
        <button id="login">Login</button>
        <button id="get-started">Get Started</button>
      </div>
    </div>
  );
}

export default Navbar;
