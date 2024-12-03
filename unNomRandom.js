//Create a function that displays a word one character at a time, 
//with each letter appearing after a 1-second delay (on a new line).

/*function eachLetter(mot, interval) {
    let index = 0

    let eachLetter = setInterval(() => {
        if(index < mot.length){
            console.log(mot[index])
            index++ 
        }else{
            console.log('---------')
            clearInterval(eachLetter)
        }
    }, interval)
}

eachLetter('bonjour', 500)

const { OutgoingMessage } = require('http')

*/
/**
 * You will build a number guessing game where the player has a limited amount of time to guess a randomly generated number.

How the game works:

The game picks a random number between 1 and 10.
The player has 10 seconds to guess the number.
The player can input guesses, and after each guess, they’re told if their guess is too high, too low, or correct.
If they guess correctly or run out of time, the game ends.
hint: your good friend readline is back
 */

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function comparison(gameNumber, guess) {
    let message = ''

    if(guess > gameNumber){
        message = 'Your number is too high. '
    }else if(guess < gameNumber){
        message = 'Your number is too low. '
    }else if (guess === gameNumber){
        message = 'Your number is correct! '
    }

    return console.log(message)
}

function guessNumber() {
    let gameNumber = Math.floor(Math.random() * 10 + 1)

    console.log('You have ten seconds to guess a number between 1 and 10. \n')

    const timeoutId = setTimeout(() => {
        console.log("\nTime's up! You lost. The correct number was: " + gameNumber)
        rl.close()
    }, 10000)

    function askGuess() {
        rl.question('Guess the number: ', (guess) => {
            guess = parseInt(guess)

            if(guess === gameNumber){
                clearTimeout(timeoutId)
                comparison(gameNumber, guess)
                rl.close()
            }else if(guess > gameNumber){
                comparison(gameNumber, guess)
                askGuess()
            }else if(guess < gameNumber){
                comparison(gameNumber, guess)
                askGuess()
            }else{
                console.log("Erreur")
            }
        })
    }

    askGuess()
}

guessNumber()