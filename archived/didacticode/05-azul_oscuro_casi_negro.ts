/* Transformar un código en RGB en hexadecimal.
 * Ejemplo de entrada: 0, 36, 255
 * Ejemplo de salida: #0024FF */
const isValid = (aNumber: number): boolean =>
  aNumber < 0 || aNumber > 255 ? false : true;

/**
 * First solution
 */
function rgbToHexadecimal1(r: number, g: number, b: number): string {
  if (isValid(r) && isValid(g) && isValid(b)) {
    let hexCode: string = '#',
      i: number = 0;
    const rgbCodes: Array<number> = [r, g, b];
    const hexCodes = rgbCodes.map((el) => el.toString(16));
    while (i < hexCodes.length) {
      if (hexCodes[i].length === 1) {
        hexCode += `0${hexCodes[i]}`;
      } else {
        hexCode += hexCodes[i];
      }
      i++;
    }
    return hexCode.toUpperCase();
  } else {
    return 'Error: Only accept number between 0 to 255.';
  }
}

/**
 * Second solution
 */
const rgbToHexadecimal2_ = (aNumber: number): string => {
  let hexCode: string = '';
  const charHex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let remainder: number = 0;
  while (aNumber >= 16) {
    remainder = aNumber % 16;
    hexCode = `${charHex[remainder]}${hexCode}`;
    aNumber = Math.floor(aNumber / 16);
  }
  hexCode = `${charHex[aNumber]}${hexCode}`;
  if (hexCode.length === 1) {
    hexCode = '0' + hexCode;
  }
  return hexCode;
};

const rgbToHexadecimal2 = (r: number, g: number, b: number): string => {
  if (isValid(r) && isValid(g) && isValid(b)) {
    return `#${rgbToHexadecimal2_(r)}${rgbToHexadecimal2_(
      g
    )}${rgbToHexadecimal2_(b)}`;
  } else {
    return 'Error: Only accept number between 0 to 255.';
  }
};

/**
 * Third solution
 */
const rgbToHexadecimal3 = (r: number, g: number, b: number): string => {
  const hexCode = (aNumber: number) =>
    ('0' + Math.max(0, Math.min(255, aNumber)).toString(16))
      .slice(-2)
      .toUpperCase();
  return `#${hexCode(r)}${hexCode(g)}${hexCode(b)}`;
};

// tests
console.log(rgbToHexadecimal3(0, 36, 255));
console.log(rgbToHexadecimal3(255, 36, 123));
console.log(rgbToHexadecimal3(12, 234, 7));
console.log(rgbToHexadecimal3(0, 0, 0));
console.log(rgbToHexadecimal3(255, 255, 255));
