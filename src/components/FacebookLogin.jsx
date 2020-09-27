import React from 'react';
import Facebook from 'react-facebook-login';
import api from '../api';

function FacebookLogin(props) {
  let fbcontent;

  if (props.isLoggedIn) {
    fbcontent = null;
  } else {
    fbcontent = (
      <Facebook
        appId="971647000004124"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }

  function responseFacebook(response) {
    console.log(response);
    let user = {
      username: response.name,
      email: response.email,
      profileUrl: response.picture.data.url,
    };
    props.setLoggedIn(true);
    api.signup(user);
  }

  function componentClicked() {}

  return (
    <div className="FacebookLogin">
      <div>{fbcontent}</div>
    </div>
  );
}

export default FacebookLogin;
