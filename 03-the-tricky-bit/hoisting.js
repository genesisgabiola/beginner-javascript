/* eslint-disable */

// Variable Hoisting
let age;
console.log(age);
age = 10;


// Function Hoisting
/* What does this file do? */
sayHi();

/* How does this file do it? */
function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

/*
add(10, 20); // Uncaught ReferenceError: Cannot access 'add' before initialization

const add = function(a, b) {
  return a + b;
};
*/

// const add = (a, b) => a + b; // Uncaught ReferenceError: Cannot access 'add' before initialization
