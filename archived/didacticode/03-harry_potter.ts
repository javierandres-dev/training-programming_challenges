/* Controlar el número de pasajeros que llegan al final de un
trayecto teniendo en cuenta cuántos suben y cuántos bajan en cada parada.
* Entrada lista de tipo: [s1, b1][s2, b2][s3, b3] s: suben, b: bajan
* Ejemplo de entrada: [7,0][8,2][9,5][3,1]
* Ejemplo de salida: 19 pasajeros */

/**
 * First solution
 */
function checkMoves1(list: Array<Array<number>>): string {
  let gotOn: number = 0,
    gotOff: number = 0;
  for (let i: number = 0; i < list.length; i++) {
    gotOn += list[i][0];
    gotOff += list[i][1];
  }
  return `Al final del trayecto llegan ${gotOn - gotOff} pasajeros`;
}

/**
 * Second solution
 */
const checkMoves2 = (list: Array<Array<number>>): string => {
  const res: number = list.reduce(
    (accumulator, [gotOn, gotOff]) => accumulator + gotOn - gotOff,
    0
  );
  return `Al final del trayecto llegan ${res} pasajeros`;
};

/**
 * Third solution
 */
const checkMoves3 = (list: Array<Array<number>>): string => {
  const res: number = list.reduce(
    (accumulator, list) => accumulator + list[0] - list[1],
    0
  );
  return `Al final del trayecto llegan ${res} pasajeros`;
};

// tests
console.log(
  checkMoves3([
    [7, 0],
    [8, 2],
    [9, 5],
    [3, 1],
  ])
);
console.log(
  checkMoves3([
    [10, 0],
    [3, 5],
    [5, 2],
    [4, 6],
    [3, 3],
  ])
);
