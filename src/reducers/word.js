import { GUESS } from '../actions/types'

const initialState = [
  'docker', 'water', 'cookie', 'mandarine', 'watermelon', 'weather',
  'wallet', 'orange', 'friendship', 'grandmother', 'shower', 'urban',
  'lottery', 'ginger', 'chocolate', 'plumber', 'nurse', 'aloha', 'table',
  'amsterdam', 'seoul', 'shanghai', 'earth', 'planet', 'green', 'singer',
  'candy', 'libstick', 'eyeshadow', 'denim', 'notebook', 'laptop'
]

export default (state = initialState[Math.floor(Math.random() * initialState.length)], { type } = {}) => {
    switch (type) {
      case GUESS:
        return state

      default:
        return state
    }
  }
