/*
3. Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
const dateAndTime = new Date().toLocaleString();
let date = dateAndTime.split(', ');
date = date[0].split('/');
const day = date[1] < 10 ? `0${date[1]}` : date[1];
const month = date[0] < 10 ? `0${date[0]}` : date[0];
const year = date[2];
console.info(`${month}-${day}-${year}`);
console.info(`${month}/${day}/${year}`);
console.info(`${day}-${month}-${year}`);
console.info(`${day}/${month}/${year}`);
