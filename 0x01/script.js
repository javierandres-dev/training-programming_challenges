const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
/* **** LEVEL 0 **** */
// Output: "Hello, World!"
function outputHelloWorld() {
  console.log('Hello, World!');
}
// outputHelloWorld();

/* **** LEVEL 1 **** */
// Output a value from an Input
function outputValueFromInput() {
  rl.question(`Type something: `, (typed) => {
    console.log(`You typed: ${typed}`);
    rl.close();
  });
}
outputValueFromInput();
