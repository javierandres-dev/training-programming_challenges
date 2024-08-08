'use strict';
/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 *
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.
 */
const pointsSystem = {
  0: 'Love',
  1: 15,
  2: 30,
  3: 40,
};

const playerScore = {
  P1: [],
  P2: [],
};

function setWinner(winner) {
  console.log(`\tHa ganado el ${winner}\n`);
  playerScore.P1.length = 0;
  playerScore.P2.length = 0;
}

function printResult() {
  const P1 = playerScore.P1.length;
  const P2 = playerScore.P2.length;
  if (P1 <= 3 && P2 <= 3) {
    if (P1 === 3 && P2 === 3) console.log('\tDeuce');
    else console.log(`\t${pointsSystem[P1]} - ${pointsSystem[P2]}`);
  } else {
    const diff = P1 - P2;
    if (diff === 0) console.log('\tDeuce');
    else if (diff === 1) console.log('\tVentaja P1');
    else if (diff === -1) console.log('\tVentaja P2');
    else if (diff > 1) setWinner('P1');
    else if (diff < -1) setWinner('P2');
  }
}

function setScore(player) {
  playerScore[player].push('won point');
  printResult();
}

function main(arr) {
  console.log('** P1 - P2 **');
  let i = 0;
  while (i < arr.length) {
    setScore(arr[i]);
    i++;
  }
}

main(['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P1']);
main(['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P2', 'P2', 'P2']);
main(['P1', 'P1', 'P1', 'P1']);
main(['P2', 'P2', 'P2', 'P2']);
