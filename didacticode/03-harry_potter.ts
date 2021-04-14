/* Controlar el número de pasajeros que llegan al final de un
trayecto teniendo en cuenta cuántos suben y cuántos bajan en cada parada.
* Entrada lista de tipo: [s1, b1][s2, b2][s3, b3] s: suben, b: bajan
* Ejemplo de entrada: [7,0][8,2][9,5][3,1]
* Ejemplo de salida: 19 pasajeros */
const checkMoves = (list: Array<Array<number>>): string => {
  let finalPassengers: number = 0,
    gotOn: number = 0,
    gotOff: number = 0;
  for (let i = 0; i < list.length; i++) {
    gotOn += list[i][0];
    gotOff += list[i][1];
  }
  finalPassengers = gotOn - gotOff;
  return `${finalPassengers} pasajeros`;
};

// tests
console.log(
  checkMoves([
    [7, 0],
    [8, 2],
    [9, 5],
    [3, 1],
  ])
);
