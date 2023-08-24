/*
5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
*/
function rotateString(string) {
  const limit = string.length * 2;
  let interval = null,
    times = 0,
    show = string;
  if (!interval) {
    interval = setInterval(() => {
      if (times > limit) {
        clearInterval(interval);
        interval = null;
      } else {
        console.info(show);
        const last = show[show.length - 1];
        show = last + show.substring(0, show.length - 1);
        times += 1;
      }
    }, 500);
  }
}
rotateString('w3resource');
