'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

/*
const generateHint = () =>  {
  // your code here
  //split up the solution for comparison
  let splSol = solution.split('');
  console.log(splSol);
  //split up the guess for comparison

  //filter out how many times each of the solutions letters are in the guess

  
  //if zero return (0-0)
  
}
*/
//variables declared up here

// const generateHint = (guess) =>  {
//   let rtIdx = 0;//counter for right guess 
//   let wrIdx = 0;//counter for right letter wrong index
//   //split up the solution for comparison
//   let spSol = solution.split('');
//   console.log(`array of solution letters is: ${spSol}`);
  
//   //split up the guess for comparison
//   let spGs = guess.split('');
//   console.log(`array of guess letters is: ${spGs}`);

//   //create a function that takes in an array, and a query and filters out the query elements from that array
//   const filterGuess = (arr, query) =>{
//     return arr.filter(el => el.indexOf(query) !== -1)
//   };

//   const getSum = (total, el)=>{
//     return total + el;
//   };
  
//   //filter out how many times each of the guess letters are in the solution
//   //look for number of first letter
//   let guess1 = spGs[0];
//   let arrGs1 = filterGuess(spSol, guess1);
//   let lnGs1 = arrGs1.length;
//   console.log(`guess1 letter is ${guess1}`);
//   console.log(`array of guess1 is ${arrGs1}`);
//   console.log(`number of guess1 is ${lnGs1}`);
//   // look for number of second letter
//   let guess2 = spGs[1];
//   let guess3 = spGs[2];
//   let guess4 = spGs[3];
//   let arrGs2 = filterGuess(spSol, guess2);
//   let lnGs2 = arrGs2.length;
//   let arrGs3 = filterGuess(spSol, guess3);
//   let arrGs4 = filterGuess(spSol, guess4);
//   let lnGs3 = arrGs3.length;
//   let lnGs4 = arrGs4.length;
//   console.log(`array of guess2 is ${arrGs2}`);
//   console.log(`number of guess2 is ${lnGs2}`);
  
//   let numGs1 = spSol.reduce(getSum(guess1));
//   console.log(`guess 1 reduced to numGs1 ${numGs1}`);

//   // look for number of 3rd letter
//   // look for number of 4th letter
//   // compare first letter and index
//   //compare 2nd letter and index
//   // compare 3rd letter and index
//   //compare 4th letter and index
  
//   //if zero return (0-0)

//   //desired output (4-0), (3-1)(2-2) etc.


//   //create a for loop that takes in the split array and split guess in a function
//   //loops through length of the solution array
//   for(let i=0; i<spSol.length; i++){
    
//     //if guess letter is right index and letter
//     //increase rtIdx counter
//     if(spSol[i]===spGs[i]){
//       console.log(`1 count of ${spGs[i]} added to rtIdx`)
//       rtIdx += 1;
    
//     }else{
//       //create an array of all the letters from solution, that match the guess letter
//       let arrSolLtr = filterGuess(spSol, spGs[i]);
//       //get length of the array of matching solution letters
//       let lnSolLtr = arrSolLtr.length;

//       //create an array of all the letters from the guess, that match the guess letter
//       let arrGsLtr = filterGuess(spGs, spGs[i]);
//       //get length of the array of matching guess letters
//       let lnGsLtr = arrGsLtr.length;

//       //compare if guess has duplicates
//       if(lnGsLtr > 1 && i == 0){
//         //if so make adjustment to count
//         wrIdx -= 1;
//         //if not do nothing
//       };
//       //compare if solution has duplicates???

      
//       if(lnSolLtr === 1){ //***need to add && comparison to make sure length of the guess letter array is not greater than length of the solution letter array***
//         console.log(`1 count of ${spGs[i]} added to wrIdx`);
//         wrIdx += 1;
//         // return wrIdx;
//       }else if(lnSolLtr === 2){
//         console.log(`2 counts of ${spGs[i]} added to wrIdx`);
//         wrIdx += 2;
//         // return wrIdx;
//       }else if(lnSolLtr === 3){
//         console.log(`3 counts of ${spGs[i]} added to wrIdx`);
//         wrIdx += 3;
//         // return wrIdx;
//       }else if (lnSolLtr === 4){
//         console.log(`4 counts of ${spGs[i]} added to wrIdx`);
//         wrIdx += 4;
//         // return wrIdx;
//       }else{
//         console.log(`nothing added`);
//       }
//     }
//     //else if guess letter is right index
//     //increase wrIdx counter

//     //
//   }
//   //returns the hint to the screen
// console.log(`${rtIdx}-${wrIdx}`);
//   return `${rtIdx}-${wrIdx}`;
// }

const checkForWin = (guess, solution) => {
  if(guess === solution){
    return true;
  }

};

const generateHint = (guess) =>{
  let guessArray = guess.split('');
  let solutionArray = solution.split('');
  let correctLetter = 0;
  let correctPlace = 0;

  for(let i =0; i<4; i++){
    if(guessArray[i]===solutionArray[i]){
      correctPlace++;
      guessArray[i] = 1;
      solutionArray[i] = 0;

      console.log(`correctPlace is ${correctPlace}`);
    }
  };

  for(let i =0; i<4; i++){
    for(let ii=0; ii<4; ii++){
      if(guessArray[ii]===solutionArray[i]){
        correctLetter++; //if letter is found increase counter
        guessArray[i] = 1;
        solutionArray[ii] = 0;

      }
    }
  };

  return `${correctPlace}-${correctLetter}`;

}

const mastermind = (guess) => {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  //generate hint should return a (0-0) format hint
  let hint = generateHint(guess);
  let guessPlus = guess+' '+hint;
  //assign the guess to the board for the game
  board.push(guessPlus);
  //create the win conditions for comparison between solution and guess variables
  if(guess === solution){ // if the guess is exactly like the solution, return win
    console.log("You guessed it!");
    return 'You guessed it!';
  }else{ //else return false and keep playing
    return false;
  }
}


const getPrompt = () =>  {
  console.log("Begin by guessing an answer of letters between a-h");
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    if(checkForWin(guess, solution)==true){
      return;
    };
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}