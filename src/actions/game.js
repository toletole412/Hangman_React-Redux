import { CREATE_GAME, GUESS } from './types'
import randomWord from '../lib/game'

export const createGame = () => {
  return {
    type: CREATE_GAME
  }
}
