import React from 'react';
import './index.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from './components/home-screen/HomeScreen';
import Navbar from './components/navbar/Navbar';
import NewSet from './components/new-set/NewSet';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <div className="App-container">
      <Navbar />
      <Container>
        <Switch>
          <Route path="/home-screen">
            <HomeScreen />
          </Route>
          <Route path="/new-set">
            <NewSet />
          </Route>
          <Route path="/">
            <Redirect to="/home-screen" />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
