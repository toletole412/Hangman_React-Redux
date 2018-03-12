//need to refactor + (finish, randomWord..)

export const wrongGuessCount = (word, guesses) => {
  const characters = guesses.filter( guess => word.indexOf(guess) === -1 )
  return characters.length
}

export const showGuess = (word, guesses) => {
  const show_array = word.split('').map( char => guesses.includes(char)? char : '_' )
  return show_array.join(' ')
}

export const isWinner = (word, guesses) => {
  return showGuess(word, guesses) == word.split('').join(' ') ? true : false
}

export const Finish = (word, guesses) => {
  return (wrongGuessCount(word, guesses) === 6 || isWinner(word, guesses))
}

const wordCandidate = [
  'docker', 'water', 'cookie', 'mandarine', 'watermelon', 'weather',
  'wallet', 'orange', 'friendship', 'grandmother', 'shower', 'urban',
  'lottery', 'ginger', 'chocolate', 'plumber', 'nurse', 'aloha', 'table',
  'amsterdam', 'seoul', 'shanghai', 'earth', 'planet', 'green', 'singer',
  'candy', 'libstick', 'eyeshadow', 'denim', 'notebook', 'laptop'
]

export const randomWord = (wordCandidate) => {
  return wordCandidate[Math.floor(Math.random() * wordCandidate.length)]
}

//Do i need more function?... think!
