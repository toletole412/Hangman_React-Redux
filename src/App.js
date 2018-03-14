import React, { Component } from 'react';
import Board from './containers/Board'
import Guess from './components/Guess'
import Finished from './components/Finished'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Guess />

        <Board />

        <Finished />

      </div>
    )
  }
}

export default App;
