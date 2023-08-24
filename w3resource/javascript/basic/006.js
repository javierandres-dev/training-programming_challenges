/*
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/
function isLeapYear(year) {
  return year % 4 === 0
    ? year % 100 === 0
      ? year % 400 === 0
        ? true
        : false
      : true
    : false;
  /*
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) return true;
      return false;
    }
    return true;
  }
  return false;
  */
}
console.log(isLeapYear(2016));
console.log(isLeapYear(2000));
console.log(isLeapYear(1700));
console.log(isLeapYear(1800));
console.log(isLeapYear(100));
