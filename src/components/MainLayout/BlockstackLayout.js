import React from "react";
import Profile from './Profile.jsx';
import Signin from './Signin.jsx';
import {
  UserSession,
  AppConfig
} from 'blockstack';

const appConfig = new AppConfig(['store_write', 'publish_data'])
const userSession = new UserSession({ appConfig: appConfig })

const handleSignIn = (e) => {
  e.preventDefault();
  userSession.redirectToSignIn();
}

const handleSignOut = (e) => {
  e.preventDefault();
  userSession.signUserOut(window.location.origin);
}

class BlockstackLayout extends React.Component {
  componentWillMount() {
    if (userSession.isSignInPending()) {
      userSession
        .handlePendingSignIn()
        .then(() => {
          window.location = window.location.origin;
        })
        .catch(err => console.log(err));
    }
  }
	
  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          { !userSession.isUserSignedIn() ?
            <Signin userSession={userSession} handleSignIn={ handleSignIn } />
            : <Profile userSession={userSession} handleSignOut={ handleSignOut } />
          }
        </div>
      </div>
    );
  }
}

export default BlockstackLayout;
