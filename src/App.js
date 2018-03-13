import React, { Component } from 'react';
import Board from './containers/Board'
import CreateGameButton from './components/CreateGameButton'
import Guess from './components/Guess'
import Finished from './components/Finished'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="actions">
          <CreateGameButton />
        </div>

        <Board />

        <Guess />

        <Finished />

      </div>
    )
  }
}

export default App;
