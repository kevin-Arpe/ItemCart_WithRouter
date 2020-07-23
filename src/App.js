import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import NavList from './components/navList';
import Home from './components/home';
import Cart from './components/cart';
import Shopping from './components/shopping';
import Contributors from './components/contribute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      items: [
        {id: 1, text: 'carrot', price: 2.3, num: 0, input: ''},
        {id: 2, text: 'apple', price: 1.2, num: 0, input: ''},
        {id: 3, text: 'leaf', price: 0.6, num: 0, input: ''},
        {id: 4, text: 'lemon', price: 2.62, num: 0, input: ''}
      ]
    });
  }

  handleChange = (e, id) => {
    const { items } = this.state;
    const index = items.findIndex( (item) => item.id === id);
    const selected = items[index];
    const next_items = [...items];

    next_items[index] = {
      ...selected,
      input: e.target.value
    }

    this.setState({items: next_items});
  }
  
  handleSubmit = (e,id) => {
    e.preventDefault();
    const { items } = this.state;
    const index = items.findIndex( (item) => item.id === id);
    const selected = items[index];
    const input = selected.input;
    const next_items = [...items];

    next_items[index] = {
      ...selected,
      num: input,
      input: ''
    }

    this.setState({
      items: next_items
    });
  }

  render() {
    const { items } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="App">
        <Header nav={<NavList />} />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/contributes"><Contributors /></Route>
          <Route path="/shopping"><Shopping items={items} onChange={handleChange} onSubmit={handleSubmit} /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;