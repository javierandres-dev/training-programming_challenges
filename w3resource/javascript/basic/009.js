/*
9. Write a JavaScript program to calculate the days left before Christmas.
*/
//const today = new Date(2023, 11, 26);
const today = new Date();
const christmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() === 11 && today.getDate() > 25)
  christmas.setFullYear(christmas.getFullYear() + 1);
const milisecondsToday = today.getTime();
const milisecondsChristmas = christmas.getTime();
const milisecondsDay = 1000 * 60 * 60 * 24;
const differenceDays = Math.ceil(
  (milisecondsChristmas - milisecondsToday) / milisecondsDay
);
console.info(`${differenceDays} days left until Christmas!`);
