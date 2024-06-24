const readline = require('node:readline');
const readlinePromises = require('node:readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const rlp = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
/* **** LEVEL 0 **** */
// Output: "Hello, World!"
function outputHelloWorld() {
  console.log('Hello, World!');
}
// outputHelloWorld();

/* **** LEVEL 1 **** */
// Output: A value from an Input
function outputValueFromInput() {
  rl.question(`Type something: `, (typed) => {
    console.log(`You typed: "${typed}"`);
    rl.close();
  });
}
// outputValueFromInput();

// Inputs: character, place | Output: A short story using character and place
async function crazyStory() {
  const character = await rlp.question('Character: ');
  const place = await rlp.question('Place: ');
  rlp.close();

  console.log(
    `In ${place}, ${character}, a young journalist, hurried through the rain-soaked streets. She was chasing a lead on a historic mystery tied to an old, abandoned mansion in Kensington. Arriving, she pushed open the creaking door and stepped into the dimly lit hall. Dust covered the grand staircase, and cobwebs hung from chandeliers. ${character}'s heart raced as she discovered a hidden room behind a bookcase. Inside, she found diaries and letters detailing a secret love affair between a noblewoman and a commoner. As she read, ${character} realized this story could change everything she knew about ${place}’s history. She smiled, feeling the thrill of the discovery.`
  );
}
// crazyStory();

/* **** LEVEL 2 **** */
// Input: A number | Output: Increment 4 of the number
function incrementNumber() {
  rl.question(`Type a number: `, (input) => {
    const number = parseInt(input);
    console.log(number + 4);
    rl.close();
  });
}
// incrementNumber();

// Input: A number | Output: Decrement 4 of the number
function decrementNumber() {
  rl.question(`Type a number: `, (input) => {
    const number = parseInt(input);
    console.log(number - 4);
    rl.close();
  });
}
// decrementNumber();

// Input: A number | Output: The double of the number
function doubleNumber() {
  rl.question(`Type a number: `, (input) => {
    const number = parseInt(input);
    console.log(number * 2);
    rl.close();
  });
}
// doubleNumber();

// Input: A number | Output: The half of the number
function halfNumber() {
  rl.question(`Type a number: `, (input) => {
    const number = parseInt(input);
    console.log(number / 2);
    rl.close();
  });
}
// halfNumber();

// Input: A number | Output: The square of the number
function squareNumber() {
  rl.question(`Type a number: `, (input) => {
    const number = parseInt(input);
    console.log(number ** 2);
    rl.close();
  });
}
// squareNumber();

// Input: A number | Output: Module of 2 of the number
function moduleNumber() {
  rl.question(`Type a number: `, (input) => {
    const number = parseInt(input);
    console.log(number % 2);
    rl.close();
  });
}
// moduleNumber();

// Input: A number | Output: The triple of the number add 4
function tripleNumberAdd() {
  rl.question(`Type a number: `, (input) => {
    const number = parseInt(input);
    console.log(number * 3 + 4);
    rl.close();
  });
}
// tripleNumberAdd();

/* **** LEVEL 3 **** */
// Input: A number | Output: Positive, negative or zero
function isPositiveNegativeOrZero() {
  rl.question(`Type a number: `, (input) => {
    const number = parseInt(input);
    if (number > 0) {
      console.log(`The number ${number} is positive`);
    } else if (number < 0) {
      console.log(`The number ${number} is negative`);
    } else {
      console.log(`The number ${number} is zero`);
    }
    rl.close();
  });
}
// isPositiveNegativeOrZero();

// Input: A number | Output: Is even, odd or zero
function isEvenOddOrZero() {
  rl.question(`Type a number: `, (input) => {
    const number = parseInt(input);
    if (number === 0) {
      console.log(`The number ${number} is zero`);
    } else {
      if (number % 2 === 0) {
        console.log(`The number ${number} is even`);
      } else {
        console.log(`The number ${number} is odd`);
      }
    }
    rl.close();
  });
}
// isEvenOddOrZero();

// Input: A number | Output: Is or not prime number
function primeNumber() {
  rl.question(`Type a number: `, (input) => {
    const number = parseInt(input);
    if (number === 1) {
      console.log(
        `The number ${number} has only one divisor, which is itself, so it is not considered a prime number`
      );
    }
    isPrimeNumber(number)
      ? console.log(`The number ${number} is a prime number`)
      : console.log(`The number ${number} is not a prime number`);
    rl.close();
  });
}
primeNumber();

/* **** helpers **** */
function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) if (number % i === 0) return false;
  return true;
}
