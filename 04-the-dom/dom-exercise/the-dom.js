// document.addEventListener('DOMContentLoaded', function() {
//   const p = document.querySelector('p');
//   console.log(p);
// });

const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');

console.log(heading.textContent);
console.log(heading.innerText);
// set the textContent property on that element
// heading.textContent = 'Genesis is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`; // becomes slow for long text
pizzaList.insertAdjacentText('afterbegin', '🍕');
pizzaList.insertAdjacentText('beforeend', '🍕');