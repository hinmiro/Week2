'use strict';

const container = document.querySelector('.container');
const number = parseInt(prompt('Give number to be counted'));
let sum = 0;

for (let i = 0; i <= number; i++) {
  sum += i;
}
document.append((container.textContent = sum));
