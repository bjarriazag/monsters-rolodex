import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.compoment';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState({ monsters: users });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
