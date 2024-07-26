/* A partir de una lista de códigos, queremos identificar cuál es 'diferente' a
las demás: si las demás son pares, cuál es la impar; y viceversa.  dispondrá
de una cadena de códigos y deberá mostrar cuál de ellos no se corresponde con
el resto.
* Ejemplo de entrada: "1234 2345 3456 1358 2360 2246 8088"
* Ejemplo de salida: 2345
* Nota: Solo habrá una bolsa diferente, no es necesario validar. */

/**
 * Firts solution
 */

function differentCode1(list: string): number {
  let different: number;
  const codes: Array<string> = list.split(' ');
  const evenNumbers: Array<number> = [];
  const oddNumbers: Array<number> = [];

  for (let i = 0; i < codes.length; i++) {
    const code: number = parseInt(codes[i]);
    code % 2 === 0 ? evenNumbers.push(code) : oddNumbers.push(code);
  }
  evenNumbers.length === 1 && oddNumbers.length > 1
    ? (different = evenNumbers[0])
    : (different = oddNumbers[0]);
  return different;
}

/**
 * Second solution
 */
const differentCode2 = (list: string): number => {
  let different: number;
  const codes: Array<number> = list.split(' ').map((el) => parseInt(el));
  const evenNumbers: Array<number> = codes.filter((num) => num % 2 === 0);
  const oddNumbers: Array<number> = codes.filter((num) => num % 2 !== 0);
  oddNumbers.length === 1 && evenNumbers.length > 1
    ? (different = oddNumbers[0])
    : (different = evenNumbers[0]);
  return different;
};

// tests
console.log(differentCode2('1234 2345 3456 1358 2360 2246 8088'));
console.log(differentCode2('2345 2467 4567 3589 3601 3456 0889'));
