const obj1 = {}; //object literal
const obj2 = new Object(); //object constructor

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie);

delete ellie.hasJob;
console.log(ellie.hasJob);

//Computed Properties
console.log(ellie.name); //default 사용
console.log(ellie["name"]); //name : computed properties, runtime에 결정, 있는지 없는지 모를 때 사용

function makePerson(name, age) {
  return { name, age };
}
const person1 = { name: "bob", age: 2 };
const person2 = makePerson("ellie", 30);
console.log(person1);
console.log(person2);

//Constructor Function
function Person(name, age) {
  //this={}
  this.name = name;
  this.age = age;
  //return this;
}

const person4 = new Person("jiyoon", 25);
console.log(person4);

//In operator

console.log("name" in ellie);
console.log("fuck" in ellie);
console.log(ellie.random);

//for in , for of
for (key in ellie) {
  //key가 할당 배열에서는, idx가 key니까 idx가 주어짐
  console.log(key);
}

const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) console.log(array[i]);

for (i of array) console.log(i); //iterator의 값이 하나씩 들어감

//Cloning
const user = { name: "ellie", age: "20" };
const user2 = user;

user2.name = "coder";
console.log(user);
console.log(user2);

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}

console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color, mixed.size);
