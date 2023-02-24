// Get the const for the main container
const containerDom = document.querySelector('.container');

// Apply the loop with let(i) from 1 to 100
for (let i = 1; i <= 100; i++) {
  let boxDom = `<div class="boxDom">${i}</div>`;

  // color different box if are multipliers of 3, 5, or both
  if (i % 3 === 0 && i % 5 === 0) {
    boxDom = `<div class="boxDom fizzbuzz">BuzzFizz</div>`;
  } else if (i % 3 === 0) {
    boxDom = `<div class="boxDom fizz">Buzz</div>`;
  } else if (i % 5 === 0) {
    boxDom = `<div class="boxDom buzz">Fizz</div>`;
  }

  containerDom.innerHTML += boxDom;
}
