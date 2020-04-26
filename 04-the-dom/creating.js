// console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// Add something to the top, like a heading!
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';
myDiv.insertAdjacentElement('beforebegin', heading);

/*
// <ul>
// <li>One</li>
// <li>two</li>
// <li>three</li>
// <li>four</li>
// <li>five</li>
// </ul>

// My Original Solution
const list = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');
const item5 = document.createElement('li');

item1.textContent = 'One';
item2.textContent = 'Two';
item3.textContent = 'Three';
item4.textContent = 'Four';
item5.textContent = 'Five';

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);
list.appendChild(item5);

myDiv.insertAdjacentElement('beforeend', list);
*/

const list = document.createElement('ul');
const item3 = document.createElement('li');
item3.textContent = 'Three';
list.appendChild(item3);

document.body.insertAdjacentElement('afterbegin', list);

const item5 = document.createElement('li');
item5.textContent = 'Five';
list.append(item5);

const item1 = item5.cloneNode(true);
item1.textContent = 'One';
list.insertAdjacentElement('afterbegin', item1);

const item4 = document.createElement('li');
item4.textContent = 'Four';
item5.insertAdjacentElement('beforebegin', item4);

const item2 = document.createElement('li');
item2.textContent = 'Two';
item1.insertAdjacentElement('afterend', item2);
