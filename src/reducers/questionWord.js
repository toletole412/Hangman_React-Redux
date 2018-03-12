import { CREATE_GAME } from '../actions/types'
import { randomWord, wordCandidate } from '../lib/game'

//should i put argument inside randomWord
export default (state = undefined, action) => {
  switch (action.type) {
    case 'CREATE_GAME':
      return randomWord(wordCandidate);
    default:
      return state || randomWord(wordCandidate);
  }
}
