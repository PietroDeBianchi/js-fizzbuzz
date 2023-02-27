// Get the const for the main container
const containerDom = document.querySelector('.container');

// Apply the loop with let(i) from 1 to 100
for (let i = 1; i <= 100; i++) {
  const boxDom = document.createElement('div');
  boxDom.classList.add('boxDom');
  boxDom.append(i);
  containerDom.append(boxDom);

  // color different box if are multipliers of 3, 5, or both
  if (i % 3 === 0 && i % 5 === 0) {
    boxDom.textContent = 'BuzzFizz';
  } else if (i % 3 === 0) {
    boxDom.textContent = 'Buzz';
  } else if (i % 5 === 0) {
    boxDom.textContent = 'Fizz';
  } else {
    console.log(i);
  }

  // set background-color based on text content
  if (boxDom.textContent === 'BuzzFizz') {
    boxDom.style.backgroundColor = "#DD5471";
  } else if (boxDom.textContent === 'Buzz') {
    boxDom.style.backgroundColor = "#62D2A4";
  } else if (boxDom.textContent === 'Fizz') {
    boxDom.style.backgroundColor = "#F8D377";
  } else {
    boxDom.style.backgroundColor = "#3F87AE";
  }

}