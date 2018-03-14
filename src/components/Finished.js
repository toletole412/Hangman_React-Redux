import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isWinner, Finish } from '../lib/game'
import './Finished.css'

export class Finished extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  renderFinished = () => {
    if (isWinner(this.props.word, this.props.guesses))
      return (
        <div className="Finished">
          <div className="dialog">
            <h1>Well Done!</h1>
            <p>Congrats on finishing the game!</p>
          </div>
        </div>)

    if (Finish(this.props.word, this.props.guesses))
      return (
        <div className="Finished">
          <div className="dialog">
            <h1>Poor you!</h1>
            <p>try again?</p>
            <img src="https://imagizer.imageshack.com/v2/1024x768q90/923/x5uF2K.jpg" />
          </div>
        </div>)
    return null
  }

  render() {
    return(
        <div>
          {this.renderFinished(this.props.word, this.props.guesses)}
        </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Finished)
