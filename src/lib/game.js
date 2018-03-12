//need to refactor + (finish, randomWord..)

function wrongGuessCount(word, guesses) {
  var characters = guesses.filter( guess => word.indexOf(guess) === -1 )
  return characters.length
}

console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2)


function showGuess(word, guesses) {
  var show_array = word.split('').map( char => guesses.includes(char)? char : '_' )
  return show_array.join(' ')
}

console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')


function isWinner(word, guesses) {
  return showGuess(word, guesses) == word.split('').join(' ') ? true : false
}

console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))


function next(word, guesses) {
  if (wrongGuessCount(word, guesses) < 6)
    isWinner(word, guesses)
    ? console.log("you win")
    : console.log("you lost")

  rl.question('next letter? ', answer => {
      console.log('player wrote:', answer)
    })
}
