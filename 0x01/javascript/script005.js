'use strict';
/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo,
 * fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */
main(2);
main(7);
main(3);
main(7919);

function main(number) {
  let prime = isPrime(number),
    even = number % 2 === 0,
    fibonacci = isFibonacci(number);
  prime = prime ? 'es primo' : 'no es primo';
  even = even ? 'es par' : 'es impar';
  fibonacci = fibonacci ? 'fibonacci' : 'no es fibonacci';
  console.log(`${number} ${prime}, ${fibonacci} y ${even}`);
}

function isPrime(number) {
  for (let n = 2; n < number; n++) if (number % n === 0) return false;
  return true;
}

function isFibonacci(number) {
  const fibonacciNumbers = [0, 1, 1];
  for (let n = 2; n <= number; n++)
    if (
      fibonacciNumbers[fibonacciNumbers.length - 1] +
        fibonacciNumbers[fibonacciNumbers.length - 2] ===
      n
    )
      fibonacciNumbers.push(n);
  return fibonacciNumbers.includes(number);
}
