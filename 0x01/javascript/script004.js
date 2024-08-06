'use strict';
/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */
(async () => {
  const readlinePromises = require('node:readline/promises'),
    rlp = readlinePromises.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });

  let charactersAllowed = '';

  function addLowercase() {
    for (let i = 97; i <= 122; i++) charactersAllowed += String.fromCharCode(i);
  }

  function addUppercase() {
    for (let i = 65; i <= 90; i++) charactersAllowed += String.fromCharCode(i);
  }

  function addNumbers() {
    for (let i = 48; i <= 57; i++) charactersAllowed += String.fromCharCode(i);
  }

  function addSymbols() {
    charactersAllowed += `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
  }
  console.log('** Configuración para generar contraseña aleatoria **');
  const length = await rlp.question('* ¿Longitud? (8...16): ');
  const uppercases = await rlp.question('* ¿Letras mayúsculas? (s/n): ');
  const numbers = await rlp.question('* ¿Números? (s/n): ');
  const symbols = await rlp.question('* ¿Símbolos? (s/n): ');
  rlp.close();
  let password = '';
  if (uppercases === 's') addUppercase();
  if (numbers === 's') addNumbers();
  if (symbols === 's') addSymbols();
  addLowercase();
  const arr = charactersAllowed.split('');
  let i = 0;
  while (i < length) {
    password += arr[Math.floor(Math.random() * arr.length)];
    i++;
  }
  console.log(`Contaseña de ${password.length} caracteres: ${password}`);
})();
