"use strict";
//JS에서 자료구조에는 dynamic type이기 때문에 어떤 type이든 넣을 수 있지만,
//한가지의 type만 넣는것을 권장함

//Declaration
const arr1 = new Array(1, 2);
const arr2 = [1, 2];

console.log(arr1, arr2);

const fruit = [1, 2, 3, 4];
console.log(fruit);
console.log(fruit.length);
console.log(fruit[0]);
console.log(fruit[fruit.length - 1]);
console.log();

for (let i = 0; i < fruit.length; i++) console.log(fruit[i]);
for (let value of fruit) console.log(value);
for (let value in fruit) console.log(fruit[value]);

fruit.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

fruit.forEach((fruit, index) => {
  console.log(fruit, index);
});

//push/pop stack과 유사하게 사용
//Addition, deletion, copy
//push : add an item to the end
fruit.push(5);
console.log(fruit);

//pop : removed an item from the end
const a = fruit.pop();
console.log(fruit);
console.log(a);

//unshift : add an item to the start
fruit.unshift(5);
console.log(fruit);

//shift : remove an item to the start
fruit.shift();
console.log(fruit);

//splice : remove an item by index position -> array 자체를 변경
fruit.splice(2, 1);
console.log(fruit);

fruit.splice(1, 1, 3, 5);
console.log(fruit);

//combine two arrays
const fruit2 = [11, 12];
const newFruit = fruit.concat(fruit2);
console.log(newFruit);

//Searching, find the index
//indexOf : 첫번째에 탐색되는 idx
console.log(fruit.indexOf(3));
console.log(fruit.indexOf(31));
//includes : 있는지 없는지(return bool)
console.log(fruit.includes(3));
console.log(fruit.includes(31));

fruit.push(3);
//lastIndexOf : 마지막에 탐색되는 idx
console.log(fruit.lastIndexOf(3));
console.log(fruit.indexOf(3));
