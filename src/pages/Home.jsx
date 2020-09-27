import React, { Fragment } from 'react';
import SignIn from '../components/SignIn';
import Portrait from '../assets/smiley-girl.jpg';
import Portrait1 from '../assets/portrait.jpg';
import Dashboard from '../assets/dashboard.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import '../styles/home.scss';

function Home(props) {
  return (
    <Fragment>
      <div className="home">
        <div
          className="header"
          style={{
            backgroundImage: `url(${Dashboard})`,
            backgroundSize: '50% auto',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="header-container">
            <div className="home-header">#Insightout</div>
            <div className="subheader">
              Find you favorite influencer. Grab data and go.
            </div>
            <div className="get-started-btn-ctn">
              <button className="get-started-btn">
                <div className="btn-message">Get Started</div>
              </button>
            </div>
          </div>
        </div>
        {props.isSignedIn ? (
          false
        ) : (
          <div className="section-container">
            <SignIn
              setSignedIn={props.setSignedIn}
              isSignedIn={props.isSignedIn}
            ></SignIn>
          </div>
        )}
      </div>
      <div className="section-container-2">
        <div className="cards row-one">
          <img src={Portrait} alt="smiley-girl"></img>
        </div>
        <div className="cards row-two">
          <div className="card-container">
            <h1>Connect With Your Customers</h1>
            <div className="icon-container">
              <FontAwesomeIcon icon={faHandshake} className="icon" />
            </div>
            <h3>
              Connect with your customer with your social portfolio and showcase
              your work in one link.
            </h3>
          </div>
        </div>
        <div className="cards row-one">
          <img src={Portrait1} alt="smiley-girl"></img>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
