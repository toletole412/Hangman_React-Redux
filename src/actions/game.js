import { CREATE_GAME, GUESS } from './types'

export const createGame = () => {
  return {
    type: CREATE_GAME
  }
}
/* keyboard later
export const guessletter = letter => {
  return {
    type: GUESS,
    paylad: letter
  }
}
*/

export const guess = (guessValue) => ({
  type: GUESS,
  payload: guessValue
})
