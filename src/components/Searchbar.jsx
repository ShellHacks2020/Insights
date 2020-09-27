import React, { Fragment } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import '../styles/searchbar.scss';

function Searchbar() {
  return (
    <Fragment>
      <div className='searchbar-ctn'>
        <InputGroup className='mb-3'>
          <FormControl placeholder='Try #HealthyConversations' />
        </InputGroup>
      </div>
    </Fragment>
  );
}

export default Searchbar;
