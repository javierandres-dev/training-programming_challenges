/*
7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
*/
let result = '';
let year = 2014;
const limit = 2050;
while (year <= limit) {
  const date = new Date(year, 0, 1);
  if (date.getDay() === 0) result += `1st January ${year} was a Sunday\n`;
  year += 1;
}
console.info(result);
