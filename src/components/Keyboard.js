import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guessletter } from '../actions/game'
import './Kyeboard.css'

const letters = [
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
  ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'],
  ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
];

class Keyboard extends PureComponent {
  static propTypes = {
    guessletter: PropTypes.func.isRequired
  }

  createButton = (letter) => {
    return <button
      key={`input_${letter}`}
      type='button'
      className="letterStyle"
      disabled=""
      onClick={() => this.props.onClick(letter)}
    >{letter}</button>;
  }

  render() {
    return <div>
      {letters.map(row =>
        <div className='rowStyle'>
          {row.map(letter => this.createButton(letter))}
        </div>
      )}
    </div>;
  }
}
//connect to redux ?
export default connect(null, { guessletter })(Keyboard)
