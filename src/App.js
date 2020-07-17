import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import NavList from './components/navList';
import Home from './components/home';
import Cart from './components/cart';
import url from 'url';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header nav={<NavList />} />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/cart"><Cart /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;