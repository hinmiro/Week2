'use strict';

const numbers = [];
let num;
const container = document.querySelector('.container');
const p = document.createElement('p');
p.textContent = 'Even numbers: ';

do {
  num = prompt('Enter number (or type done to finish):');
  numbers.push(parseInt(num));
} while (num != 'done');
numbers.pop();
console.log(numbers);

let numberIsEven = false;
for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] % 2 == 0) {
    p.textContent += `${numbers[i]} `;
    numberIsEven = true;
  }
}

if (!numberIsEven) {
  p.textContent = 'none';
}
container.appendChild(p);
console.log('Program ending');
