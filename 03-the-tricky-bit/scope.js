/* eslint-disable*/

/**
const first = 'Genesis';
let second = 'Gabiola';
var age = 100;

function sayHi() {
  console.log('Hi!');
}
*/

/**
const age = 100;

function go() {
  const myAge = 200;
  const hair = 'blonde';
  console.log(age);
  console.log(myAge);
  console.log(hair);
}

go();
*/

/*
if (1 === 1) {
  const cool = true; // or using let
}
console.log(cool);
// Output: Uncaught ReferenceError: cool is not defined

if (1 === 1) {
  var cool = true;
}
console.log(cool);
// Output: true (var varibales leak outside the block)
*/

/*
function isCool(name) {
  if (name === 'Genesis') {
    var cool = true;
  }
  console.log(cool);
  return cool;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  // logDog('Rufus');
  logDog('sunny');
}

go();

// function sayHi(name) {
//   function yell() {
//     console.log(name.toUpperCase())
//   }
//   yell();
// }

// yell();

function yell() {
  console.log(name.toUpperCase())
}

function sayHi(name) {
  yell();
}

yell();
