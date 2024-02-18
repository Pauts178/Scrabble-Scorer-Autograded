// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

let word = ''
let pick = 0

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
	word = word.toLowerCase();
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
   word = input.question("Enter a word to be scored: ");
   return word
};

function simpleScorer(word) {
   let score = 0
   score = word.length
   return score
};
//function where each letter is worth 1 point

function vowelBonusScorer(word) {
   let vowelScore = 0
   let vowels = ['a', 'e', 'i', 'o', 'u'];
   let stringVowels = '';
   let stringConsonants = '';
   word = word.toLowerCase();
      
       for (let i = 0; i < word.length; i++) {
           if (!vowels.includes(word[i])) {
               stringConsonants += word[i]
           } else {
               stringVowels += word[i]
           }
           vowelScore = (stringVowels.length * 3) + stringConsonants.length
       }  
       return vowelScore
};
//function where each vowel is worth 3 points, each consonant is worth 1 point

function scrabbleScorer(word) {
   let scrabbleScore = 0
   word = word.toLowerCase()
   for (let i = 0; i < word.length; i++) {
       for (letter in newPointStructure) {
           if(letter.includes(word[i])) {
               scrabbleScore += newPointStructure[letter];
           }
           }
       }
       return scrabbleScore
   };

let simpleAlg = {
   name: 'Simple Score',
   description: 'Each letter is worth 1 point.',
   scorerFunction: simpleScorer
}; 

let bonusVowelAlg = {
   name: 'Bonus Vowels',
   description: 'Vowels are worth 3 pts, consonants are worth 1 pt.',
   scorerFunction: vowelBonusScorer
};

let traditionalAlg = {
   name: 'Scrabble',
   description: 'The traditional scoring algorithm.',
   scorerFunction: scrabbleScorer
};

const scoringAlgorithms = [simpleAlg, bonusVowelAlg, traditionalAlg];
// // three objects, each with three keys: name, description, scoringFunction

function scorerPrompt() {
   pick = input.question('Which scoring system would you like to use? \n 0 - Simple Scorer \n 1 - Vowel Bonus \n 2 - Traditional Scrabble\n');
   return scoringAlgorithms[pick];
};

function transform(object) {
   const rearrangedObject = {};
   for ([letterValue, letterArr] of Object.entries(object)) {
      for (letter of letterArr) {
      rearrangedObject[letter.toLowerCase()] = Number(letterValue);
   }
}
return rearrangedObject   
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt ();
   console.log(`Score for '${word}': ${scoringAlgorithms[pick].scorerFunction(word)} `)
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
