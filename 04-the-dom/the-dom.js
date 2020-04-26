// document.addEventListener('DOMContentLoaded', function() {
//   const p = document.querySelector('p');
//   console.log(p);
// });

/*
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
*/

// Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.classList.contains('round');
// pic.className();

// Attributes
pic.alt = 'Cute Pup'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter
pic.width = 200;

// pic.addEventListener('load', function() {
//   console.log(pic.naturalWidth); // getter
// });

// pic.setAttribute('alt', 'REALLY CUTE PUP');
// pic.setAttribute('genesis-is-cool', 'REALLY CUTE PUP');
// console.log(pic.getAttribute('alt'));
// pic.hasAttribute('alt');

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
