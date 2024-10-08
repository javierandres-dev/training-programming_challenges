/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia,
 *   bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del arithmeticado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * - Crea un programa que imprima por consola todos los números comprendidos
 *   entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */

/* OPERATORS */

// Arithmetic operators
let arithmetic: number;
arithmetic = 10 + 2;
arithmetic = 10 - 2;
arithmetic = 10 * 2;
arithmetic = 10 / 2;
arithmetic = 10 % 2;
arithmetic = 10 ** 2;
arithmetic = 10;
arithmetic++;
++arithmetic;
arithmetic--;
--arithmetic;
console.log('arithmetic:', arithmetic);

// Assignment operators
let assignment: number = 10;
assignment += 2;
assignment -= 2;
assignment *= 2;
assignment /= 2;
assignment %= 2;
console.log('assignment:', assignment);
let obj = { x: 1 };
console.log('assignment in object:', obj);

// Concatenation/String Operators
let concatenationOrString: string;
concatenationOrString = 'Hello' + ', ' + 'World';
concatenationOrString += '!';
console.log('concatenationOrString:', concatenationOrString);

// Relational/Comparison operators
let relationalOrComparison: boolean;
relationalOrComparison = 10 == '10';
relationalOrComparison = 10 === '10';
relationalOrComparison = 10 != '10';
relationalOrComparison = 10 !== '10';
relationalOrComparison = 'a' > 'b';
relationalOrComparison = 10 > 2;
relationalOrComparison = 10 >= 2;
relationalOrComparison = 'a' < 'b';
relationalOrComparison = 10 < 2;
relationalOrComparison = 10 <= 2;
console.log('relationalOrComparison:', relationalOrComparison);

// Ternary/Conditional operator
const ternaryOrConditional: boolean = true ? true : false;
console.log('ternaryOrConditional:', ternaryOrConditional);

// Logical operators
let logical: boolean;
logical = 10 > 2 && 2 < 10;
logical = 10 < 2 || 10 > 2;
logical = !true;
console.log('logical:', logical);

// Bitwise operators
let bitwise: number;
bitwise = 1 & 1;
bitwise = 0 | 1;
bitwise = ~0;
bitwise = 1 ^ 0;
bitwise = 1 ^ 1;
bitwise = 1 << 1;
bitwise = 1 >> 1;
bitwise = 10 >>> 1;
console.log('bitwise:', bitwise);

// Nullish Coalescing operator
let nullishCoalescing: any;
const firstname = null;
const lastName = 'Doe';
nullishCoalescing = firstname ?? lastName;
console.log('nullishCoalescing:', nullishCoalescing);

// Optional Chaining operator
let optionalChaining: any;
optionalChaining = obj?.y;
console.log('optionalChaining:', optionalChaining);

// Typeof Operator
let typeofOp: any;
typeofOp = typeof 'abc';
typeofOp = typeof 10;
typeofOp = typeof true;
typeofOp = typeof null;
console.log('typeofOp:', typeofOp);

// Delete operator
console.log('obj:', obj);
delete obj.x;
console.log('obj:', obj);

// Spread operator
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];
let arr = [...arr1, ...arr2];
console.log('spread arr:', arr);

function fn(...items: any) {
  console.log('spread fn:', items);
}
fn(arr);

// In operator
console.log('in:', 'x' in obj);
console.log('in:', 'NaN' in Number);
console.log('in:', 'length' in String);

// Instanceof operator
console.log('instanceof:', arr instanceof Array);
console.log('instanceof:', arr instanceof Object);

// Void operator
console.log('void:', void 2 === '2');
console.log('void:', void (2 === '2'));
console.log(
  'void:',
  void (function () {
    console.log('executed!');
  })()
);

// Call operator
function myFn() {
  console.log('call');
}
myFn();

/* CONTROL STRUCTURES */

// if
if (true) {
  console.log('if...');
}

// if..else
if (false) {
  console.log('if...');
} else {
  console.log('else...');
}

// else if
if (false) {
  console.log('if...');
} else if (true) {
  console.log('else if...');
} else {
  console.log('else...');
}

// switch..case
switch (0) {
  case 0:
    console.log('switch..case');
    break;
  default:
    break;
}

// for
for (let i = 0; i < 1; i++) {
  console.log('for');
}

// while
let i = 0;
while (i < 1) {
  console.log('while');
  i++;
}

// do..while
do {
  console.log('do..while');
} while (i < 1);

// for in
obj = { x: 1, y: 2 };
for (const key in obj) {
  console.log('for in:', obj[key]);
}

// for of
for (const i of arr) {
  console.log('for of:', i);
}

// break, continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log('break, continue i:', i);
}

// try..catch
try {
  console.log('try..');
  throw new Error('Oops!');
} catch (error) {
  console.log('..catch');
}

/* EXTRA */
(() => {
  console.log('EXTRA');
  for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0) {
      if (i === 16 || i % 3 === 0) continue;
      console.log(i);
    }
  }
})();
