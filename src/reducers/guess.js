import { CREATE_GAME, GUESS } from '../actions/types'


export default (state = [], { type, payload } = {}) => {
    switch (type) {
      case GUESS:
        return state.concat(payload)

      case CREATE_GAME:
        return state = []

      default:
        return state
    }
  }
