/* eslint-disable */

// Function Keyword
/*
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}
*/

/*
// Anonymous Function
function (firstName) {
  return `Dr. ${firstName}`;
}
*/

/*
// Function Expression
const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
};
*/

/*
// Arrow Function
// const inchToCM = function(inches) {
//   return inches * 2.54;
// };

// const inchToCM = (inches) => {
//   return inches * 2.54;
// };

const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;

// Returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
*/

/*
// Immediately Invoked Function Expression (IIFE)
(function(age) {
  return `You are cool and age ${age}`;
})(10);
*/

// Methods
const genesis = {
  name: 'Genesis Gabiola',
  // Method
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Genesis';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY GENESISSSS');
  },
  // Arrow function
  whisperHi: () => {
    console.log('hii genesisss im a mouse');
  },
};

// Callback Functions

// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!');
}

// button.addEventListener('click', genesis.yellHi);
// button.addEventListener('click', handleClick);
button.addEventListener('click', function() {
  console.log('Nice job!');
});

// Timer Callback
// setTimeout(genesis.yellHi, 1000);
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);
