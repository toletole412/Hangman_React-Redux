import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import { wrongGuessCount } from '../lib/game'
import './Board.css'

class Board extends PureComponent {
  render() {
    return (
      <div>
        <Title content="Ginger hangman" />
          <div className="hangman">
            <ul className="left" id="head">
              { wrongGuessCount(this.props.word, this.props.guesses) > 0 ?
                (<img src="https://imageshack.com/a/img924/43/v3X4aD.gif" alt="head"/>) : ''
              }
            </ul>
            <ul className="left" id="arms">
              { wrongGuessCount(this.props.word, this.props.guesses) > 1 ?
                (<img src="https://imageshack.com/a/img922/1454/UvzGnf.gif" alt="body"/>) : ''
              }
            </ul>
            <ul className="right" id="arms">
              { wrongGuessCount(this.props.word, this.props.guesses) > 2 ?
                (<img src="https://imageshack.com/a/img924/2823/KxbKw7.gif" alt="body"/>) : ''
              }
            </ul>
            <ul className="left" id="arms">
              { wrongGuessCount(this.props.word, this.props.guesses) > 3 ?
                (<img src="https://imageshack.com/a/img924/3186/qlYVlo.gif" alt="foot"/>) : ''
              }
            </ul>
            <ul className="right" id="foots">
              { wrongGuessCount(this.props.word, this.props.guesses) > 4 ?
                (<img src="https://imageshack.com/a/img923/8052/A8U1Ew.gif" alt="foot"/>) : ''
              }
            </ul>
          </div>
      </div>
    )
  }
}


const mapStateToProps = ({word, guesses }) => ({ word, guesses})


export default connect(mapStateToProps)(Board)
