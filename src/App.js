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
      total: {num: 0, price: 0},
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
  
  handleClick = (e,id) => {
    e.preventDefault();
    const { total, items } = this.state;
    const index = items.findIndex( (item) => item.id === id);
    const selected = items[index];
    const input = parseInt(selected.input);
    const next_items = [...items];
    const next_total = {...total};

    next_items[index] = {
      ...selected,
      num: input,
      input: ''
    }

    const total_num = parseInt(next_total.num) + input;
    const total_price = (next_total.price + input*selected.price).toFixed(2);

    this.setState({
      total: {num: total_num, price: parseFloat(total_price)},
      items: next_items
    });
  }

  handleSubmit = () => {
    const { total, items } = this.state;
    const filtered_items = items.filter( (item) => item.num !== 0);
    
    localStorage.setItem('total_num', total.num);
    localStorage.setItem('total_price', total.price);
    localStorage.setItem('items', JSON.stringify(filtered_items));

    const next_items = [...items];
    next_items.map( (item) => {
      item.num = 0;

      return item;
    });

    this.setState({
      total: {num: 0, price: 0},
      items: next_items
    });
  }

  render() {
    const { total, items } = this.state;
    const { handleChange, handleClick, handleSubmit } = this;

    return (
      <div className="App">
        <Header nav={<NavList />} />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/contributes"><Contributors /></Route>
          <Route path="/shopping"><Shopping total={total} items={items} onChange={handleChange} onClick={handleClick} onSubmit={handleSubmit} /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;