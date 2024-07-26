/* Comprobar si se ha introducido correctamente la constante de Planck */
const PLANCKv1: number = 6.62607004;
const PLANCKv2: number = 6.62607015;

const isPlanckV1 = (aNumber: number): boolean =>
  aNumber === PLANCKv1 ? true : false;
const isPlanckV2 = (aNumber: number): boolean =>
  aNumber === PLANCKv2 ? true : false;

const isPlanck = (aNumber: number): string => {
  let result: string = '';
  aNumber === PLANCKv1
    ? (result = `Yes, ${aNumber} is a constant Planck - First version.`)
    : aNumber === PLANCKv2
    ? (result = `Yes, ${aNumber} is a constant Planck - Second version.`)
    : (result = `No, ${aNumber} is'n a constant Planck.`);
  return result;
};

console.log(isPlanck(6.62607004));
console.log(isPlanck(6.62617004));
console.log(isPlanck(6.62607015));
console.log(isPlanck(6.62627015));
