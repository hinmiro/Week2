'use strict';

const container = document.querySelector('.container');
const number = parseInt(prompt('Enter positive integer'));

for (let i = 1; i <= number; i++) {
  const newRow = document.createElement('tr');
  for (let j = 1; j <= number; j++) {
    const newColumn = document.createElement('td');
    newColumn.textContent = `${i * j}`;
    container.appendChild(newColumn);
  }
  container.appendChild(newRow);
}
document.body.append(container);
