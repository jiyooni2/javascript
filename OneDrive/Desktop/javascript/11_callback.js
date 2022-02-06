//Javascript is synchronous.
//Execute the code block in order after hoisting
//hoisting : var변수(let, const는 아님), function 선언 등이 제일 위로 올라감

console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000);
//Browser API, browser에게 1초뒤에 콜백함수 실행 요청
//응답을 기다리지 않고 다음 코드 실행
//브라우저에서 1초의 시간이 지난뒤에 실행하라고 하면 그 때 출력
console.log("3");

//Synchronous callback, 즉각적 실행
function printImmediately(print) {
  print();
} //hoisting에 의해 제일 위로 올라갔을 것

printImmediately(() => console.log("hello"));
//print callback 함수 전달, 어떤 타입의 콜백함수를 받는지는 알 수 없음

//Asynchronous callback : 언제 실행될지 알 수 없음
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
//hoisting

printWithDelay(() => console.log("async callback"), 1000);

//Callback Hell Example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
        //onSuccess callback 함수 부름
      } else {
        //포함되지 않으면 not found error 생성해서 onError callback
        onError(new Error("not Found"));
      }
    }, 2000);
  }

  //사용자의 역할을 받아와야 하는 나쁜 백엔드라 가정
  getRoles(user, onSuccess, onError) {
    if (user === "ellie") {
      onSuccess({ name: "ellie", role: "admin" });
    } else {
      onError(new Error("no access"));
    }
  }
}

const userStorage = new UserStorage();

const id = "ellie";
const password = "dream";

userStorage.loginUser(
  id,
  password,
  (id) => {
    userStorage.getRoles(
      id,
      (obj) => {
        console.log(`hello ${obj.name} you have ${obj.role} role`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

//이딴식으로 코드 쓰면
//1. 가독성 더러움
//  >비즈니스 로직 이해 어려움(프로젝트 진행 어려움)
//  >에러/디버깅 또한 어려움
