'use strict';

const x1 = parseFloat(prompt('Type X1 coordinate'));
const x2 = parseFloat(prompt('Type X2 coordinate'));
const y1 = parseFloat(prompt('Type Y1 coordinate'));
const y2 = parseFloat(prompt('Type Y2 coordinate'));

const container = document.querySelector('.container');
const distanceMath = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

container.textContent = distanceMath;
