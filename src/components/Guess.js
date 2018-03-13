import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guess } from '../actions/game'
import { showGuess } from '../lib/game'
import './Guess.css'

class Guess extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  handleChange = (e) => {
    e.preventDefault()
    this.props.guess(e.target.value)
    e.target.value = ''
  }

  render() {
    const { word, guesses } = this.props
    return (
      <div>
        <label>
          guess:
          <input type="text" onChange={this.handleChange} />
        </label>
        <ul className="ShowGuess">
          { showGuess(word, guesses) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({word, guesses }) => ({ word, guesses})

export default connect(mapStateToProps, { guess })(Guess)
