'use strict';

const numbers = [];
const container = document.querySelector('.container');
const p = document.createElement('p');

for (let i = 0; i < 5; i++) {
  numbers.push(parseInt(prompt(`Type number ${i + 1}/5`)));
}
container.textContent = numbers;
document.body.appendChild(container);

const newNum = parseInt(prompt('Type number to search'));
if (numbers.includes(newNum)) {
  p.textContent += `Number ${newNum} found from array`;
  container.appendChild(p);
} else {
  p.textContent = `Number ${newNum} not found from array`;
  container.appendChild(p);
}

numbers.pop();
const p2 = document.createElement('p');
p2.textContent = `Updated ${numbers}`;
container.appendChild(p2);

const p3 = document.createElement('p');
p3.textContent = numbers.sort((a, b) => a - b);
container.appendChild(p3);
