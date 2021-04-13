/* Controlar el número de pasajeros que llegan al final de un
trayectoteniendo en cuenta cuántos suben y cuántos bajan en cada parada.
* Entrada lista de tipo: [s1, b1][s2, b2][s3, b3] s: suben, b: bajan
* Ejemplo de entrada: [7,0][8,2][9,5][3,1]
* Ejemplo de salida: 19 pasajeros */
interface Moves {
  gotOn: number;
  gotOff: number;
}

const checkMoves = (list: Array<Array<number>>): Moves => {
  const moves = {
    gotOn: 0,
    gotOff: 0,
  };
  for (let row = 0; row < list.length; row++) {
    for (let column = 0; column < list[row].length; column++) {
      //console.log(list[row][column]);
      //console.log(list[row]);
      console.log(list[0][1]);
      //console.log(list[row][1]);
      //console.log(list[column]);
      //moves.gotOn += list[row][0];
      //moves.gotOff -= list[row][1];
    }
  }
  return moves;
};

console.log(
  checkMoves([
    [7, 0],
    [8, 2],
    [9, 5],
    [3, 1],
  ])
);
