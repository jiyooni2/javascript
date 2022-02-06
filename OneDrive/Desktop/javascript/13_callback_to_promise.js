//Callback Hell Example

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
          //onSuccess callback 함수 부름
        } else {
          //포함되지 않으면 not found error 생성해서 onError callback
          reject(new Error("not Found"));
        }
      }, 2000);
    });
  }

  //사용자의 역할을 받아와야 하는 나쁜 백엔드라 가정
  getRoles(user) {
    return new Promise((resolve, reject) => {
      if (user === "ellie") {
        resolve({ name: "ellie", role: "admin" });
      } else {
        reject(new Error("no access"));
      }
    });
  }
}

const userStorage = new UserStorage();

const id = "ellie";
const password = "dream";

userStorage
  .loginUser(id, password)
  .then((user) => {
    console.log(`${user} login success`);
    return user;
  })
  .catch(console.log)
  .then((user) => userStorage.getRoles(user))
  .then((obj) => console.log(`hello ${obj.name} you have ${obj.role} role`))
  .catch(console.log);
