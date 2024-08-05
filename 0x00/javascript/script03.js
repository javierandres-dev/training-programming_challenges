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
const player1 = 'P1',
  player2 = 'P2',
  score = {
    P1: 0,
    P2: 0,
  };

let deuce = false,
  advantage = null,
  winner = null;

function printResult() {
  const s1 = score.P1 === 0 ? 'Love' : score.P1;
  const s2 = score.P2 === 0 ? 'Love' : score.P2;
  if (score.P1 === 40 && score.P2 === 40) deuce = true;
  if (deuce) {
    console.log('Deuce');
  } else if (advantage) {
    console.log(`Ventaja ${advantage}`);
  } else if (winner) {
    console.log(`Ha ganado el ${winner}`);
  } else {
    console.log(`${s1} - ${s2}`);
  }
}

function setScore(player) {
  const previous = score[player];
  if (previous === 0 || previous === 15) score[player] += 15;
  if (previous === 30) score[player] += 10;
  if (deuce) {
    score[player] += 1;
    advantage = player;
    deuce = false;
  }
  if (advantage) {
    console.log('advantage: ', advantage);
  }

  printResult();
  console.log(winner);
}

function main(arr) {
  let i = 0;
  while (i < arr.length) {
    setScore(arr[i]);
    i++;
  }
}

main(['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P1']);
