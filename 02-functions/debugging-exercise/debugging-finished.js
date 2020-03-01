const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

/**
// Console Methods
people.forEach((person, index) => {
  console.log(person.name);
  console.info(person.name);
  console.warn(person.name);
  console.error(person.name);
});

console.table();

function doctorize(name) {
  console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function doALotOfStuff() {
  console.group('Doing some stuff');
  // console.groupCollapsed('Doing some stuff');
  console.log('Hey Im one');
  console.warn('watch out!');
  console.error('hey');
  console.groupEnd('Doing some stuff');
}
*/

/**
// Callstack
function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Genesis'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app!');
  go();
}

bootstrap();
*/

// Grabbing Elements
document.querySelector('p');
document.querySelectorAll('p');

// Breakpoints
people.forEach((person, index) => {
  // debugger;
  console.log(person.name);
});

// Scope

// Network Requests
// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
// fetchDadJoke();

// Break On Attribute
const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});
