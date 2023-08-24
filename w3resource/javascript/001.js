/*
1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
const currentDate = new Date();
const localTimezone = currentDate.toString();
const day = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};
const currentLocalTimezone = localTimezone.split(' ');
const currentTime = currentLocalTimezone[4].split(':');
const currentHour = +currentTime[0];
let hour = null;
if (currentHour === 12) {
  hour = `${currentHour} PM`;
} else if (currentHour > 12) {
  hour = `${currentHour - 12} PM`;
} else {
  hour = `${currentHour} AM`;
}
console.info(
  `Today is : ${day[currentLocalTimezone[0]]}.\nCurrent time is : ${hour} : ${
    currentTime[1]
  } : ${currentTime[2]} `
);
