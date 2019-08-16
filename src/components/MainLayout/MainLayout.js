import React from 'react';
import BlockstackLayout from './BlockstackLayout.js';
import {
  BrowserRouter,
  Redirect,
  Route
} from 'react-router-dom';

import {
  Cards,
  EndGame,
  MainMenu,
  NewGame
} from '../../components';

const MainLayout = ({ className }) => (
  <div>
    <BrowserRouter>
      <div className={className}>
        <Route exact path="/" render={() => <Redirect to="/menu" />} />
        <Route path="/new-game" component={NewGame} />
        <Route path="/game" component={Cards} />
        <Route path="/menu" component={MainMenu} />
        <Route path="/end-game" component={EndGame} />
      </div>
    </BrowserRouter>
    <BlockstackLayout />
  </div>
)

export default MainLayout
