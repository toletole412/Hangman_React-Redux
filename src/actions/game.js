import { CREATE_GAME, GUESS } from './types'


export const guess = (guessValue) => ({
  type: GUESS,
  payload: guessValue
})
