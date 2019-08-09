import React from 'react'
import { Link } from 'react-router-dom'
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

const MainMenu = ({ className }) => (
  <div>
    <div className={className}>
      <ul>
        <li>
          <Link to="/game">Resume game</Link>
        </li>
        <li>
          <Link to="/new-game">New game</Link>
        </li>
      </ul>
    </div>

    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        { !userSession.isUserSignedIn() ?
          <Signin userSession={userSession} handleSignIn={ handleSignIn } />
          : <Profile userSession={userSession} handleSignOut={ handleSignOut } />
        }
      </div>
    </div>
  </div>
)

export default MainMenu
