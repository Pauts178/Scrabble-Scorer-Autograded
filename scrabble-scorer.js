// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!\n" );
   let word = input.question("Enter a word to be scored: ");
   console.log(oldScrabbleScorer(word));
//oldScrabbleScorer inside initialPrompt?!?!
};

function simpleScorer(word) {
   let score = 0
   score = word.length
  return score
};
//function where each letter is worth 1 point

function vowelBonusScorer(word) {
   let vowels = ['a', 'e', 'i', 'o', 'u'];
   wordArr = word.toLowerCase().split('');
   for (let i = 0; i < word.length; i++) { 
   }
};
//function where each vowel is worth 3 points, each consonant is worth 1 point

let scrabbleScorer;

const scoringAlgorithms = [];
// three objects, each with three keys: name, description, scoringFunction

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   let word = initialPrompt();

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
