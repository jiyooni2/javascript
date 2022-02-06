"use strict";

let temp = "ellie";
console.log(temp);
temp = "hello";
console.log(temp);

let a = 4;

const count = 17;
const size = 17.4;

console.log(`value : ${count}, type : ${typeof count}`);

const inf = 1 / 0;
const nInf = -1 / 0;
const Nan = "a" / 2;

console.log(inf, nInf, Nan);

const char = "c";
const me = "it's me";
const greeting = char + me;

console.log(greeting);

const canRead = true;
const test = 3 < 1;

console.log(canRead, typeof canRead);
console.log(test, typeof test);

let nothing = null;
let x;
console.log(nothing, x);

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 == gSymbol2);

let text = "hello";
console.log(text[0]);
console.log(text, typeof text);
text = 1;
console.log(text, typeof text);
text = "7" + 5;
console.log(text, typeof text);
text = "8" / "2";
console.log(text, typeof text);
text = "a" / "b";
console.log(text, typeof text);

text = "a" * 2;
console.log(text, typeof text);

const ellie = { name: "ellie", age: 20 };
console.log(ellie);
