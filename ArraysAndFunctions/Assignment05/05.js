'use strict';

const numbers = [2, 8, 5, 4, 9, 2, 1, 5];

console.log(numbers);
const asc = sortArray(numbers, 'asc');
const desc = sortArray(numbers, 'desc');
const none = sortArray(numbers, 'lalla');
console.log(asc);
console.log(desc);
console.log(none);

function sortArray(array, order) {
  const copy = [...array];
  switch (order) {
    case 'asc':
      return copy.sort((a, b) => a - b);
    case 'desc':
      return copy.sort((a, b) => b - a);
    default:
      return 'none';
  }
}
