/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos
 *   posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * - Crea una función que reciba dos parámetros de tipo cadena de texto y
 *   retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer
 *     parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo
 *     parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto
 *     concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en
 *     lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los
 * casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el
 * código se entienda.
 */

/* FUNCTIONS */
// function definition/declaration/statement
function fnKeyword() {
  console.log('function definition/declaration/statement');
}
fnKeyword();

// function expression
const fnExpression = function () {
  console.log('function expression');
};
fnExpression();

// arrow function expression
const fnArrow = () => {
  console.log('arrow function expression');
};
fnArrow();

// immediately invoked function expression
(function () {
  console.log('IIFE');
})();

// parameters
function fnParameter(str: string) {
  console.log(str);
}
fnParameter('parameter');

function fnDefaultParameter(str: string = 'default parameter') {
  console.log(str);
}
fnDefaultParameter();

function fnParameters(str: string, num: number, bool: boolean) {
  console.log(str, num, bool);
}
fnParameters('parameters', 0x00, true);

function restParameters(...items: string[]) {
  console.log('rest parameters', items);
}
restParameters('a', 'b', 'c');

// returns
function implicitReturn() {
  console.log('implicit return');
}
let returned;
returned = implicitReturn();
console.log('returned:', returned);

function explicitReturn() {
  return 'explicit return';
}
returned = explicitReturn();
console.log('returned:', returned);

async function promiseReturn() {
  return 'promise return';
}
returned = promiseReturn();
console.log('returned:', returned);

// callback
function aFn(cb: Function) {
  console.log('a function');
  cb();
}
aFn(() => {
  console.log('a function passed as an argument to another function');
});

// nested functions
function fnOutside() {
  console.log('outside');
  function fnInside() {
    console.log('inside');
  }
  fnInside();
}
fnOutside();

// closures
const closureExample = (() => {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
  };
})();
closureExample();
closureExample();
returned = closureExample();
console.log('returned:', returned);

/* FUNCTION HOISTING */
fnHoists();
function fnHoists() {
  console.log('hoists');
}

const fnNotHoists = () => {
  console.log('not hoists');
};
fnNotHoists();

/* SCOPE */
// global scope
const globalVariable = 'global variable';
console.log('call', globalVariable, 'from global scope');

// local scope
{
  // local variable
  const localVariable = 'local variable';
  console.log('call', localVariable, 'from local scope');
  console.log('call', globalVariable, 'from local scope');
}
//console.log('call', localVariable, 'from global scope');

/* EXTRA */
returned = main('Fizz', 'Buzz');
console.log('returned:', returned);
function main(p1: string, p2: string): number {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) console.log(`${p1}${p2}`);
    else if (i % 5 === 0) console.log(p2);
    else if (i % 3 === 0) console.log(p1);
    else console.log(i);
  }
  return 0;
}
