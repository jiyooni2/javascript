//async & await
//promise를 간결하고, 간편하고 동기적(synchronous)으로 실행되는 것처럼 보이게 해줌
//promise chaining너무 많으면, 복잡해 보일 수 있음

//기존에 존재하는 것에 좀 더 감싸서 좀 더 살을 붙힌, syntactic sugar

//Promise가 적절한 상황이 있고, async & await이 적절한 상황이 있음 맞게 사용

function fetchUser() {
  //do network request in 10 secs...
  return "synchronous";
}
//Promise
//서버의 요청이 언제 올지는 모르겠지만, promise객체 가지고 있으면,
//then으로 callback 등록 해놓으면 완료 되는데로 실행해준다.

//asynchronous
function promiseFetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise"), 5000);
    //resolve, reject 호출하지 않으면 pending상태
  });
}

//한줄이 끝나야 다음 줄 처리하는, 동기적처리
const user = fetchUser(); //10초뒤에 user에 할당
console.log(user);
console.log("code doing well!");

const promiseUser = promiseFetchUser(); //그냥 넘어갑니다. promise가 오면 다시 할당해주고
promiseUser.then(console.log);
console.log("code doing well!");

//async : syntactic sugar
async function asyncFetchUser() {
  //별다른걸 해주지 않아도 자동적으로 함수안의 코드 블럭이 promise로 바뀜
  return "async";
}

const asyncUser = asyncFetchUser();
asyncUser.then(console.log);

//await

function delay(ms) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
} //3초 뒤에 resolve 호출하는 Promise전달

//await은 async 함수 안에서만 사용 가능
async function getApple() {
  await delay(1000); //await : delay(promise)가 끝날때까지 기다려준 뒤, 다음 작업 수행
  //throw "error";
  return "async Apple"; //Apple을 return하는 Promise
}

async function getBanana() {
  await delay(1000);
  return "async Banana";
}

function getBanana2() {
  return delay(3000).then(() => "Banana");
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple}+${banana}`);
  });
}
//pickFruits=asyncPickFruits
async function asyncPickFruits() {
  //error처리는 try~catch로 해야함
  const apple = await getApple(); //delay 기다림
  console.log("1", apple);
  const banana = await getBanana(); //delay 기다림
  console.log("2", banana);
  //순차적으로 수행하므로, 비효율적, 서로 연관이 없으면 기다릴 필요 없음
  return `async all : ${apple}+${banana}`;
}

asyncPickFruits().then(console.log);
getApple().then(console.log);
pickFruits().then(console.log);

function sleep(delay) {
  let start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

//await 병렬처리
async function parAsyncPickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  //promise만드는 순간 실행됨,
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `parallel : ${apple}+${banana}`;
}

parAsyncPickFruits().then(console.log);

//wait until all the promises are resolved or rejected
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

//제일 먼저 수행되는 하나만 출력
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then((res) => console.log("race", res));
