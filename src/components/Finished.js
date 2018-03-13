import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isWinner, Finish } from '../lib/game'
import CreateGameButton from './CreateGameButton'
import './Finished.css'

export class Finished extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  renderFinished = () => {
    const { word, guesses } = this.props

    if (isWinner(word, guesses))
      return (
        <div className="Finished">
          <div className="dialog">
            <h1>Well Done!</h1>
            <p>Congrats on finishing the game!</p>
            <div className="actions">
              <CreateGameButton label="Play again!" />
            </div>
          </div>
        </div>)

    if (Finish(word, guesses))
      return (
        <div className="Finished">
          <div className="dialog">
            <h1>Poor you!</h1>
            <p>try again?</p>
            <div className="actions">
              <CreateGameButton label="Play again!" />
            </div>
          </div>
        </div>)
    return null
  }

  render() {
    return(
        <div>
          {this.renderFinished()}
        </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Finished)
