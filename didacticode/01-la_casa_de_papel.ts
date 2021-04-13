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

const isMember = (member: string): boolean => GANG.includes(member);

console.log(isMember('Bogotá'));
console.log(isMember('Barcelona'));
console.log(isMember('Río'));
console.log(isMember('Madrid'));
console.log(isMember('El Profesor'));
console.log(isMember('Oslo'));
