/* Transformar un código en RGB en hexadecimal.
* Ejemplo de entrada: 0, 36, 255
* Ejemplo de salida: #0024FF */
function rgbToHexadecimal(rgb:string): string {
  let hexCode: string = '#', i: number = 0;
  const rgbCodes: Array<number> = rgb.split(' ').map(el => parseInt(el));
  const hexCodes = rgbCodes.map(el => el.toString(16));
  while (i < hexCodes.length) {
    parseInt(hexCodes[i]) < 10
    ? hexCode += `0${hexCodes[i]}`
    : hexCode += hexCodes[i];
    i++;
  }
  return hexCode.toUpperCase();
}

// tests
console.log(rgbToHexadecimal('0, 36, 255'));