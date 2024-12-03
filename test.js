// ### exo 2 Timer-Based Guessing Game

// You will build a number guessing game where the player has a limited amount of time 
//to guess a randomly generated number.

// How the game works:

// *   The game picks a random number between 1 and 10.
// FONCTION POUR OBTENIR UN NOMBRE ALEATOIRE :
function getRandomNumber(min,max){
    const minimalNumberCeiled = Math.ceil(min)
    const maxNumberFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxNumberFloored - minimalNumberCeiled + 1) + minimalNumberCeiled)
}
console.log(getRandomNumber(1,10))

// Je crée une variable dans laquelle sera stocké le nombre aléatoire,
// grâce à la fonction que j'ai créé plus haut :
const randomNumber = getRandomNumber(1,10)
console.log(randomNumber)





// ** The player has 10 seconds to guess the number.
function setTimerLimit(value){


}
// guessNumber
// setTimeout = 10000


// *** The player can input guesses, and after each guess, 

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,  // Lire les entrées utilisateur
    output: process.stdout // Afficher les sorties
})

rl.question("Devine le chiffre choisit !", (reponse) => {
    console.log(`Entre un chiffre compris entre ${min} et ${max}`, (reponse))
    rl.close() // Ferme l'interface readline
})
//rl.question(question, callback)
//question : La question affichée à l’utilisateur.
//callback : Une fonction appelée avec la réponse de l’utilisateur.


// créer un readline, user doit guess le nombre
// they’re told if their guess is too high, too low, or correct.
// après chaque guess il faut indiquer si il est trop bas / trop haut OU correct

// **** If they guess correctly or run out of time, the game ends.
// SI guessUserInput = correct => END
// SI TIMEOUT => END

// -------------------- hint: your good friend readline is back

// ## Done? 

// Go to the next chapter: [promises.md](promises.md)




// Mes Notes :

// Une promesse (Promise) est soit en :

// pendig => cela veut dire qu'elle est en attente
// fullfilled => cela veut dire qu'elle est Tenue(honorée,validée)
// rejected => cela veut dire qu'elle est rejetée