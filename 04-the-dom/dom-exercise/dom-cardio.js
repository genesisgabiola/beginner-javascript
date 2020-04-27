// Make a div
const wrapper = document.createElement('div');
// add a class of wrapper to it
wrapper.classList.add('wrapper');
// put it into the body
document.body.appendChild(wrapper);

// make an unordered list
// add three list items with the words "one, two three" in them
const list = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;
// put that list into the above wrapper
// wrapper.insertAdjacentHTML('afterbegin', list);
wrapper.innerHTML = list;

// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500';
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
wrapper.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const htmlString = `
  <div class="htmlWrapper">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
// put this div before the unordered list from above
const ul = wrapper.querySelector('ul');
ul.insertAdjacentHTML('beforebegin', htmlString);
// add a class to the second paragraph called warning
const htmlWrapper = wrapper.querySelector('.htmlWrapper');
htmlWrapper.children[1].classList.add('warning');
// remove the first paragraph
// htmlWrapper.children[0].remove();
htmlWrapper.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function convertToFeet(cm) {
  const realFeet = (cm * 0.3937) / 12;
  const feet = Math.floor(realFeet);
  const inches = Math.round((realFeet - feet) * 12);
  return `${feet}&prime;${inches}&Prime;`;
}

function generatePlayerCard(name, age, height) {
  console.log(name.charAt(0));
  return `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their height is ${convertToFeet(
        height
      )} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
      <button class="btn remove">&times; Delete</button>
    </div>
  `;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('genesis', '27', '163');
cardsHTML += generatePlayerCard('abby', '18', '153');
cardsHTML += generatePlayerCard('david', '27', '167');
cardsHTML += generatePlayerCard('moises', '27', '170');
// append those cards to the div
cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.remove');
// make out delete function
function removeCard(e) {
  const targetCard = e.currentTarget;
  // targetCard.parentNode.remove();
  targetCard.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(function(btn) {
  btn.addEventListener('click', removeCard);
});
