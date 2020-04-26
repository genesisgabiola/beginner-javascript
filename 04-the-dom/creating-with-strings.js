const item = document.querySelector('.item');

// item.innerHTML = `
//   <div>
//     <h1></h1>
//     <h1>Hey How are ya?!</h1>
//   </div>
// `;
// console.log(item.innerHTML); // getter

const width = 500;
const src = `https://picsum.photos/${width}`;
// const desc = `Cute Pup`;
// const desc = `Cute Pup <h1>LOVE THIS GUY</h1><style>* { display: none; }</style>`;
const desc = `Cute Pup <img onload="alert('HACKED!')" src="https://picsum.photos/50">`;
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}">
  </div>
`;

// item.innerHTML = myHTML;
// console.log(myHTML);

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');
// console.log(itemImage);

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
// console.log(myFragment.querySelector('img'));
// console.log(myFragment);
document.body.appendChild(myFragment);
