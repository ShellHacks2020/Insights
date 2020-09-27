import React, { Fragment } from 'react';
import IconContainers from '../components/IconContainers';
import '../css/Home.css';

function Home() {
  return (
    <Fragment>
      <div className='home'>
        <div className='home-header'>#Insightout</div>
        <div className='subheader'>
          Find you favorite influencer. Grab data and go.
        </div>
        <div className='get-started-btn-ctn'>
          <button className='get-started-btn'>
            <div className='btn-message'>Get Started</div>
          </button>
        </div>
      </div>
      <IconContainers />
    </Fragment>
  );
}

export default Home;
