'use strict';

const sideA = parseFloat(prompt('Type side A of triangle'));
const sideB = parseFloat(prompt('Type side B of triangle'));
const sideC = parseFloat(prompt('Type side C of triangle'));

const container = document.querySelector('.container');

if (sideA === sideB && sideA === sideC) {
  container.textContent = 'Triangle is equilateral';
} else if (sideA === sideB || sideA === sideC || sideB === sideC) {
  container.textContent = 'Triangle is isosceles';
} else {
  container.textContent = 'Triangle is scalene';
}

document.body.append(container);
