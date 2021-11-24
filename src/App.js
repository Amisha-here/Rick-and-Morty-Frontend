import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Page from './components/Page';
import Saved from './components/Saved';
import Auth from './components/Auth/Auth'

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Page} />
        <Route path="/saved" exact component={Saved} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
