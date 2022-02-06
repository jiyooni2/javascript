//비동기를 간편하게 처리할 수 있도록 도와주는 js내장 제공 object
//정상적으로 처리되면 결과와 함께 성공적 메세지
//처리 안되면 error 전달

//비동기의 깔끔한 처리를 위해서, 콜백을 쓰지 않고 할 수 있는 방법

//Promise is a JS object for asynchronous operation, callback함수 대신 유용하게 사용
//1.state : 프로세스가 오퍼레이션 수행 중인지/완료(성공/실패)
//  pending -> fulfilled(성공) or rejected(실패)
//
//2.producer(promise object) vs consumer(데이터 소비)

//Producer(promise obj)
const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read file) > asynchronous 처리
  console.log("doing something...");
  if (false) {
    reject(new Error("fucking error"));
  }

  setTimeout(() => {
    resolve("ellie"); //성공적 수행
    //resolve를 통해서 가공한 데이터 전달
  }, 2000);
});
//새로운 Promise obj(선언)만드는 순간 executor callback 자동적으로 바로 실행
//불필요한 연산 없도록 조심하기

//Consumer:then,catch,finally
promise
  //resolve callback함수에서 전달된 값이 then의 value로 전달
  .then((value) => {
    console.log("Completed");
    console.log(value);
  })
  //error 발생할 시 처리
  .catch((error) => {
    console.log("error");
    //안 쓰면, 그냥 넘어가겠지
  })
  .finally(() => console.log("finally"));

//Chaining
//Promise의 then은 결국 Promise return, 그 promise가지고 다시 catch 실행

//3.Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((value) => value * 2) //then에서는 값을 전달하거나 promise전달
  .then((value) => value * 3) //값을 전달하면, 그 값을 resolve하는 Promise객체를 전달=Promise.resolve(value);와 같음
  .then((value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value - 1), 1000);
    });
  })
  .then((value) => console.log(value));

function sleep(delay) {
  let start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

sleep(3000);
console.log("Start");

//4. Error handling
//3개의 Promise를 생성하는 순간 3개 다 병렬 실행, 함수를 실행해야 병렬 실행
//위에서의 선언과는 다른 점, 함수를 실행해야 new Promise를 생성하니까
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("i am getHen");
      resolve("Hen");
    }, 3000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am getEgg");
      resolve(`${hen}->"egg"`);
    }, 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>fri`), 3000);
  });

/*
getHen().then(console.log);
getEgg("hen").then(console.log);
cook("egg").then(console.log);
*/
//이 3개 코드 순차적으로 실행, 만약 시간 3,3,1로 했으면 3,1,2 순서로 출력되겠지

getHen()
  .then(getEgg) // = then (hen)=>getEgg(hen), then으로 받아오는 값을 getEgg로 넘겨줌
  .then(console.log) //console.log를 하면 return undefined가 됨, then문장은 이전 코드가 끝나야 param을 받고 다시 실행하니까
  //아무리 setTimeout이 1000이라도, getEgg를 더 빨리 실행할 수 가 없겠지
  .catch((error) => {
    return "bread";
  })
  .then(cook)
  .then(console.log)
  .catch((error) => console.log(error)); //이렇게 마지막에 넘겨줘도 then에서 chaining, error처리 ok
