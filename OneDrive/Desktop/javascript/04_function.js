function printHello() {
  console.log("hello");
}
printHello();

function log(message) {
  console.log(message);
}

log("ASD");

//call by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

//call by value
function changeValue(data) {
  data = 4;
}
let data = 5;
changeValue(data);
console.log(data);

//Default parameters : 파라미터의 default value 지정
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi");

//Rest parameters : 배열 형태로 param 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  //for of [iterators] : 각 value를 arg에 넣어서 실행
  //const를 쓰는 이유는, arg가 {}안에서만 생존,
  //그 다음 루프에서는 다시 또 없어짐
  //block안에서 arg가 변하지 않는다면 let으로 선언할 필요 없음
  for (const arg of args) {
    console.log("for ~ of", arg);
  }

  for (const idx in args) {
    console.log("for ~ in", args[idx]);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("dream", "coding", "jiyoon");

function sum(a, b) {
  return a + b;
}

//Bad code
function upgradeUser(user) {
  if (user.point > 10) {
    //long logic..
  }
}

//Good code(Early Return, Early Exit is recommended)
//유효하지 않은 경우에 코드를 굳이 한 줄이라도 더 fetch하거나 execute할 필요가 없다는 것
function upgradeUser2(user) {
  if (user.point <= 10) return;
  //long logic...
}

//Anonymous function
const print = function () {
  console.log("print");
};
print();
//func은 object로 취급되니까, 사실상 같은 ref가르키는 것과 같음
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(4, 2));

//Callback function
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") printYes();
  else printNo();
}

const printYes = function () {
  console.log("yes!");
};

const printNo = function print() {
  console.log("no!");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

//Arrow function
const simplePrint = () => console.log("simplePrint");
const add = (a, b) => {
  return a + b;
};

//IIFE : 함수 선언하자마자 사용, 일회성으로 쓸때나 쓸만할 듯
(function hello() {
  console.log("IIFE");
})();

function calculate(command, a, b) {
  console.log(command(a, b));
}

const addCommand = (a, b) => a + b;
const subtractCommand = (a, b) => a - b;
const divideCommand = (a, b) => a / b;
const multiplyCommand = (a, b) => a * b;
const remainderCommand = (a, b) => a % b;

calculate(addCommand, 4, 2);
