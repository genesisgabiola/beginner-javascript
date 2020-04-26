const gen = document.querySelector('.gen');

console.log(gen.children);
// console.log(gen.firstElementChild);
// console.log(gen.lastElementChild);
// console.log(gen.previousElementSibling);
// console.log(gen.nextElementSibling);
// console.log(gen.parentElement);

// console.log(gen.childNodes);
// console.log(gen.firstChild);
// console.log(gen.lastChild);
// console.log(gen.previousSibling);
// console.log(gen.nextSibling);
// console.log(gen.parentNode);

// console.log(gen);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();
console.log(p);

document.body.appendChild(p);
