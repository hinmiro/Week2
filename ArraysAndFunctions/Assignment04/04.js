'use strict';

const hooorrraaay = [4, 2, 6, 4, 7, 3, 9];

console.log(hooorrraaay);
console.log(sortArray(hooorrraaay));
function sortArray(array) {
  return array.sort((a, b) => a - b);
}
