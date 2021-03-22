'use strict';
/* Escribe un programa que lee una matriz y calcula la máxima suma entre todas
  las posibles submatrices.  Encontrar la submatriz cuya suma sea máxima. */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let counter = 0;
let numberOfRows = undefined;
let numberOfColumns = undefined;
const matrix = [];

rl.on('line', (input) => {
  counter++;
  if (counter === 1) {
    const lengths = input.split(' ');
    numberOfRows = parseInt(lengths[0]);
    numberOfColumns = parseInt(lengths[1]);
  } else {
    const aArray = input.split(' ').map((item) => parseInt(item));
    matrix.push(aArray);
    if (matrix.length === numberOfRows) {
      rl.close();
      findGreatestSubmatrix();
    }
  }
});

const findGreatestSubmatrix = () => {
  let greatest = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix.length; column++) {
      const element = matrix[row][column];
    }
  }
};
