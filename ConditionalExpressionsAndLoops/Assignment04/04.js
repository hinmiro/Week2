'use strict';

const container = document.querySelector('.container');
const score = parseFloat(prompt('Type in you score to get grade'));

if (score <= 39) {
  container.textContent = 'Your grade is 0';
} else if (score > 39 && score <= 51) {
  container.textContent = 'Your grade is 1';
} else if (score > 51 && score < 63) {
  container.textContent = 'Your grade is 2';
} else if (score > 63 && score < 76) {
  container.textContent = 'Your grade is 3';
} else if (score > 76 && score < 88) {
  container.textContent = 'Your grade is 4';
} else {
  container.textContent = 'Your grade is 5';
}

document.body.append(container);
