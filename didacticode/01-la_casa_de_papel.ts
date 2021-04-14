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
/**
 * First solution
 */
function isMember1(member: string): boolean {
  let i: number = 0;
  while (i < GANG.length) {
    if (member === GANG[i]) {
      return true;
    }
    i++;
  }
  return false;
}

/**
 * Second solution
 */
const isMember2 = (member: string): boolean => {
  const res: number = GANG.indexOf(member);
  if (res === -1) return false;
  return true;
};

/**
 * Third solution
 */
const isMember3 = (member: string): boolean => {
  const res: number = GANG.findIndex((name) => name === member);
  if (res === -1) return false;
  return true;
};

/**
 * Fourth solution
 */
const isMember4 = (member: string): boolean => GANG.includes(member);

// tests
console.log(isMember4('El Profesor'));
console.log(isMember4('Bogotá'));
console.log(isMember4('Barcelona'));
console.log(isMember4('Río'));
console.log(isMember4('Madrid'));
console.log(isMember4('Oslo'));
