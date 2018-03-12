import React, { PureComponent } from 'react'
import './Board.css'

class Board extends PureComponent {
  render() {
    return (
      <div>
        <Title content="Ginger hangman" />
        <ShowGuess />
        <ul className="left" id="head">
            (<img src="https://imageshack.com/a/img924/43/v3X4aD.gif" alt="head"/>)
          }
        </ul>
        <ul className="left" id="arms">
          <img src="https://imageshack.com/a/img922/1454/UvzGnf.gif" alt="body"/>
          <img src="https://imageshack.com/a/img924/2823/KxbKw7.gif" alt="body"/>
        </ul>
        <ul className="left" id="foots">
          <img src="https://imageshack.com/a/img924/3186/qlYVlo.gif" alt="foot"/>
          <img src="https://imageshack.com/a/img923/8052/A8U1Ew.gif" alt="foot"/>
        </ul>
      </div>
    )
  }
}

export default Board
