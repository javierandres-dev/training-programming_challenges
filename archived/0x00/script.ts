/* **** LEVEL 0 **** */
// Output: "Hello, World!"
function outputHelloWorld() {
  console.log('Hello, World!');
}
// outputHelloWorld();

/* **** LEVEL 1 **** */
// Output a value from an Input
function outputValueFromInput(inputValue: any) {
  console.log(inputValue);
}
// outputValueFromInput('Works!');
// outputValueFromInput(1);
// outputValueFromInput(true);

// Read name and surname, show surname and name separted by space
function showNameAndSurname(name: string, surname: string) {
  console.log(`${surname} ${name}`);
}
// showNameAndSurname('Jane', 'Doe');

// Read name and greet by name
function greetByName(name: string) {
  console.log(`Hello, ${name}!`);
}
// greetByName('Jane');

// Read name, if name exists greet by name, otherwise greet an unknown
function greetByNameOrUnknown(name: string = 'unknown') {
  console.log(`Hello, ${name}!`);
}
// greetByNameOrUnknown('Jane');
// greetByNameOrUnknown();

// Read name and age, show name and age
function showNameAndAge(name: string, age: number) {
  console.log(`${name} is ${age} years old.`);
}
// showNameAndAge('Jane', 20);

/* Read a name and a place, shown a short story, the main character and the
main place take from inputs */
function crazyStory(name: string, place: string) {
  console.log(`Once upon a time, there was a ${name} who lived in ${place}.`);
}
// crazyStory('Jane', 'Paris');

/* **** LEVEL 2 **** */
/* Read name and age, if the age is equal to or greater than 18 show of legal
age, otherwise show is a minor */
function showLegalAge(name: string, age: number) {
  if (age >= 18) {
    console.log(`${name} is of legal age.`);
  } else {
    console.log(`${name} is a minor.`);
  }
}
// showLegalAge('Anne', 17);
// showLegalAge('Jane', 18);
// showLegalAge('John', 19);

/* Read a user role, show access profile, if different than
ADMIN/MODERATOR/EDITOR/CONTRIBUTOR/SUBSCRIBER/GUEST show access denied */
function showAccessProfile(userRole: string) {
  switch (userRole) {
    case 'ADMIN':
      console.log('Access granted: ADMIN');
      break;
    case 'MODERATOR':
      console.log('Access granted: MODERATOR');
      break;
    case 'EDITOR':
      console.log('Access granted: EDITOR');
      break;
    case 'CONTRIBUTOR':
      console.log('Access granted: CONTRIBUTOR');
      break;
    case 'SUBSCRIBER':
      console.log('Access granted: SUBSCRIBER');
      break;
    case 'GUEST':
      console.log('Access denied: GUEST');
      break;
    default:
      console.log('Access denied: UNKNOWN');
  }
}
// showAccessProfile('ADMIN');
// showAccessProfile('MODERATOR');
// showAccessProfile('EDITOR');
// showAccessProfile('CONTRIBUTOR');
// showAccessProfile('SUBSCRIBER');
// showAccessProfile('GUEST');
// showAccessProfile('x');
