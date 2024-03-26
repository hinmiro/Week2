'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  vegetables.push(prompt(`Type ${i + 1}. vegetable`));
}

console.log(vegetables);
console.log(`Length of vegetables: ${vegetables.length}`);
