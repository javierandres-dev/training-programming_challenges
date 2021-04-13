/* Crear un programa que, dada una capital indique si se trata de uno de los
nombre elegidos por El Profesor para alguno de los miembros de su equipo o no.
*/
const GANG: Array<string> = [
  'El Profesor',
  'Tokio',
  'Lisboa',
  'Berlín',
  'Nairobi',
  'Río',
  'Denver',
  'Estocolmo',
  'Helsinki',
  'Moscú',
  'Mariví',
  'Bogotá',
  'Palermo',
  'Marsella',
  'Manilla',
  'Oslo',
];

function isAllowed(aName: string): boolean {
  let i: number = 0;
  while (i < GANG.length) {
    if (aName === GANG[i]) {
      return true;
    }
    i++;
  }
  return false;
}

console.log(isAllowed('Bogotá'));
console.log(isAllowed('Barcelona'));
console.log(isAllowed('Río'));
console.log(isAllowed('Madrid'));
console.log(isAllowed('Oslo'));
