/*
// Function definition
function calculateBill() {
  // this is the function body
  console.log('Running Calculate Bill!');
  const total = 100 * 1.13;
  // console.log(total);
  return total;
}

// Function call or run
// calculateBill(); // running calculateBill (returns undefined)
// const myTotal = calculateBill(); // myTotal will have value 112.999999999
// console.log(`Your total is $${myTotal}`);
console.log(`Your total is $${calculateBill()}`);
*/

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running Calculate Bill!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function call or run
// const myTotal = calculateBill(100, 0.13);
const genTotal = 500;
const genTaxRate = 0.3;
const myTotal = calculateBill(genTotal, genTaxRate);
console.log(myTotal);

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Genesis');
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

yell(doctorize('Genesis'));

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
