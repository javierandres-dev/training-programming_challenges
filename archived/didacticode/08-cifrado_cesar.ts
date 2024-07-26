/* Codificador y decodificador que, a partir de un mensaje y un número de desplazamiento (positivo o negativo) retorne el mensaje codificado o decodificado respectivamente.  El mensaje únicamente contiene letras */
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const encodeDecode1 = (action: string, msg: string, num: number): string => {
  if (action === 'encode' || action === 'decode') {
    let res: Array<string> = [];
    for (const char of msg) {
      for (let letter = 0; letter < alphabet.length; letter++) {
        if (char === alphabet[letter]) {
          if (action === 'encode') {
            res.push(alphabet[letter + num]);
          } else if (action === 'decode') {
            res.push(alphabet[letter - num]);
          }
        }
      }
    }
    return res.join('');
  }
  return `Acción "${action}" no permitida.`;
};

// tests
console.log(encodeDecode1('encode', 'ada', 3));
console.log(encodeDecode1('decode', 'dgd', 3));
console.log(encodeDecode1('encode', 'edu', 3));
console.log(encodeDecode1('decode', 'hgx', 3));
console.log(encodeDecode1('encode', 'hola', 1));
console.log(encodeDecode1('decode', 'ipmb', 1));
console.log(encodeDecode1('encode', 'hola', 10));
console.log(encodeDecode1('decode', 'ryvk', 10));
console.log(encodeDecode1('other', 'javi', 8));
//console.log(encodeDecode1('encode', 'hola', -1)); // fail
//console.log(encodeDecode1('decode', 'gnkz', -1)); // fail
//console.log(encodeDecode1('encode', 'hola', 100)); // fail
//console.log(encodeDecode1('decode', 'dkhw', 100)); // fail

const encodeDecode2 = (action: string, msg: string, num: number): string => {
  if (action === 'encode' || action === 'decode') {
    let res: string = '';
    const shift = ((num % 26) + 26) % 26;
    for (let char = 0; char < msg.length; char++) {
      if (alphabet.indexOf(msg[char]) !== -1) {
        if (action === 'encode') {
          const position = (alphabet.indexOf(msg[char]) + shift) % 26;
          res += alphabet[position];
        } else if (action === 'decode') {
          const position = (alphabet.indexOf(msg[char]) - shift) % 26;
          res += alphabet[position];
        }
      }
    }
    return res;
  }
  return `Acción "${action}" no permitida.`;
};

// tests
console.log(encodeDecode2('encode', 'ada', 3));
console.log(encodeDecode2('decode', 'dgd', 3));
console.log(encodeDecode2('encode', 'edu', 3));
console.log(encodeDecode2('decode', 'hgx', 3));
console.log(encodeDecode2('encode', 'hola', 1));
console.log(encodeDecode2('decode', 'ipmb', 1));
console.log(encodeDecode2('encode', 'hola', 10));
console.log(encodeDecode2('decode', 'ryvk', 10));
console.log(encodeDecode2('other', 'javi', 8));
//console.log(encodeDecode2('encode', 'hola', -1)); // fail
//console.log(encodeDecode2('decode', 'gnkz', -1)); // fail
//console.log(encodeDecode2('encode', 'hola', 100)); // fail
//console.log(encodeDecode2('decode', 'dkhw', 100)); // fail
